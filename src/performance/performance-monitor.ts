/**
 * Performance Monitor
 *
 * Provides utilities for measuring code execution time.
 */
export class PerformanceMonitor {
  private static clockFn: () => number = () => performance.now();
  private static loggerObj: { warn: (message: string) => void } | null = console;

  /**
   * Sets a custom clock function for measuring time
   * @param clockFn Function that returns current time in milliseconds
   */
  public static setClock(clockFn: () => number): void {
    this.clockFn = clockFn;
  }

  /**
   * Sets a custom logger
   * @param loggerObj Logger object that implements a warn method
   */
  public static setLogger(loggerObj: { warn: (message: string) => void } | null): void {
    this.loggerObj = loggerObj;
  }

  /**
   * Gets the current logger
   */
  public static getLogger(): { warn: (message: string) => void } | null {
    return this.loggerObj;
  }

  /**
   * Gets the current time using the configured clock
   */
  public static clock(): number {
    return this.clockFn();
  }

  /**
   * Measures the execution time of a function
   * @param fn The function to measure
   * @returns The execution time in milliseconds
   */
  public static measureExecutionTime<T>(fn: () => T): number {
    const start = this.clockFn();
    fn();
    const end = this.clockFn();
    return end - start;
  }
}
