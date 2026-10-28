import { BaseAlgorithm } from "../../core/abstracts/BaseAlgorithm";
import { IAlgorithm } from "../../core/interfaces/IAlgorithm";
import { PerformanceMonitor } from "../../performance";

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
export class QuickSort<T extends number | string>
  extends BaseAlgorithm<QuickSortInput<T>, QuickSortOutput<T>>
  implements IAlgorithm<QuickSortInput<T>, QuickSortOutput<T>>
{
  constructor() {
    super("QuickSort", "O(n log n)", "O(log n)");
  }

  public execute(input: QuickSortInput<T>): QuickSortOutput<T> {
    let result: QuickSortOutput<T>;

    const body = () => {
      const { array } = input;
      if (!array || array.length <= 1) {
        result = { sortedArray: array ? [...array] : [], result: array ? [...array] : [] };
        return;
      }

      const arr = [...array];
      this.quickSort(arr, 0, arr.length - 1);

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
        `QuickSort performance warning: ${executionTime}ms for array of length ${input.array?.length || 0}`,
      );
    }

    return result!;
  }

  private quickSort(arr: T[], low: number, high: number): void {
    while (low < high) {
      const pi = this.partition(arr, low, high);

      // Recurse into the smaller half first to guarantee O(log n) stack depth
      if (pi - low < high - pi) {
        this.quickSort(arr, low, pi - 1);
        low = pi + 1;
      } else {
        this.quickSort(arr, pi + 1, high);
        high = pi - 1;
      }
    }
  }

  private partition(arr: T[], low: number, high: number): number {
    // Median-of-three pivot to avoid worst case on sorted arrays
    const mid = low + Math.floor((high - low) / 2);
    if (arr[mid] < arr[low]) [arr[low], arr[mid]] = [arr[mid], arr[low]];
    if (arr[high] < arr[low]) [arr[low], arr[high]] = [arr[high], arr[low]];
    if (arr[mid] < arr[high]) [arr[mid], arr[high]] = [arr[high], arr[mid]];

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
