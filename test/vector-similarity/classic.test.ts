import { describe, it, expect } from 'vitest';
import {
  cosineSimilarity,
  euclideanDistance,
  manhattanDistance,
  pearsonCorrelation,
  euclideanSimilarity,
  manhattanSimilarity,
} from '../../src/vector-similarity/similarity/classic';

describe('Classic Similarity Functions', () => {
  describe('cosineSimilarity', () => {
    it('should return 1 for identical vectors', () => {
      const a = [1, 2, 3];
      const b = [1, 2, 3];
      expect(cosineSimilarity(a, b)).toBeCloseTo(1);
    });

    it('should return 0 for orthogonal vectors', () => {
      const a = [1, 0];
      const b = [0, 1];
      expect(cosineSimilarity(a, b)).toBe(0);
    });

    it('should return -1 for opposite vectors', () => {
      const a = [1, 2, 3];
      const b = [-1, -2, -3];
      expect(cosineSimilarity(a, b)).toBeCloseTo(-1);
    });

    it('should handle zero vectors', () => {
      const a = [0, 0, 0];
      const b = [1, 2, 3];
      expect(cosineSimilarity(a, b)).toBe(0);
    });

    it('should throw an error for vectors of different lengths', () => {
      const a = [1, 2];
      const b = [1, 2, 3];
      expect(() => cosineSimilarity(a, b)).toThrow('Vectors must have the same length');
    });
  });

  describe('euclideanDistance', () => {
    it('should return 0 for identical vectors', () => {
      const a = [1, 2, 3];
      const b = [1, 2, 3];
      expect(euclideanDistance(a, b)).toBe(0);
    });

    it('should return the correct distance for different vectors', () => {
      const a = [1, 2];
      const b = [4, 6];
      expect(euclideanDistance(a, b)).toBe(5);
    });

    it('should throw an error for vectors of different lengths', () => {
      const a = [1, 2];
      const b = [1, 2, 3];
      expect(() => euclideanDistance(a, b)).toThrow('Vectors must have the same length');
    });
  });

  describe('manhattanDistance', () => {
    it('should return 0 for identical vectors', () => {
      const a = [1, 2, 3];
      const b = [1, 2, 3];
      expect(manhattanDistance(a, b)).toBe(0);
    });

    it('should return the correct distance for different vectors', () => {
      const a = [1, 2];
      const b = [4, 6];
      expect(manhattanDistance(a, b)).toBe(7);
    });

    it('should throw an error for vectors of different lengths', () => {
      const a = [1, 2];
      const b = [1, 2, 3];
      expect(() => manhattanDistance(a, b)).toThrow('Vectors must have the same length');
    });
  });

  describe('pearsonCorrelation', () => {
    it('should return 1 for perfectly correlated vectors', () => {
      const a = [1, 2, 3];
      const b = [2, 4, 6];
      expect(pearsonCorrelation(a, b)).toBeCloseTo(1);
    });

    it('should return -1 for perfectly anti-correlated vectors', () => {
      const a = [1, 2, 3];
      const b = [-1, -2, -3];
      expect(pearsonCorrelation(a, b)).toBeCloseTo(-1);
    });

    it('should return 0 for uncorrelated vectors', () => {
      const a = [1, 2, 3];
      const b = [1, -1, 1];
      expect(pearsonCorrelation(a, b)).toBe(0);
    });

    it('should handle constant vectors', () => {
      const a = [1, 1, 1];
      const b = [2, 2, 2];
      expect(pearsonCorrelation(a, b)).toBe(0);
    });

    it('should throw an error for vectors of different lengths', () => {
      const a = [1, 2];
      const b = [1, 2, 3];
      expect(() => pearsonCorrelation(a, b)).toThrow('Vectors must have the same length');
    });
  });

  describe('euclideanSimilarity', () => {
    it('should return 1 for identical vectors', () => {
      const a = [1, 2, 3];
      const b = [1, 2, 3];
      expect(euclideanSimilarity(a, b)).toBe(1);
    });

    it('should return a value between 0 and 1 for different vectors', () => {
      const a = [1, 2];
      const b = [4, 6];
      const similarity = euclideanSimilarity(a, b);
      expect(similarity).toBeGreaterThanOrEqual(0);
      expect(similarity).toBeLessThanOrEqual(1);
    });
  });

  describe('manhattanSimilarity', () => {
    it('should return 1 for identical vectors', () => {
      const a = [1, 2, 3];
      const b = [1, 2, 3];
      expect(manhattanSimilarity(a, b)).toBe(1);
    });

    it('should return a value between 0 and 1 for different vectors', () => {
      const a = [1, 2];
      const b = [4, 6];
      const similarity = manhattanSimilarity(a, b);
      expect(similarity).toBeGreaterThanOrEqual(0);
      expect(similarity).toBeLessThanOrEqual(1);
    });
  });
});
