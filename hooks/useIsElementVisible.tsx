import { createRef, RefObject, useEffect, useState } from "react";
import throttle from "lodash.throttle";

/**
 * Utility hook to check if an element is in viewport
 *
 * @param {number} offset - Number of pixels up to the observable element from the top
 * @param {number} throttleMilliseconds - Throttle observable listener, in ms

* @example
 * const isElementVisible = useIsElementVisible()
 */

export default function useIsElementVisible<Element extends HTMLElement>(
  offset: number = 0,
  throttleMilliseconds: number = 100
): [boolean, RefObject<Element>] {
  const [isVisible, setIsVisible] = useState(false);
  const currentElement = createRef<Element>();
  const onScroll = throttle(() => {
    if (!currentElement.current) {
      setIsVisible(false);
      return;
    }
    const top = currentElement.current.getBoundingClientRect().top;
    setIsVisible(top + offset >= 0 && top - offset <= window.innerHeight);
  }, throttleMilliseconds);

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  });

  return [isVisible, currentElement];
}
