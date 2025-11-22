
import { describe, it, expect } from 'vitest';
import {
  // Section 1: Single Variable Functions
  arctan,
  hyperbolicTangent,
  errorFunction,
  algebraicSigmoid,
  softsign,
  gudermannian,
  logisticSigmoid,
  // Section 2: Two Variable Functions (Monotone, Limited, Symmetric)
  arctan2D,
  additiveTanh,
  sigmoidSurface,
  normalizedSumTanh,
  bivariateSigmoid,
  productSoftsign,
  additiveAlgebraicSigmoid,
  // Section 3: Two Variable Functions (Symmetric Only)
  diagonalSine,
  mixedProductTrig,
  rationalSaddle,
  // Section 4: Two Variable Functions (Limited & Permutation Symmetric)
  gaussianRadialBasis,
  multiplicativeTanh,
  cosineProduct,
  inverseQuadratic,
  sineProductAbs,
  cauchyBivariate,
  mexicanHat,
  inverseMultiquadric,
} from '../../src/utils/symmetric-math-functions';

describe('Symmetric Mathematical Functions', () => {
  // ============================================================================
  // SECTION 1: SINGLE VARIABLE FUNCTIONS
  // ============================================================================
  describe('Section 1: Single Variable Functions (Monotone, Limited, Symmetric)', () => {
    const testValues = [-10, -5, -1, -0.5, 0, 0.5, 1, 5, 10];

    describe('arctan', () => {
      it('should return values in range (-π/2, π/2)', () => {
        testValues.forEach(x => {
          const result = arctan(x);
          expect(result).toBeGreaterThan(-Math.PI / 2);
          expect(result).toBeLessThan(Math.PI / 2);
        });
      });

      it('should be an odd function: f(-x) = -f(x)', () => {
        testValues.forEach(x => {
          expect(arctan(-x)).toBeCloseTo(-arctan(x), 10);
        });
      });

      it('should be monotonically increasing', () => {
        for (let i = 0; i < testValues.length - 1; i++) {
          expect(arctan(testValues[i + 1])).toBeGreaterThan(arctan(testValues[i]));
        }
      });

      it('should return 0 for input 0', () => {
        expect(arctan(0)).toBe(0);
      });
    });

    describe('hyperbolicTangent', () => {
      it('should return values in range (-1, 1)', () => {
        testValues.forEach(x => {
          const result = hyperbolicTangent(x);
          expect(result).toBeGreaterThan(-1);
          expect(result).toBeLessThan(1);
        });
      });

      it('should be an odd function: f(-x) = -f(x)', () => {
        testValues.forEach(x => {
          expect(hyperbolicTangent(-x)).toBeCloseTo(-hyperbolicTangent(x), 10);
        });
      });

      it('should be monotonically increasing', () => {
        for (let i = 0; i < testValues.length - 1; i++) {
          expect(hyperbolicTangent(testValues[i + 1])).toBeGreaterThan(hyperbolicTangent(testValues[i]));
        }
      });

      it('should return 0 for input 0', () => {
        expect(hyperbolicTangent(0)).toBe(0);
      });
    });

    describe('errorFunction', () => {
      it('should return values in range [-1, 1]', () => {
        testValues.forEach(x => {
          const result = errorFunction(x);
          expect(result).toBeGreaterThanOrEqual(-1);
          expect(result).toBeLessThanOrEqual(1);
        });
      });

      it('should be an odd function: f(-x) = -f(x)', () => {
        testValues.forEach(x => {
          expect(errorFunction(-x)).toBeCloseTo(-errorFunction(x), 5);
        });
      });

      it('should be monotonically increasing', () => {
        for (let i = 0; i < testValues.length - 1; i++) {
          expect(errorFunction(testValues[i + 1])).toBeGreaterThan(errorFunction(testValues[i]));
        }
      });

      it('should return approximately 0 for input 0', () => {
        expect(errorFunction(0)).toBeCloseTo(0, 5);
      });
    });

    describe('algebraicSigmoid', () => {
      it('should return values in range (-1, 1)', () => {
        testValues.forEach(x => {
          const result = algebraicSigmoid(x);
          expect(result).toBeGreaterThan(-1);
          expect(result).toBeLessThan(1);
        });
      });

      it('should be an odd function: f(-x) = -f(x)', () => {
        testValues.forEach(x => {
          expect(algebraicSigmoid(-x)).toBeCloseTo(-algebraicSigmoid(x), 10);
        });
      });

      it('should be monotonically increasing', () => {
        for (let i = 0; i < testValues.length - 1; i++) {
          expect(algebraicSigmoid(testValues[i + 1])).toBeGreaterThan(algebraicSigmoid(testValues[i]));
        }
      });

      it('should return 0 for input 0', () => {
        expect(algebraicSigmoid(0)).toBe(0);
      });
    });

    describe('softsign', () => {
      it('should return values in range (-1, 1)', () => {
        testValues.forEach(x => {
          const result = softsign(x);
          expect(result).toBeGreaterThan(-1);
          expect(result).toBeLessThan(1);
        });
      });

      it('should be an odd function: f(-x) = -f(x)', () => {
        testValues.forEach(x => {
          expect(softsign(-x)).toBeCloseTo(-softsign(x), 10);
        });
      });

      it('should be monotonically increasing', () => {
        for (let i = 0; i < testValues.length - 1; i++) {
          expect(softsign(testValues[i + 1])).toBeGreaterThan(softsign(testValues[i]));
        }
      });

      it('should return 0 for input 0', () => {
        expect(softsign(0)).toBe(0);
      });
    });

    describe('gudermannian', () => {
      it('should return values in range (-π/2, π/2)', () => {
        testValues.forEach(x => {
          const result = gudermannian(x);
          expect(result).toBeGreaterThan(-Math.PI / 2);
          expect(result).toBeLessThan(Math.PI / 2);
        });
      });

      it('should be an odd function: f(-x) = -f(x)', () => {
        testValues.forEach(x => {
          expect(gudermannian(-x)).toBeCloseTo(-gudermannian(x), 10);
        });
      });

      it('should be monotonically increasing', () => {
        for (let i = 0; i < testValues.length - 1; i++) {
          expect(gudermannian(testValues[i + 1])).toBeGreaterThan(gudermannian(testValues[i]));
        }
      });

      it('should return 0 for input 0', () => {
        expect(gudermannian(0)).toBeCloseTo(0, 10);
      });
    });

    describe('logisticSigmoid', () => {
      it('should return values in range (-1, 1)', () => {
        testValues.forEach(x => {
          const result = logisticSigmoid(x);
          expect(result).toBeGreaterThan(-1);
          expect(result).toBeLessThan(1);
        });
      });

      it('should be an odd function: f(-x) = -f(x)', () => {
        testValues.forEach(x => {
          expect(logisticSigmoid(-x)).toBeCloseTo(-logisticSigmoid(x), 10);
        });
      });

      it('should be monotonically increasing', () => {
        for (let i = 0; i < testValues.length - 1; i++) {
          expect(logisticSigmoid(testValues[i + 1])).toBeGreaterThan(logisticSigmoid(testValues[i]));
        }
      });

      it('should return 0 for input 0', () => {
        expect(logisticSigmoid(0)).toBeCloseTo(0, 10);
      });
    });
  });

  // ============================================================================
  // SECTION 2: TWO VARIABLE FUNCTIONS (Monotone, Limited, Symmetric)
  // ============================================================================
  describe('Section 2: Two Variable Functions (Monotone, Limited, Symmetric)', () => {
    const testPairs = [
      [-5, -5], [-2, -1], [-1, 0], [0, 0], [0, 1], [1, 2], [5, 5]
    ];

    describe('arctan2D', () => {
      it('should return values in range (-π/2, π/2)', () => {
        testPairs.forEach(([x, y]) => {
          const result = arctan2D(x, y);
          expect(result).toBeGreaterThan(-Math.PI / 2);
          expect(result).toBeLessThan(Math.PI / 2);
        });
      });

      it('should satisfy odd symmetry: f(-x, -y) = -f(x, y)', () => {
        testPairs.forEach(([x, y]) => {
          expect(arctan2D(-x, -y)).toBeCloseTo(-arctan2D(x, y), 10);
        });
      });

      it('should return 0 for (0, 0)', () => {
        expect(arctan2D(0, 0)).toBe(0);
      });
    });

    describe('additiveTanh', () => {
      it('should return values in range (-1, 1)', () => {
        testPairs.forEach(([x, y]) => {
          const result = additiveTanh(x, y);
          expect(result).toBeGreaterThan(-1);
          expect(result).toBeLessThan(1);
        });
      });

      it('should satisfy odd symmetry: f(-x, -y) = -f(x, y)', () => {
        testPairs.forEach(([x, y]) => {
          expect(additiveTanh(-x, -y)).toBeCloseTo(-additiveTanh(x, y), 10);
        });
      });

      it('should return 0 for (0, 0)', () => {
        expect(additiveTanh(0, 0)).toBe(0);
      });
    });

    describe('sigmoidSurface', () => {
      it('should return values in range (-1, 1)', () => {
        testPairs.forEach(([x, y]) => {
          const result = sigmoidSurface(x, y);
          expect(result).toBeGreaterThan(-1);
          expect(result).toBeLessThan(1);
        });
      });

      it('should satisfy odd symmetry: f(-x, -y) = -f(x, y)', () => {
        testPairs.forEach(([x, y]) => {
          expect(sigmoidSurface(-x, -y)).toBeCloseTo(-sigmoidSurface(x, y), 10);
        });
      });

      it('should return 0 for (0, 0)', () => {
        expect(sigmoidSurface(0, 0)).toBe(0);
      });
    });

    describe('normalizedSumTanh', () => {
      it('should return values in range (-1, 1)', () => {
        testPairs.forEach(([x, y]) => {
          const result = normalizedSumTanh(x, y);
          expect(result).toBeGreaterThan(-1);
          expect(result).toBeLessThan(1);
        });
      });

      it('should satisfy odd symmetry: f(-x, -y) = -f(x, y)', () => {
        testPairs.forEach(([x, y]) => {
          expect(normalizedSumTanh(-x, -y)).toBeCloseTo(-normalizedSumTanh(x, y), 10);
        });
      });

      it('should return 0 for (0, 0)', () => {
        expect(normalizedSumTanh(0, 0)).toBe(0);
      });
    });

    describe('bivariateSigmoid', () => {
      it('should return values in range (-1, 1)', () => {
        testPairs.forEach(([x, y]) => {
          const result = bivariateSigmoid(x, y);
          expect(result).toBeGreaterThan(-1);
          expect(result).toBeLessThan(1);
        });
      });

      it('should satisfy odd symmetry: f(-x, -y) = -f(x, y)', () => {
        testPairs.forEach(([x, y]) => {
          expect(bivariateSigmoid(-x, -y)).toBeCloseTo(-bivariateSigmoid(x, y), 10);
        });
      });

      it('should return 0 for (0, 0)', () => {
        expect(bivariateSigmoid(0, 0)).toBeCloseTo(0, 10);
      });
    });

    describe('productSoftsign', () => {
      it('should return values in range (-1, 1)', () => {
        testPairs.forEach(([x, y]) => {
          const result = productSoftsign(x, y);
          expect(result).toBeGreaterThan(-1);
          expect(result).toBeLessThan(1);
        });
      });

      it('should satisfy odd symmetry: f(-x, -y) = -f(x, y)', () => {
        testPairs.forEach(([x, y]) => {
          expect(productSoftsign(-x, -y)).toBeCloseTo(-productSoftsign(x, y), 5);
        });
      });

      it('should return 0 for (0, 0)', () => {
        expect(productSoftsign(0, 0)).toBe(0);
      });
    });

    describe('additiveAlgebraicSigmoid', () => {
      it('should return values in range (-1, 1)', () => {
        testPairs.forEach(([x, y]) => {
          const result = additiveAlgebraicSigmoid(x, y);
          expect(result).toBeGreaterThan(-1);
          expect(result).toBeLessThan(1);
        });
      });

      it('should satisfy odd symmetry: f(-x, -y) = -f(x, y)', () => {
        testPairs.forEach(([x, y]) => {
          expect(additiveAlgebraicSigmoid(-x, -y)).toBeCloseTo(-additiveAlgebraicSigmoid(x, y), 10);
        });
      });

      it('should return 0 for (0, 0)', () => {
        expect(additiveAlgebraicSigmoid(0, 0)).toBe(0);
      });
    });
  });

  // ============================================================================
  // SECTION 3: TWO VARIABLE FUNCTIONS (Symmetric Only)
  // ============================================================================
  describe('Section 3: Two Variable Functions (Symmetric Only)', () => {
    const testPairs = [
      { x: 0, y: 0 },
      { x: 1, y: 1 },
      { x: -1, y: -1 },
      { x: 100, y: -50 },
      { x: -1000, y: 1000 }
    ];

    describe('diagonalSine', () => {
      it('should be bounded within [-1, 1]', () => {
        testPairs.forEach(({ x, y }) => {
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
        testPairs.forEach(({ x, y }) => {
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
        testPairs.forEach(({ x, y }) => {
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

  // ============================================================================
  // SECTION 4: TWO VARIABLE FUNCTIONS (Limited & Permutation Symmetric)
  // ============================================================================
  describe('Section 4: Two Variable Functions (Limited & Permutation Symmetric)', () => {
    const testPairs = [
      { x: 0, y: 0 },
      { x: 1, y: 1 },
      { x: -1, y: -1 },
      { x: 100, y: -50 },
      { x: -1000, y: 1000 }
    ];

    describe('gaussianRadialBasis', () => {
      it('should be bounded within [0, 1]', () => {
        testPairs.forEach(({ x, y }) => {
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
        testPairs.forEach(({ x, y }) => {
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
        testPairs.forEach(({ x, y }) => {
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
        testPairs.forEach(({ x, y }) => {
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

    describe('sineProductAbs', () => {
      it('should be bounded within [0, 1]', () => {
        testPairs.forEach(({ x, y }) => {
          const result = sineProductAbs(x, y);
          expect(result).toBeGreaterThanOrEqual(0);
          expect(result).toBeLessThanOrEqual(1);
        });
      });
      it('should be symmetric: f(x, y) = f(y, x)', () => {
        const result1 = sineProductAbs(2, 5);
        const result2 = sineProductAbs(5, 2);
        expect(result1).toBe(result2);
      });
      it('should return 0 when either input is 0', () => {
        expect(sineProductAbs(0, 5)).toBe(0);
        expect(sineProductAbs(5, 0)).toBe(0);
      });
    });

    describe('cauchyBivariate', () => {
      it('should be bounded within (0, 1]', () => {
        testPairs.forEach(({ x, y }) => {
          const result = cauchyBivariate(x, y);
          expect(result).toBeGreaterThan(0);
          expect(result).toBeLessThanOrEqual(1);
        });
      });
      it('should be symmetric: f(x, y) = f(y, x)', () => {
        const result1 = cauchyBivariate(2, 5);
        const result2 = cauchyBivariate(5, 2);
        expect(result1).toBe(result2);
      });
      it('should return 1 at origin', () => {
        expect(cauchyBivariate(0, 0)).toBe(1);
      });
      it('should decay for large values', () => {
        expect(cauchyBivariate(100, 100)).toBeLessThan(0.0001);
      });
    });

    describe('mexicanHat', () => {
      it('should be bounded', () => {
        testPairs.forEach(({ x, y }) => {
          const result = mexicanHat(x, y);
          expect(Math.abs(result)).toBeLessThan(2);
        });
      });
      it('should be symmetric: f(x, y) = f(y, x)', () => {
        const result1 = mexicanHat(2, 5);
        const result2 = mexicanHat(5, 2);
        expect(result1).toBe(result2);
      });
      it('should return 0 at origin', () => {
        expect(mexicanHat(0, 0)).toBe(0);
      });
    });

    describe('inverseMultiquadric', () => {
      it('should be bounded within (0, 1]', () => {
        testPairs.forEach(({ x, y }) => {
          const result = inverseMultiquadric(x, y);
          expect(result).toBeGreaterThan(0);
          expect(result).toBeLessThanOrEqual(1);
        });
      });
      it('should be symmetric: f(x, y) = f(y, x)', () => {
        const result1 = inverseMultiquadric(2, 5);
        const result2 = inverseMultiquadric(5, 2);
        expect(result1).toBe(result2);
      });
      it('should return 1 at origin', () => {
        expect(inverseMultiquadric(0, 0)).toBe(1);
      });
      it('should decay for large values', () => {
        expect(inverseMultiquadric(100, 100)).toBeLessThan(0.0001);
      });
    });
  });
});
