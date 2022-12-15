/**
 * Utility hook to handle smooth scroll
 *
 * @example
 * useHandleScroll("solutions")
 */

export const useSscrollIntoView = (id: string) => {
  const elem = document.getElementById(id);
  elem && elem.scrollIntoView({ behavior: "smooth" });
};
