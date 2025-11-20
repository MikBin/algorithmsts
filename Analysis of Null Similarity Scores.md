# Analysis of Null Similarity Scores

## Executive Summary

This report details the investigation into the presence of `null` values within the `similarity-data.js` output. The analysis found that approximately **13% to 22%** of similarity calculations for specific function families fail when processing vectors containing negative values or significant outliers.

The root cause is the mathematical incompatibility of certain algorithms—specifically those based on **Entropy** (e.g., Kullback-Leibler) and **Fidelity** (e.g., Hellinger, Matusita)—with negative input data. These algorithms rely on operations like logarithms (`Math.log`) and square roots (`Math.sqrt`) that return `NaN` (Not a Number) for negative inputs. These `NaN` values are subsequently serialized as `null` in the JSON output.

The primary recommendation is to **implement a hybrid strategy**: strictly validate inputs for probability-based functions to ensure non-negativity, while falling back to robust defaults or alternative metrics for incompatible data.

## Quantitative Analysis

A systematic scan of the generated analysis data revealed that `null` results are confined to specific families of similarity functions and occur exclusively in test cases involving negative values (e.g., "Short Vectors with a Single Outlier", "Longer Vectors with Multiple Outliers", "Noise Resilience Level 5").

The table below summarizes the failure rates for the affected functions:

| Function Name | Total Calls | Null Count | Null % | Contexts |
|---|---|---|---|---|
| **hellingerDistance** | 23 | 5 | 21.7% | Outliers, High Noise |
| **matusitaDistance** | 23 | 5 | 21.7% | Outliers, High Noise |
| **squaredChordDistance** | 23 | 5 | 21.7% | Outliers, High Noise |
| **normalizedMatusitaSimilarity** | 23 | 5 | 21.7% | Outliers, High Noise |
| **normalizedSquaredChordSimilarity** | 23 | 5 | 21.7% | Outliers, High Noise |
| **kullbackLeiblerSimilarity** | 23 | 3 | 13.0% | Outliers, High Noise |
| **jeffreysSimilarity** | 23 | 3 | 13.0% | Outliers, High Noise |
| **topsoeSimilarity** | 23 | 3 | 13.0% | Outliers, High Noise |
| **fidelitySimilarity** | 23 | 3 | 13.0% | Outliers, High Noise |
| **kSimilarity** | 23 | 2 | 8.7% | Outliers (Multiple) |

*Note: "Outliers" refers to test vectors containing values like `-0.0001` or `-20000`. "High Noise" refers to noise levels that perturb positive values into the negative range.*

## Root Cause Investigation

The investigation confirmed that the `null` values are serialized `NaN` results caused by invalid mathematical operations on negative numbers.

### 1. Entropy-Based Functions
Functions like `kullbackLeiblerDivergence` and `jeffreysDivergence` treat input vectors as probability distributions. They compute terms involving `Math.log(p)` or `Math.log(p / q)`.
- **Failure Mechanism:** When a vector element $x \le 0$ is encountered, `Math.log(x)` returns `-Infinity` (for 0) or `NaN` (for negative numbers).
- **Code Evidence:** `src/vector-similarity/similarity/entropy.ts` directly applies `Math.log` without checking for non-negativity.

### 2. Fidelity-Based Functions
Functions like `fidelitySimilarity` and `matusitaDistance` measure the distance between distributions and often rely on square roots.
- **Failure Mechanism:**
    - `matusitaDistance` calculates `Math.sqrt(p)`. If $p < 0$, this results in `NaN`.
    - `fidelitySimilarity` calculates `Math.sqrt(p * q)`. While it attempts to normalize vectors, if the sum of elements is negative (possible with large negative outliers), normalization flips signs or behaves unpredictably, leading to `NaN`.
- **Code Evidence:** `src/vector-similarity/similarity/fidelity.ts` applies `Math.sqrt` to vector elements.

## Recommended Solution Strategy

To address these failures without compromising the integrity of the analysis, we recommend a **Hybrid Code-Level Robustness Strategy**.

### 1. Explicit Input Validation & Guard Clauses
Modify the affected functions in `entropy.ts` and `fidelity.ts` to validate that input vectors are non-negative.
- **Action:** Add a check at the beginning of these functions.
- **Behavior:** If a vector contains negative values, strictly throw a descriptive error (e.g., `Error: Input vectors must be non-negative for Entropy-based similarities`). This prevents silent `NaN` propagation and makes the limitation explicit to the user.

### 2. Wrapper for Analysis Script
Update the `vector-similarity-analysis.ts` script (or the analysis wrapper) to catch these specific validation errors gracefully.
- **Action:** Instead of letting `NaN` propagate to `null`, catch the validation error and record a specific status code or string (e.g., `"N/A (Invalid Input)"`).
- **Benefit:** This distinguishes between a calculation error and a fundamental domain mismatch (using probability metrics on non-probability data).

### 3. Data Pre-processing (Optional/Contextual)
For specific pipelines where negative values are noise (e.g., sensor jitter around 0), implement a pre-processing step to clamp values to 0 or apply a generic shift (Min-Max normalization) before passing them to these specific functions.
- **Recommendation:** Do *not* build this into the core similarity functions, as it alters the mathematical definition. Apply it only in the application layer where the data context is known.

### Example Implementation (Input Validation)

```typescript
// src/vector-similarity/similarity/entropy.ts

export const kullbackLeiblerDivergence = (p: number[], q: number[]): number => {
  if (p.length !== q.length) {
    throw new Error('Vectors must have the same length');
  }

  // NEW: Input Validation
  if (p.some(x => x < 0) || q.some(x => x < 0)) {
    throw new Error('Vectors must be non-negative for Kullback-Leibler divergence');
  }

  // ... existing logic ...
};
```

This strategy ensures correctness for valid inputs while providing clear feedback for invalid ones, solving the "Null" ambiguity.
