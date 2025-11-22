import { describe, it, expect } from 'vitest';
import {
  computeVectorSimilarityMeanStdPenalized,
} from '../../src/vector-similarity/similarity/vectorSimilarityMeanStdPenalized';
import { vectorSimilarityCorrelation } from '../../src/vector-similarity/similarity/vectorSimilarityCorrelation';
import { computeVectorSimilarityRobust } from '../../src/vector-similarity/similarity/vectorSimilarityRobust';
import { vectorSimilarityMeanStdPowerArithmeticMean } from '../../src/vector-similarity/similarity/vectorSimilarityMeanStdPowerArithmeticMean';
import { computeVectorSimilarityMetricLike } from '../../src/vector-similarity/similarity/vectorSimilarityMetricLike';
import { computeVectorSimilarityTunable } from '../../src/vector-similarity/similarity/vectorSimilarityTunable';
import { computeVectorSimilarityVarianceWeighted } from '../../src/vector-similarity/similarity/vectorSimilarityVarianceWeighted';

const testCases = [
  {
    name: 'Identical Vectors',
    vecA: [1, 2, 3, 4, 5],
    vecB: [1, 2, 3, 4, 5],
    expected: {
      computeVectorSimilarityMeanStdPenalized: 1,
      vectorSimilarityCorrelation: 1,
      computeVectorSimilarityRobust: 1,
      vectorSimilarityMeanStdPowerArithmeticMean: 1,
      computeVectorSimilarityMetricLike: 1,
      computeVectorSimilarityTunable: 1,
      computeVectorSimilarityVarianceWeighted: 1,
    },
  },
  {
    name: 'Zero Vectors',
    vecA: [0, 0, 0, 0, 0],
    vecB: [0, 0, 0, 0, 0],
    expected: {
      computeVectorSimilarityMeanStdPenalized: 1,
      vectorSimilarityCorrelation: 1,
      computeVectorSimilarityRobust: 1,
      vectorSimilarityMeanStdPowerArithmeticMean: 1,
      computeVectorSimilarityMetricLike: 1,
      computeVectorSimilarityTunable: 1,
      computeVectorSimilarityVarianceWeighted: 1,
    },
  },
];

const similarityFunctions = {
  computeVectorSimilarityMeanStdPenalized,
  vectorSimilarityCorrelation,
  computeVectorSimilarityRobust,
  vectorSimilarityMeanStdPowerArithmeticMean,
  computeVectorSimilarityMetricLike,
  computeVectorSimilarityTunable,
  computeVectorSimilarityVarianceWeighted,
};

describe('Custom Similarities', () => {
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
