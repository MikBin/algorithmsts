import { IAlgorithm } from '../core/interfaces/IAlgorithm';
import { PerformanceMonitor } from './performance-monitor';
import { ComplexityAnalyzer } from './complexity-analyzer';

/**
 * Performance metrics for algorithm comparison
 */
export interface AlgorithmPerformanceMetrics {
  /** Execution time in milliseconds */
  executionTime: number;
  /** Memory usage in bytes (if available) */
  memoryUsage?: number;
  /** Whether the algorithm met performance targets */
  withinTarget: boolean;
}

/**
 * Result of comparing two algorithms
 */
export interface AlgorithmComparisonResult {
  /** Name of the first algorithm */
  algorithm1: string;
  /** Name of the second algorithm */
  algorithm2: string;
  /** Performance metrics for the first algorithm */
  metrics1: AlgorithmPerformanceMetrics;
  /** Performance metrics for the second algorithm */
  metrics2: AlgorithmPerformanceMetrics;
  /** Which algorithm performed better (1 for first, 2 for second, 0 for tie) */
  winner: 0 | 1 | 2;
  /** Performance difference in milliseconds (positive means algorithm1 is faster) */
  timeDifference: number;
}

/**
 * Benchmark Runner
 *
 * Runs benchmarks and compares algorithms.
 */
export class BenchmarkRunner {
  /**
   * Compares the performance of two algorithms on the same input
   * @param algorithm1 First algorithm to compare
   * @param algorithm2 Second algorithm to compare
   * @param input Input data for both algorithms
   * @param iterations Number of iterations to run for more accurate measurement
   * @returns Comparison result with performance metrics
   */
  public static compareAlgorithms<TInput, TOutput1, TOutput2>(
    algorithm1: IAlgorithm<TInput, TOutput1>,
    algorithm2: IAlgorithm<TInput, TOutput2>,
    input: TInput,
    iterations: number = 1
  ): AlgorithmComparisonResult {
    // Measure first algorithm
    const time1 = PerformanceMonitor.measureExecutionTime(() => {
      for (let i = 0; i < iterations; i++) {
        algorithm1.execute(input);
      }
    });

    // Measure second algorithm
    const time2 = PerformanceMonitor.measureExecutionTime(() => {
      for (let i = 0; i < iterations; i++) {
        algorithm2.execute(input);
      }
    });

    const avgTime1 = time1 / iterations;
    const avgTime2 = time2 / iterations;

    // Determine winner based on execution time
    let winner: 0 | 1 | 2;
    if (Math.abs(avgTime1 - avgTime2) < 0.1) { // Consider them equal within 0.1ms
      winner = 0;
    } else {
      winner = avgTime1 < avgTime2 ? 1 : 2;
    }

    return {
      algorithm1: algorithm1.getName(),
      algorithm2: algorithm2.getName(),
      metrics1: {
        executionTime: avgTime1,
        withinTarget: ComplexityAnalyzer.checkPerformanceTarget(algorithm1, avgTime1)
      },
      metrics2: {
        executionTime: avgTime2,
        withinTarget: ComplexityAnalyzer.checkPerformanceTarget(algorithm2, avgTime2)
      },
      winner,
      timeDifference: avgTime2 - avgTime1 // Positive means algorithm1 is faster
    };
  }

  /**
   * Benchmarks an algorithm with multiple input sizes
   * @param algorithm Algorithm to benchmark
   * @param inputGenerator Function that generates input of given size
   * @param sizes Array of input sizes to test
   * @returns Array of performance metrics for each size
   */
  public static benchmarkAlgorithm<TInput, TOutput>(
    algorithm: IAlgorithm<TInput, TOutput>,
    inputGenerator: (size: number) => TInput,
    sizes: number[]
  ): Array<{ size: number; metrics: AlgorithmPerformanceMetrics }> {
    const results: Array<{ size: number; metrics: AlgorithmPerformanceMetrics }> = [];

    for (const size of sizes) {
      const input = inputGenerator(size);
      const executionTime = PerformanceMonitor.measureExecutionTime(() => {
        algorithm.execute(input);
      });

      results.push({
        size,
        metrics: {
          executionTime,
          withinTarget: ComplexityAnalyzer.checkPerformanceTarget(algorithm, executionTime)
        }
      });
    }

    return results;
  }
}
