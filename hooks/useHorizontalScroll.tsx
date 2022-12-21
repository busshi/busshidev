import { useCallback, useEffect, useState } from "react";
import { useGetElementWidth } from "./useGetElementWidth";

/**
 * Utility hook to check if an element is in viewport
 *
 * @param id - Element ID
 * @example
 * const useInViewPort = useInViewPort(elementId)
 */

export const useHorizontalScroll = (id: string) => {
  // const [isLeft, setIsLeft] = useState(false);
  // const [isRight, setIsRight] = useState(false);
  // const [old, setOld] = useState(0);

  const width = useGetElementWidth(id);
  console.log("width", width);

  const onScroll = useCallback((event: any) => {
    const elem = document.getElementById(id);
    console.log(elem);
    if (!elem) return;

    console.log(
      "qw",
      elem.getBoundingClientRect().right,
      elem.getBoundingClientRect().x,
      elem.getBoundingClientRect().left,
      elem.getBoundingClientRect().width,
      elem.offsetWidth,
      elem.scrollLeft
    );
    // const { pageXOffset, scrollX } = window;
    // console.log("xOffset", pageXOffset, "scrollX", scrollX);
    // setScrollY(window.pageYOffset);
  }, []);

  useEffect(() => {
    const elem = document.getElementById(id);
    console.log(elem);
    if (!elem) return;
    console.log("qw", elem.clientWidth);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return {};
};
