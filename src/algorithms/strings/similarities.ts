import { BaseAlgorithm } from '../../core/abstracts/BaseAlgorithm';
import { IAlgorithm } from '../../core/interfaces/IAlgorithm';
import { PerformanceMonitor } from '../../performance';

/**
 * Input interface for NgramSimilarity algorithm
 */
export interface NgramSimilarityInput {
  /** First string to compare */
  str1: string;
  /** Second string to compare */
  str2: string;
  /** Length of substring to be used in calculating similarity (default: 2) */
  substringLength?: number;
  /** Whether to consider case in string matching (default: false) */
  caseSensitive?: boolean;
}

/**
 * Output interface for NgramSimilarity algorithm
 */
export interface NgramSimilarityOutput {
  /** Similarity score between 0 and 1 */
  similarity: number;
  /** Backward-compatible result field */
  result: number;
}

/**
 * N-gram Similarity Algorithm Implementation
 *
 * Calculates similarity between two strings using n-gram analysis.
 * This is a general implementation that can be configured for different n-gram sizes.
 *
 * **Time Complexity:** O(m + n) where m and n are the lengths of the input strings
 * **Space Complexity:** O(min(m, n)) - space for the map of n-grams
 *
 * @template TInput The input type for the algorithm
 * @template TOutput The output type for the algorithm
 */
export class NgramSimilarity extends BaseAlgorithm<NgramSimilarityInput, NgramSimilarityOutput> implements IAlgorithm<NgramSimilarityInput, NgramSimilarityOutput> {
  /**
   * Creates a new NgramSimilarity instance
   */
  constructor() {
    super('NgramSimilarity', 'O(m + n)', 'O(min(m, n))');
  }

  /**
   * Executes the n-gram similarity algorithm
   * @param input The input containing the strings to compare
   * @returns The similarity score
   */
  public execute(input: NgramSimilarityInput): NgramSimilarityOutput {
    let result: NgramSimilarityOutput;

    const executionTime = PerformanceMonitor.measureExecutionTime(() => {
      const { str1, str2, substringLength = 2, caseSensitive = false } = input;

      let s1 = str1;
      let s2 = str2;

      if (!caseSensitive) {
        s1 = s1.toLowerCase();
        s2 = s2.toLowerCase();
      }

      if (s1.length < substringLength || s2.length < substringLength) {
        result = { similarity: 0, result: 0 };
        return;
      }

      const map = new Map<string, number>();

      // Count n-grams in first string
      for (let i = 0; i <= s1.length - substringLength; i++) {
        const substr = s1.substr(i, substringLength);
        map.set(substr, (map.get(substr) || 0) + 1);
      }

      let match = 0;

      // Count matching n-grams in second string
      for (let j = 0; j <= s2.length - substringLength; j++) {
        const substr = s2.substr(j, substringLength);
        const count = map.get(substr) || 0;
        if (count > 0) {
          map.set(substr, count - 1);
          match++;
        }
      }

      const totalNgrams = s1.length - substringLength + 1 + (s2.length - substringLength + 1);
      const similarity = (match * 2) / totalNgrams;

      result = { similarity, result: similarity };
    });

    // Log performance warning for long strings
    if (executionTime > 50) { // Arbitrary threshold for string similarity
      console.warn(`NgramSimilarity performance warning: ${executionTime}ms for strings of length ${input.str1?.length || 0} and ${input.str2?.length || 0}`);
    }

    return result!;
  }
}

/**
 * Sørensen-Dice Coefficient Algorithm Implementation
 *
 * Calculates the Sørensen-Dice coefficient between two strings.
 * This is a specific case of n-gram similarity with n=2 (bigram similarity).
 *
 * **Time Complexity:** O(m + n) where m and n are the lengths of the input strings
 * **Space Complexity:** O(min(m, n)) - space for the map of bigrams
 */
export class SorensenDiceCoefficient extends BaseAlgorithm<NgramSimilarityInput, NgramSimilarityOutput> implements IAlgorithm<NgramSimilarityInput, NgramSimilarityOutput> {
  /**
   * Creates a new SorensenDiceCoefficient instance
   */
  constructor() {
    super('SorensenDiceCoefficient', 'O(m + n)', 'O(min(m, n))');
  }

