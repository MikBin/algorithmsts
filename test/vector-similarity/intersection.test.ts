import { describe, it, expect } from 'vitest';
import {
  intersectionSimilarity,
  waveHedgesSimilarity,
  sorensenSimilarity,
  motykaSimilarity,
  intersectionSimilarityNormalized,
} from '../../src/vector-similarity/similarity/intersection';

const testCases = [
  {
    name: 'Identical Vectors',
    vecA: [1, 2, 3, 4, 5],
    vecB: [1, 2, 3, 4, 5],
    expected: {
      intersectionSimilarity: 1, // Normalized: 1
      waveHedgesSimilarity: 1,
      sorensenSimilarity: 1,
      motykaSimilarity: 1,
      intersectionSimilarityNormalized: 1,
    },
  },
  {
    name: 'Zero Vectors',
    vecA: [0, 0, 0, 0, 0],
    vecB: [0, 0, 0, 0, 0],
    expected: {
      intersectionSimilarity: 1, // Normalized: 1 (identical)
      waveHedgesSimilarity: 1,
      sorensenSimilarity: 1,
      motykaSimilarity: 1,
      intersectionSimilarityNormalized: 1,
    },
  },
];

const similarityFunctions = {
  intersectionSimilarity,
  waveHedgesSimilarity,
  sorensenSimilarity,
  motykaSimilarity,
  intersectionSimilarityNormalized,
};

describe('Intersection Similarities', () => {
  Object.entries(similarityFunctions).forEach(([name, func]) => {
    describe(name, () => {
      testCases.forEach(test => {
        it(`should pass for ${test.name}`, () => {
          const expectedValue = test.expected[name as keyof typeof test.expected];
          const result = func(test.vecA, test.vecB);

          if (isNaN(expectedValue)) {
            expect(result).toBeNaN();
          } else if (!isFinite(expectedValue)) {
            expect(result).toBe(Infinity);
          } else {
            expect(result.toFixed(4)).toBe(expectedValue.toFixed(4));
          }
        });
      });
    });
  });
});
