
// A simple script to test outliers resilience of vector similarity functions
import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';

import {
  computeVectorSimilarityMeanStdPenalized,
} from './similarity/vectorSimilarityMeanStdPenalized.ts';
import { vectorSimilarityCorrelation } from './similarity/vectorSimilarityCorrelation.ts';
import { pearsonCorrelationSimilarity, cosineSimilarity, euclideanSimilarity, manhattanSimilarity, gowerSimilarity, soergelSimilarity, kulczynskiSimilarity, lorentzianSimilarity } from './similarity/classic.ts';
import { weightedMinkowskiSimilarity, canberraSimilarity, chebyshevSimilarity } from './similarity/heuristics.ts';
import { jaccardSimilarityBinary, jaccardSimilarityWeighted, jaccardSimilarityRealValued } from './similarity/jaccard.ts';
import { computeVectorSimilarityRobust } from './similarity/vectorSimilarityRobust.ts';
import { computeVectorSimilarityMeanStdPower } from './similarity/vectorSimilarityMeanStdPower.ts';
import { computeVectorSimilarityMetricLike } from './similarity/vectorSimilarityMetricLike.ts';
import { computeVectorSimilarityTunable } from './similarity/vectorSimilarityTunable.ts';
import { computeVectorSimilarityVarianceWeighted } from './similarity/vectorSimilarityVarianceWeighted.ts';
import { intersectionSimilarity, waveHedgesSimilarity, sorensenSimilarity, motykaSimilarity } from './similarity/intersection.ts';
import { kullbackLeiblerSimilarity, jeffreysSimilarity, kSimilarity, topsoeSimilarity } from './similarity/entropy.ts';
import { pearsonChiSquareDistance, neymanChiSquareDistance, additiveSymmetricChiSquareDistance, squaredChiSquareDistance } from './similarity/chi-square.ts';
import { normalizedPearsonChiSquareSimilarity, normalizedNeymanChiSquareSimilarity, normalizedAdditiveSymmetricChiSquareSimilarity, normalizedSquaredChiSquareSimilarity } from './similarity/normalized-chi-square.ts';
import { fidelitySimilarity, hellingerDistance, matusitaDistance, squaredChordDistance } from './similarity/fidelity.ts';
import { normalizedMatusitaSimilarity, normalizedSquaredChordSimilarity } from './similarity/normalized-fidelity.ts';

const results = [];

// Test case 1: Short vectors with one major outlier
const vecA = [1, 34000, -0.0001];
const vecB = [1.1, 37800, -0.00015];

const testCase1 = {
  testCase: 'Short Vectors with a Single Outlier',
  vecA,
  vecB,
  similarities: {},
};

