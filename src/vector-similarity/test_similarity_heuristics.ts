import assert from 'assert';
// A simple test script for similarity heuristics
import {
  pearsonCorrelationSimilarity, cosineSimilarity, euclideanSimilarity, manhattanSimilarity
} from './similarity/classic';
import {
  weightedMinkowskiSimilarity,
  canberraSimilarity,
  chebyshevSimilarity,
  brayCurtisSimilarity,
  harmonicMeanSimilarity,
  waveHedgesSimilarity,
  kendallCorrelationSimilarity
} from './similarity/heuristics';
import {
  jaccardSimilarityBinary, jaccardSimilarityWeighted, jaccardSimilarityRealValued
} from './similarity/jaccard';
import {
  computeVectorSimilarityMeanStdPenalized,
} from './similarity/vectorSimilarityMeanStdPenalized';
import { vectorSimilarityCorrelation } from './similarity/vectorSimilarityCorrelation';
import { computeVectorSimilarityRobust } from './similarity/vectorSimilarityRobust';
import { computeVectorSimilarityMeanStdPower } from './similarity/vectorSimilarityMeanStdPower';
import { computeVectorSimilarityMetricLike } from './similarity/vectorSimilarityMetricLike';
import { computeVectorSimilarityTunable } from './similarity/vectorSimilarityTunable';
import { computeVectorSimilarityVarianceWeighted } from './similarity/vectorSimilarityVarianceWeighted';

function runTest(name: string, testFunc: () => void) {
  try {
    testFunc();
    console.log(`✅ ${name}`);
  } catch (error) {
    console.error(`❌ ${name}`);
    console.error(error);
    process.exit(1);
  }
}

const testCases = [
  {
    name: 'Identical Vectors',
    vecA: [1, 2, 3, 4, 5],
    vecB: [1, 2, 3, 4, 5],
    expected: 1
  },
  {
    name: 'Similar Vectors',
    vecA: [1, 2, 3, 4, 5],
    vecB: [1.1, 2.2, 3.3, 4.4, 5.5],
    // Expected values are illustrative and depend on the function's sensitivity
  },
  {
    name: 'Outlier Vectors',
    vecA: [1, 2, 3, 4, 5],
    vecB: [1, 2, 100, 4, 5],
  },
  {
    name: 'Negative Correlation',
    vecA: [1, 2, 3, 4, 5],
    vecB: [5, 4, 3, 2, 1],
  },
  {
    name: 'Zero Vectors',
    vecA: [0, 0, 0, 0, 0],
    vecB: [0, 0, 0, 0, 0],
    expected: 1
  }
];

const similarityFunctions = {
  pearsonCorrelationSimilarity,
  cosineSimilarity,
  euclideanSimilarity,
  manhattanSimilarity,
  weightedMinkowskiSimilarity,
  canberraSimilarity,
  chebyshevSimilarity,
  brayCurtisSimilarity,
  harmonicMeanSimilarity,
  waveHedgesSimilarity,
  kendallCorrelationSimilarity,
  jaccardSimilarityBinary,
  jaccardSimilarityWeighted,
  jaccardSimilarityRealValued,
  computeVectorSimilarityMeanStdPenalized,
  vectorSimilarityCorrelation,
  computeVectorSimilarityRobust,
  computeVectorSimilarityMeanStdPower,
  computeVectorSimilarityMetricLike,
  computeVectorSimilarityTunable,
  computeVectorSimilarityVarianceWeighted,
};

Object.entries(similarityFunctions).forEach(([name, func]) => {
  runTest(name, () => {
    testCases.forEach(test => {
      // For identical vectors, we expect a score of 1
      if (test.name === 'Identical Vectors') {
        const result = func(test.vecA, test.vecB);
        assert.strictEqual(result.toFixed(4), test.expected.toFixed(4), `${name} failed on ${test.name}`);
      }
      // For zero vectors, we expect a score of 1
      if (test.name === 'Zero Vectors') {
        const result = func(test.vecA, test.vecB);
        assert.strictEqual(result.toFixed(4), test.expected.toFixed(4), `${name} failed on ${test.name}`);
      }
    });
  });
});

console.log('All tests passed!');
