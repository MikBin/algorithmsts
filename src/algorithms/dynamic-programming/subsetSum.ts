import { BaseAlgorithm } from '../../core/abstracts/BaseAlgorithm';
import { IAlgorithm } from '../../core/interfaces/IAlgorithm';

export interface SubsetSumInput {
  array: number[];
  targetSum: number;
}

export interface SubsetSumOutput {
  hasSubset: boolean;
  subset: number[];
}

/**
 * Subset Sum Algorithm
 *
 * Determines if there is a subset of the given array with sum equal to given targetSum.
 * Assumes non-negative integers.
 *
 * @complexity Time: O(n * targetSum) | Space: O(n * targetSum) for the DP table to allow reconstruction
 */
export class SubsetSum extends BaseAlgorithm<SubsetSumInput, SubsetSumOutput> implements IAlgorithm<SubsetSumInput, SubsetSumOutput> {
  constructor() {
    super('SubsetSum', 'O(n * targetSum)', 'O(n * targetSum)');
  }

  public execute(input: SubsetSumInput): SubsetSumOutput {
    const { array, targetSum } = input;
    const n = array.length;

    if (targetSum === 0) return { hasSubset: true, subset: [] };
    if (n === 0) return { hasSubset: false, subset: [] };

    // dp[i][j] is true if a subset of array[0..i-1] has sum equal to j
    const dp: boolean[][] = Array.from({ length: n + 1 }, () => new Array(targetSum + 1).fill(false));

    // If target sum is 0, subset is empty
    for (let i = 0; i <= n; i++) {
      dp[i][0] = true;
    }

    for (let i = 1; i <= n; i++) {
      for (let j = 1; j <= targetSum; j++) {
        if (j < array[i - 1]) {
          dp[i][j] = dp[i - 1][j];
        } else {
          dp[i][j] = dp[i - 1][j] || dp[i - 1][j - array[i - 1]];
        }
      }
    }

    if (!dp[n][targetSum]) {
      return { hasSubset: false, subset: [] };
    }

    // Reconstruct the subset
    const subset: number[] = [];
    let i = n;
    let j = targetSum;

    while (i > 0 && j > 0) {
      // If true in current row, but false in previous row, the current item must be included
      if (dp[i][j] && !dp[i - 1][j]) {
        subset.push(array[i - 1]);
        j -= array[i - 1];
      }
      i--;
    }

    return {
      hasSubset: true,
      subset: subset.reverse(),
    };
  }
}
