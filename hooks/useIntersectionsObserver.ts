import { createRef, RefObject, useEffect, useRef, useState } from "react";

/**
 * Utility hook to if an element is in the viewport

 * @param {string[]} elements - Elements list
*
 * @param {number | number[]} threshold - Breaking points list array
 * @see https://developer.mozilla.org/fr/docs/Web/API/IntersectionObserver/thresholds
 * 
 * @param {string} rootMargin - Margin element like CSS "2px 1px 2px 1px"
 * @see https://developer.mozilla.org/fr/docs/Web/API/IntersectionObserver/rootMargin

 * @example
 * const areVisible = useIntersectionsObserver<HTMLDivElement>([item1, item2, item3])
 */

export default function useIntersectionsObserver<Element extends HTMLElement>(
  elements: string[],
  threshold: number | number[] = 1,
  rootMargin: string = "0px"
): [boolean, RefObject<Element>[]] {
  const [isElementVisible, setIsElementVisible] = useState(false);
  const refs = elements.map(() => useRef(null));

  useEffect(() => {
    let observer: IntersectionObserver;
    refs.map((ref) => {
      const cachedRef = ref.current;
      observer = new IntersectionObserver(
        ([e]) => {
          if (e.intersectionRatio > 0.7) setIsElementVisible(true);
        },
        {
          threshold: threshold,
          rootMargin: rootMargin,
        }
      );
      cachedRef && observer.observe(cachedRef);
    });
    return () => observer.disconnect();
  }, [refs]);

  // useEffect(() => {
  //   const cachedRef = ref.current;
  //   const observer = new IntersectionObserver(
  //     ([e]) => {
  //       if (e.isIntersecting) setIsElementVisible(true);
  //       else if (!!!e.isIntersecting) setIsElementVisible(false);
  //     },
  //     {
  //       threshold,
  //       rootMargin,
  //     }
  //   );
  //   cachedRef && observer.observe(cachedRef);
  //   return () => observer.disconnect();
  // }, [ref]);

  return [isElementVisible, refs];
}
