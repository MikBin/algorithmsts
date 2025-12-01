import { describe, it, expect } from 'vitest';
import {
  itakuraSaitoDistance,
  vectorSimilarityItakuraSaito,
} from '../../src/vector-similarity/similarity/itakura-saito';

describe('Itakura-Saito Distance', () => {
  it('should return 0 for identical vectors', () => {
    const vec = [1, 2, 3, 4, 5];
    expect(itakuraSaitoDistance(vec, vec)).toBe(0);
    expect(vectorSimilarityItakuraSaito(vec, vec)).toBe(1);
  });

  it('should handle negative values by taking absolute value', () => {
    const vecA = [1, -2, 3];
    const vecB = [1, 2, 3];
    expect(itakuraSaitoDistance(vecA, vecB)).toBe(0);
  });

  it('should return Infinity if one value is zero', () => {
    const vecA = [1, 0, 3];
    const vecB = [1, 2, 3];
    expect(itakuraSaitoDistance(vecA, vecB)).toBe(Infinity);
    expect(vectorSimilarityItakuraSaito(vecA, vecB)).toBe(0);
  });

  it('should return Infinity if other value is zero', () => {
    const vecA = [1, 2, 3];
    const vecB = [1, 0, 3];
    expect(itakuraSaitoDistance(vecA, vecB)).toBe(Infinity);
    expect(vectorSimilarityItakuraSaito(vecA, vecB)).toBe(0);
  });

  it('should skip index if both are zero', () => {
    const vecA = [1, 0, 3];
    const vecB = [2, 0, 4];
    // calculation for [1,3] and [2,4]
    // i=0: 1/2 - ln(0.5) - 1 = 0.5 - (-0.693) - 1 = 0.193
    // i=2: 3/4 - ln(0.75) - 1 = 0.75 - (-0.287) - 1 = 0.037
    // sum approx 0.23
    const dist = itakuraSaitoDistance(vecA, vecB);
    expect(dist).toBeCloseTo(0.2305, 3);
  });

  it('should calculate correct distance for standard input', () => {
    const vecA = [1, 2];
    const vecB = [2, 1];
    // i=0: 1/2 - ln(0.5) - 1 = 0.5 - (-0.6931) - 1 = 0.1931
    // i=1: 2/1 - ln(2) - 1 = 2 - 0.6931 - 1 = 0.3069
    // sum = 0.5
    expect(itakuraSaitoDistance(vecA, vecB)).toBeCloseTo(0.5, 4);
  });

  it('should throw error for unequal lengths', () => {
    expect(() => itakuraSaitoDistance([1], [1, 2])).toThrow('Vectors must have the same length.');
  });
});
