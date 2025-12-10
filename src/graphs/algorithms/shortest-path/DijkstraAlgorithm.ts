import { BaseAlgorithm } from '../../../core/abstracts/BaseAlgorithm';
import { IGraph } from '../../interfaces/IGraph';
import { IPathfindingAlgorithm, IPathResult } from '../interfaces/IPathfindingAlgorithm';

/**
 * Dijkstra's Algorithm implementation for finding shortest paths in weighted graphs
 *
 * Dijkstra's algorithm finds the shortest path between nodes in a graph with
 * non-negative edge weights. It uses a priority queue to always expand the
 * node with the smallest distance from the source.
 *
 * Time Complexity: O((V + E) log V) with binary heap, O(V^2) with simple array
 * Space Complexity: O(V) for distances and priority queue
 *
 * @template T The type of vertices in the graph
 * @template W The type of edge weights (must be numeric)
 */
export class DijkstraAlgorithm<T, W extends number = number> extends BaseAlgorithm<IGraph<T, W>, IPathResult<T, W>>
  implements IPathfindingAlgorithm<T, W> {

  /**
   * Creates a new Dijkstra's algorithm instance
   */
  constructor() {
    super('Dijkstra\'s Algorithm', 'O((V + E) log V)', 'O(V)');
  }

  /**
   * Finds the shortest path from start to end vertex using Dijkstra's algorithm
   * @param graph The weighted graph to search
   * @param start The starting vertex
   * @param end The ending vertex
   * @returns The path result containing path and distance information
   * @throws Error if vertices do not exist or graph is not weighted
   */
  public findShortestPath(graph: IGraph<T, W>, start: T, end: T): IPathResult<T, W> {
    if (!graph.isWeighted()) {
      throw new Error('Dijkstra\'s algorithm requires a weighted graph');
    }

    const vertices = graph.getVertices();
    if (!vertices.includes(start) || !vertices.includes(end)) {
      throw new Error('Start or end vertex does not exist in the graph');
    }

    // Initialize distances and parents
    const distances = new Map<T, W>();
    const parents = new Map<T, T | null>();
    const visited = new Set<T>();

    // Priority queue: [distance, vertex]
    const priorityQueue: Array<[W, T]> = [];

    // Initialize all distances to infinity except start
    for (const vertex of vertices) {
      distances.set(vertex, Infinity as W);
      parents.set(vertex, null);
    }
    distances.set(start, 0 as W);

    // Add start vertex to priority queue
    priorityQueue.push([0 as W, start]);

    while (priorityQueue.length > 0) {
      // Sort priority queue by distance (simple implementation)
      priorityQueue.sort((a, b) => a[0] - b[0]);
      const [currentDistance, currentVertex] = priorityQueue.shift()!;

      if (visited.has(currentVertex)) {
        continue;
      }

      visited.add(currentVertex);

      // If we reached the end vertex, we can stop
      if (currentVertex === end) {
        break;
      }

      // Relax edges
      for (const neighbor of graph.getNeighbors(currentVertex)) {
        if (visited.has(neighbor)) {
          continue;
        }

        const edgeWeight = graph.getEdgeWeight(currentVertex, neighbor);
        if (edgeWeight === undefined) {
          continue; // No edge
        }

        const newDistance = (currentDistance + edgeWeight) as W;
        const neighborDistance = distances.get(neighbor)!;

        if (newDistance < neighborDistance) {
          distances.set(neighbor, newDistance);
          parents.set(neighbor, currentVertex);
          priorityQueue.push([newDistance, neighbor]);
        }
      }
    }

    // Reconstruct path
    const path: T[] = [];
    let current: T | null = end;

    while (current !== null) {
      path.unshift(current);
      current = parents.get(current)!;
    }

    // Check if path was found (start should be first in path)
    const found = path[0] === start;

    return {
      path: found ? path : [],
      distance: distances.get(end)!,
      found,
      distances,
      parents
    };
  }

  /**
   * Generator for Dijkstra's algorithm, yielding state at each step for visualization
   * @param graph The graph to search
   * @param start The start vertex
   * @param end The end vertex
   */
  public *findShortestPathGenerator(graph: IGraph<T, W>, start: T, end: T): Generator<any> {
    if (!graph.isWeighted()) {
      throw new Error('Dijkstra\'s algorithm requires a weighted graph');
    }

    const vertices = graph.getVertices();
    if (!vertices.includes(start) || !vertices.includes(end)) {
      throw new Error('Start or end vertex does not exist in the graph');
    }

    const distances = new Map<T, W>();
    const parents = new Map<T, T | null>();
    const visited = new Set<T>();
    const priorityQueue: Array<[W, T]> = [];

    for (const vertex of vertices) {
      distances.set(vertex, Infinity as W);
      parents.set(vertex, null);
    }
    distances.set(start, 0 as W);
    priorityQueue.push([0 as W, start]);

    while (priorityQueue.length > 0) {
      priorityQueue.sort((a, b) => a[0] - b[0]);
      const [currentDistance, currentVertex] = priorityQueue.shift()!;

      if (visited.has(currentVertex)) {
        continue;
      }

      visited.add(currentVertex);
      yield { type: 'step', visited: new Set(visited), processing: currentVertex, distances: new Map(distances), message: `Processing ${currentVertex} (dist: ${currentDistance})` };

      if (currentVertex === end) {
        break;
      }

      for (const neighbor of graph.getNeighbors(currentVertex)) {
        if (visited.has(neighbor)) {
          continue;
        }

        const edgeWeight = graph.getEdgeWeight(currentVertex, neighbor);
        if (edgeWeight === undefined) continue;

        const newDistance = (currentDistance + edgeWeight) as W;
        const neighborDistance = distances.get(neighbor)!;

        if (newDistance < neighborDistance) {
          distances.set(neighbor, newDistance);
          parents.set(neighbor, currentVertex);
          priorityQueue.push([newDistance, neighbor]);
          yield { type: 'step', visited: new Set(visited), processing: neighbor, distances: new Map(distances), message: `Updating ${neighbor} dist to ${newDistance}` };
        }
      }
    }

    // Reconstruct path
    const path: T[] = [];
    let current: T | null = end;
    while (current !== null) {
      path.unshift(current);
      current = parents.get(current) || null;
      if (current === null && path[0] !== start) {
          path.length = 0; // No path found
          break;
      }
    }

    if (path.length > 0 && path[0] === start) {
        yield { type: 'finished', visited: new Set(visited), path, message: `Path found: ${path.join(' -> ')}` };
    } else {
        yield { type: 'finished', visited: new Set(visited), message: 'No path found' };
    }
  }

  /**
   * Executes Dijkstra's algorithm (implements IAlgorithm interface)
   * @param graph The graph to search
   * @param start The start vertex
   * @param end The end vertex
   * @returns The path result
   */
  public execute(graph: IGraph<T, W>, start?: T, end?: T): IPathResult<T, W> {
    if (start === undefined || end === undefined) {
      throw new Error('Start and end vertices must be provided for Dijkstra\'s algorithm');
    }
    return this.findShortestPath(graph, start, end);
  }
}
