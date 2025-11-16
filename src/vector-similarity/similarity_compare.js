/**
 * Head-to-Head Similarity Function Comparison Framework
 * 
 * This script provides comprehensive comparison tools to evaluate similarity functions
 * across multiple dimensions: performance, accuracy, behavior, and robustness.
 * 
 * Usage:
 *   node similarity_compare.js function1,function2 [options]
 *   node similarity_compare.js all [options]
 * 
 * Example:
 *   node similarity_compare.js cosineSimilarity,weightedMinkowskiSimilarity --test performance
 */

import {
  weightedMinkowskiSimilarity,
  canberraSimilarity,
  chebyshevSimilarity,
  brayCurtisSimilarity,
  harmonicMeanSimilarity,
  geometricMeanSimilarity,
  ratioBasedSimilarity
} from './similarity_heuristics.js';

import {
  cosineSimilarity,
  euclideanSimilarity,
  manhattanSimilarity,
  jaccardSimilarity,
  pearsonCorrelation
} from './similarity-functions.js';

import {
  computeVectorSimilarityMeanStdPower
} from './vectorSimilarityMeanStdPower.js';

import {
  computeVectorSimilarityTunable
} from './vectorSimilarityTunable.js';

import {
  computeVectorSimilarityRobust
} from './vectorSimilarityRobust.js';

import {
  computeVectorSimilarityMetricLike
} from './vectorSimilarityMetricLike.js';

/**
 * Configuration
 */
const CONFIG = {
  dimensions: [64, 128, 256, 512, 1024],
  pairCount: 1000,
  performanceRuns: 5,
  noiseLevels: [0.01, 0.05, 0.1, 0.2]
};

/**
 * Available similarity functions registry
 */
const SIMILARITY_FUNCTIONS = {
  weightedMinkowskiSimilarity: {
    fn: weightedMinkowskiSimilarity,
    description: 'Weighted Minkowski Distance'
  },
  canberraSimilarity: {
    fn: canberraSimilarity,
    description: 'Canberra Distance'
  },
  chebyshevSimilarity: {
    fn: chebyshevSimilarity,
    description: 'Chebyshev Distance'
  },
  brayCurtisSimilarity: {
    fn: brayCurtisSimilarity,
    description: 'Bray-Curtis Distance',
    requiresNonNegative: true
  },
  harmonicMeanSimilarity: {
    fn: harmonicMeanSimilarity,
    description: 'Harmonic Mean Similarity'
  },
  geometricMeanSimilarity: {
    fn: geometricMeanSimilarity,
    description: 'Geometric Mean Similarity'
  },
  ratioBasedSimilarity: {
    fn: ratioBasedSimilarity,
    description: 'Ratio-based Similarity'
  },
  cosineSimilarity: {
    fn: cosineSimilarity,
    description: 'Cosine Similarity'
  },
  euclideanSimilarity: {
    fn: euclideanSimilarity,
    description: 'Euclidean Distance'
  },
  manhattanSimilarity: {
    fn: manhattanSimilarity,
    description: 'Manhattan Distance'
  },
  jaccardSimilarity: {
    fn: jaccardSimilarity,
    description: 'Jaccard Similarity'
  },
  pearsonCorrelation: {
    fn: pearsonCorrelation,
    description: 'Pearson Correlation'
  },
  computeVectorSimilarityMeanStdPower: {
    fn: computeVectorSimilarityMeanStdPower,
    description: 'Mean/Std Power Similarity'
  },
  computeVectorSimilarityTunable: {
    fn: computeVectorSimilarityTunable,
    description: 'Tunable Similarity'
  },
  computeVectorSimilarityRobust: {
    fn: computeVectorSimilarityRobust,
    description: 'Robust Similarity'
  },
  computeVectorSimilarityMetricLike: {
    fn: computeVectorSimilarityMetricLike,
    description: 'Metric-like Similarity'
  }
};

/**
 * Utility functions
 */
function createXorShift32(seed) {
  let state = seed >>> 0 || 1;
  return function next() {
    state ^= state << 13;
    state ^= state >>> 17;
    state ^= state << 5;
    return (state >>> 0) / 0xffffffff;
  };
}

function generateRandomVector(dim, range, rng) {
  const v = new Array(dim);
  for (let i = 0; i < dim; i++) {
    v[i] = range.min + (range.max - range.min) * rng();
  }
  return v;
}

function addGaussianNoise(vec, sigma, rng) {
  const out = new Array(vec.length);
  for (let i = 0; i < vec.length; i++) {
    const u1 = Math.max(rng(), 1e-12);
    const u2 = rng();
    const z = Math.sqrt(-2.0 * Math.log(u1)) * Math.cos(2 * Math.PI * u2);
    out[i] = vec[i] + z * sigma;
  }
  return out;
}

