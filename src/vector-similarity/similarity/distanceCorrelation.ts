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
 * Computes the Distance Correlation (dCor) between two vectors.
 *
 * Distance correlation is a measure of dependence between two random vectors,
 * not necessarily of the same dimension (though this implementation assumes same length 1D vectors).
 * Unlike Pearson's correlation, distance correlation is zero if and only if
 * the random vectors are independent.
 *
 * The logic follows the standard definition:
 * 1. Compute Euclidean distance matrices for both vectors.
 * 2. Double center the distance matrices.
 * 3. Compute the distance covariance and distance variances.
 * 4. Return the square root of the ratio.
 *
 * @param A The first vector.
 * @param B The second vector.
 * @returns The distance correlation, a value between 0 and 1.
 *          Returns 1 if both vectors are constant.
 *          Returns 0 if only one vector is constant.
 */
export function distanceCorrelation(A: number[], B: number[]): number {
  if (A.length !== B.length) {
    throw new Error('Vectors must have the same length');
  }

  const n = A.length;
  if (n === 0) return 1; // Empty vectors treated as identical/constant
  if (n === 1) return 1; // Single element vectors treated as identical/constant

  // Check for constant vectors to handle 0/0 case and optimization
  let aConst = true;
  let bConst = true;
  for (let i = 1; i < n; i++) {
    if (A[i] !== A[0]) aConst = false;
    if (B[i] !== B[0]) bConst = false;
  }

  if (aConst && bConst) return 1;
  if (aConst || bConst) return 0;

  // Compute distance matrices
  // Since we are doing 1D vectors, distance is abs difference
  const distA: number[][] = new Array(n).fill(0).map(() => new Array(n).fill(0));
  const distB: number[][] = new Array(n).fill(0).map(() => new Array(n).fill(0));

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      distA[i][j] = Math.abs(A[i] - A[j]);
      distB[i][j] = Math.abs(B[i] - B[j]);
    }
  }

  // Compute centered matrices
  const centerMatrix = (mat: number[][]): number[][] => {
    const rowMeans = new Array(n).fill(0);
    const colMeans = new Array(n).fill(0);
    let grandSum = 0;

    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        rowMeans[i] += mat[i][j];
        colMeans[j] += mat[i][j];
        grandSum += mat[i][j];
      }
    }

    for (let i = 0; i < n; i++) {
      rowMeans[i] /= n;
    }
    for (let j = 0; j < n; j++) {
      colMeans[j] /= n;
    }
    const grandMean = grandSum / (n * n);

    const centered = new Array(n).fill(0).map(() => new Array(n).fill(0));
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        centered[i][j] = mat[i][j] - rowMeans[i] - colMeans[j] + grandMean;
      }
    }
    return centered;
  };

  const centeredA = centerMatrix(distA);
  const centeredB = centerMatrix(distB);

  // Compute distance covariance and variances
  let distCovSq = 0;
  let distVarASq = 0;
  let distVarBSq = 0;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      const valA = centeredA[i][j];
      const valB = centeredB[i][j];
      distCovSq += valA * valB;
      distVarASq += valA * valA;
      distVarBSq += valB * valB;
    }
  }

  // Technically we should divide by n^2, but it cancels out in the ratio
  // dCor = sqrt( (CovSq/n^2) / sqrt( (VarA/n^2) * (VarB/n^2) ) )
  //      = sqrt( CovSq / sqrt( VarA * VarB ) )

  const denominatorSq = Math.sqrt(distVarASq * distVarBSq);

  if (denominatorSq === 0) {
    return 0; // Should be covered by constant check, but safety fallback
  }

  // distCovSq can be slightly negative due to floating point errors, clamp to 0
  if (distCovSq < 0) distCovSq = 0;

  return Math.sqrt(distCovSq / denominatorSq);
}
