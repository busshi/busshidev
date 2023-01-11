import { useWindowSize } from "./useWindowSize";

/**
 * Utility hook to determine if it is a mobile screen
 *
 * @example
 * const isMobile = useIsMobile()
 */

export const useIsMobile = () => {
  const size = useWindowSize();
  return size.width <= 768;
};
