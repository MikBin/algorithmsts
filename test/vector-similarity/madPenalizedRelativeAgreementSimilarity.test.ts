import { describe, it, expect } from 'vitest';
import { madPenalizedRelativeAgreementSimilarity } from '../../src/vector-similarity/similarity/madPenalizedRelativeAgreementSimilarity';
import { computeVectorSimilarityMeanStdPenalized } from '../../src/vector-similarity/similarity/vectorSimilarityMeanStdPenalized';

describe('madPenalizedRelativeAgreementSimilarity', () => {
  it('should return 1 for identical vectors', () => {
    const a = [1, 2, 3, 4, 5];
    const b = [1, 2, 3, 4, 5];
    expect(madPenalizedRelativeAgreementSimilarity(a, b)).toBe(1);
  });

  it('should return 1 for zero vectors', () => {
    const a = [0, 0, 0];
    const b = [0, 0, 0];
    expect(madPenalizedRelativeAgreementSimilarity(a, b)).toBe(1);
  });

  it('should return a value in [0, 1] for similar vectors', () => {
    const a = [1, 2, 3];
    const b = [1.1, 2.2, 3.3];
    const result = madPenalizedRelativeAgreementSimilarity(a, b);
    expect(result).toBeGreaterThan(0);
    expect(result).toBeLessThanOrEqual(1);
  });

  it('should handle single-element vectors', () => {
    expect(madPenalizedRelativeAgreementSimilarity([5], [5])).toBe(1);
    expect(madPenalizedRelativeAgreementSimilarity([10], [20])).toBeGreaterThan(0);
  });

  it('should throw for vectors of different lengths', () => {
    expect(() => madPenalizedRelativeAgreementSimilarity([1, 2], [1, 2, 3])).toThrow(
      'Invalid input: A and B must be arrays of the same length'
    );
  });

  it('should throw for empty vectors', () => {
    expect(() => madPenalizedRelativeAgreementSimilarity([], [])).toThrow();
  });

  it('should reject invalid alpha', () => {
    expect(() =>
      madPenalizedRelativeAgreementSimilarity([1, 2], [1, 2], { alpha: -1 })
    ).toThrow('Invalid option alpha');
  });

  it('should reject invalid madPower', () => {
    expect(() =>
      madPenalizedRelativeAgreementSimilarity([1, 2], [1, 2], { madPower: -1 })
    ).toThrow('Invalid option madPower');
  });

  it('should be more robust than mean/std penalized when one coordinate is an outlier', () => {
    const a = [1, 1, 1, 1, 1, 1, 1, 1, 1, 100];
    const b = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];

    const madScore = madPenalizedRelativeAgreementSimilarity(a, b);
    const meanStdScore = computeVectorSimilarityMeanStdPenalized(a, b);

    expect(madScore).toBeGreaterThan(meanStdScore);
  });
});
