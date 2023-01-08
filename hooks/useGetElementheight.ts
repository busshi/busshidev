import { useEffect, useState } from "react";

/**
 * Utility hook to get element height
 *
 * @param {string} id - Element ID
 *
 * @example
 * const height = useGetElementHeight(elementId)
 */

export const useGetElementHeight = (id: string) => {
  const [height, setHeight] = useState(0);

  useEffect(() => {
    // Handler to call on window resize
    const handleResize = () => {
      const element = document.getElementById(id);
      if (element) setHeight(element.offsetHeight);
    };

    // Add event listener
    window.addEventListener("resize", handleResize);

    handleResize();

    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, [id]);

  return height;
};
