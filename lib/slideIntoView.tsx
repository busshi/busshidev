import { useEffect } from "react";
import { buildThresholdList } from "./observerIntersection";

/**
 * Utility function to animate element visibility
 * Add an attribute to the element to trigger the CSS
 *
 * @param {string} elementClassName - classname to identify the elements
 * @param {string} attribute - attribute to add to the element (used for CSS)
 *
 * @example
 * slideIntoView(".slineIntoView", "data-view")
 */

export const slideIntoView = (
  elementClassName: string = ".slideIntoView",
  attribute: string = "data-view"
) => {
  const config = {
    // Add root here so rootBounds in entry object is not null
    root: document,
    // Margin to when element should take action
    rootMargin: "-50px 0px",
    // Callback will be fired 30 times during intersection
    threshold: buildThresholdList(30),
  };

  useEffect(() => {
    let observer = new IntersectionObserver(function (entries, observer) {
      entries.forEach((entry) => {
        const element = entry.target;

        // Get root element (document) coords
        const rootTop = entry.rootBounds!.top;
        const rootBottom = entry.rootBounds!.height;

        // Get div coords
        const topBound = entry.boundingClientRect.top - 50; // margin in config
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
        element.setAttribute(attribute, className);
      });
      () => observer.disconnect();
    }, config);

    const viewbox = document.querySelectorAll(elementClassName);
    viewbox.forEach((image) => {
      observer.observe(image);
    });
  }, [elementClassName, attribute]);
};
