import { BaseAlgorithm } from '../../../core/abstracts/BaseAlgorithm';
import { IGraph } from '../../interfaces/IGraph';

/**
 * Interface for cycle detection results
 * @template T The type of vertices in the graph
 */
export interface ICycleDetectionResult<T> {
  /**
   * Whether a cycle exists in the graph
   */
  hasCycle: boolean;

  /**
   * A cycle found in the graph (undefined if no cycle exists)
   */
  cycle?: T[];
}

/**
 * Cycle Detection implementation for graphs
 *
 * This algorithm detects whether a graph contains cycles. For directed graphs,
 * it uses DFS with coloring. For undirected graphs, it uses DFS with parent tracking.
 * Cycle detection is important for topological sorting and graph validation.
 *
 * Time Complexity: O(V + E) for both directed and undirected graphs
 * Space Complexity: O(V) for recursion stack and data structures
 *
 * @template T The type of vertices in the graph
 * @template W The type of edge weights (default: number)
 */
export class CycleDetection<T, W = number> extends BaseAlgorithm<IGraph<T, W>, ICycleDetectionResult<T>> {

  /**
   * Creates a new CycleDetection instance
   */
  constructor() {
    super('Cycle Detection', 'O(V + E)', 'O(V)');
  }

  /**
   * Detects cycles in the given graph
   * @param graph The graph to analyze
   * @returns The cycle detection result
   */
  public execute(graph: IGraph<T, W>): ICycleDetectionResult<T> {
    const vertices = graph.getVertices();

    if (graph.isDirected()) {
      return this.detectCycleDirected(graph, vertices);
    } else {
      return this.detectCycleUndirected(graph, vertices);
    }
  }

  /**
   * Detects cycles in a directed graph using DFS with coloring
   */
  private detectCycleDirected(graph: IGraph<T, W>, vertices: T[]): ICycleDetectionResult<T> {
    const visited = new Set<T>();
    const visiting = new Set<T>(); // Currently being visited (in recursion stack)
    const parent = new Map<T, T | null>(); // Track parent to avoid going back
    const recursionStack = new Set<T>(); // Track current recursion stack

    const dfs = (vertex: T): ICycleDetectionResult<T> | null => {
      if (visited.has(vertex)) {
        return null;
      }

      visited.add(vertex);
      visiting.add(vertex);
      recursionStack.add(vertex);

      for (const neighbor of graph.getNeighbors(vertex)) {
        if (!visited.has(neighbor)) {
          parent.set(neighbor, vertex);
          const result = dfs(neighbor);
          if (result) return result;
        } else if (visiting.has(neighbor)) {
          // Found a cycle - reconstruct it from neighbor to current vertex
          const cycle: T[] = [];

          // Start from the current vertex and work backwards to neighbor
          let current = vertex;
          cycle.push(current);

          // Build cycle path by going back through parents
          while (current !== neighbor && current !== null && current !== undefined) {
            const parentVertex = parent.get(current);
            if (parentVertex !== null && parentVertex !== undefined) {
              current = parentVertex;
              cycle.unshift(current);
            } else {
              break;
            }
          }
          cycle.unshift(neighbor);

          return { hasCycle: true, cycle };
        }
      }

      visiting.delete(vertex);
      recursionStack.delete(vertex);
      return null;
    };

    for (const vertex of vertices) {
      if (!visited.has(vertex)) {
        const result = dfs(vertex);
        if (result) return result;
      }
    }

    return { hasCycle: false };
  }

  /**
   * Detects cycles in an undirected graph using DFS with parent tracking
   */
  private detectCycleUndirected(graph: IGraph<T, W>, vertices: T[]): ICycleDetectionResult<T> {
    const visited = new Set<T>();
    const parent = new Map<T, T | null>();

    const dfs = (vertex: T, currentParent: T | null): ICycleDetectionResult<T> | null => {
      visited.add(vertex);
      parent.set(vertex, currentParent);

      for (const neighbor of graph.getNeighbors(vertex)) {
        if (!visited.has(neighbor)) {
          const result = dfs(neighbor, vertex);
          if (result) return result;
        } else if (neighbor !== currentParent) {
          // Cycle found (back edge to non-parent)
          // Reconstruct cycle using DFS path to avoid infinite loops
          const cycle: T[] = [];
          let current = vertex;
          cycle.unshift(current); // Add to front to build in reverse order

          while (current !== null && current !== neighbor) {
            current = parent.get(current)!;
            if (current !== null) {
              cycle.unshift(current);
            }
          }

          cycle.push(neighbor); // Close the cycle
          return { hasCycle: true, cycle };
        }
      }

      return null;
    };

    for (const vertex of vertices) {
      if (!visited.has(vertex)) {
        const result = dfs(vertex, null);
        if (result) return result;
      }
    }

    return { hasCycle: false };
  }
}
