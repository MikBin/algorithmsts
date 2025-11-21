import { describe, it, expect } from 'vitest';
import { pearsonChiSquareDistance, neymanChiSquareDistance, additiveSymmetricChiSquareDistance, squaredChiSquareDistance } from '../../src/vector-similarity/similarity/chi-square';
import {
  normalizedPearsonChiSquareSimilarity,
  normalizedNeymanChiSquareSimilarity,
  normalizedAdditiveSymmetricChiSquareSimilarity,
  normalizedSquaredChiSquareSimilarity
} from '../../src/vector-similarity/similarity/normalized-chi-square';

describe('Chi-Square Family', () => {
  describe('pearsonChiSquareDistance', () => {
    it('should return 0 for identical vectors', () => {
      const P = [0.1, 0.2, 0.7];
      const Q = [0.1, 0.2, 0.7];
      expect(pearsonChiSquareDistance(P, Q)).toBeCloseTo(0);
    });

    it('should calculate the correct distance', () => {
      const P = [0.2, 0.3, 0.5];
      const Q = [0.3, 0.4, 0.3];
      // Calculation: ((0.2-0.3)^2)/0.3 + ((0.3-0.4)^2)/0.4 + ((0.5-0.3)^2)/0.3 = 0.03333333333333333 + 0.025 + 0.13333333333333333 = 0.19166666666666666
      expect(pearsonChiSquareDistance(P, Q)).toBeCloseTo(0.19167, 5);
    });

    it('should return Infinity if observed frequency is non-zero but expected is zero', () => {
        const P = [0.1, 0.2, 0.7];
        const Q = [0.1, 0, 0.9];
        // Q[1] is 0 and P[1] is 0.2. Division by zero implies infinite distance.
        expect(pearsonChiSquareDistance(P, Q)).toBe(Infinity);
    });
  });

  // Tests for other distance functions can remain as they are or be expanded...
});

describe('Chi-Square Similarities (Normalized)', () => {
  describe('normalizedPearsonChiSquareSimilarity', () => {
    it('should return 1 for identical vectors', () => {
      const P = [0.1, 0.2, 0.7];
      const Q = [0.1, 0.2, 0.7];
      expect(normalizedPearsonChiSquareSimilarity(P, Q)).toBeCloseTo(1);
    });

    it('should return 0 when distance is Infinity (zero expected frequency)', () => {
      const P = [0.1, 0.2, 0.7];
      const Q = [0.1, 0, 0.9]; // Causes Infinite distance
      expect(normalizedPearsonChiSquareSimilarity(P, Q)).toBe(0);
    });
  });

  describe('normalizedNeymanChiSquareSimilarity', () => {
     it('should return 1 for identical vectors', () => {
      const P = [0.1, 0.2, 0.7];
      const Q = [0.1, 0.2, 0.7];
      expect(normalizedNeymanChiSquareSimilarity(P, Q)).toBeCloseTo(1);
    });
  });

  describe('normalizedAdditiveSymmetricChiSquareSimilarity', () => {
     it('should return 1 for identical vectors', () => {
      const P = [0.1, 0.2, 0.7];
      const Q = [0.1, 0.2, 0.7];
      expect(normalizedAdditiveSymmetricChiSquareSimilarity(P, Q)).toBeCloseTo(1);
    });
  });

  describe('normalizedSquaredChiSquareSimilarity', () => {
     it('should return 1 for identical vectors', () => {
      const P = [0.1, 0.2, 0.7];
      const Q = [0.1, 0.2, 0.7];
      expect(normalizedSquaredChiSquareSimilarity(P, Q)).toBeCloseTo(1);
    });
  });
});
