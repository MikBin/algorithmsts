import { binaryComparisonRoutine } from "./interfaces"

export const binarySearch = <T>
  (sourceArray: Array<T>,
    value: T,
    comparisonFn: binaryComparisonRoutine<T>): number => {

  let l: number = sourceArray.length;
  let left: number = 0;
  let right: number = l - 1;
  let mid: number = left + ((right - left) >> 1);

  while (right - left > 1) {

    let midCompareRes: number = comparisonFn(value, sourceArray[mid]);
    if (midCompareRes > 0) left = mid + 1;
    else if (midCompareRes < 0) right = mid - 1;
    else return mid; //means strict equality

    mid = left + ((right - left) >> 1);

  }

  if (comparisonFn(value, sourceArray[left]) == 0) return left;
  if (comparisonFn(value, sourceArray[right]) == 0) return right;

  return -1;
}

export const binaryClosestSearch = <T>
  (sourceArray: Array<T>,
    value: T,
    comparisonFn: binaryComparisonRoutine<T>): number => {

  let l: number = sourceArray.length;
  let left: number = 0;
  let right: number = l - 1;
  let mid: number = left + ((right - left) >> 1);
  while (right - left > 1) {

    let midCompareRes: number = comparisonFn(value, sourceArray[mid]);
    if (midCompareRes > 0) left = mid + 1;
    else if (midCompareRes < 0) right = mid - 1;
    else return mid; //means strict equality

    mid = left + ((right - left) >> 1);

  }

  let leftValueComparison = comparisonFn(value, sourceArray[left]);
  let rightValueComparison = comparisonFn(value, sourceArray[right]);

  return Math.abs(leftValueComparison) < Math.abs(rightValueComparison) ? left : right;

}

export const compareNumbers: binaryComparisonRoutine<number> = (a: number, b: number) => {
  return a - b;
}

export const sortedArray = [1, 3, 4, 6, 7, 12, 23, 33, 34, 35, 36, 56, 55, 66, 67, 78, 88, 123, 222, 234];
