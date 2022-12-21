import { useEffect, useState } from "react";

/**
 * Utility hook to get the current scroll position
 *
 * @param id string - element ID
 *
 * @example
 * const scrollPosition = useGetCurrentPosition()
 */

export const useGetCurrentPosition = (id: string): number => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const element = document.getElementById(id);
    if (element) {
      console.log(
        element.scrollHeight,
        element.clientHeight,
        element.offsetHeight
      );
      const diff = element.scrollHeight - element.offsetHeight;
      console.log(diff);
      setScrollPosition(element.scrollTop / diff);
    }
  }, [id]);

  return scrollPosition;
};
