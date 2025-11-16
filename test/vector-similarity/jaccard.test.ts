import { describe, it, expect } from 'vitest';
import {
  jaccardSimilarityBinary,
  jaccardSimilarityWeighted,
  jaccardSimilarityRealValued,
} from '../../src/vector-similarity/similarity/jaccard';

describe('Jaccard Similarity Variants', () => {
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

    it('should handle empty vectors', () => {
      const a: number[] = [];
      const b: number[] = [];
      expect(jaccardSimilarityBinary(a, b)).toBe(1);
    });

    it('should throw an error for vectors of different lengths', () => {
      const a = [1, 0];
      const b = [1, 0, 1];
      expect(() => jaccardSimilarityBinary(a, b)).toThrow('Vectors must have the same length');
    });

    it('should throw an error for non-array inputs', () => {
      const a = 123;
      const b = [1, 0, 1];
      //@ts-ignore
      expect(() => jaccardSimilarityBinary(a, b)).toThrow('Inputs must be arrays');
    });
  });

  describe('jaccardSimilarityWeighted', () => {
    it('should return 1 for identical weighted vectors', () => {
      const a = [0.5, 0, 1.5];
      const b = [0.5, 0, 1.5];
      expect(jaccardSimilarityWeighted(a, b)).toBe(1);
    });

    it('should return the correct similarity for different weighted vectors', () => {
      const a = [0.5, 0.2, 0.3];
      const b = [0.1, 0.8, 0.6];
      const intersection = 0.1 + 0.2 + 0.3;
      const union = 0.5 + 0.8 + 0.6;
      expect(jaccardSimilarityWeighted(a, b)).toBe(intersection / union);
    });

    it('should handle negative weights by taking the absolute value', () => {
      const a = [-0.5, -0.2, -0.3];
      const b = [0.1, 0.8, 0.6];
      const intersection = 0.1 + 0.2 + 0.3;
      const union = 0.5 + 0.8 + 0.6;
      expect(jaccardSimilarityWeighted(a, b)).toBe(intersection / union);
    });

    it('should throw an error for vectors of different lengths', () => {
      const a = [0.5, 0.2];
      const b = [0.1, 0.8, 0.6];
      expect(() => jaccardSimilarityWeighted(a, b)).toThrow('Vectors must have the same length');
    });
  });

  describe('jaccardSimilarityRealValued', () => {
    it('should return 1 for identical real-valued vectors', () => {
      const a = [1.1, 2.2, 3.3];
      const b = [1.1, 2.2, 3.3];
      expect(jaccardSimilarityRealValued(a, b)).toBe(1);
    });

    it('should return the correct similarity for different real-valued vectors', () => {
      const a = [1.1, 2.2, 3.3];
      const b = [0.5, 2.5, 3.0];
      const intersection = 0.5 + 2.2 + 3.0;
      const union = 1.1 + 2.5 + 3.3;
      expect(jaccardSimilarityRealValued(a, b)).toBe(intersection / union);
    });

    it('should throw an error for vectors of different lengths', () => {
      const a = [1.1, 2.2];
      const b = [0.5, 2.5, 3.0];
      expect(() => jaccardSimilarityRealValued(a, b)).toThrow('Vectors must have the same length');
    });
  });
});