  /**
   * Executes the Sørensen-Dice coefficient algorithm
   * @param input The input containing the strings to compare
   * @returns The similarity score
   */
  public execute(input: NgramSimilarityInput): NgramSimilarityOutput {
    // Sørensen-Dice is equivalent to bigram (n=2) similarity
    const ngramInput: NgramSimilarityInput = { ...input, substringLength: 2 };
    const ngramAlgo = new NgramSimilarity();
    return ngramAlgo.execute(ngramInput);
  }
}

/**
 * Trigram Similarity Algorithm Implementation
 *
 * Calculates trigram similarity between two strings.
 * This is a specific case of n-gram similarity with n=3.
 *
 * **Time Complexity:** O(m + n) where m and n are the lengths of the input strings
 * **Space Complexity:** O(min(m, n)) - space for the map of trigrams
 */
export class TrigramSimilarity extends BaseAlgorithm<NgramSimilarityInput, NgramSimilarityOutput> implements IAlgorithm<NgramSimilarityInput, NgramSimilarityOutput> {
  /**
   * Creates a new TrigramSimilarity instance
   */
  constructor() {
    super('TrigramSimilarity', 'O(m + n)', 'O(min(m, n))');
  }

  /**
   * Executes the trigram similarity algorithm
   * @param input The input containing the strings to compare
   * @returns The similarity score
   */
  public execute(input: NgramSimilarityInput): NgramSimilarityOutput {
    // Trigram similarity uses n=3
    const ngramInput: NgramSimilarityInput = { ...input, substringLength: 3 };
    const ngramAlgo = new NgramSimilarity();
    return ngramAlgo.execute(ngramInput);
  }
}

/**
 * Input interface for SplitByUpperCase algorithm
 */
export interface SplitByUpperCaseInput {
  /** The string to split by uppercase letters */
  str: string;
}

/**
 * Output interface for SplitByUpperCase algorithm
 */
export interface SplitByUpperCaseOutput {
  /** Array of strings split by uppercase */
  parts: string[];
}

/**
 * Split By UpperCase Algorithm Implementation
 *
 * Splits a camelCase or PascalCase string into parts based on uppercase letters.
 *
 * **Time Complexity:** O(n) where n is the length of the input string
 * **Space Complexity:** O(n) - space for the output array
 */
export class SplitByUpperCase extends BaseAlgorithm<SplitByUpperCaseInput, SplitByUpperCaseOutput> implements IAlgorithm<SplitByUpperCaseInput, SplitByUpperCaseOutput> {
  /**
   * Creates a new SplitByUpperCase instance
   */
  constructor() {
    super('SplitByUpperCase', 'O(n)', 'O(n)');
  }

  /**
   * Executes the split by uppercase algorithm
   * @param input The input containing the string to split
   * @returns The array of split parts
   */
  public execute(input: SplitByUpperCaseInput): SplitByUpperCaseOutput {
    let result: SplitByUpperCaseOutput;

    const executionTime = PerformanceMonitor.measureExecutionTime(() => {
      const { str } = input;
      const parts: string[] = [];
      let currentPart = '';

      for (let i = 0; i < str.length; i++) {
        const char = str[i];
        const isUpperCase = char >= 'A' && char <= 'Z';

        if (isUpperCase && currentPart.length > 0) {
          parts.push(currentPart);
          currentPart = char.toLowerCase();
        } else {
          currentPart += char.toLowerCase();
        }
      }

      if (currentPart.length > 0) {
        parts.push(currentPart);
      }

      result = { parts };
    });

    // Log performance warning for very long strings
    if (executionTime > 10) { // O(n) should be very fast
      console.warn(`SplitByUpperCase performance warning: ${executionTime}ms for string of length ${input.str?.length || 0}`);
    }

    return result!;
  }
}

/**
 * Input interface for JaroDistance algorithm
 */
export interface JaroDistanceInput {
  /** First string to compare */
  str1: string;
  /** Second string to compare */
  str2: string;
}

/**
 * Output interface for JaroDistance algorithm
 */
export interface JaroDistanceOutput {
  /** Jaro distance between 0 and 1 */
  distance: number;
  /** Backward-compatible result field */
  result: number;
}

/**
 * Jaro Distance Algorithm Implementation
 *
 * Calculates the Jaro distance between two strings.
 * Jaro distance is a measure of similarity between two strings.
 *
 * **Time Complexity:** O(m * n) where m and n are the lengths of the input strings
 * **Space Complexity:** O(min(m, n)) - space for character position tracking
 */
