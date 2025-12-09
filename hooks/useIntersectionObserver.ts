import { createRef, RefObject, useEffect, useState } from "react";

/**
 * Utility hook to check if an element is in the viewport
 *
 * @param {number | number[]} threshold - Breaking points list array
 * @see https://developer.mozilla.org/fr/docs/Web/API/IntersectionObserver/thresholds
 * 
 * @param {string} rootMargin - Margin element like CSS "2px 1px 2px 1px"
 * @see https://developer.mozilla.org/fr/docs/Web/API/IntersectionObserver/rootMargin

 * @example
 * const [isVisible, ref] = useIntersectionObserver<HTMLDivElement>()
 */

export default function useIntersectionObserver<Element extends HTMLElement>(
  threshold: number | number[] = 1,
  rootMargin: string = "0px"
): [boolean, RefObject<Element>] {
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
        threshold,
        rootMargin,
      }
    );
    cachedRef && observer.observe(cachedRef);
    return () => observer.disconnect();
  }, [ref]);

  return [isElementVisible, ref];
}