testCase1.similarities['Penalized Similarity'] = parseFloat(computeVectorSimilarityMeanStdPenalized(vecA, vecB).toFixed(4));
testCase1.similarities['Correlation Similarity'] = parseFloat(vectorSimilarityCorrelation(vecA, vecB).toFixed(4));
testCase1.similarities['Pearson Similarity'] = parseFloat(pearsonCorrelationSimilarity(vecA, vecB).toFixed(4));
testCase1.similarities['Cosine Similarity'] = parseFloat(cosineSimilarity(vecA, vecB).toFixed(4));
testCase1.similarities['Euclidean Similarity'] = parseFloat(euclideanSimilarity(vecA, vecB).toFixed(4));
testCase1.similarities['Manhattan Similarity'] = parseFloat(manhattanSimilarity(vecA, vecB).toFixed(4));
testCase1.similarities['Gower Similarity'] = parseFloat(gowerSimilarity(vecA, vecB, Array(vecA.length).fill(1)).toFixed(4));
testCase1.similarities['Soergel Similarity'] = parseFloat(soergelSimilarity(vecA, vecB).toFixed(4));
testCase1.similarities['Kulczynski Similarity'] = parseFloat(kulczynskiSimilarity(vecA, vecB).toFixed(4));
testCase1.similarities['Lorentzian Similarity'] = parseFloat(lorentzianSimilarity(vecA, vecB).toFixed(4));
testCase1.similarities['Weighted Minkowski Similarity'] = parseFloat(weightedMinkowskiSimilarity(vecA, vecB).toFixed(4));
testCase1.similarities['Canberra Similarity'] = parseFloat(canberraSimilarity(vecA, vecB).toFixed(4));
testCase1.similarities['Chebyshev Similarity'] = parseFloat(chebyshevSimilarity(vecA, vecB).toFixed(4));
testCase1.similarities['Intersection Similarity'] = parseFloat(intersectionSimilarity(vecA, vecB).toFixed(4));
testCase1.similarities['Wave-Hedges Similarity'] = parseFloat(waveHedgesSimilarity(vecA, vecB).toFixed(4));
testCase1.similarities['Sorensen Similarity'] = parseFloat(sorensenSimilarity(vecA, vecB).toFixed(4));
testCase1.similarities['Motyka Similarity'] = parseFloat(motykaSimilarity(vecA, vecB).toFixed(4));
testCase1.similarities['Kullback-Leibler Similarity'] = parseFloat(kullbackLeiblerSimilarity(vecA, vecB).toFixed(4));
testCase1.similarities['Jeffreys Similarity'] = parseFloat(jeffreysSimilarity(vecA, vecB).toFixed(4));
testCase1.similarities['K-Divergence Similarity'] = parseFloat(kSimilarity(vecA, vecB).toFixed(4));
testCase1.similarities['Topsoe Similarity'] = parseFloat(topsoeSimilarity(vecA, vecB).toFixed(4));
testCase1.similarities['Pearson Chi-Square Distance'] = parseFloat(pearsonChiSquareDistance(vecA, vecB).toFixed(4));
testCase1.similarities['Neyman Chi-Square Distance'] = parseFloat(neymanChiSquareDistance(vecA, vecB).toFixed(4));
testCase1.similarities['Additive Symmetric Chi-Square Distance'] = parseFloat(additiveSymmetricChiSquareDistance(vecA, vecB).toFixed(4));
testCase1.similarities['Squared Chi-Square Distance'] = parseFloat(squaredChiSquareDistance(vecA, vecB).toFixed(4));
testCase1.similarities['Normalized Pearson Chi-Square Similarity'] = parseFloat(normalizedPearsonChiSquareSimilarity(vecA, vecB).toFixed(4));
testCase1.similarities['Normalized Neyman Chi-Square Similarity'] = parseFloat(normalizedNeymanChiSquareSimilarity(vecA, vecB).toFixed(4));
testCase1.similarities['Normalized Additive Symmetric Chi-Square Similarity'] = parseFloat(normalizedAdditiveSymmetricChiSquareSimilarity(vecA, vecB).toFixed(4));
testCase1.similarities['Normalized Squared Chi-Square Similarity'] = parseFloat(normalizedSquaredChiSquareSimilarity(vecA, vecB).toFixed(4));
testCase1.similarities['Fidelity Similarity'] = parseFloat(fidelitySimilarity(vecA, vecB).toFixed(4));
testCase1.similarities['Hellinger Distance'] = parseFloat(hellingerDistance(vecA, vecB).toFixed(4));
testCase1.similarities['Matusita Distance'] = parseFloat(matusitaDistance(vecA, vecB).toFixed(4));
testCase1.similarities['Squared-Chord Distance'] = parseFloat(squaredChordDistance(vecA, vecB).toFixed(4));
testCase1.similarities['Normalized Matusita Similarity'] = parseFloat(normalizedMatusitaSimilarity(vecA, vecB).toFixed(4));
testCase1.similarities['Normalized Squared-Chord Similarity'] = parseFloat(normalizedSquaredChordSimilarity(vecA, vecB).toFixed(4));
testCase1.similarities['Jaccard Binary Similarity'] = parseFloat(jaccardSimilarityBinary(vecA, vecB).toFixed(4));
testCase1.similarities['Jaccard Weighted Similarity'] = parseFloat(jaccardSimilarityWeighted(vecA, vecB).toFixed(4));
testCase1.similarities['Jaccard Real Valued Similarity'] = parseFloat(jaccardSimilarityRealValued(vecA, vecB).toFixed(4));
testCase1.similarities['Robust Similarity'] = parseFloat(computeVectorSimilarityRobust(vecA, vecB).toFixed(4));
testCase1.similarities['Mean/Std Power Similarity'] = parseFloat(computeVectorSimilarityMeanStdPower(vecA, vecB).toFixed(4));
testCase1.similarities['Metric Like Similarity'] = parseFloat(computeVectorSimilarityMetricLike(vecA, vecB).toFixed(4));
testCase1.similarities['Tunable Similarity'] = parseFloat(computeVectorSimilarityTunable(vecA, vecB).toFixed(4));
testCase1.similarities['Variance Weighted Similarity'] = parseFloat(computeVectorSimilarityVarianceWeighted(vecA, vecB).toFixed(4));

