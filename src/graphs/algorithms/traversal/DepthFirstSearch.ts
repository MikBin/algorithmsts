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
      parents,
      // Backward-compatible alias used by docs tests
      get result() { return discoveryOrder; }
    } as unknown as any;
  }

  /**
   * Generator for DFS traversal, yielding state at each step for visualization
   * @param graph The graph to traverse
   * @param startVertex The vertex to start from
   */
  public *traverseGenerator(graph: IGraph<T, W>, startVertex: T): Generator<any> {
    if (!graph.getVertices().includes(startVertex)) {
      throw new Error(`Start vertex ${startVertex} does not exist in the graph`);
    }

    const visited = new Set<T>();
    const stack: T[] = [startVertex];

    while (stack.length > 0) {
      const u = stack.pop()!;

      if (!visited.has(u)) {
        visited.add(u);
        yield { type: 'step', visited: new Set(visited), processing: u, message: `Visiting ${u}` };

        const neighbors = graph.getNeighbors(u);
        // Push in reverse order to visit in natural order (optional, to match recursion order for some structures)
        for (let i = neighbors.length - 1; i >= 0; i--) {
          const v = neighbors[i];
          if (!visited.has(v)) {
            stack.push(v);
          }
        }
      }
    }

    yield { type: 'finished', visited: new Set(visited), message: 'DFS Completed' };
  }

  /**
   * Executes the DFS algorithm (implements IAlgorithm interface)
   * @param graph The graph to traverse
   * @param startVertex The vertex to start from (passed as additional argument)
   * @returns The traversal result
   */
  public execute(graphOrInput: IGraph<T, W> | { graph: IGraph<T, W>; startNode: T }, maybeStart?: T): ITraversalResult<T> {
    if (typeof (graphOrInput as any).getVertices === 'function') {
      const graph = graphOrInput as IGraph<T, W>;
      if (maybeStart === undefined) {
        throw new Error('Start vertex must be provided for DFS traversal');
      }
      return this.traverse(graph, maybeStart);
    }
    const { graph, startNode } = graphOrInput as { graph: IGraph<T, W>; startNode: T };
    return this.traverse(graph, startNode);
  }
}
