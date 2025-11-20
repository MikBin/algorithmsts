import { BaseAlgorithm } from '../../../core/abstracts/BaseAlgorithm';
import { IGraph } from '../../interfaces/IGraph';

export interface IMatchingResult<T> {
  matching: Map<T, T>;
  size: number;
}

/**
 * Hopcroft–Karp maximum matching in bipartite graphs.
 * Requires the bipartition (left, right) to be provided.
 * Time: O(E * sqrt(V))
 */
export class HopcroftKarp<T, W = number> extends BaseAlgorithm<IGraph<T, W>, IMatchingResult<T>> {
  constructor() {
    super('Hopcroft–Karp Bipartite Matching', 'O(E * sqrt(V))', 'O(V)');
  }

  public execute(graph: IGraph<T, W>, left?: T[], right?: T[]): IMatchingResult<T> {
    if (!left || !right) {
      throw new Error('Left and right partitions must be provided');
    }
    if (graph.isDirected()) {
      // We treat edges as undirected across partitions for matching
    }

    const NIL: any = Symbol('NIL');

    const pairU = new Map<T, T | typeof NIL>();
    const pairV = new Map<T, T | typeof NIL>();
    const dist = new Map<T | typeof NIL, number>();

    for (const u of left) pairU.set(u, NIL);
    for (const v of right) pairV.set(v, NIL);

    const bfs = (): boolean => {
      const q: Array<T | typeof NIL> = [];
      for (const u of left) {
        if (pairU.get(u) === NIL) {
          dist.set(u, 0);
          q.push(u);
        } else {
          dist.set(u, Infinity);
        }
      }
      dist.set(NIL, Infinity);

      while (q.length) {
        const u = q.shift()!;
        if (dist.get(u)! < (dist.get(NIL)! as number)) {
          for (const v of graph.getNeighbors(u as T)) {
            if (!right.includes(v)) continue;
            const pu = pairV.get(v)!;
            if (dist.get(pu as any) === undefined || (dist.get(pu as any)! as number) === Infinity) {
              dist.set(pu as any, (dist.get(u)! as number) + 1);
              q.push(pu as any);
            }
          }
        }
      }
      return (dist.get(NIL)! as number) !== Infinity;
    };

    const dfs = (u: T | typeof NIL): boolean => {
      if (u === NIL) return true;
      for (const v of graph.getNeighbors(u)) {
        if (!right.includes(v)) continue;
        const pu = pairV.get(v)!;
        if ((dist.get(pu as any)! as number) === (dist.get(u)! as number) + 1 && dfs(pu as any)) {
          pairV.set(v, u);
          pairU.set(u, v);
          return true;
        }
      }
      dist.set(u, Infinity);
      return false;
    };

    let matching = 0;
    while (bfs()) {
      for (const u of left) {
        if (pairU.get(u) === NIL) {
          if (dfs(u)) matching++;
        }
      }
    }

    const result = new Map<T, T>();
    for (const [u, v] of pairU) {
      if (v !== NIL) result.set(u, v as T);
    }

    return { matching: result, size: matching };
  }
}
