import { BaseAlgorithm } from '../../core/abstracts/BaseAlgorithm';
import { IAlgorithm } from '../../core/interfaces/IAlgorithm';
import { PerformanceMonitor } from '../../performance';

export interface HeapSortInput<T extends number | string> {
  array: T[];
}

export interface HeapSortOutput<T extends number | string> {
  sortedArray: T[];
  result: T[];
}

/**
 * Heap Sort Algorithm Implementation
 *
 * Sorts an array using the Heap Sort algorithm.
 *
 * @complexity Time: O(n log n) in all cases | Space: O(1) beyond the input array
 */
export class HeapSort<T extends number | string> extends BaseAlgorithm<HeapSortInput<T>, HeapSortOutput<T>> implements IAlgorithm<HeapSortInput<T>, HeapSortOutput<T>> {
  constructor() {
    super('HeapSort', 'O(n log n)', 'O(1)');
  }

  public execute(input: HeapSortInput<T>): HeapSortOutput<T> {
    let result: HeapSortOutput<T>;

    const executionTime = PerformanceMonitor.measureExecutionTime(() => {
      const { array } = input;
      if (!array || array.length <= 1) {
        result = { sortedArray: array ? [...array] : [], result: array ? [...array] : [] };
        return;
      }

      const arr = [...array];
      const n = arr.length;

      // Build heap (rearrange array)
      for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
        this.heapify(arr, n, i);
      }

      // One by one extract an element from heap
      for (let i = n - 1; i > 0; i--) {
        // Move current root to end
        [arr[0], arr[i]] = [arr[i], arr[0]];
        // call max heapify on the reduced heap
        this.heapify(arr, i, 0);
      }

      result = { sortedArray: arr, result: arr };
    });

    if (executionTime > 100) {
      PerformanceMonitor.getLogger()?.warn(`HeapSort performance warning: ${executionTime}ms for array of length ${input.array?.length || 0}`);
    }

    return result!;
  }

  private heapify(arr: T[], n: number, i: number): void {
    let largest = i; // Initialize largest as root
    const l = 2 * i + 1; // left = 2*i + 1
    const r = 2 * i + 2; // right = 2*i + 2

    // If left child is larger than root
    if (l < n && arr[l] > arr[largest]) {
      largest = l;
    }

    // If right child is larger than largest so far
    if (r < n && arr[r] > arr[largest]) {
      largest = r;
    }

    // If largest is not root
    if (largest !== i) {
      [arr[i], arr[largest]] = [arr[largest], arr[i]];

      // Recursively heapify the affected sub-tree
      this.heapify(arr, n, largest);
    }
  }
}
