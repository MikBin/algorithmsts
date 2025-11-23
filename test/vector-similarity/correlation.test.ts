import { describe, it, expect } from 'vitest';
import {
  vectorSimilarityCorrelation,
  vectorSimilarityCorrelationNoStd,
} from '../../src/vector-similarity/similarity/vectorSimilarityCorrelation';

describe('vectorSimilarityCorrelation', () => {
  it('should return 1 for identical vectors', () => {
    const a = [1, 2, 3];
    const b = [1, 2, 3];
    expect(vectorSimilarityCorrelation(a, b)).toBeCloseTo(1);
  });

  it('should return a value less than 1 for similar vectors', () => {
    const a = [1, 2, 3];
    const b = [1.1, 2.2, 3.3];
    expect(vectorSimilarityCorrelation(a, b)).toBeLessThan(1);
  });

  it('should return 0 for opposite vectors', () => {
    const a = [1, 2, 3];
    const b = [-1, -2, -3];
    expect(vectorSimilarityCorrelation(a, b)).toBeCloseTo(0);
  });

  it('should handle zero vectors', () => {
    const a = [0, 0, 0];
    const b = [0, 0, 0];
    expect(vectorSimilarityCorrelation(a, b)).toBe(1);
  });

  it('should throw an error for vectors of different lengths', () => {
    const a = [1, 2];
    const b = [1, 2, 3];
    expect(() => vectorSimilarityCorrelation(a, b)).toThrow(
      'Vectors must be of the same length',
    );
  });

  it('should handle vectors with one element', () => {
    const a = [5];
    const b = [5];
    expect(vectorSimilarityCorrelation(a, b)).toBe(1);
  });

  it('should handle vectors with negative values', () => {
    const a = [-1, -2, -3];
    const b = [-1, -2, -3];
    expect(vectorSimilarityCorrelation(a, b)).toBeCloseTo(1);
  });
});

describe('vectorSimilarityCorrelationNoStd', () => {
  it('should return 1 for identical vectors', () => {
    const a = [1, 2, 3];
    const b = [1, 2, 3];
    expect(vectorSimilarityCorrelationNoStd(a, b)).toBeCloseTo(1);
  });

  it('should return a value less than 1 for similar vectors', () => {
    const a = [1, 2, 3];
    const b = [1.1, 2.2, 3.3];
    expect(vectorSimilarityCorrelationNoStd(a, b)).toBeLessThan(1);
  });

  it('should return same result as vectorSimilarityCorrelation with stdWeight=0', () => {
      const a = [1, 2, 3];
      const b = [1.1, 2.2, 3.3];
      expect(vectorSimilarityCorrelationNoStd(a, b)).toBeCloseTo(vectorSimilarityCorrelation(a, b, 0));
  });

  it('should return different result from vectorSimilarityCorrelation (default stdWeight=1) when std is non-zero', () => {
      // Use vectors that create a high variance in C to maximize the difference.
      // C[i] = 1 - abs(A-B)/max(absA, absB)
      // We want some C[i] close to 1 and some close to -1 or 0.

      // i=0: A=10, B=10 -> diff=0 -> C=1.
      // i=1: A=10, B=-10 -> diff=20, max=10 -> ratio=2 -> C=1-2=-1.
      // C = [1, -1].
      // Mean = 0.
      // If mean is 0, the formula uses sign(mean) which is 0 (or dependent on implementation of sign(0)).
      // Math.sign(0) is 0.
      // similarity = 1 + 0 * ... = 1. result = 0.5.
      // In this specific case (mean=0), std doesn't matter because it multiplies 0.

      // Let's try mean != 0.
      // i=0: A=10, B=10 -> C=1.
      // i=1: A=10, B=0 -> diff=10, max=10 -> ratio=1 -> C=0.
      // C = [1, 0]. Mean = 0.5.
      // Variance = ((1-0.5)^2 + (0-0.5)^2)/1 = (0.25+0.25) = 0.5.
      // Std = sqrt(0.5) ~= 0.707.

      // Default: exponent = 1 + 0.707 = 1.707.
      // result = (1 + 1 * (0.5)^1.707) / 2 = (1 + 0.306) / 2 = 0.653

      // NoStd: exponent = 1.
      // result = (1 + 1 * (0.5)^1) / 2 = 1.5 / 2 = 0.75.

      // Diff = 0.75 - 0.653 = 0.097. This is > 0.005.

      const a = [10, 10];
      const b = [10, 0];

      const resDefault = vectorSimilarityCorrelation(a, b);
      const resNoStd = vectorSimilarityCorrelationNoStd(a, b);

      expect(Math.abs(resDefault - resNoStd)).toBeGreaterThan(0.01);
  });
});
