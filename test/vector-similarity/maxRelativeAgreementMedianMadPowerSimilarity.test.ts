import { describe, it, expect } from 'vitest';
import {
  maxRelativeAgreementMedianMadPowerSimilarity,
  maxRelativeAgreementMedianMadPowerSimilarityNoMad,
} from '../../src/vector-similarity/similarity/maxRelativeAgreementMedianMadPowerSimilarity';
import {
  vectorSimilarityCorrelation,
  vectorSimilarityCorrelationNoStd,
} from '../../src/vector-similarity/similarity/vectorSimilarityCorrelation';

describe('maxRelativeAgreementMedianMadPowerSimilarity', () => {
  it('should return 1 for identical vectors', () => {
    const a = [1, 2, 3];
    const b = [1, 2, 3];
    expect(maxRelativeAgreementMedianMadPowerSimilarity(a, b)).toBeCloseTo(1);
  });

  it('should return a value less than 1 for similar vectors', () => {
    const a = [1, 2, 3];
    const b = [1.1, 2.2, 3.3];
    expect(maxRelativeAgreementMedianMadPowerSimilarity(a, b)).toBeLessThan(1);
  });

  it('should return 0 for opposite vectors', () => {
    const a = [1, 2, 3];
    const b = [-1, -2, -3];
    expect(maxRelativeAgreementMedianMadPowerSimilarity(a, b)).toBeCloseTo(0);
  });

  it('should handle zero vectors', () => {
    const a = [0, 0, 0];
    const b = [0, 0, 0];
    expect(maxRelativeAgreementMedianMadPowerSimilarity(a, b)).toBe(1);
  });

  it('should return 1 for empty vectors', () => {
    expect(maxRelativeAgreementMedianMadPowerSimilarity([], [])).toBe(1);
  });

  it('should throw for vectors of different lengths', () => {
    const a = [1, 2];
    const b = [1, 2, 3];
    expect(() => maxRelativeAgreementMedianMadPowerSimilarity(a, b)).toThrow(
      'Invalid input: A and B must be arrays of the same length'
    );
  });

  it('should handle single-element vectors', () => {
    expect(maxRelativeAgreementMedianMadPowerSimilarity([5], [5])).toBe(1);
  });

  it('should handle vectors with negative values', () => {
    const a = [-1, -2, -3];
    const b = [-1, -2, -3];
    expect(maxRelativeAgreementMedianMadPowerSimilarity(a, b)).toBeCloseTo(1);
  });
});

describe('maxRelativeAgreementMedianMadPowerSimilarityNoMad', () => {
  it('should return 1 for identical vectors', () => {
    const a = [1, 2, 3];
    const b = [1, 2, 3];
    expect(maxRelativeAgreementMedianMadPowerSimilarityNoMad(a, b)).toBeCloseTo(1);
  });

  it('should match madWeight=0 variant', () => {
    const a = [1, 2, 3];
    const b = [1.1, 2.2, 3.3];
    expect(maxRelativeAgreementMedianMadPowerSimilarityNoMad(a, b)).toBeCloseTo(
      maxRelativeAgreementMedianMadPowerSimilarity(a, b, 0)
    );
  });

  it('should differ from default madWeight when MAD is non-zero', () => {
    const a = [10, 8, 6, 4];
    const b = [10, 10, 10, 10];
    const withMad = maxRelativeAgreementMedianMadPowerSimilarity(a, b);
    const noMad = maxRelativeAgreementMedianMadPowerSimilarityNoMad(a, b);
    expect(withMad).not.toBeCloseTo(noMad);
  });

  it('should differ from mean/std correlation on skewed agreement vectors', () => {
    const a = [10, 8, 6, 4];
    const b = [10, 10, 10, 10];
    const medianMad = maxRelativeAgreementMedianMadPowerSimilarity(a, b);
    const meanStd = vectorSimilarityCorrelation(a, b);
    expect(medianMad).not.toBeCloseTo(meanStd);
  });

  it('can match correlation no-std when median equals mean', () => {
    const a = [1, 2, 3];
    const b = [1.1, 2.2, 3.3];
    const noMad = maxRelativeAgreementMedianMadPowerSimilarityNoMad(a, b);
    const corrNoStd = vectorSimilarityCorrelationNoStd(a, b);
    expect(noMad).toBeCloseTo(corrNoStd);
  });
});
