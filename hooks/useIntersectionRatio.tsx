import { createRef, RefObject, useEffect, useState } from "react";
import { buildThresholdList } from "../lib/observerIntersection";

/**
 * Utility hook to get the intersection ratio of a visible element using intersection observer
 *
 * @param {string} rootMargin - Margin element like CSS "2px 1px 2px 1px"
 * @see https://developer.mozilla.org/fr/docs/Web/API/IntersectionObserver/rootMargin
 *
 * @param {number | number[]} threshold - Breaking points list array
 * @see https://developer.mozilla.org/fr/docs/Web/API/IntersectionObserver/thresholds
 *
 * @example
 * const [intersectionRatio, ref] = useIntersectionRatio<HTMLDivElement>(buildThresholdList(), "200px");
 */

export default function useIntersectionRatio<Element extends HTMLElement>(
  rootMargin: string = "0px",
  threshold?: number | number[]
): [number, RefObject<Element>] {
  const [intersectionRatio, setIntersectionRatio] = useState<number>(0);
  const ref = createRef<Element>();

  useEffect(() => {
    const cachedRef = ref.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        // increase ration to say 80% is 100% for a better visibility
        const ratio = (entry.intersectionRatio * 100) / 80;
        setIntersectionRatio(entry.intersectionRatio);
      },
      {
        threshold: threshold || buildThresholdList(),
        rootMargin,
      }
    );
    cachedRef && observer.observe(cachedRef);
    return () => observer.disconnect();
  }, [ref]);

  return [intersectionRatio, ref];
}
