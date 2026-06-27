import { describe, it, expect } from 'vitest';
import {
  weightedMinkowskiSimilarity,
  canberraSimilarity,
  brayCurtisSimilarity,
  harmonicMeanSimilarity,
  kendallCorrelationSimilarity,
  geometricMeanSimilarity,
  ratioBasedSimilarity,
} from '../../src/vector-similarity/similarity/heuristics';

describe('weightedMinkowskiSimilarity', () => {
  it('returns 1 for identical vectors', () => {
    expect(weightedMinkowskiSimilarity([1, 2, 3], [1, 2, 3])).toBe(1);
  });

  it('computes the Euclidean (p=2) case correctly', () => {
    // distance = sqrt(3^2 + 4^2) = 5 -> sim = 1/6
    expect(weightedMinkowskiSimilarity([0, 0], [3, 4], { p: 2 })).toBeCloseTo(1 / 6, 10);
  });

  it('computes the Manhattan (p=1) case correctly', () => {
    // distance = 3 + 4 = 7 -> sim = 1/8
    expect(weightedMinkowskiSimilarity([0, 0], [3, 4], { p: 1 })).toBeCloseTo(1 / 8, 10);
  });

  it('applies weights', () => {
    // weights [2,1], p=2: sum = 2*9 + 1*16 = 34 -> dist = sqrt(34) -> sim = 1/(1+sqrt(34))
    expect(weightedMinkowskiSimilarity([0, 0], [3, 4], { p: 2, weights: [2, 1] })).toBeCloseTo(
      1 / (1 + Math.sqrt(34)),
      10
    );
  });

  it('throws TypeError on non-array input', () => {
    expect(() => weightedMinkowskiSimilarity(null as unknown as number[], [1])).toThrow(TypeError);
    expect(() => weightedMinkowskiSimilarity([1], 'x' as unknown as number[])).toThrow(TypeError);
  });

  it('throws RangeError on mismatched length', () => {
    expect(() => weightedMinkowskiSimilarity([1, 2], [1])).toThrow(RangeError);
  });

  it('throws RangeError on empty input', () => {
    expect(() => weightedMinkowskiSimilarity([], [])).toThrow(RangeError);
  });

  it('throws TypeError on non-finite elements', () => {
    expect(() => weightedMinkowskiSimilarity([1, NaN], [1, 2])).toThrow(TypeError);
    expect(() => weightedMinkowskiSimilarity([1, 2], [1, Infinity])).toThrow(TypeError);
  });

  it('throws RangeError for invalid p', () => {
    expect(() => weightedMinkowskiSimilarity([1], [2], { p: 0 })).toThrow(RangeError);
    expect(() => weightedMinkowskiSimilarity([1], [2], { p: -1 })).toThrow(RangeError);
    expect(() => weightedMinkowskiSimilarity([1], [2], { p: NaN })).toThrow(RangeError);
  });

  it('throws RangeError when weights length differs', () => {
    expect(() => weightedMinkowskiSimilarity([1, 2], [3, 4], { weights: [1] })).toThrow(RangeError);
  });

  it('throws TypeError when weights contain a non-finite element', () => {
    expect(() => weightedMinkowskiSimilarity([1, 2], [3, 4], { weights: [1, NaN] })).toThrow(TypeError);
  });

  it('throws RangeError when weights contain a negative element', () => {
    expect(() => weightedMinkowskiSimilarity([1, 2], [3, 4], { weights: [1, -1] })).toThrow(RangeError);
  });
});

