import { IGraphAlgorithm } from './IGraphAlgorithm';
import { IGraph } from '../../interfaces/IGraph';

/**
 * Interface for graph traversal algorithms
 * @template T The type of vertices in the graph
 * @template W The type of edge weights (default: number)
 */
export interface ITraversalAlgorithm<T, W = number> extends IGraphAlgorithm<T, ITraversalResult<T>, W> {
  /**
   * Traverses the graph starting from the specified vertex
   * @param graph The graph to traverse
   * @param startVertex The vertex to start traversal from
   * @returns The traversal result containing visited vertices and paths
   */
  traverse(graph: IGraph<T, W>, startVertex: T): ITraversalResult<T>;
}

/**
 * Interface for traversal algorithm results
 * @template T The type of vertices in the graph
 */
export interface ITraversalResult<T> {
  /**
   * The order in which vertices were visited
   */
  visited: T[];

  /**
   * The path from start vertex to each visited vertex (if applicable)
   * Key: target vertex, Value: path from start to target
   */
  paths?: Map<T, T[]>;

  /**
   * The parent of each vertex in the traversal tree
   * Key: vertex, Value: parent vertex
   */
  parents?: Map<T, T | null>;

  /**
   * The level/depth of each vertex from the start vertex
   * Key: vertex, Value: level/depth
   */
  levels?: Map<T, number>;
}
