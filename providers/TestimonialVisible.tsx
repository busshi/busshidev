import React, {
  ReactNode,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { TESTIMONIALS } from "../lib/testimonials";

interface TestimonialVisibleContextType {
  refs: any;
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
  // eslint-disable-next-line
  const refs = TESTIMONIALS.map(() => useRef(null));

  const value = {
    refs,
    testimonialIdVisible,
    setTestimonialIdVisible,
  };

  useEffect(() => {
    let observer: IntersectionObserver;
    refs.map((ref, i) => {
      const cachedRef = ref.current;
      observer = new IntersectionObserver(
        ([e]) => {
          if (e.intersectionRatio > 0.7) setTestimonialIdVisible(i);
        },
        {
          threshold: [0.7],
          rootMargin: "0px",
        }
      );
      cachedRef && observer.observe(cachedRef);
    });
    return () => observer.disconnect();
  }, [refs]);

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
