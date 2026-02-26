import { BaseAlgorithm } from '../../../core/abstracts/BaseAlgorithm';
import { IAlgorithm } from '../../../core/interfaces/IAlgorithm';
import { PerformanceMonitor } from '../../../performance';
import { IGraph } from '../../../graphs/interfaces/IGraph';

/**
 * Input interface for BreadthFirstSearch algorithm
 */
export interface BreadthFirstSearchInput<T> {
  /** The graph to traverse */
  graph: IGraph<T>;
  /** The starting node for traversal */
  startNode: T;
}

/**
 * Output interface for BreadthFirstSearch algorithm
 */
export interface BreadthFirstSearchOutput<T> {
  /** The order of visited nodes */
  traversalOrder: T[];
}

/**
 * Breadth-First Search (BFS) Algorithm Implementation
 *
 * Traverses a graph using breadth-first search, exploring all nodes at the current depth
 * before moving to the next depth level. BFS uses a queue data structure.
 *
 * **Time Complexity:** O(V + E) where V is the number of vertices and E is the number of edges
 * **Space Complexity:** O(V) - space for the queue and visited set
 *
 * BFS is useful for finding the shortest path in unweighted graphs and for level-order traversal.
 *
 * @template T The type of nodes in the graph
 */
export class BreadthFirstSearch<T> extends BaseAlgorithm<BreadthFirstSearchInput<T>, BreadthFirstSearchOutput<T>> implements IAlgorithm<BreadthFirstSearchInput<T>, BreadthFirstSearchOutput<T>> {
  /**
   * Creates a new BreadthFirstSearch instance
   */
  constructor() {
    super('BreadthFirstSearch', 'O(V + E)', 'O(V)');
  }

  /**
   * Executes the BFS algorithm
   * @param input The input containing the graph and start node
   * @returns The traversal order of nodes
   */
  public execute(input: BreadthFirstSearchInput<T>): BreadthFirstSearchOutput<T> {
    let result: BreadthFirstSearchOutput<T>;

    const executionTime = PerformanceMonitor.measureExecutionTime(() => {
      const { graph, startNode } = input;
      const visited = new Set<T>();
      const queue: T[] = [];
      const traversalOrder: T[] = [];

      visited.add(startNode);
      queue.push(startNode);

      while (queue.length > 0) {
        const currentNode = queue.shift()!;
        traversalOrder.push(currentNode);

        const neighbors = graph.getNeighbors(currentNode);
        for (const neighbor of neighbors) {
          if (!visited.has(neighbor)) {
            visited.add(neighbor);
            queue.push(neighbor);
          }
        }
      }

      result = { traversalOrder };
    });

    // Log performance warning for large graphs (O(V + E))
    if (executionTime > 50) {
      console.warn(`BreadthFirstSearch performance warning: ${executionTime}ms`);
    }

    return result!;
  }
}
