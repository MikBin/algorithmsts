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

  /**
   * Generator for Bellman-Ford algorithm, yielding state at each step for visualization
   * @param graph The graph to search
   * @param start The start vertex
   * @param end The end vertex
   */
  public *findShortestPathGenerator(graph: IGraph<T, W>, start: T, end: T): Generator<any> {
    if (!graph.isWeighted()) {
      throw new Error("Bellman-Ford requires a weighted graph");
    }

    const vertices = graph.getVertices();
    if (!vertices.includes(start) || !vertices.includes(end)) {
      throw new Error('Start or end vertex does not exist in the graph');
    }

    const distances = new Map<T, W>();
    const parents = new Map<T, T | null>();
    const visited = new Set<T>();

    for (const v of vertices) {
      distances.set(v, Infinity as W);
      parents.set(v, null);
    }
    distances.set(start, 0 as W);
    visited.add(start);

    yield { type: 'step', visited: new Set(visited), distances: new Map(distances), message: `Initialize distances, start node: ${start}` };

    const edges = graph.getEdges();

    // Relax edges |V|-1 times
    for (let i = 0; i < vertices.length - 1; i++) {
      let updated = false;
      yield { type: 'step', visited: new Set(visited), distances: new Map(distances), message: `Iteration ${i + 1} of ${vertices.length - 1}` };

      for (const e of edges) {
        const [u, v] = e as [T, T];
        const w = graph.getEdgeWeight(u, v);
        if (w === undefined) continue;

        const du = distances.get(u)!;
        const dv = distances.get(v)!;

        yield { type: 'step', visited: new Set(visited), processing: {source: u, target: v, weight: w}, distances: new Map(distances), message: `Checking edge ${u} -> ${v} (weight: ${w})` };

        if (du !== Infinity && (du as number) + (w as number) < (dv as number)) {
          const newDist = (du as number) + (w as number);
          distances.set(v, newDist as W);
          parents.set(v, u);
          visited.add(v);
          updated = true;
          yield { type: 'step', visited: new Set(visited), processing: {source: u, target: v, weight: w}, distances: new Map(distances), message: `Relaxed edge ${u} -> ${v}: updated distance to ${newDist}` };
        }
      }

      if (!updated) {
        yield { type: 'step', visited: new Set(visited), distances: new Map(distances), message: `No updates in iteration ${i + 1}, stopping early` };
        break;
      }
    }

    // Check for negative cycles
    for (const e of edges) {
      const [u, v] = e as [T, T];
      const w = graph.getEdgeWeight(u, v);
      if (w === undefined) continue;

      const du = distances.get(u)!;
      const dv = distances.get(v)!;

      if (du !== Infinity && (du as number) + (w as number) < (dv as number)) {
        yield { type: 'error', visited: new Set(visited), negativeCycleEdge: {source: u, target: v}, distances: new Map(distances), message: `Negative cycle detected at edge ${u} -> ${v}` };
        return { type: 'error', visited: new Set(visited), negativeCycleEdge: {source: u, target: v}, distances: new Map(distances), message: `Negative cycle detected at edge ${u} -> ${v}` };
      }
    }

    // Reconstruct path
    const path: T[] = [];
    let cur: T | null = end;
    while (cur !== null) {
      path.unshift(cur);
      cur = parents.get(cur) || null;
      if (cur === null && path[0] !== start) {
        path.length = 0; // No path found
        break;
      }
    }

    if (path.length > 0 && path[0] === start) {
      yield { type: 'finished', visited: new Set(visited), path, distances: new Map(distances), message: `Path found: ${path.join(' -> ')}` };
    } else {
      yield { type: 'finished', visited: new Set(visited), distances: new Map(distances), message: 'No path found' };
    }
  }

  public execute(graph: IGraph<T, W>, start?: T, end?: T): IPathResult<T, W> {
    if (start === undefined || end === undefined) {
      throw new Error('Start and end vertices must be provided for Bellman-Ford');
    }
    return this.findShortestPath(graph, start, end);
  }
}
