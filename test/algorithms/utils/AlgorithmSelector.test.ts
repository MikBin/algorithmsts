import { describe, it, expect } from 'vitest';
import { AlgorithmSelector, SelectionCriteria } from '../../../src/algorithms/utils/AlgorithmSelector';
import { IAlgorithm } from '../../../src/core/interfaces/IAlgorithm';

// Mock Algorithm implementation for testing
class MockAlgorithm implements IAlgorithm<any, any> {
  private name: string;
  private complexity: string;

  constructor(name: string, complexity: string = 'O(n)') {
    this.name = name;
    this.complexity = complexity;
  }

  execute(input: any): any {
    return input;
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

describe('AlgorithmSelector', () => {
  describe('selectSortingAlgorithm', () => {
    const algorithms = [
      new MockAlgorithm('RadixSort', 'O(nk)'),
      new MockAlgorithm('CountingSort', 'O(n+k)'),
      new MockAlgorithm('QuickSort', 'O(n log n)'),
      new MockAlgorithm('MergeSort', 'O(n log n)'),
      new MockAlgorithm('LinearSort', 'O(n)') // Fictional linear sort
    ];

    it('should select any algorithm for small input sizes', () => {
      const criteria: SelectionCriteria = { inputSize: 5 };
      const result = AlgorithmSelector.selectSortingAlgorithm(algorithms, criteria);

      expect(result.selectedAlgorithm).toBeDefined();
      expect(result.reason).toContain('small input size');
    });

    it('should select stable/efficient algorithms for medium input sizes', () => {
      const criteria: SelectionCriteria = { inputSize: 500 };
      const result = AlgorithmSelector.selectSortingAlgorithm(algorithms, criteria);

      expect(result.selectedAlgorithm).toBeDefined();
      expect(['RadixSort', 'CountingSort']).toContain(result.selectedAlgorithm.getName());
      expect(result.reason).toContain('medium input size');
    });

    it('should prioritize speed for large input sizes when requested', () => {
      const criteria: SelectionCriteria = { inputSize: 10000, prioritizeSpeed: true };
      const result = AlgorithmSelector.selectSortingAlgorithm(algorithms, criteria);

      expect(result.selectedAlgorithm).toBeDefined();
      // It looks for O(n) or CountingSort
      const name = result.selectedAlgorithm.getName();
      expect(['LinearSort', 'CountingSort', 'RadixSort']).toContain(name);
      expect(result.reason).toContain('prioritizing speed');
    });

    it('should fallback correctly if specific algorithms are missing', () => {
      const limitedAlgorithms = [new MockAlgorithm('BubbleSort', 'O(n^2)')];
      const criteria: SelectionCriteria = { inputSize: 10000 };

      const result = AlgorithmSelector.selectSortingAlgorithm(limitedAlgorithms, criteria);
      expect(result.selectedAlgorithm.getName()).toBe('BubbleSort');
    });
  });

  describe('selectSearchingAlgorithm', () => {
    const algorithms = [
      new MockAlgorithm('LinearSearch', 'O(n)'),
      new MockAlgorithm('BinarySearch', 'O(log n)')
    ];

    it('should select BinarySearch if available', () => {
      const criteria: SelectionCriteria = { inputSize: 1000 };
      const result = AlgorithmSelector.selectSearchingAlgorithm(algorithms, criteria);

      expect(result.selectedAlgorithm.getName()).toBe('BinarySearch');
      expect(result.reason).toContain('optimal for searching in sorted arrays');
    });

    it('should fallback if BinarySearch is not available', () => {
      const limitedAlgorithms = [new MockAlgorithm('LinearSearch', 'O(n)')];
      const criteria: SelectionCriteria = { inputSize: 1000 };

      const result = AlgorithmSelector.selectSearchingAlgorithm(limitedAlgorithms, criteria);
      expect(result.selectedAlgorithm.getName()).toBe('LinearSearch');
    });
  });

  describe('selectStringSimilarityAlgorithm', () => {
    const algorithms = [
      new MockAlgorithm('LevenshteinDistance', 'O(nm)'),
      new MockAlgorithm('JaroDistance', 'O(m+n)'), // Usually considered faster/simpler approximation
      new MockAlgorithm('NgramSimilarity', 'O(m+n)'), // Depending on implementation
      new MockAlgorithm('LinearSimilarity', 'O(m + n)')
    ];

    it('should prioritize accuracy when requested', () => {
      const criteria: SelectionCriteria = { inputSize: 100, prioritizeSpeed: false };
      const result = AlgorithmSelector.selectStringSimilarityAlgorithm(algorithms, criteria);

      expect(['LevenshteinDistance', 'JaroDistance']).toContain(result.selectedAlgorithm.getName());
      expect(result.reason).toContain('accuracy');
    });

    it('should select simple algorithms for short strings', () => {
      const criteria: SelectionCriteria = { inputSize: 20, prioritizeSpeed: true };
      const result = AlgorithmSelector.selectStringSimilarityAlgorithm(algorithms, criteria);

      expect(['NgramSimilarity', 'JaroDistance']).toContain(result.selectedAlgorithm.getName());
      expect(result.reason).toContain('short strings');
    });

    it('should prioritize speed for long strings', () => {
      const criteria: SelectionCriteria = { inputSize: 1000, prioritizeSpeed: true };
      const result = AlgorithmSelector.selectStringSimilarityAlgorithm(algorithms, criteria);

      // Should pick one with linear complexity or Ngram
      expect(['LinearSimilarity', 'NgramSimilarity', 'JaroDistance']).toContain(result.selectedAlgorithm.getName());
      expect(result.reason).toContain('longer strings');
    });
  });
});
