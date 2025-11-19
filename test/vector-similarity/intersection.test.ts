import { describe, it, expect } from 'vitest';
import {
  intersectionSimilarity,
  waveHedgesDistance,
  sorensenDistance,
  motykaSimilarity,
  waveHedgesSimilarity,
  sorensenSimilarity,
  motykaDistance,
  intersectionDistance,
} from '../../src/vector-similarity/similarity/intersection';

describe('Intersection Similarity Measures', () => {
  describe('intersectionSimilarity', () => {
    it('should return the correct intersection similarity', () => {
      expect(intersectionSimilarity([1, 2, 3], [3, 2, 1])).toBe(1 + 2 + 1);
      expect(intersectionSimilarity([0, 0, 0], [1, 1, 1])).toBe(0);
      expect(intersectionSimilarity([1, 1, 1], [1, 1, 1])).toBe(3);
    });
  });

  describe('waveHedgesDistance', () => {
    it('should return the correct Wave Hedges distance', () => {
      expect(waveHedgesDistance([1, 2, 3], [3, 2, 1])).toBeCloseTo(Math.abs(1 - 3) / 3 + Math.abs(2 - 2) / 2 + Math.abs(3 - 1) / 3);
      expect(waveHedgesDistance([1, 1, 1], [1, 1, 1])).toBe(0);
      expect(waveHedgesDistance([1, 0, 1], [0, 0, 0])).toBe(2);
    });
  });

  describe('sorensenDistance', () => {
    it('should return the correct Sørensen-Dice distance', () => {
      expect(sorensenDistance([1, 1, 0, 1], [0, 1, 1, 1])).toBeCloseTo(2 / 6);
      expect(sorensenDistance([1, 1, 1], [1, 1, 1])).toBe(0);
    });
  });

  describe('motykaSimilarity', () => {
    it('should return the correct Motyka similarity', () => {
      expect(motykaSimilarity([1, 2, 0], [2, 1, 0])).toBeCloseTo(0.5);
      expect(motykaSimilarity([1, 1, 1], [1, 1, 1])).toBe(1);
    });
  });

  describe('Normalization Wrappers', () => {
    it('waveHedgesSimilarity should be between 0 and 1', () => {
      const sim = waveHedgesSimilarity([1, 2, 3], [4, 5, 6]);
      expect(sim).toBeGreaterThanOrEqual(0);
      expect(sim).toBeLessThanOrEqual(1);
    });

    it('sorensenSimilarity should be between 0 and 1', () => {
      const sim = sorensenSimilarity([1, 0, 1], [0, 1, 0]);
      expect(sim).toBeGreaterThanOrEqual(0);
      expect(sim).toBeLessThanOrEqual(1);
    });

    it('motykaDistance should be between 0 and 1', () => {
      const dist = motykaDistance([1, 2, 3], [3, 2, 1]);
      expect(dist).toBeGreaterThanOrEqual(0);
      expect(dist).toBeLessThanOrEqual(1);
    });

    it('intersectionDistance should be between 0 and 1', () => {
      const dist = intersectionDistance([1, 2, 3], [3, 2, 1]);
      expect(dist).toBeGreaterThanOrEqual(0);
      expect(dist).toBeLessThanOrEqual(1);
    });
  });
});
