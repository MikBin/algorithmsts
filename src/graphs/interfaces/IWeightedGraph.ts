import { IGraph } from './IGraph';

/**
 * Interface for weighted graphs extending IGraph
 * @template T - The type of vertices in the graph
 * @template W - The type of edge weights
 */
export interface IWeightedGraph<T, W> extends IGraph<T, W> {
  /**
   * Updates the weight of an existing edge
   * @param from The source vertex
   * @param to The target vertex
   * @param weight The new weight of the edge
   * @throws Error if vertices do not exist or edge does not exist
   * @complexity O(1) for adjacency matrix, O(degree(v)) for adjacency list
   */
  updateEdgeWeight(from: T, to: T, weight: W): void;

  /**
   * Gets all edges with their weights
   * @returns An array of weighted edge tuples [from, to, weight]
   * @complexity O(E) where E is the number of edges
   */
  getWeightedEdges(): Array<[T, T, W]>;

  /**
   * Finds the minimum weight edge incident to a vertex
   * @param vertex The vertex to check
   * @returns The minimum weight edge as [neighbor, weight], or undefined if no edges
   * @throws Error if vertex does not exist
   * @complexity O(degree(v)) where degree(v) is the number of neighbors
   */
  getMinWeightEdge(vertex: T): [T, W] | undefined;

  /**
   * Finds the maximum weight edge incident to a vertex
   * @param vertex The vertex to check
   * @returns The maximum weight edge as [neighbor, weight], or undefined if no edges
   * @throws Error if vertex does not exist
   * @complexity O(degree(v)) where degree(v) is the number of neighbors
   */
  getMaxWeightEdge(vertex: T): [T, W] | undefined;
}
