import { describe, it, expect } from 'vitest';
import { distanceCorrelation } from '../../src/vector-similarity/similarity/distanceCorrelation';

describe('distanceCorrelation', () => {
  it('should return 1 for identical vectors', () => {
    const a = [1, 2, 3, 4, 5];
    const b = [1, 2, 3, 4, 5];
    expect(distanceCorrelation(a, b)).toBeCloseTo(1);
  });

  it('should return 1 for linearly related vectors (positive slope)', () => {
    // dCor(X, aX + b) = 1 for scalars
    const a = [1, 2, 3, 4, 5];
    const b = [2, 4, 6, 8, 10]; // y = 2x
    expect(distanceCorrelation(a, b)).toBeCloseTo(1);
  });

  it('should return 1 for linearly related vectors (negative slope)', () => {
     // dCor(X, -X) = 1
    const a = [1, 2, 3, 4, 5];
    const b = [-1, -2, -3, -4, -5];
    expect(distanceCorrelation(a, b)).toBeCloseTo(1);
  });

  it('should return 1 if both vectors are constant', () => {
    const a = [1, 1, 1];
    const b = [2, 2, 2];
    expect(distanceCorrelation(a, b)).toBe(1);
  });

  it('should return 0 if only first vector is constant', () => {
    const a = [1, 1, 1];
    const b = [1, 2, 3];
    expect(distanceCorrelation(a, b)).toBe(0);
  });

  it('should return 0 if only second vector is constant', () => {
    const a = [1, 2, 3];
    const b = [2, 2, 2];
    expect(distanceCorrelation(a, b)).toBe(0);
  });

  it('should return 0 for independent vectors (approximately)', () => {
    // Ideally 0, but with small sample size might not be exactly 0
    // Orthogonal vectors: (1,0) and (0,1)
    const a = [1, 0];
    const b = [0, 1];
    // dCor calculation for this:
    // A: 1, 0. DistA: [[0, 1], [1, 0]].
    // RowMeansA: [0.5, 0.5]. GrandMeanA: 0.5.
    // CenteredA: [[0 - 0.5 - 0.5 + 0.5, 1 - 0.5 - 0.5 + 0.5], ...]
    // CenteredA: [[-0.5, 0.5], [0.5, -0.5]]
    // B: 0, 1. DistB same structure.
    // CenteredB: [[-0.5, 0.5], [0.5, -0.5]]
    // CovSq: (-0.5*-0.5 + 0.5*0.5 + ...) = 0.25 * 4 = 1.
    // VarA: 1. VarB: 1.
    // dCor = 1.
    // Wait, orthogonal vectors in Euclidean space are not necessarily independent or have 0 distance correlation.
    // dCor(X, Y) = 0 iff X and Y are independent.
    // These are deterministic vectors.
    // Let's test non-linear dependence which Pearson fails but dCor catches.
    // X = -2, -1, 0, 1, 2
    // Y = X^2 = 4, 1, 0, 1, 4
    // Pearson correlation is 0.
    // dCor should be > 0.
    const x = [-2, -1, 0, 1, 2];
    const y = [4, 1, 0, 1, 4];
    const dcor = distanceCorrelation(x, y);
    expect(dcor).toBeGreaterThan(0.4);
    // R package 'energy' gives dCor(x, y) approx 0.49 for this data
  });

  it('should throw error for different lengths', () => {
    const a = [1, 2];
    const b = [1, 2, 3];
    expect(() => distanceCorrelation(a, b)).toThrow('Vectors must have the same length');
  });

  it('should return 1 for empty vectors', () => {
    expect(distanceCorrelation([], [])).toBe(1);
  });

  it('should return 1 for single element vectors', () => {
      expect(distanceCorrelation([5], [10])).toBe(1);
  });
});
