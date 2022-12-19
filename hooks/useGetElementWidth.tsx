import { useEffect, useState } from "react";

/**
 * Utility hook to determine an element width
 *
 * @param id string - element ID
 * @example
 *   const elementWidth = useGetElementWidth("items");
 */

export const useGetElementWidth = (id: string) => {
  const [elementWidth, setElementWidth] = useState(0);

  useEffect(() => {
    const element = document.getElementById(id);
    const width = element?.offsetWidth;
    if (width) setElementWidth(width);
  }, [id]);

  return elementWidth;
};
