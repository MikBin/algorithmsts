import { ArgumentError } from '../../../core/validation/ArgumentError';
import { PriorityQueue } from "../../../data-structures/priority-queue";
import { BaseAlgorithm } from "../../../core/abstracts/BaseAlgorithm";
import { IGraph } from "../../interfaces/IGraph";
import { ISpanningTreeResult } from "./KruskalAlgorithm";

/**
 * Prim's Algorithm implementation for finding Minimum Spanning Trees
 *
 * Prim's algorithm finds a minimum spanning tree for a connected weighted
 * undirected graph. It starts from an arbitrary vertex and grows the tree
 * by adding the cheapest edge that connects a vertex in the tree to a vertex
 * outside the tree.
 *
 * Time Complexity: O((V + E) log V) with binary heap, O(V^2) with adjacency matrix
 * Space Complexity: O(V) for priority queue and data structures
 *
 * @template T The type of vertices in the graph
 * @template W The type of edge weights (must be numeric and comparable)
 */
export class PrimAlgorithm<T, W extends number = number> extends BaseAlgorithm<
  IGraph<T, W>,
  ISpanningTreeResult<T, W>
> {
  /**
   * Creates a new Prim's algorithm instance
   */
  constructor() {
    super("Prim's Algorithm", "O((V + E) log V)", "O(V)");
  }

  /**
   * Finds the Minimum Spanning Tree using Prim's algorithm
   * @param graph The weighted undirected graph
   * @returns The spanning tree result
   * @throws Error if graph is not weighted or undirected
   */
  public execute(graph: IGraph<T, W>): ISpanningTreeResult<T, W> {
    if (!graph.isWeighted()) {
      throw new ArgumentError("Prim's algorithm requires a weighted graph");
    }

    if (graph.isDirected()) {
      throw new ArgumentError("Prim's algorithm requires an undirected graph");
    }

    const vertices = graph.getVertices();
    if (vertices.length === 0) {
      return { edges: [], totalWeight: 0 as W, found: true };
    }

    // Priority queue: [weight, fromVertex, toVertex]
    const priorityQueue = new PriorityQueue<[W, T, T]>(
      (a, b) => (a[0] as unknown as number) - (b[0] as unknown as number),
    );
    const inMST = new Set<T>();
    const minEdge = new Map<T, { weight: W; from: T }>();
    const mstEdges: Array<{ from: T; to: T; weight: W }> = [];

    // Start from first vertex
    const startVertex = vertices[0];
    inMST.add(startVertex);

    // Initialize priority queue with edges from start vertex
    for (const neighbor of graph.getNeighbors(startVertex)) {
      const weight = graph.getEdgeWeight(startVertex, neighbor);
      if (weight !== undefined) {
        priorityQueue.enqueue([weight, startVertex, neighbor]);
        minEdge.set(neighbor, { weight, from: startVertex });
      }
    }

    let totalWeight = 0 as W;

    while (!priorityQueue.isEmpty() && inMST.size < vertices.length) {
      const [weight, from, to] = priorityQueue.dequeue()!;

      if (inMST.has(to)) {
        continue; // Already in MST
      }

      // Add edge to MST
      inMST.add(to);
      mstEdges.push({ from, to, weight });
      totalWeight = (totalWeight + weight) as W;

      // Add new edges from the newly added vertex
      for (const neighbor of graph.getNeighbors(to)) {
        if (!inMST.has(neighbor)) {
          const edgeWeight = graph.getEdgeWeight(to, neighbor);
          if (edgeWeight !== undefined) {
            const existingEdge = minEdge.get(neighbor);
            if (!existingEdge || edgeWeight < existingEdge.weight) {
              minEdge.set(neighbor, { weight: edgeWeight, from: to });
              priorityQueue.enqueue([edgeWeight, to, neighbor]);
            }
          }
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
   * Generator for Prim's algorithm, yielding state at each step for visualization
   * @param graph The weighted undirected graph
   */
  public *findMSTGenerator(graph: IGraph<T, W>): Generator<any> {
    if (!graph.isWeighted()) {
      throw new ArgumentError("Prim's algorithm requires a weighted graph");
    }
    if (graph.isDirected()) {
      throw new ArgumentError("Prim's algorithm requires an undirected graph");
    }

    const vertices = graph.getVertices();
    if (vertices.length === 0) {
      yield { type: "finished", visited: new Set(), mst: [], message: "Empty graph" };
      return;
    }

    const priorityQueue = new PriorityQueue<{ weight: W; source: T; target: T }>(
      (a, b) => (a.weight as unknown as number) - (b.weight as unknown as number),
    );
    const visited = new Set<T>();
    const mstEdges: Array<{ source: T; target: T; weight: W }> = [];

    const startVertex = vertices[0];
    visited.add(startVertex);

    // Initial edges
    for (const neighbor of graph.getNeighbors(startVertex)) {
      const weight = graph.getEdgeWeight(startVertex, neighbor);
      if (weight !== undefined) {
        priorityQueue.enqueue({ weight, source: startVertex, target: neighbor });
      }
    }

    yield {
      type: "step",
      visited: new Set(visited),
      mst: [...mstEdges],
      message: `Starting Prim at ${startVertex}`,
    };

    while (visited.size < vertices.length && !priorityQueue.isEmpty()) {
      const edge = priorityQueue.dequeue()!;

      if (visited.has(edge.target)) continue;

      visited.add(edge.target);
      mstEdges.push(edge);

      yield {
        type: "step",
        visited: new Set(visited),
        mst: [...mstEdges],
        message: `Added edge ${edge.source}-${edge.target} (w: ${edge.weight})`,
      };

      for (const neighbor of graph.getNeighbors(edge.target)) {
        if (!visited.has(neighbor)) {
          const weight = graph.getEdgeWeight(edge.target, neighbor);
          if (weight !== undefined) {
            priorityQueue.enqueue({ weight, source: edge.target, target: neighbor });
          }
        }
      }
    }

    yield { type: "finished", visited: new Set(visited), mst: mstEdges, message: "MST Completed" };
  }
}
