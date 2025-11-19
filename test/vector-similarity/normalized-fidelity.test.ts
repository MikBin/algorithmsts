
import { 
    normalizedMatusitaSimilarity, 
    normalizedSquaredChordSimilarity 
} from '../../src/vector-similarity/similarity/normalized-fidelity';

describe('Normalized Fidelity Family', () => {
  describe('normalizedMatusitaSimilarity', () => {
    it('should return 1 for identical vectors', () => {
      const P = [0.1, 0.2, 0.7];
      const Q = [0.1, 0.2, 0.7];
      expect(normalizedMatusitaSimilarity(P, Q)).toBeCloseTo(1);
    });

    it('should return a value between 0 and 1', () => {
      const P = [0.2, 0.3, 0.5];
      const Q = [0.3, 0.4, 0.3];
      const similarity = normalizedMatusitaSimilarity(P, Q);
      expect(similarity).toBeGreaterThanOrEqual(0);
      expect(similarity).toBeLessThanOrEqual(1);
    });
  });

  describe('normalizedSquaredChordSimilarity', () => {
    it('should return 1 for identical vectors', () => {
      const P = [0.1, 0.2, 0.7];
      const Q = [0.1, 0.2, 0.7];
      expect(normalizedSquaredChordSimilarity(P, Q)).toBeCloseTo(1);
    });

    it('should return a value between 0 and 1', () => {
      const P = [0.2, 0.3, 0.5];
      const Q = [0.3, 0.4, 0.3];
      const similarity = normalizedSquaredChordSimilarity(P, Q);
      expect(similarity).toBeGreaterThanOrEqual(0);
      expect(similarity).toBeLessThanOrEqual(1);
    });
  });
});
