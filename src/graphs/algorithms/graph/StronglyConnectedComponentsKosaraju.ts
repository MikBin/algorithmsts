import { BaseAlgorithm } from '../../../core/abstracts/BaseAlgorithm';
import { IGraph } from '../../interfaces/IGraph';
import type { ISCCResult } from './StronglyConnectedComponentsTarjan';

/**
 * Kosaraju's algorithm for Strongly Connected Components
 * Time: O(V + E)
 */
export class StronglyConnectedComponentsKosaraju<T, W = number>
  extends BaseAlgorithm<IGraph<T, W>, ISCCResult<T>> {
  constructor() {
    super("Kosaraju's SCC", 'O(V + E)', 'O(V + E)');
  }

  public execute(graph: IGraph<T, W>): ISCCResult<T> {
    if (!graph.isDirected()) throw new Error('SCC requires a directed graph');

    const vertices = graph.getVertices();
    const visited = new Set<T>();
    const order: T[] = [];

    const dfs1 = (v: T) => {
      visited.add(v);
      for (const n of graph.getNeighbors(v)) {
        if (!visited.has(n)) dfs1(n);
      }
      order.push(v);
    };

    for (const v of vertices) if (!visited.has(v)) dfs1(v);

    // Build transpose graph adjacency list
    const rev = new Map<T, T[]>();
    for (const v of vertices) rev.set(v, []);
    for (const u of vertices) {
      for (const v of graph.getNeighbors(u)) {
        rev.get(v)!.push(u);
      }
    }

    const components: T[][] = [];
    visited.clear();

    const dfs2 = (v: T, comp: T[]) => {
      visited.add(v);
      comp.push(v);
      for (const n of rev.get(v)!) if (!visited.has(n)) dfs2(n, comp);
    };

    for (let i = order.length - 1; i >= 0; i--) {
      const v = order[i];
      if (!visited.has(v)) {
        const comp: T[] = [];
        dfs2(v, comp);
        components.push(comp);
      }
    }

    return { components, count: components.length };
  }
}
