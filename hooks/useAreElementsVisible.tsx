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

export default function useAreElementsVisible<Element extends HTMLElement>(
  len: number,
  offset: number = 0,
  throttleMilliseconds: number = 100
): [boolean[], RefObject<Element>[]] {
  const [isVisible, setIsVisible] = useState<boolean[]>([]);
  let currentElements: RefObject<Element>[] = [];
  let areVisible: boolean[] = [];

  for (let i = 0; i < len; i++) {
    const currentElement = createRef<Element>();
    console.log(currentElement);
    currentElements.push(currentElement);
    console.log(currentElements);
  }

  const onScroll = throttle(() => {
    for (let i = 0; i < len; i++) {
      if (!currentElements[i].current) areVisible[i] = false;
      if (currentElements && currentElements.length) {
        const top = currentElements[0].current?.getBoundingClientRect().top;
        areVisible[i] =
          top! + offset >= 0 && top! - offset <= window.innerHeight;
        //      return;
      }
      setIsVisible(areVisible);
    }
  }, throttleMilliseconds);

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  });

  return [isVisible, currentElements];
}
