/**
 * Service for generating vectors with non-linear relationships, complex geometries, and controlled noise.
 */

export type GeneratorType =
  | 'quadratic' | 'cubic' | 'exponential' | 'logarithmic' | 'sqrt'
  | 'sin' | 'cos' | 'tan' | 'csc' | 'sec' | 'cot'
  | 'asin' | 'acos' | 'atan'
  | 'sinh' | 'cosh' | 'tanh'
  | 'circle' | 'ellipse' | 'spiral_archimedean' | 'spiral_logarithmic'
  | 'lemniscate' | 'rose' | 'cardioid' | 'lissajous'
  | 'sphere' | 'toroid' | 'helix';

export type NoiseType = 'gaussian' | 'uniform' | 'impulsive';

export interface GenerationParams {
    type: GeneratorType;
    size: number; // Number of points
    noiseSettings?: {
        type: NoiseType;
        level: number; // stdDev for gaussian, range (+/-) for uniform, amplitude for impulsive
        probability?: number; // for impulsive
    };
    anomalySettings?: {
        type: 'peak' | 'discontinuity' | 'high_freq_oscillation';
        intensity: number; // Amplitude of the anomaly
        probability?: number; // Chance of peak occurring or location of discontinuity
    };
    shapeParams?: {
        a?: number; b?: number; c?: number; // Generic params
        radius?: number;
        loops?: number;
    };
}

export class VectorGenerationService {
  /**
   * Generates a number from a Gaussian distribution using the Box-Muller transform.
   */
  private gaussianNoise(mean: number = 0, stdDev: number = 1): number {
    const u1 = Math.random();
    const u2 = Math.random();
    const z0 = Math.sqrt(-2.0 * Math.log(u1)) * Math.cos(2.0 * Math.PI * u2);
    return z0 * stdDev + mean;
  }

  private uniformNoise(level: number): number {
    return (Math.random() - 0.5) * 2 * level;
  }

  /**
   * Applies noise to a value based on settings.
   */
  private applyNoise(value: number, settings?: GenerationParams['noiseSettings']): number {
    if (!settings) return value;

    switch (settings.type) {
        case 'gaussian':
            return value + this.gaussianNoise(0, settings.level);
        case 'uniform':
            return value + this.uniformNoise(settings.level);
        case 'impulsive':
            if (Math.random() < (settings.probability || 0.05)) {
                return value + (Math.random() < 0.5 ? -1 : 1) * settings.level;
            }
            return value;
        default:
            return value;
    }
  }

  /**
   * Applies anomalies to a vector.
   */
  private applyAnomalies(vector: number[], settings?: GenerationParams['anomalySettings']): number[] {
      if (!settings) return vector;
      const n = vector.length;
      const result = [...vector];

      if (settings.type === 'peak') {
          // Add random peaks
           const numPeaks = Math.max(1, Math.floor(n * (settings.probability || 0.01)));
           for(let i=0; i<numPeaks; i++) {
               const idx = Math.floor(Math.random() * n);
               result[idx] += settings.intensity;
           }
      } else if (settings.type === 'discontinuity') {
          // Add a step function
          const splitIdx = Math.floor(n / 2);
          for(let i=splitIdx; i<n; i++) {
              result[i] += settings.intensity;
          }
      } else if (settings.type === 'high_freq_oscillation') {
          for(let i=0; i<n; i++) {
              result[i] += Math.sin(i * 100) * settings.intensity;
          }
      }
      return result;
  }

  /**
   * Generates a base linear space.
   */
  private linspace(start: number, end: number, num: number): number[] {
      const step = (end - start) / (Math.max(1, num - 1));
      return Array.from({length: num}, (_, i) => start + i * step);
  }

