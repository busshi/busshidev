import React, { ReactNode, useContext, useState } from "react";

interface TestimonialVisibleContextType {
  testimonialIdVisible: number;
  setTestimonialIdVisible: (value: number) => void;
}

const TestimonialVisibleContext =
  React.createContext<TestimonialVisibleContextType | null>(null);

interface Props {
  children: ReactNode;
}

export const TestimonialVisibleProvider = ({ children }: Props) => {
  const [testimonialIdVisible, setTestimonialIdVisible] = useState(0);

  const value = {
    testimonialIdVisible,
    setTestimonialIdVisible,
  };

  return (
    <TestimonialVisibleContext.Provider value={value}>
      {children}
    </TestimonialVisibleContext.Provider>
  );
};

export const useTestimonialVisibleState = (): TestimonialVisibleContextType => {
  const context = useContext(TestimonialVisibleContext);

  if (context === null) {
    throw new Error(
      `Received null while calling useContext(TestimonialVisibleContext), did you forget to put the provider ?`
    );
  }

  return context;
};

export default TestimonialVisibleProvider;
