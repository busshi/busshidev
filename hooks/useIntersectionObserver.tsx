import { useEffect, useRef } from "react";
import { useTestimonialVisibleState } from "../providers/TestimonialVisible";
import { Testimonial } from "../types/interfaces";

/**
 * Utility hook to determine which element of an array is in the viewport
 *
 * @example
 * useIntersectionObserver()
 */

export const useIntersectionObserver = (items: Testimonial[]) => {
  const { setTestimonialIdVisible } = useTestimonialVisibleState();

  // eslint-disable-next-line
  const refs = items.map(() => useRef(null));

  useEffect(() => {
    let observer: IntersectionObserver;
    refs.map((ref, i) => {
      const cachedRef = ref.current;
      observer = new IntersectionObserver(
        ([e]) => {
          if (e.intersectionRatio > 0.7) setTestimonialIdVisible(i);
        },
        {
          threshold: [0.75],
          rootMargin: "0px",
        }
      );
      cachedRef && observer.observe(cachedRef);
    });
    return () => observer.disconnect();
  }, [refs]);

  return refs;
};
