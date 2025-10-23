import { IGraphAlgorithm } from './IGraphAlgorithm';
import { IGraph } from '../../interfaces/IGraph';

/**
 * Interface for pathfinding algorithms
 * @template T The type of vertices in the graph
 * @template W The type of edge weights (default: number)
 */
export interface IPathfindingAlgorithm<T, W = number> extends IGraphAlgorithm<T, IPathResult<T, W>, W> {
  /**
   * Finds the shortest path between two vertices
   * @param graph The graph to search
   * @param start The starting vertex
   * @param end The ending vertex
   * @returns The path result containing path and distance information
   */
  findShortestPath(graph: IGraph<T, W>, start: T, end: T): IPathResult<T, W>;
}

/**
 * Interface for pathfinding algorithm results
 * @template T The type of vertices in the graph
 * @template W The type of edge weights (default: number)
 */
export interface IPathResult<T, W = number> {
  /**
   * The path from start to end vertex (empty if no path exists)
   */
  path: T[];

  /**
   * The total distance/cost of the path
   */
  distance: W;

  /**
   * Whether a path was found
   */
  found: boolean;

  /**
   * Additional path information (distances to all vertices, etc.)
   */
  distances?: Map<T, W>;

  /**
   * Parent pointers for path reconstruction
   */
  parents?: Map<T, T | null>;
}
