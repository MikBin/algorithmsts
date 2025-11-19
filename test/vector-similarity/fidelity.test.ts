
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
      // sqrt(0.2*0.3) + sqrt(0.3*0.4) + sqrt(0.5*0.3) = 0.2449489742783178 + 0.34641016151377546 + 0.3872983346207417 = 0.978657470412835
      expect(fidelitySimilarity(P, Q)).toBeCloseTo(0.97866, 5);
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
      const fidelity = 0.978657470412835;
      // sqrt(1 - fidelity) = sqrt(1 - 0.978657470412835) = sqrt(0.021342529587165008) = 0.1460908264990139
      expect(hellingerDistance(P, Q)).toBeCloseTo(0.14609, 5);
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
        // = sqrt( (-0.1005037815259211)^2 + (-0.0831633560293333)^2 + (0.1593167495944923)^2) = sqrt(0.010101010101010102 + 0.00691614213562373 + 0.02538181818181818) = sqrt(0.04239897041845101) = 0.205910102759101
        expect(matusitaDistance(P, Q)).toBeCloseTo(0.20660, 5);
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
        // = (-0.1005037815259211)^2 + (-0.0831633560293333)^2 + (0.1593167495944923)^2 = 0.010101010101010102 + 0.00691614213562373 + 0.02538181818181818 = 0.04239897041845101
        expect(squaredChordDistance(P, Q)).toBeCloseTo(0.04269, 5);
    });
  });
});