function timeFunction(fn, ...args) {
  const start = performance.now();
  const result = fn(...args);
  const end = performance.now();
  return { result, time: end - start };
}

function computeCorrelation(x, y) {
  const n = x.length;
  if (n !== y.length || n === 0) return 0;
  
  const meanX = x.reduce((a, b) => a + b) / n;
  const meanY = y.reduce((a, b) => a + b) / n;
  
  let num = 0, denX = 0, denY = 0;
  for (let i = 0; i < n; i++) {
    const dx = x[i] - meanX;
    const dy = y[i] - meanY;
    num += dx * dy;
    denX += dx * dx;
    denY += dy * dy;
  }
  
  if (denX === 0 || denY === 0) return 0;
  return num / Math.sqrt(denX * denY);
}

/**
 * Test Suite Classes
 */
class PerformanceComparison {
  constructor(functions, config) {
    this.functions = functions;
    this.config = config;
  }

  async runTest() {
    console.log('\n=== PERFORMANCE COMPARISON ===\n');
    
    const results = {};
    
    for (const dim of this.config.dimensions.slice(0, 3)) { // Limit for demo
      console.log(`Testing dimension: ${dim}`);
      const testVectors = this.generateTestVectors(dim);
      
      for (const funcName of this.functions) {
        const func = SIMILARITY_FUNCTIONS[funcName];
        if (!func) continue;
        
        const times = [];
        for (let run = 0; run < Math.min(this.config.performanceRuns, 3); run++) {
          const { time } = timeFunction(func.fn, testVectors.a[run], testVectors.b[run]);
          times.push(time);
        }
        
        const avgTime = times.reduce((a, b) => a + b) / times.length;
        const stdTime = Math.sqrt(
          times.reduce((sum, t) => sum + Math.pow(t - avgTime, 2), 0) / times.length
        );
        
        if (!results[funcName]) results[funcName] = {};
        results[funcName][dim] = {
          avgTime,
          stdTime,
          throughput: 1000 / avgTime
        };
        
        console.log(`  ${funcName}: ${avgTime.toFixed(2)}ms ± ${stdTime.toFixed(2)}ms`);
      }
    }
    
    return results;
  }

  generateTestVectors(dim) {
    const rng = createXorShift32(12345);
    const range = { min: -100, max: 100 };
    
    const a = [], b = [];
    for (let i = 0; i < Math.min(this.config.pairCount, 10); i++) {
      a.push(generateRandomVector(dim, range, rng));
      b.push(generateRandomVector(dim, range, rng));
    }
    
    return { a, b };
  }
}

class BehavioralComparison {
  constructor(functions, config) {
    this.functions = functions;
    this.config = config;
  }

  async runTest() {
    console.log('\n=== BEHAVIORAL COMPARISON ===\n');
    
    const results = {};
    const dim = 64; // Smaller for demo
    const testVectors = this.generateTestVectors(dim);
    
    const scores = {};
    for (const funcName of this.functions) {
      const func = SIMILARITY_FUNCTIONS[funcName];
      if (!func) continue;
      
      scores[funcName] = [];
      for (let i = 0; i < testVectors.a.length; i++) {
        try {
          const score = func.fn(testVectors.a[i], testVectors.b[i]);
          scores[funcName].push(score);
        } catch (e) {
          scores[funcName].push(0);
        }
      }
    }
    
    console.log('Pairwise Score Correlations:');
    const correlations = {};
    for (let i = 0; i < this.functions.length; i++) {
      for (let j = i + 1; j < this.functions.length; j++) {
        const func1 = this.functions[i];
        const func2 = this.functions[j];
        const corr = computeCorrelation(scores[func1], scores[func2]);
        
        if (!correlations[func1]) correlations[func1] = {};
        correlations[func1][func2] = corr;
        
        console.log(`  ${func1} vs ${func2}: ${corr.toFixed(4)}`);
      }
    }
    
    return { correlations };
  }

  generateTestVectors(dim) {
    const rng = createXorShift32(67890);
    const range = { min: -10, max: 10 };
    
    const a = [], b = [];
    for (let i = 0; i < 20; i++) { // Smaller for demo
      a.push(generateRandomVector(dim, range, rng));
      b.push(generateRandomVector(dim, range, rng));
    }
    
    return { a, b };
  }
}

class RobustnessComparison {
  constructor(functions, config) {
    this.functions = functions;
    this.config = config;
  }

