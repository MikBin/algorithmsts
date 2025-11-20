import { BaseAlgorithm } from '../../../core/abstracts/BaseAlgorithm';
import { IGraph } from '../../interfaces/IGraph';

export interface ISCCResult<T> {
  components: T[][];
  count: number;
}

/**
 * Tarjan's algorithm for Strongly Connected Components
 * Time: O(V + E)
 */
export class StronglyConnectedComponentsTarjan<T, W = number>
  extends BaseAlgorithm<IGraph<T, W>, ISCCResult<T>> {
  constructor() {
    super("Tarjan's SCC", 'O(V + E)', 'O(V)');
  }

  public execute(graph: IGraph<T, W>): ISCCResult<T> {
    if (!graph.isDirected()) {
      throw new Error('SCC requires a directed graph');
    }

    const vertices = graph.getVertices();
    const index = new Map<T, number>();
    const lowlink = new Map<T, number>();
    const onStack = new Set<T>();
    const stack: T[] = [];
    let time = 0;
    const components: T[][] = [];

    const dfs = (v: T) => {
      index.set(v, time);
      lowlink.set(v, time);
      time++;
      stack.push(v);
      onStack.add(v);

      for (const w of graph.getNeighbors(v)) {
        if (!index.has(w)) {
          dfs(w);
          lowlink.set(v, Math.min(lowlink.get(v)!, lowlink.get(w)!));
        } else if (onStack.has(w)) {
          lowlink.set(v, Math.min(lowlink.get(v)!, index.get(w)!));
        }
      }

      if (lowlink.get(v) === index.get(v)) {
        const comp: T[] = [];
        let w: T | undefined;
        do {
          w = stack.pop();
          if (w !== undefined) {
            onStack.delete(w);
            comp.push(w);
          }
        } while (w !== v);
        components.push(comp);
      }
    };

    for (const v of vertices) {
      if (!index.has(v)) dfs(v);
    }

    return { components, count: components.length };
  }
}
