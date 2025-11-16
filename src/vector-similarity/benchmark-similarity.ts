// A simple benchmarking script for vector similarity functions
import {
  computeVectorSimilarity,
  computeVectorSimilarityPenalized,
} from './vectorSimilarity';

function generateRandomVector(n: number): number[] {
  const vector: number[] = [];
  for (let i = 0; i < n; i++) {
    vector.push(Math.random());
  }
  return vector;
}

function runBenchmark(
  func: (a: number[], b: number[]) => number,
  vecA: number[],
  vecB: number[]
): number {
  const startTime = process.hrtime();
  func(vecA, vecB);
  const endTime = process.hrtime(startTime);
  return endTime[0] * 1e9 + endTime[1]; // in nanoseconds
}

const vectorSize = 1000;
const vecA = generateRandomVector(vectorSize);
const vecB = generateRandomVector(vectorSize);

const time1 = runBenchmark(computeVectorSimilarity, vecA, vecB);
console.log(`computeVectorSimilarity took ${time1 / 1e6} ms`);

const time2 = runBenchmark(computeVectorSimilarityPenalized, vecA, vecB);
console.log(`computeVectorSimilarityPenalized took ${time2 / 1e6} ms`);
