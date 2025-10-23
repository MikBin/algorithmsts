import { IAlgorithm } from '../../core/interfaces/IAlgorithm';

/**
 * Criteria for selecting an algorithm
 */
export interface SelectionCriteria {
  /** Input size for the algorithm */
  inputSize: number;
  /** Desired time complexity (optional) */
  preferredComplexity?: string;
  /** Whether to prioritize speed over other factors */
  prioritizeSpeed?: boolean;
  /** Maximum allowed execution time in milliseconds */
  maxExecutionTime?: number;
}

/**
 * Result of algorithm selection
 */
export interface AlgorithmSelectionResult<T> {
  /** The selected algorithm */
  selectedAlgorithm: T;
  /** Reason for selection */
  reason: string;
  /** Expected performance metrics */
  expectedMetrics: {
    timeComplexity: string;
    spaceComplexity: string;
    estimatedExecutionTime?: number;
  };
}

/**
 * Strategy for selecting the best algorithm based on input characteristics
 */
export class AlgorithmSelector {
  /**
   * Selects the best sorting algorithm based on input size and characteristics
   * @param algorithms Array of available sorting algorithms
   * @param criteria Selection criteria
   * @returns The selected algorithm with reasoning
   */
  public static selectSortingAlgorithm(
    algorithms: Array<IAlgorithm<any, any>>,
    criteria: SelectionCriteria
  ): AlgorithmSelectionResult<IAlgorithm<any, any>> {
    const { inputSize, prioritizeSpeed = true } = criteria;

    // For small arrays, any algorithm is fine
    if (inputSize <= 10) {
      const algorithm = algorithms.find(a => a.getName().includes('CountingSort')) ||
                        algorithms.find(a => a.getName().includes('RadixSort')) ||
                        algorithms[0];
      return {
        selectedAlgorithm: algorithm!,
        reason: `For small input size (${inputSize}), any sorting algorithm performs well`,
        expectedMetrics: {
          timeComplexity: algorithm!.getTimeComplexity(),
          spaceComplexity: algorithm!.getSpaceComplexity()
        }
      };
    }

    // For medium arrays, prefer O(n log n) algorithms
    if (inputSize <= 1000) {
      const algorithm = algorithms.find(a => a.getName().includes('RadixSort')) ||
                        algorithms.find(a => a.getName().includes('CountingSort')) ||
                        algorithms[0];
      return {
        selectedAlgorithm: algorithm!,
        reason: `For medium input size (${inputSize}), radix/counting sort provides good balance of speed and stability`,
        expectedMetrics: {
          timeComplexity: algorithm!.getTimeComplexity(),
          spaceComplexity: algorithm!.getSpaceComplexity()
        }
      };
    }

    // For large arrays, prefer linear time algorithms if available
    if (prioritizeSpeed) {
      const algorithm = algorithms.find(a => a.getTimeComplexity().includes('O(n)')) ||
                        algorithms.find(a => a.getName().includes('CountingSort')) ||
                        algorithms[0];
      return {
        selectedAlgorithm: algorithm!,
        reason: `For large input size (${inputSize}), prioritizing speed with linear time complexity`,
        expectedMetrics: {
          timeComplexity: algorithm!.getTimeComplexity(),
          spaceComplexity: algorithm!.getSpaceComplexity()
        }
      };
    }

    // Default fallback
    return {
      selectedAlgorithm: algorithms[0],
      reason: `Default selection for input size ${inputSize}`,
      expectedMetrics: {
        timeComplexity: algorithms[0].getTimeComplexity(),
        spaceComplexity: algorithms[0].getSpaceComplexity()
      }
    };
  }

  /**
   * Selects the best searching algorithm based on input characteristics
   * @param algorithms Array of available searching algorithms
   * @param criteria Selection criteria
   * @returns The selected algorithm with reasoning
   */
  public static selectSearchingAlgorithm(
    algorithms: Array<IAlgorithm<any, any>>,
    criteria: SelectionCriteria
  ): AlgorithmSelectionResult<IAlgorithm<any, any>> {
    const { inputSize } = criteria;

    // Binary search is optimal for sorted arrays
    const binarySearch = algorithms.find(a => a.getName().includes('BinarySearch'));
    if (binarySearch) {
      return {
        selectedAlgorithm: binarySearch,
        reason: `Binary search is optimal for searching in sorted arrays of size ${inputSize}`,
        expectedMetrics: {
          timeComplexity: binarySearch.getTimeComplexity(),
          spaceComplexity: binarySearch.getSpaceComplexity()
        }
      };
    }

    // Fallback to first available algorithm
    return {
      selectedAlgorithm: algorithms[0],
      reason: `Selected first available searching algorithm for input size ${inputSize}`,
      expectedMetrics: {
        timeComplexity: algorithms[0].getTimeComplexity(),
        spaceComplexity: algorithms[0].getSpaceComplexity()
      }
    };
  }

  /**
   * Selects the best string similarity algorithm based on string lengths
   * @param algorithms Array of available string algorithms
   * @param criteria Selection criteria (inputSize represents max string length)
   * @returns The selected algorithm with reasoning
   */
  public static selectStringSimilarityAlgorithm(
    algorithms: Array<IAlgorithm<any, any>>,
    criteria: SelectionCriteria
  ): AlgorithmSelectionResult<IAlgorithm<any, any>> {
    const { inputSize, prioritizeSpeed = true } = criteria;

    // For short strings, prefer simpler algorithms
    if (inputSize <= 50) {
      const algorithm = algorithms.find(a => a.getName().includes('NgramSimilarity')) ||
                        algorithms.find(a => a.getName().includes('JaroDistance')) ||
                        algorithms[0];
      return {
        selectedAlgorithm: algorithm!,
        reason: `For short strings (max length ${inputSize}), n-gram similarity provides good balance`,
        expectedMetrics: {
          timeComplexity: algorithm!.getTimeComplexity(),
          spaceComplexity: algorithm!.getSpaceComplexity()
        }
      };
    }

    // For longer strings, prefer faster algorithms if speed is prioritized
    if (prioritizeSpeed) {
      const algorithm = algorithms.find(a => a.getTimeComplexity().includes('O(m + n)')) ||
                        algorithms.find(a => a.getName().includes('NgramSimilarity')) ||
                        algorithms[0];
      return {
        selectedAlgorithm: algorithm!,
        reason: `For longer strings (max length ${inputSize}), prioritizing speed with linear complexity`,
        expectedMetrics: {
          timeComplexity: algorithm!.getTimeComplexity(),
          spaceComplexity: algorithm!.getSpaceComplexity()
        }
      };
    }

    // For accuracy over speed, prefer more sophisticated algorithms
    const algorithm = algorithms.find(a => a.getName().includes('LevenshteinDistance')) ||
                      algorithms.find(a => a.getName().includes('JaroWinklerDistance')) ||
                      algorithms[0];
    return {
      selectedAlgorithm: algorithm!,
      reason: `For accuracy (max length ${inputSize}), selecting sophisticated distance algorithm`,
      expectedMetrics: {
        timeComplexity: algorithm!.getTimeComplexity(),
        spaceComplexity: algorithm!.getSpaceComplexity()
      }
    };
  }
}
