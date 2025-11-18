import { describe, it, expect } from 'vitest';
import {
  computeVectorSimilarityCorrelation,
} from '../../src/vector-similarity/similarity/vectorSimilarityCorrelation';

describe('computeVectorSimilarityCorrelation', () => {
  it('should return 1 for identical vectors', () => {
    const a = [1, 2, 3];
    const b = [1, 2, 3];
    expect(computeVectorSimilarityCorrelation(a, b)).toBeCloseTo(1);
  });

  it('should return a value less than 1 for similar vectors', () => {
    const a = [1, 2, 3];
    const b = [1.1, 2.2, 3.3];
    expect(computeVectorSimilarityCorrelation(a, b)).toBeLessThan(1);
  });

  it('should return 0 for opposite vectors', () => {
    const a = [1, 2, 3];
    const b = [-1, -2, -3];
    expect(computeVectorSimilarityCorrelation(a, b)).toBeCloseTo(0);
  });

  it('should handle zero vectors', () => {
    const a = [0, 0, 0];
    const b = [0, 0, 0];
    expect(computeVectorSimilarityCorrelation(a, b)).toBe(1);
  });

  it('should throw an error for vectors of different lengths', () => {
    const a = [1, 2];
    const b = [1, 2, 3];
    expect(() => computeVectorSimilarityCorrelation(a, b)).toThrow(
      'Vectors must be of the same length',
    );
  });

  it('should handle vectors with one element', () => {
    const a = [5];
    const b = [5];
    expect(computeVectorSimilarityCorrelation(a, b)).toBe(1);
  });

  it('should handle vectors with negative values', () => {
    const a = [-1, -2, -3];
    const b = [-1, -2, -3];
    expect(computeVectorSimilarityCorrelation(a, b)).toBeCloseTo(1);
  });
});