  /**
   * Main generation method.
   */
  public generateVectorPair(params: GenerationParams): { vecA: number[], vecB: number[], label: string } {
      const { type, size, noiseSettings, anomalySettings, shapeParams } = params;
      const a = shapeParams?.a ?? 1;
      const b = shapeParams?.b ?? 1;
      const c = shapeParams?.c ?? 0;

      let ideal: number[] = [];
      let isParametric = false;

      // 1. Generate Ideal Vector
      if (['quadratic', 'cubic', 'exponential', 'logarithmic', 'sqrt',
           'sin', 'cos', 'tan', 'csc', 'sec', 'cot',
           'asin', 'acos', 'atan',
           'sinh', 'cosh', 'tanh'].includes(type)) {

           // 1D Mathematical Functions
           let minX = -10, maxX = 10;
           if (['logarithmic', 'sqrt'].includes(type)) { minX = 0.1; maxX = 10; }
           if (['asin', 'acos'].includes(type)) { minX = -0.99; maxX = 0.99; }
           if (type === 'exponential') { minX = 0; maxX = 5; }

           const X = this.linspace(minX, maxX, size);

           ideal = X.map(x => {
               switch(type) {
                   case 'quadratic': return a * x * x + b * x + c;
                   case 'cubic': return a * x * x * x + b * x * x + c;
                   case 'exponential': return a * Math.exp(b * x) + c;
                   case 'logarithmic': return a * Math.log(b * x) + c;
                   case 'sqrt': return a * Math.sqrt(b * x) + c;
                   case 'sin': return a * Math.sin(b * x) + c;
                   case 'cos': return a * Math.cos(b * x) + c;
                   case 'tan': return a * Math.tan(b * x) + c;
                   case 'csc': return a / Math.sin(b * x) + c;
                   case 'sec': return a / Math.cos(b * x) + c;
                   case 'cot': return a / Math.tan(b * x) + c;
                   case 'asin': return a * Math.asin(x) + c;
                   case 'acos': return a * Math.acos(x) + c;
                   case 'atan': return a * Math.atan(b * x) + c;
                   case 'sinh': return a * Math.sinh(b * x) + c;
                   case 'cosh': return a * Math.cosh(b * x) + c;
                   case 'tanh': return a * Math.tanh(b * x) + c;
                   default: return x;
               }
           });

      } else {
          isParametric = true;
          // Parametric Shapes (2D/3D)
          // We use 'size' to define resolution of t parameter

          let tMin = 0, tMax = 2 * Math.PI;
          if (type.includes('spiral')) tMax = 4 * Math.PI;
          if (type === 'helix') tMax = 6 * Math.PI;
          if (type === 'lissajous') tMax = 2 * Math.PI;

          const tVals = this.linspace(tMin, tMax, size);

          // Coordinates containers
          const coords: number[] = [];

          tVals.forEach(t => {
              let x=0, y=0, z=0;
              let is3D = false;

              switch(type) {
                  case 'circle':
                      x = (shapeParams?.radius ?? 1) * Math.cos(t);
                      y = (shapeParams?.radius ?? 1) * Math.sin(t);
                      break;
                  case 'ellipse':
                      x = a * Math.cos(t);
                      y = b * Math.sin(t);
                      break;
                  case 'spiral_archimedean':
                      const rA = a + b * t;
                      x = rA * Math.cos(t);
                      y = rA * Math.sin(t);
                      break;
                  case 'spiral_logarithmic':
                      const rL = a * Math.exp(b * t);
                      x = rL * Math.cos(t);
                      y = rL * Math.sin(t);
                      break;
                  case 'lemniscate': // Lemniscate of Bernoulli
                      const num = a * Math.cos(t);
                      const den = 1 + Math.pow(Math.sin(t), 2);
                      x = num / den;
                      y = (num * Math.sin(t)) / den;
                      break;
                  case 'rose':
                      const k = shapeParams?.loops ?? 4;
                      const rR = a * Math.cos(k * t);
                      x = rR * Math.cos(t);
                      y = rR * Math.sin(t);
                      break;
                  case 'cardioid':
                      const rC = 2 * a * (1 - Math.cos(t));
                      x = rC * Math.cos(t);
                      y = rC * Math.sin(t);
                      break;
                  case 'lissajous':
                      const delta = Math.PI / 2;
                      x = a * Math.sin(3 * t + delta);
                      y = b * Math.sin(2 * t);
                      break;
                  case 'sphere':
                      // For sphere, we need a surface. Simplified to a spiral on sphere or random points?
                      // Let's do a spiral path on the sphere to keep it 1D-parameterized (t) for 'size' points
                      // Parametric curve on sphere
                      is3D = true;
                      const rS = shapeParams?.radius ?? 1;
                      x = rS * Math.sin(t) * Math.cos(10*t); // 10 windings
                      y = rS * Math.sin(t) * Math.sin(10*t);
                      z = rS * Math.cos(t);
                      break;
                  case 'toroid':
                      is3D = true;
                      const R = 3, r = 1; // Major and minor radius
                      x = (R + r * Math.cos(10*t)) * Math.cos(t);
                      y = (R + r * Math.cos(10*t)) * Math.sin(t);
                      z = r * Math.sin(10*t);
                      break;
                  case 'helix':
                      is3D = true;
                      x = Math.cos(t);
                      y = Math.sin(t);
                      z = t / (2 * Math.PI);
                      break;
              }

              coords.push(x, y);
              if (is3D) coords.push(z);
          });

          ideal = coords;
      }

      // 2. Generate Noisy Vector (vecB)
      // Apply anomalies to Ideal first? Or only to Noisy?
      // Usually robustness checks if the algo can see similarity despite noise/anomalies.
      // So we apply noise and anomalies to 'vecB'. 'vecA' remains Ideal.

      let noisy = ideal.map(val => this.applyNoise(val, noiseSettings));
      noisy = this.applyAnomalies(noisy, anomalySettings);

      const noiseLabel = noiseSettings ? `${noiseSettings.type} (lvl=${noiseSettings.level})` : 'Clean';
      const anomalyLabel = anomalySettings ? ` + ${anomalySettings.type}` : '';

      return {
          vecA: ideal,
          vecB: noisy,
          label: `${type} [${noiseLabel}${anomalyLabel}]`
      };
  }
}
