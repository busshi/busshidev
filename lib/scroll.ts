/**
 * Utility function to handle smooth scroll
 *
 * @example
 * scrollIntoView("elementId")
 */

export const scrollIntoView = (id: string) => {
  const elem = document.getElementById(id);
  elem && elem.scrollIntoView({ behavior: "smooth", block: "center" });
};

/**
 * Utility function to handle vertical scroll
 *
 * @example
 * scrollTo(solutionId, offset)
 */

export const scrollTo = (id: string, top: number = 0, left: number = 0) => {
  const elem = document.getElementById(id);
  elem && elem.scrollTo({ behavior: "smooth", top, left });
};
