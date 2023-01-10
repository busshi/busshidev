import { useEffect } from "react";
import { buildThresholdList } from "../lib/observerIntersection";

/**
 * Utility function to animate element visibility
 * Add an attribute to the element to trigger the CSS
 *
 * @param {string} rootMargin - Element margin in pixels
 *
 * @example
 * useSlideIntoView("50px 0px")
 */

export const useSlideIntoView = (rootMargin: string = "-50px 50px") => {
  const elementClassName = ".slideIntoView";
  const attribute = "data-view";

  useEffect(() => {
    const config = {
      // Add root here so rootBounds in entry object is not null
      root: document,
      // Margin to when element should take action
      rootMargin,
      // Callback will be fired 30 times during intersection
      threshold: buildThresholdList(30),
    };

    let observer = new IntersectionObserver(function (entries, observer) {
      entries.forEach((entry) => {
        const element = entry.target;

        // Get root element (document) coords
        const rootTop = entry.rootBounds!.top;
        const rootBottom = entry.rootBounds!.height;

        // Get div coords
        const topBound = entry.boundingClientRect.top; // margin in config
        const bottomBound = entry.boundingClientRect.bottom;

        let className = "";

        // Do calculations to get class names
        if (topBound < rootTop && bottomBound < rootTop) {
          className = "outview-top";
        } else if (topBound > rootBottom) {
          className = "outview-bottom";
        } else if (topBound < rootBottom && bottomBound > rootBottom) {
          className = "inview-bottom";
        } else if (topBound < rootTop && bottomBound > rootTop) {
          className = "inview-top";
        }
        className && element.setAttribute(attribute, className);
      });
      () => observer.disconnect();
    }, config);

    const viewbox = document.querySelectorAll(elementClassName);
    viewbox.forEach((image) => {
      observer.observe(image);
    });
  }, [elementClassName, attribute]);
};
