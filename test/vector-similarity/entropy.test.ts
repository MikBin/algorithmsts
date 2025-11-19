import { describe, it, expect } from 'vitest';
import {
  kullbackLeiblerDivergence,
  crossEntropy,
  jeffreysDivergence,
  kDivergence,
  topsoeDivergence,
  kullbackLeiblerSimilarity,
  jeffreysSimilarity,
  kSimilarity,
  topsoeSimilarity,
  crossEntropySimilarity
} from '../../src/vector-similarity/similarity/entropy';

describe('Entropy Family Measures', () => {
  const p = [0.1, 0.4, 0.5];
  const q = [0.2, 0.3, 0.5];

  describe('kullbackLeiblerDivergence', () => {
    it('should calculate KL divergence correctly', () => {
      const expected = 0.1 * Math.log(0.1 / 0.2) + 0.4 * Math.log(0.4 / 0.3) + 0.5 * Math.log(0.5 / 0.5);
      expect(kullbackLeiblerDivergence(p, q)).toBeCloseTo(expected);
    });
    it('should return 0 for identical distributions', () => {
      expect(kullbackLeiblerDivergence(p, p)).toBe(0);
    });
    it('should return Infinity if q[i] is 0 and p[i] is not', () => {
      expect(kullbackLeiblerDivergence([0.5, 0.5], [1, 0])).toBe(Infinity);
    });
  });

  describe('crossEntropy', () => {
    it('should calculate cross-entropy correctly', () => {
      const expected = -(0.1 * Math.log(0.2) + 0.4 * Math.log(0.3) + 0.5 * Math.log(0.5));
      expect(crossEntropy(p, q)).toBeCloseTo(expected);
    });
  });

  describe('jeffreysDivergence', () => {
    it('should calculate Jeffreys divergence correctly', () => {
      const kl_pq = kullbackLeiblerDivergence(p, q);
      const kl_qp = kullbackLeiblerDivergence(q, p);
      expect(jeffreysDivergence(p, q)).toBeCloseTo(kl_pq + kl_qp);
    });
    it('should be symmetric', () => {
      const divergence1 = jeffreysDivergence(p, q);
      const divergence2 = jeffreysDivergence(q, p);
      expect(divergence1).toBeCloseTo(divergence2);
    });
  });

  describe('kDivergence', () => {
    it('should calculate K-Divergence correctly', () => {
      const m = p.map((val, i) => (val + q[i]) / 2);
      const expected = kullbackLeiblerDivergence(p, m);
      expect(kDivergence(p, q)).toBeCloseTo(expected);
    });
  });

  describe('topsoeDivergence', () => {
    it('should calculate Topsøe divergence correctly', () => {
      const m = p.map((val, i) => (val + q[i]) / 2);
      const expected = kullbackLeiblerDivergence(p, m) + kullbackLeiblerDivergence(q, m);
      expect(topsoeDivergence(p, q)).toBeCloseTo(expected);
    });

    it('should be symmetric', () => {
      const divergence1 = topsoeDivergence(p, q);
      const divergence2 = topsoeDivergence(q, p);
      expect(divergence1).toBeCloseTo(divergence2);
    });
  });

  describe('Normalization Wrappers', () => {
    it('kullbackLeiblerSimilarity should be between 0 and 1', () => {
      const sim = kullbackLeiblerSimilarity(p, q);
      expect(sim).toBeGreaterThanOrEqual(0);
      expect(sim).toBeLessThanOrEqual(1);
    });

    it('jeffreysSimilarity should be between 0 and 1', () => {
      const sim = jeffreysSimilarity(p, q);
      expect(sim).toBeGreaterThanOrEqual(0);
      expect(sim).toBeLessThanOrEqual(1);
    });

    it('kSimilarity should be between 0 and 1', () => {
      const sim = kSimilarity(p, q);
      expect(sim).toBeGreaterThanOrEqual(0);
      expect(sim).toBeLessThanOrEqual(1);
    });

    it('topsoeSimilarity should be between 0 and 1', () => {
      const sim = topsoeSimilarity(p, q);
      expect(sim).toBeGreaterThanOrEqual(0);
      expect(sim).toBeLessThanOrEqual(1);
    });

    it('crossEntropySimilarity should be between 0 and 1', () => {
      const sim = crossEntropySimilarity(p, q);
      expect(sim).toBeGreaterThanOrEqual(0);
      expect(sim).toBeLessThanOrEqual(1);
    });
  });
});
