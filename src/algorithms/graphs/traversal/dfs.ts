import { BaseAlgorithm } from '../../../core/abstracts/BaseAlgorithm';
import { IAlgorithm } from '../../../core/interfaces/IAlgorithm';
import { PerformanceMonitor } from '../../../core/utils/PerformanceMonitor';
import { IGraph } from '../../../graphs/interfaces/IGraph';

/**
 * Input interface for DepthFirstSearch algorithm
 */
export interface DepthFirstSearchInput<T> {
  /** The graph to traverse */
  graph: IGraph<T>;
  /** The starting node for traversal */
  startNode: T;
}

/**
 * Output interface for DepthFirstSearch algorithm
 */
export interface DepthFirstSearchOutput<T> {
  /** The order of visited nodes */
  traversalOrder: T[];
}

/**
 * Depth-First Search (DFS) Algorithm Implementation
 *
 * Traverses a graph using depth-first search, exploring as far as possible along each branch
 * before backtracking. DFS uses a stack data structure (implemented recursively here).
 *
 * **Time Complexity:** O(V + E) where V is the number of vertices and E is the number of edges
 * **Space Complexity:** O(V) - space for the recursion stack and visited set
 *
 * DFS is useful for topological sorting, detecting cycles, and solving maze problems.
 *
 * @template T The type of nodes in the graph
 */
export class DepthFirstSearch<T> extends BaseAlgorithm<DepthFirstSearchInput<T>, DepthFirstSearchOutput<T>> implements IAlgorithm<DepthFirstSearchInput<T>, DepthFirstSearchOutput<T>> {
  /**
   * Creates a new DepthFirstSearch instance
   */
  constructor() {
    super('DepthFirstSearch', 'O(V + E)', 'O(V)');
  }

  /**
   * Executes the DFS algorithm
   * @param input The input containing the graph and start node
   * @returns The traversal order of nodes
   */
  public execute(input: DepthFirstSearchInput<T>): DepthFirstSearchOutput<T> {
    let result: DepthFirstSearchOutput<T>;

    const executionTime = PerformanceMonitor.measureExecutionTime(() => {
      const { graph, startNode } = input;
      const visited = new Set<T>();
      const traversalOrder: T[] = [];

      const dfsRecursive = (node: T) => {
        visited.add(node);
        traversalOrder.push(node);

        const neighbors = graph.getNeighbors(node);
        for (const neighbor of neighbors) {
          if (!visited.has(neighbor)) {
            dfsRecursive(neighbor);
          }
        }
      };

      dfsRecursive(startNode);

      result = { traversalOrder };
    });

    // Log performance warning for large graphs (O(V + E))
    if (executionTime > 50) {
      console.warn(`DepthFirstSearch performance warning: ${executionTime}ms`);
    }

    return result!;
  }
}
