
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


const runOutliersResiliencyTest = () => {
  const results = [];
  const vecA = [1, 34000, -0.0001];
  const vecB = [1.1, 37800, -0.00015];
  const testCase1 = {
    testCase: 'Short Vectors with a Single Outlier',
    vecA,
    vecB,
    similarities: {},
  };
  for (const name in similarityFunctions) {
    try {
      testCase1.similarities[name] = parseFloat(similarityFunctions[name](vecA, vecB).toFixed(4));
    } catch (e) {
      testCase1.similarities[name] = `Error: ${(e as Error).message}`;
    }
  }
  results.push(testCase1);
  const vecC = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const vecD = [1.1, 2.2, 3.3, 4.4, 50000, 6.6, 7.7, -20000, 9.9, 10.1];
  const testCase2 = {
    testCase: 'Longer Vectors with Multiple Outliers',
    vecC,
    vecD,
    similarities: {},
  };
  for (const name in similarityFunctions) {
    try {
      testCase2.similarities[name] = parseFloat(similarityFunctions[name](vecC, vecD).toFixed(4));
    } catch (e) {
      testCase2.similarities[name] = `Error: ${(e as Error).message}`;
    }
  }
  results.push(testCase2);
  return results;
};

const runBenchmark = () => {
  const generateRandomVector = (n: number): number[] => {
    const vector: number[] = [];
    for (let i = 0; i < n; i++) {
      vector.push(Math.random());
    }
    return vector;
  }

  const runSingleBenchmark = (
    name: string,
    func: (a: number[], b: number[]) => number,
    vecA: number[],
    vecB: number[],
    iterations: number
  ): { name: string, avgTime: number, iterations: number } => {
    const timings: number[] = [];
    for (let i = 0; i < iterations; i++) {
      const startTime = process.hrtime();
      func(vecA, vecB);
      const endTime = process.hrtime(startTime);
      timings.push(endTime[0] * 1e9 + endTime[1]);
    }
    const avgTime = timings.reduce((a, b) => a + b, 0) / iterations;

    return {
      name: name,
      avgTime: avgTime / 1e6,
      iterations: iterations
    };
  }

  const vectorSize = 1000;
  const iterations = 10;
  const vecA = generateRandomVector(vectorSize);
  const vecB = generateRandomVector(vectorSize);

  const results = [];
  for (const name in similarityFunctions) {
    try {
      results.push(runSingleBenchmark(name, similarityFunctions[name], vecA, vecB, iterations));
    } catch (e) {
      console.log(`Error benchmarking ${name}: ${(e as Error).message}`);
    }
  }
  return results;
};

const runSimilarityCompare = () => {
  const vecA = [1, 1, 0, 1];
  const vecB = [1, 0, 1, 1];
  const vecC = [0.5, 0.8, 0.2, 0.9];
  const vecD = [0.6, 0.7, 0.1, 1.0];

  const results = {
    binary: {
      vecA,
      vecB,
      similarities: {},
    },
    continuous: {
      vecC,
      vecD,
      similarities: {},
    },
  };

  for (const name in similarityFunctions) {
    try {
      results.binary.similarities[name] = parseFloat(similarityFunctions[name](vecA, vecB).toFixed(4));
    } catch (e) {
      results.binary.similarities[name] = `Error: ${(e as Error).message}`;
    }
  }

  for (const name in similarityFunctions) {
    try {
      results.continuous.similarities[name] = parseFloat(similarityFunctions[name](vecC, vecD).toFixed(4));
    } catch (e) {
      results.continuous.similarities[name] = `Error: ${(e as Error).message}`;
    }
  }

  return results;
};

