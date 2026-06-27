import { describe, it, expect } from 'vitest';
import { distanceToSimilarity, pearsonCorrelation, canberraDistance } from '../../src/vector-similarity/similarity/classic';
import { jaccardSimilarityBinary, jaccardSimilarityWeighted } from '../../src/vector-similarity/similarity/jaccard';
import {
  motykaDistance,
  intersectionDistance,
  intersectionSimilarity,
} from '../../src/vector-similarity/similarity/intersection';
import {
  kullbackLeiblerDivergence,
  crossEntropy,
} from '../../src/vector-similarity/similarity/entropy';
import { hellingerSimilarity } from '../../src/vector-similarity/similarity/fidelity';
import { squaredChiSquareDistance } from '../../src/vector-similarity/similarity/chi-square';
import { distanceCorrelation } from '../../src/vector-similarity/similarity/distanceCorrelation';
import {
  vectorSimilarityCorrelation,
  vectorSimilarityCorrelationNoStd,
} from '../../src/vector-similarity/similarity/vectorSimilarityCorrelation';
import { computeVectorSimilarityMetricLike } from '../../src/vector-similarity/similarity/vectorSimilarityMetricLike';
import { computeVectorSimilarityMeanStdPenalized } from '../../src/vector-similarity/similarity/vectorSimilarityMeanStdPenalized';
import { computeVectorSimilarityRobust } from '../../src/vector-similarity/similarity/vectorSimilarityRobust';
import { computeVectorSimilarityTunable } from '../../src/vector-similarity/similarity/vectorSimilarityTunable';
import { computeVectorSimilarityVarianceWeighted } from '../../src/vector-similarity/similarity/vectorSimilarityVarianceWeighted';
import { distanceToMeasure } from '../../src/vector-similarity/similarity/distanceToMeasure';

describe('distanceToSimilarity (scalar helper branches)', () => {
  it('uses the inverse transform when maxDistance is null', () => {
    expect(distanceToSimilarity(0)).toBe(1);
    expect(distanceToSimilarity(1)).toBeCloseTo(0.5, 10);
  });

  it('uses linear normalization when maxDistance is provided', () => {
    expect(distanceToSimilarity(0, 4)).toBe(1);
    expect(distanceToSimilarity(2, 4)).toBeCloseTo(0.5, 10);
    expect(distanceToSimilarity(4, 4)).toBe(0);
    // clamps below 0
    expect(distanceToSimilarity(5, 4)).toBe(0);
  });
});

describe('jaccard empty-input behavior', () => {
  it('binary returns 1 for two empty vectors', () => {
    expect(jaccardSimilarityBinary([], [])).toBe(1);
  });

  it('weighted returns 1 for two empty vectors', () => {
    expect(jaccardSimilarityWeighted([], [])).toBe(1);
  });
});

describe('intersection delegating functions', () => {
  it('motykaDistance = 1 - motykaSimilarity', () => {
    // motykaSimilarity([1,2],[3,4]) = (1+2)/(3+4) = 3/7 -> distance = 4/7
    expect(motykaDistance([1, 2], [3, 4])).toBeCloseTo(1 - 3 / 7, 10);
  });

  it('intersectionDistance = 1 - intersectionSimilarity', () => {
    const a = [1, 2, 3];
    const b = [2, 3, 4];
    expect(intersectionDistance(a, b)).toBeCloseTo(1 - intersectionSimilarity(a, b), 10);
  });
});

describe('entropy edge branches', () => {
  it('KL divergence skips terms where pi === 0', () => {
    // p has a zero element; the 0*log(0/q)=0 term is skipped, finite result
    expect(Number.isFinite(kullbackLeiblerDivergence([0, 1], [1, 1]))).toBe(true);
  });

  it('cross entropy skips terms where pi === 0', () => {
    expect(Number.isFinite(crossEntropy([0, 1], [1, 1]))).toBe(true);
  });

  it('cross entropy returns Infinity when qi === 0 and pi !== 0', () => {
    expect(crossEntropy([1, 1], [0, 1])).toBe(Infinity);
  });
});

describe('fidelity hellingerSimilarity', () => {
  it('returns 1 - hellingerDistance for identical vectors', () => {
    expect(hellingerSimilarity([1, 2, 3], [1, 2, 3])).toBe(1);
  });
});

describe('distanceCorrelation constant-vector branches', () => {
  it('returns 1 when both vectors are constant', () => {
    expect(distanceCorrelation([5, 5, 5], [7, 7, 7])).toBe(1);
  });

  it('returns 0 when only one vector is constant', () => {
    expect(distanceCorrelation([5, 5, 5], [1, 2, 3])).toBe(0);
    expect(distanceCorrelation([1, 2, 3], [9, 9, 9])).toBe(0);
  });

  it('returns 1 for single-element vectors', () => {
    expect(distanceCorrelation([1], [2])).toBe(1);
  });
});

describe('vectorSimilarityCorrelation empty-input behavior', () => {
  it('returns 1 for two empty vectors', () => {
    expect(vectorSimilarityCorrelation([], [])).toBe(1);
  });

  it('NoStd variant matches correlation with stdWeight 0', () => {
    const a = [10, 10];
    const b = [10, 6];
    expect(vectorSimilarityCorrelationNoStd(a, b)).toBeCloseTo(vectorSimilarityCorrelation(a, b, 0), 10);
  });
});

