import { describe, it, expect } from 'vitest';
import {
  computeVectorSimilarity,
  computeVectorSimilarityPenalized,
  computeVectorSimilarityMeanStdPower,
  computeVectorSimilarityMeanStdPenalized,
  computeVectorSimilarityMetricLike,
  computeVectorSimilarityRobust,
  computeVectorSimilarityTunable,
  computeVectorSimilarityVarianceWeighted,
  jaccardSimilarityBinary,
  jaccardSimilarityWeighted,
  jaccardSimilarityRealValued,
  cosineSimilarity,
  euclideanDistance,
  manhattanDistance,
  pearsonCorrelation,
  weightedMinkowskiSimilarity,
  canberraSimilarity,
  chebyshevSimilarity,
  brayCurtisSimilarity,
  harmonicMeanSimilarity,
  geometricMeanSimilarity,
  ratioBasedSimilarity,
} from '../../src/vector-similarity';

describe('Vector Similarity Functions', () => {
  describe('computeVectorSimilarity', () => {
    it('should return 1 for identical vectors', () => {
      const a = [1, 2, 3];
      const b = [1, 2, 3];
      expect(computeVectorSimilarity(a, b)).toBe(1);
    });

    it('should return a value between 0 and 1 for different vectors', () => {
      const a = [1, 2, 3];
      const b = [4, 5, 6];
      const similarity = computeVectorSimilarity(a, b);
      expect(similarity).toBeGreaterThanOrEqual(0);
      expect(similarity).toBeLessThanOrEqual(1);
    });
  });

  describe('computeVectorSimilarityPenalized', () => {
    it('should return 1 for identical vectors', () => {
      const a = [1, 2, 3];
      const b = [1, 2, 3];
      expect(computeVectorSimilarityPenalized(a, b)).toBe(1);
    });

    it('should return a value between 0 and 1 for different vectors', () => {
      const a = [1, 2, 3];
      const b = [4, 5, 6];
      const similarity = computeVectorSimilarityPenalized(a, b);
      expect(similarity).toBeGreaterThanOrEqual(0);
      expect(similarity).toBeLessThanOrEqual(1);
    });
  });

  describe('jaccardSimilarityBinary', () => {
    it('should return 1 for identical binary vectors', () => {
      const a = [1, 0, 1];
      const b = [1, 0, 1];
      expect(jaccardSimilarityBinary(a, b)).toBe(1);
    });

    it('should return the correct similarity for different binary vectors', () => {
      const a = [1, 0, 1];
      const b = [1, 1, 1];
      expect(jaccardSimilarityBinary(a, b)).toBe(2 / 3);
    });
  });

  describe('cosineSimilarity', () => {
    it('should return 1 for identical vectors', () => {
      const a = [1, 2, 3];
      const b = [1, 2, 3];
      expect(cosineSimilarity(a, b)).toBe(1);
    });

    it('should return 0 for orthogonal vectors', () => {
      const a = [1, 0];
      const b = [0, 1];
      expect(cosineSimilarity(a, b)).toBe(0);
    });

    it('should return -1 for opposite vectors', () => {
      const a = [1, 2, 3];
      const b = [-1, -2, -3];
      expect(cosineSimilarity(a, b)).toBe(-1);
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
  });

  describe('pearsonCorrelation', () => {
    it('should return 1 for perfectly correlated vectors', () => {
      const a = [1, 2, 3];
      const b = [2, 4, 6];
      expect(pearsonCorrelation(a, b)).toBe(1);
    });

    it('should return -1 for perfectly anti-correlated vectors', () => {
      const a = [1, 2, 3];
      const b = [-1, -2, -3];
      expect(pearsonCorrelation(a, b)).toBe(-1);
    });

    it('should return 0 for uncorrelated vectors', () => {
      const a = [1, 2, 3];
      const b = [1, -1, 1];
      expect(pearsonCorrelation(a, b)).toBe(0);
    });
  });

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
  });
});
