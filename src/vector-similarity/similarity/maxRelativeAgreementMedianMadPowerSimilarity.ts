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

import { validateVectors } from './internal/validateVectors';
import { median, medianAbsoluteDeviation } from './internal/quickselect';

/**
 * Robust power-transform similarity based on median and MAD of per-coordinate agreement.
 *
 * 1. Builds C[i] = 1 − |A[i]−B[i]| / max(|A[i]|, |B[i]|) (1 when both are 0).
 * 2. Computes median(C) and MAD(C) = median(|C[i] − median(C)|).
 * 3. Applies the power transform:
 *    ```
 *    exp = 1 + MAD(C) · madWeight
 *    sim = (1 + sign(median(C)) · |median(C)|^exp^sign(median(C))) / 2
 *    ```
 *
 * Robust analogue of {@link vectorSimilarityCorrelation} using median/MAD instead of mean/std.
 *
 * @param A - The first vector.
 * @param B - The second vector.
 * @param madWeight - Weight of MAD in the exponent calculation. Defaults to 1.
 * @returns The similarity between the two vectors in [0, 1].
 * @throws {TypeError} If `A` or `B` is not an array or contains a non-finite element.
 * @throws {RangeError} If `A` and `B` differ in length.
 *
 * Time complexity: O(n) average. Space complexity: O(n) (auxiliary C vector).
 */
function maxRelativeAgreementMedianMadPowerSimilarity(
  A: number[],
  B: number[],
  madWeight: number = 1
): number {
  const n = validateVectors(A, B, { allowEmpty: true });
  if (n === 0) {
    return 1.0;
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
      const maxVal = Math.max(absA, absB);
      const diff = Math.abs(a - b);
      const ratio = diff / maxVal;
      ci = 1 - ratio;
    }

    C[i] = ci;
  }

  const med = median(C);
  const mad = medianAbsoluteDeviation(C, med);

  const exponent = 1 + mad * madWeight;

  const sign = Math.sign(med);
  const similarity = 1 + sign * Math.pow(Math.abs(med), exponent ** sign);

  return similarity / 2;
}

/**
 * Computes max-relative-agreement median/MAD power similarity with MAD weight set to 0.
 *
 * @param A - The first vector.
 * @param B - The second vector.
 * @returns The similarity between the two vectors.
 */
function maxRelativeAgreementMedianMadPowerSimilarityNoMad(
  A: number[],
  B: number[]
): number {
  return maxRelativeAgreementMedianMadPowerSimilarity(A, B, 0);
}

export {
  maxRelativeAgreementMedianMadPowerSimilarity,
  maxRelativeAgreementMedianMadPowerSimilarityNoMad,
};
