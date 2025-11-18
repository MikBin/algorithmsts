
// A simple script to test noise resilience of vector similarity functions
import {
  computeVectorSimilarityMeanStdPenalized,
} from './similarity/vectorSimilarityMeanStdPenalized';
import { vectorSimilarityCorrelation } from './similarity/vectorSimilarityCorrelation';
import { pearsonCorrelationSimilarity, cosineSimilarity, euclideanSimilarity, manhattanSimilarity } from './similarity/classic';
import { weightedMinkowskiSimilarity, canberraSimilarity, chebyshevSimilarity, brayCurtisSimilarity, harmonicMeanSimilarity, waveHedgesSimilarity, kendallCorrelationSimilarity } from './similarity/heuristics';
import { jaccardSimilarityBinary, jaccardSimilarityWeighted, jaccardSimilarityRealValued } from './similarity/jaccard';
import { computeVectorSimilarityRobust } from './similarity/vectorSimilarityRobust';
import { computeVectorSimilarityMeanStdPower } from './similarity/vectorSimilarityMeanStdPower';
import { computeVectorSimilarityMetricLike } from './similarity/vectorSimilarityMetricLike';
import { computeVectorSimilarityTunable } from './similarity/vectorSimilarityTunable';
import { computeVectorSimilarityVarianceWeighted } from './similarity/vectorSimilarityVarianceWeighted';

function addNoise(vector: number[], noiseLevel: number): number[] {
  return vector.map((x) => x + (Math.random() - 0.5) * noiseLevel);
}

const baseVector = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const noiseLevels = [0.1, 0.5, 1.0, 2.0, 5.0];

console.log('Base Vector:', baseVector);

noiseLevels.forEach((noiseLevel) => {
  console.log(`\n--- Noise Level: ${noiseLevel} ---`);
  const noisyVector = addNoise(baseVector, noiseLevel);
  console.log('Noisy Vector:', noisyVector.map((x) => x.toFixed(4)).join(', '));

  console.log('Penalized Similarity:', computeVectorSimilarityMeanStdPenalized(baseVector, noisyVector).toFixed(4));
  console.log('Correlation Similarity:', vectorSimilarityCorrelation(baseVector, noisyVector).toFixed(4));
  console.log('Pearson Similarity:', pearsonCorrelationSimilarity(baseVector, noisyVector).toFixed(4));
  console.log('Kendall Similarity:', kendallCorrelationSimilarity(baseVector, noisyVector).toFixed(4));
  console.log('Cosine Similarity:', cosineSimilarity(baseVector, noisyVector).toFixed(4));
  console.log('Euclidean Similarity:', euclideanSimilarity(baseVector, noisyVector).toFixed(4));
  console.log('Manhattan Similarity:', manhattanSimilarity(baseVector, noisyVector).toFixed(4));
  console.log('Weighted Minkowski Similarity:', weightedMinkowskiSimilarity(baseVector, noisyVector).toFixed(4));
  console.log('Canberra Similarity:', canberraSimilarity(baseVector, noisyVector).toFixed(4));
  console.log('Chebyshev Similarity:', chebyshevSimilarity(baseVector, noisyVector).toFixed(4));
  try {
    console.log('Bray-Curtis Similarity:', brayCurtisSimilarity(baseVector, noisyVector).toFixed(4));
  } catch (e) {
    console.log('Bray-Curtis Similarity: Error - ' + e.message);
  }
  console.log('Harmonic Mean Similarity:', harmonicMeanSimilarity(baseVector, noisyVector).toFixed(4));
  console.log('Wave-Hedges Similarity:', waveHedgesSimilarity(baseVector, noisyVector).toFixed(4));
  console.log('Jaccard Binary Similarity:', jaccardSimilarityBinary(baseVector, noisyVector).toFixed(4));
  console.log('Jaccard Weighted Similarity:', jaccardSimilarityWeighted(baseVector, noisyVector).toFixed(4));
  console.log('Jaccard Real Valued Similarity:', jaccardSimilarityRealValued(baseVector, noisyVector).toFixed(4));
  console.log('Robust Similarity:', computeVectorSimilarityRobust(baseVector, noisyVector).toFixed(4));
  console.log('Mean/Std Power Similarity:', computeVectorSimilarityMeanStdPower(baseVector, noisyVector).toFixed(4));
  console.log('Metric Like Similarity:', computeVectorSimilarityMetricLike(baseVector, noisyVector).toFixed(4));
  console.log('Tunable Similarity:', computeVectorSimilarityTunable(baseVector, noisyVector).toFixed(4));
  console.log('Variance Weighted Similarity:', computeVectorSimilarityVarianceWeighted(baseVector, noisyVector).toFixed(4));
});
