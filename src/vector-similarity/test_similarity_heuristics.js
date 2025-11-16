/**
 * Test Suite for Similarity Heuristics
 * 
 * Validates that all similarity heuristics:
 * 1. Accept proper input vectors
 * 2. Return values in [0, 1] range
 * 3. Handle edge cases correctly
 * 4. Produce reasonable similarity scores
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

/**
 * Test helper function to validate similarity score
 */
function validateSimilarityScore(score, functionName, testCase) {
  if (typeof score !== 'number' || !Number.isFinite(score)) {
    throw new Error(`${functionName} failed test "${testCase}": returned non-finite number ${score}`);
  }
  if (score < 0 || score > 1) {
    throw new Error(`${functionName} failed test "${testCase}": score ${score} outside [0, 1] range`);
  }
  return true;
}

/**
 * Test helper to run multiple test cases for a function
 */
function testFunction(func, functionName, testCases) {
  console.log(`\n=== Testing ${functionName} ===`);
  
  for (const [testName, vectors, expectedBehavior] of testCases) {
    try {
      const result = func(vectors[0], vectors[1], expectedBehavior?.options);
      validateSimilarityScore(result, functionName, testName);
      console.log(`✓ ${testName}: ${result.toFixed(6)}`);
    } catch (error) {
      console.log(`✗ ${testName}: ${error.message}`);
    }
  }
}

// Test vectors
const testVectors = {
  identical: [[1, 2, 3, 4, 5], [1, 2, 3, 4, 5]],
  different: [[1, 2, 3, 4, 5], [5, 4, 3, 2, 1]],
  similar: [[1, 2, 3, 4, 5], [1.1, 2.1, 3.1, 4.1, 5.1]],
  zeroVectors: [[0, 0, 0], [0, 0, 0]],
  oneZero: [[0, 0, 0], [1, 2, 3]],
  negative: [[-1, -2, -3], [-1.1, -2.1, -3.1]],
  mixed: [[-1, 0, 1, 2], [-1.1, 0, 1.1, 2.1]],
  large: [[1000, 2000, 3000], [1001, 2001, 3001]],
  small: [[0.001, 0.002, 0.003], [0.0011, 0.0021, 0.0031]],
  single: [[42], [42]],
  singleDiff: [[42], [43]]
};

// Comprehensive test suite
console.log('Similarity Heuristics Test Suite');
console.log('================================');

// Test all functions
const allFunctions = [
  {
    name: 'weightedMinkowskiSimilarity',
    func: weightedMinkowskiSimilarity,
    testCases: [
      ['Identical vectors (p=2)', testVectors.identical, { options: { p: 2 } }],
      ['Similar vectors (p=1)', testVectors.similar, { options: { p: 1 } }],
      ['Different vectors (p=3)', testVectors.different, { options: { p: 3 } }],
      ['Zero vectors', testVectors.zeroVectors, { options: { p: 2 } }],
      ['One zero vector', testVectors.oneZero, { options: { p: 2 } }],
      ['With weights', testVectors.similar, { options: { p: 2, weights: [1, 2, 1, 2, 1] } }],
      ['Single element', testVectors.single, { options: { p: 2 } }],
      ['Large values', testVectors.large, { options: { p: 2 } }],
      ['Small values', testVectors.small, { options: { p: 2 } }]
    ]
  },
  {
    name: 'canberraSimilarity',
    func: canberraSimilarity,
    testCases: [
      ['Identical vectors', testVectors.identical],
      ['Similar vectors', testVectors.similar],
      ['Different vectors', testVectors.different],
      ['Zero vectors', testVectors.zeroVectors],
      ['One zero vector', testVectors.oneZero],
      ['Negative values', testVectors.negative],
      ['Mixed values', testVectors.mixed],
      ['Single element', testVectors.single],
      ['Large values', testVectors.large]
    ]
  },
  {
    name: 'chebyshevSimilarity',
    func: chebyshevSimilarity,
    testCases: [
      ['Identical vectors', testVectors.identical],
      ['Similar vectors', testVectors.similar],
      ['Different vectors', testVectors.different],
      ['Zero vectors', testVectors.zeroVectors],
      ['One zero vector', testVectors.oneZero],
      ['Negative values', testVectors.negative],
      ['Mixed values', testVectors.mixed],
      ['Single element', testVectors.single],
      ['Large values', testVectors.large]
    ]
  },
  {
    name: 'brayCurtisSimilarity',
    func: brayCurtisSimilarity,
    testCases: [
      ['Identical vectors', testVectors.identical],
      ['Similar vectors', testVectors.similar],
      ['Different vectors', testVectors.different],
      ['Zero vectors', testVectors.zeroVectors],
      ['One zero vector', testVectors.oneZero],
      ['Non-negative mixed', [[0, 1, 2], [0.1, 1.1, 2.1]]],
      ['Single element', testVectors.single],
      ['Large values', testVectors.large],
      ['Small values', testVectors.small]
    ]
  },
  {
    name: 'harmonicMeanSimilarity',
    func: harmonicMeanSimilarity,
    testCases: [
      ['Identical vectors', testVectors.identical],
      ['Similar vectors', testVectors.similar],
      ['Different vectors', testVectors.different],
      ['Zero vectors', testVectors.zeroVectors],
      ['One zero vector', testVectors.oneZero],
      ['Negative values', testVectors.negative],
      ['Mixed values', testVectors.mixed],
      ['Single element', testVectors.single],
      ['Custom epsilon', testVectors.similar, { options: { epsilon: 1e-5 } }]
    ]
  },
  {
    name: 'geometricMeanSimilarity',
    func: geometricMeanSimilarity,
    testCases: [
      ['Identical vectors', testVectors.identical],
      ['Similar vectors', testVectors.similar],
      ['Different vectors', testVectors.different],
      ['Zero vectors', testVectors.zeroVectors],
      ['One zero vector', testVectors.oneZero],
      ['Negative values', testVectors.negative],
      ['Mixed values', testVectors.mixed],
      ['Single element', testVectors.single],
      ['Custom epsilon', testVectors.similar, { options: { epsilon: 1e-5 } }]
    ]
  },
  {
    name: 'ratioBasedSimilarity',
    func: ratioBasedSimilarity,
    testCases: [
      ['Identical vectors', testVectors.identical],
      ['Similar vectors', testVectors.similar],
      ['Different vectors', testVectors.different],
      ['Zero vectors', testVectors.zeroVectors],
      ['One zero vector', testVectors.oneZero],
      ['Negative values', testVectors.negative],
      ['Mixed values', testVectors.mixed],
      ['Single element', testVectors.single],
      ['Large values', testVectors.large]
    ]
  }
];

