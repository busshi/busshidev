export const useHandleScroll = (current: any, yOffset = 0) => {
  const hash = window.location.hash.replace("#", "");
  const uniqueElem = document.getElementById(hash);

  const newRef = uniqueElem || current;

  const y =
    newRef && newRef.getBoundingClientRect().top + window.pageYOffset + yOffset;

  window.scrollTo({ top: y, behavior: "smooth" });
};
