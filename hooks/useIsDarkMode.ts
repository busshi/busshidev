import { useEffect, useState } from "react";

/**
 * Utility hook to determine if dark mode is on
 *
 * @example
 * const isDarkMode = useIsDarkMode()
 */

export const useIsDarkMode = () => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  useEffect(() => {
    if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    )
      setIsDarkMode(true);
    else if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: light)").matches
    )
      setIsDarkMode(false);

    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", (event) => {
        setIsDarkMode(event.matches ? true : false);
      });
    return () => window.removeEventListener("change", () => {});
  }, []);
  return isDarkMode;
};
