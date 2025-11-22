import { describe, it, expect } from 'vitest';
import {
    arctan2D,
    additiveTanh,
    sigmoidSurface,
    normalizedSumTanh,
    diagonalSine,
    mixedProductTrig,
    rationalSaddle,
    gaussianRadialBasis,
    multiplicativeTanh,
    cosineProduct,
    inverseQuadratic
} from '../../src/utils/symmetric-math-functions';

describe('Symmetric Math Functions (Existing Bounded)', () => {
    const testValues = [
        { x: 0, y: 0 },
        { x: 1, y: 1 },
        { x: -1, y: -1 },
        { x: 100, y: -50 },
        { x: -1000, y: 1000 }
    ];

    describe('arctan2D', () => {
        it('should be bounded within (-PI/2, PI/2)', () => {
            testValues.forEach(({ x, y }) => {
                const result = arctan2D(x, y);
                expect(result).toBeGreaterThan(-Math.PI / 2 - 0.0001);
                expect(result).toBeLessThan(Math.PI / 2 + 0.0001);
            });
        });
        it('should be symmetric: f(x, y) = f(y, x)', () => {
            const result1 = arctan2D(2, 5);
            const result2 = arctan2D(5, 2);
            expect(result1).toBe(result2);
        });
    });

    describe('additiveTanh', () => {
        it('should be bounded within (-1, 1)', () => {
            testValues.forEach(({ x, y }) => {
                const result = additiveTanh(x, y);
                expect(result).toBeGreaterThanOrEqual(-1);
                expect(result).toBeLessThanOrEqual(1);
            });
        });
        it('should be symmetric: f(x, y) = f(y, x)', () => {
            const result1 = additiveTanh(2, 5);
            const result2 = additiveTanh(5, 2);
            expect(result1).toBe(result2);
        });
    });

    describe('sigmoidSurface', () => {
        it('should be bounded within (-1, 1)', () => {
            testValues.forEach(({ x, y }) => {
                const result = sigmoidSurface(x, y);
                expect(result).toBeGreaterThan(-1.1); // Approximate
                expect(result).toBeLessThan(1.1);
            });
        });
        it('should be symmetric: f(x, y) = f(y, x)', () => {
            const result1 = sigmoidSurface(2, 5);
            const result2 = sigmoidSurface(5, 2);
            expect(result1).toBe(result2);
        });
    });

    describe('normalizedSumTanh', () => {
        it('should be bounded within (-1, 1)', () => {
            testValues.forEach(({ x, y }) => {
                const result = normalizedSumTanh(x, y);
                expect(result).toBeGreaterThanOrEqual(-1);
                expect(result).toBeLessThanOrEqual(1);
            });
        });
        it('should be symmetric: f(x, y) = f(y, x)', () => {
            const result1 = normalizedSumTanh(2, 5);
            const result2 = normalizedSumTanh(5, 2);
            expect(result1).toBe(result2);
        });
    });

    describe('diagonalSine', () => {
        it('should be bounded within [-1, 1]', () => {
            testValues.forEach(({ x, y }) => {
                const result = diagonalSine(x, y);
                expect(result).toBeGreaterThanOrEqual(-1);
                expect(result).toBeLessThanOrEqual(1);
            });
        });
        it('should be symmetric: f(x, y) = f(y, x)', () => {
            const result1 = diagonalSine(2, 5);
            const result2 = diagonalSine(5, 2);
            expect(result1).toBe(result2);
        });
    });

    describe('mixedProductTrig', () => {
        it('should be bounded within [-1, 1]', () => {
            testValues.forEach(({ x, y }) => {
                const result = mixedProductTrig(x, y);
                expect(result).toBeGreaterThanOrEqual(-1);
                expect(result).toBeLessThanOrEqual(1);
            });
        });
        it('should NOT necessarily be symmetric', () => {
             const result1 = mixedProductTrig(2, 5);
             const result2 = mixedProductTrig(5, 2);
             expect(result1).not.toBe(result2);
        });
    });

    describe('rationalSaddle', () => {
        it('should be bounded', () => {
            testValues.forEach(({ x, y }) => {
                const result = rationalSaddle(x, y);
                expect(Math.abs(result)).toBeLessThan(2);
            });
        });
        it('should be anti-symmetric: f(x, y) = -f(y, x)', () => {
            const result1 = rationalSaddle(2, 5);
            const result2 = rationalSaddle(5, 2);
            expect(result1).toBeCloseTo(-result2);
        });
    });
});

describe('Symmetric Math Functions (New Limited & Permutation Symmetric)', () => {
    const testValues = [
        { x: 0, y: 0 },
        { x: 1, y: 1 },
        { x: -1, y: -1 },
        { x: 100, y: -50 },
        { x: -1000, y: 1000 }
    ];

    describe('gaussianRadialBasis', () => {
        it('should be bounded within [0, 1]', () => {
            testValues.forEach(({ x, y }) => {
                const result = gaussianRadialBasis(x, y);
                expect(result).toBeGreaterThanOrEqual(0);
                expect(result).toBeLessThanOrEqual(1);
            });
        });
        it('should be symmetric: f(x, y) = f(y, x)', () => {
            const result1 = gaussianRadialBasis(2, 5);
            const result2 = gaussianRadialBasis(5, 2);
            expect(result1).toBe(result2);
        });
        it('should return 1 at origin', () => {
            expect(gaussianRadialBasis(0, 0)).toBe(1);
        });
        it('should decay for large values', () => {
            expect(gaussianRadialBasis(100, 100)).toBeCloseTo(0);
        });
    });

    describe('multiplicativeTanh', () => {
        it('should be bounded within [-1, 1]', () => {
            testValues.forEach(({ x, y }) => {
                const result = multiplicativeTanh(x, y);
                expect(result).toBeGreaterThanOrEqual(-1);
                expect(result).toBeLessThanOrEqual(1);
            });
        });
        it('should be symmetric: f(x, y) = f(y, x)', () => {
            const result1 = multiplicativeTanh(2, 5);
            const result2 = multiplicativeTanh(5, 2);
            expect(result1).toBe(result2);
        });
        it('should be 0 if one input is 0', () => {
            expect(multiplicativeTanh(0, 5)).toBe(0);
            expect(multiplicativeTanh(5, 0)).toBe(0);
        });
    });

    describe('cosineProduct', () => {
        it('should be bounded within [-1, 1]', () => {
            testValues.forEach(({ x, y }) => {
                const result = cosineProduct(x, y);
                expect(result).toBeGreaterThanOrEqual(-1);
                expect(result).toBeLessThanOrEqual(1);
            });
        });
        it('should be symmetric: f(x, y) = f(y, x)', () => {
            const result1 = cosineProduct(2, 5);
            const result2 = cosineProduct(5, 2);
            expect(result1).toBe(result2);
        });
    });

    describe('inverseQuadratic', () => {
        it('should be bounded within (0, 1]', () => {
            testValues.forEach(({ x, y }) => {
                const result = inverseQuadratic(x, y);
                expect(result).toBeGreaterThan(0);
                expect(result).toBeLessThanOrEqual(1);
            });
        });
        it('should be symmetric: f(x, y) = f(y, x)', () => {
            const result1 = inverseQuadratic(2, 5);
            const result2 = inverseQuadratic(5, 2);
            expect(result1).toBe(result2);
        });
        it('should return 1 at origin', () => {
            expect(inverseQuadratic(0, 0)).toBe(1);
        });
        it('should decay for large values', () => {
            expect(inverseQuadratic(100, 100)).toBeLessThan(0.0001);
        });
    });
});
