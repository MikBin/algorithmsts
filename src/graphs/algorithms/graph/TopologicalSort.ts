import { BaseAlgorithm } from '../../../core/abstracts/BaseAlgorithm';
import { IGraph } from '../../interfaces/IGraph';

/**
 * Interface for topological sort results
 * @template T The type of vertices in the graph
 */
export interface ITopologicalSortResult<T> {
  /**
   * The vertices in topological order (empty if cycle exists)
   */
  order: T[];

  /**
   * Whether topological sort is possible (false if cycle exists)
   */
  isDAG: boolean;

  /**
   * The cycle found if graph is not a DAG (undefined if isDAG is true)
   */
  cycle?: T[];
}

/**
 * Topological Sort implementation for Directed Acyclic Graphs (DAGs)
 *
 * Topological sort orders vertices such that for every directed edge u->v,
 * vertex u comes before vertex v in the ordering. This is useful for task
 * scheduling, dependency resolution, and build systems.
 *
 * Time Complexity: O(V + E) using DFS
 * Space Complexity: O(V) for recursion stack and data structures
 *
 * @template T The type of vertices in the graph
 * @template W The type of edge weights (default: number)
 */
export class TopologicalSort<T, W = number> extends BaseAlgorithm<IGraph<T, W>, ITopologicalSortResult<T>> {

  /**
   * Creates a new TopologicalSort instance
   */
  constructor() {
    super('Topological Sort', 'O(V + E)', 'O(V)');
  }

  /**
   * Performs topological sort on the given directed graph
   * @param graph The directed graph to sort
   * @returns The topological sort result
   * @throws Error if graph is not directed
   */
  public execute(graph: IGraph<T, W>): ITopologicalSortResult<T> {
    if (!graph.isDirected()) {
      throw new Error('Topological sort requires a directed graph');
    }

    const vertices = graph.getVertices();
    const visited = new Set<T>();
    const visiting = new Set<T>(); // For cycle detection
    const order: T[] = [];
    let hasCycle = false;
    let cycle: T[] = [];

    const dfs = (vertex: T, path: T[]): void => {
      if (hasCycle) return;

      visiting.add(vertex);
      path.push(vertex);

      for (const neighbor of graph.getNeighbors(vertex)) {
        if (hasCycle) return;

        if (!visited.has(neighbor)) {
          if (visiting.has(neighbor)) {
            // Cycle detected
            hasCycle = true;
            const cycleStart = path.indexOf(neighbor);
            cycle = [...path.slice(cycleStart), neighbor];
            return;
          }
          dfs(neighbor, path);
        }
      }

      visiting.delete(vertex);
      path.pop();
      if (!visited.has(vertex)) {
        visited.add(vertex);
        order.unshift(vertex); // Add to front for correct order
      }
    };

    // Visit all vertices
    for (const vertex of vertices) {
      if (!visited.has(vertex) && !hasCycle) {
        dfs(vertex, []);
      }
    }

    if (hasCycle) {
      return {
        order: [],
        isDAG: false,
        cycle
      };
    }

    return {
      order,
      isDAG: true
    };
  }
}
