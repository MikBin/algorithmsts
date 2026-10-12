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

    for (const startVertex of vertices) {
      if (visited.has(startVertex)) continue;

      // Iterative DFS stack
      // We push tuples of: [vertex, parentVertex, isBacktrackMode]
      const stack: [T, T | null, boolean][] = [[startVertex, null, false]];

      while (stack.length > 0) {
        const [vertex, p, isBacktrack] = stack.pop()!;

        if (isBacktrack) {
          visiting.delete(vertex);
          continue;
        }

        if (visited.has(vertex)) continue;

        visited.add(vertex);
        visiting.add(vertex);
        parent.set(vertex, p);

        // Put backtrack marker
        stack.push([vertex, p, true]);

        const neighbors = graph.getNeighbors(vertex);
        // Process in reverse to maintain left-to-right DFS order (optional but standard)
        for (let i = neighbors.length - 1; i >= 0; i--) {
          const neighbor = neighbors[i];

          if (!visited.has(neighbor)) {
            stack.push([neighbor, vertex, false]);
          } else if (visiting.has(neighbor)) {
            // Cycle detected
            const cycle: T[] = [];
            let current: T | null = vertex;

            // Reconstruct cycle backwards
            while (current !== null && current !== neighbor) {
              cycle.push(current);
              current = parent.get(current) ?? null;
            }
            cycle.push(neighbor);

            // Re-add the start of the cycle (which is the current vertex) to complete it if desired by convention.
            // The existing code unshifts twice causing duplicates.
            // A well formed cycle usually looks like A-B-C-A, or just the sequence A-B-C.
            // Let's reverse it to get forward order.
            cycle.reverse();
            return { hasCycle: true, cycle };
          }
        }
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

    for (const startVertex of vertices) {
      if (visited.has(startVertex)) continue;

      const stack: [T, T | null][] = [[startVertex, null]];

      while (stack.length > 0) {
        const [vertex, p] = stack.pop()!;

        if (visited.has(vertex)) continue;

        visited.add(vertex);
        parent.set(vertex, p);

        const neighbors = graph.getNeighbors(vertex);
        for (let i = neighbors.length - 1; i >= 0; i--) {
          const neighbor = neighbors[i];

          if (!visited.has(neighbor)) {
            stack.push([neighbor, vertex]);
          } else if (neighbor !== p) {
            // Cycle detected
            const cycle: T[] = [];
            let current: T | null = vertex;

            while (current !== null && current !== neighbor) {
              cycle.push(current);
              current = parent.get(current) ?? null;
            }
            cycle.push(neighbor);

            cycle.reverse();
            return { hasCycle: true, cycle };
          }
        }
      }
    }

    return { hasCycle: false };
  }


}
