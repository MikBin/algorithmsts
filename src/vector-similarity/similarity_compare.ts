
// A simple script for comparing different similarity functions
import {
  cosineSimilarity,
  pearsonCorrelationSimilarity,
  euclideanSimilarity,
  manhattanSimilarity,
  gowerSimilarity,
  soergelSimilarity,
  kulczynskiSimilarity,
  lorentzianSimilarity,
} from './similarity/classic.ts';
import {
  jaccardSimilarityBinary,
  jaccardSimilarityWeighted,
  jaccardSimilarityRealValued,
} from './similarity/jaccard.ts';
import {
  computeVectorSimilarityMeanStdPenalized,
} from './similarity/vectorSimilarityMeanStdPenalized.ts';
import {
  vectorSimilarityCorrelation,
} from './similarity/vectorSimilarityCorrelation.ts';
import {
  weightedMinkowskiSimilarity,
  canberraSimilarity,
  chebyshevSimilarity,
} from './similarity/heuristics.ts';
import {
  computeVectorSimilarityRobust,
} from './similarity/vectorSimilarityRobust.ts';
import {
  computeVectorSimilarityMeanStdPower,
} from './similarity/vectorSimilarityMeanStdPower.ts';
import {
  computeVectorSimilarityMetricLike,
} from './similarity/vectorSimilarityMetricLike.ts';
import {
  computeVectorSimilarityTunable,
} from './similarity/vectorSimilarityTunable.ts';
import {
  computeVectorSimilarityVarianceWeighted,
} from './similarity/vectorSimilarityVarianceWeighted.ts';
import {
  intersectionSimilarity,
  waveHedgesSimilarity,
  sorensenSimilarity,
  motykaSimilarity,
} from './similarity/intersection.ts';
import {
  kullbackLeiblerSimilarity,
  jeffreysSimilarity,
  kSimilarity,
  topsoeSimilarity,
} from './similarity/entropy.ts';
import {
  pearsonChiSquareDistance,
  neymanChiSquareDistance,
  additiveSymmetricChiSquareDistance,
  squaredChiSquareDistance,
} from './similarity/chi-square.ts';
import {
  normalizedPearsonChiSquareSimilarity,
  normalizedNeymanChiSquareSimilarity,
  normalizedAdditiveSymmetricChiSquareSimilarity,
  normalizedSquaredChiSquareSimilarity,
} from './similarity/normalized-chi-square.ts';
import {
  fidelitySimilarity,
  hellingerDistance,
  matusitaDistance,
  squaredChordDistance,
} from './similarity/fidelity.ts';
import {
  normalizedMatusitaSimilarity,
  normalizedSquaredChordSimilarity,
} from './similarity/normalized-fidelity.ts';

const vecA = [1, 1, 0, 1];
const vecB = [1, 0, 1, 1];
const vecC = [0.5, 0.8, 0.2, 0.9];
const vecD = [0.6, 0.7, 0.1, 1.0];

const similarityFunctions = {
  pearsonCorrelationSimilarity,
  cosineSimilarity,
  euclideanSimilarity,
  manhattanSimilarity,
  gowerSimilarity: (a: number[], b: number[]) => gowerSimilarity(a, b, Array(a.length).fill(1)),
  soergelSimilarity,
  kulczynskiSimilarity,
  lorentzianSimilarity,
  weightedMinkowskiSimilarity,
  canberraSimilarity,
  chebyshevSimilarity,
  intersectionSimilarity,
  waveHedgesSimilarity,
  sorensenSimilarity,
  motykaSimilarity,
  kullbackLeiblerSimilarity,
  jeffreysSimilarity,
  kSimilarity,
  topsoeSimilarity,
  pearsonChiSquareDistance,
  neymanChiSquareDistance,
  additiveSymmetricChiSquareDistance,
  squaredChiSquareDistance,
  normalizedPearsonChiSquareSimilarity,
  normalizedNeymanChiSquareSimilarity,
  normalizedAdditiveSymmetricChiSquareSimilarity,
  normalizedSquaredChiSquareSimilarity,
  fidelitySimilarity,
  hellingerDistance,
  matusitaDistance,
  squaredChordDistance,
  normalizedMatusitaSimilarity,
  normalizedSquaredChordSimilarity,
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

console.log('--- Binary Vectors ---');
console.log('vecA:', vecA);
console.log('vecB:', vecB);

Object.entries(similarityFunctions).forEach(([name, func]) => {
  try {
    const result = func(vecA, vecB);
    console.log(`${name}: ${result.toFixed(4)}`);
  } catch (e) {
    console.log(`${name}: Error - ${(e as Error).message}`);
  }
});

console.log('\n--- Continuous Vectors ---');
console.log('vecC:', vecC.map((x) => x.toFixed(2)).join(', '));
console.log('vecD:', vecD.map((x) => x.toFixed(2)).join(', '));

Object.entries(similarityFunctions).forEach(([name, func]) => {
  try {
    const result = func(vecC, vecD);
    console.log(`${name}: ${result.toFixed(4)}`);
  } catch (e) {
    console.log(`${name}: Error - ${(e as Error).message}`);
  }
});
