/**
 * Dynamic Programming Algorithms Module
 *
 * This module provides implementations for classic dynamic programming algorithms.
 * Dynamic programming is used for solving optimization problems by breaking them
 * down into simpler subproblems and storing the results.
 *
 * @module algorithms/dynamic-programming
 */

export { LongestCommonSubsequence } from './longestCommonSubsequence';
export { LongestIncreasingSubsequence } from './longestIncreasingSubsequence';
export { Knapsack } from './knapsack';
export { CoinChange } from './coinChange';
export { SubsetSum } from './subsetSum';

export type { LCSInput, LCSOutput } from './longestCommonSubsequence';
export type { LISInput, LISOutput } from './longestIncreasingSubsequence';
export type { KnapsackInput, KnapsackOutput, KnapsackItem } from './knapsack';
export type { CoinChangeInput, CoinChangeOutput } from './coinChange';
export type { SubsetSumInput, SubsetSumOutput } from './subsetSum';
