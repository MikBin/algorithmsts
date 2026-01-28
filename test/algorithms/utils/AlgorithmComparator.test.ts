import { describe, it, expect, vi } from 'vitest';
import { AlgorithmComparator } from '../../../src/algorithms/utils/AlgorithmComparator';
import { IAlgorithm } from '../../../src/core/interfaces/IAlgorithm';
import { PerformanceMonitor } from '../../../src/core/utils/PerformanceMonitor';

// Mock Algorithm implementation for testing
class MockAlgorithm implements IAlgorithm<number[], number[]> {
  private name: string;
  private complexity: string;
  private delay: number;

  constructor(name: string, complexity: string = 'O(n)', delay: number = 0) {
    this.name = name;
    this.complexity = complexity;
    this.delay = delay;
  }

  execute(input: number[]): number[] {
    // Simulate work
    if (this.delay > 0) {
      const end = Date.now() + this.delay;
      while (Date.now() < end) {}
    }
    return [...input].sort((a, b) => a - b);
  }

  getName(): string {
    return this.name;
  }

  getTimeComplexity(): string {
    return this.complexity;
  }

  getSpaceComplexity(): string {
    return 'O(1)';
  }
}

describe('AlgorithmComparator', () => {
  describe('compareAlgorithms', () => {
    it('should compare two algorithms and identify the winner', () => {
      const fastAlgo = new MockAlgorithm('FastAlgo', 'O(n)', 0);
      const slowAlgo = new MockAlgorithm('SlowAlgo', 'O(n^2)', 10);
      const input = [5, 2, 8, 1, 9];

      const result = AlgorithmComparator.compareAlgorithms(fastAlgo, slowAlgo, input);

      expect(result.algorithm1).toBe('FastAlgo');
      expect(result.algorithm2).toBe('SlowAlgo');
      expect(result.winner).toBe(1); // FastAlgo should win
      expect(result.timeDifference).toBeGreaterThan(0);
      expect(result.metrics1.executionTime).toBeLessThan(result.metrics2.executionTime);
    });

    it('should handle ties correctly', () => {
      const measureSpy = vi.spyOn(PerformanceMonitor, 'measureExecutionTime');
      measureSpy.mockReturnValue(5.0);

      try {
        const algo1 = new MockAlgorithm('Algo1', 'O(n)', 0);
        const algo2 = new MockAlgorithm('Algo2', 'O(n)', 0);
        const input = [5, 2, 8, 1, 9];

        const result = AlgorithmComparator.compareAlgorithms(algo1, algo2, input, 10);

        expect(result.winner).toBe(0); // Tie
        expect(Math.abs(result.timeDifference)).toBeLessThan(0.1);
      } finally {
        measureSpy.mockRestore();
      }
    });

    it('should determine target compliance correctly', () => {
      const algo = new MockAlgorithm('TargetAlgo', 'O(1)', 0);
      const input = [1, 2, 3];

      const result = AlgorithmComparator.compareAlgorithms(algo, algo, input);

      expect(result.metrics1.withinTarget).toBeDefined();
    });
  });

  describe('benchmarkAlgorithm', () => {
    it('should benchmark an algorithm with multiple input sizes', () => {
      const algo = new MockAlgorithm('BenchmarkAlgo');
      const inputGenerator = (size: number) => Array(size).fill(0).map(() => Math.random());
      const sizes = [10, 100, 1000];

      const results = AlgorithmComparator.benchmarkAlgorithm(algo, inputGenerator, sizes);

      expect(results).toHaveLength(3);
      expect(results[0].size).toBe(10);
      expect(results[1].size).toBe(100);
      expect(results[2].size).toBe(1000);

      results.forEach(res => {
        expect(res.metrics.executionTime).toBeDefined();
        expect(res.metrics.withinTarget).toBeDefined();
      });
    });
  });

  describe('isWithinTarget', () => {
    // Indirect testing via benchmarkAlgorithm as the method is private
    it('should validate O(1) complexity correctly', () => {
      const algo = new MockAlgorithm('ConstantTime', 'O(1)', 0);
      const inputGenerator = (size: number) => Array(size).fill(0);

      const results = AlgorithmComparator.benchmarkAlgorithm(algo, inputGenerator, [10]);
      expect(results[0].metrics.withinTarget).toBe(true);
    });

    it('should validate O(log n) complexity correctly', () => {
      const algo = new MockAlgorithm('LogTime', 'O(log n)', 0);
      const inputGenerator = (size: number) => Array(size).fill(0);

      const results = AlgorithmComparator.benchmarkAlgorithm(algo, inputGenerator, [10]);
      expect(results[0].metrics.withinTarget).toBe(true);
    });

    it('should validate other complexities leniently', () => {
      const algo = new MockAlgorithm('LinearTime', 'O(n)', 0);
      const inputGenerator = (size: number) => Array(size).fill(0);

      const results = AlgorithmComparator.benchmarkAlgorithm(algo, inputGenerator, [10]);
      expect(results[0].metrics.withinTarget).toBe(true);
    });
  });
});
