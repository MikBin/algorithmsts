import { describe, it, expect } from 'vitest';
import {
  VectorGenerationService,
  type GeneratorType,
  type NoiseType,
} from '../../tools/vector-similarity/vectorGenerationService';

/** Deterministic linear congruential generator seeded by an integer. */
function makeSeededRng(seed: number): () => number {
  let s = seed >>> 0;
  return () => {
    s = (Math.imul(s, 1664525) + 1013904223) >>> 0;
    return s / 4294967296;
  };
}

/** RNG that returns values from a fixed script, cycling. */
function scriptedRng(...values: number[]): () => number {
  let i = 0;
  return () => values[i++ % values.length];
}

const allGeneratorTypes: GeneratorType[] = [
  'quadratic', 'cubic', 'exponential', 'logarithmic', 'sqrt',
  'sin', 'cos', 'tan', 'csc', 'sec', 'cot',
  'asin', 'acos', 'atan',
  'sinh', 'cosh', 'tanh',
  'circle', 'ellipse', 'spiral_archimedean', 'spiral_logarithmic',
  'lemniscate', 'rose', 'cardioid', 'lissajous',
  'sphere', 'toroid', 'helix',
];

const allNoiseTypes: NoiseType[] = ['gaussian', 'uniform', 'impulsive'];

