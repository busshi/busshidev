import { useEffect, useState } from "react";

/**
 * Utility hook to determine if dark mode is on
 *
 * @example
 * const isUserInactive = useIsUserInactive()
 */

export const useIsUserInactive = () => {
  const [isUserInactive, setIsUserInactive] = useState<boolean>(false);

  useEffect(() => {
    const timeoutInSeconds = 10 * 1000;
    let timeout: NodeJS.Timeout;

    const resetTimer = () => {
      setIsUserInactive(false);
      timeout && clearTimeout(timeout);
      timeout = setTimeout(() => setIsUserInactive(true), timeoutInSeconds);
    };
    document.addEventListener("mousemove", resetTimer);
    document.addEventListener("mousedown", resetTimer);
    document.addEventListener("scroll", resetTimer);
    document.addEventListener("keypress", resetTimer);
    document.addEventListener("touchmove", resetTimer);

    return () => {
      timeout && clearTimeout(timeout);
      window.removeEventListener("mousemove", resetTimer);
      window.removeEventListener("mousedown", resetTimer);
      window.removeEventListener("scroll", resetTimer);
      window.removeEventListener("keypress", resetTimer);
      window.removeEventListener("touchmove", resetTimer);
    };
  }, []);

  return isUserInactive;
};
