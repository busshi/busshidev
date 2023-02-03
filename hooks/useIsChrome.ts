import { useEffect, useState } from "react";

/**
 * Utility hook to determine if Chrome browser is used
 *
 * @example
 * const isChrome = useIsChrome()
 */

export const useIsChrome = () => {
  const [isChrome, setIsChrome] = useState(false);

  useEffect(() => {
    const { userAgent } = navigator;
    const match =
      userAgent.match(
        /(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i
      ) || [];
    if (match[1] === "Chrome") setIsChrome(true);
  });

  return isChrome;
};
