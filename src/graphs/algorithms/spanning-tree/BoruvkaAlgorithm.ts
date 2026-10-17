import { UnionFind } from "../../../data-structures/disjoint-set/unionFind";
import { ArgumentError } from "../../../core/validation/ArgumentError";
import { BaseAlgorithm } from "../../../core/abstracts/BaseAlgorithm";
import { IGraph } from "../../interfaces/IGraph";
import type { ISpanningTreeResult } from "./KruskalAlgorithm";

/**
 * Borůvka's algorithm for Minimum Spanning Tree on undirected weighted graphs.
 * Time: O(E log V)
 */
export class BoruvkaAlgorithm<T, W extends number = number> extends BaseAlgorithm<
  IGraph<T, W>,
  ISpanningTreeResult<T, W>
> {
  constructor() {
    super("Borůvka's Algorithm", "O(E log V)", "O(V + E)");
  }

  public execute(graph: IGraph<T, W>): ISpanningTreeResult<T, W> {
    if (!graph.isWeighted() || graph.isDirected()) {
      throw new ArgumentError("Borůvka's algorithm requires an undirected weighted graph");
    }

    const vertices = graph.getVertices();
    const edges = graph.getEdges();

    // Prepare edges list with weights
    const edgeList: Array<{ from: T; to: T; weight: W }> = [];
    for (const e of edges) {
      if (e.length !== 3) throw new ArgumentError("All edges must have weights for MST algorithms");
      const [u, v, w] = e as [T, T, W];
      edgeList.push({ from: u, to: v, weight: w });
    }

    // Union-Find
    if (vertices.length === 0) return { edges: [], totalWeight: 0 as W, found: false };
    const uf = new UnionFind(vertices.length);
    const v2i = new Map<T, number>();
    vertices.forEach((v, i) => v2i.set(v, i));
    const find = (x: T): T => vertices[uf.find(v2i.get(x)!)];
    const union = (a: T, b: T) => uf.union(v2i.get(a)!, v2i.get(b)!);

    const mstEdges: Array<{ from: T; to: T; weight: W }> = [];
    let totalWeight = 0 as W;
    let numComponents = vertices.length;

    while (numComponents > 1) {
      const cheapest = new Map<T, { edge: { from: T; to: T; weight: W }; root: T }>();

      for (const e of edgeList) {
        const u = e.from;
        const v = e.to;
        const ru = find(u);
        const rv = find(v);
        if (ru === rv) continue;

        if (!cheapest.has(ru) || e.weight < cheapest.get(ru)!.edge.weight) {
          cheapest.set(ru, { edge: e, root: ru });
        }
        if (!cheapest.has(rv) || e.weight < cheapest.get(rv)!.edge.weight) {
          cheapest.set(rv, { edge: e, root: rv });
        }
      }

      let addedAny = false;
      for (const { edge } of cheapest.values()) {
        const ru = find(edge.from);
        const rv = find(edge.to);
        if (ru === rv) continue;
        union(ru, rv);
        mstEdges.push(edge);
        totalWeight = (totalWeight + edge.weight) as W;
        numComponents--;
        addedAny = true;
        if (mstEdges.length === vertices.length - 1) break;
      }

      if (!addedAny) break; // Graph may be disconnected
    }

    const found = mstEdges.length === vertices.length - 1;
    return { edges: mstEdges, totalWeight, found };
  }
}