describe('VectorGenerationService', () => {
  describe('determinism', () => {
    it('produces identical output for the same seed and params', () => {
      const params = { type: 'quadratic' as GeneratorType, size: 20, noiseSettings: { type: 'gaussian' as NoiseType, level: 0.5 } };
      const a = new VectorGenerationService(makeSeededRng(42)).generateVectorPair(params);
      const b = new VectorGenerationService(makeSeededRng(42)).generateVectorPair(params);
      expect(b.vecA).toEqual(a.vecA);
      expect(b.vecB).toEqual(a.vecB);
      expect(b.label).toBe(a.label);
    });

    it('produces different noisy output for different seeds', () => {
      const params = { type: 'sin' as GeneratorType, size: 50, noiseSettings: { type: 'uniform' as NoiseType, level: 1 } };
      const a = new VectorGenerationService(makeSeededRng(1)).generateVectorPair(params);
      const b = new VectorGenerationService(makeSeededRng(2)).generateVectorPair(params);
      expect(a.vecA).toEqual(b.vecA); // ideal is seed-independent
      expect(a.vecB).not.toEqual(b.vecB); // noisy differs by seed
    });

    it('keeps vecA equal to the ideal (seed-independent) when no noise', () => {
      const params = { type: 'cubic' as GeneratorType, size: 15 };
      const a = new VectorGenerationService(makeSeededRng(1)).generateVectorPair(params);
      const b = new VectorGenerationService(makeSeededRng(99)).generateVectorPair(params);
      expect(a.vecA).toEqual(b.vecA);
      expect(a.vecB).toEqual(a.vecA); // no noise -> vecB === vecA
    });
  });

  describe('all generator types run and are well-formed', () => {
    for (const type of allGeneratorTypes) {
      it(`generates a valid pair for type "${type}"`, () => {
        const { vecA, vecB, label } = new VectorGenerationService(makeSeededRng(7)).generateVectorPair({
          type,
          size: 16,
          noiseSettings: { type: 'uniform', level: 0.1 },
        });
        expect(vecA.length).toBeGreaterThan(0);
        expect(vecB.length).toBe(vecA.length);
        expect(label).toContain(type);
        for (const v of vecA) expect(Number.isFinite(v)).toBe(true);
      });
    }
  });

  describe('noise types', () => {
    for (const noiseType of allNoiseTypes) {
      it(`applies "${noiseType}" noise and preserves vector length`, () => {
        const clean = new VectorGenerationService(makeSeededRng(3)).generateVectorPair({ type: 'sin', size: 30 });
        const noisy = new VectorGenerationService(makeSeededRng(3)).generateVectorPair({
          type: 'sin',
          size: 30,
          noiseSettings: { type: noiseType, level: 2, probability: 0.5 },
        });
        expect(noisy.vecB.length).toBe(clean.vecA.length);
        expect(noisy.vecB).not.toEqual(clean.vecA);
      });
    }

    it('impulsive: does not modify a value when the probability roll fails', () => {
      const svc = new VectorGenerationService(scriptedRng(0.9));
      const { vecB } = svc.generateVectorPair({
        type: 'quadratic',
        size: 5,
        noiseSettings: { type: 'impulsive', level: 100, probability: 0.05 },
      });
      // 0.9 >= 0.05 for every element -> no impulse applied
      const { vecA } = new VectorGenerationService(scriptedRng(0.9)).generateVectorPair({ type: 'quadratic', size: 5 });
      expect(vecB).toEqual(vecA);
    });

    it('impulsive: applies a negative impulse when the sign roll is low', () => {
      const svc = new VectorGenerationService(scriptedRng(0.0, 0.0));
      const ideal = new VectorGenerationService(scriptedRng(0.9)).generateVectorPair({ type: 'quadratic', size: 5 });
      const { vecB } = svc.generateVectorPair({
        type: 'quadratic',
        size: 5,
        noiseSettings: { type: 'impulsive', level: 100, probability: 0.05 },
      });
      // 0.0 < 0.05 (apply) and 0.0 < 0.5 -> sign -1 (negative impulse) for every element
      expect(vecB.every((v, i) => v === ideal.vecA[i] - 100)).toBe(true);
    });

    it('impulsive: applies a positive impulse when the sign roll is high', () => {
      const svc = new VectorGenerationService(scriptedRng(0.0, 0.9));
      const ideal = new VectorGenerationService(scriptedRng(0.9)).generateVectorPair({ type: 'quadratic', size: 5 });
      const { vecB } = svc.generateVectorPair({
        type: 'quadratic',
        size: 5,
        noiseSettings: { type: 'impulsive', level: 100, probability: 0.05 },
      });
      // 0.0 < 0.05 (apply), 0.9 >= 0.5 -> sign +1 (positive impulse)
      expect(vecB.every((v, i) => v === ideal.vecA[i] + 100)).toBe(true);
    });
  });

  describe('anomaly types', () => {
    it('peak anomaly adds intensity to at least one element', () => {
      const clean = new VectorGenerationService(makeSeededRng(5)).generateVectorPair({ type: 'sin', size: 40 });
      const peaked = new VectorGenerationService(makeSeededRng(5)).generateVectorPair({
        type: 'sin',
        size: 40,
        anomalySettings: { type: 'peak', intensity: 50, probability: 0.1 },
      });
      expect(peaked.vecB.length).toBe(clean.vecA.length);
      // some element should have increased by exactly the intensity
      const hasPeak = peaked.vecB.some((v, i) => Math.abs(v - clean.vecA[i] - 50) < 1e-9);
      expect(hasPeak).toBe(true);
    });

    it('discontinuity anomaly raises the second half by the intensity', () => {
      const clean = new VectorGenerationService(makeSeededRng(5)).generateVectorPair({ type: 'sin', size: 10 });
      const disc = new VectorGenerationService(makeSeededRng(5)).generateVectorPair({
        type: 'sin',
        size: 10,
        anomalySettings: { type: 'discontinuity', intensity: 7 },
      });
      const splitIdx = Math.floor(10 / 2);
      for (let i = 0; i < splitIdx; i++) {
        expect(disc.vecB[i]).toBe(clean.vecA[i]);
      }
      for (let i = splitIdx; i < 10; i++) {
        expect(disc.vecB[i]).toBe(clean.vecA[i] + 7);
      }
    });

    it('high_freq_oscillation anomaly perturbs every element', () => {
      const clean = new VectorGenerationService(makeSeededRng(5)).generateVectorPair({ type: 'sin', size: 10 });
      const osc = new VectorGenerationService(makeSeededRng(5)).generateVectorPair({
        type: 'sin',
        size: 10,
        anomalySettings: { type: 'high_freq_oscillation', intensity: 0.5 },
      });
      for (let i = 0; i < 10; i++) {
        expect(osc.vecB[i]).toBeCloseTo(clean.vecA[i] + Math.sin(i * 100) * 0.5, 10);
      }
    });
  });

  describe('shape parameters', () => {
    it('radius affects circle output', () => {
      const small = new VectorGenerationService(makeSeededRng(1)).generateVectorPair({ type: 'circle', size: 8, shapeParams: { radius: 1 } });
      const large = new VectorGenerationService(makeSeededRng(1)).generateVectorPair({ type: 'circle', size: 8, shapeParams: { radius: 5 } });
      expect(large.vecA.some((v, i) => Math.abs(v) > Math.abs(small.vecA[i]))).toBe(true);
    });

    it('loops affect rose output', () => {
      const a = new VectorGenerationService(makeSeededRng(1)).generateVectorPair({ type: 'rose', size: 20, shapeParams: { loops: 2 } });
      const b = new VectorGenerationService(makeSeededRng(1)).generateVectorPair({ type: 'rose', size: 20, shapeParams: { loops: 5 } });
      expect(a.vecA).not.toEqual(b.vecA);
    });

    it('a/b coefficients affect quadratic output', () => {
      const a = new VectorGenerationService(makeSeededRng(1)).generateVectorPair({ type: 'quadratic', size: 10, shapeParams: { a: 1, b: 0, c: 0 } });
      const b = new VectorGenerationService(makeSeededRng(1)).generateVectorPair({ type: 'quadratic', size: 10, shapeParams: { a: 2, b: 0, c: 0 } });
      expect(a.vecA).not.toEqual(b.vecA);
    });
  });

  describe('label', () => {
    it('includes noise and anomaly info in the label', () => {
      const { label } = new VectorGenerationService(makeSeededRng(1)).generateVectorPair({
        type: 'sin',
        size: 10,
        noiseSettings: { type: 'gaussian', level: 0.3 },
        anomalySettings: { type: 'peak', intensity: 1 },
      });
      expect(label).toContain('gaussian');
      expect(label).toContain('peak');
    });

    it('labels clean (no noise) output', () => {
      const { label } = new VectorGenerationService(makeSeededRng(1)).generateVectorPair({ type: 'sin', size: 10 });
      expect(label).toContain('Clean');
    });
  });

  describe('default constructor', () => {
    it('runs with the default Math.random generator', () => {
      const { vecA, vecB } = new VectorGenerationService().generateVectorPair({ type: 'cos', size: 12 });
      expect(vecA.length).toBe(12);
      expect(vecB.length).toBe(12);
    });
  });
});
