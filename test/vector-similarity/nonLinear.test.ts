
import { describe, it, expect } from 'vitest';
import { polynomialKernelSimilarity, rbfKernelSimilarity } from '../../src/vector-similarity/similarity/nonLinear.ts';

describe('Non-Linear Similarity', () => {
  const vecA = [1, 2, 3];
  const vecB = [1, 2, 3];
  const vecC = [4, 5, 6];
  const vecZeros = [0, 0, 0];

  describe('polynomialKernelSimilarity', () => {
    it('should return 1 for identical vectors', () => {
      const sim = polynomialKernelSimilarity(vecA, vecB);
      expect(sim).toBeCloseTo(1);
    });

    it('should return 0 if vectors result in 0 kernel norm', () => {
      // Normalized Polynomial Kernel similarity handles 0 norms by returning 0
      // Though with constant=1, polynomial kernel usually isn't 0 unless vectors are weird or constant is 0.
      // Let's test with constant 0 and zero vectors.
       const sim = polynomialKernelSimilarity(vecZeros, vecZeros, 2, 0);
       expect(sim).toBe(0);
    });

    it('should calculate correctly for different vectors', () => {
        // Manual calculation check
        // K(x,y) = (x.y + 1)^2
        // A=[1,2,3], C=[4,5,6]
        // A.C = 4+10+18 = 32. K(A,C) = (33)^2 = 1089
        // A.A = 1+4+9 = 14. K(A,A) = (15)^2 = 225
        // C.C = 16+25+36 = 77. K(C,C) = (78)^2 = 6084
        // Sim = 1089 / sqrt(225 * 6084) = 1089 / (15 * 78) = 1089 / 1170 = 0.930769...
        const sim = polynomialKernelSimilarity(vecA, vecC);
        expect(sim).toBeCloseTo(0.930769, 5);
    });

    it('should throw error for different lengths', () => {
        expect(() => polynomialKernelSimilarity([1], [1, 2])).toThrow('Vectors must have the same length');
    });
  });

  describe('rbfKernelSimilarity', () => {
    it('should return 1 for identical vectors', () => {
      const sim = rbfKernelSimilarity(vecA, vecB);
      expect(sim).toBe(1);
    });

    it('should return correct value for different vectors', () => {
        // K(x,y) = exp(-gamma * ||x-y||^2)
        // A=[1,2,3], C=[4,5,6]
        // ||A-C||^2 = 3^2 + 3^2 + 3^2 = 27
        // gamma = 0.01
        // Sim = exp(-0.01 * 27) = exp(-0.27) ~= 0.763379
        const sim = rbfKernelSimilarity(vecA, vecC, 0.01);
        expect(sim).toBeCloseTo(0.763379, 5);
    });

    it('should return lower similarity for more distant vectors', () => {
        const sim1 = rbfKernelSimilarity(vecA, [1.1, 2.1, 3.1]);
        const sim2 = rbfKernelSimilarity(vecA, [10, 20, 30]);
        expect(sim1).toBeGreaterThan(sim2);
    });

    it('should throw error for different lengths', () => {
        expect(() => rbfKernelSimilarity([1], [1, 2])).toThrow('Vectors must have the same length');
    });
  });
});
