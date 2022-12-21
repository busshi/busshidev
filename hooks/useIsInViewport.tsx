import { useEffect, useState } from "react";

/**
 * Utility hook to check if an element is in the viewport
 *
 * @example
 * const isInViewport = useIsScrolling()
 */

export const useIsInViewport = (id: string) => {
  const [isInViewport, setIsInViewport] = useState(false);

  useEffect(() => {
    const element = document.getElementById(id);
    if (!element) return;
    const rect = element.getBoundingClientRect();
    setIsInViewport(
      rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <=
          (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <=
          (window.innerWidth || document.documentElement.clientWidth)
    );
  }, []);
};

// useEffect(() => {
//   const element = document.getElementById("intro");
//   if (element && isInViewport(element)) {
//     console.log(isInViewport(element));
//     window.addEventListener("scroll", () => useSscrollIntoView("solutions"), {
//       passive: true,
//     });
//   }
//   return () =>
//     window.removeEventListener("scroll", () =>
//       useSscrollIntoView("solutions")
//     );
// }, []);
