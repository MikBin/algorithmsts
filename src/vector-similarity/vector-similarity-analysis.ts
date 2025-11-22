
/* eslint-env node */
import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';

import {
  computeVectorSimilarityMeanStdPenalized,
} from './similarity/vectorSimilarityMeanStdPenalized';
import { vectorSimilarityCorrelation } from './similarity/vectorSimilarityCorrelation';
import { pearsonCorrelationSimilarity, normalizedCosineSimilarity, euclideanSimilarity, manhattanSimilarity, gowerSimilarity, soergelSimilarity, kulczynskiSimilarity, lorentzianSimilarity } from './similarity/classic';
import { weightedMinkowskiSimilarity, canberraSimilarity, chebyshevSimilarity } from './similarity/heuristics';
import { jaccardSimilarityBinary, jaccardSimilarityWeighted, jaccardSimilarityRealValued } from './similarity/jaccard';
import { computeVectorSimilarityRobust } from './similarity/vectorSimilarityRobust';
import { vectorSimilarityMeanStdPowerArithmeticMean } from './similarity/vectorSimilarityMeanStdPowerArithmeticMean';
import { computeVectorSimilarityMetricLike } from './similarity/vectorSimilarityMetricLike';
import { computeVectorSimilarityTunable } from './similarity/vectorSimilarityTunable';
import { computeVectorSimilarityVarianceWeighted } from './similarity/vectorSimilarityVarianceWeighted';
import { intersectionSimilarity, waveHedgesSimilarity, sorensenSimilarity, motykaSimilarity } from './similarity/intersection';
import { kullbackLeiblerSimilarity, jeffreysSimilarity, kSimilarity, topsoeSimilarity } from './similarity/entropy';
import { normalizedPearsonChiSquareSimilarity, normalizedNeymanChiSquareSimilarity, normalizedAdditiveSymmetricChiSquareSimilarity, normalizedSquaredChiSquareSimilarity } from './similarity/normalized-chi-square';
import { fidelitySimilarity, hellingerSimilarity } from './similarity/fidelity';
import { normalizedMatusitaSimilarity, normalizedSquaredChordSimilarity } from './similarity/normalized-fidelity';
import { polynomialKernelSimilarity, rbfKernelSimilarity } from './similarity/nonLinear';
import { VectorGenerationService, GenerationParams, GeneratorType, NoiseType } from './vectorGenerationService';

const similarityFunctions: Record<string, (a: number[], b: number[]) => number> = {
  pearsonCorrelationSimilarity,
  normalizedCosineSimilarity,
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
  normalizedPearsonChiSquareSimilarity,
  normalizedNeymanChiSquareSimilarity,
  normalizedAdditiveSymmetricChiSquareSimilarity,
  normalizedSquaredChiSquareSimilarity,
  fidelitySimilarity,
  hellingerSimilarity,
  normalizedMatusitaSimilarity,
  normalizedSquaredChordSimilarity,
  jaccardSimilarityBinary,
  jaccardSimilarityWeighted,
  jaccardSimilarityRealValued,
  computeVectorSimilarityMeanStdPenalized,
  vectorSimilarityCorrelation,
  computeVectorSimilarityRobust,
  vectorSimilarityMeanStdPowerArithmeticMean,
  computeVectorSimilarityMetricLike,
  computeVectorSimilarityTunable,
  computeVectorSimilarityVarianceWeighted,
  polynomialKernelSimilarity,
  rbfKernelSimilarity
};


