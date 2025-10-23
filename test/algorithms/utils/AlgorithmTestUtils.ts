import { IAlgorithm } from '../../../src/core/interfaces/IAlgorithm';
import { AlgorithmTestUtils as CoreAlgorithmTestUtils } from '../../../src/algorithms/utils/AlgorithmTestUtils';
import { PerformanceData } from '../fixtures/PerformanceData';

/**
 * Extended test utilities for algorithm testing
 */
export class AlgorithmTestUtils {
  /**
   * Runs comprehensive algorithm validation tests
   */
  public static runComprehensiveAlgorithmTests<TInput, TOutput>(
    algorithm: IAlgorithm<TInput, TOutput>,
    testCases: Array<{
      name: string;
      input: TInput;
      expectedOutput?: TOutput;
      validateOutput?: (output: TOutput) => boolean;
    }>
  ): Array<{
    testName: string;
    passed: boolean;
    executionTime: number;
    error?: string;
  }> {
    const results: Array<{
      testName: string;
      passed: boolean;
      executionTime: number;
      error?: string;
    }> = [];

    for (const testCase of testCases) {
      try {
        const startTime = performance.now();
        const output = algorithm.execute(testCase.input);
        const executionTime = performance.now() - startTime;

        let passed = true;
        let error: string | undefined;

        if (testCase.expectedOutput !== undefined) {
          // Direct comparison
          passed = this.deepEqual(output, testCase.expectedOutput);
          if (!passed) {
            error = `Expected ${JSON.stringify(testCase.expectedOutput)}, got ${JSON.stringify(output)}`;
          }
        } else if (testCase.validateOutput) {
          // Custom validation
          passed = testCase.validateOutput(output);
          if (!passed) {
            error = 'Custom validation failed';
          }
        }

        results.push({
          testName: testCase.name,
          passed,
          executionTime,
          error
        });
      } catch (err) {
        results.push({
          testName: testCase.name,
          passed: false,
          executionTime: 0,
          error: err instanceof Error ? err.message : 'Unknown error'
        });
      }
    }

    return results;
  }

  /**
   * Runs performance benchmark tests
   */
  public static runPerformanceBenchmarks<TInput, TOutput>(
    algorithm: IAlgorithm<TInput, TOutput>,
    benchmarks: Array<{
      name: string;
      input: TInput;
      iterations: number;
    }>
  ): Array<{
    benchmarkName: string;
    averageTime: number;
    minTime: number;
    maxTime: number;
    iterations: number;
    performanceValidation: {
      passed: boolean;
      expectedMaxTime: number;
      message: string;
    };
  }> {
    const results: Array<{
      benchmarkName: string;
      averageTime: number;
      minTime: number;
      maxTime: number;
      iterations: number;
      performanceValidation: {
        passed: boolean;
        expectedMaxTime: number;
        message: string;
      };
    }> = [];

    for (const benchmark of benchmarks) {
      const times: number[] = [];

      for (let i = 0; i < benchmark.iterations; i++) {
        const startTime = performance.now();
        algorithm.execute(benchmark.input);
        const executionTime = performance.now() - startTime;
        times.push(executionTime);
      }

      const averageTime = times.reduce((a, b) => a + b, 0) / times.length;
      const minTime = Math.min(...times);
      const maxTime = Math.max(...times);

      const validation = PerformanceData.validatePerformance(
        algorithm.getName(),
        averageTime
      );

      results.push({
        benchmarkName: benchmark.name,
        averageTime,
        minTime,
        maxTime,
        iterations: benchmark.iterations,
        performanceValidation: validation
      });
    }

    return results;
  }

  /**
   * Tests algorithm interface compliance
   */
  public static testInterfaceCompliance<TInput, TOutput>(
    algorithm: IAlgorithm<TInput, TOutput>
  ): {
    compliant: boolean;
    issues: string[];
    methodTests: {
      getName: boolean;
      getTimeComplexity: boolean;
      getSpaceComplexity: boolean;
      execute: boolean;
    };
  } {
    const issues: string[] = [];
    const methodTests = {
      getName: false,
      getTimeComplexity: false,
      getSpaceComplexity: false,
      execute: false
    };

    // Test getName
    try {
      const name = algorithm.getName();
      methodTests.getName = typeof name === 'string' && name.length > 0;
      if (!methodTests.getName) {
        issues.push('getName() must return a non-empty string');
      }
    } catch (error) {
      issues.push(`getName() threw error: ${error}`);
    }

    // Test getTimeComplexity
    try {
      const complexity = algorithm.getTimeComplexity();
      methodTests.getTimeComplexity = typeof complexity === 'string' && complexity.length > 0;
      if (!methodTests.getTimeComplexity) {
        issues.push('getTimeComplexity() must return a non-empty string');
      }
    } catch (error) {
      issues.push(`getTimeComplexity() threw error: ${error}`);
    }

    // Test getSpaceComplexity
    try {
      const complexity = algorithm.getSpaceComplexity();
      methodTests.getSpaceComplexity = typeof complexity === 'string' && complexity.length > 0;
      if (!methodTests.getSpaceComplexity) {
        issues.push('getSpaceComplexity() must return a non-empty string');
      }
    } catch (error) {
      issues.push(`getSpaceComplexity() threw error: ${error}`);
    }

    // Test execute (we can't test with actual input without knowing the type)
    try {
      const hasExecute = typeof algorithm.execute === 'function';
      methodTests.execute = hasExecute;
      if (!hasExecute) {
        issues.push('execute method must be a function');
      }
    } catch (error) {
      issues.push(`execute method check failed: ${error}`);
    }

    return {
      compliant: issues.length === 0,
      issues,
      methodTests
    };
  }

  /**
   * Deep equality check for test validation
   */
  private static deepEqual(a: any, b: any): boolean {
    if (a === b) return true;

    if (a == null || b == null) return a === b;

    if (Array.isArray(a) && Array.isArray(b)) {
      if (a.length !== b.length) return false;
      for (let i = 0; i < a.length; i++) {
        if (!this.deepEqual(a[i], b[i])) return false;
      }
      return true;
    }

    if (typeof a === 'object' && typeof b === 'object') {
      const keysA = Object.keys(a);
      const keysB = Object.keys(b);

      if (keysA.length !== keysB.length) return false;

      for (const key of keysA) {
        if (!keysB.includes(key)) return false;
        if (!this.deepEqual(a[key], b[key])) return false;
      }

      return true;
    }

    return false;
  }
}
