import { BaseDataStructure } from '../../core/abstracts/BaseDataStructure';
import { IIterator } from '../../core/interfaces/IIterator';
import { Validator } from '../../core/validation/Validator';
import { ArgumentError } from '../../core/validation/ArgumentError';
import { IGraph } from '../interfaces/IGraph';

/**
 * Adjacency list implementation of graph data structure
 * Supports both directed and undirected, weighted and unweighted graphs
 * @template T - The type of vertices
 * @template W - The type of edge weights
 */
export class AdjacencyListGraph<T, W = number> extends BaseDataStructure<T> implements IGraph<T, W> {
  private adjacencyList: Map<T, Map<T, W | undefined>> = new Map();
  private readonly directed: boolean;
  private readonly weighted: boolean;
  private edgeCount: number = 0;

  /**
   * Creates a new adjacency list graph
   * @param directed Whether the graph is directed (default: false)
   * @param weighted Whether the graph is weighted (default: false)
   */
  constructor(directed: boolean = false, weighted: boolean = false) {
    super();
    this.directed = directed;
    this.weighted = weighted;
  }

  /**
   * @inheritdoc
   */
  public iterator(): IIterator<T> {
    return new AdjacencyListIterator(this.adjacencyList.keys());
  }

  /**
   * @inheritdoc
   */
  public contains(element: T): boolean {
    Validator.notNull(element, 'element');
    return this.adjacencyList.has(element);
  }

  /**
   * @inheritdoc
   */
  public toArray(): T[] {
    return Array.from(this.adjacencyList.keys());
  }

  /**
   * @inheritdoc
   */
  public getVertices(): T[] {
    return this.toArray();
  }

  /**
   * @inheritdoc
   */
  public getEdges(): Array<[T, T] | [T, T, W]> {
    const edges: Array<[T, T] | [T, T, W]> = [];

    for (const [from, neighbors] of this.adjacencyList) {
      for (const [to, weight] of neighbors) {
        if (this.weighted && weight !== undefined) {
          edges.push([from, to, weight]);
        } else {
          edges.push([from, to]);
        }
      }
    }

    // For undirected graphs, avoid duplicate edges
    if (!this.directed) {
      const seen = new Set<string>();
      const uniqueEdges: Array<[T, T] | [T, T, W]> = [];
      for (const edge of edges) {
        const [from, to] = edge;
        const key = `${from}-${to}`;
        const reverseKey = `${to}-${from}`;
        if (!seen.has(key) && !seen.has(reverseKey)) {
          uniqueEdges.push(edge);
          seen.add(key);
        }
      }
      return uniqueEdges;
    }

    return edges;
  }

  /**
   * @inheritdoc
   */
  public getNeighbors(vertex: T): T[] {
    Validator.notNull(vertex, 'vertex');
    if (!this.contains(vertex)) {
      throw new ArgumentError(`Vertex ${vertex} does not exist in the graph`);
    }

    const neighbors = this.adjacencyList.get(vertex)!;
    return Array.from(neighbors.keys());
  }

  /**
   * @inheritdoc
   */
  public getEdgeWeight(from: T, to: T): W | undefined {
    Validator.notNull(from, 'from');
    Validator.notNull(to, 'to');
    if (!this.contains(from) || !this.contains(to)) {
      throw new ArgumentError('Both vertices must exist in the graph');
    }

    return this.adjacencyList.get(from)?.get(to);
  }

  /**
   * @inheritdoc
   */
  public hasEdge(from: T, to: T): boolean {
    Validator.notNull(from, 'from');
    Validator.notNull(to, 'to');

    if (!this.contains(from) || !this.contains(to)) {
      return false;
    }

    return this.adjacencyList.get(from)?.has(to) || false;
  }

  /**
   * @inheritdoc
   */
  public addVertex(vertex: T): void {
    Validator.notNull(vertex, 'vertex');
    if (this.contains(vertex)) {
      throw new ArgumentError(`Vertex ${vertex} already exists in the graph`);
    }

    this.adjacencyList.set(vertex, new Map());
    this._size++;
  }

