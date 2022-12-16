import React, { ReactNode, useContext, useEffect, useState } from "react";
import { COLORS } from "../lib/constants";
import { Color } from "../types/interfaces";

interface HighlightedColorContextType {
  highlighted: number;
  setHighlighted: (value: number) => void;
  highlightedColor: Color;
  setHighlightedColor: (value: Color) => void;
}

const HighlightedColorContext =
  React.createContext<HighlightedColorContextType | null>(null);

interface Props {
  children: ReactNode;
}

export const HighlightedColorProvider = ({ children }: Props) => {
  const [highlighted, setHighlighted] = useState(0);
  const [highlightedColor, setHighlightedColor] = useState({
    start: COLORS[0].start,
    stop: COLORS[0].stop,
  });

  useEffect(() => {
    const intervalId = setInterval(() => {
      setHighlighted((c) => (c + 1 >= 4 ? 0 : c + 1));
      setHighlightedColor(COLORS[highlighted + 1 >= 4 ? 0 : highlighted + 1]);
    }, 3000);
    return () => clearInterval(intervalId);
  }, [highlighted]);

  const value = {
    highlighted,
    setHighlighted,
    highlightedColor,
    setHighlightedColor,
  };

  return (
    <HighlightedColorContext.Provider value={value}>
      {children}
    </HighlightedColorContext.Provider>
  );
};

export const useHighlightedColorState = (): HighlightedColorContextType => {
  const context = useContext(HighlightedColorContext);

  if (context === null) {
    throw new Error(
      `Received null while calling useContext(HighlightedColorContext), did you forget to put the provider ?`
    );
  }

  return context;
};

export default HighlightedColorProvider;
