import { IAlgorithm } from '../../../core/interfaces/IAlgorithm';
import { IGraph } from '../../interfaces/IGraph';

/**
 * Interface for graph algorithms
 * @template T The type of vertices in the graph
 * @template R The type of result returned by the algorithm
 * @template W The type of edge weights (default: number)
 */
export interface IGraphAlgorithm<T, R, W = number> extends IAlgorithm<IGraph<T, W>, R> {
  /**
   * Executes the graph algorithm on the given graph
   * @param graph The graph to execute the algorithm on
   * @param args Additional arguments specific to the algorithm
   * @returns The result of the algorithm execution
   */
  execute(graph: IGraph<T, W>, ...args: any[]): R;
}
