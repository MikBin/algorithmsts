import { BaseAlgorithm } from '../../../core/abstracts/BaseAlgorithm';
import { IGraph } from '../../interfaces/IGraph';
import { IPathfindingAlgorithm, IPathResult } from '../interfaces/IPathfindingAlgorithm';

/**
 * Bellman-Ford algorithm for single-source shortest paths with negative edges
 *
 * Detects negative weight cycles and throws an error if one is reachable from the source.
 * Time: O(V * E), Space: O(V)
 */
export class BellmanFordAlgorithm<T, W extends number = number>
  extends BaseAlgorithm<IGraph<T, W>, IPathResult<T, W>>
  implements IPathfindingAlgorithm<T, W> {
  constructor() {
    super('Bellman-Ford Algorithm', 'O(V * E)', 'O(V)');
  }

  public findShortestPath(graph: IGraph<T, W>, start: T, end: T): IPathResult<T, W> {
    if (!graph.isWeighted()) {
      throw new Error("Bellman-Ford requires a weighted graph");
    }

    const vertices = graph.getVertices();
    if (!vertices.includes(start) || !vertices.includes(end)) {
      throw new Error('Start or end vertex does not exist in the graph');
    }

    const distances = new Map<T, W>();
    const parents = new Map<T, T | null>();

    for (const v of vertices) {
      distances.set(v, Infinity as W);
      parents.set(v, null);
    }
    distances.set(start, 0 as W);

    const edges = graph.getEdges();

    // Relax edges |V|-1 times
    for (let i = 0; i < vertices.length - 1; i++) {
      let updated = false;
      for (const e of edges) {
        const [u, v] = e as [T, T];
        const w = graph.getEdgeWeight(u, v);
        if (w === undefined) continue;
        const du = distances.get(u)!;
        const dv = distances.get(v)!;
        if (du + (w as number) < (dv as number)) {
          distances.set(v, (du + (w as number)) as W);
          parents.set(v, u);
          updated = true;
        }
      }
      if (!updated) break;
    }

    // Check for negative cycles
    for (const e of edges) {
      const [u, v] = e as [T, T];
      const w = graph.getEdgeWeight(u, v);
      if (w === undefined) continue;
      const du = distances.get(u)!;
      const dv = distances.get(v)!;
      if (du + (w as number) < (dv as number)) {
        throw new Error('Negative weight cycle detected');
      }
    }

    // Reconstruct path
    const path: T[] = [];
    let cur: T | null = end;
    while (cur !== null) {
      path.unshift(cur);
      cur = parents.get(cur)!;
    }
    const found = path[0] === start;

    return {
      path: found ? path : [],
      distance: distances.get(end)!,
      found,
      distances,
      parents,
    };
  }

  public execute(graph: IGraph<T, W>, start?: T, end?: T): IPathResult<T, W> {
    if (start === undefined || end === undefined) {
      throw new Error('Start and end vertices must be provided for Bellman-Ford');
    }
    return this.findShortestPath(graph, start, end);
  }
}
