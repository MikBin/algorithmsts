
// A simple script to test noise resilience of vector similarity functions
import {
  computeVectorSimilarityMeanStdPenalized,
} from './similarity/vectorSimilarityMeanStdPenalized';
import { vectorSimilarityCorrelation } from './similarity/vectorSimilarityCorrelation';
import { pearsonCorrelationSimilarity, cosineSimilarity, euclideanSimilarity, manhattanSimilarity, gowerSimilarity, soergelSimilarity, kulczynskiSimilarity, lorentzianSimilarity } from './similarity/classic';
import { weightedMinkowskiSimilarity, canberraSimilarity, chebyshevSimilarity } from './similarity/heuristics';
import { jaccardSimilarityBinary, jaccardSimilarityWeighted, jaccardSimilarityRealValued } from './similarity/jaccard';
import { computeVectorSimilarityRobust } from './similarity/vectorSimilarityRobust';
import { computeVectorSimilarityMeanStdPower } from './similarity/vectorSimilarityMeanStdPower';
import { computeVectorSimilarityMetricLike } from './similarity/vectorSimilarityMetricLike';
import { computeVectorSimilarityTunable } from './similarity/vectorSimilarityTunable';
import { computeVectorSimilarityVarianceWeighted } from './similarity/vectorSimilarityVarianceWeighted';
import { intersectionSimilarity, waveHedgesSimilarity, sorensenSimilarity, motykaSimilarity } from './similarity/intersection';
import { kullbackLeiblerSimilarity, jeffreysSimilarity, kSimilarity, topsoeSimilarity } from './similarity/entropy';
import { pearsonChiSquareDistance, neymanChiSquareDistance, additiveSymmetricChiSquareDistance, squaredChiSquareDistance } from './similarity/chi-square';
import { normalizedPearsonChiSquareSimilarity, normalizedNeymanChiSquareSimilarity, normalizedAdditiveSymmetricChiSquareSimilarity, normalizedSquaredChiSquareSimilarity } from './similarity/normalized-chi-square';
import { fidelitySimilarity, hellingerDistance, matusitaDistance, squaredChordDistance } from './similarity/fidelity';
import { normalizedMatusitaSimilarity, normalizedSquaredChordSimilarity } from './similarity/normalized-fidelity';

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
  console.log('Cosine Similarity:', cosineSimilarity(baseVector, noisyVector).toFixed(4));
  console.log('Euclidean Similarity:', euclideanSimilarity(baseVector, noisyVector).toFixed(4));
  console.log('Manhattan Similarity:', manhattanSimilarity(baseVector, noisyVector).toFixed(4));
  console.log('Gower Similarity:', gowerSimilarity(baseVector, noisyVector, []).toFixed(4));
  console.log('Soergel Similarity:', soergelSimilarity(baseVector, noisyVector).toFixed(4));
  console.log('Kulczynski Similarity:', kulczynskiSimilarity(baseVector, noisyVector).toFixed(4));
  console.log('Lorentzian Similarity:', lorentzianSimilarity(baseVector, noisyVector).toFixed(4));
  console.log('Weighted Minkowski Similarity:', weightedMinkowskiSimilarity(baseVector, noisyVector).toFixed(4));
  console.log('Canberra Similarity:', canberraSimilarity(baseVector, noisyVector).toFixed(4));
  console.log('Chebyshev Similarity:', chebyshevSimilarity(baseVector, noisyVector).toFixed(4));
  console.log('Intersection Similarity:', intersectionSimilarity(baseVector, noisyVector).toFixed(4));
  console.log('Wave-Hedges Similarity:', waveHedgesSimilarity(baseVector, noisyVector).toFixed(4));
  console.log('Sorensen Similarity:', sorensenSimilarity(baseVector, noisyVector).toFixed(4));
  console.log('Motyka Similarity:', motykaSimilarity(baseVector, noisyVector).toFixed(4));
  console.log('Kullback-Leibler Similarity:', kullbackLeiblerSimilarity(baseVector, noisyVector).toFixed(4));
  console.log('Jeffreys Similarity:', jeffreysSimilarity(baseVector, noisyVector).toFixed(4));
  console.log('K-Divergence Similarity:', kSimilarity(baseVector, noisyVector).toFixed(4));
  console.log('Topsoe Similarity:', topsoeSimilarity(baseVector, noisyVector).toFixed(4));
  console.log('Pearson Chi-Square Distance:', pearsonChiSquareDistance(baseVector, noisyVector).toFixed(4));
  console.log('Neyman Chi-Square Distance:', neymanChiSquareDistance(baseVector, noisyVector).toFixed(4));
  console.log('Additive Symmetric Chi-Square Distance:', additiveSymmetricChiSquareDistance(baseVector, noisyVector).toFixed(4));
  console.log('Squared Chi-Square Distance:', squaredChiSquareDistance(baseVector, noisyVector).toFixed(4));
  console.log('Normalized Pearson Chi-Square Similarity:', normalizedPearsonChiSquareSimilarity(baseVector, noisyVector).toFixed(4));
  console.log('Normalized Neyman Chi-Square Similarity:', normalizedNeymanChiSquareSimilarity(baseVector, noisyVector).toFixed(4));
  console.log('Normalized Additive Symmetric Chi-Square Similarity:', normalizedAdditiveSymmetricChiSquareSimilarity(baseVector, noisyVector).toFixed(4));
  console.log('Normalized Squared Chi-Square Similarity:', normalizedSquaredChiSquareSimilarity(baseVector, noisyVector).toFixed(4));
  console.log('Fidelity Similarity:', fidelitySimilarity(baseVector, noisyVector).toFixed(4));
  console.log('Hellinger Distance:', hellingerDistance(baseVector, noisyVector).toFixed(4));
  console.log('Matusita Distance:', matusitaDistance(baseVector, noisyVector).toFixed(4));
  console.log('Squared-Chord Distance:', squaredChordDistance(baseVector, noisyVector).toFixed(4));
  console.log('Normalized Matusita Similarity:', normalizedMatusitaSimilarity(baseVector, noisyVector).toFixed(4));
  console.log('Normalized Squared-Chord Similarity:', normalizedSquaredChordSimilarity(baseVector, noisyVector).toFixed(4));
  console.log('Jaccard Binary Similarity:', jaccardSimilarityBinary(baseVector, noisyVector).toFixed(4));
  console.log('Jaccard Weighted Similarity:', jaccardSimilarityWeighted(baseVector, noisyVector).toFixed(4));
  console.log('Jaccard Real Valued Similarity:', jaccardSimilarityRealValued(baseVector, noisyVector).toFixed(4));
  console.log('Robust Similarity:', computeVectorSimilarityRobust(baseVector, noisyVector).toFixed(4));
  console.log('Mean/Std Power Similarity:', computeVectorSimilarityMeanStdPower(baseVector, noisyVector).toFixed(4));
  console.log('Metric Like Similarity:', computeVectorSimilarityMetricLike(baseVector, noisyVector).toFixed(4));
  console.log('Tunable Similarity:', computeVectorSimilarityTunable(baseVector, noisyVector).toFixed(4));
  console.log('Variance Weighted Similarity:', computeVectorSimilarityVarianceWeighted(baseVector, noisyVector).toFixed(4));
});
