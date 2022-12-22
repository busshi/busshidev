import { createRef, RefObject, useEffect, useState } from "react";

/**
 * Utility hook to if an element is in the viewport
 *
 * @example
 * const isVisible = useIntersectionObserver<HTMLDivElement>()
 */

export default function useIntersectionObservere<
  Element extends HTMLElement
>(): [boolean, RefObject<Element>] {
  const [isElementVisible, setIsElementVisible] = useState(false);
  const ref = createRef<Element>();

  useEffect(() => {
    const cachedRef = ref.current;
    const observer = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setIsElementVisible(true);
        else if (!!!e.isIntersecting) setIsElementVisible(false);
      },
      {
        threshold: [1],
        rootMargin: "0px",
      }
    );
    cachedRef && observer.observe(cachedRef);
    return () => observer.disconnect();
  }, [ref]);

  return [isElementVisible, ref];
}
