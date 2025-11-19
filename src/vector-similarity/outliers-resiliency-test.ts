
// A simple script to test outliers resilience of vector similarity functions
import {
  computeVectorSimilarityMeanStdPenalized,
} from './similarity/vectorSimilarityMeanStdPenalized';
import { vectorSimilarityCorrelation } from './similarity/vectorSimilarityCorrelation';
import { pearsonCorrelationSimilarity, cosineSimilarity, euclideanSimilarity, manhattanSimilarity, gowerSimilarity, soergelSimilarity, kulczynskiSimilarity, lorentzianSimilarity, squaredEuclideanSimilarity } from './similarity/classic';
import { weightedMinkowskiSimilarity, canberraSimilarity, chebyshevSimilarity } from './similarity/heuristics';
import { jaccardSimilarityBinary, jaccardSimilarityWeighted, jaccardSimilarityRealValued } from './similarity/jaccard';
import { computeVectorSimilarityRobust } from './similarity/vectorSimilarityRobust';
import { computeVectorSimilarityMeanStdPower } from './similarity/vectorSimilarityMeanStdPower';
import { computeVectorSimilarityMetricLike } from './similarity/vectorSimilarityMetricLike';
import { computeVectorSimilarityTunable } from './similarity/vectorSimilarityTunable';
import { computeVectorSimilarityVarianceWeighted } from './similarity/vectorSimilarityVarianceWeighted';
import { intersectionSimilarity, waveHedgesSimilarity, sorensenSimilarity, motykaSimilarity } from './similarity/intersection';
import { kullbackLeiblerSimilarity, jeffreysSimilarity, kSimilarity, topsoeSimilarity } from './similarity/entropy';
import { pearsonChiSquareSimilarity, neymanChiSquareSimilarity, additiveSymmetricChiSquareSimilarity, squaredChiSquareSimilarity } from './similarity/chi-square';
import { fidelitySimilarity, hellingerSimilarity, matusitaSimilarity, squaredChordSimilarity } from './similarity/fidelity';
import { normalizedFidelitySimilarity } from './similarity/normalized-fidelity';
import { normalizedChiSquareSimilarity } from './similarity/normalized-chi-square';


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
console.log('Squared Euclidean Similarity:', squaredEuclideanSimilarity(vecA, vecB).toFixed(4));
console.log('Manhattan Similarity:', manhattanSimilarity(vecA, vecB).toFixed(4));
console.log('Gower Similarity:', gowerSimilarity(vecA, vecB).toFixed(4));
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
console.log('Pearson Chi-Square Similarity:', pearsonChiSquareSimilarity(vecA, vecB).toFixed(4));
console.log('Neyman Chi-Square Similarity:', neymanChiSquareSimilarity(vecA, vecB).toFixed(4));
console.log('Additive Symmetric Chi-Square Similarity:', additiveSymmetricChiSquareSimilarity(vecA, vecB).toFixed(4));
console.log('Squared Chi-Square Similarity:', squaredChiSquareSimilarity(vecA, vecB).toFixed(4));
console.log('Normalized Chi-Square Similarity:', normalizedChiSquareSimilarity(vecA, vecB).toFixed(4));
console.log('Fidelity Similarity:', fidelitySimilarity(vecA, vecB).toFixed(4));
console.log('Hellinger Similarity:', hellingerSimilarity(vecA, vecB).toFixed(4));
console.log('Matusita Similarity:', matusitaSimilarity(vecA, vecB).toFixed(4));
console.log('Squared-Chord Similarity:', squaredChordSimilarity(vecA, vecB).toFixed(4));
console.log('Normalized Fidelity Similarity:', normalizedFidelitySimilarity(vecA, vecB).toFixed(4));
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
console.log('Squared Euclidean Similarity:', squaredEuclideanSimilarity(vecC, vecD).toFixed(4));
console.log('Manhattan Similarity:', manhattanSimilarity(vecC, vecD).toFixed(4));
console.log('Gower Similarity:', gowerSimilarity(vecC, vecD).toFixed(4));
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
console.log('Pearson Chi-Square Similarity:', pearsonChiSquareSimilarity(vecC, vecD).toFixed(4));
console.log('Neyman Chi-Square Similarity:', neymanChiSquareSimilarity(vecC, vecD).toFixed(4));
console.log('Additive Symmetric Chi-Square Similarity:', additiveSymmetricChiSquareSimilarity(vecC, vecD).toFixed(4));
console.log('Squared Chi-Square Similarity:', squaredChiSquareSimilarity(vecC, vecD).toFixed(4));
console.log('Normalized Chi-Square Similarity:', normalizedChiSquareSimilarity(vecC, vecD).toFixed(4));
console.log('Fidelity Similarity:', fidelitySimilarity(vecC, vecD).toFixed(4));
console.log('Hellinger Similarity:', hellingerSimilarity(vecC, vecD).toFixed(4));
console.log('Matusita Similarity:', matusitaSimilarity(vecC, vecD).toFixed(4));
console.log('Squared-Chord Similarity:', squaredChordSimilarity(vecC, vecD).toFixed(4));
console.log('Normalized Fidelity Similarity:', normalizedFidelitySimilarity(vecC, vecD).toFixed(4));
console.log('Jaccard Binary Similarity:', jaccardSimilarityBinary(vecC, vecD).toFixed(4));
console.log('Jaccard Weighted Similarity:', jaccardSimilarityWeighted(vecC, vecD).toFixed(4));
console.log('Jaccard Real Valued Similarity:', jaccardSimilarityRealValued(vecC, vecD).toFixed(4));
console.log('Robust Similarity:', computeVectorSimilarityRobust(vecC, vecD).toFixed(4));
console.log('Mean/Std Power Similarity:', computeVectorSimilarityMeanStdPower(vecC, vecD).toFixed(4));
console.log('Metric Like Similarity:', computeVectorSimilarityMetricLike(vecC, vecD).toFixed(4));
console.log('Tunable Similarity:', computeVectorSimilarityTunable(vecC, vecD).toFixed(4));
console.log('Variance Weighted Similarity:', computeVectorSimilarityVarianceWeighted(vecC, vecD).toFixed(4));
