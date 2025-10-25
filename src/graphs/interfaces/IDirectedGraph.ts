import { IGraph } from './IGraph';

/**
 * Interface for directed graphs extending IGraph
 * @template T - The type of vertices in the graph
 * @template W - The type of edge weights (default: number)
 */
export interface IDirectedGraph<T, W = number> extends IGraph<T, W> {
  /**
   * Gets the outgoing neighbors (successors) of a vertex
   * @param vertex The vertex to get successors for
   * @returns An array of outgoing neighboring vertices
   * @throws Error if vertex does not exist
   * @complexity O(out-degree(v)) where out-degree(v) is the number of outgoing edges
   */
  getSuccessors(vertex: T): T[];

  /**
   * Gets the incoming neighbors (predecessors) of a vertex
   * @param vertex The vertex to get predecessors for
   * @returns An array of incoming neighboring vertices
   * @throws Error if vertex does not exist
   * @complexity O(in-degree(v)) where in-degree(v) is the number of incoming edges
   */
  getPredecessors(vertex: T): T[];

  /**
   * Gets the out-degree of a vertex
   * @param vertex The vertex to check
   * @returns The number of outgoing edges
   * @throws Error if vertex does not exist
   * @complexity O(1) amortized
   */
  getOutDegree(vertex: T): number;

  /**
   * Gets the in-degree of a vertex
   * @param vertex The vertex to check
   * @returns The number of incoming edges
   * @throws Error if vertex does not exist
   * @complexity O(1) amortized
   */
  getInDegree(vertex: T): number;

  /**
   * Gets all edges as directed pairs
   * @returns An array of directed edge tuples [from, to] or [from, to, weight]
   * @complexity O(E) where E is the number of edges
   */
  getDirectedEdges(): Array<[T, T] | [T, T, W]>;

  /**
   * Checks if there is a path from one vertex to another
   * @param from The source vertex
   * @param to The target vertex
   * @returns true if a path exists, false otherwise
   * @throws Error if vertices do not exist
   * @complexity O(V + E) in worst case
   */
  hasPath(from: T, to: T): boolean;

  /**
   * Gets the topological order of vertices (if acyclic)
   * @returns An array of vertices in topological order, or undefined if cyclic
   * @complexity O(V + E)
   */
  getTopologicalOrder(): T[] | undefined;

  /**
   * Checks if the graph is acyclic (has no cycles)
   * @returns true if acyclic, false if cyclic
   * @complexity O(V + E)
   */
  isAcyclic(): boolean;
}
