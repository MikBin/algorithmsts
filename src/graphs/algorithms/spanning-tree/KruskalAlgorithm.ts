import { BaseAlgorithm } from '../../../core/abstracts/BaseAlgorithm';
import { IGraph } from '../../interfaces/IGraph';

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
export class KruskalAlgorithm<T, W extends number = number> extends BaseAlgorithm<IGraph<T, W>, ISpanningTreeResult<T, W>> {

  /**
   * Creates a new Kruskal's algorithm instance
   */
  constructor() {
    super('Kruskal\'s Algorithm', 'O(E log E)', 'O(V + E)');
  }

  /**
   * Finds the Minimum Spanning Tree using Kruskal's algorithm
   * @param graph The weighted undirected graph
   * @returns The spanning tree result
   * @throws Error if graph is not weighted or undirected
   */
  public execute(graph: IGraph<T, W>): ISpanningTreeResult<T, W> {
    if (!graph.isWeighted()) {
      throw new Error('Kruskal\'s algorithm requires a weighted graph');
    }

    if (graph.isDirected()) {
      throw new Error('Kruskal\'s algorithm requires an undirected graph');
    }

    const vertices = graph.getVertices();
    const edges = graph.getEdges();

    // Convert edges to sortable format
    const edgeList: Array<{ from: T; to: T; weight: W }> = [];
    for (const edge of edges) {
      if (edge.length === 3) {
        edgeList.push({ from: edge[0], to: edge[1], weight: edge[2] });
      } else {
        throw new Error('All edges must have weights for MST algorithms');
      }
    }

    // Sort edges by weight
    edgeList.sort((a, b) => a.weight - b.weight);

    // Union-Find data structure
    const parent = new Map<T, T>();
    const rank = new Map<T, number>();

    // Initialize Union-Find
    for (const vertex of vertices) {
      parent.set(vertex, vertex);
      rank.set(vertex, 0);
    }

    const find = (vertex: T): T => {
      if (parent.get(vertex) !== vertex) {
        parent.set(vertex, find(parent.get(vertex)!));
      }
      return parent.get(vertex)!;
    };

    const union = (x: T, y: T): void => {
      const rootX = find(x);
      const rootY = find(y);

      if (rootX !== rootY) {
        if (rank.get(rootX)! < rank.get(rootY)!) {
          parent.set(rootX, rootY);
        } else if (rank.get(rootX)! > rank.get(rootY)!) {
          parent.set(rootY, rootX);
        } else {
          parent.set(rootY, rootX);
          rank.set(rootX, rank.get(rootX)! + 1);
        }
      }
    };

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
      found
    };
  }
}
