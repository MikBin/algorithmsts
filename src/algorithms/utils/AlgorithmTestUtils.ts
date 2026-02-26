import { IAlgorithm } from '../../core/interfaces/IAlgorithm';
import { PerformanceMonitor } from '../../performance';

/**
 * Utility functions for algorithm testing
 */
export class AlgorithmTestUtils {
  /**
   * Validates that an algorithm implements the IAlgorithm interface correctly
   * @param algorithm Algorithm to validate
   * @returns Validation result with any issues found
   */
  public static validateAlgorithmInterface<TInput, TOutput>(
    algorithm: IAlgorithm<TInput, TOutput>
  ): { isValid: boolean; issues: string[] } {
    const issues: string[] = [];

    // Check required methods exist
    if (typeof algorithm.execute !== 'function') {
      issues.push('execute method is missing');
    }

    if (typeof algorithm.getName !== 'function') {
      issues.push('getName method is missing');
    }

    if (typeof algorithm.getTimeComplexity !== 'function') {
      issues.push('getTimeComplexity method is missing');
    }

    if (typeof algorithm.getSpaceComplexity !== 'function') {
      issues.push('getSpaceComplexity method is missing');
    }

    // Check method return types
    try {
      const name = algorithm.getName();
      if (typeof name !== 'string') {
        issues.push('getName() must return a string');
      }

      const timeComplexity = algorithm.getTimeComplexity();
      if (typeof timeComplexity !== 'string') {
        issues.push('getTimeComplexity() must return a string');
      }

      const spaceComplexity = algorithm.getSpaceComplexity();
      if (typeof spaceComplexity !== 'string') {
        issues.push('getSpaceComplexity() must return a string');
      }
    } catch (error) {
      issues.push(`Error calling interface methods: ${error}`);
    }

    return {
      isValid: issues.length === 0,
      issues
    };
  }

  /**
   * Runs performance regression tests for an algorithm
   * @param algorithm Algorithm to test
   * @param testCases Array of test cases with input and expected performance
   * @returns Performance test results
   */
  public static runPerformanceRegressionTests<TInput, TOutput>(
    algorithm: IAlgorithm<TInput, TOutput>,
    testCases: Array<{
      name: string;
      input: TInput;
      maxExpectedTime: number;
      description?: string;
    }>
  ): Array<{
    testName: string;
    executionTime: number;
    passed: boolean;
    maxExpectedTime: number;
    description?: string;
  }> {
    const results: Array<{
      testName: string;
      executionTime: number;
      passed: boolean;
      maxExpectedTime: number;
      description?: string;
    }> = [];

    for (const testCase of testCases) {
      const executionTime = PerformanceMonitor.measureExecutionTime(() => {
        algorithm.execute(testCase.input);
      });

      const passed = executionTime <= testCase.maxExpectedTime;

      results.push({
        testName: testCase.name,
        executionTime,
        passed,
        maxExpectedTime: testCase.maxExpectedTime,
        description: testCase.description
      });

      if (!passed) {
        console.warn(`Performance regression in ${testCase.name}: ${executionTime}ms (expected <= ${testCase.maxExpectedTime}ms)`);
      }
    }

    return results;
  }

  /**
   * Generates test data for algorithm benchmarking
   * @param generator Function to generate data of specific size
   * @param sizes Array of sizes to generate
   * @returns Array of test data
   */
  public static generateTestData<T>(
    generator: (size: number) => T,
    sizes: number[]
  ): Array<{ size: number; data: T }> {
    return sizes.map(size => ({
      size,
      data: generator(size)
    }));
  }

  /**
   * Creates a random array of numbers for testing
   * @param size Size of the array
   * @param min Minimum value (default: 0)
   * @param max Maximum value (default: 1000)
   * @returns Random number array
   */
  public static createRandomNumberArray(size: number, min: number = 0, max: number = 1000): number[] {
    const array: number[] = [];
    for (let i = 0; i < size; i++) {
      array.push(Math.floor(Math.random() * (max - min + 1)) + min);
    }
    return array;
  }

  /**
   * Creates a sorted array of numbers for testing
   * @param size Size of the array
   * @param start Starting value (default: 0)
   * @param step Step between values (default: 1)
   * @returns Sorted number array
   */
  public static createSortedNumberArray(size: number, start: number = 0, step: number = 1): number[] {
    const array: number[] = [];
    for (let i = 0; i < size; i++) {
      array.push(start + i * step);
    }
    return array;
  }

  /**
   * Creates random strings for testing
   * @param size Number of strings to generate
   * @param minLength Minimum string length
   * @param maxLength Maximum string length
   * @returns Array of random strings
   */
  public static createRandomStringArray(
    size: number,
    minLength: number = 5,
    maxLength: number = 20
  ): string[] {
    const strings: string[] = [];
    const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';

    for (let i = 0; i < size; i++) {
      const length = Math.floor(Math.random() * (maxLength - minLength + 1)) + minLength;
      let str = '';
      for (let j = 0; j < length; j++) {
        str += chars.charAt(Math.floor(Math.random() * chars.length));
      }
      strings.push(str);
    }

    return strings;
  }

  /**
   * Measures memory usage of an algorithm (if available)
   * @param algorithm Algorithm to measure
   * @param input Input for the algorithm
   * @returns Memory usage information
   */
  public static measureMemoryUsage<TInput, TOutput>(
    algorithm: IAlgorithm<TInput, TOutput>,
    input: TInput
  ): { memoryUsed?: number; executionTime: number } {
    const startMemory = (performance as any).memory?.usedJSHeapSize;
    const executionTime = PerformanceMonitor.measureExecutionTime(() => {
      algorithm.execute(input);
    });
    const endMemory = (performance as any).memory?.usedJSHeapSize;

    return {
      memoryUsed: startMemory && endMemory ? endMemory - startMemory : undefined,
      executionTime
    };
  }
}
