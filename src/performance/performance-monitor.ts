/**
 * Performance Monitor
 *
 * Provides utilities for measuring code execution time.
 */
export class PerformanceMonitor {
  private static clock: () => number = () => performance.now();
  private static logger: typeof console | null = console;

  /**
   * Sets the clock function used for performance measurements.
   * Useful for injecting mocked time in tests.
   * @param clockFn Function that returns a high-resolution timestamp
   */
  public static setClock(clockFn: () => number): void {
    this.clock = clockFn;
  }

  /**
   * Sets the logger used for performance warnings.
   * Set to null to disable logging.
   * @param logger The logger object (e.g. console) or null
   */
  public static setLogger(logger: typeof console | null): void {
    this.logger = logger;
  }

  /**
   * Gets the currently configured logger.
   * @returns The configured logger or null if disabled
   */
  public static getLogger(): typeof console | null {
    return this.logger;
  }

  /**
   * Measures the execution time of a function
   * @param fn The function to measure
   * @returns The execution time in milliseconds
   */
  public static measureExecutionTime<T>(fn: () => T): number {
    const start = this.clock();
    fn();
    const end = this.clock();
    return end - start;
  }
}
