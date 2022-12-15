/**
 * Utility hook to handle smooth scroll
 *
 * @example
 * useHandleScroll("solutions")
 */

export const useScrollIntoView = (id: string) => {
  const elem = document.getElementById(id);
  elem && elem.scrollIntoView({ behavior: "smooth" });
};
