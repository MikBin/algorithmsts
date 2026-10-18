/**
 * Algorithms Module
 *
 * This module contains all algorithm implementations in the Algorithmsts library.
 * Algorithms provide efficient solutions to computational problems and data processing tasks.
 *
 * @module algorithms
 */

// Searching algorithms
export { BinarySearch, BinaryClosestSearch } from "./searching/binary-search";

// Sorting algorithms
export {
  CountingSort,
  RadixSortNumbers,
  RadixSortStrings,
  BubbleSort,
  InsertionSort,
  QuickSort,
  MergeSort,
  HeapSort
} from "./sorting";

// Dynamic Programming algorithms
export {
  LongestCommonSubsequence,
  LongestIncreasingSubsequence,
  Knapsack,
  CoinChange,
  SubsetSum
} from "./dynamic-programming";

// String algorithms
export {
  NgramSimilarity,
  SorensenDiceCoefficient,
  TrigramSimilarity,
  SplitByUpperCase,
  JaroDistance,
  JaroWinklerDistance,
  LevenshteinDistance,
} from "./strings";

// Graph traversal algorithms
export { BreadthFirstSearch, DepthFirstSearch } from "../graphs/algorithms/traversal";

// Range query algorithms
export { SparseTable } from "./range-queries/sparse-table";

// Algorithm utilities
export { AlgorithmSelector, AlgorithmTestUtils } from "./utils";
export type { SelectionCriteria, AlgorithmSelectionResult } from "./utils";
