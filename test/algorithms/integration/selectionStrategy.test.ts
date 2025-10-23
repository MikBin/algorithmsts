import { describe, expect, it } from 'vitest';
import { AlgorithmSelector } from '../../../src/algorithms/utils/AlgorithmSelector';
import { CountingSort, RadixSortNumbers, RadixSortStrings } from '../../../src/algorithms/sorting';
import { BinarySearch } from '../../../src/algorithms/searching/binary-search';
import { NgramSimilarity, JaroDistance, LevenshteinDistance } from '../../../src/algorithms/strings';

describe('Algorithm Selection Strategy Integration Tests', () => {
  describe('Sorting Algorithm Selection', () => {
    const sortingAlgorithms = [
      new CountingSort(),
      new RadixSortNumbers(),
      new RadixSortStrings()
    ];

    it('should select CountingSort for small arrays', () => {
      const criteria = { inputSize: 10, prioritizeSpeed: true };
      const result = AlgorithmSelector.selectSortingAlgorithm(sortingAlgorithms, criteria);

      expect(result.selectedAlgorithm.getName()).toBe('CountingSort');
      expect(result.reason).toContain('small input size');
      expect(result.expectedMetrics.timeComplexity).toBe('O(n + k)');
    });

    it('should select RadixSort for medium arrays when prioritizing speed', () => {
      const criteria = { inputSize: 500, prioritizeSpeed: true };
      const result = AlgorithmSelector.selectSortingAlgorithm(sortingAlgorithms, criteria);

      expect(result.selectedAlgorithm.getName()).toBe('RadixSortNumbers');
      expect(result.reason).toContain('medium input size');
      expect(result.expectedMetrics.timeComplexity).toBe('O(n * d)');
    });

    it('should select linear time algorithm for large arrays when prioritizing speed', () => {
      const criteria = { inputSize: 5000, prioritizeSpeed: true };
      const result = AlgorithmSelector.selectSortingAlgorithm(sortingAlgorithms, criteria);

      // Should prefer linear time algorithms for large inputs
      expect(['CountingSort', 'RadixSortNumbers']).toContain(result.selectedAlgorithm.getName());
      expect(result.reason).toContain('large input size');
    });

    it('should consider maximum execution time constraints', () => {
      const criteria = { inputSize: 100, maxExecutionTime: 1, prioritizeSpeed: true };
      const result = AlgorithmSelector.selectSortingAlgorithm(sortingAlgorithms, criteria);

      expect(result.selectedAlgorithm).toBeDefined();
      expect(result.expectedMetrics.timeComplexity).toBeDefined();
    });
  });

  describe('Searching Algorithm Selection', () => {
    const searchingAlgorithms = [new BinarySearch<number>()];

    it('should select BinarySearch for sorted arrays', () => {
      const criteria = { inputSize: 1000 };
      const result = AlgorithmSelector.selectSearchingAlgorithm(searchingAlgorithms, criteria);

      expect(result.selectedAlgorithm.getName()).toBe('BinarySearch');
      expect(result.reason).toContain('optimal for searching');
      expect(result.expectedMetrics.timeComplexity).toBe('O(log n)');
    });

    it('should handle different input sizes for searching', () => {
      const criteria = { inputSize: 10000 };
      const result = AlgorithmSelector.selectSearchingAlgorithm(searchingAlgorithms, criteria);

      expect(result.selectedAlgorithm.getName()).toBe('BinarySearch');
      expect(result.expectedMetrics.spaceComplexity).toBe('O(1)');
    });
  });

  describe('String Similarity Algorithm Selection', () => {
    const stringAlgorithms = [
      new NgramSimilarity(),
      new JaroDistance(),
      new LevenshteinDistance()
    ];

    it('should select NgramSimilarity for short strings', () => {
      const criteria = { inputSize: 20, prioritizeSpeed: true };
      const result = AlgorithmSelector.selectStringSimilarityAlgorithm(stringAlgorithms, criteria);

      expect(result.selectedAlgorithm.getName()).toBe('NgramSimilarity');
      expect(result.reason).toContain('short strings');
      expect(result.expectedMetrics.timeComplexity).toBe('O(m + n)');
    });

    it('should select linear complexity algorithm when prioritizing speed', () => {
      const criteria = { inputSize: 100, prioritizeSpeed: true };
      const result = AlgorithmSelector.selectStringSimilarityAlgorithm(stringAlgorithms, criteria);

      expect(result.selectedAlgorithm.getName()).toBe('NgramSimilarity');
      expect(result.reason).toContain('prioritizing speed');
    });

    it('should select sophisticated algorithm when prioritizing accuracy', () => {
      const criteria = { inputSize: 50, prioritizeSpeed: false };
      const result = AlgorithmSelector.selectStringSimilarityAlgorithm(stringAlgorithms, criteria);

      // Should select more accurate but potentially slower algorithm
      expect(['LevenshteinDistance', 'JaroDistance']).toContain(result.selectedAlgorithm.getName());
      expect(result.reason).toContain('accuracy');
    });

    it('should handle long strings appropriately', () => {
      const criteria = { inputSize: 1000 };
      const result = AlgorithmSelector.selectStringSimilarityAlgorithm(stringAlgorithms, criteria);

      expect(result.selectedAlgorithm).toBeDefined();
      expect(result.expectedMetrics.timeComplexity).toBeDefined();
    });
  });

  describe('Selection Criteria Validation', () => {
    it('should handle edge cases in selection criteria', () => {
      const sortingAlgorithms = [new CountingSort()];

      // Very small input
      const smallCriteria = { inputSize: 1 };
      const smallResult = AlgorithmSelector.selectSortingAlgorithm(sortingAlgorithms, smallCriteria);
      expect(smallResult.selectedAlgorithm).toBeDefined();

      // Very large input
      const largeCriteria = { inputSize: 100000 };
      const largeResult = AlgorithmSelector.selectSortingAlgorithm(sortingAlgorithms, largeCriteria);
      expect(largeResult.selectedAlgorithm).toBeDefined();
    });

    it('should provide meaningful selection reasoning', () => {
      const algorithms = [new CountingSort(), new RadixSortNumbers()];
      const criteria = { inputSize: 100 };

      const result = AlgorithmSelector.selectSortingAlgorithm(algorithms, criteria);

      expect(result.reason).toBeTruthy();
      expect(result.reason.length).toBeGreaterThan(10);
      expect(result.expectedMetrics).toBeDefined();
      expect(result.expectedMetrics.timeComplexity).toBeTruthy();
      expect(result.expectedMetrics.spaceComplexity).toBeTruthy();
    });
  });

  describe('Algorithm Suitability Assessment', () => {
    it('should assess algorithm suitability based on input characteristics', () => {
      const algorithms = [
        new CountingSort(),
        new RadixSortNumbers(),
        new BinarySearch<number>()
      ];

      // Test different scenarios
      const scenarios = [
        { inputSize: 10, expectedPreference: 'CountingSort' },
        { inputSize: 1000, expectedPreference: 'RadixSortNumbers' },
        { inputSize: 100, searchScenario: true, expectedPreference: 'BinarySearch' }
      ];

      scenarios.forEach(scenario => {
        if (scenario.searchScenario) {
          const result = AlgorithmSelector.selectSearchingAlgorithm(
            algorithms.filter(a => a.getName().includes('BinarySearch')),
            { inputSize: scenario.inputSize }
          );
          expect(result.selectedAlgorithm.getName()).toBe(scenario.expectedPreference);
        } else {
          const result = AlgorithmSelector.selectSortingAlgorithm(
            algorithms.filter(a => !a.getName().includes('BinarySearch')),
            { inputSize: scenario.inputSize }
          );
          expect(result.selectedAlgorithm.getName()).toBe(scenario.expectedPreference);
        }
      });
    });
  });
});
