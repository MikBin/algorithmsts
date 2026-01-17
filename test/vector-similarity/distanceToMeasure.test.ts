import { describe, it, expect } from 'vitest';
import { distanceToMeasure } from '../../src/vector-similarity/similarity/distanceToMeasure';

describe('distanceToMeasure', () => {
  it('should calculate correct DTM for simple 1D case', () => {
    // Data: [0], [2], [4] (points at x=0, 2, 4)
    // Query: [0]
    // k=2. Nearest are:
    // 1. [0] at distance 0
    // 2. [2] at distance 2
    // Sum Sq Dist = 0^2 + 2^2 = 4
    // Mean Sq = 4/2 = 2
    // RMS = sqrt(2)
    const dataset = [[0], [2], [4]];
    const point = [0];
    const result = distanceToMeasure(point, dataset, 2);
    expect(result).toBeCloseTo(Math.sqrt(2));
  });

  it('should return 0 if k=1 and point is in dataset', () => {
    const dataset = [[1, 1], [2, 2], [3, 3]];
    const point = [1, 1];
    // Nearest is itself (dist 0)
    expect(distanceToMeasure(point, dataset, 1)).toBe(0);
  });

  it('should work with 2D points', () => {
    // Data: (0,0), (3,4)
    // Query: (0,0)
    // k=2
    // d1 = 0
    // d2 = 5 (3-4-5 triangle)
    // RMS = sqrt( (0 + 25) / 2 ) = sqrt(12.5)
    const dataset = [[0, 0], [3, 4]];
    const point = [0, 0];
    expect(distanceToMeasure(point, dataset, 2)).toBeCloseTo(Math.sqrt(12.5));
  });

  it('should throw error if k is non-positive', () => {
    expect(() => distanceToMeasure([0], [[0]], 0)).toThrow('k must be positive');
    expect(() => distanceToMeasure([0], [[0]], -1)).toThrow('k must be positive');
  });

  it('should throw error if k is larger than dataset size', () => {
    expect(() => distanceToMeasure([0], [[0]], 2)).toThrow(/cannot be larger than dataset size/);
  });

  it('should throw error if dimensions mismatch', () => {
    const dataset = [[0, 0]]; // 2D
    const point = [0]; // 1D
    expect(() => distanceToMeasure(point, dataset, 1)).toThrow(/Dataset point at index 0 has dimension/);
  });
});
