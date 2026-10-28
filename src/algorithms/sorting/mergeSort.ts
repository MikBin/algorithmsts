import { BaseAlgorithm } from "../../core/abstracts/BaseAlgorithm";
import { IAlgorithm } from "../../core/interfaces/IAlgorithm";
import { PerformanceMonitor } from "../../performance";

export interface MergeSortInput<T extends number | string> {
  array: T[];
}

export interface MergeSortOutput<T extends number | string> {
  sortedArray: T[];
  result: T[];
}

/**
 * Merge Sort Algorithm Implementation
 *
 * Sorts an array using the stable Merge Sort algorithm.
 *
 * @complexity Time: O(n log n) in all cases | Space: O(n) for temporary arrays
 */
export class MergeSort<T extends number | string>
  extends BaseAlgorithm<MergeSortInput<T>, MergeSortOutput<T>>
  implements IAlgorithm<MergeSortInput<T>, MergeSortOutput<T>>
{
  constructor() {
    super("MergeSort", "O(n log n)", "O(n)");
  }

  public execute(input: MergeSortInput<T>): MergeSortOutput<T> {
    let result: MergeSortOutput<T>;

    const body = () => {
      const { array } = input;
      if (!array || array.length <= 1) {
        result = { sortedArray: array ? [...array] : [], result: array ? [...array] : [] };
        return;
      }

      const arr = this.mergeSort([...array]);
      result = { sortedArray: arr, result: arr };
    };

    // Read the logger once: measure only when monitoring is enabled, otherwise
    // run the body plainly (no clock reads, no logging side effects).
    const logger = PerformanceMonitor.getLogger();
    let executionTime = 0;
    if (logger) {
      executionTime = PerformanceMonitor.measureExecutionTime(body);
    } else {
      body();
    }

    if (logger && executionTime > 100) {
      logger.warn(
        `MergeSort performance warning: ${executionTime}ms for array of length ${input.array?.length || 0}`,
      );
    }

    return result!;
  }

  private mergeSort(arr: T[]): T[] {
    if (arr.length <= 1) return arr;
    const mid = Math.floor(arr.length / 2);
    const left = this.mergeSort(arr.slice(0, mid));
    const right = this.mergeSort(arr.slice(mid));
    return this.merge(left, right);
  }

  private merge(left: T[], right: T[]): T[] {
    const result: T[] = [];
    let i = 0,
      j = 0;
    while (i < left.length && j < right.length) {
      if (left[i] <= right[j]) {
        result.push(left[i++]);
      } else {
        result.push(right[j++]);
      }
    }
    return result.concat(left.slice(i)).concat(right.slice(j));
  }
}
