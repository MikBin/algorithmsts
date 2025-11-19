
import { pearsonChiSquareDistance, neymanChiSquareDistance, additiveSymmetricChiSquareDistance, squaredChiSquareDistance } from '../../src/vector-similarity/similarity/chi-square';

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
      // Calculation: ((0.2-0.3)^2)/0.3 + ((0.3-0.4)^2)/0.4 + ((0.5-0.3)^2)/0.3 = 0.0333 + 0.025 + 0.1333 = 0.1916
      expect(pearsonChiSquareDistance(P, Q)).toBeCloseTo(0.1916, 4);
    });

    it('should handle vectors with zeros', () => {
        const P = [0.1, 0.2, 0.7];
        const Q = [0.1, 0, 0.9];
        // Q[1] is 0, so that term is skipped. ((0.1-0.1)^2)/0.1 + ((0.7-0.9)^2)/0.9 = 0 + 0.0444 = 0.0444
        expect(pearsonChiSquareDistance(P, Q)).toBeCloseTo(0.0444, 4);
    });
  });

  describe('neymanChiSquareDistance', () => {
    it('should return 0 for identical vectors', () => {
      const P = [0.1, 0.2, 0.7];
      const Q = [0.1, 0.2, 0.7];
      expect(neymanChiSquareDistance(P, Q)).toBeCloseTo(0);
    });

    it('should calculate the correct distance', () => {
      const P = [0.2, 0.3, 0.5];
      const Q = [0.3, 0.4, 0.3];
      // Calculation: ((0.2-0.3)^2)/0.2 + ((0.3-0.4)^2)/0.3 + ((0.5-0.3)^2)/0.5 = 0.05 + 0.0333 + 0.08 = 0.1633
      expect(neymanChiSquareDistance(P, Q)).toBeCloseTo(0.1633, 4);
    });
  });

  describe('additiveSymmetricChiSquareDistance', () => {
    it('should return 0 for identical vectors', () => {
      const P = [0.1, 0.2, 0.7];
      const Q = [0.1, 0.2, 0.7];
      expect(additiveSymmetricChiSquareDistance(P, Q)).toBeCloseTo(0);
    });

    it('should calculate the correct distance', () => {
      const P = [0.2, 0.3, 0.5];
      const Q = [0.3, 0.4, 0.3];
      // ((0.2-0.3)^2 * (0.2+0.3))/(0.2*0.3) + ((0.3-0.4)^2 * (0.3+0.4))/(0.3*0.4) + ((0.5-0.3)^2 * (0.5+0.3))/(0.5*0.3)
      // = 0.0833 + 0.0583 + 0.2133 = 0.3549
      expect(additiveSymmetricChiSquareDistance(P, Q)).toBeCloseTo(0.355, 3);
    });
  });

  describe('squaredChiSquareDistance', () => {
    it('should return 0 for identical vectors', () => {
      const P = [0.1, 0.2, 0.7];
      const Q = [0.1, 0.2, 0.7];
      expect(squaredChiSquareDistance(P, Q)).toBeCloseTo(0);
    });

    it('should calculate the correct distance', () => {
      const P = [0.2, 0.3, 0.5];
      const Q = [0.3, 0.4, 0.3];
      // ((0.2-0.3)^2)/(0.2+0.3) + ((0.3-0.4)^2)/(0.3+0.4) + ((0.5-0.3)^2)/(0.5+0.3) 
      // = 0.02 + 0.01428 + 0.05 = 0.08428
      expect(squaredChiSquareDistance(P, Q)).toBeCloseTo(0.0843, 4);
    });
  });
});
