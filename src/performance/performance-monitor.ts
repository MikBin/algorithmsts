/**
 * Performance Monitor
 *
 * Provides utilities for measuring code execution time.
 */
export class PerformanceMonitor {
  private static clock: () => number = () => performance.now();
  private static logger: { warn: (msg: string) => void } | null = null;

  public static setClock(clock: () => number): void {
    this.clock = clock;
  }

  public static setLogger(logger: { warn: (msg: string) => void } | null): void {
    this.logger = logger;
  }

  public static getLogger(): { warn: (msg: string) => void } | null {
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
