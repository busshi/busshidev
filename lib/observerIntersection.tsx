/**
 * Utility function to get threshold array breakpoints
 *
 * @param {number} numSteps - Number of breakpoints in the array
 *
 * @example
 * const array = getThreshold(10)
 */

export const buildThresholdList = (numSteps: number = 20) => {
  let thresholds = [];

  for (let i = 1.0; i <= numSteps; i++) {
    thresholds.push(i / numSteps);
  }

  thresholds.push(0);
  return thresholds;
};
