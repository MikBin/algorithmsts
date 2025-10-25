/**
 * Basic performance monitoring with defined targets
 */
export class PerformanceMonitor {
  private static readonly BASIC_OPERATIONS_TARGET = 1; // O(1) in milliseconds
  private static readonly SEARCH_OPERATIONS_TARGET = 10; // O(log n) in milliseconds

  /**
   * Measures the execution time of a function
   * @param fn The function to measure
   * @returns The execution time in milliseconds
   */
  public static measureExecutionTime<T>(fn: () => T): number {
    const start = performance.now();
    fn();
    const end = performance.now();
    return end - start;
  }

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
   * Gets the target time for basic operations
   * @returns Target time in milliseconds
   */
  public static getBasicOperationsTarget(): number {
    return this.BASIC_OPERATIONS_TARGET;
  }

  /**
   * Gets the target time for search operations
   * @returns Target time in milliseconds
   */
  public static getSearchOperationsTarget(): number {
    return this.SEARCH_OPERATIONS_TARGET;
  }
}
