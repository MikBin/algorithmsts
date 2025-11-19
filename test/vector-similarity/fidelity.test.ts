
import { fidelitySimilarity, hellingerDistance, matusitaDistance, squaredChordDistance } from '../../src/vector-similarity/similarity/fidelity';

describe('Fidelity Family', () => {
  describe('fidelitySimilarity', () => {
    it('should return 1 for identical, normalized vectors', () => {
      const P = [0.1, 0.2, 0.7];
      const Q = [0.1, 0.2, 0.7];
      // sum(sqrt(p*q)) = sqrt(0.01) + sqrt(0.04) + sqrt(0.49) = 0.1 + 0.2 + 0.7 = 1
      expect(fidelitySimilarity(P, Q)).toBeCloseTo(1);
    });

    it('should calculate the correct similarity', () => {
      const P = [0.2, 0.3, 0.5];
      const Q = [0.3, 0.4, 0.3];
      // sqrt(0.2*0.3) + sqrt(0.3*0.4) + sqrt(0.5*0.3) = 0.2449 + 0.3464 + 0.3873 = 0.9786
      expect(fidelitySimilarity(P, Q)).toBeCloseTo(0.9786, 4);
    });
  });

  describe('hellingerDistance', () => {
    it('should return 0 for identical vectors', () => {
      const P = [0.1, 0.2, 0.7];
      const Q = [0.1, 0.2, 0.7];
      expect(hellingerDistance(P, Q)).toBeCloseTo(0);
    });

    it('should calculate the correct distance', () => {
      const P = [0.2, 0.3, 0.5];
      const Q = [0.3, 0.4, 0.3];
      const fidelity = 0.9786;
      // sqrt(1 - fidelity) = sqrt(1 - 0.9786) = sqrt(0.0214) = 0.1463
      expect(hellingerDistance(P, Q)).toBeCloseTo(0.1463, 4);
    });
  });

  describe('matusitaDistance', () => {
    it('should return 0 for identical vectors', () => {
      const P = [0.1, 0.2, 0.7];
      const Q = [0.1, 0.2, 0.7];
      expect(matusitaDistance(P, Q)).toBeCloseTo(0);
    });

    it('should calculate the correct distance', () => {
        const P = [0.2, 0.3, 0.5];
        const Q = [0.3, 0.4, 0.3];
        // sqrt( (sqrt(0.2)-sqrt(0.3))^2 + (sqrt(0.3)-sqrt(0.4))^2 + (sqrt(0.5)-sqrt(0.3))^2 )
        // = sqrt( (-0.1)^2 + (-0.083)^2 + (0.159)^2) = sqrt(0.01 + 0.006889 + 0.025281) = sqrt(0.04217) = 0.20535
        expect(matusitaDistance(P, Q)).toBeCloseTo(0.2054, 4);
    });
  });

  describe('squaredChordDistance', () => {
    it('should return 0 for identical vectors', () => {
      const P = [0.1, 0.2, 0.7];
      const Q = [0.1, 0.2, 0.7];
      expect(squaredChordDistance(P, Q)).toBeCloseTo(0);
    });

    it('should calculate the correct distance', () => {
        const P = [0.2, 0.3, 0.5];
        const Q = [0.3, 0.4, 0.3];
        // (sqrt(0.2)-sqrt(0.3))^2 + (sqrt(0.3)-sqrt(0.4))^2 + (sqrt(0.5)-sqrt(0.3))^2
        // = (-0.1)^2 + (-0.083)^2 + (0.159)^2 = 0.01 + 0.006889 + 0.025281 = 0.04217
        expect(squaredChordDistance(P, Q)).toBeCloseTo(0.0422, 4);
    });
  });
});
