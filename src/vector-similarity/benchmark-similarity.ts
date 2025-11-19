
// A simple benchmarking script for vector similarity functions
import { writeFileSync } from 'fs';
import { resolve } from 'path';
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
): { name: string, avgTime: number, iterations: number } {
  const timings: number[] = [];
  for (let i = 0; i < iterations; i++) {
    const startTime = process.hrtime();
    func(vecA, vecB);
    const endTime = process.hrtime(startTime);
    timings.push(endTime[0] * 1e9 + endTime[1]); // in nanoseconds
  }
  const avgTime = timings.reduce((a, b) => a + b, 0) / iterations;

  return {
    name: name,
    avgTime: avgTime / 1e6, // in milliseconds
    iterations: iterations
  };
}

const vectorSize = 1000;
const iterations = 10;
const vecA = generateRandomVector(vectorSize);
const vecB = generateRandomVector(vectorSize);

console.log(`--- Benchmarking with Vector Size: ${vectorSize}, Iterations: ${iterations} ---\n`);

const results = [];
// Classic
results.push(runBenchmark('Pearson Similarity', pearsonCorrelationSimilarity, vecA, vecB, iterations));
results.push(runBenchmark('Cosine Similarity', cosineSimilarity, vecA, vecB, iterations));
results.push(runBenchmark('Euclidean Similarity', euclideanSimilarity, vecA, vecB, iterations));
results.push(runBenchmark('Manhattan Similarity', manhattanSimilarity, vecA, vecB, iterations));
results.push(runBenchmark('Gower Similarity', (a,b) => gowerSimilarity(a,b, Array(a.length).fill(1)), vecA, vecB, iterations));
results.push(runBenchmark('Soergel Similarity', soergelSimilarity, vecA, vecB, iterations));
results.push(runBenchmark('Kulczynski Similarity', kulczynskiSimilarity, vecA, vecB, iterations));
results.push(runBenchmark('Lorentzian Similarity', lorentzianSimilarity, vecA, vecB, iterations));

// Heuristics
results.push(runBenchmark('Weighted Minkowski Similarity', weightedMinkowskiSimilarity, vecA, vecB, iterations));
results.push(runBenchmark('Canberra Similarity', canberraSimilarity, vecA, vecB, iterations));
results.push(runBenchmark('Chebyshev Similarity', chebyshevSimilarity, vecA, vecB, iterations));

// Jaccard
results.push(runBenchmark('Jaccard Binary Similarity', jaccardSimilarityBinary, vecA, vecB, iterations));
results.push(runBenchmark('Jaccard Weighted Similarity', jaccardSimilarityWeighted, vecA, vecB, iterations));
results.push(runBenchmark('Jaccard Real Valued Similarity', jaccardSimilarityRealValued, vecA, vecB, iterations));

// Intersection
results.push(runBenchmark('Intersection Similarity', intersectionSimilarity, vecA, vecB, iterations));
results.push(runBenchmark('Wave-Hedges Similarity', waveHedgesSimilarity, vecA, vecB, iterations));
results.push(runBenchmark('Sorensen Similarity', sorensenSimilarity, vecA, vecB, iterations));
results.push(runBenchmark('Motyka Similarity', motykaSimilarity, vecA, vecB, iterations));

// Entropy
results.push(runBenchmark('Kullback-Leibler Similarity', kullbackLeiblerSimilarity, vecA, vecB, iterations));
results.push(runBenchmark('Jeffreys Similarity', jeffreysSimilarity, vecA, vecB, iterations));
results.push(runBenchmark('K-Divergence Similarity', kSimilarity, vecA, vecB, iterations));
results.push(runBenchmark('Topsoe Similarity', topsoeSimilarity, vecA, vecB, iterations));

// Chi-Square
results.push(runBenchmark('Pearson Chi-Square Distance', pearsonChiSquareDistance, vecA, vecB, iterations));
results.push(runBenchmark('Neyman Chi-Square Distance', neymanChiSquareDistance, vecA, vecB, iterations));
results.push(runBenchmark('Additive Symmetric Chi-Square Distance', additiveSymmetricChiSquareDistance, vecA, vecB, iterations));
results.push(runBenchmark('Squared Chi-Square Distance', squaredChiSquareDistance, vecA, vecB, iterations));
results.push(runBenchmark('Normalized Pearson Chi-Square Similarity', normalizedPearsonChiSquareSimilarity, vecA, vecB, iterations));
results.push(runBenchmark('Normalized Neyman Chi-Square Similarity', normalizedNeymanChiSquareSimilarity, vecA, vecB, iterations));
results.push(runBenchmark('Normalized Additive Symmetric Chi-Square Similarity', normalizedAdditiveSymmetricChiSquareSimilarity, vecA, vecB, iterations));
results.push(runBenchmark('Normalized Squared Chi-Square Similarity', normalizedSquaredChiSquareSimilarity, vecA, vecB, iterations));


// Fidelity
results.push(runBenchmark('Fidelity Similarity', fidelitySimilarity, vecA, vecB, iterations));
results.push(runBenchmark('Hellinger Distance', hellingerDistance, vecA, vecB, iterations));
results.push(runBenchmark('Matusita Distance', matusitaDistance, vecA, vecB, iterations));
results.push(runBenchmark('Squared-Chord Distance', squaredChordDistance, vecA, vecB, iterations));
results.push(runBenchmark('Normalized Matusita Similarity', normalizedMatusitaSimilarity, vecA, vecB, iterations));
results.push(runBenchmark('Normalized Squared-Chord Similarity', normalizedSquaredChordSimilarity, vecA, vecB, iterations));


// Custom
results.push(runBenchmark('Penalized Similarity', computeVectorSimilarityMeanStdPenalized, vecA, vecB, iterations));
results.push(runBenchmark('Correlation Similarity', vectorSimilarityCorrelation, vecA, vecB, iterations));
results.push(runBenchmark('Robust Similarity', computeVectorSimilarityRobust, vecA, vecB, iterations));
results.push(runBenchmark('Mean/Std Power Similarity', computeVectorSimilarityMeanStdPower, vecA, vecB, iterations));
results.push(runBenchmark('Metric Like Similarity', computeVectorSimilarityMetricLike, vecA, vecB, iterations));
results.push(runBenchmark('Tunable Similarity', computeVectorSimilarityTunable, vecA, vecB, iterations));
results.push(runBenchmark('Variance Weighted Similarity', computeVectorSimilarityVarianceWeighted, vecA, vecB, iterations));

const outputPath = resolve(process.cwd(), 'benchmark-results.json');
writeFileSync(outputPath, JSON.stringify(results, null, 2));

console.log(`Benchmark results saved to ${outputPath}`);
