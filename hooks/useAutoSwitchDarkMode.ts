import { useEffect, useState } from "react";
import { useThemeState } from "../providers/Theme.provider";

/**
 * Utility hook to auto switch dark / light mode
 *
 * @example
 * const isDarkMode = useAutoSwitchDarkMode(elementId)
 */

const AUTO_SWITCH_DELAY = 1500;
const MAX_SWITCH = 2;

interface Color {
  top: {
    background: string;
    color: string;
  };
  screen: { background: string; color: string };
  implementation: { color: string };
}

export const useAutoSwitchDarkMode = (
  isElementVisible: boolean
): [Color, (value: Color) => void] => {
  const { theme, isExampleDark, setIsExampleDark } = useThemeState();
  const [count, setCount] = useState(0);

  const [colors, setColors] = useState({
    top: {
      background: theme.cardBackground,
      color: theme.fontColor,
    },
    screen: { background: "black", color: "white" },
    implementation: { color: theme.secondaryFontColor },
  });

  /**
   * Auto switch dark mode on preview
   */
  useEffect(() => {
    const autoSwitch = () => {
      /**
       * Only auto switch MAX_SWITCH times
       */
      if (isElementVisible && count < MAX_SWITCH) {
        setIsExampleDark(!isExampleDark);
        setColors({
          top: {
            background: isExampleDark
              ? "var(--card-light-background)"
              : "var(--card-dark-background)",
            color: isExampleDark
              ? "var(--main-light-font-color)"
              : "var(--main-dark-font-color)",
          },
          screen: {
            background: !isExampleDark ? "black" : "white",
            color: isExampleDark ? "black" : "white",
          },
          implementation: {
            color: !isExampleDark
              ? "var(--secondary-dark-font-color)"
              : "var(--secondary-light-font-color)",
          },
        });
        setCount(count + 1);
      }
    };

    const interval = setInterval(autoSwitch, AUTO_SWITCH_DELAY);

    return () => {
      interval && clearInterval(interval);
    };
  }, [isExampleDark, isElementVisible, count]);

  useEffect(() => {
    if (!isElementVisible) setCount(0);
  }, [isElementVisible]);

  return [colors, setColors];
};
