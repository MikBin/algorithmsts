import { describe, it, expect } from 'vitest';
import {
  vectorSimilarityMeanStdPowerArithmeticMean,
  vectorSimilarityMeanStdPowerArithmeticMeanNoStd
} from '../../src/vector-similarity/similarity/vectorSimilarityMeanStdPowerArithmeticMean';

describe('vectorSimilarityMeanStdPowerArithmeticMean', () => {
  it('should return 1 for identical vectors', () => {
    const a = [1, 2, 3];
    const b = [1, 2, 3];
    expect(vectorSimilarityMeanStdPowerArithmeticMean(a, b)).toBe(1);
  });

  it('should return 1 for identical negative vectors', () => {
    const a = [-1, -2, -3];
    const b = [-1, -2, -3];
    expect(vectorSimilarityMeanStdPowerArithmeticMean(a, b)).toBe(1);
  });

  it('should return 1 for identical mixed vectors', () => {
    const a = [-1, 0, 3];
    const b = [-1, 0, 3];
    expect(vectorSimilarityMeanStdPowerArithmeticMean(a, b)).toBe(1);
  });

  it('should handle zero vectors correctly (ci=1)', () => {
    const a = [0, 0, 0];
    const b = [0, 0, 0];
    // ci should be 1 for each component, so mean=1, std=0, result=1^1 = 1
    expect(vectorSimilarityMeanStdPowerArithmeticMean(a, b)).toBe(1);
  });

  it('should throw error for unequal lengths', () => {
    const a = [1, 2, 3];
    const b = [1, 2];
    expect(() => vectorSimilarityMeanStdPowerArithmeticMean(a, b)).toThrow('Invalid input: A and B must be arrays of the same length.');
  });

  it('should throw error for empty arrays', () => {
    expect(() => vectorSimilarityMeanStdPowerArithmeticMean([], [])).toThrow('Invalid input: A and B must be non-empty arrays.');
  });

  it('should throw error if inputs are not arrays', () => {
    expect(() => vectorSimilarityMeanStdPowerArithmeticMean(null as any, [])).toThrow('Invalid input: A must be an array.');
    expect(() => vectorSimilarityMeanStdPowerArithmeticMean([], "invalid" as any)).toThrow('Invalid input: B must be an array.');
  });

  it('should throw error for non-finite values', () => {
     expect(() => vectorSimilarityMeanStdPowerArithmeticMean([1, Infinity], [1, 2])).toThrow();
     expect(() => vectorSimilarityMeanStdPowerArithmeticMean([1, 2], [1, NaN])).toThrow();
  });

  it('should compute specific value correctly', () => {
    // Let's manually calculate a simple case.
    // A = [10], B = [20]
    // a=10, b=20. absA=10, absB=20.
    // diff = 10.
    // denominator = 0.5 * (10 + 20) = 15.
    // ratio = 10 / 15 = 2/3.
    // ci = 1 - 2/3 = 1/3.
    // mean = 1/3. std = 0 (n=1). exponent = 1.
    // The function maps mean [-1, 1] to [0, 1] via (1 + mean^exponent)/2 (simplified for positive mean)
    // result = (1 + 1/3) / 2 = 4/6 = 2/3.
    const result = vectorSimilarityMeanStdPowerArithmeticMean([10], [20]);
    expect(result).toBeCloseTo(2/3, 5);
  });

  it('should clamp ci to 0 when ratio > 1', () => {
      // A = [10], B = [-10]
      // diff = 20.
      // denominator = 0.5 * (10 + 10) = 10.
      // ratio = 20 / 10 = 2.
      // ci = 1 - 2 = -1. Clamped to 0.
      // result should be 0.
      const result = vectorSimilarityMeanStdPowerArithmeticMean([10], [-10]);
      expect(result).toBe(0);
  });

  it('should yield lower similarity for same inputs compared to max-based denominator', () => {
      // Case where max(absA, absB) != 0.5 * (absA + absB)
      // A = [10], B = [20]
      // Original (max-based): denom = 2 * 20 = 40. ratio = 10/40 = 0.25. ci = 0.75. Normalized: (1+0.75)/2 = 0.875.
      // New (arithmetic mean): denom = 0.5 * 30 = 15. ratio = 10/15 = 0.666. ci = 0.333. Normalized: (1+0.333)/2 = 0.666.
      // So new function gives lower similarity here because the denominator is smaller (15 vs 40).

      const a = [10];
      const b = [20];
      const res = vectorSimilarityMeanStdPowerArithmeticMean(a, b);
      expect(res).toBeCloseTo(2/3, 5);
  });

  it('should handle small differences correctly', () => {
      const a = [1.0];
      const b = [1.1];
      // diff = 0.1
      // denom = 0.5 * 2.1 = 1.05
      // ratio = 0.1 / 1.05 ~= 0.095238
      // ci = 1 - 0.095238 = 0.90476
      // result = (1 + ci) / 2
      const ci = 1 - (0.1/1.05);
      const expected = (1 + ci) / 2;
      const res = vectorSimilarityMeanStdPowerArithmeticMean(a, b);
      expect(res).toBeCloseTo(expected, 5);
  });

});

