
// A simple benchmarking script for vector similarity functions
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

// Heuristics
runBenchmark('Kendall Similarity', kendallCorrelationSimilarity, vecA, vecB, iterations);
runBenchmark('Weighted Minkowski Similarity', weightedMinkowskiSimilarity, vecA, vecB, iterations);
runBenchmark('Canberra Similarity', canberraSimilarity, vecA, vecB, iterations);
runBenchmark('Chebyshev Similarity', chebyshevSimilarity, vecA, vecB, iterations);
runBenchmark('Bray-Curtis Similarity', brayCurtisSimilarity, vecA, vecB, iterations);
runBenchmark('Harmonic Mean Similarity', harmonicMeanSimilarity, vecA, vecB, iterations);
runBenchmark('Wave-Hedges Similarity', waveHedgesSimilarity, vecA, vecB, iterations);

// Jaccard
runBenchmark('Jaccard Binary Similarity', jaccardSimilarityBinary, vecA, vecB, iterations);
runBenchmark('Jaccard Weighted Similarity', jaccardSimilarityWeighted, vecA, vecB, iterations);
runBenchmark('Jaccard Real Valued Similarity', jaccardSimilarityRealValued, vecA, vecB, iterations);

// Custom
runBenchmark('Penalized Similarity', computeVectorSimilarityMeanStdPenalized, vecA, vecB, iterations);
runBenchmark('Correlation Similarity', vectorSimilarityCorrelation, vecA, vecB, iterations);
runBenchmark('Robust Similarity', computeVectorSimilarityRobust, vecA, vecB, iterations);
runBenchmark('Mean/Std Power Similarity', computeVectorSimilarityMeanStdPower, vecA, vecB, iterations);
runBenchmark('Metric Like Similarity', computeVectorSimilarityMetricLike, vecA, vecB, iterations);
runBenchmark('Tunable Similarity', computeVectorSimilarityTunable, vecA, vecB, iterations);
runBenchmark('Variance Weighted Similarity', computeVectorSimilarityVarianceWeighted, vecA, vecB, iterations);
