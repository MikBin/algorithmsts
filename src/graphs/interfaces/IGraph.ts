import { IDataStructure } from '../../core/interfaces/IDataStructure';

/**
 * Basic graph interface extending IDataStructure
 * @template T - The type of vertices in the graph
 * @template W - The type of edge weights (default: number)
 */
export interface IGraph<T, W = number> extends IDataStructure<T> {
  /**
   * Gets all vertices in the graph
   * @returns An array of all vertices
   * @complexity O(V) where V is the number of vertices
   */
  getVertices(): T[];

  /**
   * Gets all edges in the graph as pairs of vertices
   * @returns An array of edge tuples [from, to, weight?]
   * @complexity O(E) where E is the number of edges
   */
  getEdges(): Array<[T, T] | [T, T, W]>;

  /**
   * Gets the neighbors of a vertex
   * @param vertex The vertex to get neighbors for
   * @returns An array of neighboring vertices
   * @throws Error if vertex does not exist
   * @complexity O(degree(v)) where degree(v) is the number of neighbors
   */
  getNeighbors(vertex: T): T[];

  /**
   * Gets the weight of an edge between two vertices
   * @param from The source vertex
   * @param to The target vertex
   * @returns The weight of the edge, or undefined if no edge exists
   * @throws Error if vertices do not exist
   * @complexity O(1) for adjacency matrix, O(degree(v)) for adjacency list
   */
  getEdgeWeight(from: T, to: T): W | undefined;

  /**
   * Checks if an edge exists between two vertices
   * @param from The source vertex
   * @param to The target vertex
   * @returns true if edge exists, false otherwise
   * @throws Error if vertices do not exist
   * @complexity O(1) for adjacency matrix, O(degree(v)) for adjacency list
   */
  hasEdge(from: T, to: T): boolean;

  /**
   * Adds a vertex to the graph
   * @param vertex The vertex to add
   * @throws Error if vertex already exists
   * @complexity O(1) amortized
   */
  addVertex(vertex: T): void;

  /**
   * Removes a vertex from the graph
   * @param vertex The vertex to remove
   * @throws Error if vertex does not exist
   * @complexity O(V + E) where V is vertices and E is edges
   */
  removeVertex(vertex: T): void;

  /**
   * Adds an edge between two vertices
   * @param from The source vertex
   * @param to The target vertex
   * @param weight The weight of the edge (optional for unweighted graphs)
   * @throws Error if vertices do not exist or edge already exists
   * @complexity O(1) amortized for adjacency list, O(1) for adjacency matrix
   */
  addEdge(from: T, to: T, weight?: W): void;

  /**
   * Removes an edge between two vertices
   * @param from The source vertex
   * @param to The target vertex
   * @throws Error if vertices do not exist or edge does not exist
   * @complexity O(degree(v)) for adjacency list, O(1) for adjacency matrix
   */
  removeEdge(from: T, to: T): void;

  /**
   * Gets the number of vertices in the graph
   * @returns The number of vertices
   * @complexity O(1)
   */
  getVertexCount(): number;

  /**
   * Gets the number of edges in the graph
   * @returns The number of edges
   * @complexity O(1)
   */
  getEdgeCount(): number;

  /**
   * Checks if the graph is directed
   * @returns true if directed, false if undirected
   * @complexity O(1)
   */
  isDirected(): boolean;

  /**
   * Checks if the graph is weighted
   * @returns true if weighted, false if unweighted
   * @complexity O(1)
   */
  isWeighted(): boolean;
}
