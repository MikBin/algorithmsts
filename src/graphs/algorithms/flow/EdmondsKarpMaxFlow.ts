import { BaseAlgorithm } from '../../../core/abstracts/BaseAlgorithm';
import { IGraph } from '../../interfaces/IGraph';

export interface IMaxFlowResult<T, W extends number = number> {
  maxFlow: W;
  flow: Map<T, Map<T, W>>;
}

/**
 * Edmonds–Karp algorithm (BFS-based Ford–Fulkerson) for max flow on directed weighted graphs.
 * Uses edge weights as capacities.
 * Time: O(V * E^2)
 */
export class EdmondsKarpMaxFlow<T, W extends number = number>
  extends BaseAlgorithm<IGraph<T, W>, IMaxFlowResult<T, W>> {
  constructor() {
    super('Edmonds–Karp Max Flow', 'O(V * E^2)', 'O(E)');
  }

  public execute(graph: IGraph<T, W>, source?: T, sink?: T): IMaxFlowResult<T, W> {
    if (!graph.isDirected() || !graph.isWeighted()) {
      throw new Error('Max flow requires a directed weighted graph');
    }
    if (source === undefined || sink === undefined) {
      throw new Error('Source and sink must be provided for max flow');
    }

    const vertices = graph.getVertices();
    if (!vertices.includes(source) || !vertices.includes(sink)) {
      throw new Error('Source or sink not in graph');
    }

    // Build capacity and residual graphs
    const capacity = new Map<T, Map<T, number>>();
    const residual = new Map<T, Map<T, number>>();
    const flow = new Map<T, Map<T, number>>();

    const addEdge = (u: T, v: T, cap: number) => {
      if (!capacity.has(u)) capacity.set(u, new Map());
      if (!capacity.get(u)!.has(v)) capacity.get(u)!.set(v, 0);
      capacity.get(u)!.set(v, capacity.get(u)!.get(v)! + cap);

      if (!residual.has(u)) residual.set(u, new Map());
      if (!residual.get(u)!.has(v)) residual.get(u)!.set(v, 0);
      residual.get(u)!.set(v, residual.get(u)!.get(v)! + cap);

      if (!residual.has(v)) residual.set(v, new Map());
      if (!residual.get(v)!.has(u)) residual.get(v)!.set(u, 0);

      if (!flow.has(u)) flow.set(u, new Map());
      if (!flow.get(u)!.has(v)) flow.get(u)!.set(v, 0);
      if (!flow.has(v)) flow.set(v, new Map());
      if (!flow.get(v)!.has(u)) flow.get(v)!.set(u, 0);
    };

    for (const [uAny, vAny] of graph.getEdges() as Array<[T, T] | [T, T, W]>) {
      const u = uAny as T;
      const v = vAny as T;
      const w = graph.getEdgeWeight(u, v)! as number;
      addEdge(u, v, w);
      // Ensure reverse edge present in residual graph with 0 capacity (done in addEdge)
    }

    const bfs = (): { parent: Map<T, T | null>; bottleneck: number } | null => {
      const parent = new Map<T, T | null>();
      const visited = new Set<T>();
      const q: T[] = [];
      q.push(source);
      visited.add(source);
      parent.set(source, null);

      const getResidual = (u: T, v: T) => residual.get(u)?.get(v) ?? 0;

      while (q.length) {
        const u = q.shift()!;
        if (u === sink) break;
        for (const v of vertices) {
          if (visited.has(v)) continue;
          if (getResidual(u, v) > 0) {
            visited.add(v);
            parent.set(v, u);
            q.push(v);
          }
        }
      }

      if (!parent.has(sink)) return null;

      // Compute bottleneck
      let bottleneck = Infinity;
      let v: T | null = sink;
      while (v !== null) {
        const u = parent.get(v)!;
        if (u !== null) {
          bottleneck = Math.min(bottleneck, residual.get(u)!.get(v)!);
        }
        v = u;
      }

      return { parent, bottleneck };
    };

    let maxFlow = 0;
    while (true) {
      const aug = bfs();
      if (!aug) break;
      const { parent, bottleneck } = aug;
      if (!isFinite(bottleneck) || bottleneck <= 0) break;

      // Augment along path
      let v: T | null = sink;
      while (v !== null) {
        const u = parent.get(v)!;
        if (u !== null) {
          residual.get(u)!.set(v, residual.get(u)!.get(v)! - bottleneck);
          residual.get(v)!.set(u, (residual.get(v)!.get(u) ?? 0) + bottleneck);
          flow.get(u)!.set(v, (flow.get(u)!.get(v) ?? 0) + bottleneck);
          flow.get(v)!.set(u, (flow.get(v)!.get(u) ?? 0) - bottleneck);
        }
        v = u;
      }
      maxFlow += bottleneck;
    }

    // Cast flow map to W
    const flowW = new Map<T, Map<T, W>>();
    for (const [u, row] of flow) {
      const inner = new Map<T, W>();
      for (const [v, f] of row) inner.set(v, f as W);
      flowW.set(u, inner);
    }

    return { maxFlow: maxFlow as W, flow: flowW };
  }
}
