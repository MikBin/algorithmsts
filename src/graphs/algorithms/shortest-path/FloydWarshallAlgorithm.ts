import { BaseAlgorithm } from '../../../core/abstracts/BaseAlgorithm';
import { IGraph } from '../../interfaces/IGraph';

export interface IFloydWarshallResult<T, W extends number = number> {
  distances: Map<T, Map<T, W>>;
  next: Map<T, Map<T, T | null>>;
  hasNegativeCycle: boolean;
  getPath: (u: T, v: T) => T[];
}

/**
 * Floyd–Warshall all-pairs shortest paths
 * Time: O(V^3), Space: O(V^2)
 */
export class FloydWarshallAlgorithm<T, W extends number = number>
  extends BaseAlgorithm<IGraph<T, W>, IFloydWarshallResult<T, W>> {
  constructor() {
    super('Floyd–Warshall Algorithm', 'O(V^3)', 'O(V^2)');
  }

  public execute(graph: IGraph<T, W>): IFloydWarshallResult<T, W> {
    if (!graph.isWeighted()) {
      throw new Error('Floyd–Warshall requires a weighted graph');
    }

    const verts = graph.getVertices();
    const distances = new Map<T, Map<T, W>>();
    const next = new Map<T, Map<T, T | null>>();

    // Initialize
    for (const i of verts) {
      distances.set(i, new Map());
      next.set(i, new Map());
      for (const j of verts) {
        let weight = Infinity as W;
        let nextNode: T | null = null;

        if (i === j) {
            weight = 0 as W;
            nextNode = j;
            // If there is a self-loop with negative weight, we should take it into account
            // to detect negative cycles immediately or during relaxation.
            // However, standard FW usually inits d[i][i]=0.
            // If we have a negative self-loop, relaxation k=i will update d[i][i].
            // Wait, d[i][i] = min(0, w(i,i)).
             if (graph.hasEdge(i, j)) {
                const w = graph.getEdgeWeight(i, j)!;
                if ((w as number) < 0) {
                    weight = w;
                }
            }
        } else if (graph.hasEdge(i, j)) {
          weight = graph.getEdgeWeight(i, j)!;
          nextNode = j;
        }

        distances.get(i)!.set(j, weight);
        next.get(i)!.set(j, nextNode);
      }
    }

    // Core triple loop
    for (const k of verts) {
      for (const i of verts) {
        for (const j of verts) {
          const dik = distances.get(i)!.get(k)! as number;
          const dkj = distances.get(k)!.get(j)! as number;
          const dij = distances.get(i)!.get(j)! as number;

          if (dik !== Infinity && dkj !== Infinity && dik + dkj < dij) {
            distances.get(i)!.set(j, (dik + dkj) as W);
            next.get(i)!.set(j, next.get(i)!.get(k)!);
          }
        }
      }
    }

    // Detect negative cycles
    let hasNegativeCycle = false;
    for (const v of verts) {
      if ((distances.get(v)!.get(v)! as number) < 0) {
        hasNegativeCycle = true;
        break;
      }
    }

    const getPath = (u: T, v: T): T[] => {
      if (next.get(u)?.get(v) == null) return [];
      // If there is a negative cycle involving u, path might be infinite/undefined in reality,
      // but we just reconstruct what we have.
      // Check if start/end are valid
      if (!distances.has(u) || !distances.has(v)) return [];

      const path: T[] = [u];
      let cur: T | null = u;
      while (cur !== v) {
        cur = next.get(cur!)!.get(v)!;
        if (cur == null) return [];
        path.push(cur);
        if (path.length > verts.length + 1) {
            // Prevent infinite loop in path reconstruction if cycle exists
             return [];
        }
      }
      return path;
    };

    return { distances, next, hasNegativeCycle, getPath };
  }
}
