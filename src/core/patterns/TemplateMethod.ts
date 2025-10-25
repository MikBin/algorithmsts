import { BaseAlgorithm } from '../abstracts/BaseAlgorithm';

/**
 * Template Method pattern implementation for Algorithmsts library
 *
 * The Template Method pattern defines the skeleton of an algorithm in a method,
 * deferring some steps to subclasses. Template Method lets subclasses redefine
 * certain steps of an algorithm without changing the algorithm's structure.
 * This is particularly useful for algorithms that have a common structure but
 * vary in specific implementation details.
 */

/**
 * Abstract base class that defines the template method
 *
 * @example
 * ```typescript
 * class CustomAlgorithm extends AlgorithmTemplate<number[], number> {
 *   protected prepareData(data: number[]): number[] {
 *     return data.filter(x => x > 0);
 *   }
 *
 *   protected processData(data: number[]): number {
 *     return data.reduce((sum, x) => sum + x, 0);
 *   }
 *
 *   protected finalizeResult(result: number): number {
 *     return result / 2;
 *   }
 * }
 *
 * const algo = new CustomAlgorithm('Custom', 'O(n)', 'O(n)');
 * const result = algo.execute([1, 2, 3, -1]); // 3 (average of positive numbers)
 * ```
 */
export abstract class AlgorithmTemplate<TInput, TOutput> extends BaseAlgorithm<TInput, TOutput> {
  /**
   * Template method that defines the algorithm structure
   * @param input The input data
   * @returns The processed output
   */
  public execute(input: TInput): TOutput {
    this.validateInput(input);
    const preparedData = this.prepareData(input);
    const processedResult = this.processData(preparedData);
    const finalResult = this.finalizeResult(processedResult);
    this.cleanup();
    return finalResult;
  }

  /**
   * Validates the input data
   * @param input The input to validate
   * @protected
   */
  protected validateInput(input: TInput): void {
    // Default implementation - can be overridden
  }

  /**
   * Prepares the data for processing
   * @param input The raw input data
   * @returns Prepared data
   * @protected
   * @abstract
   */
  protected abstract prepareData(input: TInput): any;

  /**
   * Processes the prepared data
   * @param data The prepared data
   * @returns Processed result
   * @protected
   * @abstract
   */
  protected abstract processData(data: any): any;

  /**
   * Finalizes the result
   * @param result The processed result
   * @returns Final result
   * @protected
   */
  protected finalizeResult(result: any): TOutput {
    return result as TOutput;
  }

  /**
   * Performs cleanup operations
   * @protected
   */
  protected cleanup(): void {
    // Default implementation - can be overridden
  }
}

/**
 * Concrete implementation for sorting algorithms using template method
 *
 * @example
 * ```typescript
 * const sorter = new SortingAlgorithm('Quick Sort', 'O(n log n)', 'O(log n)');
 * const sorted = sorter.execute([3, 1, 2]); // [1, 2, 3]
 * ```
 */
export class SortingAlgorithm extends AlgorithmTemplate<number[], number[]> {
  protected prepareData(input: number[]): number[] {
    // Create a copy to avoid mutating original array
    return [...input];
  }

  protected processData(data: number[]): number[] {
    // Use a simple sort for demonstration - in practice, this would be more sophisticated
    return data.sort((a, b) => a - b);
  }
}

/**
 * Concrete implementation for search algorithms using template method
 *
 * @example
 * ```typescript
 * const searcher = new SearchAlgorithm('Binary Search', 'O(log n)', 'O(1)');
 * const result = searcher.execute({ array: [1, 2, 3, 4, 5], target: 3 }); // 2
 * ```
 */
export class SearchAlgorithm extends AlgorithmTemplate<{ array: number[]; target: number }, number> {
  protected prepareData(input: { array: number[]; target: number }): { sortedArray: number[]; target: number } {
    // Ensure array is sorted for binary search
    const sortedArray = [...input.array].sort((a, b) => a - b);
    return { sortedArray, target: input.target };
  }

  protected processData(data: { sortedArray: number[]; target: number }): number {
    const { sortedArray, target } = data;
    let left = 0;
    let right = sortedArray.length - 1;

    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      if (sortedArray[mid] === target) {
        return mid;
      } else if (sortedArray[mid] < target) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
    return -1;
  }

  protected validateInput(input: { array: number[]; target: number }): void {
    if (!Array.isArray(input.array)) {
      throw new Error('Input must contain an array property');
    }
    if (typeof input.target !== 'number') {
      throw new Error('Input must contain a numeric target property');
    }
  }
}

/**
 * Concrete implementation for data processing algorithms using template method
 *
 * @example
 * ```typescript
 * const processor = new DataProcessingAlgorithm('Statistics', 'O(n)', 'O(1)');
 * const stats = processor.execute([1, 2, 3, 4, 5]); // { sum: 15, average: 3, count: 5 }
 * ```
 */
export class DataProcessingAlgorithm extends AlgorithmTemplate<number[], { sum: number; average: number; count: number }> {
  protected prepareData(input: number[]): number[] {
    // Filter out non-numeric values
    return input.filter(x => typeof x === 'number' && !isNaN(x));
  }

  protected processData(data: number[]): { sum: number; average: number; count: number } {
    const sum = data.reduce((acc, val) => acc + val, 0);
    const count = data.length;
    const average = count > 0 ? sum / count : 0;
    return { sum, average, count };
  }

  protected validateInput(input: number[]): void {
    if (!Array.isArray(input)) {
      throw new Error('Input must be an array');
    }
  }
}
