import { describe, it, expect } from 'vitest';
import {
  computeVectorSimilarityMeanStdPenalized,
  computeVectorSimilarityMetricLike,
  computeVectorSimilarityRobust,
  computeVectorSimilarityTunable,
  computeVectorSimilarityVarianceWeighted,
} from '../../src/vector-similarity';

describe('Vector Similarity Functions', () => {
  describe('computeVectorSimilarityMeanStdPenalized', () => {
    it('should return 1 for identical vectors', () => {
      const a = [1, 2, 3];
      const b = [1, 2, 3];
      expect(computeVectorSimilarityMeanStdPenalized(a, b)).toBe(1);
    });

    it('should return a value between 0 and 1 for different vectors', () => {
      const a = [1, 2, 3];
      const b = [4, 5, 6];
      const similarity = computeVectorSimilarityMeanStdPenalized(a, b);
      expect(similarity).toBeGreaterThanOrEqual(0);
      expect(similarity).toBeLessThanOrEqual(1);
    });

    it('should handle zero vectors', () => {
      const a = [0, 0, 0];
      const b = [0, 0, 0];
      expect(computeVectorSimilarityMeanStdPenalized(a, b)).toBe(1);
    });

    it('should handle vectors with negative numbers', () => {
      const a = [-1, -2, -3];
      const b = [-1, -2, -3];
      expect(computeVectorSimilarityMeanStdPenalized(a, b)).toBe(1);
    });

    it('should throw an error for vectors of different lengths', () => {
      const a = [1, 2, 3];
      const b = [4, 5];
      expect(() => computeVectorSimilarityMeanStdPenalized(a, b)).toThrow();
    });
  });

  describe('computeVectorSimilarityMetricLike', () => {
    it('should return 1 for identical vectors', () => {
      const a = [1, 2, 3];
      const b = [1, 2, 3];
      expect(computeVectorSimilarityMetricLike(a, b)).toBe(1);
    });

    it('should return a value between 0 and 1 for different vectors', () => {
      const a = [1, 2, 3];
      const b = [4, 5, 6];
      const similarity = computeVectorSimilarityMetricLike(a, b);
      expect(similarity).toBeGreaterThanOrEqual(0);
      expect(similarity).toBeLessThanOrEqual(1);
    });

    it('should handle zero vectors', () => {
      const a = [0, 0, 0];
      const b = [0, 0, 0];
      expect(computeVectorSimilarityMetricLike(a, b)).toBe(1);
    });

    it('should handle vectors with negative numbers', () => {
      const a = [-1, -2, -3];
      const b = [-1, -2, -3];
      expect(computeVectorSimilarityMetricLike(a, b)).toBe(1);
    });

    it('should throw an error for vectors of different lengths', () => {
      const a = [1, 2, 3];
      const b = [4, 5];
      expect(() => computeVectorSimilarityMetricLike(a, b)).toThrow();
    });
  });

  describe('computeVectorSimilarityRobust', () => {
    it('should return 1 for identical vectors', () => {
      const a = [1, 2, 3];
      const b = [1, 2, 3];
      expect(computeVectorSimilarityRobust(a, b)).toBe(1);
    });

    it('should return a value between 0 and 1 for different vectors', () => {
      const a = [1, 2, 3];
      const b = [4, 5, 6];
      const similarity = computeVectorSimilarityRobust(a, b);
      expect(similarity).toBeGreaterThanOrEqual(0);
      expect(similarity).toBeLessThanOrEqual(1);
    });

    it('should handle zero vectors', () => {
      const a = [0, 0, 0];
      const b = [0, 0, 0];
      expect(computeVectorSimilarityRobust(a, b)).toBe(1);
    });

    it('should handle vectors with negative numbers', () => {
      const a = [-1, -2, -3];
      const b = [-1, -2, -3];
      expect(computeVectorSimilarityRobust(a, b)).toBe(1);
    });

    it('should throw an error for vectors of different lengths', () => {
      const a = [1, 2, 3];
      const b = [4, 5];
      expect(() => computeVectorSimilarityRobust(a, b)).toThrow();
    });
  });

  describe('computeVectorSimilarityTunable', () => {
    it('should return 1 for identical vectors', () => {
      const a = [1, 2, 3];
      const b = [1, 2, 3];
      expect(computeVectorSimilarityTunable(a, b)).toBe(1);
    });

    it('should return a value between 0 and 1 for different vectors', () => {
      const a = [1, 2, 3];
      const b = [4, 5, 6];
      const similarity = computeVectorSimilarityTunable(a, b);
      expect(similarity).toBeGreaterThanOrEqual(0);
      expect(similarity).toBeLessThanOrEqual(1);
    });

    it('should handle zero vectors', () => {
      const a = [0, 0, 0];
      const b = [0, 0, 0];
      expect(computeVectorSimilarityTunable(a, b)).toBe(1);
    });

    it('should handle vectors with negative numbers', () => {
      const a = [-1, -2, -3];
      const b = [-1, -2, -3];
      expect(computeVectorSimilarityTunable(a, b)).toBe(1);
    });

    it('should throw an error for vectors of different lengths', () => {
      const a = [1, 2, 3];
      const b = [4, 5];
      expect(() => computeVectorSimilarityTunable(a, b)).toThrow();
    });
  });

  describe('computeVectorSimilarityVarianceWeighted', () => {
    it('should return 1 for identical vectors', () => {
      const a = [1, 2, 3];
      const b = [1, 2, 3];
      expect(computeVectorSimilarityVarianceWeighted(a, b)).toBe(1);
    });

    it('should return a value between 0 and 1 for different vectors', () => {
      const a = [1, 2, 3];
      const b = [4, 5, 6];
      const similarity = computeVectorSimilarityVarianceWeighted(a, b);
      expect(similarity).toBeGreaterThanOrEqual(0);
      expect(similarity).toBeLessThanOrEqual(1);
    });

    it('should handle zero vectors', () => {
      const a = [0, 0, 0];
      const b = [0, 0, 0];
      expect(computeVectorSimilarityVarianceWeighted(a, b)).toBe(1);
    });

    it('should handle vectors with negative numbers', () => {
      const a = [-1, -2, -3];
      const b = [-1, -2, -3];
      expect(computeVectorSimilarityVarianceWeighted(a, b)).toBe(1);
    });

    it('should throw an error for vectors of different lengths', () => {
      const a = [1, 2, 3];
      const b = [4, 5];
      expect(() => computeVectorSimilarityVarianceWeighted(a, b)).toThrow();
    });
  });
});
