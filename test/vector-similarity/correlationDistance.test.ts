import { describe, it, expect } from 'vitest';
import { correlationDistance } from '../../src/vector-similarity/similarity/correlationDistance';

describe('correlationDistance', () => {
  it('should return 0 for identical vectors (correlation 1)', () => {
    // Pearson(a,a) = 1 => Dist = 0
    const a = [1, 2, 3, 4, 5];
    expect(correlationDistance(a, a)).toBeCloseTo(0);
  });

  it('should return 2 for opposite vectors (correlation -1)', () => {
    // Pearson(a, -a) = -1 => Dist = 2
    const a = [1, 2, 3];
    const b = [-1, -2, -3];
    expect(correlationDistance(a, b)).toBeCloseTo(2);
  });

  it('should return 1 for uncorrelated vectors (correlation 0)', () => {
    // Vectors centered at 0 with 0 dot product
    // a = [1, 0, -1], mean=0
    // b = [1, -2, 1], mean=0
    // dot = 1*1 + 0*-2 + -1*1 = 1 - 1 = 0
    const a = [1, 0, -1];
    const b = [1, -2, 1];
    expect(correlationDistance(a, b)).toBeCloseTo(1);
  });

  it('should handle linearly transformed vectors', () => {
    // b = 2a + 3 => Pearson = 1 => Dist = 0
    const a = [1, 2, 3];
    const b = [5, 7, 9];
    expect(correlationDistance(a, b)).toBeCloseTo(0);
  });
});
