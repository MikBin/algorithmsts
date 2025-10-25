import { IGraph } from './IGraph';

/**
 * Interface for undirected graphs extending IGraph
 * @template T - The type of vertices in the graph
 * @template W - The type of edge weights (default: number)
 */
export interface IUndirectedGraph<T, W = number> extends IGraph<T, W> {
  /**
   * Gets the degree of a vertex (number of incident edges)
   * @param vertex The vertex to check
   * @returns The degree of the vertex
   * @throws Error if vertex does not exist
   * @complexity O(1) amortized
   */
  getDegree(vertex: T): number;

  /**
   * Gets all edges as undirected pairs (each edge appears once)
   * @returns An array of undirected edge tuples [v1, v2] or [v1, v2, weight]
   * @complexity O(E) where E is the number of edges
   */
  getUndirectedEdges(): Array<[T, T] | [T, T, W]>;

  /**
   * Checks if the graph is connected (has a path between every pair of vertices)
   * @returns true if connected, false otherwise
   * @complexity O(V + E)
   */
  isConnected(): boolean;

  /**
   * Gets all connected components of the graph
   * @returns An array of arrays, where each inner array is a connected component
   * @complexity O(V + E)
   */
  getConnectedComponents(): T[][];

  /**
   * Finds the shortest path between two vertices (unweighted)
   * @param from The source vertex
   * @param to The target vertex
   * @returns An array of vertices representing the path, or undefined if no path exists
   * @throws Error if vertices do not exist
   * @complexity O(V + E)
   */
  getShortestPath(from: T, to: T): T[] | undefined;

  /**
   * Checks if the graph is a tree (connected and acyclic)
   * @returns true if the graph is a tree, false otherwise
   * @complexity O(V + E)
   */
  isTree(): boolean;

  /**
   * Checks if the graph contains a cycle
   * @returns true if cyclic, false if acyclic
   * @complexity O(V + E)
   */
  hasCycle(): boolean;
}
