/**
 * SYMMETRIC MATHEMATICAL FUNCTION COLLECTION
 * --------------------------------
 * A collection of single and two-variable functions categorized by their
 * geometric properties (Monotonicity, Boundedness, and Symmetry relative to origin).
 */

// ============================================================================
// SECTION 1: SINGLE VARIABLE FUNCTIONS
// Properties: Monotone (Increasing), Limited (Bounded), Symmetric (Odd)
// ============================================================================

/**
 * 1. Arctangent
 * The classic smooth step function.
 * Range: (-π/2, π/2)
 */
export const arctan = (x: number): number => {
    return Math.atan(x);
};

/**
 * 2. Hyperbolic Tangent
 * Converges faster than arctan. Common in neural networks.
 * Range: (-1, 1)
 */
export const hyperbolicTangent = (x: number): number => {
    return Math.tanh(x);
};

/**
 * 3. Error Function (Approximation)
 * Standard sigmoid shape found in probability/statistics.
 * Note: JS Math doesn't have native erf, so we use a poly approximation.
 * Range: (-1, 1)
 */
export const errorFunction = (x: number): number => {
    // Constants for approximation (Abramowitz and Stegun 7.1.26)
    const p  = 0.3275911;
    const a1 = 0.254829592;
    const a2 = -0.284496736;
    const a3 = 1.421413741;
    const a4 = -1.453152027;
    const a5 = 1.061405429;

    const sign = x < 0 ? -1 : 1;
    const absX = Math.abs(x);

    // A&S formula
    const t = 1.0 / (1.0 + p * absX);
    const y = 1.0 - (((((a5 * t + a4) * t) + a3) * t + a2) * t + a1) * t * Math.exp(-absX * absX);

    return sign * y;
};

/**
 * 4. Algebraic Sigmoid
 * Slower approach to limits than tanh.
 * Range: (-1, 1)
 */
export const algebraicSigmoid = (x: number): number => {
    return x / Math.sqrt(1 + x * x);
};

/**
 * 5. Softsign
 * Computationally cheap (no square roots or exponentials).
 * Range: (-1, 1)
 */
export const softsign = (x: number): number => {
    return x / (1 + Math.abs(x));
};

/**
 * 6. Gudermannian Function
 * Connects circular and hyperbolic trigonometry.
 * Range: (-π/2, π/2)
 */
export const gudermannian = (x: number): number => {
    return Math.atan(Math.sinh(x));
};


// ============================================================================
// SECTION 2: TWO VARIABLE FUNCTIONS
// Properties: Monotone (Coordinate-wise), Limited (Bounded), Symmetric (Odd)
// Condition: f(-x, -y) = -f(x, y)
// ============================================================================

/**
 * 1. 2D Arctangent
 * A rising wave oriented diagonally.
 */
export const arctan2D = (x: number, y: number): number => {
    return Math.atan(x + y);
};

/**
 * 2. Additive Hyperbolic Tangent
 * A smooth plateau stepping up in both X and Y directions.
 * Normalized by 0.5 to keep range strictly within (-1, 1).
 */
export const additiveTanh = (x: number, y: number): number => {
    return 0.5 * (Math.tanh(x) + Math.tanh(y));
};

/**
 * 3. Sigmoid Surface
 * Extruded diagonal version of the algebraic sigmoid.
 */
export const sigmoidSurface = (x: number, y: number): number => {
    const sum = x + y;
    return sum / Math.sqrt(1 + sum * sum);
};

/**
 * 4. Normalized Sum Tanh
 * Sharper convergence than arctan2D.
 */
export const normalizedSumTanh = (x: number, y: number): number => {
    return Math.tanh(x + y);
};


// ============================================================================
// SECTION 3: TWO VARIABLE FUNCTIONS (SYMMETRIC ONLY)
// Properties: Symmetric (Odd), but NOT necessarily monotone or limited.
// Condition: f(-x, -y) = -f(x, y)
// ============================================================================

// --- Subsection A: Polynomials (Unbounded) ---

/**
 * Linear Plane
 * The simplest odd 2D function.
 */
export const linearPlane = (x: number, y: number, a: number = 1, b: number = 1): number => {
    return (a * x) + (b * y);
};

/**
 * The Monkey Saddle
 * Famous for having 3 valleys and 3 ridges.
 */
export const monkeySaddle = (x: number, y: number): number => {
    return Math.pow(x, 3) - (3 * x * Math.pow(y, 2));
};

/**
 * Mixed Odd Degree
 * Example: x^2 * y
 */
export const mixedOddDegree = (x: number, y: number): number => {
    return (x * x) * y;
};

// --- Subsection B: Oscillatory (Bounded, Non-monotone) ---

/**
 * Diagonal Sine
 * Waves running diagonally.
 */
export const diagonalSine = (x: number, y: number): number => {
    return Math.sin(x + y);
};

/**
 * Mixed Product Trigonometry
 * Creates a grid of "hills" and "holes".
 */
export const mixedProductTrig = (x: number, y: number): number => {
    return Math.sin(x) * Math.cos(y);
};

// --- Subsection C: Rational (Boundedness varies) ---

/**
 * The Rational Saddle
 * Decays to zero at infinity, has peaks/valleys near origin.
 */
export const rationalSaddle = (x: number, y: number): number => {
    return (x - y) / (1 + x * x + y * y);
};
