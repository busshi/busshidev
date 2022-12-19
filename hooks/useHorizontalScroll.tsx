import { useEffect, useState } from "react";

/**
 * Utility hook to check if an element is in viewport
 *
 * @param id - Element ID
 * @example
 * const useInViewPort = useInViewPort(elementId)
 */

export const useInViewPort = (id: string) => {
  const [inViewPort, setInViewPort] = useState(false);

  useEffect(() => {
    const el = document.getElementById(id);
    const bounding = el?.getBoundingClientRect();

    if (
      bounding!.top >= 0 &&
      bounding!.left >= 0 &&
      bounding!.right <=
        (window.innerWidth || document.documentElement.clientWidth) &&
      bounding!.bottom <=
        (window.innerHeight || document.documentElement.clientHeight)
    )
      setInViewPort(true);
    else setInViewPort(false);
  });

  return inViewPort;
};