  /**
   * @inheritdoc
   */
  public removeVertex(vertex: T): void {
    Validator.notNull(vertex, 'vertex');
    if (!this.contains(vertex)) {
      throw new ArgumentError(`Vertex ${vertex} does not exist in the graph`);
    }

    // Remove all edges to/from this vertex
    const neighbors = this.adjacencyList.get(vertex)!;

    // Remove edges from other vertices to this vertex
    for (const otherVertex of this.adjacencyList.keys()) {
      if (otherVertex !== vertex) {
        const otherNeighbors = this.adjacencyList.get(otherVertex)!;
        if (otherNeighbors.delete(vertex)) {
          // For undirected graphs, we've already counted this edge once
          // For directed graphs, this is a separate edge
          if (this.directed) {
            this.edgeCount--;
          }
        }
      }
    }

    // Remove edges from this vertex to others
    this.edgeCount -= neighbors.size;
    this.adjacencyList.delete(vertex);
    this._size--;
  }

  /**
   * @inheritdoc
   */
  public addEdge(from: T, to: T, weight?: W): void {
    Validator.notNull(from, 'from');
    Validator.notNull(to, 'to');

    if (!this.contains(from) || !this.contains(to)) {
      throw new ArgumentError('Both vertices must exist in the graph');
    }

    if (this.hasEdge(from, to)) {
      throw new ArgumentError(`Edge from ${from} to ${to} already exists`);
    }

    if (this.weighted && weight === undefined) {
      throw new ArgumentError('Weight must be provided for weighted graphs');
    }

    if (!this.weighted && weight !== undefined) {
      throw new ArgumentError('Weight should not be provided for unweighted graphs');
    }

    this.adjacencyList.get(from)!.set(to, weight);

    // For undirected graphs, add reverse edge but don't double count
    if (!this.directed) {
      this.adjacencyList.get(to)!.set(from, weight);
    }

    // Only count the edge once for undirected graphs
    this.edgeCount++;
  }

  /**
   * @inheritdoc
   */
  public removeEdge(from: T, to: T): void {
    Validator.notNull(from, 'from');
    Validator.notNull(to, 'to');

    if (!this.contains(from) || !this.contains(to)) {
      throw new ArgumentError('Both vertices must exist in the graph');
    }

    if (!this.hasEdge(from, to)) {
      throw new ArgumentError(`Edge from ${from} to ${to} does not exist`);
    }

    this.adjacencyList.get(from)!.delete(to);

    // For undirected graphs, remove reverse edge
    if (!this.directed) {
      this.adjacencyList.get(to)!.delete(from);
    }

    // Only decrement edge count once for undirected graphs
    this.edgeCount--;
  }

  /**
   * @inheritdoc
   */
  public getVertexCount(): number {
    return this.size;
  }

  /**
   * @inheritdoc
   */
  public getEdgeCount(): number {
    return this.edgeCount;
  }

  /**
   * @inheritdoc
   */
  public isDirected(): boolean {
    return this.directed;
  }

  /**
   * @inheritdoc
   */
  public isWeighted(): boolean {
    return this.weighted;
  }

  /**
   * @inheritdoc
   */
  public clear(): void {
    this.adjacencyList.clear();
    this.edgeCount = 0;
    this._size = 0;
  }
}

/**
 * Iterator implementation for adjacency list graph
 */
class AdjacencyListIterator<T> implements IIterator<T> {
  private vertexIterator: Iterator<T>;
  private currentVertex: T | undefined;
  private nextValue: T | undefined;
  private hasNextCalled: boolean = false;

  constructor(vertices: IterableIterator<T>) {
    this.vertexIterator = vertices;
  }

  public hasNext(): boolean {
    if (!this.hasNextCalled) {
      const result = this.vertexIterator.next();
      this.nextValue = result.done ? undefined : result.value;
      this.hasNextCalled = true;
    }
    return this.nextValue !== undefined;
  }

  public next(): T {
    if (!this.hasNext()) {
      throw new Error('No more elements in iteration');
    }
    this.currentVertex = this.nextValue;
    this.nextValue = undefined;
    this.hasNextCalled = false;
    return this.currentVertex!;
  }

  public current(): T {
    if (this.currentVertex === undefined) {
      throw new Error('No current element');
    }
    return this.currentVertex;
  }
}
