import { useEffect, useState } from "react";

/**
 * Utility hook to get the scroll height
 *
 * @param id string - element ID
 *
 * @example
 * const scrollHeight = useGetScrollheigth(elementId)
 */

export const useGetScrollHeight = (id: string): number => {
  const [scrollHeight, setScrollHeight] = useState(0);

  useEffect(() => {
    const element = document.getElementById(id);
    if (element) setScrollHeight(element.scrollHeight);
  }, [id]);

  return scrollHeight;
};
