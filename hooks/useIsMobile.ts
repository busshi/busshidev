import { useEffect, useState } from "react";
import { useWindowSize } from "./useWindowSize";

/**
 * Utility hook to determine if it is a mobile screen
 *
 * @example
 * const isMobile = useIsMobile()
 */

export const useIsMobile = () => {
  const size = useWindowSize();
  const [isMobile, setIsMobile] = useState(size.width <= 768);

  useEffect(() => {
    setIsMobile(size.width <= 768);
  }, [size.width]);

  return isMobile;
};
