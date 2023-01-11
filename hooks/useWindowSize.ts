import { useEffect, useState } from "react";

/**
 * Utility hook to get screen dimensions
 *
 * @example
 * const windowSize = useWindowSize()
 */

export const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: 1024,
    height: 768,
  });

  // only execute all the code below in client side
  useEffect(() => {
    // Handler to call on window resize
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    // Add event listener
    window.addEventListener("resize", handleResize);

    handleResize();

    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return windowSize;
};
