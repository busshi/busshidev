import { useWindowSize } from "./useWindowSize";

export const useIsMobile = () => {
  const size = useWindowSize();
  return size.width <= 768;
};
