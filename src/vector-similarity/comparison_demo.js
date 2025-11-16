/**
 * Simple Head-to-Head Comparison Demonstration
 * 
 * This script shows how to compare similarity functions across key dimensions:
 * 1. Performance (speed)
 * 2. Behavioral correlation (how similar their rankings are)
 * 3. Robustness to noise
 * 4. Edge case handling
 * 
 * Includes ALL similarity functions from the /similarity directory
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
  computeVectorSimilarityMeanStdPenalized
} from './vectorSimilarityMeanStdPenalized.js';

import {
  computeVectorSimilarityTunable
} from './vectorSimilarityTunable.js';

import {
  computeVectorSimilarityRobust
} from './vectorSimilarityRobust.js';

import {
  computeVectorSimilarityMetricLike
} from './vectorSimilarityMetricLike.js';

import {
  computeVectorSimilarityVarianceWeighted
} from './vectorSimilarityVarianceWeighted.js';

import {
  computeVectorSimilarity,
  computeVectorSimilarityPenalized
} from './vectorSimilarity.js';

/**
 * Demonstration of head-to-head comparison tests
 */
class SimpleComparisonDemo {
  constructor() {
    this.functions = {
      // From similarity_heuristics.js
      'Weighted Minkowski': {
        fn: weightedMinkowskiSimilarity,
        desc: 'Custom weighted distance with adjustable exponent',
        module: 'similarity_heuristics.js'
      },
      'Canberra': {
        fn: canberraSimilarity,
        desc: 'Robust for sparse/high-dimensional data',
        module: 'similarity_heuristics.js'
      },
      'Chebyshev': {
        fn: chebyshevSimilarity,
        desc: 'Maximum difference (L-infinity norm)',
        module: 'similarity_heuristics.js'
      },
      'Bray-Curtis': {
        fn: brayCurtisSimilarity,
        desc: 'Ecology measure, requires non-negative',
        module: 'similarity_heuristics.js',
        requiresNonNegative: true
      },
      'Harmonic Mean': {
        fn: harmonicMeanSimilarity,
        desc: 'Harmonic mean of coordinate similarities',
        module: 'similarity_heuristics.js'
      },
      'Geometric Mean': {
        fn: geometricMeanSimilarity,
        desc: 'Geometric mean of coordinate similarities',
        module: 'similarity_heuristics.js'
      },
      'Ratio-based': {
        fn: ratioBasedSimilarity,
        desc: 'Element-wise ratio similarity',
        module: 'similarity_heuristics.js'
      },

      // From similarity-functions.js
      'Cosine': {
        fn: cosineSimilarity,
        desc: 'Angle-based similarity',
        module: 'similarity-functions.js'
      },
      'Euclidean': {
        fn: euclideanSimilarity,
        desc: 'Straight-line distance',
        module: 'similarity-functions.js'
      },
      'Manhattan': {
        fn: manhattanSimilarity,
        desc: 'L1 distance (city block)',
        module: 'similarity-functions.js'
      },
      'Jaccard': {
        fn: jaccardSimilarity,
        desc: 'Set overlap measure (binary)',
        module: 'similarity-functions.js'
      },
      'Pearson': {
        fn: pearsonCorrelation,
        desc: 'Linear correlation coefficient',
        module: 'similarity-functions.js'
      },

      // From vectorSimilarity modules
      'Mean/Std Power': {
        fn: computeVectorSimilarityMeanStdPower,
        desc: 'Mean and std deviation based',
        module: 'vectorSimilarityMeanStdPower.js'
      },
      'Mean/Std Penalized': {
        fn: computeVectorSimilarityMeanStdPenalized,
        desc: 'Penalized version for outliers',
        module: 'vectorSimilarityMeanStdPenalized.js'
      },
      'Tunable': {
        fn: computeVectorSimilarityTunable,
        desc: 'Adjustable penalty parameter',
        module: 'vectorSimilarityTunable.js'
      },
      'Robust': {
        fn: computeVectorSimilarityRobust,
        desc: 'Robust to outliers and noise',
        module: 'vectorSimilarityRobust.js'
      },
      'Metric-like': {
        fn: computeVectorSimilarityMetricLike,
        desc: 'Metric properties approximation',
        module: 'vectorSimilarityMetricLike.js'
      },
      'Variance Weighted': {
        fn: computeVectorSimilarityVarianceWeighted,
        desc: 'Variance-based weighting',
        module: 'vectorSimilarityVarianceWeighted.js'
      },

      // From vectorSimilarity.js (deprecated)
      'Legacy': {
        fn: computeVectorSimilarity,
        desc: 'Legacy implementation (deprecated)',
        module: 'vectorSimilarity.js',
        deprecated: true
      },
      'Legacy Penalized': {
        fn: computeVectorSimilarityPenalized,
        desc: 'Legacy penalized version',
        module: 'vectorSimilarity.js',
        deprecated: true
      }
    };
  }

