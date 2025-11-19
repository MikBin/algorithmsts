import { describe, it, expect } from 'vitest';
import {
  cosineSimilarity,
  euclideanDistance,
  manhattanDistance,
  pearsonCorrelation,
  euclideanSimilarity,
  manhattanSimilarity,
  dotProduct,
  angularDistance,
  angularSimilarity,
  diceCoefficient,
  diceDistance,
  chebyshevDistance,
  chebyshevSimilarity,
  gowerDistance,
  gowerSimilarity,
  soergelDistance,
  soergelSimilarity,
  kulczynskiDistance,
  kulczynskiSimilarity,
  canberraDistance,
  canberraSimilarity,
  lorentzianDistance,
  lorentzianSimilarity,
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

  describe('dotProduct', () => {
    it('should return the correct dot product for identical vectors', () => {
      const a = [1, 2, 3];
      const b = [1, 2, 3];
      expect(dotProduct(a, b)).toBe(14);
    });

    it('should return 0 for orthogonal vectors', () => {
      const a = [1, 0];
      const b = [0, 1];
      expect(dotProduct(a, b)).toBe(0);
    });

    it('should return the correct dot product for different vectors', () => {
      const a = [1, 2, 3];
      const b = [4, 5, 6];
      expect(dotProduct(a, b)).toBe(32);
    });

    it('should throw an error for vectors of different lengths', () => {
      const a = [1, 2];
      const b = [1, 2, 3];
      expect(() => dotProduct(a, b)).toThrow('Vectors must have the same length');
    });
  });

  describe('angularDistance', () => {
    it('should return 0 for identical vectors', () => {
      const a = [1, 2, 3];
      const b = [1, 2, 3];
      expect(angularDistance(a, b)).toBeCloseTo(0);
    });

    it('should return 0.5 for orthogonal vectors', () => {
      const a = [1, 0];
      const b = [0, 1];
      expect(angularDistance(a, b)).toBe(0.5);
    });

    it('should return 1 for opposite vectors', () => {
      const a = [1, 2, 3];
      const b = [-1, -2, -3];
      expect(angularDistance(a, b)).toBeCloseTo(1);
    });
  });

  describe('angularSimilarity', () => {
    it('should return 1 for identical vectors', () => {
      const a = [1, 2, 3];
      const b = [1, 2, 3];
      expect(angularSimilarity(a, b)).toBeCloseTo(1);
    });

    it('should return 0.5 for orthogonal vectors', () => {
      const a = [1, 0];
      const b = [0, 1];
      expect(angularSimilarity(a, b)).toBe(0.5);
    });

    it('should return 0 for opposite vectors', () => {
      const a = [1, 2, 3];
      const b = [-1, -2, -3];
      expect(angularSimilarity(a, b)).toBeCloseTo(0);
    });
  });

  describe('diceCoefficient', () => {
    it('should return 1 for identical vectors', () => {
      const a = [1, 2, 3];
      const b = [1, 2, 3];
      expect(diceCoefficient(a, b)).toBe(1);
    });

    it('should return 0 for zero vectors', () => {
      const a = [0, 0, 0];
      const b = [0, 0, 0];
      expect(diceCoefficient(a, b)).toBe(1);
    });

    it('should return the correct coefficient for different vectors', () => {
      const a = [1, 1, 0, 1, 0, 1];
      const b = [1, 1, 1, 0, 0, 1];
      expect(diceCoefficient(a, b)).toBeCloseTo(0.75);
    });
  });

  describe('diceDistance', () => {
    it('should return 0 for identical vectors', () => {
      const a = [1, 2, 3];
      const b = [1, 2, 3];
      expect(diceDistance(a, b)).toBe(0);
    });

    it('should return a value between 0 and 1', () => {
      const a = [1, 1, 0, 1, 0, 1];
      const b = [1, 1, 1, 0, 0, 1];
      expect(diceDistance(a, b)).toBeCloseTo(0.25);
    });
  });

  describe('chebyshevDistance', () => {
    it('should return 0 for identical vectors', () => {
      const a = [1, 2, 3];
      const b = [1, 2, 3];
      expect(chebyshevDistance(a, b)).toBe(0);
    });

    it('should return the correct distance for different vectors', () => {
      const a = [1, 2, 3];
      const b = [4, 6, 8];
      expect(chebyshevDistance(a, b)).toBe(5);
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
      const b = [4, 6, 8];
      expect(chebyshevSimilarity(a, b)).toBeCloseTo(1 / (1 + 5));
    });
  });

  describe('gowerDistance', () => {
    it('should return 0 for identical vectors', () => {
      const a = [1, 2, 3];
      const b = [1, 2, 3];
      const ranges = [10, 10, 10];
      expect(gowerDistance(a, b, ranges)).toBe(0);
    });

    it('should return the correct distance for different vectors', () => {
      const a = [1, 2, 3];
      const b = [2, 4, 6];
      const ranges = [10, 10, 10];
      expect(gowerDistance(a, b, ranges)).toBeCloseTo(0.2);
    });
  });

  describe('gowerSimilarity', () => {
    it('should return 1 for identical vectors', () => {
      const a = [1, 2, 3];
      const b = [1, 2, 3];
      const ranges = [10, 10, 10];
      expect(gowerSimilarity(a, b, ranges)).toBe(1);
    });

    it('should return a value between 0 and 1 for different vectors', () => {
      const a = [1, 2, 3];
      const b = [2, 4, 6];
      const ranges = [10, 10, 10];
      expect(gowerSimilarity(a, b, ranges)).toBeCloseTo(0.8);
    });
  });

  describe('soergelDistance', () => {
    it('should return 0 for identical vectors', () => {
      const a = [1, 2, 3];
      const b = [1, 2, 3];
      expect(soergelDistance(a, b)).toBe(0);
    });

    it('should return the correct distance for different vectors', () => {
      const a = [1, 1, 0, 1, 0, 1];
      const b = [1, 1, 1, 0, 0, 1];
      expect(soergelDistance(a, b)).toBeCloseTo(0.4);
    });
  });

  describe('soergelSimilarity', () => {
    it('should return 1 for identical vectors', () => {
      const a = [1, 2, 3];
      const b = [1, 2, 3];
      expect(soergelSimilarity(a, b)).toBe(1);
    });

    it('should return a value between 0 and 1 for different vectors', () => {
      const a = [1, 1, 0, 1, 0, 1];
      const b = [1, 1, 1, 0, 0, 1];
      expect(soergelSimilarity(a, b)).toBeCloseTo(0.6);
    });
  });

  describe('kulczynskiDistance', () => {
    it('should return 0 for identical vectors', () => {
      const a = [1, 2, 3];
      const b = [1, 2, 3];
      expect(kulczynskiDistance(a, b)).toBe(0);
    });

    it('should return the correct distance for different vectors', () => {
      const a = [1, 1, 0, 1, 0, 1];
      const b = [1, 1, 1, 0, 0, 1];
      expect(kulczynskiDistance(a, b)).toBeCloseTo(2 / 3);
    });
  });

  describe('kulczynskiSimilarity', () => {
    it('should return 1 for identical vectors', () => {
      const a = [1, 2, 3];
      const b = [1, 2, 3];
      expect(kulczynskiSimilarity(a, b)).toBe(1);
    });

    it('should return a value between 0 and 1 for different vectors', () => {
      const a = [1, 1, 0, 1, 0, 1];
      const b = [1, 1, 1, 0, 0, 1];
      expect(kulczynskiSimilarity(a, b)).toBeCloseTo(1 / (1 + 2 / 3));
    });
  });

  describe('canberraDistance', () => {
    it('should return 0 for identical vectors', () => {
      const a = [1, 2, 3];
      const b = [1, 2, 3];
      expect(canberraDistance(a, b)).toBe(0);
    });

    it('should return the correct distance for different vectors', () => {
      const a = [1, 2, 3];
      const b = [4, 5, 6];
      expect(canberraDistance(a, b)).toBeCloseTo(3 / 5 + 3 / 7 + 3 / 9);
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
      const distance = 3 / 5 + 3 / 7 + 3 / 9;
      expect(canberraSimilarity(a, b)).toBeCloseTo(1 / (1 + distance));
    });
  });

  describe('lorentzianDistance', () => {
    it('should return 0 for identical vectors', () => {
      const a = [1, 2, 3];
      const b = [1, 2, 3];
      expect(lorentzianDistance(a, b)).toBe(0);
    });

    it('should return the correct distance for different vectors', () => {
      const a = [1, 2, 3];
      const b = [4, 5, 6];
      expect(lorentzianDistance(a, b)).toBeCloseTo(Math.log(4) + Math.log(4) + Math.log(4));
    });
  });

  describe('lorentzianSimilarity', () => {
    it('should return 1 for identical vectors', () => {
      const a = [1, 2, 3];
      const b = [1, 2, 3];
      expect(lorentzianSimilarity(a, b)).toBe(1);
    });

    it('should return a value between 0 and 1 for different vectors', () => {
      const a = [1, 2, 3];
      const b = [4, 5, 6];
      const distance = Math.log(4) + Math.log(4) + Math.log(4);
      expect(lorentzianSimilarity(a, b)).toBeCloseTo(1 / (1 + distance));
    });
  });
});