export class JaroDistance extends BaseAlgorithm<JaroDistanceInput, JaroDistanceOutput> implements IAlgorithm<JaroDistanceInput, JaroDistanceOutput> {
  /**
   * Creates a new JaroDistance instance
   */
  constructor() {
    super('JaroDistance', 'O(m * n)', 'O(min(m, n))');
  }

  /**
   * Executes the Jaro distance algorithm
   * @param input The input containing the strings to compare
   * @returns The Jaro distance
   */
  public execute(input: JaroDistanceInput): JaroDistanceOutput {
    let result: JaroDistanceOutput;

    const executionTime = PerformanceMonitor.measureExecutionTime(() => {
      const { str1, str2 } = input;
      const len1 = str1.length;
      const len2 = str2.length;

      if (len1 === 0 && len2 === 0) {
        result = { distance: 1, result: 1 };
        return;
      }
      if (len1 === 0 || len2 === 0) {
        result = { distance: 0, result: 0 };
        return;
      }

      const maxDist = Math.floor(Math.max(len1, len2) / 2) - 1;
      const charsAndPositions: { [key: string]: number[] } = {};
      let matchingChars = 0;
      let transpositions = 0;

      // Track positions of characters in first string
      for (let i = 0; i < len1; i++) {
        const char = str1[i];
        if (!charsAndPositions[char]) {
          charsAndPositions[char] = [];
        }
        charsAndPositions[char].push(i);
      }

      // Find matching characters within max distance
      const str1Matches = new Array(len1).fill(false);
      const str2Matches = new Array(len2).fill(false);

      // First pass: find matching characters
      for (let i = 0; i < len1; i++) {
        const start = Math.max(0, i - maxDist);
        const end = Math.min(i + maxDist + 1, len2);

        for (let j = start; j < end; j++) {
          if (!str2Matches[j] && str1[i] === str2[j]) {
            str1Matches[i] = true;
            str2Matches[j] = true;
            matchingChars++;
            break;
          }
        }
      }

      // Second pass: count transpositions
      let str2Index = 0;
      for (let i = 0; i < len1; i++) {
        if (str1Matches[i]) {
          while (!str2Matches[str2Index]) {
            str2Index++;
          }
          if (str1[i] !== str2[str2Index]) {
            transpositions++;
          }
          str2Index++;
        }
      }

      transpositions /= 2;

      const jaroDistance = matchingChars === 0 ? 0 :
        (matchingChars / len1 + matchingChars / len2 + (matchingChars - transpositions) / matchingChars) / 3;

      result = { distance: jaroDistance, result: jaroDistance };
    });

    // Log performance warning for long strings
    if (executionTime > 50) { // O(m*n) can be slow for long strings
      console.warn(`JaroDistance performance warning: ${executionTime}ms for strings of length ${input.str1?.length || 0} and ${input.str2?.length || 0}`);
    }

    return result!;
  }
}

/**
 * Input interface for JaroWinklerDistance algorithm
 */
export interface JaroWinklerDistanceInput extends JaroDistanceInput {
  /** Scaling factor (default: 0.1) */
  scalingFactor?: number;
  /** Maximum length of common prefix to consider (default: 4) */
  maxPrefixLength?: number;
}

/**
 * Output interface for JaroWinklerDistance algorithm
 */
export interface JaroWinklerDistanceOutput {
  /** Jaro-Winkler distance between 0 and 1 */
  distance: number;
}

/**
 * Jaro-Winkler Distance Algorithm Implementation
 *
 * Calculates the Jaro-Winkler distance between two strings.
 * Jaro-Winkler gives more weight to strings that match from the beginning.
 *
 * **Time Complexity:** O(m * n) where m and n are the lengths of the input strings
 * **Space Complexity:** O(min(m, n)) - space for character position tracking
 */
export class JaroWinklerDistance extends BaseAlgorithm<JaroWinklerDistanceInput, JaroWinklerDistanceOutput> implements IAlgorithm<JaroWinklerDistanceInput, JaroWinklerDistanceOutput> {
  /**
   * Creates a new JaroWinklerDistance instance
   */
  constructor() {
    super('JaroWinklerDistance', 'O(m * n)', 'O(min(m, n))');
  }

