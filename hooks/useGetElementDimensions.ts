import { useEffect, useState } from "react";

/**
 * Utility hook to get element dimensions
 *
 * @param {string} id - Element ID
 *
 * @example
 * const dimensions = useGetElementDimensions(elementId)
 */

export const useGetElementDimensions = (id: string) => {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    // Handler to call on window resize
    const handleResize = () => {
      const element = document.getElementById(id);
      if (element)
        setDimensions({
          width: element.offsetWidth,
          height: element.offsetHeight,
        });
    };

    // Add event listener
    window.addEventListener("resize", handleResize);

    handleResize();

    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, [id]);

  return dimensions;
};
