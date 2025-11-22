/**
 * Resizes a value x from a known interval [m, M] to the unit interval [0, 1].
 *
 * Formula: y = (x - m) / (M - m)
 *
 * @param m The minimum value of the source interval.
 * @param M The maximum value of the source interval.
 * @param x The value to resize.
 * @returns The resized value in [0, 1].
 */
export const resizeToInterval = (m: number, M: number, x: number): number => {
  return (x - m) / (M - m);
};
