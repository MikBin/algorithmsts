
// A simple script to test outliers resilience of vector similarity functions
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


// Test case 1: Short vectors with one major outlier
const vecA = [1, 34000, -0.0001];
const vecB = [1.1, 37800, -0.00015];

console.log('--- Test Case 1: Short Vectors with a Single Outlier ---');
console.log('Vector A:', vecA);
console.log('Vector B:', vecB);

console.log('Penalized Similarity:', computeVectorSimilarityMeanStdPenalized(vecA, vecB).toFixed(4));
console.log('Correlation Similarity:', vectorSimilarityCorrelation(vecA, vecB).toFixed(4));
console.log('Pearson Similarity:', pearsonCorrelationSimilarity(vecA, vecB).toFixed(4));
console.log('Cosine Similarity:', cosineSimilarity(vecA, vecB).toFixed(4));
console.log('Euclidean Similarity:', euclideanSimilarity(vecA, vecB).toFixed(4));
console.log('Manhattan Similarity:', manhattanSimilarity(vecA, vecB).toFixed(4));
console.log('Gower Similarity:', gowerSimilarity(vecA, vecB, []).toFixed(4));
console.log('Soergel Similarity:', soergelSimilarity(vecA, vecB).toFixed(4));
console.log('Kulczynski Similarity:', kulczynskiSimilarity(vecA, vecB).toFixed(4));
console.log('Lorentzian Similarity:', lorentzianSimilarity(vecA, vecB).toFixed(4));
console.log('Weighted Minkowski Similarity:', weightedMinkowskiSimilarity(vecA, vecB).toFixed(4));
console.log('Canberra Similarity:', canberraSimilarity(vecA, vecB).toFixed(4));
console.log('Chebyshev Similarity:', chebyshevSimilarity(vecA, vecB).toFixed(4));
console.log('Intersection Similarity:', intersectionSimilarity(vecA, vecB).toFixed(4));
console.log('Wave-Hedges Similarity:', waveHedgesSimilarity(vecA, vecB).toFixed(4));
console.log('Sorensen Similarity:', sorensenSimilarity(vecA, vecB).toFixed(4));
console.log('Motyka Similarity:', motykaSimilarity(vecA, vecB).toFixed(4));
console.log('Kullback-Leibler Similarity:', kullbackLeiblerSimilarity(vecA, vecB).toFixed(4));
console.log('Jeffreys Similarity:', jeffreysSimilarity(vecA, vecB).toFixed(4));
console.log('K-Divergence Similarity:', kSimilarity(vecA, vecB).toFixed(4));
console.log('Topsoe Similarity:', topsoeSimilarity(vecA, vecB).toFixed(4));
console.log('Pearson Chi-Square Distance:', pearsonChiSquareDistance(vecA, vecB).toFixed(4));
console.log('Neyman Chi-Square Distance:', neymanChiSquareDistance(vecA, vecB).toFixed(4));
console.log('Additive Symmetric Chi-Square Distance:', additiveSymmetricChiSquareDistance(vecA, vecB).toFixed(4));
console.log('Squared Chi-Square Distance:', squaredChiSquareDistance(vecA, vecB).toFixed(4));
console.log('Normalized Pearson Chi-Square Similarity:', normalizedPearsonChiSquareSimilarity(vecA, vecB).toFixed(4));
console.log('Normalized Neyman Chi-Square Similarity:', normalizedNeymanChiSquareSimilarity(vecA, vecB).toFixed(4));
console.log('Normalized Additive Symmetric Chi-Square Similarity:', normalizedAdditiveSymmetricChiSquareSimilarity(vecA, vecB).toFixed(4));
console.log('Normalized Squared Chi-Square Similarity:', normalizedSquaredChiSquareSimilarity(vecA, vecB).toFixed(4));
console.log('Fidelity Similarity:', fidelitySimilarity(vecA, vecB).toFixed(4));
console.log('Hellinger Distance:', hellingerDistance(vecA, vecB).toFixed(4));
console.log('Matusita Distance:', matusitaDistance(vecA, vecB).toFixed(4));
console.log('Squared-Chord Distance:', squaredChordDistance(vecA, vecB).toFixed(4));
console.log('Normalized Matusita Similarity:', normalizedMatusitaSimilarity(vecA, vecB).toFixed(4));
console.log('Normalized Squared-Chord Similarity:', normalizedSquaredChordSimilarity(vecA, vecB).toFixed(4));
console.log('Jaccard Binary Similarity:', jaccardSimilarityBinary(vecA, vecB).toFixed(4));
console.log('Jaccard Weighted Similarity:', jaccardSimilarityWeighted(vecA, vecB).toFixed(4));
console.log('Jaccard Real Valued Similarity:', jaccardSimilarityRealValued(vecA, vecB).toFixed(4));
console.log('Robust Similarity:', computeVectorSimilarityRobust(vecA, vecB).toFixed(4));
console.log('Mean/Std Power Similarity:', computeVectorSimilarityMeanStdPower(vecA, vecB).toFixed(4));
console.log('Metric Like Similarity:', computeVectorSimilarityMetricLike(vecA, vecB).toFixed(4));
console.log('Tunable Similarity:', computeVectorSimilarityTunable(vecA, vecB).toFixed(4));
console.log('Variance Weighted Similarity:', computeVectorSimilarityVarianceWeighted(vecA, vecB).toFixed(4));