  /**
   * Executes the Jaro-Winkler distance algorithm
   * @param input The input containing the strings to compare
   * @returns The Jaro-Winkler distance
   */
  public execute(input: JaroWinklerDistanceInput): JaroWinklerDistanceOutput {
    let result: JaroWinklerDistanceOutput;

    const executionTime = PerformanceMonitor.measureExecutionTime(() => {
      const { str1, str2, scalingFactor = 0.1, maxPrefixLength = 4 } = input;

      // Calculate Jaro distance first
      const jaroAlgo = new JaroDistance();
      const jaroResult = jaroAlgo.execute({ str1, str2 });
      const jaroDist = jaroResult.distance;

      // Calculate common prefix length
      let prefixLength = 0;
      const minLength = Math.min(str1.length, str2.length);
      const maxCheck = Math.min(maxPrefixLength, minLength);

      while (prefixLength < maxCheck && str1[prefixLength] === str2[prefixLength]) {
        prefixLength++;
      }

      // Apply Winkler modification
      const winklerDistance = jaroDist + (prefixLength * scalingFactor * (1 - jaroDist));

      result = { distance: winklerDistance };
    });

    // Log performance warning for long strings
    if (executionTime > 50) { // Similar to Jaro distance
      console.warn(`JaroWinklerDistance performance warning: ${executionTime}ms for strings of length ${input.str1?.length || 0} and ${input.str2?.length || 0}`);
    }

    return result!;
  }
}

/**
 * Input interface for LevenshteinDistance algorithm
 */
export interface LevenshteinDistanceInput {
  /** First string to compare */
  str1: string;
  /** Second string to compare */
  str2: string;
}

/**
 * Output interface for LevenshteinDistance algorithm
 */
export interface LevenshteinDistanceOutput {
  /** Normalized Levenshtein distance between 0 and 1 */
  distance: number;
  /** Backward-compatible result field */
  result: number;
}

/**
 * Levenshtein Distance Algorithm Implementation
 *
 * Calculates the Levenshtein (edit) distance between two strings and normalizes it.
 * The distance represents the minimum number of single-character edits required to change one string into another.
 *
 * **Time Complexity:** O(m * n) where m and n are the lengths of the input strings
 * **Space Complexity:** O(min(m, n)) - space for the dynamic programming table
 */
export class LevenshteinDistance extends BaseAlgorithm<LevenshteinDistanceInput, LevenshteinDistanceOutput> implements IAlgorithm<LevenshteinDistanceInput, LevenshteinDistanceOutput> {
  /**
   * Creates a new LevenshteinDistance instance
   */
  constructor() {
    super('LevenshteinDistance', 'O(m * n)', 'O(min(m, n))');
  }

  /**
   * Executes the Levenshtein distance algorithm
   * @param input The input containing the strings to compare
   * @returns The normalized Levenshtein distance
   */
  public execute(input: LevenshteinDistanceInput): LevenshteinDistanceOutput {
    let result: LevenshteinDistanceOutput;

    const executionTime = PerformanceMonitor.measureExecutionTime(() => {
      const { str1, str2 } = input;
      const len1 = str1.length;
      const len2 = str2.length;

      if (len1 === 0) {
        result = { distance: len2 === 0 ? 0 : 1, result: len2 === 0 ? 0 : 1 };
        return;
      }
      if (len2 === 0) {
        result = { distance: 1, result: 1 };
        return;
      }

      // Use two arrays to optimize space
      let prevRow = new Array(len2 + 1);
      let currRow = new Array(len2 + 1);

      // Initialize first row
      for (let j = 0; j <= len2; j++) {
        prevRow[j] = j;
      }

      // Fill the matrix
      for (let i = 1; i <= len1; i++) {
        currRow[0] = i;

        for (let j = 1; j <= len2; j++) {
          if (str1[i - 1] === str2[j - 1]) {
            currRow[j] = prevRow[j - 1];
          } else {
            currRow[j] = Math.min(
              prevRow[j] + 1,     // deletion
              currRow[j - 1] + 1, // insertion
              prevRow[j - 1] + 1  // substitution
            );
          }
        }

        // Swap rows
        [prevRow, currRow] = [currRow, prevRow];
      }

      const editDistance = prevRow[len2];
      const maxLength = Math.max(len1, len2);
      const normalizedDistance = maxLength === 0 ? 0 : 1 - (editDistance / maxLength);

      result = { distance: normalizedDistance, result: normalizedDistance };
    });

    // Log performance warning for long strings
    if (executionTime > 100) { // O(m*n) can be expensive
      console.warn(`LevenshteinDistance performance warning: ${executionTime}ms for strings of length ${input.str1?.length || 0} and ${input.str2?.length || 0}`);
    }

    return result!;
  }
}
