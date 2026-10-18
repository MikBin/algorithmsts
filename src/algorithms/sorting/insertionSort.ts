import { BaseAlgorithm } from '../../core/abstracts/BaseAlgorithm';
import { IAlgorithm } from '../../core/interfaces/IAlgorithm';
import { PerformanceMonitor } from '../../performance';

export interface InsertionSortInput<T extends number | string> {
  array: T[];
}

export interface InsertionSortOutput<T extends number | string> {
  sortedArray: T[];
  result: T[];
}

/**
 * Insertion Sort Algorithm Implementation
 *
 * Sorts an array using the Insertion Sort algorithm.
 *
 * @complexity Time: O(n^2) worst/average case, O(n) best case (already sorted) | Space: O(1) beyond the input array
 */
export class InsertionSort<T extends number | string> extends BaseAlgorithm<InsertionSortInput<T>, InsertionSortOutput<T>> implements IAlgorithm<InsertionSortInput<T>, InsertionSortOutput<T>> {
  constructor() {
    super('InsertionSort', 'O(n^2)', 'O(1)');
  }

  public execute(input: InsertionSortInput<T>): InsertionSortOutput<T> {
    let result: InsertionSortOutput<T>;

    const executionTime = PerformanceMonitor.measureExecutionTime(() => {
      const { array } = input;
      if (!array || array.length <= 1) {
        result = { sortedArray: array ? [...array] : [], result: array ? [...array] : [] };
        return;
      }

      const arr = [...array];
      const n = arr.length;

      for (let i = 1; i < n; i++) {
        const key = arr[i];
        let j = i - 1;

        while (j >= 0 && arr[j] > key) {
          arr[j + 1] = arr[j];
          j = j - 1;
        }
        arr[j + 1] = key;
      }

      result = { sortedArray: arr, result: arr };
    });

    if (executionTime > 100) {
      PerformanceMonitor.getLogger()?.warn(`InsertionSort performance warning: ${executionTime}ms for array of length ${input.array?.length || 0}`);
    }

    return result!;
  }
}
