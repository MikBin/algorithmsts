/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * The following function is an adaptation of the VectorSimilarityMeanStdPower
 * The new similarity function works as follows:
 * 1. It builds a C vector where C[i] = 1 - abs(A[i]-B[i]))/max(abs(A[i]),abs(B[i]))
 *    resulting in a value between -1 and 1, which has a meaning similar to correlation.
 * 2. It computes the mean and standard deviation of vector C.
 * 3. The resulting similarity is sign(mean(C)) * abs(mean(C))^(1/(1+std(C))).
 *
 * @param A The first vector.
 * @param B The second vector.
 * @returns The similarity between the two vectors.
 */
function vectorSimilarityCorrelation(
  A: number[],
  B: number[]
): number {
  if (A.length !== B.length) {
    throw new Error('Vectors must be of the same length');
  }

  const n = A.length;
  if (n === 0) {
    return 1.0; // Or 0.0, depending on desired behavior for empty vectors
  }

  const C = new Array<number>(n);

  for (let i = 0; i < n; i++) {
    const a = A[i];
    const b = B[i];

    let ci: number;
    if (a === 0 && b === 0) {
      ci = 1;
    } else {
      const absA = Math.abs(a);
      const absB = Math.abs(b);
      const maxVal = absA > absB ? absA : absB;
      const diff = Math.abs(a - b);
      // maxVal will be > 0 here because of the `a === 0 && b === 0` check
      const ratio = diff / maxVal;
      ci = 1 - ratio;
    }

    C[i] = ci;
  }

  let sum = 0;
  for (let i = 0; i < n; i++) {
    sum += C[i];
  }
  const mean = sum / n;

  let std: number;
  if (n === 1) {
    std = 0;
  } else {
    let varianceSum = 0;
    for (let i = 0; i < n; i++) {
      const diff = C[i] - mean;
      varianceSum += diff * diff;
    }
    const variance = varianceSum / (n - 1);
    std = Math.sqrt(variance);
  }

  const exponent = (1 + std);

  const sign = Math.sign(mean);
  const similarity = 1 + sign * Math.pow(Math.abs(mean), exponent ** sign);

  return similarity/2;
}

export { vectorSimilarityCorrelation };
