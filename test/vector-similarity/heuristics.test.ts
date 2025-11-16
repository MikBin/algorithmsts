import { describe, it, expect } from 'vitest';
import {
  weightedMinkowskiSimilarity,
  canberraSimilarity,
  chebyshevSimilarity,
  brayCurtisSimilarity,
  harmonicMeanSimilarity,
  geometricMeanSimilarity,
  ratioBasedSimilarity,
} from '../../src/vector-similarity/similarity/heuristics';

describe('Heuristics Similarity Functions', () => {
  describe('weightedMinkowskiSimilarity', () => {
    it('should return 1 for identical vectors', () => {
      const a = [1, 2, 3];
      const b = [1, 2, 3];
      expect(weightedMinkowskiSimilarity(a, b)).toBe(1);
    });

    it('should return a value between 0 and 1 for different vectors', () => {
      const a = [1, 2, 3];
      const b = [4, 5, 6];
      const similarity = weightedMinkowskiSimilarity(a, b);
      expect(similarity).toBeGreaterThanOrEqual(0);
      expect(similarity).toBeLessThanOrEqual(1);
    });

    it('should throw an error for invalid input', () => {
      const a = [1, 2];
      const b = [1, 2, 3];
      expect(() => weightedMinkowskiSimilarity(a, b)).toThrow();
    });
  });

  describe('canberraSimilarity', () => {
    it('should return 1 for identical vectors', () => {
      const a = [1, 2, 3];
      const b = [1, 2, 3];
      expect(canberraSimilarity(a, b)).toBe(1);
    });

    it('should return a value between 0 and 1 for different vectors', () => {
      const a = [1, 2, 3];
      const b = [4, 5, 6];
      const similarity = canberraSimilarity(a, b);
      expect(similarity).toBeGreaterThanOrEqual(0);
      expect(similarity).toBeLessThanOrEqual(1);
    });
  });

  describe('chebyshevSimilarity', () => {
    it('should return 1 for identical vectors', () => {
      const a = [1, 2, 3];
      const b = [1, 2, 3];
      expect(chebyshevSimilarity(a, b)).toBe(1);
    });

    it('should return a value between 0 and 1 for different vectors', () => {
      const a = [1, 2, 3];
      const b = [4, 5, 6];
      const similarity = chebyshevSimilarity(a, b);
      expect(similarity).toBeGreaterThanOrEqual(0);
      expect(similarity).toBeLessThanOrEqual(1);
    });
  });

  describe('brayCurtisSimilarity', () => {
    it('should return 1 for identical vectors', () => {
      const a = [1, 2, 3];
      const b = [1, 2, 3];
      expect(brayCurtisSimilarity(a, b)).toBe(1);
    });

    it('should return a value between 0 and 1 for different vectors', () => {
      const a = [1, 2, 3];
      const b = [4, 5, 6];
      const similarity = brayCurtisSimilarity(a, b);
      expect(similarity).toBeGreaterThanOrEqual(0);
      expect(similarity).toBeLessThanOrEqual(1);
    });
  });

  describe('harmonicMeanSimilarity', () => {
    it('should return 1 for identical vectors', () => {
      const a = [1, 2, 3];
      const b = [1, 2, 3];
      expect(harmonicMeanSimilarity(a, b)).toBe(1);
    });

    it('should return a value between 0 and 1 for different vectors', () => {
      const a = [1, 2, 3];
      const b = [4, 5, 6];
      const similarity = harmonicMeanSimilarity(a, b);
      expect(similarity).toBeGreaterThanOrEqual(0);
      expect(similarity).toBeLessThanOrEqual(1);
    });
  });

  describe('geometricMeanSimilarity', () => {
    it('should return 1 for identical vectors', () => {
      const a = [1, 2, 3];
      const b = [1, 2, 3];
      expect(geometricMeanSimilarity(a, b)).toBe(1);
    });

    it('should return a value between 0 and 1 for different vectors', () => {
      const a = [1, 2, 3];
      const b = [4, 5, 6];
      const similarity = geometricMeanSimilarity(a, b);
      expect(similarity).toBeGreaterThanOrEqual(0);
      expect(similarity).toBeLessThanOrEqual(1);
    });
  });

  describe('ratioBasedSimilarity', () => {
    it('should return 1 for identical vectors', () => {
      const a = [1, 2, 3];
      const b = [1, 2, 3];
      expect(ratioBasedSimilarity(a, b)).toBe(1);
    });

    it('should return a value between 0 and 1 for different vectors', () => {
      const a = [1, 2, 3];
      const b = [4, 5, 6];
      const similarity = ratioBasedSimilarity(a, b);
      expect(similarity).toBeGreaterThanOrEqual(0);
      expect(similarity).toBeLessThanOrEqual(1);
    });
  });
});
