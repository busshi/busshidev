import { useEffect, useState } from "react";

/**
 * Utility hook to check if user is scrolling down / up
 *
 * @example
 * const isScrolling = useIsScrolling()
 */

export const useIsScrolling = () => {
  const [isScrolling, setIsScrolling] = useState("none");

  let oldValue = 0;
  let newValue = 0;

  const onScroll = () => {
    newValue = window.pageYOffset;
    if (oldValue < newValue) {
      setIsScrolling("down");
    } else if (oldValue > newValue) {
      setIsScrolling("up");
    }
    oldValue = newValue;
  };

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  });

  return isScrolling;
};
