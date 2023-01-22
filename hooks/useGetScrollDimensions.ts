import { useEffect, useState } from "react";

/**
 * Utility hook to get the scroll width of an element
 *
 * @param {string} id - element ID
 *
 * @example
 * const scrollDimensions = useGetScrollDimensions(elementId)
 */

export const useGetScrollDimensions = (
  id: string
): { width: number; height: number } => {
  const [scrollDimensions, setScrollDimensions] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    // Handler to call on resize
    const handleScroll = () => {
      const element = document.getElementById(id);
      if (element)
        setScrollDimensions({
          width: element.scrollWidth,
          height: element.scrollHeight,
        });
    };

    // Add event listener
    window.addEventListener("resize", handleScroll);

    handleScroll();

    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleScroll);
  }, [id]);

  return scrollDimensions;
};
