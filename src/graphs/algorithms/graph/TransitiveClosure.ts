import { BaseAlgorithm } from '../../../core/abstracts/BaseAlgorithm';
import { IGraph } from '../../interfaces/IGraph';

export interface ITransitiveClosureResult<T> {
  reachable: Map<T, Set<T>>;
  isReachable: (u: T, v: T) => boolean;
}

/**
 * Computes transitive closure (reachability) using Warshall's algorithm.
 * Time: O(V^3), Space: O(V^2)
 */
export class TransitiveClosure<T, W = number>
  extends BaseAlgorithm<IGraph<T, W>, ITransitiveClosureResult<T>> {
  constructor() {
    super('Transitive Closure (Warshall)', 'O(V^3)', 'O(V^2)');
  }

  public execute(graph: IGraph<T, W>): ITransitiveClosureResult<T> {
    const verts = graph.getVertices();
    const idx = new Map<T, number>();
    verts.forEach((v, i) => idx.set(v, i));

    const reach: boolean[][] = Array.from({ length: verts.length }, () =>
      Array.from({ length: verts.length }, () => false)
    );

    for (let i = 0; i < verts.length; i++) {
      reach[i][i] = true;
      for (const n of graph.getNeighbors(verts[i])) {
        const j = idx.get(n)!;
        reach[i][j] = true;
      }
    }

    for (let k = 0; k < verts.length; k++) {
      for (let i = 0; i < verts.length; i++) {
        if (!reach[i][k]) continue;
        for (let j = 0; j < verts.length; j++) {
          reach[i][j] = reach[i][j] || (reach[i][k] && reach[k][j]);
        }
      }
    }

    const reachable = new Map<T, Set<T>>();
    for (let i = 0; i < verts.length; i++) {
      const set = new Set<T>();
      for (let j = 0; j < verts.length; j++) {
        if (reach[i][j]) set.add(verts[j]);
      }
      reachable.set(verts[i], set);
    }

    const isReachable = (u: T, v: T) => reachable.get(u)?.has(v) ?? false;

    return { reachable, isReachable };
  }
}
