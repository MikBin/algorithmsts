import { IAlgorithm } from '../interfaces/IAlgorithm';

/**
 * Abstract implementation of IAlgorithm<TInput, TOutput>
 */
export abstract class BaseAlgorithm<TInput, TOutput> implements IAlgorithm<TInput, TOutput> {
  protected readonly name: string;
  protected readonly timeComplexity: string;
  protected readonly spaceComplexity: string;

  /**
   * Creates a new BaseAlgorithm instance
   * @param name The name of the algorithm
   * @param timeComplexity The time complexity of the algorithm
   * @param spaceComplexity The space complexity of the algorithm
   */
  constructor(name: string, timeComplexity: string, spaceComplexity: string) {
    this.name = name;
    this.timeComplexity = timeComplexity;
    this.spaceComplexity = spaceComplexity;
  }

  /**
   * Executes the algorithm with the given input
   * @param input The input data for the algorithm
   * @returns The output result of the algorithm
   */
  public abstract execute(input: TInput): TOutput;

  /**
   * Gets the name of the algorithm
   * @returns The algorithm name
   */
  public getName(): string {
    return this.name;
  }

  /**
   * Gets the time complexity of the algorithm
   * @returns A string representation of the time complexity
   */
  public getTimeComplexity(): string {
    return this.timeComplexity;
  }

  /**
   * Gets the space complexity of the algorithm
   * @returns A string representation of the space complexity
   */
  public getSpaceComplexity(): string {
    return this.spaceComplexity;
  }
}