const runOutliersResiliencyTest = () => {
  const results = [];
  const vecA = [1, 34000, -0.0001];
  const vecB = [1.1, 37800, -0.00015];
  const testCase1: any = {
    testCase: 'Short Vectors with a Single Outlier',
    vecA,
    vecB,
    similarities: {},
  };
  for (const name in similarityFunctions) {
    try {
      testCase1.similarities[name] = parseFloat(similarityFunctions[name](vecA, vecB).toFixed(4));
    } catch (e) {
      const msg = (e as Error).message;
      testCase1.similarities[name] = msg.includes('must be non-negative') ? 'N/A (Invalid Input)' : `Error: ${msg}`;
    }
  }
  results.push(testCase1);
  const vecC = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const vecD = [1.1, 2.2, 3.3, 4.4, 50000, 6.6, 7.7, -20000, 9.9, 10.1];
  const testCase2: any = {
    testCase: 'Longer Vectors with Multiple Outliers',
    vecC,
    vecD,
    similarities: {},
  };
  for (const name in similarityFunctions) {
    try {
      testCase2.similarities[name] = parseFloat(similarityFunctions[name](vecC, vecD).toFixed(4));
    } catch (e) {
      const msg = (e as Error).message;
      testCase2.similarities[name] = msg.includes('must be non-negative') ? 'N/A (Invalid Input)' : `Error: ${msg}`;
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

  const results: any = {
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
      const msg = (e as Error).message;
      results.binary.similarities[name] = msg.includes('must be non-negative') ? 'N/A (Invalid Input)' : `Error: ${msg}`;
    }
  }

  for (const name in similarityFunctions) {
    try {
      results.continuous.similarities[name] = parseFloat(similarityFunctions[name](vecC, vecD).toFixed(4));
    } catch (e) {
      const msg = (e as Error).message;
      results.continuous.similarities[name] = msg.includes('must be non-negative') ? 'N/A (Invalid Input)' : `Error: ${msg}`;
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

  const vectors: Record<string, number[]> = {
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
                const msg = (e as Error).message;
                results.comparisons[name][`A_vs_${vecName}`] = msg.includes('must be non-negative') ? 'N/A (Invalid Input)' : `Error: ${msg}`;
            }
        }
    }
  }
  return results;
};

const addNoise = (vector: number[], noiseLevel: number): number[] => {
  return vector.map((x) => x + (Math.random() - 0.5) * noiseLevel);
}

const runNoiseResilienceLevelsTest = () => {
  const baseVector = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const noiseLevels = [0.1, 0.5, 1.0, 2.0, 5.0];

  const results: any = {
    baseVector,
    noiseLevels: {},
  };

  noiseLevels.forEach((noiseLevel) => {
    const noisyVector = addNoise(baseVector, noiseLevel);
    const similarities: any = {
      noisyVector: noisyVector.map((x) => parseFloat(x.toFixed(4))),
    };

    for (const name in similarityFunctions) {
      try {
        similarities[name] = parseFloat(similarityFunctions[name](baseVector, noisyVector).toFixed(4));
      } catch (e) {
        const msg = (e as Error).message;
        similarities[name] = msg.includes('must be non-negative') ? 'N/A (Invalid Input)' : `Error: ${msg}`;
      }
    }
    results.noiseLevels[noiseLevel] = similarities;
  });

  return results;
};

const runStressTests = () => {
  const results = [];

  // Test case 1: Noise Resilience
  const baseVec = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const noisyVec = baseVec.map(x => x + (Math.random() - 0.5) * 0.1);
  const noiseTest: any = {
    testCase: 'Noise Resilience',
    baseVec,
    noisyVec,
    similarities: {},
  };
  for (const name in similarityFunctions) {
    try {
      noiseTest.similarities[name] = parseFloat(similarityFunctions[name](baseVec, noisyVec).toFixed(4));
    } catch (e) {
      const msg = (e as Error).message;
      noiseTest.similarities[name] = msg.includes('must be non-negative') ? 'N/A (Invalid Input)' : `Error: ${msg}`;
    }
  }
  results.push(noiseTest);

  // Test case 2: Scale Invariance
  const scaleVec = baseVec.map(x => x * 100);
  const scaleTest: any = {
    testCase: 'Scale Invariance',
    baseVec,
    scaleVec,
    similarities: {},
  };
  for (const name in similarityFunctions) {
    try {
      scaleTest.similarities[name] = parseFloat(similarityFunctions[name](baseVec, scaleVec).toFixed(4));
    } catch (e) {
      const msg = (e as Error).message;
      scaleTest.similarities[name] = msg.includes('must be non-negative') ? 'N/A (Invalid Input)' : `Error: ${msg}`;
    }
  }
  results.push(scaleTest);

  // Test case 3: Sparse Vectors
  const sparseVecA = [1, 0, 0, 0, 5, 0, 0, 8, 0, 10];
  const sparseVecB = [0, 0, 3, 0, 5, 0, 7, 0, 9, 0];
  const sparseTest: any = {
    testCase: 'Sparse Vectors',
    sparseVecA,
    sparseVecB,
    similarities: {},
  };
  for (const name in similarityFunctions) {
    try {
      sparseTest.similarities[name] = parseFloat(similarityFunctions[name](sparseVecA, sparseVecB).toFixed(4));
    } catch (e) {
      const msg = (e as Error).message;
      sparseTest.similarities[name] = msg.includes('must be non-negative') ? 'N/A (Invalid Input)' : `Error: ${msg}`;
    }
  }
  results.push(sparseTest);

  // Test case 4: High Dynamic Range
  const highRangeVecA = [1e-9, 1e-6, 1e-3, 1, 1e3, 1e6, 1e9];
  const highRangeVecB = [1.1e-9, 1.1e-6, 1.1e-3, 1.1, 1.1e3, 1.1e6, 1.1e9];
  const highRangeTest: any = {
    testCase: 'High Dynamic Range',
    highRangeVecA,
    highRangeVecB,
    similarities: {},
  };
  for (const name in similarityFunctions) {
    try {
      highRangeTest.similarities[name] = parseFloat(similarityFunctions[name](highRangeVecA, highRangeVecB).toFixed(4));
    } catch (e) {
      const msg = (e as Error).message;
      highRangeTest.similarities[name] = msg.includes('must be non-negative') ? 'N/A (Invalid Input)' : `Error: ${msg}`;
    }
  }
  results.push(highRangeTest);

  return results;
};

