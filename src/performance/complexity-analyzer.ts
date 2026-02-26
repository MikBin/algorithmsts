import { IAlgorithm } from '../core/interfaces/IAlgorithm';

/**
 * Performance Complexity Analyzer
 *
 * Analyzes the complexity of algorithms and checks if they meet performance targets.
 */
export class ComplexityAnalyzer {
  public static readonly BASIC_OPERATIONS_TARGET = 1; // O(1) in milliseconds
  public static readonly SEARCH_OPERATIONS_TARGET = 10; // O(log n) in milliseconds
  public static readonly DEFAULT_TARGET = 1000; // 1 second

  /**
   * Checks if the execution time meets the target for basic operations (O(1))
   * @param executionTime The measured execution time in milliseconds
   * @returns true if within target, false otherwise
   */
  public static isWithinBasicOperationsTarget(executionTime: number): boolean {
    return executionTime <= this.BASIC_OPERATIONS_TARGET;
  }

  /**
   * Checks if the execution time meets the target for search operations (O(log n))
   * @param executionTime The measured execution time in milliseconds
   * @returns true if within target, false otherwise
   */
  public static isWithinSearchOperationsTarget(executionTime: number): boolean {
    return executionTime <= this.SEARCH_OPERATIONS_TARGET;
  }

  /**
   * Checks if the execution time meets the target for the algorithm complexity
   * @param algorithm Algorithm to check
   * @param executionTime Measured execution time
   * @returns true if within target, false otherwise
   */
  public static checkPerformanceTarget<TInput, TOutput>(
    algorithm: IAlgorithm<TInput, TOutput>,
    executionTime: number
  ): boolean {
    const complexity = algorithm.getTimeComplexity();

    if (complexity.includes('O(1)')) {
      return this.isWithinBasicOperationsTarget(executionTime);
    } else if (complexity.includes('O(log n)')) {
      return this.isWithinSearchOperationsTarget(executionTime);
    }

    // For other complexities, use a more lenient check
    return executionTime < this.DEFAULT_TARGET;
  }
}
