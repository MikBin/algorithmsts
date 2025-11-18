// A simple test script for similarity heuristics
const assert = require('assert');
const {
  weightedMinkowskiSimilarity,
  canberraSimilarity,
  chebyshevSimilarity,
  brayCurtisSimilarity,
  harmonicMeanSimilarity,
  geometricMeanSimilarity,
  ratioBasedSimilarity,
} = require('./similarity/heuristics');

function runTest(name: string, testFunc: () => void) {
  try {
    testFunc();
    console.log(`✅ ${name}`);
  } catch (error) {
    console.error(`❌ ${name}`);
    console.error(error);
    process.exit(1);
  }
}

runTest('weightedMinkowskiSimilarity', () => {
  const a = [1, 2, 3];
  const b = [1, 2, 3];
  assert.strictEqual(weightedMinkowskiSimilarity(a, b), 1);
});

runTest('canberraSimilarity', () => {
  const a = [1, 2, 3];
  const b = [1, 2, 3];
  assert.strictEqual(canberraSimilarity(a, b), 1);
});

runTest('chebyshevSimilarity', () => {
  const a = [1, 2, 3];
  const b = [1, 2, 3];
  assert.strictEqual(chebyshevSimilarity(a, b), 1);
});

runTest('brayCurtisSimilarity', () => {
  const a = [1, 2, 3];
  const b = [1, 2, 3];
  assert.strictEqual(brayCurtisSimilarity(a, b), 1);
});

runTest('harmonicMeanSimilarity', () => {
  const a = [1, 2, 3];
  const b = [1, 2, 3];
  assert.strictEqual(harmonicMeanSimilarity(a, b), 1);
});

runTest('geometricMeanSimilarity', () => {
  const a = [1, 2, 3];
  const b = [1, 2, 3];
  assert.strictEqual(geometricMeanSimilarity(a, b), 1);
});

runTest('ratioBasedSimilarity', () => {
  const a = [1, 2, 3];
  const b = [1, 2, 3];
  assert.strictEqual(ratioBasedSimilarity(a, b), 1);
});

console.log('All tests passed!');