const runNonLinearAnalysis = () => {
  const service = new VectorGenerationService();
  const results: any[] = [];

  // 1. Functional & Geometric Diversity (Standard Noise)
  // Reduced set of types to run by default, but includes new ones
  const standardTypes: GeneratorType[] = [
      'quadratic', 'cubic', 'exponential', 'logarithmic', 'sqrt',
      'sin', 'cos', 'tan', 'csc', 'sec', 'cot',
      'asin', 'acos', 'atan',
      'sinh', 'cosh', 'tanh',
      'circle', 'ellipse', 'spiral_archimedean', 'spiral_logarithmic',
      'lemniscate', 'rose', 'cardioid', 'lissajous',
      'sphere', 'toroid', 'helix'
  ];

  const sizes = [100, 50, 10]; // Restrict to requested sizes
  const standardNoiseLevels = [0.1, 0.5]; // Restrict to requested noise levels

  const targetMetrics = [
    'normalizedCosineSimilarity',
    'pearsonCorrelationSimilarity',
    'euclideanSimilarity',
    'polynomialKernelSimilarity',
    'rbfKernelSimilarity',
    'vectorSimilarityMeanStdPowerArithmeticMean'
  ];

  const runAnalysisCase = (service: VectorGenerationService, params: GenerationParams) => {
      const { vecA, vecB, label } = service.generateVectorPair(params);
      const caseResult: any = {
          ...params,
          label,
          metrics: {}
      };

      targetMetrics.forEach(metricName => {
          if (similarityFunctions[metricName]) {
              try {
                const start = process.hrtime();
                const score = similarityFunctions[metricName](vecA, vecB);
                const end = process.hrtime(start);
                const timeMs = (end[0] * 1e9 + end[1]) / 1e6;

                caseResult.metrics[metricName] = {
                    score: parseFloat(score.toFixed(4)),
                    timeMs: parseFloat(timeMs.toFixed(4))
                };
              } catch (e) {
                 const msg = (e as Error).message;
                 caseResult.metrics[metricName] = {
                    score: msg.includes('must be non-negative') ? 'N/A (Invalid Input)' : `Error: ${msg}`,
                    timeMs: 0
                 };
              }
          }
      });
      return caseResult;
  };

  // 1. Standard Coverage
  standardTypes.forEach(type => {
      sizes.forEach(size => {
          standardNoiseLevels.forEach(level => {
              const params: GenerationParams = {
                  type,
                  size,
                  noiseSettings: { type: 'gaussian', level: level }
              };
              results.push(runAnalysisCase(service, params));
          });
      });
  });

  // 2. Noise Robustness (Varying Noise Types on a subset)
  const robustnessTypes: GeneratorType[] = ['sin', 'circle', 'sphere'];
  const noiseTypes: NoiseType[] = ['gaussian', 'uniform', 'impulsive'];
  const noiseLevels = [0.1, 0.5];

  robustnessTypes.forEach(type => {
      noiseTypes.forEach(nType => {
          noiseLevels.forEach(level => {
               const params: GenerationParams = {
                  type,
                  size: 200,
                  noiseSettings: { type: nType, level: level, probability: 0.1 }
              };
              results.push(runAnalysisCase(service, params));
          });
      });
  });

  // 3. Anomaly Resilience
  const anomalies: ('peak' | 'discontinuity' | 'high_freq_oscillation')[] = ['peak', 'discontinuity', 'high_freq_oscillation'];

  robustnessTypes.forEach(type => {
      anomalies.forEach(anomaly => {
           const params: GenerationParams = {
              type,
              size: 200,
              noiseSettings: { type: 'gaussian', level: 0.05 }, // Low base noise
              anomalySettings: { type: anomaly, intensity: 5, probability: 0.02 }
          };
          results.push(runAnalysisCase(service, params));
      });
  });

  // Generate insights
  const insights = generateInsights(results);

  return {
    detailedResults: results,
    insights
  };
};

