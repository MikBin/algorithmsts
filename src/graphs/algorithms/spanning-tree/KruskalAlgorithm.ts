import { UnionFind } from "../../../data-structures/disjoint-set/unionFind";
import { ArgumentError } from "../../../core/validation/ArgumentError";
import { BaseAlgorithm } from "../../../core/abstracts/BaseAlgorithm";
import { IGraph } from "../../interfaces/IGraph";

/**
 * Interface for spanning tree algorithm results
 * @template T The type of vertices in the graph
 * @template W The type of edge weights (default: number)
 */
export interface ISpanningTreeResult<T, W = number> {
  /**
   * The edges in the spanning tree
   */
  edges: Array<{ from: T; to: T; weight: W }>;

  /**
   * The total weight of the spanning tree
   */
  totalWeight: W;

  /**
   * Whether a spanning tree was found (false for disconnected graphs)
   */
  found: boolean;
}

/**
 * Kruskal's Algorithm implementation for finding Minimum Spanning Trees
 *
 * Kruskal's algorithm finds a minimum spanning tree for a connected weighted
 * undirected graph. It uses a greedy approach, adding edges in order of
 * increasing weight while avoiding cycles using Union-Find.
 *
 * Time Complexity: O(E log E) due to sorting edges
 * Space Complexity: O(V + E) for edge storage and Union-Find structure
 *
 * @template T The type of vertices in the graph
 * @template W The type of edge weights (must be numeric and comparable)
 */
export class KruskalAlgorithm<T, W extends number = number> extends BaseAlgorithm<
  IGraph<T, W>,
  ISpanningTreeResult<T, W>
> {
  /**
   * Creates a new Kruskal's algorithm instance
   */
  constructor() {
    super("Kruskal's Algorithm", "O(E log E)", "O(V + E)");
  }

  /**
   * Finds the Minimum Spanning Tree using Kruskal's algorithm
   * @param graph The weighted undirected graph
   * @returns The spanning tree result
   * @throws Error if graph is not weighted or undirected
   */
  public execute(graph: IGraph<T, W>): ISpanningTreeResult<T, W> {
    if (!graph.isWeighted()) {
      throw new ArgumentError("Kruskal's algorithm requires a weighted graph");
    }

    if (graph.isDirected()) {
      throw new ArgumentError("Kruskal's algorithm requires an undirected graph");
    }

    const vertices = graph.getVertices();
    const edges = graph.getEdges();

    // Convert edges to sortable format
    const edgeList: Array<{ from: T; to: T; weight: W }> = [];
    for (const edge of edges) {
      if (edge.length === 3) {
        edgeList.push({ from: edge[0], to: edge[1], weight: edge[2] });
      } else {
        throw new ArgumentError("All edges must have weights for MST algorithms");
      }
    }

    // Sort edges by weight
    edgeList.sort((a, b) => a.weight - b.weight);

    // Union-Find data structure
    if (vertices.length === 0) return { edges: [], totalWeight: 0 as W, found: false };
    const uf = new UnionFind(vertices.length);
    const v2i = new Map<T, number>();
    vertices.forEach((v, i) => v2i.set(v, i));
    const find = (x: T): T => vertices[uf.find(v2i.get(x)!)];
    const union = (a: T, b: T) => uf.union(v2i.get(a)!, v2i.get(b)!);

    // Build MST
    const mstEdges: Array<{ from: T; to: T; weight: W }> = [];
    let totalWeight = 0 as W;

    for (const edge of edgeList) {
      if (find(edge.from) !== find(edge.to)) {
        union(edge.from, edge.to);
        mstEdges.push(edge);
        totalWeight = (totalWeight + edge.weight) as W;

        // Early termination if we have V-1 edges
        if (mstEdges.length === vertices.length - 1) {
          break;
        }
      }
    }

    // Check if MST is complete (connected graph)
    const found = mstEdges.length === vertices.length - 1;

    return {
      edges: mstEdges,
      totalWeight,
      found,
    };
  }

  /**
   * Generator for Kruskal's algorithm, yielding state at each step for visualization
   * @param graph The weighted undirected graph
   */
  public *findMSTGenerator(graph: IGraph<T, W>): Generator<{
    type: "step" | "finished";
    visited: Set<T>;
    mst: Array<{ source: T; target: T; weight: W }>;
    processing?: { source: T; target: T; weight: W };
    message: string;
  }> {
    if (!graph.isWeighted()) {
      throw new ArgumentError("Kruskal's algorithm requires a weighted graph");
    }
    if (graph.isDirected()) {
      throw new ArgumentError("Kruskal's algorithm requires an undirected graph");
    }

    const vertices = graph.getVertices();
    const rawEdges = graph.getEdges();

    const edgeList: Array<{ source: T; target: T; weight: W }> = [];
    for (const edge of rawEdges) {
      if (edge.length === 3) {
        edgeList.push({ source: edge[0], target: edge[1], weight: edge[2] });
      }
    }
    edgeList.sort((a, b) => (a.weight as unknown as number) - (b.weight as unknown as number));

    if (vertices.length === 0) {
      yield { type: "finished", visited: new Set(vertices), mst: [], message: "MST Completed" };
      return;
    }
    const uf = new UnionFind(vertices.length);
    const v2i = new Map<T, number>();
    vertices.forEach((v, i) => v2i.set(v, i));
    const union = (x: T, y: T): boolean => uf.union(v2i.get(x)!, v2i.get(y)!);

    const mstEdges: Array<{ source: T; target: T; weight: W }> = [];

    for (const edge of edgeList) {
      yield {
        type: "step",
        visited: new Set(vertices),
        mst: [...mstEdges],
        processing: edge,
        message: `Checking edge ${edge.source}-${edge.target} (w: ${edge.weight})`,
      };

      if (union(edge.source, edge.target)) {
        mstEdges.push(edge);
        yield {
          type: "step",
          visited: new Set(vertices),
          mst: [...mstEdges],
          message: `Added edge ${edge.source}-${edge.target}`,
        };
      }
    }

    yield { type: "finished", visited: new Set(vertices), mst: mstEdges, message: "MST Completed" };
  }
}
