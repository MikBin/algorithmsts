/**
 * String Algorithms Module
 *
 * This module provides algorithms for string processing and analysis,
 * including similarity measures, pattern matching, and text manipulation.
 *
 * @module algorithms/strings
 */

export {
  NgramSimilarity,
  SorensenDiceCoefficient,
  TrigramSimilarity,
  SplitByUpperCase,
  JaroDistance,
  JaroWinklerDistance,
  LevenshteinDistance
} from './similarities';
export type {
  NgramSimilarityInput,
  NgramSimilarityOutput,
  SplitByUpperCaseInput,
  SplitByUpperCaseOutput,
  JaroDistanceInput,
  JaroDistanceOutput,
  JaroWinklerDistanceInput,
  JaroWinklerDistanceOutput,
  LevenshteinDistanceInput,
  LevenshteinDistanceOutput
} from './similarities';
