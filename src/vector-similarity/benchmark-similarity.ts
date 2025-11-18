// A simple benchmarking script for vector similarity functions
import {
  computeVectorSimilarityMeanStdPenalized,
} from './similarity/vectorSimilarityMeanStdPenalized';

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

const time1 = runBenchmark(computeVectorSimilarityMeanStdPenalized, vecA, vecB);
console.log(`computeVectorSimilarityMeanStdPenalized took ${time1 / 1e6} ms`);

const time2 = runBenchmark(computeVectorSimilarityMeanStdPenalized, vecA, vecB);
console.log(`computeVectorSimilarityMeanStdPenalized took ${time2 / 1e6} ms`);
