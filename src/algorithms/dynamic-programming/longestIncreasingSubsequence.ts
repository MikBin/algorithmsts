import { BaseAlgorithm } from '../../core/abstracts/BaseAlgorithm';
import { IAlgorithm } from '../../core/interfaces/IAlgorithm';

export interface LISInput<T extends number | string> {
  array: T[];
}

export interface LISOutput<T extends number | string> {
  length: number;
  subsequence: T[];
}

/**
 * Longest Increasing Subsequence (LIS) Algorithm
 *
 * Finds the length of the longest strictly increasing subsequence in an array
 * and reconstructs the subsequence.
 *
 * @complexity Time: O(n log n) using patience sorting / binary search | Space: O(n) for the tails and parent arrays
 */
export class LongestIncreasingSubsequence<T extends number | string> extends BaseAlgorithm<LISInput<T>, LISOutput<T>> implements IAlgorithm<LISInput<T>, LISOutput<T>> {
  constructor() {
    super('LongestIncreasingSubsequence', 'O(n log n)', 'O(n)');
  }

  public execute(input: LISInput<T>): LISOutput<T> {
    const { array } = input;
    if (array.length === 0) return { length: 0, subsequence: [] };

    const n = array.length;
    const tailsIndices: number[] = new Array(n).fill(0);
    const parent: number[] = new Array(n).fill(-1);
    let len = 1;

    tailsIndices[0] = 0;

    for (let i = 1; i < n; i++) {
      if (array[i] < array[tailsIndices[0]]) {
        // new smallest value
        tailsIndices[0] = i;
      } else if (array[i] > array[tailsIndices[len - 1]]) {
        // extends the largest subsequence
        parent[i] = tailsIndices[len - 1];
        tailsIndices[len++] = i;
      } else {
        // find the smallest element in tails that is >= array[i]
        let l = -1;
        let r = len - 1;
        while (r - l > 1) {
          const m = l + Math.floor((r - l) / 2);
          if (array[tailsIndices[m]] >= array[i]) {
            r = m;
          } else {
            l = m;
          }
        }
        parent[i] = tailsIndices[r - 1];
        tailsIndices[r] = i;
      }
    }

    // reconstruct subsequence
    const subsequence: T[] = new Array(len);
    let curr = tailsIndices[len - 1];
    for (let i = len - 1; i >= 0; i--) {
      subsequence[i] = array[curr];
      curr = parent[curr];
    }

    return {
      length: len,
      subsequence,
    };
  }
}