// Run all tests
for (const { name, func, testCases } of allFunctions) {
  testFunction(func, name, testCases);
}

// Test error conditions
console.log('\n=== Testing Error Conditions ===');

const errorTestCases = [
  {
    name: 'Invalid input types',
    test: () => {
      try {
        weightedMinkowskiSimilarity("not array", [1, 2, 3]);
        return false;
      } catch {
        return true;
      }
    }
  },
  {
    name: 'Length mismatch',
    test: () => {
      try {
        canberraSimilarity([1, 2, 3], [1, 2]);
        return false;
      } catch {
        return true;
      }
    }
  },
  {
    name: 'Empty vectors',
    test: () => {
      try {
        chebyshevSimilarity([], []);
        return false;
      } catch {
        return true;
      }
    }
  },
  {
    name: 'Invalid p parameter',
    test: () => {
      try {
        weightedMinkowskiSimilarity([1, 2], [1, 2], { p: -1 });
        return false;
      } catch {
        return true;
      }
    }
  },
  {
    name: 'Invalid weights',
    test: () => {
      try {
        weightedMinkowskiSimilarity([1, 2], [1, 2], { weights: [1] });
        return false;
      } catch {
        return true;
      }
    }
  },
  {
    name: 'Bray-Curtis negative values',
    test: () => {
      try {
        brayCurtisSimilarity([-1, 2], [1, 2]);
        return false;
      } catch {
        return true;
      }
    }
  }
];

for (const { name, test } of errorTestCases) {
  try {
    const result = test();
    console.log(`${result ? '✓' : '✗'} ${name}`);
  } catch {
    console.log(`✗ ${name}: Unexpected error`);
  }
}

// Test edge cases for numerical stability
console.log('\n=== Testing Numerical Stability ===');

const stabilityTests = [
  {
    name: 'Very similar large vectors',
    vectors: [[1e10, 1e10], [1e10 + 1, 1e10 + 1]],
    func: weightedMinkowskiSimilarity,
    options: { p: 2 }
  },
  {
    name: 'Very small differences',
    vectors: [[1e-10, 1e-10], [1e-10 + 1e-15, 1e-10 + 1e-15]],
    func: canberraSimilarity
  },
  {
    name: 'Mixed magnitude',
    vectors: [[1e-10, 1e10], [1e-10 + 1e-15, 1e10 + 1]],
    func: geometricMeanSimilarity
  }
];

for (const { name, vectors, func, options } of stabilityTests) {
  try {
    const result = func(vectors[0], vectors[1], options);
    validateSimilarityScore(result, func.name || 'function', name);
    console.log(`✓ ${name}: ${result.toFixed(6)}`);
  } catch (error) {
    console.log(`✗ ${name}: ${error.message}`);
  }
}

console.log('\n=== Test Suite Complete ===');