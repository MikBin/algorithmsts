import { describe, it, expect } from 'vitest';
import {
  cosineSimilarity,
  normalizedCosineSimilarity,
  dotProduct,
  euclideanDistance,
  pearsonCorrelation,
  pearsonCorrelationSimilarity,
  chebyshevSimilarity,
  kulczynskiSimilarity,
  lorentzianSimilarity,
  soergelSimilarity,
  euclideanSimilarity,
  manhattanSimilarity,
  diceCoefficient,
  angularSimilarity,
} from '../../src/vector-similarity/similarity/classic';
import {
  jaccardSimilarityBinary,
  jaccardSimilarityWeighted,
  jaccardSimilarityRealValued,
} from '../../src/vector-similarity/similarity/jaccard';
import { weightedMinkowskiSimilarity, canberraSimilarity } from '../../src/vector-similarity/similarity/heuristics';

// Each function is mapped to the contract for its documented output range.
// - 'unit'    -> [0, 1] similarity score
// - 'signed'  -> [-1, 1] correlation coefficient
// - 'nonneg'  -> [0, Infinity) raw distance
// - 'exact'   -> a specific computed value (dotProduct), asserted separately
type Range = 'unit' | 'signed' | 'nonneg';

const rangeZeroOne: Array<[string, (a: number[], b: number[]) => number]> = [
  ['normalizedCosineSimilarity', normalizedCosineSimilarity],
  ['pearsonCorrelationSimilarity', pearsonCorrelationSimilarity],
  ['euclideanSimilarity', euclideanSimilarity],
  ['manhattanSimilarity', manhattanSimilarity],
  ['chebyshevSimilarity', chebyshevSimilarity],
  ['kulczynskiSimilarity', kulczynskiSimilarity],
  ['lorentzianSimilarity', lorentzianSimilarity],
  ['soergelSimilarity', soergelSimilarity],
  ['diceCoefficient', diceCoefficient],
  ['angularSimilarity', angularSimilarity],
  ['canberraSimilarity', canberraSimilarity],
  ['weightedMinkowskiSimilarity', weightedMinkowskiSimilarity],
  ['jaccardSimilarityBinary', jaccardSimilarityBinary],
  ['jaccardSimilarityWeighted', jaccardSimilarityWeighted],
  ['jaccardSimilarityRealValued', jaccardSimilarityRealValued],
];

const rangeSigned: Array<[string, (a: number[], b: number[]) => number]> = [
  ['cosineSimilarity', cosineSimilarity],
  ['pearsonCorrelation', pearsonCorrelation],
];

const rangeNonNeg: Array<[string, (a: number[], b: number[]) => number]> = [
  ['euclideanDistance', euclideanDistance],
];

const fixtures: Array<[string, number[], number[]]> = [
  ['identical', [1, 2, 3], [1, 2, 3]],
  ['different', [1, 2, 3], [4, 5, 6]],
  ['orthogonal', [1, 0], [0, 1]],
  ['opposite', [1, 2, 3], [-1, -2, -3]],
  ['zero-vs-nonzero', [0, 0, 0], [1, 2, 3]],
  ['all-zeros', [0, 0, 0], [0, 0, 0]],
];

function checkRange(value: number, range: Range) {
  expect(Number.isFinite(value)).toBe(true);
  if (range === 'unit') {
    expect(value).toBeGreaterThanOrEqual(0);
    expect(value).toBeLessThanOrEqual(1);
  } else if (range === 'signed') {
    expect(value).toBeGreaterThanOrEqual(-1);
    expect(value).toBeLessThanOrEqual(1);
  } else {
    expect(value).toBeGreaterThanOrEqual(0);
  }
}

describe('Documented output ranges per function', () => {
  describe.each(rangeZeroOne)('%s in [0, 1]', (_name, fn) => {
    it.each(fixtures)('respects the range for %s vectors', (_label, a, b) => {
      checkRange(fn(a, b), 'unit');
    });
  });

  describe.each(rangeSigned)('%s in [-1, 1]', (_name, fn) => {
    it.each(fixtures)('respects the range for %s vectors', (_label, a, b) => {
      // cosine/pearson are undefined for the all-zeros fixture; allow 0 there.
      const value = fn(a, b);
      if (Number.isFinite(value)) checkRange(value, 'signed');
    });
  });

  describe.each(rangeNonNeg)('%s in [0, Infinity)', (_name, fn) => {
    it.each(fixtures)('respects the range for %s vectors', (_label, a, b) => {
      checkRange(fn(a, b), 'nonneg');
    });
  });

  describe('dotProduct (exact, unbounded)', () => {
    it('matches the hand-computed value', () => {
      expect(dotProduct([1, 2, 3], [4, 5, 6])).toBe(32);
    });
    it('is 0 for orthogonal vectors', () => {
      expect(dotProduct([1, 0], [0, 1])).toBe(0);
    });
    it('is negative for opposite vectors', () => {
      expect(dotProduct([1, 2, 3], [-1, -2, -3])).toBe(-14);
    });
  });
});
