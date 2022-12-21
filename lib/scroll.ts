/**
 * Utility function to handle smooth scroll
 *
 * @param id - Element ID

* @example
 * scrollIntoView(elementId, blockPosition)
 */

export const scrollIntoView = (
  id: string,
  block: ScrollLogicalPosition = "nearest"
) => {
  const elem = document.getElementById(id);
  elem && elem.scrollIntoView({ behavior: "smooth", block });
};

/**
 * Utility function to handle vertical scroll
 *
 * @param id - Element ID
 * @param top - top offset px (optional)
 * @param left - left offset px (optional)

* @example
 * scrollTo(elementId, top, left)
 */

export const scrollTo = (id: string, top: number = 0, left: number = 0) => {
  const elem = document.getElementById(id);
  elem && elem.scrollTo({ behavior: "smooth", top, left });
};
