import React, { ReactNode, useContext, useEffect, useState } from "react";
import { Color, colors } from "../lib/constants";

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
    start: colors[0].start,
    stop: colors[0].stop,
  });

  useEffect(() => {
    const intervalId = setInterval(() => {
      setHighlighted((c) => (c + 1 >= 4 ? 0 : c + 1));
      setHighlightedColor(colors[highlighted + 1 >= 4 ? 0 : highlighted + 1]);
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