console.log('\n----------------------------------------------------\n');

// Test case 2: Longer vectors with multiple outliers
const vecC = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const vecD = [1.1, 2.2, 3.3, 4.4, 50000, 6.6, 7.7, -20000, 9.9, 10.1];

console.log('--- Test Case 2: Longer Vectors with Multiple Outliers ---');
console.log('Vector C:', vecC);
console.log('Vector D:', vecD);

console.log('Penalized Similarity:', computeVectorSimilarityMeanStdPenalized(vecC, vecD).toFixed(4));
console.log('Correlation Similarity:', vectorSimilarityCorrelation(vecC, vecD).toFixed(4));
console.log('Pearson Similarity:', pearsonCorrelationSimilarity(vecC, vecD).toFixed(4));
console.log('Cosine Similarity:', cosineSimilarity(vecC, vecD).toFixed(4));
console.log('Euclidean Similarity:', euclideanSimilarity(vecC, vecD).toFixed(4));
console.log('Manhattan Similarity:', manhattanSimilarity(vecC, vecD).toFixed(4));
console.log('Gower Similarity:', gowerSimilarity(vecC, vecD, []).toFixed(4));
console.log('Soergel Similarity:', soergelSimilarity(vecC, vecD).toFixed(4));
console.log('Kulczynski Similarity:', kulczynskiSimilarity(vecC, vecD).toFixed(4));
console.log('Lorentzian Similarity:', lorentzianSimilarity(vecC, vecD).toFixed(4));
console.log('Weighted Minkowski Similarity:', weightedMinkowskiSimilarity(vecC, vecD).toFixed(4));
console.log('Canberra Similarity:', canberraSimilarity(vecC, vecD).toFixed(4));
console.log('Chebyshev Similarity:', chebyshevSimilarity(vecC, vecD).toFixed(4));
console.log('Intersection Similarity:', intersectionSimilarity(vecC, vecD).toFixed(4));
console.log('Wave-Hedges Similarity:', waveHedgesSimilarity(vecC, vecD).toFixed(4));
console.log('Sorensen Similarity:', sorensenSimilarity(vecC, vecD).toFixed(4));
console.log('Motyka Similarity:', motykaSimilarity(vecC, vecD).toFixed(4));
console.log('Kullback-Leibler Similarity:', kullbackLeiblerSimilarity(vecC, vecD).toFixed(4));
console.log('Jeffreys Similarity:', jeffreysSimilarity(vecC, vecD).toFixed(4));
console.log('K-Divergence Similarity:', kSimilarity(vecC, vecD).toFixed(4));
console.log('Topsoe Similarity:', topsoeSimilarity(vecC, vecD).toFixed(4));
console.log('Pearson Chi-Square Distance:', pearsonChiSquareDistance(vecC, vecD).toFixed(4));
console.log('Neyman Chi-Square Distance:', neymanChiSquareDistance(vecC, vecD).toFixed(4));
console.log('Additive Symmetric Chi-Square Distance:', additiveSymmetricChiSquareDistance(vecC, vecD).toFixed(4));
console.log('Squared Chi-Square Distance:', squaredChiSquareDistance(vecC, vecD).toFixed(4));
console.log('Normalized Pearson Chi-Square Similarity:', normalizedPearsonChiSquareSimilarity(vecC, vecD).toFixed(4));
console.log('Normalized Neyman Chi-Square Similarity:', normalizedNeymanChiSquareSimilarity(vecC, vecD).toFixed(4));
console.log('Normalized Additive Symmetric Chi-Square Similarity:', normalizedAdditiveSymmetricChiSquareSimilarity(vecC, vecD).toFixed(4));
console.log('Normalized Squared Chi-Square Similarity:', normalizedSquaredChiSquareSimilarity(vecC, vecD).toFixed(4));
console.log('Fidelity Similarity:', fidelitySimilarity(vecC, vecD).toFixed(4));
console.log('Hellinger Distance:', hellingerDistance(vecC, vecD).toFixed(4));
console.log('Matusita Distance:', matusitaDistance(vecC, vecD).toFixed(4));
console.log('Squared-Chord Distance:', squaredChordDistance(vecC, vecD).toFixed(4));
console.log('Normalized Matusita Similarity:', normalizedMatusitaSimilarity(vecC, vecD).toFixed(4));
console.log('Normalized Squared-Chord Similarity:', normalizedSquaredChordSimilarity(vecC, vecD).toFixed(4));
console.log('Jaccard Binary Similarity:', jaccardSimilarityBinary(vecC, vecD).toFixed(4));
console.log('Jaccard Weighted Similarity:', jaccardSimilarityWeighted(vecC, vecD).toFixed(4));
console.log('Jaccard Real Valued Similarity:', jaccardSimilarityRealValued(vecC, vecD).toFixed(4));
console.log('Robust Similarity:', computeVectorSimilarityRobust(vecC, vecD).toFixed(4));
console.log('Mean/Std Power Similarity:', computeVectorSimilarityMeanStdPower(vecC, vecD).toFixed(4));
console.log('Metric Like Similarity:', computeVectorSimilarityMetricLike(vecC, vecD).toFixed(4));
console.log('Tunable Similarity:', computeVectorSimilarityTunable(vecC, vecD).toFixed(4));
console.log('Variance Weighted Similarity:', computeVectorSimilarityVarianceWeighted(vecC, vecD).toFixed(4));
