import { BaseAlgorithm } from '../../../core/abstracts/BaseAlgorithm';
import { IGraph } from '../../interfaces/IGraph';
import { IPathfindingAlgorithm, IPathResult } from '../interfaces/IPathfindingAlgorithm';
import { TopologicalSort } from '../graph/TopologicalSort';

/**
 * Shortest path in DAG using topological order; allows negative weights if acyclic.
 * Time: O(V + E)
 */
export class DAGShortestPathAlgorithm<T, W extends number = number>
  extends BaseAlgorithm<IGraph<T, W>, IPathResult<T, W>>
  implements IPathfindingAlgorithm<T, W> {
  constructor() {
    super('DAG Shortest Path', 'O(V + E)', 'O(V)');
  }

  public findShortestPath(graph: IGraph<T, W>, start: T, end: T): IPathResult<T, W> {
    if (!graph.isDirected()) {
      throw new Error('DAG shortest path requires a directed graph');
    }

    const topo = new TopologicalSort<T, W>().execute(graph);
    if (!topo.isDAG) {
      throw new Error('Graph is not a DAG');
    }

    const order = topo.order;
    const vertices = graph.getVertices();
    if (!vertices.includes(start) || !vertices.includes(end)) {
      throw new Error('Start or end vertex does not exist in the graph');
    }

    const dist = new Map<T, W>();
    const parent = new Map<T, T | null>();
    for (const v of vertices) {
      dist.set(v, Infinity as W);
      parent.set(v, null);
    }
    dist.set(start, 0 as W);

    for (const u of order) {
      const du = dist.get(u)! as number;
      if (!isFinite(du)) continue;
      for (const v of graph.getNeighbors(u)) {
        const w = graph.getEdgeWeight(u, v) ?? (1 as W);
        const dv = dist.get(v)! as number;
        if (du + (w as number) < dv) {
          dist.set(v, (du + (w as number)) as W);
          parent.set(v, u);
        }
      }
    }

    const path: T[] = [];
    let cur: T | null = end;
    while (cur !== null) {
      path.unshift(cur);
      cur = parent.get(cur)!;
    }
    const found = path[0] === start;

    return {
      path: found ? path : [],
      distance: dist.get(end)!,
      found,
      distances: dist,
      parents: parent,
    };
  }

  public execute(graph: IGraph<T, W>, start?: T, end?: T): IPathResult<T, W> {
    if (start === undefined || end === undefined) {
      throw new Error('Start and end vertices must be provided for DAG shortest path');
    }
    return this.findShortestPath(graph, start, end);
  }
}
