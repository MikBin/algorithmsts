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
    if (midCompareRes > 0) left = mid;
    else if (midCompareRes < 0) right = mid;
    else return mid; //means strict equality

    mid = left + ((right - left) >> 1);

  }

  let leftValueComparison = comparisonFn(value, sourceArray[left]);
  let rightValueComparison = comparisonFn(value, sourceArray[right]);

  let absLeftValueComparison = Math.abs(leftValueComparison);
  let absRightValueComparison = Math.abs(rightValueComparison);
  if (absLeftValueComparison == absRightValueComparison) {
    return leftValueComparison < 0 ? left : right;
  } else {
    return absLeftValueComparison < absRightValueComparison ? left : right;
  }

}
