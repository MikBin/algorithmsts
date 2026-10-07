import { describe, it, expect } from 'vitest';
import {
  normalizedDimensionRelativeManhattanSimilarity,
} from '../../src/vector-similarity/similarity/normalizedDimensionRelativeManhattanSimilarity';

describe('normalizedDimensionRelativeManhattanSimilarity', () => {
  it('returns 1 for identical vectors', () => {
    const L = [1, 2, 3, 4, 5];
    const T = [1, 2, 3, 4, 5];
    expect(normalizedDimensionRelativeManhattanSimilarity(L, T)).toBe(1);
  });

  it('calculates score correctly with default relative epsilon (Option B)', () => {
    const L = [10, 20];
    const T = [10, 40];
    // maxAbsT = 40, defaultEps = 40 * 1e-5 = 4e-4
    // d=0: diff=|10-10|=0, denom=max(10, 4e-4)=10 -> 0/10 = 0
    // d=1: diff=|20-40|=20, denom=max(40, 4e-4)=40 -> 20/40 = 0.5
    // total diff = 0.5, avg = 0.25
    // rawScore = 1 - 0.25 = 0.75
    expect(normalizedDimensionRelativeManhattanSimilarity(L, T)).toBeCloseTo(0.75);
  });

  it('handles zero values in target vector T with default relative epsilon', () => {
    const L = [0, 0];
    const T = [0, 0];
    // maxAbsT = 0, defaultEps = max(1e-9, 0) = 1e-9
    // d=0: diff=0, denom=1e-9 -> 0
    // d=1: diff=0, denom=1e-9 -> 0
    // score = 1
    expect(normalizedDimensionRelativeManhattanSimilarity(L, T)).toBe(1);
  });

  it('works with custom scalar epsilon option', () => {
    const L = [0, 10];
    const T = [0, 10];
    const options = { epsilon: 1e-3 };
    expect(normalizedDimensionRelativeManhattanSimilarity(L, T, options)).toBe(1);
  });

  it('works with custom array epsilon option', () => {
    const L = [2, 5];
    const T = [1, 5];
    // eps = [0.5, 0.1]
    // d=0: diff=|2-1|=1, denom=max(|1|, 0.5)=1 -> relative diff = 1
    // d=1: diff=|5-5|=0, denom=max(|5|, 0.1)=5 -> relative diff = 0
    // mean diff = 0.5 -> score = 0.5
    expect(
      normalizedDimensionRelativeManhattanSimilarity(L, T, { epsilon: [0.5, 0.1] })
    ).toBeCloseTo(0.5);
  });

  it('handles negative vector values using magnitude |T_d|', () => {
    const L = [-10, -20];
    const T = [-10, -40];
    // maxAbsT = 40, eps = 4e-4
    // d=0: diff = |-10 - (-10)| = 0
    // d=1: diff = |-20 - (-40)| = 20, denom = max(|-40|, eps) = 40 -> 20/40 = 0.5
    // mean diff = 0.25 -> score = 0.75
    expect(normalizedDimensionRelativeManhattanSimilarity(L, T)).toBeCloseTo(0.75);
  });

  it('clamps output score strictly to [0, 1]', () => {
    const L = [1000, 2000];
    const T = [1, 1];
    // relative diffs will be large (> 1), score formula = 1 - meanDiff < 0
    // clamped to 0
    expect(normalizedDimensionRelativeManhattanSimilarity(L, T)).toBe(0);
  });

  it('throws RangeError when vector lengths mismatch', () => {
    expect(() =>
      normalizedDimensionRelativeManhattanSimilarity([1, 2], [1, 2, 3])
    ).toThrow(RangeError);
  });

  it('throws RangeError for empty vectors', () => {
    expect(() => normalizedDimensionRelativeManhattanSimilarity([], [])).toThrow(
      RangeError
    );
  });

  it('throws TypeError for non-array inputs or non-finite elements', () => {
    expect(() =>
      normalizedDimensionRelativeManhattanSimilarity([1, NaN], [1, 2])
    ).toThrow(TypeError);
    expect(() =>
      // @ts-expect-error test invalid type
      normalizedDimensionRelativeManhattanSimilarity('invalid', [1, 2])
    ).toThrow(TypeError);
  });

  it('throws RangeError for invalid scalar epsilon option', () => {
    expect(() =>
      normalizedDimensionRelativeManhattanSimilarity([1, 2], [1, 2], {
        epsilon: -0.1,
      })
    ).toThrow(RangeError);
    expect(() =>
      normalizedDimensionRelativeManhattanSimilarity([1, 2], [1, 2], {
        epsilon: 0,
      })
    ).toThrow(RangeError);
  });

  it('throws RangeError for invalid array epsilon option', () => {
    expect(() =>
      normalizedDimensionRelativeManhattanSimilarity([1, 2], [1, 2], {
        epsilon: [0.1], // mismatched length
      })
    ).toThrow(RangeError);
    expect(() =>
      normalizedDimensionRelativeManhattanSimilarity([1, 2], [1, 2], {
        epsilon: [0.1, -0.5], // negative value
      })
    ).toThrow(RangeError);
  });
});
