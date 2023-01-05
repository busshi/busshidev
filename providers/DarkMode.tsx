import React, {
  ReactNode,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { useIsDarkMode } from "../hooks/useIsDarkMode";

interface DarkModeContextType {
  isDarkMode: boolean;
  setIsDarkMode: (value: boolean) => void;
}

const DarkModeContext = React.createContext<DarkModeContextType | null>(null);

interface Props {
  children: ReactNode;
}

export const DarkModeProvider = ({ children }: Props) => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const isDark = useIsDarkMode();

  const value = {
    isDarkMode,
    setIsDarkMode,
  };

  useEffect(() => {
    setIsDarkMode(isDark);
  }, [isDark]);

  return (
    <DarkModeContext.Provider value={value}>
      {children}
    </DarkModeContext.Provider>
  );
};

export const useDarkModeState = (): DarkModeContextType => {
  const context = useContext(DarkModeContext);

  if (context === null) {
    throw new Error(
      `Received null while calling useContext(DarkModeContext), did you forget to put the provider ?`
    );
  }

  return context;
};

export default DarkModeProvider;