results.push(testCase1);

// Test case 2: Longer vectors with multiple outliers
const vecC = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const vecD = [1.1, 2.2, 3.3, 4.4, 50000, 6.6, 7.7, -20000, 9.9, 10.1];

const testCase2 = {
  testCase: 'Longer Vectors with Multiple Outliers',
  vecC,
  vecD,
  similarities: {},
};

testCase2.similarities['Penalized Similarity'] = parseFloat(computeVectorSimilarityMeanStdPenalized(vecC, vecD).toFixed(4));
testCase2.similarities['Correlation Similarity'] = parseFloat(vectorSimilarityCorrelation(vecC, vecD).toFixed(4));
testCase2.similarities['Pearson Similarity'] = parseFloat(pearsonCorrelationSimilarity(vecC, vecD).toFixed(4));
testCase2.similarities['Cosine Similarity'] = parseFloat(cosineSimilarity(vecC, vecD).toFixed(4));
testCase2.similarities['Euclidean Similarity'] = parseFloat(euclideanSimilarity(vecC, vecD).toFixed(4));
testCase2.similarities['Manhattan Similarity'] = parseFloat(manhattanSimilarity(vecC, vecD).toFixed(4));
testCase2.similarities['Gower Similarity'] = parseFloat(gowerSimilarity(vecC, vecD, Array(vecC.length).fill(1)).toFixed(4));
testCase2.similarities['Soergel Similarity'] = parseFloat(soergelSimilarity(vecC, vecD).toFixed(4));
testCase2.similarities['Kulczynski Similarity'] = parseFloat(kulczynskiSimilarity(vecC, vecD).toFixed(4));
testCase2.similarities['Lorentzian Similarity'] = parseFloat(lorentzianSimilarity(vecC, vecD).toFixed(4));
testCase2.similarities['Weighted Minkowski Similarity'] = parseFloat(weightedMinkowskiSimilarity(vecC, vecD).toFixed(4));
testCase2.similarities['Canberra Similarity'] = parseFloat(canberraSimilarity(vecC, vecD).toFixed(4));
testCase2.similarities['Chebyshev Similarity'] = parseFloat(chebyshevSimilarity(vecC, vecD).toFixed(4));
testCase2.similarities['Intersection Similarity'] = parseFloat(intersectionSimilarity(vecC, vecD).toFixed(4));
testCase2.similarities['Wave-Hedges Similarity'] = parseFloat(waveHedgesSimilarity(vecC, vecD).toFixed(4));
testCase2.similarities['Sorensen Similarity'] = parseFloat(sorensenSimilarity(vecC, vecD).toFixed(4));
testCase2.similarities['Motyka Similarity'] = parseFloat(motykaSimilarity(vecC, vecD).toFixed(4));
testCase2.similarities['Kullback-Leibler Similarity'] = parseFloat(kullbackLeiblerSimilarity(vecC, vecD).toFixed(4));
testCase2.similarities['Jeffreys Similarity'] = parseFloat(jeffreysSimilarity(vecC, vecD).toFixed(4));
testCase2.similarities['K-Divergence Similarity'] = parseFloat(kSimilarity(vecC, vecD).toFixed(4));
testCase2.similarities['Topsoe Similarity'] = parseFloat(topsoeSimilarity(vecC, vecD).toFixed(4));
testCase2.similarities['Pearson Chi-Square Distance'] = parseFloat(pearsonChiSquareDistance(vecC, vecD).toFixed(4));
testCase2.similarities['Neyman Chi-Square Distance'] = parseFloat(neymanChiSquareDistance(vecC, vecD).toFixed(4));
testCase2.similarities['Additive Symmetric Chi-Square Distance'] = parseFloat(additiveSymmetricChiSquareDistance(vecC, vecD).toFixed(4));
testCase2.similarities['Squared Chi-Square Distance'] = parseFloat(squaredChiSquareDistance(vecC, vecD).toFixed(4));
testCase2.similarities['Normalized Pearson Chi-Square Similarity'] = parseFloat(normalizedPearsonChiSquareSimilarity(vecC, vecD).toFixed(4));
testCase2.similarities['Normalized Neyman Chi-Square Similarity'] = parseFloat(normalizedNeymanChiSquareSimilarity(vecC, vecD).toFixed(4));
testCase2.similarities['Normalized Additive Symmetric Chi-Square Similarity'] = parseFloat(normalizedAdditiveSymmetricChiSquareSimilarity(vecC, vecD).toFixed(4));
testCase2.similarities['Normalized Squared Chi-Square Similarity'] = parseFloat(normalizedSquaredChiSquareSimilarity(vecC, vecD).toFixed(4));
testCase2.similarities['Fidelity Similarity'] = parseFloat(fidelitySimilarity(vecC, vecD).toFixed(4));
testCase2.similarities['Hellinger Distance'] = parseFloat(hellingerDistance(vecC, vecD).toFixed(4));
testCase2.similarities['Matusita Distance'] = parseFloat(matusitaDistance(vecC, vecD).toFixed(4));
testCase2.similarities['Squared-Chord Distance'] = parseFloat(squaredChordDistance(vecC, vecD).toFixed(4));
testCase2.similarities['Normalized Matusita Similarity'] = parseFloat(normalizedMatusitaSimilarity(vecC, vecD).toFixed(4));
testCase2.similarities['Normalized Squared-Chord Similarity'] = parseFloat(normalizedSquaredChordSimilarity(vecC, vecD).toFixed(4));
testCase2.similarities['Jaccard Binary Similarity'] = parseFloat(jaccardSimilarityBinary(vecC, vecD).toFixed(4));
testCase2.similarities['Jaccard Weighted Similarity'] = parseFloat(jaccardSimilarityWeighted(vecC, vecD).toFixed(4));
testCase2.similarities['Jaccard Real Valued Similarity'] = parseFloat(jaccardSimilarityRealValued(vecC, vecD).toFixed(4));
testCase2.similarities['Robust Similarity'] = parseFloat(computeVectorSimilarityRobust(vecC, vecD).toFixed(4));
testCase2.similarities['Mean/Std Power Similarity'] = parseFloat(computeVectorSimilarityMeanStdPower(vecC, vecD).toFixed(4));
testCase2.similarities['Metric Like Similarity'] = parseFloat(computeVectorSimilarityMetricLike(vecC, vecD).toFixed(4));
testCase2.similarities['Tunable Similarity'] = parseFloat(computeVectorSimilarityTunable(vecC, vecD).toFixed(4));
testCase2.similarities['Variance Weighted Similarity'] = parseFloat(computeVectorSimilarityVarianceWeighted(vecC, vecD).toFixed(4));

results.push(testCase2);

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const outputDir = path.resolve(__dirname, '../../tmp');
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

fs.writeFileSync(path.join(outputDir, 'outliers-resiliency-test-results.json'), JSON.stringify(results, null, 2));

console.log('Test results saved to tmp/outliers-resiliency-test-results.json');
