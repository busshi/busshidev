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

// Semantic CSS custom properties whose actual values flip via the
// [data-theme] attribute (see pages/styles/app.css) instead of picking
// between separate dark/light variable names here — the same names
// resolve to the right theme regardless of isDarkMode, so nothing here
// needs to change once the attribute is set. That attribute is applied
// by the blocking script in pages/_document.tsx before the browser's
// first paint, which is what avoids the flash a purely JS-driven pick
// would cause on load.
const theme: Theme = {
  mainColor: "var(--main-color)",
  mainColorInverted: "var(--main-color-inverted)",
  fontColor: "var(--font-color)",
  secondaryFontColor: "var(--secondary-font-color)",
  middleFontColor: "var(--middle-font-color)",
  sectionTitleColor: "var(--section-title-color)",
  background: "var(--main-color)",
  backgroundColor: "var(--page-background)",
  cardBackground: "var(--card-background)",
  footerBackground: "var(--footer-background)",
};

// A handful of components (logo/asset swapping, filters) branch on
// isDarkMode directly rather than through the theme object above, so
// this reads the value the blocking script already set on <html>
// before hydration, instead of defaulting to true and correcting after
// mount — matches what the browser already painted as closely as
// React's hydration model allows.
const getInitialIsDarkMode = () => {
  if (typeof document === "undefined") return true;
  return document.documentElement.dataset.theme !== "light";
};

interface Props {
  children: ReactNode;
}

export const ThemeProvider = ({ children }: Props) => {
  const [isDarkMode, setIsDarkMode] = useState(getInitialIsDarkMode);

  // Always follows the system's color scheme — there's no manual switcher,
  // so this is the only source of truth, and it stays live if the user
  // changes their OS setting while the page is open.
  useEffect(() => {
    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const applyTheme = (isDark: boolean) => {
      setIsDarkMode(isDark);
      document.documentElement.dataset.theme = isDark ? "dark" : "light";
    };

    applyTheme(media.matches);

    const listener = (event: MediaQueryListEvent) => applyTheme(event.matches);
    media.addEventListener("change", listener);
    return () => media.removeEventListener("change", listener);
  }, []);

  const value = { theme, isDarkMode };

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