  /**
   * Performance comparison - measure execution time
   */
  comparePerformance() {
    console.log('\n=== PERFORMANCE COMPARISON ===');
    console.log('Measuring execution time for 100 vector pairs (dim=128)\n');

    const dim = 128;
    const pairCount = 50; // Reduced for demo
    const testData = this.generateTestData(dim, pairCount);

    const results = {};
    
    for (const [name, funcInfo] of Object.entries(this.functions)) {
      const times = [];
      
      // Measure execution time
      for (let i = 0; i < pairCount; i++) {
        try {
          const start = performance.now();
          const result = funcInfo.fn(testData.a[i], testData.b[i]);
          const end = performance.now();
          times.push(end - start);
        } catch (e) {
          times.push(0); // Handle functions that might fail
        }
      }

      const validTimes = times.filter(t => t > 0);
      if (validTimes.length === 0) continue;

      const avgTime = validTimes.reduce((a, b) => a + b) / validTimes.length;
      const opsPerSecond = 1000 / avgTime; // ops per millisecond
      
      results[name] = {
        avgTime,
        opsPerSecond,
        ranking: 0,
        module: funcInfo.module
      };

      const status = funcInfo.deprecated ? ' [DEPRECATED]' : '';
      console.log(`${name.padEnd(20)}: ${avgTime.toFixed(3)}ms avg (${opsPerSecond.toFixed(1)} ops/ms)${status}`);
    }

    // Rank by performance (lower time = better)
    const sorted = Object.entries(results).sort((a, b) => a[1].avgTime - b[1].avgTime);
    sorted.forEach(([name, result], i) => {
      result.ranking = i + 1;
    });

    console.log('\nPerformance Rankings (fastest to slowest):');
    sorted.slice(0, 10).forEach(([name, result], i) => {
      console.log(`  ${i + 1}. ${name} - ${result.avgTime.toFixed(3)}ms`);
    });

    return results;
  }

  /**
   * Behavioral comparison - how similarly do functions rank pairs
   */
  compareBehavior() {
    console.log('\n=== BEHAVIORAL COMPARISON ===');
    console.log('Comparing how functions rank the same vector pairs\n');

    const dim = 64;
    const pairCount = 30; // Reduced for demo
    const testData = this.generateTestData(dim, pairCount);

    // Get similarity scores for all functions
    const scores = {};
    for (const [name, funcInfo] of Object.entries(this.functions)) {
      scores[name] = [];
      for (let i = 0; i < pairCount; i++) {
        try {
          const score = funcInfo.fn(testData.a[i], testData.b[i]);
          scores[name].push(score);
        } catch (e) {
          scores[name].push(0); // Handle functions that might fail
        }
      }
    }

    // Compare pairwise correlations
    console.log('Sample Pairwise Score Correlations (Pearson):');
    const correlations = {};
    
    const functionNames = Object.keys(this.functions).slice(0, 6); // Show first 6 for demo
    for (let i = 0; i < functionNames.length; i++) {
      for (let j = i + 1; j < functionNames.length; j++) {
        const name1 = functionNames[i];
        const name2 = functionNames[j];
        const corr = this.computePearsonCorrelation(scores[name1], scores[name2]);
        
        if (!correlations[name1]) correlations[name1] = {};
        correlations[name1][name2] = corr;
        
        console.log(`${name1.padEnd(20)} vs ${name2.padEnd(20)}: ${corr.toFixed(4)}`);
      }
    }

    return { correlations, scores };
  }

