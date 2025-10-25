import { BaseAlgorithm } from '../../../core/abstracts/BaseAlgorithm';
import { IGraph } from '../../interfaces/IGraph';
import { IPathfindingAlgorithm, IPathResult } from '../interfaces/IPathfindingAlgorithm';

/**
 * A* Algorithm implementation for finding shortest paths with heuristics
 *
 * A* is an informed search algorithm that uses a heuristic function to
 * guide the search towards the goal. It combines the advantages of Dijkstra's
 * algorithm (guaranteed shortest path) with heuristic guidance for better performance.
 *
 * Time Complexity: Depends on heuristic quality, O(b^d) worst case
 * Space Complexity: O(V) for the priority queue and data structures
 *
 * @template T The type of vertices in the graph
 * @template W The type of edge weights (must be numeric)
 */
export class AStarAlgorithm<T, W extends number = number> extends BaseAlgorithm<IGraph<T, W>, IPathResult<T, W>>
  implements IPathfindingAlgorithm<T, W> {

  private heuristic: (from: T, to: T) => W;

  /**
   * Creates a new A* algorithm instance
   * @param heuristic The heuristic function h(n) estimating cost from n to goal
   */
  constructor(heuristic: (from: T, to: T) => W) {
    super('A* Algorithm', 'O(b^d)', 'O(V)');
    this.heuristic = heuristic;
  }

  /**
   * Finds the shortest path from start to end vertex using A* algorithm
   * @param graph The weighted graph to search
   * @param start The starting vertex
   * @param end The ending vertex
   * @returns The path result containing path and distance information
   * @throws Error if vertices do not exist or graph is not weighted
   */
  public findShortestPath(graph: IGraph<T, W>, start: T, end: T): IPathResult<T, W> {
    if (!graph.isWeighted()) {
      throw new Error('A* algorithm requires a weighted graph');
    }

    const vertices = graph.getVertices();
    if (!vertices.includes(start) || !vertices.includes(end)) {
      throw new Error('Start or end vertex does not exist in the graph');
    }

    // Initialize data structures
    const gScore = new Map<T, W>(); // Cost from start to current node
    const fScore = new Map<T, W>(); // Estimated total cost: gScore + heuristic
    const parents = new Map<T, T | null>();
    const openSet = new Set<T>();
    const closedSet = new Set<T>();

    // Priority queue: [fScore, vertex]
    const priorityQueue: Array<[W, T]> = [];

    // Initialize scores
    for (const vertex of vertices) {
      gScore.set(vertex, Infinity as W);
      fScore.set(vertex, Infinity as W);
      parents.set(vertex, null);
    }

    gScore.set(start, 0 as W);
    fScore.set(start, this.heuristic(start, end));
    openSet.add(start);
    priorityQueue.push([fScore.get(start)!, start]);

    while (priorityQueue.length > 0) {
      // Get node with lowest fScore
      priorityQueue.sort((a, b) => a[0] - b[0]);
      const [_, current] = priorityQueue.shift()!;

      if (current === end) {
        // Reconstruct path
        const path: T[] = [];
        let currentNode: T | null = end;
        while (currentNode !== null) {
          path.unshift(currentNode);
          currentNode = parents.get(currentNode)!;
        }
        return {
          path,
          distance: gScore.get(end)!,
          found: true,
          distances: gScore,
          parents
        };
      }

      openSet.delete(current);
      closedSet.add(current);

      // Explore neighbors
      for (const neighbor of graph.getNeighbors(current)) {
        if (closedSet.has(neighbor)) {
          continue;
        }

        const edgeWeight = graph.getEdgeWeight(current, neighbor);
        if (edgeWeight === undefined) {
          continue; // No edge
        }

        const tentativeGScore = (gScore.get(current)! + edgeWeight) as W;

        if (!openSet.has(neighbor)) {
          openSet.add(neighbor);
        } else if (tentativeGScore >= gScore.get(neighbor)!) {
          continue;
        }

        // This path is better
        parents.set(neighbor, current);
        gScore.set(neighbor, tentativeGScore);
        fScore.set(neighbor, (tentativeGScore + this.heuristic(neighbor, end)) as W);

        // Add to priority queue if not already there with better score
        const existingIndex = priorityQueue.findIndex(([_, v]) => v === neighbor);
        if (existingIndex >= 0) {
          priorityQueue[existingIndex] = [fScore.get(neighbor)!, neighbor];
        } else {
          priorityQueue.push([fScore.get(neighbor)!, neighbor]);
        }
      }
    }

    // No path found
    return {
      path: [],
      distance: Infinity as W,
      found: false,
      distances: gScore,
      parents
    };
  }

  /**
   * Executes A* algorithm (implements IAlgorithm interface)
   * @param graph The graph to search
   * @param start The start vertex
   * @param end The end vertex
   * @returns The path result
   */
  public execute(graph: IGraph<T, W>, start?: T, end?: T): IPathResult<T, W> {
    if (start === undefined || end === undefined) {
      throw new Error('Start and end vertices must be provided for A* algorithm');
    }
    return this.findShortestPath(graph, start, end);
  }
}
