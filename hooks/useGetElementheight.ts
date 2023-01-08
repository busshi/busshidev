import { useEffect, useState } from "react";

/**
 * Utility hook to get element height
 *
 * @param {string} id - Element ID
 *
 * @example
 * const height = useGetElementHeight(elementId)
 */

export const useGetElementHeight = (id: string) => {
  const [height, setHeight] = useState(0);

  useEffect(() => {
    const element = document.getElementById(id);
    if (element) setHeight(element.offsetHeight);
  }, [id]);

  return height;
};