describe('canberraSimilarity', () => {
  it('returns 1 for identical vectors', () => {
    expect(canberraSimilarity([1, 2, 3], [1, 2, 3])).toBe(1);
  });

  it('returns 1 when all elements are zero (validTerms === 0)', () => {
    expect(canberraSimilarity([0, 0], [0, 0])).toBe(1);
  });

  it('computes a normalized similarity for different vectors', () => {
    // terms: 3/5, 3/7, 3/9 -> mean -> 1/(1+mean)
    const terms = [3 / 5, 3 / 7, 3 / 9];
    const expected = 1 / (1 + terms.reduce((a, b) => a + b, 0) / 3);
    expect(canberraSimilarity([1, 2, 3], [4, 5, 6])).toBeCloseTo(expected, 10);
  });

  it('throws TypeError on non-array input', () => {
    expect(() => canberraSimilarity(null as unknown as number[], [1])).toThrow(TypeError);
  });

  it('throws RangeError on mismatched length or empty', () => {
    expect(() => canberraSimilarity([1, 2], [1])).toThrow(RangeError);
    expect(() => canberraSimilarity([], [])).toThrow(RangeError);
  });

  it('throws TypeError on non-finite elements', () => {
    expect(() => canberraSimilarity([1, Infinity], [1, 2])).toThrow(TypeError);
  });
});

describe('brayCurtisSimilarity', () => {
  it('returns 1 for identical vectors', () => {
    expect(brayCurtisSimilarity([1, 2, 3], [1, 2, 3])).toBe(1);
  });

  it('returns 1 when both vectors are zero (sumTotal === 0)', () => {
    expect(brayCurtisSimilarity([0, 0], [0, 0])).toBe(1);
  });

  it('computes 1 - sumDiff/sumTotal', () => {
    // sumDiff = 2 + 2 = 4, sumTotal = 4 + 6 = 10 -> 0.6
    expect(brayCurtisSimilarity([1, 2], [3, 4])).toBeCloseTo(0.6, 10);
  });

  it('throws TypeError on non-array input', () => {
    expect(() => brayCurtisSimilarity('x' as unknown as number[], [1])).toThrow(TypeError);
  });

  it('throws RangeError on mismatched length or empty', () => {
    expect(() => brayCurtisSimilarity([1], [1, 2])).toThrow(RangeError);
    expect(() => brayCurtisSimilarity([], [])).toThrow(RangeError);
  });

  it('throws TypeError on non-finite elements', () => {
    expect(() => brayCurtisSimilarity([1, NaN], [1, 2])).toThrow(TypeError);
  });
});

describe('harmonicMeanSimilarity', () => {
  it('returns 1 for identical vectors', () => {
    expect(harmonicMeanSimilarity([1, 2, 3], [1, 2, 3])).toBe(1);
  });

  it('returns 0 when every coordinate similarity is non-positive', () => {
    // epsilon: 0 with opposite equal-magnitude pairs -> coordinateSim === 0 for all -> validCount 0
    expect(harmonicMeanSimilarity([1, -1], [-1, 1], { epsilon: 0 })).toBe(0);
  });

  it('computes the harmonic mean of coordinate similarities', () => {
    // i0: 1 - 2/(1+3) = 0.5 ; i1: 1 - 2/(2+4) = 0.6667 -> HM = 2/(1/0.5 + 1/0.6667)
    const s0 = 1 - 2 / 4;
    const s1 = 1 - 2 / 6;
    const expected = 2 / (1 / s0 + 1 / s1);
    expect(harmonicMeanSimilarity([1, 2], [3, 4])).toBeCloseTo(expected, 10);
  });

  it('throws TypeError on non-array input', () => {
    expect(() => harmonicMeanSimilarity(null as unknown as number[], [1])).toThrow(TypeError);
  });

  it('throws RangeError on mismatched length or empty', () => {
    expect(() => harmonicMeanSimilarity([1, 2], [1])).toThrow(RangeError);
    expect(() => harmonicMeanSimilarity([], [])).toThrow(RangeError);
  });

  it('throws TypeError on non-finite elements', () => {
    expect(() => harmonicMeanSimilarity([1, NaN], [1, 2])).toThrow(TypeError);
  });
});

