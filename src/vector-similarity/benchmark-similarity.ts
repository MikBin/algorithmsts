
// A simple benchmarking script for vector similarity functions
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

function generateRandomVector(n: number): number[] {
  const vector: number[] = [];
  for (let i = 0; i < n; i++) {
    vector.push(Math.random());
  }
  return vector;
}

function runBenchmark(
  name: string,
  func: (a: number[], b: number[]) => number,
  vecA: number[],
  vecB: number[],
  iterations: number
): void {
  const timings: number[] = [];
  for (let i = 0; i < iterations; i++) {
    const startTime = process.hrtime();
    func(vecA, vecB);
    const endTime = process.hrtime(startTime);
    timings.push(endTime[0] * 1e9 + endTime[1]); // in nanoseconds
  }
  const avgTime = timings.reduce((a, b) => a + b, 0) / iterations;
  console.log(`${name} took ${avgTime / 1e6} ms on average`);
}

const vectorSize = 1000;
const iterations = 10;
const vecA = generateRandomVector(vectorSize);
const vecB = generateRandomVector(vectorSize);

console.log(`--- Benchmarking with Vector Size: ${vectorSize}, Iterations: ${iterations} ---\n`);

// Classic
runBenchmark('Pearson Similarity', pearsonCorrelationSimilarity, vecA, vecB, iterations);
runBenchmark('Cosine Similarity', cosineSimilarity, vecA, vecB, iterations);
runBenchmark('Euclidean Similarity', euclideanSimilarity, vecA, vecB, iterations);
runBenchmark('Manhattan Similarity', manhattanSimilarity, vecA, vecB, iterations);
runBenchmark('Gower Similarity', (a,b) => gowerSimilarity(a,b, Array(a.length).fill(1)), vecA, vecB, iterations);
runBenchmark('Soergel Similarity', soergelSimilarity, vecA, vecB, iterations);
runBenchmark('Kulczynski Similarity', kulczynskiSimilarity, vecA, vecB, iterations);
runBenchmark('Lorentzian Similarity', lorentzianSimilarity, vecA, vecB, iterations);

// Heuristics
runBenchmark('Weighted Minkowski Similarity', weightedMinkowskiSimilarity, vecA, vecB, iterations);
runBenchmark('Canberra Similarity', canberraSimilarity, vecA, vecB, iterations);
runBenchmark('Chebyshev Similarity', chebyshevSimilarity, vecA, vecB, iterations);

// Jaccard
runBenchmark('Jaccard Binary Similarity', jaccardSimilarityBinary, vecA, vecB, iterations);
runBenchmark('Jaccard Weighted Similarity', jaccardSimilarityWeighted, vecA, vecB, iterations);
runBenchmark('Jaccard Real Valued Similarity', jaccardSimilarityRealValued, vecA, vecB, iterations);

// Intersection
runBenchmark('Intersection Similarity', intersectionSimilarity, vecA, vecB, iterations);
runBenchmark('Wave-Hedges Similarity', waveHedgesSimilarity, vecA, vecB, iterations);
runBenchmark('Sorensen Similarity', sorensenSimilarity, vecA, vecB, iterations);
runBenchmark('Motyka Similarity', motykaSimilarity, vecA, vecB, iterations);

// Entropy
runBenchmark('Kullback-Leibler Similarity', kullbackLeiblerSimilarity, vecA, vecB, iterations);
runBenchmark('Jeffreys Similarity', jeffreysSimilarity, vecA, vecB, iterations);
runBenchmark('K-Divergence Similarity', kSimilarity, vecA, vecB, iterations);
runBenchmark('Topsoe Similarity', topsoeSimilarity, vecA, vecB, iterations);

// Chi-Square
runBenchmark('Pearson Chi-Square Distance', pearsonChiSquareDistance, vecA, vecB, iterations);
runBenchmark('Neyman Chi-Square Distance', neymanChiSquareDistance, vecA, vecB, iterations);
runBenchmark('Additive Symmetric Chi-Square Distance', additiveSymmetricChiSquareDistance, vecA, vecB, iterations);
runBenchmark('Squared Chi-Square Distance', squaredChiSquareDistance, vecA, vecB, iterations);
runBenchmark('Normalized Pearson Chi-Square Similarity', normalizedPearsonChiSquareSimilarity, vecA, vecB, iterations);
runBenchmark('Normalized Neyman Chi-Square Similarity', normalizedNeymanChiSquareSimilarity, vecA, vecB, iterations);
runBenchmark('Normalized Additive Symmetric Chi-Square Similarity', normalizedAdditiveSymmetricChiSquareSimilarity, vecA, vecB, iterations);
runBenchmark('Normalized Squared Chi-Square Similarity', normalizedSquaredChiSquareSimilarity, vecA, vecB, iterations);


// Fidelity
runBenchmark('Fidelity Similarity', fidelitySimilarity, vecA, vecB, iterations);
runBenchmark('Hellinger Distance', hellingerDistance, vecA, vecB, iterations);
runBenchmark('Matusita Distance', matusitaDistance, vecA, vecB, iterations);
runBenchmark('Squared-Chord Distance', squaredChordDistance, vecA, vecB, iterations);
runBenchmark('Normalized Matusita Similarity', normalizedMatusitaSimilarity, vecA, vecB, iterations);
runBenchmark('Normalized Squared-Chord Similarity', normalizedSquaredChordSimilarity, vecA, vecB, iterations);


// Custom
runBenchmark('Penalized Similarity', computeVectorSimilarityMeanStdPenalized, vecA, vecB, iterations);
runBenchmark('Correlation Similarity', vectorSimilarityCorrelation, vecA, vecB, iterations);
runBenchmark('Robust Similarity', computeVectorSimilarityRobust, vecA, vecB, iterations);
runBenchmark('Mean/Std Power Similarity', computeVectorSimilarityMeanStdPower, vecA, vecB, iterations);
runBenchmark('Metric Like Similarity', computeVectorSimilarityMetricLike, vecA, vecB, iterations);
runBenchmark('Tunable Similarity', computeVectorSimilarityTunable, vecA, vecB, iterations);
runBenchmark('Variance Weighted Similarity', computeVectorSimilarityVarianceWeighted, vecA, vecB, iterations);
