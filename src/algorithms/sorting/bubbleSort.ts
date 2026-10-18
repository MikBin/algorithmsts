import { BaseAlgorithm } from '../../core/abstracts/BaseAlgorithm';
import { IAlgorithm } from '../../core/interfaces/IAlgorithm';
import { PerformanceMonitor } from '../../performance';

export interface BubbleSortInput<T extends number | string> {
  array: T[];
}

export interface BubbleSortOutput<T extends number | string> {
  sortedArray: T[];
  result: T[];
}

/**
 * Bubble Sort Algorithm Implementation
 *
 * Sorts an array using the Bubble Sort algorithm.
 *
 * @complexity Time: O(n^2) worst/average case, O(n) best case (already sorted) | Space: O(1) beyond the input array
 */
export class BubbleSort<T extends number | string> extends BaseAlgorithm<BubbleSortInput<T>, BubbleSortOutput<T>> implements IAlgorithm<BubbleSortInput<T>, BubbleSortOutput<T>> {
  constructor() {
    super('BubbleSort', 'O(n^2)', 'O(1)');
  }

  public execute(input: BubbleSortInput<T>): BubbleSortOutput<T> {
    let result: BubbleSortOutput<T>;

    const executionTime = PerformanceMonitor.measureExecutionTime(() => {
      const { array } = input;
      if (!array || array.length <= 1) {
        result = { sortedArray: array ? [...array] : [], result: array ? [...array] : [] };
        return;
      }

      const arr = [...array];
      const n = arr.length;
      let swapped: boolean;

      for (let i = 0; i < n - 1; i++) {
        swapped = false;
        for (let j = 0; j < n - i - 1; j++) {
          if (arr[j] > arr[j + 1]) {
            [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            swapped = true;
          }
        }
        if (!swapped) break;
      }

      result = { sortedArray: arr, result: arr };
    });

    if (executionTime > 100) {
      PerformanceMonitor.getLogger()?.warn(`BubbleSort performance warning: ${executionTime}ms for array of length ${input.array?.length || 0}`);
    }

    return result!;
  }
}