  async runTest() {
    console.log('\n=== ROBUSTNESS COMPARISON ===\n');
    
    const results = {};
    const dim = 32; // Smaller for demo
    const baseVectors = this.generateBaseVectors(dim);
    
    for (const funcName of this.functions) {
      const func = SIMILARITY_FUNCTIONS[funcName];
      if (!func) continue;
      
      results[funcName] = {};
      
      for (const noiseLevel of this.config.noiseLevels.slice(0, 2)) { // Limit for demo
        const similarities = [];
        const cleanSimilarities = [];
        
        for (const vector of baseVectors) {
          try {
            const clean = func.fn(vector, vector);
            cleanSimilarities.push(clean);
            
            const noisy = addGaussianNoise(vector, noiseLevel, createXorShift32(123));
            const noisySim = func.fn(vector, noisy);
            similarities.push(noisySim);
          } catch (e) {
            similarities.push(0);
            cleanSimilarities.push(0);
          }
        }
        
        const avgClean = cleanSimilarities.reduce((a, b) => a + b) / cleanSimilarities.length;
        const avgNoisy = similarities.reduce((a, b) => a + b) / similarities.length;
        const degradation = avgClean - avgNoisy;
        
        results[funcName][noiseLevel] = {
          avgClean,
          avgNoisy,
          degradation,
          degradationPct: (degradation / avgClean) * 100
        };
        
        console.log(`  ${funcName} (noise=${noiseLevel}): ` +
          `${avgClean.toFixed(4)} → ${avgNoisy.toFixed(4)} ` +
          `(degradation: ${(degradation / avgClean * 100).toFixed(1)}%)`);
      }
    }
    
    return results;
  }

  generateBaseVectors(dim) {
    const rng = createXorShift32(54321);
    const vectors = [];
    
    for (let i = 0; i < 10; i++) { // Smaller for demo
      vectors.push(generateRandomVector(dim, { min: -5, max: 5 }, rng));
    }
    
    return vectors;
  }
}

class EdgeCaseComparison {
  constructor(functions, config) {
    this.functions = functions;
    this.config = config;
  }

  async runTest() {
    console.log('\n=== EDGE CASE COMPARISON ===\n');
    
    const results = {};
    const testCases = [
      {
        name: 'Zero Vectors',
        vectors: [[0, 0, 0, 0], [0, 0, 0, 0]]
      },
      {
        name: 'One Zero Vector',
        vectors: [[1, 2, 3, 4], [0, 0, 0, 0]]
      },
      {
        name: 'Identical Vectors',
        vectors: [[1, 2, 3, 4], [1, 2, 3, 4]]
      },
      {
        name: 'Opposite Vectors',
        vectors: [[1, 2, 3, 4], [-1, -2, -3, -4]]
      }
    ];
    
    for (const funcName of this.functions) {
      const func = SIMILARITY_FUNCTIONS[funcName];
      if (!func) continue;
      
      results[funcName] = {};
      
      for (const testCase of testCases) {
        try {
          const score = func.fn(testCase.vectors[0], testCase.vectors[1]);
          results[funcName][testCase.name] = score;
          console.log(`  ${funcName} - ${testCase.name}: ${score.toFixed(4)}`);
        } catch (e) {
          results[funcName][testCase.name] = `Error: ${e.message}`;
          console.log(`  ${funcName} - ${testCase.name}: ERROR (${e.message})`);
        }
      }
    }
    
    return results;
  }
}

/**
 * Main Comparison Runner
 */
class SimilarityComparison {
  constructor(functionNames, testTypes = ['all']) {
    this.functionNames = functionNames;
    this.testTypes = testTypes;
    this.functions = this.filterFunctions(functionNames);
  }

  filterFunctions(names) {
    if (names.includes('all')) {
      return Object.keys(SIMILARITY_FUNCTIONS);
    }
    return names.filter(name => SIMILARITY_FUNCTIONS[name]);
  }

  async runAllTests() {
    console.log(`\nComparing ${this.functions.length} similarity functions:`);
    this.functions.forEach(name => {
      console.log(`  - ${name} (${SIMILARITY_FUNCTIONS[name].description})`);
    });
    
    const results = {};
    
    if (this.testTypes.includes('all') || this.testTypes.includes('performance')) {
      const perfTest = new PerformanceComparison(this.functions, CONFIG);
      results.performance = await perfTest.runTest();
    }
    
    if (this.testTypes.includes('all') || this.testTypes.includes('behavioral')) {
      const behaviorTest = new BehavioralComparison(this.functions, CONFIG);
      results.behavioral = await behaviorTest.runTest();
    }
    
    if (this.testTypes.includes('all') || this.testTypes.includes('robustness')) {
      const robustTest = new RobustnessComparison(this.functions, CONFIG);
      results.robustness = await robustTest.runTest();
    }
    
    if (this.testTypes.includes('all') || this.testTypes.includes('edgecases')) {
      const edgeTest = new EdgeCaseComparison(this.functions, CONFIG);
      results.edgeCases = await edgeTest.runTest();
    }
    
    return results;
  }

