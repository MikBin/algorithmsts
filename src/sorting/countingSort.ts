/**
 * Sorts an array of numbers using the counting sort algorithm.
 * This implementation handles both positive and negative integers.
 *
 * @param {number[]} arr The array of numbers to sort.
 * @returns {number[]} The sorted array.
 */
export const countingSort = (arr: number[]): number[] => {
  if (arr.length <= 1) {
    return arr;
  }

  let min = arr[0];
  let max = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    } else if (arr[i] > max) {
      max = arr[i];
    }
  }

  const range = max - min + 1;
  const count = new Array(range).fill(0);
  const output = new Array(arr.length);

  for (let i = 0; i < arr.length; i++) {
    count[arr[i] - min]++;
  }

  for (let i = 1; i < range; i++) {
    count[i] += count[i - 1];
  }

  for (let i = arr.length - 1; i >= 0; i--) {
    output[count[arr[i] - min] - 1] = arr[i];
    count[arr[i] - min]--;
  }

  return output;
};