const generateInsights = (results: any[]) => {
    const insights: string[] = [];

    // 1. Find Best Metric for Non-Linear Geometry (Circle/Helix)
    // Filter for 'circle' with standard gaussian noise
    const circleTests = results.filter(r => r.type === 'circle' && r.noiseSettings?.type === 'gaussian' && !r.anomalySettings);
    if (circleTests.length > 0) {
         // Grab one case
         const c = circleTests[0].metrics;
         // Compare Cosine vs Kernel
         const cos = c.normalizedCosineSimilarity?.score;
         const poly = c.polynomialKernelSimilarity?.score;
         if (typeof cos === 'number' && typeof poly === 'number') {
             if (poly > cos) {
                 insights.push(`Polynomial Kernel Similarity (${poly}) outperformed Cosine Similarity (${cos}) on circular geometry.`);
             }
         }
    }

    // 2. Robustness to Impulsive Noise
    const impulsiveTests = results.filter(r => r.noiseSettings?.type === 'impulsive' && r.noiseSettings?.level === 1.0);
    if (impulsiveTests.length > 0) {
        let bestMetric = '';
        let bestScore = -Infinity;
        const sums: Record<string, number> = {};
        const counts: Record<string, number> = {};

        impulsiveTests.forEach(test => {
             for(const [m, data] of Object.entries(test.metrics)) {
                 const score = (data as any).score;
                 if (typeof score === 'number') {
                     sums[m] = (sums[m] || 0) + score;
                     counts[m] = (counts[m] || 0) + 1;
                 }
             }
        });

        for(const m in sums) {
            const avg = sums[m] / counts[m];
            if (avg > bestScore && avg <= 1.0) {
                bestScore = avg;
                bestMetric = m;
            }
        }
        insights.push(`Metric '${bestMetric}' showed highest resilience to impulsive noise (Avg Score: ${bestScore.toFixed(4)}).`);
    }

    return insights;
};

const main = () => {
  const nonLinearResults = runNonLinearAnalysis();

  const allResults = {
    outliersResiliencyTest: runOutliersResiliencyTest(),
    benchmark: runBenchmark(),
    similarityCompare: runSimilarityCompare(),
    comparisonDemo: runComparisonDemo(),
    stressTests: runStressTests(),
    noiseResilienceLevelsTest: runNoiseResilienceLevelsTest(),
    nonLinearAnalysis: nonLinearResults
  };

  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const outputDir = path.resolve(__dirname, '../../tmp');
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  fs.writeFileSync(path.join(outputDir, 'vector-similarity-analysis.json'), JSON.stringify(allResults, null, 2));
  console.log('Test results saved to tmp/vector-similarity-analysis.json');

  const visualizationDir = path.resolve(__dirname, '../../visualization');
  if (!fs.existsSync(visualizationDir)) {
    fs.mkdirSync(visualizationDir, { recursive: true });
  }

  const jsContent = `export const analysisResults = ${JSON.stringify(allResults, null, 2)};`;
  fs.writeFileSync(path.join(visualizationDir, 'similarity-data.js'), jsContent);
  console.log('Visualization data saved to visualization/similarity-data.js');
};

main();