  printSummary(results) {
    console.log('\n=== COMPARISON SUMMARY ===\n');
    
    if (results.performance) {
      console.log('Performance Winners (fastest average time):');
      const avgTimes = {};
      for (const funcName of this.functions) {
        if (results.performance[funcName]) {
          const times = Object.values(results.performance[funcName]);
          avgTimes[funcName] = times.reduce((a, b) => a + b.avgTime, 0) / times.length;
        }
      }
      
      const sorted = Object.entries(avgTimes).sort((a, b) => a[1] - b[1]);
      sorted.slice(0, 5).forEach(([func, time], i) => {
        console.log(`  ${i + 1}. ${func}: ${time.toFixed(2)}ms`);
      });
    }
    
    if (results.robustness) {
      console.log('\nMost Robust (lowest degradation):');
      const avgDegradation = {};
      for (const funcName of this.functions) {
        if (results.robustness[funcName]) {
          const degradations = Object.values(results.robustness[funcName]);
          avgDegradation[funcName] = degradations.reduce((a, b) => a + Math.abs(b.degradationPct), 0) / degradations.length;
        }
      }
      
      const sorted = Object.entries(avgDegradation).sort((a, b) => a[1] - b[1]);
      sorted.slice(0, 5).forEach(([func, deg], i) => {
        console.log(`  ${i + 1}. ${func}: ${deg.toFixed(1)}% degradation`);
      });
    }
  }
}

/**
 * CLI Interface
 */
function parseArgs() {
  const args = process.argv.slice(2);
  if (args.length < 1) {
    printUsage();
    process.exit(1);
  }
  
  const functionNames = args[0].split(',');
  const options = {};
  
  for (let i = 1; i < args.length; i++) {
    const arg = args[i];
    if (arg.startsWith('--')) {
      const [key, value] = arg.substring(2).split('=');
      options[key] = value || true;
    }
  }
  
  return { functionNames, options };
}

function printUsage() {
  console.log(`
Similarity Function Head-to-Head Comparison

Usage:
  node similarity_compare.js function1,function2[,...] [options]

Arguments:
  function1,function2,...    Comma-separated list, or 'all'
  
Options:
  --test=TYPE              Test: performance, behavioral, robustness, edgecases, all
  --dim=NUMBER            Test dimensions (comma-separated)
  --pairs=NUMBER          Number of vector pairs
  --runs=NUMBER           Performance test runs
  --noise=LEVELS          Noise levels for robustness test

Available Functions:
${Object.keys(SIMILARITY_FUNCTIONS).map(name => 
  `  ${name.padEnd(30)} ${SIMILARITY_FUNCTIONS[name].description}`
).join('\n')}

Examples:
  node similarity_compare.js all
  node similarity_compare.js cosineSimilarity,weightedMinkowskiSimilarity
  node similarity_compare.js weightedMinkowskiSimilarity,canberraSimilarity --test=robustness
  node similarity_compare.js all --test=performance --dim=128,256
  `);
}

// Run if executed directly
if (import.meta.url === `file://${process.argv[1]}`) {
  const { functionNames, options } = parseArgs();
  
  if (options.dim) {
    CONFIG.dimensions = options.dim.split(',').map(Number);
  }
  if (options.pairs) {
    CONFIG.pairCount = Number(options.pairs);
  }
  if (options.runs) {
    CONFIG.performanceRuns = Number(options.runs);
  }
  if (options.noise) {
    CONFIG.noiseLevels = options.noise.split(',').map(Number);
  }
  
  const testTypes = options.test ? options.test.split(',') : ['all'];
  const comparator = new SimilarityComparison(functionNames, testTypes);
  
  comparator.runAllTests()
    .then(results => {
      comparator.printSummary(results);
      
      const fs = require('fs');
      const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
      const filename = `similarity_comparison_${timestamp}.json`;
      fs.writeFileSync(filename, JSON.stringify({
        timestamp,
        functions: comparator.functions,
        config: CONFIG,
        results
      }, null, 2));
      
      console.log(`\nResults saved to: ${filename}`);
    })
    .catch(error => {
      console.error('Comparison failed:', error);
      process.exit(1);
    });
}

export { SimilarityComparison, SIMILARITY_FUNCTIONS, CONFIG };