describe('kendallCorrelationSimilarity', () => {
  it('returns 1 for concordant (identical-trend) vectors', () => {
    expect(kendallCorrelationSimilarity([1, 2, 3], [1, 2, 3])).toBe(1);
  });

  it('returns 0 for fully discordant (opposite-trend) vectors', () => {
    expect(kendallCorrelationSimilarity([1, 2, 3], [3, 2, 1])).toBe(0);
  });

  it('returns the mapped tau for a mixed case', () => {
    // tau = (2 concordant - 1 discordant) / 3 = 1/3 -> sim = (1 + 1/3) / 2
    expect(kendallCorrelationSimilarity([1, 2, 3], [1, 3, 2])).toBeCloseTo((1 + 1 / 3) / 2, 10);
  });

  it('returns 1 for single-element vectors', () => {
    expect(kendallCorrelationSimilarity([5], [5])).toBe(1);
  });

  it('returns 1 when all pairs are tied', () => {
    expect(kendallCorrelationSimilarity([1, 1, 1], [2, 2, 2])).toBe(1);
  });

  it('throws TypeError on non-array input', () => {
    expect(() => kendallCorrelationSimilarity(null as unknown as number[], [1])).toThrow(TypeError);
  });

  it('throws RangeError on mismatched length', () => {
    expect(() => kendallCorrelationSimilarity([1, 2], [1])).toThrow(RangeError);
  });

  it('throws TypeError on non-finite elements', () => {
    expect(() => kendallCorrelationSimilarity([1, NaN], [1, 2])).toThrow(TypeError);
  });
});

describe('geometricMeanSimilarity', () => {
  it('returns 1 for identical vectors', () => {
    expect(geometricMeanSimilarity([1, 2, 3], [1, 2, 3])).toBe(1);
  });

  it('computes the geometric mean of magnitude ratios', () => {
    // ratios 0.5, 0.5 -> (0.25)^(1/2) = 0.5
    expect(geometricMeanSimilarity([2, 4], [4, 8])).toBeCloseTo(0.5, 10);
  });

  it('returns 1 for opposite-sign equal-magnitude vectors', () => {
    expect(geometricMeanSimilarity([1, 2], [-1, -2])).toBe(1);
  });

  it('throws TypeError on non-array input', () => {
    expect(() => geometricMeanSimilarity('x' as unknown as number[], [1])).toThrow(TypeError);
  });

  it('throws RangeError on mismatched length or empty', () => {
    expect(() => geometricMeanSimilarity([1, 2], [1])).toThrow(RangeError);
    expect(() => geometricMeanSimilarity([], [])).toThrow(RangeError);
  });

  it('throws TypeError on non-finite elements', () => {
    expect(() => geometricMeanSimilarity([1, Infinity], [1, 2])).toThrow(TypeError);
  });
});

describe('ratioBasedSimilarity', () => {
  it('returns 1 for identical vectors', () => {
    expect(ratioBasedSimilarity([1, 2, 3], [1, 2, 3])).toBe(1);
  });

  it('returns 1 when all denominators are zero', () => {
    expect(ratioBasedSimilarity([0, 0], [0, 0])).toBe(1);
  });

  it('computes 1 - mean(ratios)', () => {
    // ratios: 2/4, 2/6 -> mean = 0.41667 -> 0.58333
    expect(ratioBasedSimilarity([1, 2], [3, 4])).toBeCloseTo(1 - (2 / 4 + 2 / 6) / 2, 10);
  });

  it('throws TypeError on non-array input', () => {
    expect(() => ratioBasedSimilarity(null as unknown as number[], [1])).toThrow(TypeError);
  });

  it('throws RangeError on mismatched length or empty', () => {
    expect(() => ratioBasedSimilarity([1, 2], [1])).toThrow(RangeError);
    expect(() => ratioBasedSimilarity([], [])).toThrow(RangeError);
  });

  it('throws TypeError on non-finite elements', () => {
    expect(() => ratioBasedSimilarity([1, NaN], [1, 2])).toThrow(TypeError);
  });
});
