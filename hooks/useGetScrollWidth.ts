import { useEffect, useState } from "react";

/**
 * Utility hook to get the scroll width of an element
 *
 * @param id string - element ID
 *
 * @example
 * const scrollWidth = useGetScrollWidth(elementId)
 */

export const useGetScrollWidth = (id: string): number => {
  const [scrollWidth, setScrollWidth] = useState(0);

  useEffect(() => {
    const element = document.getElementById(id);
    if (element) setScrollWidth(element.scrollWidth);
  }, [id]);

  return scrollWidth;
};
