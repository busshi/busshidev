import React, { ReactNode, useContext, useEffect, useState } from "react";

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
  isDarkMode: boolean;
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

export const ThemeProvider = ({ children }: Props) => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  // Always follows the system's color scheme — there's no manual switcher,
  // so this is the only source of truth, and it stays live if the user
  // changes their OS setting while the page is open.
  useEffect(() => {
    const media = window.matchMedia("(prefers-color-scheme: dark)");
    setIsDarkMode(media.matches);

    const listener = (event: MediaQueryListEvent) => setIsDarkMode(event.matches);
    media.addEventListener("change", listener);
    return () => media.removeEventListener("change", listener);
  }, []);

  const value = {
    theme: isDarkMode ? colors.dark : colors.light,
    isDarkMode,
  };

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
