import { binaryComparisonRoutine } from "./interfaces"

export const binarySearch = <T>
  (sourceArray: Array<T>,
    value: T,
    comparisonFn: binaryComparisonRoutine<T>): number => {

  let l: number = sourceArray.length;
  let left: number = 0;
  let right: number = l - 1;
  let mid: number = left + (right - left) >> 1;
  while (right - left > 1) {

    let midCompareRes: number = comparisonFn(value, sourceArray[mid]);
    if (midCompareRes > 0) left = mid + 1;
    else if (midCompareRes < 0) right = mid - 1;
    else return mid; //means strict equality

    mid = left + (right - left) >> 1;

  }

  let leftValueComparison = comparisonFn(value, sourceArray[left]);
  let rightValueComparison = comparisonFn(value, sourceArray[right]);

  return Math.abs(leftValueComparison) < Math.abs(rightValueComparison) ? left : right;

}
