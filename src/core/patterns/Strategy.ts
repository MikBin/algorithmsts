import { BaseAlgorithm } from '../abstracts/BaseAlgorithm';

/**
 * Strategy pattern implementation for Algorithmsts library
 *
 * The Strategy pattern defines a family of algorithms, encapsulates each one,
 * and makes them interchangeable. Strategy lets the algorithm vary independently
 * from clients that use it. This is particularly useful for sorting and searching
 * algorithms where different implementations can be swapped at runtime.
 */

/**
 * Generic strategy interface
 */
export interface IStrategy<TInput, TOutput> {
  /**
   * Executes the strategy with the given input
   * @param input The input data
   * @returns The output result
   */
  execute(input: TInput): TOutput;
}

/**
 * Context class that uses a strategy
 *
 * @example
 * ```typescript
 * const context = new StrategyContext<number[], number[]>();
 * context.setStrategy(new BubbleSortStrategy());
 * const sorted = context.executeStrategy([3, 1, 2]); // [1, 2, 3]
 *
 * context.setStrategy(new QuickSortStrategy());
 * const sortedAgain = context.executeStrategy([3, 1, 2]); // [1, 2, 3]
 * ```
 */
export class StrategyContext<TInput, TOutput> {
  private strategy?: IStrategy<TInput, TOutput>;

  /**
   * Sets the strategy to be used
   * @param strategy The strategy instance
   */
  public setStrategy(strategy: IStrategy<TInput, TOutput>): void {
    this.strategy = strategy;
  }

  /**
   * Executes the current strategy with the given input
   * @param input The input data
   * @returns The output result
   * @throws Error if no strategy is set
   */
  public executeStrategy(input: TInput): TOutput {
    if (!this.strategy) {
      throw new Error('No strategy set');
    }
    return this.strategy.execute(input);
  }
}

/**
 * Sorting strategy interface
 */
export interface ISortingStrategy<T> extends IStrategy<T[], T[]> {}

/**
 * Bubble sort strategy implementation
 *
 * @example
 * ```typescript
 * const sorter = new BubbleSortStrategy<number>();
 * const sorted = sorter.execute([3, 1, 2]); // [1, 2, 3]
 * ```
 */
export class BubbleSortStrategy<T> extends BaseAlgorithm<T[], T[]> implements ISortingStrategy<T> {
  constructor() {
    super('Bubble Sort', 'O(n²)', 'O(1)');
  }

  public execute(input: T[]): T[] {
    const arr = [...input]; // Create a copy to avoid mutating original
    const n = arr.length;
    for (let i = 0; i < n - 1; i++) {
      for (let j = 0; j < n - i - 1; j++) {
        if (arr[j] > arr[j + 1]) {
          [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        }
      }
    }
    return arr;
  }
}

/**
 * Quick sort strategy implementation
 *
 * @example
 * ```typescript
 * const sorter = new QuickSortStrategy<number>();
 * const sorted = sorter.execute([3, 1, 2]); // [1, 2, 3]
 * ```
 */
export class QuickSortStrategy<T> extends BaseAlgorithm<T[], T[]> implements ISortingStrategy<T> {
  constructor() {
    super('Quick Sort', 'O(n log n)', 'O(log n)');
  }

  public execute(input: T[]): T[] {
    const arr = [...input]; // Create a copy to avoid mutating original
    this.quickSort(arr, 0, arr.length - 1);
    return arr;
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

/**
 * Searching strategy interface
 */
export interface ISearchingStrategy<T> extends IStrategy<{ array: T[]; target: T }, number> {}

/**
 * Linear search strategy implementation
 *
 * @example
 * ```typescript
 * const searcher = new LinearSearchStrategy<number>();
 * const index = searcher.execute({ array: [1, 2, 3], target: 2 }); // 1
 * ```
 */
export class LinearSearchStrategy<T> extends BaseAlgorithm<{ array: T[]; target: T }, number> implements ISearchingStrategy<T> {
  constructor() {
    super('Linear Search', 'O(n)', 'O(1)');
  }

  public execute(input: { array: T[]; target: T }): number {
    const { array, target } = input;
    for (let i = 0; i < array.length; i++) {
      if (array[i] === target) {
        return i;
      }
    }
    return -1;
  }
}

/**
 * Binary search strategy implementation (assumes sorted array)
 *
 * @example
 * ```typescript
 * const searcher = new BinarySearchStrategy<number>();
 * const index = searcher.execute({ array: [1, 2, 3], target: 2 }); // 1
 * ```
 */
export class BinarySearchStrategy<T> extends BaseAlgorithm<{ array: T[]; target: T }, number> implements ISearchingStrategy<T> {
  constructor() {
    super('Binary Search', 'O(log n)', 'O(1)');
  }

  public execute(input: { array: T[]; target: T }): number {
    const { array, target } = input;
    let left = 0;
    let right = array.length - 1;

    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      if (array[mid] === target) {
        return mid;
      } else if (array[mid] < target) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
    return -1;
  }
}
