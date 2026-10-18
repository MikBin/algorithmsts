import { BaseAlgorithm } from '../../core/abstracts/BaseAlgorithm';
import { IAlgorithm } from '../../core/interfaces/IAlgorithm';

export interface LCSInput {
  str1: string;
  str2: string;
}

export interface LCSOutput {
  length: number;
  subsequence: string;
}

/**
 * Longest Common Subsequence (LCS) Algorithm
 *
 * Finds the longest common subsequence between two strings using dynamic programming.
 * A subsequence is a sequence that appears in the same relative order, but not necessarily contiguous.
 *
 * @complexity Time: O(m * n) where m and n are the lengths of the two strings | Space: O(m * n) for the DP table
 */
export class LongestCommonSubsequence extends BaseAlgorithm<LCSInput, LCSOutput> implements IAlgorithm<LCSInput, LCSOutput> {
  constructor() {
    super('LongestCommonSubsequence', 'O(m * n)', 'O(m * n)');
  }

  public execute(input: LCSInput): LCSOutput {
    const { str1, str2 } = input;
    const m = str1.length;
    const n = str2.length;

    // dp[i][j] contains length of LCS of str1[0..i-1] and str2[0..j-1]
    const dp: number[][] = Array.from({ length: m + 1 }, () => new Array(n + 1).fill(0));

    // Build the DP table
    for (let i = 1; i <= m; i++) {
      for (let j = 1; j <= n; j++) {
        if (str1[i - 1] === str2[j - 1]) {
          dp[i][j] = dp[i - 1][j - 1] + 1;
        } else {
          dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
        }
      }
    }

    // Reconstruct the subsequence
    let index = dp[m][n];
    const lcs = new Array(index);
    let i = m;
    let j = n;

    while (i > 0 && j > 0) {
      if (str1[i - 1] === str2[j - 1]) {
        lcs[index - 1] = str1[i - 1];
        i--;
        j--;
        index--;
      } else if (dp[i - 1][j] > dp[i][j - 1]) {
        i--;
      } else {
        j--;
      }
    }

    return {
      length: dp[m][n],
      subsequence: lcs.join(''),
    };
  }
}
