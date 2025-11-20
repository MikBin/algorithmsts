import { BaseAlgorithm } from '../../../core/abstracts/BaseAlgorithm';
import { IGraph } from '../../interfaces/IGraph';

export interface IEulerianResult<T> {
  type: 'circuit' | 'trail' | 'none';
  path: T[];
}

/**
 * Hierholzer's algorithm to find Eulerian path/circuit.
 * Works for undirected graphs and directed graphs (if in/out-degree conditions hold).
 */
export class EulerianPathCircuit<T, W = number> extends BaseAlgorithm<IGraph<T, W>, IEulerianResult<T>> {
  constructor() {
    super('Eulerian Path/Circuit (Hierholzer)', 'O(E)', 'O(E)');
  }

  public execute(graph: IGraph<T, W>): IEulerianResult<T> {
    const vertices = graph.getVertices();
    if (vertices.length === 0) return { type: 'circuit', path: [] };

    if (graph.isDirected()) {
      return this.forDirected(graph);
    } else {
      return this.forUndirected(graph);
    }
  }

  private forUndirected(graph: IGraph<T, W>): IEulerianResult<T> {
    const deg = new Map<T, number>();
    const vertices = graph.getVertices();
    for (const v of vertices) deg.set(v, graph.getNeighbors(v).length);

    let odd = 0;
    let start: T | null = null;
    for (const v of vertices) {
      const d = deg.get(v)!;
      if (d % 2 !== 0) {
        odd++;
        if (!start) start = v;
      }
      if (!start && d > 0) start = v;
    }

    if (start === null) return { type: 'circuit', path: [] };

    let type: IEulerianResult<T>["type"] = 'circuit';
    if (odd === 0) type = 'circuit';
    else if (odd === 2) type = 'trail';
    else return { type: 'none', path: [] };

    // Build adjacency multiset to mark edges used
    const adj = new Map<T, Map<T, number>>();
    for (const u of vertices) {
      const map = new Map<T, number>();
      for (const v of graph.getNeighbors(u)) {
        map.set(v, (map.get(v) ?? 0) + 1);
      }
      adj.set(u, map);
    }

    const stack: T[] = [start];
    const path: T[] = [];

    const removeEdge = (u: T, v: T) => {
      const mu = adj.get(u)!;
      const mv = adj.get(v)!;
      mu.set(v, mu.get(v)! - 1);
      if (mu.get(v)! === 0) mu.delete(v);
      mv.set(u, mv.get(u)! - 1);
      if (mv.get(u)! === 0) mv.delete(u);
    };

    while (stack.length) {
      const u = stack[stack.length - 1];
      const mu = adj.get(u)!;
      const it = mu.keys().next();
      if (!it.done) {
        const v = it.value as T;
        removeEdge(u, v);
        stack.push(v);
      } else {
        path.push(u);
        stack.pop();
      }
    }

    return { type, path: path.reverse() };
  }

  private forDirected(graph: IGraph<T, W>): IEulerianResult<T> {
    const vertices = graph.getVertices();
    const inDeg = new Map<T, number>();
    const outDeg = new Map<T, number>();
    for (const v of vertices) {
      outDeg.set(v, graph.getNeighbors(v).length);
      inDeg.set(v, 0);
    }
    for (const u of vertices) {
      for (const v of graph.getNeighbors(u)) {
        inDeg.set(v, (inDeg.get(v) ?? 0) + 1);
      }
    }

    let start: T | null = null;
    let end: T | null = null;
    for (const v of vertices) {
      const o = outDeg.get(v)!;
      const i = inDeg.get(v)!;
      if (o - i === 1) start = v;
      else if (i - o === 1) end = v;
      else if (i !== o) return { type: 'none', path: [] };
    }
    if (!start) start = vertices.find(v => outDeg.get(v)! > 0) ?? vertices[0];

    // Build adjacency list copy iterator style
    const adj = new Map<T, T[]>();
    for (const u of vertices) adj.set(u, [...graph.getNeighbors(u)]);

    const stack: T[] = [start];
    const path: T[] = [];
    while (stack.length) {
      const u = stack[stack.length - 1];
      const list = adj.get(u)!;
      if (list.length) {
        const v = list.pop()!;
        stack.push(v);
      } else {
        path.push(u);
        stack.pop();
      }
    }
    const resPath = path.reverse();

    const type: IEulerianResult<T>["type"] = end ? 'trail' : 'circuit';
    return { type, path: resPath };
  }
}
