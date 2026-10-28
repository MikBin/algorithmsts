import { describe, it, expect } from 'vitest';
import {
  computeVectorSimilarityMeanStdPenalized,
} from '../../src/vector-similarity/similarity/vectorSimilarityMeanStdPenalized';
import { madPenalizedRelativeAgreementSimilarity } from '../../src/vector-similarity/similarity/madPenalizedRelativeAgreementSimilarity';
import {
  maxRelativeAgreementMedianMadPowerSimilarity,
  maxRelativeAgreementMedianMadPowerSimilarityNoMad,
} from '../../src/vector-similarity/similarity/maxRelativeAgreementMedianMadPowerSimilarity';
import { vectorSimilarityCorrelation } from '../../src/vector-similarity/similarity/vectorSimilarityCorrelation';
import { computeVectorSimilarityRobust } from '../../src/vector-similarity/similarity/vectorSimilarityRobust';
import { vectorSimilarityMeanStdPowerArithmeticMean } from '../../src/vector-similarity/similarity/vectorSimilarityMeanStdPowerArithmeticMean';
import { computeVectorSimilarityMetricLike } from '../../src/vector-similarity/similarity/vectorSimilarityMetricLike';
import { computeVectorSimilarityTunable } from '../../src/vector-similarity/similarity/vectorSimilarityTunable';
import { computeVectorSimilarityVarianceWeighted } from '../../src/vector-similarity/similarity/vectorSimilarityVarianceWeighted';

describe('Custom Similarities', () => {
  const identicalVecA = [1, 2, 3, 4, 5];
  const identicalVecB = [1, 2, 3, 4, 5];

  const zeroVecA = [0, 0, 0, 0, 0];
  const zeroVecB = [0, 0, 0, 0, 0];

  describe('computeVectorSimilarityMeanStdPenalized', () => {
    it('should compute similarity for identical vectors accurately', () => {
      expect(computeVectorSimilarityMeanStdPenalized(identicalVecA, identicalVecB).toFixed(4)).toBe('1.0000');
    });

    it('should compute similarity for zero vectors accurately', () => {
      expect(computeVectorSimilarityMeanStdPenalized(zeroVecA, zeroVecB).toFixed(4)).toBe('1.0000');
    });
  });

  describe('vectorSimilarityCorrelation', () => {
    it('should compute similarity for identical vectors accurately', () => {
      expect(vectorSimilarityCorrelation(identicalVecA, identicalVecB).toFixed(4)).toBe('1.0000');
    });

    it('should compute similarity for zero vectors accurately', () => {
      expect(vectorSimilarityCorrelation(zeroVecA, zeroVecB).toFixed(4)).toBe('1.0000');
    });
  });

  describe('computeVectorSimilarityRobust', () => {
    it('should compute similarity for identical vectors accurately', () => {
      expect(computeVectorSimilarityRobust(identicalVecA, identicalVecB).toFixed(4)).toBe('1.0000');
    });

    it('should compute similarity for zero vectors accurately', () => {
      expect(computeVectorSimilarityRobust(zeroVecA, zeroVecB).toFixed(4)).toBe('1.0000');
    });
  });

  describe('vectorSimilarityMeanStdPowerArithmeticMean', () => {
    it('should compute similarity for identical vectors accurately', () => {
      expect(vectorSimilarityMeanStdPowerArithmeticMean(identicalVecA, identicalVecB).toFixed(4)).toBe('1.0000');
    });

    it('should compute similarity for zero vectors accurately', () => {
      expect(vectorSimilarityMeanStdPowerArithmeticMean(zeroVecA, zeroVecB).toFixed(4)).toBe('1.0000');
    });
  });

  describe('computeVectorSimilarityMetricLike', () => {
    it('should compute similarity for identical vectors accurately', () => {
      expect(computeVectorSimilarityMetricLike(identicalVecA, identicalVecB).toFixed(4)).toBe('1.0000');
    });

    it('should compute similarity for zero vectors accurately', () => {
      expect(computeVectorSimilarityMetricLike(zeroVecA, zeroVecB).toFixed(4)).toBe('1.0000');
    });
  });

  describe('computeVectorSimilarityTunable', () => {
    it('should compute similarity for identical vectors accurately', () => {
      expect(computeVectorSimilarityTunable(identicalVecA, identicalVecB).toFixed(4)).toBe('1.0000');
    });

    it('should compute similarity for zero vectors accurately', () => {
      expect(computeVectorSimilarityTunable(zeroVecA, zeroVecB).toFixed(4)).toBe('1.0000');
    });
  });

  describe('computeVectorSimilarityVarianceWeighted', () => {
    it('should compute similarity for identical vectors accurately', () => {
      expect(computeVectorSimilarityVarianceWeighted(identicalVecA, identicalVecB).toFixed(4)).toBe('1.0000');
    });

    it('should compute similarity for zero vectors accurately', () => {
      expect(computeVectorSimilarityVarianceWeighted(zeroVecA, zeroVecB).toFixed(4)).toBe('1.0000');
    });
  });

  describe('madPenalizedRelativeAgreementSimilarity', () => {
    it('should compute similarity for identical vectors accurately', () => {
      expect(madPenalizedRelativeAgreementSimilarity(identicalVecA, identicalVecB).toFixed(4)).toBe('1.0000');
    });

    it('should compute similarity for zero vectors accurately', () => {
      expect(madPenalizedRelativeAgreementSimilarity(zeroVecA, zeroVecB).toFixed(4)).toBe('1.0000');
    });
  });

  describe('maxRelativeAgreementMedianMadPowerSimilarity', () => {
    it('should compute similarity for identical vectors accurately', () => {
      expect(maxRelativeAgreementMedianMadPowerSimilarity(identicalVecA, identicalVecB).toFixed(4)).toBe('1.0000');
    });

    it('should compute similarity for zero vectors accurately', () => {
      expect(maxRelativeAgreementMedianMadPowerSimilarity(zeroVecA, zeroVecB).toFixed(4)).toBe('1.0000');
    });
  });

  describe('maxRelativeAgreementMedianMadPowerSimilarityNoMad', () => {
    it('should compute similarity for identical vectors accurately', () => {
      expect(maxRelativeAgreementMedianMadPowerSimilarityNoMad(identicalVecA, identicalVecB).toFixed(4)).toBe('1.0000');
    });

    it('should compute similarity for zero vectors accurately', () => {
      expect(maxRelativeAgreementMedianMadPowerSimilarityNoMad(zeroVecA, zeroVecB).toFixed(4)).toBe('1.0000');
    });
  });
});
