import { describe, expect, it } from 'vitest';
import { resizeToInterval } from '../../src/utils/range-normalization';
import {
  arctan,
  hyperbolicTangent,
  errorFunction,
  algebraicSigmoid,
  softsign,
  gudermannian,
  arctan2D,
  additiveTanh,
  sigmoidSurface,
  normalizedSumTanh,
  diagonalSine,
  mixedProductTrig,
  rationalSaddle,
} from '../../src/utils/symmetric-math-functions';

describe('resizeToInterval with Symmetric Math Functions', () => {
  const testRange = (
    fn: (x: number) => number,
    m: number,
    M: number,
    label: string
  ) => {
    it(`should map ${label} output to [0, 1]`, () => {
      for (let x = -20; x <= 20; x += 0.5) {
        const val = fn(x);
        const resized = resizeToInterval(m, M, val);
        expect(resized).toBeGreaterThanOrEqual(0);
        expect(resized).toBeLessThanOrEqual(1);
      }
    });
  };

  const testRange2D = (
    fn: (x: number, y: number) => number,
    m: number,
    M: number,
    label: string
  ) => {
    it(`should map ${label} output to [0, 1]`, () => {
      for (let x = -10; x <= 10; x += 1) {
        for (let y = -10; y <= 10; y += 1) {
          const val = fn(x, y);
          const resized = resizeToInterval(m, M, val);
          // Allow a tiny epsilon for floating point errors if strictly outside
          // but strictly speaking the request said "strict formula application"
          // and "verify results lie in [0,1]".
          // If mathematical bounds are correct, it should pass.
          expect(resized).toBeGreaterThanOrEqual(0);
          expect(resized).toBeLessThanOrEqual(1);
        }
      }
    });
  };

  // Single Variable Functions
  testRange(arctan, -Math.PI / 2, Math.PI / 2, 'arctan');
  testRange(hyperbolicTangent, -1, 1, 'hyperbolicTangent');
  testRange(errorFunction, -1, 1, 'errorFunction');
  testRange(algebraicSigmoid, -1, 1, 'algebraicSigmoid');
  testRange(softsign, -1, 1, 'softsign');
  testRange(gudermannian, -Math.PI / 2, Math.PI / 2, 'gudermannian');

  // Two Variable Functions
  testRange2D(arctan2D, -Math.PI / 2, Math.PI / 2, 'arctan2D');
  testRange2D(additiveTanh, -1, 1, 'additiveTanh');
  testRange2D(sigmoidSurface, -1, 1, 'sigmoidSurface');
  testRange2D(normalizedSumTanh, -1, 1, 'normalizedSumTanh');
  testRange2D(diagonalSine, -1, 1, 'diagonalSine');
  testRange2D(mixedProductTrig, -1, 1, 'mixedProductTrig');
  testRange2D(rationalSaddle, -Math.sqrt(2) / 2, Math.sqrt(2) / 2, 'rationalSaddle');
});
