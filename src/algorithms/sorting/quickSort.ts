import { BaseAlgorithm } from '../../core/abstracts/BaseAlgorithm';
import { IAlgorithm } from '../../core/interfaces/IAlgorithm';
import { PerformanceMonitor } from '../../performance';

export interface QuickSortInput<T extends number | string> {
  array: T[];
}

export interface QuickSortOutput<T extends number | string> {
  sortedArray: T[];
  result: T[];
}

/**
 * Quick Sort Algorithm Implementation
 *
 * Sorts an array using the Quick Sort algorithm.
 *
 * @complexity Time: O(n log n) average case, O(n^2) worst case | Space: O(log n) auxiliary space (recursion depth)
 */
export class QuickSort<T extends number | string> extends BaseAlgorithm<QuickSortInput<T>, QuickSortOutput<T>> implements IAlgorithm<QuickSortInput<T>, QuickSortOutput<T>> {
  constructor() {
    super('QuickSort', 'O(n log n)', 'O(log n)');
  }

  public execute(input: QuickSortInput<T>): QuickSortOutput<T> {
    let result: QuickSortOutput<T>;

    const executionTime = PerformanceMonitor.measureExecutionTime(() => {
      const { array } = input;
      if (!array || array.length <= 1) {
        result = { sortedArray: array ? [...array] : [], result: array ? [...array] : [] };
        return;
      }

      const arr = [...array];
      this.quickSort(arr, 0, arr.length - 1);

      result = { sortedArray: arr, result: arr };
    });

    if (executionTime > 100) {
      PerformanceMonitor.getLogger()?.warn(`QuickSort performance warning: ${executionTime}ms for array of length ${input.array?.length || 0}`);
    }

    return result!;
  }

  private quickSort(arr: T[], low: number, high: number): void {
    if (low < high) {
      const pi = this.partition(arr, low, high);
      this.quickSort(arr, low, pi - 1);
      this.quickSort(arr, pi + 1, high);
    }
  }

  private partition(arr: T[], low: number, high: number): number {
    const pivot = arr[high];
    let i = low - 1;
    for (let j = low; j < high; j++) {
      if (arr[j] <= pivot) {
        i++;
        [arr[i], arr[j]] = [arr[j], arr[i]];
      }
    }
    [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
    return i + 1;
  }
}
