import { BaseAlgorithm } from '../../../core/abstracts/BaseAlgorithm';
import { IGraph } from '../../interfaces/IGraph';

export interface IBiconnectedComponentsResult<T> {
  components: Array<Array<[T, T]>>; // list of edge lists
}

/**
 * Biconnected components in an undirected graph via DFS and edge stack.
 * Time: O(V + E)
 */
export class BiconnectedComponents<T, W = number>
  extends BaseAlgorithm<IGraph<T, W>, IBiconnectedComponentsResult<T>> {
  constructor() {
    super('Biconnected Components', 'O(V + E)', 'O(V + E)');
  }

  public execute(graph: IGraph<T, W>): IBiconnectedComponentsResult<T> {
    if (graph.isDirected()) {
      throw new Error('Biconnected components require an undirected graph');
    }

    const vertices = graph.getVertices();
    const disc = new Map<T, number>();
    const low = new Map<T, number>();
    const parent = new Map<T, T | null>();
    const stack: Array<[T, T]> = [];
    const components: Array<Array<[T, T]>> = [];
    let time = 0;

    const dfs = (u: T) => {
      disc.set(u, time);
      low.set(u, time);
      time++;
      let childCount = 0;

      for (const v of graph.getNeighbors(u)) {
        if (!disc.has(v)) {
          parent.set(v, u);
          childCount++;
          stack.push([u, v]);
          dfs(v);
          low.set(u, Math.min(low.get(u)!, low.get(v)!));

          // If u is an articulation point, pop edges until (u, v)
          if ((parent.get(u) ?? null) === null && childCount > 1 ||
              (parent.get(u) ?? null) !== null && low.get(v)! >= disc.get(u)!) {
            const comp: Array<[T, T]> = [];
            while (stack.length) {
              const e = stack.pop()!;
              comp.push(e);
              if ((e[0] === u && e[1] === v) || (e[0] === v && e[1] === u)) break;
            }
            components.push(comp);
          }
        } else if (v !== parent.get(u) && (disc.get(v)! < disc.get(u)!)) {
          // Back edge
          stack.push([u, v]);
          low.set(u, Math.min(low.get(u)!, disc.get(v)!));
        }
      }
    };

    for (const v of vertices) {
      if (!disc.has(v)) {
        parent.set(v, null);
        dfs(v);
        // If stack not empty, remaining edges form a component
        if (stack.length) {
          const comp: Array<[T, T]> = [];
          while (stack.length) comp.push(stack.pop()!);
          components.push(comp);
        }
      }
    }

    return { components };
  }
}
