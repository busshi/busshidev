import React, { ReactNode, useContext, useEffect, useState } from "react";
// import { useIsDarkMode } from "../hooks/useIsDarkMode";

interface Theme {
  mainColor: string;
  mainColorInverted: string;
  fontColor: string;
  secondaryFontColor: string;
  middleFontColor: string;
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
  isExampleDark: boolean;
  setIsExampleDark: (value: boolean) => void;
}

const ThemeContext = React.createContext<ThemeContextType | null>(null);

const colors = {
  dark: {
    mainColor: "var(--main-dark-color)",
    mainColorInverted: "var(--main-light-color)",
    fontColor: "var(--main-dark-font-color)",
    secondaryFontColor: "var(--secondary-dark-font-color)",
    middleFontColor: "var(--middle-font-color)",
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
    background: "var(--main-light-color)",
    backgroundColor: "var(--light-background)",
    cardBackground: "var(--card-light-background)",
    footerBackground: "var(--footer-light-background)",
  },
};

interface Props {
  children: ReactNode;
}

export const ThemeProvider = ({ children }: Props) => {
  //const isDark = useIsDarkMode();
  const [theme, setTheme] = useState(colors.dark);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isExampleDark, setIsExampleDark] = useState(true);

  const value = {
    theme,
    setTheme,
    isDarkMode,
    setIsDarkMode,
    isExampleDark,
    setIsExampleDark,
  };

  /**
   * Effect to trigger auto switch based on the system preferences (disabled)
   */
  // useEffect(() => {
  //   setIsDarkMode(isDark);
  // }, [isDark]);

  useEffect(() => {
    setTheme(isDarkMode ? colors.dark : colors.light);
    setIsExampleDark(isDarkMode);
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
