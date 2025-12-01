import { describe, it, expect } from 'vitest';
import {
    gaussianMutualInformation,
    normalizedGaussianMutualInformation,
    histogramMutualInformation,
    normalizedHistogramMutualInformation,
    discreteMutualInformation,
    normalizedDiscreteMutualInformation
} from '../../src/vector-similarity/similarity/mutualInformation';

describe('Mutual Information Measures', () => {

    describe('Gaussian Mutual Information', () => {
        it('should return 0 for uncorrelated vectors', () => {
            const v1 = [1, 0, -1];
            const v2 = [0, 1, 0];
            expect(gaussianMutualInformation(v1, v2)).toBeCloseTo(0);
        });

        it('should return Infinity for perfectly correlated vectors', () => {
            const v1 = [1, 2, 3];
            const v2 = [2, 4, 6];
            expect(gaussianMutualInformation(v1, v2)).toBe(Infinity);
        });

        it('should return positive value for partially correlated vectors', () => {
             const v1 = [1, 2, 3, 4, 5];
             const v2 = [1, 2, 3, 5, 4];
             const mi = gaussianMutualInformation(v1, v2);
             expect(mi).toBeGreaterThan(0);
             expect(mi).not.toBe(Infinity);
        });

        it('should handle negative correlation', () => {
             const v1 = [1, 2, 3];
             const v2 = [-1, -2, -3];
             expect(gaussianMutualInformation(v1, v2)).toBe(Infinity);
        });
    });

    describe('Normalized Gaussian Mutual Information', () => {
        it('should return 1 for perfectly correlated vectors', () => {
             const v1 = [1, 2, 3];
             const v2 = [2, 4, 6];
             expect(normalizedGaussianMutualInformation(v1, v2)).toBe(1);
        });

        it('should return 0 for uncorrelated vectors', () => {
            const v1 = [1, 0, -1];
            const v2 = [0, 1, 0];
            expect(normalizedGaussianMutualInformation(v1, v2)).toBeCloseTo(0);
        });

        it('should return between 0 and 1 for partial correlation', () => {
             const v1 = [1, 2, 3, 4, 5];
             const v2 = [1, 2, 3, 5, 4];
             const nmi = normalizedGaussianMutualInformation(v1, v2);
             expect(nmi).toBeGreaterThan(0);
             expect(nmi).toBeLessThan(1);
        });

        it('should robustly handle small variance vectors (scaled down)', () => {
            // This test ensures that if we scale down vectors (variance << 1),
            // the NMI calculation remains valid (returns 1 for perfect correlation)
            // instead of failing due to negative differential entropy.
            const v1 = [0.001, 0.002, 0.003];
            const v2 = [0.002, 0.004, 0.006];
            // Perfect correlation, should still be 1 despite small variance
            expect(normalizedGaussianMutualInformation(v1, v2)).toBe(1);
        });

         it('should robustly handle partial correlation with small variance', () => {
             const v1 = [0.01, 0.02, 0.03, 0.04, 0.05];
             const v2 = [0.01, 0.02, 0.03, 0.05, 0.04];
             const nmi = normalizedGaussianMutualInformation(v1, v2);
             expect(nmi).toBeGreaterThan(0);
             expect(nmi).toBeLessThan(1);

             // Check scale invariance: scaling shouldn't change NMI
             const v1Big = v1.map(x => x * 1000);
             const v2Big = v2.map(x => x * 1000);
             const nmiBig = normalizedGaussianMutualInformation(v1Big, v2Big);
             expect(nmi).toBeCloseTo(nmiBig);
        });
    });

    describe('Histogram Mutual Information', () => {
        it('should return 0 for constant vectors (0 entropy)', () => {
             const v1 = [1, 1, 1, 1];
             const v2 = [2, 2, 2, 2];
             expect(histogramMutualInformation(v1, v2)).toBe(0);
        });

        it('should return > 0 for identical non-constant vectors', () => {
             const v1 = [0, 1, 2, 3, 4, 5, 6, 7];
             const mi = histogramMutualInformation(v1, v1);
             expect(mi).toBeGreaterThan(0);
        });

        it('should match manual calculation for simple case', () => {
             const v1 = [0, 0, 1, 1];
             const v2 = [0, 0, 1, 1];
             expect(histogramMutualInformation(v1, v2, 2)).toBeCloseTo(Math.log(2));
        });
    });

    describe('Normalized Histogram Mutual Information', () => {
        it('should return 1 for identical vectors', () => {
             const v1 = [0, 1, 2, 3, 4, 5];
             expect(normalizedHistogramMutualInformation(v1, v1)).toBeCloseTo(1);
        });

         it('should return 0 for independent uniform vectors', () => {
             const v1 = [0, 1, 0, 1];
             const v2 = [0, 0, 1, 1];
             expect(normalizedHistogramMutualInformation(v1, v2, 2)).toBeCloseTo(0);
        });
    });

    describe('Discrete Mutual Information', () => {
        it('should return log(2) for perfectly correlated binary vectors', () => {
             const v1 = [0, 1, 0, 1];
             const v2 = [0, 1, 0, 1];
             expect(discreteMutualInformation(v1, v2)).toBeCloseTo(Math.log(2));
        });

        it('should handle different labels but same structure', () => {
             const v1 = [0, 1, 0, 1];
             const v2 = [10, 20, 10, 20];
             expect(discreteMutualInformation(v1, v2)).toBeCloseTo(Math.log(2));
        });

        it('should be 0 for independent variables', () => {
             const v1 = [0, 0, 1, 1];
             const v2 = [0, 1, 0, 1];
             expect(discreteMutualInformation(v1, v2)).toBeCloseTo(0);
        });
    });

    describe('Normalized Discrete Mutual Information', () => {
        it('should return 1 for identical vectors', () => {
             const v1 = [1, 2, 3, 1, 2, 3];
             expect(normalizedDiscreteMutualInformation(v1, v1)).toBeCloseTo(1);
        });

        it('should return 1 for bijection', () => {
             const v1 = [1, 2, 1, 2];
             const v2 = [10, 20, 10, 20];
             expect(normalizedDiscreteMutualInformation(v1, v2)).toBeCloseTo(1);
        });

         it('should return 0 for independent variables', () => {
             const v1 = [0, 0, 1, 1];
             const v2 = [0, 1, 0, 1];
             expect(normalizedDiscreteMutualInformation(v1, v2)).toBeCloseTo(0);
        });
    });
});
