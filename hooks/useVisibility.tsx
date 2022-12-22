import { useEffect, useState } from "react";

/**
 * Utility hook to get visibility percentage
 *
 * @example
 * useVisibility()
 */

export const useVisibility = () => {
  const [windowSize, setWindowSize] = useState();

  useEffect(() => {}, []);
  return windowSize;
};
