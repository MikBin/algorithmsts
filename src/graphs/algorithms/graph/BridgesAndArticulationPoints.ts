import { BaseAlgorithm } from '../../../core/abstracts/BaseAlgorithm';
import { IGraph } from '../../interfaces/IGraph';

export interface IBridgesArticulationResult<T> {
  bridges: Array<[T, T]>;
  articulationPoints: T[];
}

/**
 * Finds bridges and articulation points in an undirected graph using DFS low-link values.
 * Time: O(V + E)
 */
export class BridgesAndArticulationPoints<T, W = number>
  extends BaseAlgorithm<IGraph<T, W>, IBridgesArticulationResult<T>> {
  constructor() {
    super('Bridges & Articulation Points', 'O(V + E)', 'O(V)');
  }

  public execute(graph: IGraph<T, W>): IBridgesArticulationResult<T> {
    if (graph.isDirected()) {
      throw new Error('Bridges/articulation points are defined for undirected graphs');
    }

    const n = graph.getVertices();
    const disc = new Map<T, number>();
    const low = new Map<T, number>();
    const parent = new Map<T, T | null>();
    const visited = new Set<T>();
    const bridges: Array<[T, T]> = [];
    const articulationSet = new Set<T>();
    let time = 0;

    const dfs = (u: T) => {
      visited.add(u);
      disc.set(u, time);
      low.set(u, time);
      time++;
      let childCount = 0;

      for (const v of graph.getNeighbors(u)) {
        if (!visited.has(v)) {
          parent.set(v, u);
          childCount++;
          dfs(v);
          low.set(u, Math.min(low.get(u)!, low.get(v)!));

          // Bridge
          if (low.get(v)! > disc.get(u)!) {
            bridges.push([u, v]);
          }

          // Articulation point
          if ((parent.get(u) ?? null) === null && childCount > 1) {
            articulationSet.add(u);
          }
          if ((parent.get(u) ?? null) !== null && low.get(v)! >= disc.get(u)!) {
            articulationSet.add(u);
          }
        } else if (v !== parent.get(u)) {
          low.set(u, Math.min(low.get(u)!, disc.get(v)!));
        }
      }
    };

    for (const v of n) {
      if (!visited.has(v)) {
        parent.set(v, null);
        dfs(v);
      }
    }

    return { bridges, articulationPoints: Array.from(articulationSet) };
  }
}
