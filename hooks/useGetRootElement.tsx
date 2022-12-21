import { useEffect, useState } from "react";

/**
 * Utility hook to get the root HTML Element
 *
 * @param id string - element ID
 *
 * @example
 * const rootElement = useGetRootElement('root')
 */

export const useGetRootElement = (id: string) => {
  const [rootElement, setRootElement] = useState<HTMLElement>();

  useEffect(() => {
    const element = document.getElementById(id);
    if (element) {
      setRootElement(element);
    }
  }, [id]);

  return rootElement;
};
