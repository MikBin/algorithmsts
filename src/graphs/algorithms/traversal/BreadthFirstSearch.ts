import { BaseAlgorithm } from '../../../core/abstracts/BaseAlgorithm';
import { IGraph } from '../../interfaces/IGraph';
import { ITraversalAlgorithm, ITraversalResult } from '../interfaces/ITraversalAlgorithm';

/**
 * Breadth-First Search (BFS) implementation for graph traversal
 *
 * BFS explores the graph level by level, visiting all neighbors of a vertex
 * before moving to the next level. This algorithm is useful for finding
 * shortest paths in unweighted graphs and for exploring graph structure.
 *
 * Time Complexity: O(V + E) where V is vertices and E is edges
 * Space Complexity: O(V) for the queue and visited set
 *
 * @template T The type of vertices in the graph
 * @template W The type of edge weights (default: number)
 */
export class BreadthFirstSearch<T, W = number> extends BaseAlgorithm<IGraph<T, W>, ITraversalResult<T>>
  implements ITraversalAlgorithm<T, W> {

  /**
   * Creates a new BFS instance
   */
  constructor() {
    super('Breadth-First Search', 'O(V + E)', 'O(V)');
  }

  /**
   * Executes BFS on the given graph starting from the specified vertex
   * @param graph The graph to traverse
   * @param startVertex The vertex to start traversal from
   * @returns The traversal result containing visited vertices and paths
   * @throws Error if start vertex does not exist in the graph
   */
  public traverse(graph: IGraph<T, W>, startVertex: T): ITraversalResult<T> {
    if (!graph.getVertices().includes(startVertex)) {
      throw new Error(`Start vertex ${startVertex} does not exist in the graph`);
    }

    const visited = new Set<T>();
    const queue: T[] = [];
    const parents = new Map<T, T | null>();
    const levels = new Map<T, number>();
    const paths = new Map<T, T[]>();

    // Initialize
    queue.push(startVertex);
    visited.add(startVertex);
    parents.set(startVertex, null);
    levels.set(startVertex, 0);
    paths.set(startVertex, [startVertex]);

    while (queue.length > 0) {
      const current = queue.shift()!;
      const currentLevel = levels.get(current)!;

      // Explore neighbors
      for (const neighbor of graph.getNeighbors(current)) {
        if (!visited.has(neighbor)) {
          visited.add(neighbor);
          queue.push(neighbor);
          parents.set(neighbor, current);
          levels.set(neighbor, currentLevel + 1);

          // Reconstruct path
          const currentPath = paths.get(current)!;
          paths.set(neighbor, [...currentPath, neighbor]);
        }
      }
    }

    return {
      visited: Array.from(visited),
      paths,
      parents,
      levels,
      // Backward-compatible alias used by docs tests
      get result() { return Array.from(visited); }
    } as unknown as any;
  }

  /**
   * Executes the BFS algorithm (implements IAlgorithm interface)
   * @param graph The graph to traverse
   * @param startVertex The vertex to start from (passed as additional argument)
   * @returns The traversal result
   */
  public execute(graphOrInput: IGraph<T, W> | { graph: IGraph<T, W>; startNode: T }, maybeStart?: T): ITraversalResult<T> {
    if (typeof (graphOrInput as any).getVertices === 'function') {
      const graph = graphOrInput as IGraph<T, W>;
      if (maybeStart === undefined) {
        throw new Error('Start vertex must be provided for BFS traversal');
      }
      return this.traverse(graph, maybeStart);
    }
    const { graph, startNode } = graphOrInput as { graph: IGraph<T, W>; startNode: T };
    return this.traverse(graph, startNode);
  }
}
