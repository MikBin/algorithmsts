/**
 * Service for generating vectors with non-linear relationships and controlled noise.
 */
export class VectorGenerationService {
  /**
   * Generates a number from a Gaussian distribution using the Box-Muller transform.
   * @param mean The mean of the distribution (default: 0).
   * @param stdDev The standard deviation (default: 1).
   */
  private gaussianNoise(mean: number = 0, stdDev: number = 1): number {
    const u1 = Math.random();
    const u2 = Math.random();

    const z0 = Math.sqrt(-2.0 * Math.log(u1)) * Math.cos(2.0 * Math.PI * u2);
    return z0 * stdDev + mean;
  }

  /**
   * Generates a base X vector.
   * @param size Number of points.
   * @param min Range start.
   * @param max Range end.
   */
  private generateBaseX(size: number, min: number, max: number): number[] {
    const step = (max - min) / (size - 1);
    return Array.from({ length: size }, (_, i) => min + i * step);
  }

  /**
   * Generates a pair of vectors derived from a specified function with noise.
   *
   * @param type The type of function ('quadratic', 'exponential', 'logarithmic', 'sqrt', 'sin', 'cos', 'tan').
   * @param size The size of the vectors.
   * @param noiseStdDev The standard deviation of the Gaussian noise added to inputs and outputs.
   * @param params Function parameters {a, b, c} for f(x).
   * @returns An object containing { vecA, vecB }.
   */
  public generateVectorPair(
    type: 'quadratic' | 'exponential' | 'logarithmic' | 'sqrt' | 'sin' | 'cos' | 'tan',
    size: number,
    noiseStdDev: number,
    params: { a?: number, b?: number, c?: number } = {}
  ): { vecA: number[], vecB: number[], label: string } {
    const { a = 1, b = 1, c = 0 } = params;

    // Adjust domain based on function type to avoid domain errors (e.g. log(<=0))
    let minX = 0;
    let maxX = 10;

    if (type === 'logarithmic' || type === 'sqrt') {
      minX = 1; // Avoid 0 or negative for log/sqrt
      maxX = 11;
    } else if (type === 'sin' || type === 'cos') {
      minX = 0;
      maxX = 2 * Math.PI; // One full cycle roughly
    } else if (type === 'tan') {
      minX = -1.5; // -1.5 to 1.5 is safe within -PI/2 to PI/2
      maxX = 1.5;
    } else if (type === 'exponential') {
      minX = 0;
      maxX = 2; // Keep exponential from blowing up too huge
    }

    const baseX = this.generateBaseX(size, minX, maxX);

    const getFunction = (t: string) => {
      switch (t) {
        case 'quadratic': return (x: number) => a * x * x + b * x + c;
        case 'exponential': return (x: number) => a * Math.exp(b * x) + c;
        case 'logarithmic': return (x: number) => a * Math.log(b * x) + c;
        case 'sqrt': return (x: number) => a * Math.sqrt(b * x) + c;
        case 'sin': return (x: number) => a * Math.sin(b * x) + c;
        case 'cos': return (x: number) => a * Math.cos(b * x) + c;
        case 'tan': return (x: number) => a * Math.tan(b * x) + c;
        default: return (x: number) => x;
      }
    };

    const func = getFunction(type);

    const generateNoisyVector = (): number[] => {
      return baseX.map(x => {
        // Add noise to X input (input perturbation)
        const perturbedX = x + this.gaussianNoise(0, noiseStdDev);
        // Calculate ideal Y
        // Ensure we don't pass invalid values to log/sqrt after noise
        let safeX = perturbedX;
        if (type === 'logarithmic' || type === 'sqrt') {
           safeX = Math.max(0.001, perturbedX);
        }
        // For tan, ensure we don't hit PI/2 exactly or go wildly out of bounds if noise pushes it there
        // But our domain [-1.5, 1.5] plus small noise (0.15) is still safely < PI/2 (1.57)

        const y = func(safeX);

        // Add noise to Y output (measurement error)
        return y + this.gaussianNoise(0, noiseStdDev);
      });
    };

    return {
      vecA: generateNoisyVector(),
      vecB: generateNoisyVector(),
      label: `${type} (n=${size}, σ=${noiseStdDev})`
    };
  }
}