describe('vectorSimilarityMeanStdPowerArithmeticMeanNoStd', () => {
    it('should return 1 for identical vectors', () => {
        const a = [1, 2, 3];
        const b = [1, 2, 3];
        expect(vectorSimilarityMeanStdPowerArithmeticMeanNoStd(a, b)).toBe(1);
    });

    it('should return same result as vectorSimilarityMeanStdPowerArithmeticMean with stdWeight=0', () => {
        const a = [1, 2, 3];
        const b = [1.1, 2.2, 3.3];
        expect(vectorSimilarityMeanStdPowerArithmeticMeanNoStd(a, b)).toBeCloseTo(vectorSimilarityMeanStdPowerArithmeticMean(a, b, 0));
    });

    it('should return different result when std is significant', () => {
        // Construct vectors with different variations to ensure std is non-zero
        // Using same strategy as correlation test
        // i=0: A=10, B=10 -> diff=0 -> C=1
        // i=1: A=10, B=0 -> diff=10, denom=0.5*(10+0)=5 -> ratio=2 -> C=1-2=-1
        // C = [1, -1]. Mean=0.
        // For Mean=0, result is 0.5 regardless of std.

        // Let's adjust to get non-zero mean.
        // i=0: A=10, B=10 -> C=1
        // i=1: A=10, B=-5 -> diff=15, denom=0.5*(10+5)=7.5 -> ratio=2 -> C=-1
        // Still mean 0.

        // i=0: A=10, B=10 -> C=1.
        // i=1: A=10, B=6 -> diff=4, denom=0.5(10+6)=8 -> ratio=0.5 -> C=0.5.
        // C = [1, 0.5]. Mean = 0.75.
        // Variance = ((1-0.75)^2 + (0.5-0.75)^2)/1 = (0.0625 + 0.0625) = 0.125.
        // Std = sqrt(0.125) ~= 0.3535.

        // Default: exponent = 1 + 0.3535 = 1.3535.
        // result = (1 + 1 * (0.75)^1.3535) / 2
        // 0.75^1.3535 ~= 0.677
        // (1 + 0.677)/2 = 0.8385

        // NoStd: exponent = 1.
        // result = (1 + 0.75) / 2 = 0.875.

        // Diff = 0.875 - 0.8385 = 0.0365 > 0.005.

        const a = [10, 10];
        const b = [10, 6];

        const resDefault = vectorSimilarityMeanStdPowerArithmeticMean(a, b);
        const resNoStd = vectorSimilarityMeanStdPowerArithmeticMeanNoStd(a, b);

        expect(Math.abs(resDefault - resNoStd)).toBeGreaterThan(0.01);
    });
});