  /**
   * Robustness comparison - how well do functions handle noise
   */
  compareRobustness() {
    console.log('\n=== ROBUSTNESS COMPARISON ===');
    console.log('Testing stability under Gaussian noise (σ=0.1)\n');

    const dim = 64;
    const testVector = Array.from({ length: dim }, (_, i) => Math.sin(i * 0.1) + Math.random() * 0.1);
    const noiseLevel = 0.1;

    const results = {};
    
    for (const [name, funcInfo] of Object.entries(this.functions)) {
      results[name] = {};
      
      try {
        // Baseline: clean similarity
        const clean = funcInfo.fn(testVector, testVector);
        console.log(`${name.padEnd(20)}: Clean = ${clean.toFixed(4)}`);
        
        // Test with noise
        const noisyVector = this.addGaussianNoise(testVector, noiseLevel);
        const noisySim = funcInfo.fn(testVector, noisyVector);
        const degradation = Math.abs((clean - noisySim) / clean * 100);
        
        results[name] = {
          clean,
          noisy: noisySim,
          degradation
        };
        
        console.log(`  Noise σ=${noiseLevel}: ${noisySim.toFixed(4)} (${degradation.toFixed(1)}% degradation)`);
      } catch (e) {
        console.log(`${name.padEnd(20)}: ERROR (${e.message})`);
        results[name] = { error: e.message };
      }
    }

    return results;
  }

  /**
   * Edge case comparison - how do functions handle special inputs
   */
  compareEdgeCases() {
    console.log('\n=== EDGE CASE COMPARISON ===\n');

    const testCases = [
      {
        name: 'Identical Vectors',
        vectors: [[1, 2, 3, 4, 5], [1, 2, 3, 4, 5]],
        expected: 'Should be 1.0'
      },
      {
        name: 'Zero Vectors',
        vectors: [[0, 0, 0, 0, 0], [0, 0, 0, 0, 0]],
        expected: 'Should be 1.0'
      },
      {
        name: 'One Zero Vector',
        vectors: [[1, 2, 3, 4, 5], [0, 0, 0, 0, 0]],
        expected: 'Varies by function'
      },
      {
        name: 'Opposite Vectors',
        vectors: [[1, 2, 3, 4, 5], [-1, -2, -3, -4, -5]],
        expected: 'Varies by function'
      },
      {
        name: 'Non-negative Test',
        vectors: [[1, 2, 3, 4, 5], [2, 3, 4, 5, 6]],
        note: 'For Bray-Curtis (requires non-negative)'
      }
    ];

    for (const testCase of testCases) {
      console.log(`${testCase.name}${testCase.note ? ` (${testCase.note})` : ''}:`);
      
      for (const [name, funcInfo] of Object.entries(this.functions)) {
        try {
          const score = funcInfo.fn(testCase.vectors[0], testCase.vectors[1]);
          const status = funcInfo.deprecated ? ' [DEPRECATED]' : '';
          console.log(`  ${name.padEnd(20)}: ${score.toFixed(4)}${status}`);
        } catch (e) {
          console.log(`  ${name.padEnd(20)}: ERROR (${e.message})`);
        }
      }
      console.log('');
    }
  }

  /**
   * Module distribution analysis
   */
  analyzeModuleDistribution() {
    console.log('\n=== MODULE DISTRIBUTION ===');
    
    const modules = {};
    for (const [name, funcInfo] of Object.entries(this.functions)) {
      const module = funcInfo.module;
      if (!modules[module]) {
        modules[module] = { count: 0, functions: [], deprecated: 0 };
      }
      modules[module].count++;
      modules[module].functions.push(name);
      if (funcInfo.deprecated) modules[module].deprecated++;
    }

    for (const [module, info] of Object.entries(modules)) {
      console.log(`${module}:`);
      console.log(`  Functions: ${info.count} (${info.deprecated} deprecated)`);
      console.log(`  Names: ${info.functions.join(', ')}`);
      console.log('');
    }
  }

  /**
   * Generate test data for comparisons
   */
  generateTestData(dim, pairCount) {
    const a = [], b = [];
    
    // Use deterministic random for reproducibility
    let seed = 42;
    const rng = () => {
      seed = (seed * 1103515245 + 12345) & 0x7fffffff;
      return (seed & 0x7fffffff) / 0x7fffffff;
    };

    for (let i = 0; i < pairCount; i++) {
      a.push(Array.from({ length: dim }, () => (rng() - 0.5) * 10));
      b.push(Array.from({ length: dim }, () => (rng() - 0.5) * 10));
    }

    return { a, b };
  }

