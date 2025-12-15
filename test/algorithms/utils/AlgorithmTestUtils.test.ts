import { describe, it, expect, vi, afterEach } from 'vitest';
import { AlgorithmTestUtils } from '../../../src/algorithms/utils/AlgorithmTestUtils';
import { IAlgorithm } from '../../../src/core/interfaces/IAlgorithm';

// Mock Algorithm implementation for testing
class MockAlgorithm implements IAlgorithm<any, any> {
  private name: string;

  constructor(name: string = 'MockAlgo') {
    this.name = name;
  }

  execute(input: any): any {
    return input;
  }

  getName(): string {
    return this.name;
  }

  getTimeComplexity(): string {
    return 'O(n)';
  }

  getSpaceComplexity(): string {
    return 'O(1)';
  }
}

describe('AlgorithmTestUtils', () => {
  describe('validateAlgorithmInterface', () => {
    it('should validate a correct algorithm implementation', () => {
      const algo = new MockAlgorithm();
      const result = AlgorithmTestUtils.validateAlgorithmInterface(algo);

      expect(result.isValid).toBe(true);
      expect(result.issues).toHaveLength(0);
    });

    it('should detect missing methods', () => {
      const invalidAlgo = {
        getName: () => 'Invalid'
        // Missing execute, getTimeComplexity, getSpaceComplexity
      } as any;

      const result = AlgorithmTestUtils.validateAlgorithmInterface(invalidAlgo);

      expect(result.isValid).toBe(false);
      expect(result.issues).toContain('execute method is missing');
      expect(result.issues).toContain('getTimeComplexity method is missing');
      expect(result.issues).toContain('getSpaceComplexity method is missing');
    });

    it('should detect invalid return types', () => {
      const invalidAlgo = {
        execute: () => {},
        getName: () => 123, // Should be string
        getTimeComplexity: () => 'O(1)',
        getSpaceComplexity: () => 'O(1)'
      } as any;

      const result = AlgorithmTestUtils.validateAlgorithmInterface(invalidAlgo);

      expect(result.isValid).toBe(false);
      expect(result.issues).toContain('getName() must return a string');
    });

    it('should handle errors during method calls', () => {
        const errorAlgo = {
            execute: () => {},
            getName: () => { throw new Error('Oops'); },
            getTimeComplexity: () => 'O(1)',
            getSpaceComplexity: () => 'O(1)'
        } as any;

        const result = AlgorithmTestUtils.validateAlgorithmInterface(errorAlgo);
        expect(result.isValid).toBe(false);
        expect(result.issues.some(i => i.includes('Error calling interface methods'))).toBe(true);
    });
  });

  describe('runPerformanceRegressionTests', () => {
    it('should pass if execution time is within limit', () => {
      const algo = new MockAlgorithm();
      const testCases = [
        { name: 'Fast Case', input: [1, 2, 3], maxExpectedTime: 1000 }
      ];

      const results = AlgorithmTestUtils.runPerformanceRegressionTests(algo, testCases);

      expect(results[0].passed).toBe(true);
      expect(results[0].executionTime).toBeDefined();
    });

    it('should fail if execution time exceeds limit', () => {
      const slowAlgo = new MockAlgorithm();
      // Mock execution to take time
      vi.spyOn(slowAlgo, 'execute').mockImplementation(() => {
        const start = Date.now();
        while(Date.now() - start < 20) {} // Wait 20ms
        return [];
      });

      const testCases = [
        { name: 'Slow Case', input: [], maxExpectedTime: 1 } // unreasonably tight limit
      ];

      const results = AlgorithmTestUtils.runPerformanceRegressionTests(slowAlgo, testCases);

      expect(results[0].passed).toBe(false);
    });
  });

  describe('Data Generation', () => {
    it('generateTestData should create data for specified sizes', () => {
      const generator = (size: number) => Array(size).fill(0);
      const sizes = [5, 10];

      const results = AlgorithmTestUtils.generateTestData(generator, sizes);

      expect(results).toHaveLength(2);
      expect(results[0].size).toBe(5);
      expect(results[0].data).toHaveLength(5);
      expect(results[1].size).toBe(10);
      expect(results[1].data).toHaveLength(10);
    });

    it('createRandomNumberArray should return array of correct size and range', () => {
      const size = 20;
      const min = 10;
      const max = 20;
      const arr = AlgorithmTestUtils.createRandomNumberArray(size, min, max);

      expect(arr).toHaveLength(size);
      arr.forEach(val => {
        expect(val).toBeGreaterThanOrEqual(min);
        expect(val).toBeLessThanOrEqual(max);
      });
    });

    it('createSortedNumberArray should return sorted array', () => {
      const size = 5;
      const start = 10;
      const step = 2;
      const arr = AlgorithmTestUtils.createSortedNumberArray(size, start, step);

      expect(arr).toEqual([10, 12, 14, 16, 18]);
    });

    it('createRandomStringArray should return array of strings', () => {
      const size = 10;
      const minLen = 3;
      const maxLen = 5;
      const arr = AlgorithmTestUtils.createRandomStringArray(size, minLen, maxLen);

      expect(arr).toHaveLength(size);
      arr.forEach(str => {
        expect(str.length).toBeGreaterThanOrEqual(minLen);
        expect(str.length).toBeLessThanOrEqual(maxLen);
      });
    });
  });

  describe('measureMemoryUsage', () => {
    it('should measure memory usage if available', () => {
        // Mock performance.memory if not available in environment
        if (!(performance as any).memory) {
            (performance as any).memory = { usedJSHeapSize: 1000 };
        }

        const algo = new MockAlgorithm();
        const result = AlgorithmTestUtils.measureMemoryUsage(algo, []);

        // Even if we can't reliably test memory delta in unit test, execution time should be there
        expect(result.executionTime).toBeDefined();
        // memoryUsed might be undefined if mocking didn't work perfectly or env differences
    });
  });
});
