
import { 
    normalizedPearsonChiSquareSimilarity, 
    normalizedNeymanChiSquareSimilarity, 
    normalizedAdditiveSymmetricChiSquareSimilarity, 
    normalizedSquaredChiSquareSimilarity 
} from '../../src/vector-similarity/similarity/normalized-chi-square';

describe('Normalized Chi-Square Family', () => {
  describe('normalizedPearsonChiSquareSimilarity', () => {
    it('should return 1 for identical vectors', () => {
      const P = [0.1, 0.2, 0.7];
      const Q = [0.1, 0.2, 0.7];
      expect(normalizedPearsonChiSquareSimilarity(P, Q)).toBeCloseTo(1);
    });

    it('should return a value between 0 and 1', () => {
      const P = [0.2, 0.3, 0.5];
      const Q = [0.3, 0.4, 0.3];
      const similarity = normalizedPearsonChiSquareSimilarity(P, Q);
      expect(similarity).toBeGreaterThanOrEqual(0);
      expect(similarity).toBeLessThanOrEqual(1);
    });
  });

  describe('normalizedNeymanChiSquareSimilarity', () => {
    it('should return 1 for identical vectors', () => {
      const P = [0.1, 0.2, 0.7];
      const Q = [0.1, 0.2, 0.7];
      expect(normalizedNeymanChiSquareSimilarity(P, Q)).toBeCloseTo(1);
    });

    it('should return a value between 0 and 1', () => {
      const P = [0.2, 0.3, 0.5];
      const Q = [0.3, 0.4, 0.3];
      const similarity = normalizedNeymanChiSquareSimilarity(P, Q);
      expect(similarity).toBeGreaterThanOrEqual(0);
      expect(similarity).toBeLessThanOrEqual(1);
    });
  });

  describe('normalizedAdditiveSymmetricChiSquareSimilarity', () => {
    it('should return 1 for identical vectors', () => {
      const P = [0.1, 0.2, 0.7];
      const Q = [0.1, 0.2, 0.7];
      expect(normalizedAdditiveSymmetricChiSquareSimilarity(P, Q)).toBeCloseTo(1);
    });

    it('should return a value between 0 and 1', () => {
      const P = [0.2, 0.3, 0.5];
      const Q = [0.3, 0.4, 0.3];
      const similarity = normalizedAdditiveSymmetricChiSquareSimilarity(P, Q);
      expect(similarity).toBeGreaterThanOrEqual(0);
      expect(similarity).toBeLessThanOrEqual(1);
    });
  });

  describe('normalizedSquaredChiSquareSimilarity', () => {
    it('should return 1 for identical vectors', () => {
      const P = [0.1, 0.2, 0.7];
      const Q = [0.1, 0.2, 0.7];
      expect(normalizedSquaredChiSquareSimilarity(P, Q)).toBeCloseTo(1);
    });

    it('should return a value between 0 and 1', () => {
      const P = [0.2, 0.3, 0.5];
      const Q = [0.3, 0.4, 0.3];
      const similarity = normalizedSquaredChiSquareSimilarity(P, Q);
      expect(similarity).toBeGreaterThanOrEqual(0);
      expect(similarity).toBeLessThanOrEqual(1);
    });
  });
});
