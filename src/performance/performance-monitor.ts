/**
 * Performance Monitor
 *
 * Provides utilities for measuring code execution time.
 */
export class PerformanceMonitor {
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
}
