import { IIterator } from '../../core/interfaces/IIterator';

/**
 * Iterator interface for traversing graphs
 * @template T - The type of vertices in the graph
 */
export interface IGraphIterator<T> extends IIterator<T> {
  /**
   * Gets the current path from the start vertex to the current vertex
   * @returns An array of vertices representing the path
   * @throws Error if there is no current element
   */
  getCurrentPath(): T[];

  /**
   * Gets the depth/level of the current vertex in the traversal
   * @returns The depth level (0 for root/start vertex)
   * @throws Error if there is no current element
   */
  getCurrentDepth(): number;

  /**
   * Gets the parent vertex of the current vertex in the traversal tree
   * @returns The parent vertex, or undefined if current is root
   * @throws Error if there is no current element
   */
  getCurrentParent(): T | undefined;

  /**
   * Checks if the current vertex has been visited before in this traversal
   * @returns true if visited, false otherwise
   * @throws Error if there is no current element
   */
  isCurrentVisited(): boolean;

  /**
   * Resets the iterator to start a new traversal
   * @param startVertex The vertex to start traversal from (optional, uses original start if not provided)
   */
  reset(startVertex?: T): void;
}
