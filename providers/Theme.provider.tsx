import React, { ReactNode, useContext, useEffect, useState } from "react";
// import { useIsDarkMode } from "../hooks/useIsDarkMode";

interface Theme {
  mainColor: string;
  mainColorInverted: string;
  fontColor: string;
  secondaryFontColor: string;
  middleFontColor: string;
  sectionTitleColor: string;
  background: string;
  backgroundColor: string;
  cardBackground: string;
  footerBackground: string;
}

interface ThemeContextType {
  theme: Theme;
  setTheme: (value: any) => void;
  isDarkMode: boolean;
  setIsDarkMode: (value: boolean) => void;
}

const ThemeContext = React.createContext<ThemeContextType | null>(null);

const colors = {
  dark: {
    mainColor: "var(--main-dark-color)",
    mainColorInverted: "var(--main-light-color)",
    fontColor: "var(--main-dark-font-color)",
    secondaryFontColor: "var(--secondary-dark-font-color)",
    middleFontColor: "var(--middle-font-color)",
    sectionTitleColor: "var(--middle-font-color)",
    background: "var(--main-dark-color)",
    backgroundColor: "var(--dark-background)",
    cardBackground: "var(--card-dark-background)",
    footerBackground: "var(--footer-dark-background)",
  },
  light: {
    mainColor: "var(--main-light-color)",
    mainColorInverted: "var(--main-dark-color)",
    fontColor: "var(--main-light-font-color)",
    secondaryFontColor: "var(--secondary-light-font-color)",
    middleFontColor: "var(--middle-font-color)",
    sectionTitleColor: "var(--section-title-light)",
    background: "var(--main-light-color)",
    backgroundColor: "var(--light-background)",
    cardBackground: "var(--card-light-background)",
    footerBackground: "var(--footer-light-background)",
  },
};

interface Props {
  children: ReactNode;
}

const THEME_STORAGE_KEY = "busshidev-theme";

export const ThemeProvider = ({ children }: Props) => {
  const [theme, setTheme] = useState(colors.dark);
  const [isDarkMode, setIsDarkModeState] = useState(true);

  /**
   * Follow the system's color scheme by default. If the user explicitly
   * toggles the switcher, their choice is persisted and takes over from
   * then on, even if the system preference changes afterwards.
   */
  useEffect(() => {
    const stored = window.localStorage.getItem(THEME_STORAGE_KEY);
    if (stored === "dark" || stored === "light") {
      setIsDarkModeState(stored === "dark");
      return;
    }

    const media = window.matchMedia("(prefers-color-scheme: dark)");
    setIsDarkModeState(media.matches);

    const listener = (event: MediaQueryListEvent) => {
      if (!window.localStorage.getItem(THEME_STORAGE_KEY)) {
        setIsDarkModeState(event.matches);
      }
    };
    media.addEventListener("change", listener);
    return () => media.removeEventListener("change", listener);
  }, []);

  const setIsDarkMode = (value: boolean) => {
    window.localStorage.setItem(THEME_STORAGE_KEY, value ? "dark" : "light");
    setIsDarkModeState(value);
  };

  const value = {
    theme,
    setTheme,
    isDarkMode,
    setIsDarkMode,
  };

  useEffect(() => {
    setTheme(isDarkMode ? colors.dark : colors.light);
  }, [isDarkMode]);

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

export const useThemeState = (): ThemeContextType => {
  const context = useContext(ThemeContext);

  if (context === null) {
    throw new Error(
      `Received null while calling useContext(ThemeContext), did you forget to put the provider ?`
    );
  }

  return context;
};

export default ThemeProvider;
