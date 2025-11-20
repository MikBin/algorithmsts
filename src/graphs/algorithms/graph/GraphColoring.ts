import { BaseAlgorithm } from '../../../core/abstracts/BaseAlgorithm';
import { IGraph } from '../../interfaces/IGraph';

export interface IGraphColoringResult<T> {
  colors: Map<T, number>;
  numColors: number;
}

/**
 * Greedy graph coloring (Welsh-Powell ordering by degree).
 * Produces a valid coloring; not necessarily optimal.
 */
export class GraphColoringGreedy<T, W = number>
  extends BaseAlgorithm<IGraph<T, W>, IGraphColoringResult<T>> {
  constructor() {
    super('Graph Coloring (Greedy)', 'O(V^2 + E)', 'O(V)');
  }

  public execute(graph: IGraph<T, W>): IGraphColoringResult<T> {
    const vertices = graph.getVertices();
    // Order by degree descending (Welsh-Powell)
    const ordered = [...vertices].sort((a, b) => graph.getNeighbors(b).length - graph.getNeighbors(a).length);

    const colors = new Map<T, number>();

    for (const v of ordered) {
      const used = new Set<number>();
      for (const n of graph.getNeighbors(v)) {
        const c = colors.get(n);
        if (c !== undefined) used.add(c);
      }
      let color = 0;
      while (used.has(color)) color++;
      colors.set(v, color);
    }

    const numColors = Math.max(0, ...Array.from(colors.values())) + (colors.size ? 1 : 0);
    return { colors, numColors };
  }
}
