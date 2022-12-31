import React, { ReactNode, useContext, useState } from "react";

interface CalendlyVisibleContextType {
  isCalendlyVisible: boolean;
  setIsCalendlyVisible: (value: boolean) => void;
}

const CalendlyVisibleContext =
  React.createContext<CalendlyVisibleContextType | null>(null);

interface Props {
  children: ReactNode;
}

export const CalendlyVisibleProvider = ({ children }: Props) => {
  const [isCalendlyVisible, setIsCalendlyVisible] = useState(false);

  const value = {
    isCalendlyVisible,
    setIsCalendlyVisible,
  };

  return (
    <CalendlyVisibleContext.Provider value={value}>
      {children}
    </CalendlyVisibleContext.Provider>
  );
};

export const useCalendlyVisibleState = (): CalendlyVisibleContextType => {
  const context = useContext(CalendlyVisibleContext);

  if (context === null) {
    throw new Error(
      `Received null while calling useContext(CalendlyVisibleContext), did you forget to put the provider ?`
    );
  }

  return context;
};

export default CalendlyVisibleProvider;
