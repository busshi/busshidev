import { useEffect, useState } from "react";

/**
 * Utility hook to check if an element is in viewport
 *
 * @param id string - element ID
 *
 * @example
 * const scrollWidth = usegetScrollWidth(elementId)
 */

export const useGetScrollWidth = (id: string): number => {
  const [scrollWidth, setScrollWidth] = useState(0);

  useEffect(() => {
    const element = document.getElementById(id);
    if (element) setScrollWidth(element.scrollWidth - element.clientWidth);
  }, [id]);

  return scrollWidth;
};