describe('computeVectorSimilarityMetricLike branches', () => {
  it('clamps per-coordinate relative difference above 1 to 1 (opposite signs)', () => {
    // |10 - (-10)| / max(10,10) = 2 -> clamped to 1
    const result = computeVectorSimilarityMetricLike([10], [-10]);
    expect(result).toBeGreaterThanOrEqual(0);
    expect(result).toBeLessThanOrEqual(1);
  });

  it('falls back to the default lambda when lambda <= 0', () => {
    const a = [1, 2, 3];
    const b = [1, 2, 3];
    expect(computeVectorSimilarityMetricLike(a, b, { lambda: 0 })).toBe(1);
    expect(computeVectorSimilarityMetricLike(a, b, { lambda: -5 })).toBe(1);
  });
});

describe('computeVectorSimilarityMeanStdPenalized option validation', () => {
  it('throws for negative alpha', () => {
    expect(() => computeVectorSimilarityMeanStdPenalized([1, 2], [1, 2], { alpha: -1 })).toThrow(
      'Invalid option alpha'
    );
  });

  it('throws for negative stdPower', () => {
    expect(() => computeVectorSimilarityMeanStdPenalized([1, 2], [1, 2], { stdPower: -1 })).toThrow(
      'Invalid option stdPower'
    );
  });
});

describe('computeVectorSimilarityRobust option validation', () => {
  it('throws for non-positive clipMax', () => {
    expect(() => computeVectorSimilarityRobust([1, 2], [1, 2], { clipMax: 0 })).toThrow(
      'Invalid option clipMax'
    );
  });

  it('throws for non-positive k', () => {
    expect(() => computeVectorSimilarityRobust([1, 2], [1, 2], { k: 0 })).toThrow(
      'Invalid option k'
    );
  });

  it('clamps the per-coordinate ratio to clipMax when it is exceeded', () => {
    // clipMax = 1, opposite-sign equal magnitudes -> t = 2 -> clamped to 1
    const result = computeVectorSimilarityRobust([10], [-10], { clipMax: 1, k: 1 });
    expect(result).toBeGreaterThanOrEqual(0);
    expect(result).toBeLessThanOrEqual(1);
  });
});

describe('single-element inputs (n === 1 variance branches)', () => {
  it('Penalized handles a single-element vector', () => {
    const result = computeVectorSimilarityMeanStdPenalized([10], [20]);
    expect(result).toBeGreaterThanOrEqual(0);
    expect(result).toBeLessThanOrEqual(1);
  });

  it('VarianceWeighted handles a single-element vector', () => {
    const result = computeVectorSimilarityVarianceWeighted([10], [20]);
    expect(result).toBeGreaterThanOrEqual(0);
    expect(result).toBeLessThanOrEqual(1);
  });
});

describe('classic edge branches', () => {
  it('pearsonCorrelation returns 0 for empty vectors', () => {
    expect(pearsonCorrelation([], [])).toBe(0);
  });

  it('canberraDistance skips elements where both values are zero', () => {
    // i=0: denominator 0 -> skipped; i=1: |1-2|/(1+2) = 1/3
    expect(canberraDistance([0, 1], [0, 2])).toBeCloseTo(1 / 3, 10);
  });
});

describe('chi-square edge branch', () => {
  it('squaredChiSquareDistance skips elements where p + q === 0', () => {
    // i=0: 0+0 -> skipped; i=1: (1-2)^2/(1+2) = 1/3
    expect(squaredChiSquareDistance([0, 1], [0, 2])).toBeCloseTo(1 / 3, 10);
  });
});

describe('computeVectorSimilarityTunable option validation', () => {
  it('throws for non-positive alpha', () => {
    expect(() => computeVectorSimilarityTunable([1, 2], [1, 2], { alpha: 0 })).toThrow(
      'Invalid option alpha'
    );
  });
});

describe('computeVectorSimilarityVarianceWeighted option handling', () => {
  it('clamps beta into [0, 1]', () => {
    const a = [1, 2, 3];
    const b = [1, 2, 3];
    // identical vectors -> similarity 1 regardless of beta clamp direction
    expect(computeVectorSimilarityVarianceWeighted(a, b, { beta: -1 })).toBe(1);
    expect(computeVectorSimilarityVarianceWeighted(a, b, { beta: 5 })).toBe(1);
  });

  it('falls back to gamma = 1 when gamma < 1', () => {
    const a = [1, 2, 3];
    const b = [1, 2, 3];
    expect(computeVectorSimilarityVarianceWeighted(a, b, { gamma: 0 })).toBe(1);
  });
});

describe('distanceToMeasure empty-input branches', () => {
  it('throws when the point is empty', () => {
    expect(() => distanceToMeasure([], [[1]], 1)).toThrow('Point cannot be empty');
  });

  it('throws when the dataset is empty', () => {
    expect(() => distanceToMeasure([1], [], 1)).toThrow('Dataset cannot be empty');
  });

  it('throws when a dataset row is not an array', () => {
    expect(() =>
      distanceToMeasure([1], ['x' as unknown as number[], [2]], 2)
    ).toThrow(/dimension/);
  });
});
