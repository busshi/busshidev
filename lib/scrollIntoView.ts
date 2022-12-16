/**
 * Utility function to handle smooth scroll
 *
 * @example
 * useHandleScroll("solutions")
 */

export const scrollIntoView = (id: string) => {
  const elem = document.getElementById(id);
  elem && elem.scrollIntoView({ behavior: "smooth" });
};
