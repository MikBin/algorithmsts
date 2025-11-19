import { describe, it, expect } from 'vitest';
import {
  fidelitySimilarity,
  hellingerDistance,
  matusitaDistance,
  squaredChordDistance,
} from '../../src/vector-similarity/similarity/fidelity';

const hellingerSimilarity = (a: number[], b: number[]) => 1 - hellingerDistance(a, b);
const matusitaSimilarity = (a: number[], b: number[]) => 1 - matusitaDistance(a, b);
const squaredChordSimilarity = (a: number[], b: number[]) => 1 - squaredChordDistance(a, b);

const testCases = [
  {
    name: 'Identical Vectors',
    vecA: [1, 2, 3, 4, 5],
    vecB: [1, 2, 3, 4, 5],
    expected: {
      fidelitySimilarity: 1,
      hellingerSimilarity: 1,
      matusitaSimilarity: 1,
      squaredChordSimilarity: 1,
    },
  },
  {
    name: 'Zero Vectors',
    vecA: [0, 0, 0, 0, 0],
    vecB: [0, 0, 0, 0, 0],
    expected: {
      fidelitySimilarity: 1,
      hellingerSimilarity: 1,
      matusitaSimilarity: 1,
      squaredChordSimilarity: 1,
    },
  },
];

const similarityFunctions = {
  fidelitySimilarity,
  hellingerSimilarity,
  matusitaSimilarity,
  squaredChordSimilarity,
};

describe('Fidelity Similarities', () => {
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
