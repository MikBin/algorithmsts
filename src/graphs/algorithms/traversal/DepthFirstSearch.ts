import { BaseAlgorithm } from '../../../core/abstracts/BaseAlgorithm';
import { IGraph } from '../../interfaces/IGraph';
import { ITraversalAlgorithm, ITraversalResult } from '../interfaces/ITraversalAlgorithm';

/**
 * Depth-First Search (DFS) implementation for graph traversal
 *
 * DFS explores the graph by going as deep as possible along each branch
 * before backtracking. This algorithm is useful for topological sorting,
 * cycle detection, and exploring graph connectivity.
 *
 * Time Complexity: O(V + E) where V is vertices and E is edges
 * Space Complexity: O(V) for the recursion stack and visited set
 *
 * @template T The type of vertices in the graph
 * @template W The type of edge weights (default: number)
 */
export class DepthFirstSearch<T, W = number> extends BaseAlgorithm<IGraph<T, W>, ITraversalResult<T>>
  implements ITraversalAlgorithm<T, W> {

  /**
   * Creates a new DFS instance
   */
  constructor() {
    super('Depth-First Search', 'O(V + E)', 'O(V)');
  }

  /**
   * Executes DFS on the given graph starting from the specified vertex
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
    const parents = new Map<T, T | null>();
    const discoveryOrder: T[] = [];
    const paths = new Map<T, T[]>();

    // Initialize
    parents.set(startVertex, null);
    paths.set(startVertex, [startVertex]);

    // Recursive DFS helper
    const dfsVisit = (vertex: T, parent: T | null, currentPath: T[]) => {
      visited.add(vertex);
      discoveryOrder.push(vertex);
      parents.set(vertex, parent);
      paths.set(vertex, [...currentPath]);

      for (const neighbor of graph.getNeighbors(vertex)) {
        if (!visited.has(neighbor)) {
          dfsVisit(neighbor, vertex, [...currentPath, neighbor]);
        }
      }
    };

    // Start DFS from the start vertex
    dfsVisit(startVertex, null, [startVertex]);

    return {
      visited: discoveryOrder,
      paths,
      parents
    };
  }

  /**
   * Executes the DFS algorithm (implements IAlgorithm interface)
   * @param graph The graph to traverse
   * @param startVertex The vertex to start from (passed as additional argument)
   * @returns The traversal result
   */
  public execute(graph: IGraph<T, W>, startVertex?: T): ITraversalResult<T> {
    if (startVertex === undefined) {
      throw new Error('Start vertex must be provided for DFS traversal');
    }
    return this.traverse(graph, startVertex);
  }
}