const runComparisonDemo = () => {
  const vecA = [1, 2, 3, 4, 5];
  const vecB = [1.1, 2.2, 3.3, 4.4, 5.5];
  const vecC = [1, 2, 100, 4, 5];
  const vecD = [5, 4, 3, 2, 1];
  const vecE = [1, 2, 3, 4, 5];

  const vectors = {
      A: vecA,
      B: vecB,
      C: vecC,
      D: vecD,
      E: vecE,
  };

  const results = {
      vectors,
      comparisons: {} as Record<string, Record<string, number | string>>,
  };

  for (const name in similarityFunctions) {
    results.comparisons[name] = {};
    for (const vecName in vectors) {
        if (vecName !== 'A') {
            try {
                const result = similarityFunctions[name](vecA, vectors[vecName]);
                results.comparisons[name][`A_vs_${vecName}`] = result;
            } catch (e) {
                results.comparisons[name][`A_vs_${vecName}`] = `Error: ${(e as Error).message}`;
            }
        }
    }
  }
  return results;
};

const runStressTests = () => {
  const results = [];

  // Test case 1: Noise Resilience
  const baseVec = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const noisyVec = baseVec.map(x => x + (Math.random() - 0.5) * 0.1);
  const noiseTest = {
    testCase: 'Noise Resilience',
    baseVec,
    noisyVec,
    similarities: {},
  };
  for (const name in similarityFunctions) {
    try {
      noiseTest.similarities[name] = parseFloat(similarityFunctions[name](baseVec, noisyVec).toFixed(4));
    } catch (e) {
      noiseTest.similarities[name] = `Error: ${(e as Error).message}`;
    }
  }
  results.push(noiseTest);

  // Test case 2: Scale Invariance
  const scaleVec = baseVec.map(x => x * 100);
  const scaleTest = {
    testCase: 'Scale Invariance',
    baseVec,
    scaleVec,
    similarities: {},
  };
  for (const name in similarityFunctions) {
    try {
      scaleTest.similarities[name] = parseFloat(similarityFunctions[name](baseVec, scaleVec).toFixed(4));
    } catch (e) {
      scaleTest.similarities[name] = `Error: ${(e as Error).message}`;
    }
  }
  results.push(scaleTest);

  // Test case 3: Sparse Vectors
  const sparseVecA = [1, 0, 0, 0, 5, 0, 0, 8, 0, 10];
  const sparseVecB = [0, 0, 3, 0, 5, 0, 7, 0, 9, 0];
  const sparseTest = {
    testCase: 'Sparse Vectors',
    sparseVecA,
    sparseVecB,
    similarities: {},
  };
  for (const name in similarityFunctions) {
    try {
      sparseTest.similarities[name] = parseFloat(similarityFunctions[name](sparseVecA, sparseVecB).toFixed(4));
    } catch (e) {
      sparseTest.similarities[name] = `Error: ${(e as Error).message}`;
    }
  }
  results.push(sparseTest);

  // Test case 4: High Dynamic Range
  const highRangeVecA = [1e-9, 1e-6, 1e-3, 1, 1e3, 1e6, 1e9];
  const highRangeVecB = [1.1e-9, 1.1e-6, 1.1e-3, 1.1, 1.1e3, 1.1e6, 1.1e9];
  const highRangeTest = {
    testCase: 'High Dynamic Range',
    highRangeVecA,
    highRangeVecB,
    similarities: {},
  };
  for (const name in similarityFunctions) {
    try {
      highRangeTest.similarities[name] = parseFloat(similarityFunctions[name](highRangeVecA, highRangeVecB).toFixed(4));
    } catch (e) {
      highRangeTest.similarities[name] = `Error: ${(e as Error).message}`;
    }
  }
  results.push(highRangeTest);

  return results;
};

const main = () => {
  const allResults = {
    outliersResiliencyTest: runOutliersResiliencyTest(),
    benchmark: runBenchmark(),
    similarityCompare: runSimilarityCompare(),
    comparisonDemo: runComparisonDemo(),
    stressTests: runStressTests(),
  };

  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const outputDir = path.resolve(__dirname, '../../tmp');
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  fs.writeFileSync(path.join(outputDir, 'vector-similarity-analysis.json'), JSON.stringify(allResults, null, 2));

  console.log('Test results saved to tmp/vector-similarity-analysis.json');
};

main();