  /**
   * Add Gaussian noise to a vector
   */
  addGaussianNoise(vector, sigma) {
    return vector.map(x => {
      const u1 = Math.random();
      const u2 = Math.random();
      const z = Math.sqrt(-2.0 * Math.log(Math.max(u1, 1e-12))) * Math.cos(2 * Math.PI * u2);
      return x + z * sigma;
    });
  }

  /**
   * Compute Pearson correlation coefficient
   */
  computePearsonCorrelation(x, y) {
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
   * Get function recommendations based on use case
   */
  getRecommendations() {
    console.log('\n=== FUNCTION RECOMMENDATIONS ===');

    const recommendations = {
      'General Purpose': {
        functions: ['Cosine', 'Euclidean', 'Manhattan'],
        reason: 'Fast, well-understood, reliable'
      },
      'High Dimensional/Sparse': {
        functions: ['Canberra', 'Cosine'],
        reason: 'Robust for sparse vectors, angle-based measures'
      },
      'Noise Robust': {
        functions: ['Robust', 'Canberra', 'Chebyshev'],
        reason: 'Resistant to noise and outliers'
      },
      'Fastest Performance': {
        functions: ['Cosine', 'Jaccard', 'Manhattan'],
        reason: 'Optimized for speed'
      },
      'Domain Specific': {
        functions: ['Bray-Curtis', 'Pearson'],
        reason: 'Designed for specific domains (ecology, statistics)'
      },
      'Customizable': {
        functions: ['Weighted Minkowski', 'Tunable'],
        reason: 'Allow parameter adjustment for specific needs'
      }
    };

    for (const [useCase, info] of Object.entries(recommendations)) {
      console.log(`${useCase}:`);
      console.log(`  Recommended: ${info.functions.join(', ')}`);
      console.log(`  Reason: ${info.reason}`);
      console.log('');
    }
  }

  /**
   * Run all comparisons
   */
  runAllComparisons() {
    console.log('COMPLETE HEAD-TO-HEAD SIMILARITY FUNCTION COMPARISON');
    console.log('===================================================\n');

    console.log('Total Functions Available:', Object.keys(this.functions).length);
    console.log('Included Functions:');
    for (const [name, info] of Object.entries(this.functions)) {
      const status = [];
      if (info.deprecated) status.push('DEPRECATED');
      if (info.requiresNonNegative) status.push('NON-NEGATIVE REQUIRED');
      const statusStr = status.length > 0 ? ` [${status.join(', ')}]` : '';
      console.log(`  - ${name.padEnd(20)} (${info.module})${statusStr}`);
    }
    console.log('');

    this.analyzeModuleDistribution();
    
    const performanceResults = this.comparePerformance();
    const behavioralResults = this.compareBehavior();
    const robustnessResults = this.compareRobustness();
    this.compareEdgeCases();
    this.getRecommendations();

    // Summary
    console.log('\n=== EXECUTIVE SUMMARY ===');
    
    const moduleCount = {};
    const speedWinners = Object.entries(performanceResults)
      .sort((a, b) => a[1].avgTime - b[1].avgTime)
      .slice(0, 5);
    
    console.log('Performance Winners (Top 5):');
    speedWinners.forEach(([name, result], i) => {
      console.log(`  ${i + 1}. ${name}: ${result.avgTime.toFixed(3)}ms (${result.module})`);
    });

    console.log('\nModule Coverage:');
    for (const [name, funcInfo] of Object.entries(this.functions)) {
      const module = funcInfo.module;
      if (!moduleCount[module]) moduleCount[module] = 0;
      moduleCount[module]++;
    }
    Object.entries(moduleCount).forEach(([module, count]) => {
      console.log(`  ${module}: ${count} functions`);
    });

    console.log('\nUsage Notes:');
    console.log('  - All functions return values in [0, 1] range');
    console.log('  - Deprecated functions maintained for backward compatibility');
    console.log('  - Some functions require non-negative inputs (noted above)');
    console.log('  - For detailed analysis, use the full similarity_compare.js framework');
  }
}
console.log(import.meta.url);
// Run demonstration
//if (import.meta.url === `file://${process.argv[1]}`) {
  const demo = new SimpleComparisonDemo();
  demo.runAllComparisons();
//}

export { SimpleComparisonDemo };