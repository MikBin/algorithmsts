/**
 * Interface for algorithm implementations
 */
export interface IAlgorithm<TInput, TOutput> {
  /**
   * Executes the algorithm with the given input
   * @param input The input data for the algorithm
   * @returns The output result of the algorithm
   */
  execute(input: TInput): TOutput;

  /**
   * Gets the name of the algorithm
   * @returns The algorithm name
   */
  getName(): string;

  /**
   * Gets the time complexity of the algorithm
   * @returns A string representation of the time complexity (e.g., "O(n)", "O(log n)")
   */
  getTimeComplexity(): string;

  /**
   * Gets the space complexity of the algorithm
   * @returns A string representation of the space complexity
   */
  getSpaceComplexity(): string;
}
