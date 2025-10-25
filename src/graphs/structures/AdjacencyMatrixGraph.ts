import { BaseDataStructure } from '../../core/abstracts/BaseDataStructure';
import { IIterator } from '../../core/interfaces/IIterator';
import { Validator } from '../../core/validation/Validator';
import { ArgumentError } from '../../core/validation/ArgumentError';
import { DataStructureError } from '../../core/validation/DataStructureError';
import { IGraph } from '../interfaces/IGraph';

/**
 * Adjacency matrix implementation of graph data structure
 * Supports both directed and undirected, weighted and unweighted graphs
 * @template T - The type of vertices
 * @template W - The type of edge weights
 */
export class AdjacencyMatrixGraph<T, W = number> extends BaseDataStructure<T> implements IGraph<T, W> {
  private adjacencyMatrix: Map<T, Map<T, W | undefined>> = new Map();
  private vertexIndex: Map<T, number> = new Map();
  private indexVertex: Map<number, T> = new Map();
  private readonly directed: boolean;
  private readonly weighted: boolean;
  private edgeCount: number = 0;

  /**
   * Creates a new adjacency matrix graph
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
    return new AdjacencyMatrixIterator(this.vertexIndex.keys());
  }

  /**
   * @inheritdoc
   */
  public contains(element: T): boolean {
    return this.vertexIndex.has(element);
  }

  /**
   * @inheritdoc
   */
  public toArray(): T[] {
    return Array.from(this.vertexIndex.keys());
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

    for (const [from, neighbors] of this.adjacencyMatrix) {
      for (const [to, weight] of neighbors) {
        if (weight !== undefined) {
          if (this.weighted) {
            edges.push([from, to, weight]);
          } else {
            edges.push([from, to]);
          }
        }
      }
    }

    // For undirected graphs, avoid duplicate edges
    if (!this.directed) {
      const seen = new Set<string>();
      return edges.filter(([from, to]) => {
        const key = `${from}-${to}`;
        const reverseKey = `${to}-${from}`;
        if (seen.has(key) || seen.has(reverseKey)) {
          return false;
        }
        seen.add(key);
        return true;
      });
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

    const neighbors: T[] = [];
    const vertexNeighbors = this.adjacencyMatrix.get(vertex);

    if (vertexNeighbors) {
      for (const [neighbor, weight] of vertexNeighbors) {
        if (weight !== undefined) {
          neighbors.push(neighbor);
        }
      }
    }

    return neighbors;
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

    return this.adjacencyMatrix.get(from)?.get(to);
  }

  /**
   * @inheritdoc
   */
  public hasEdge(from: T, to: T): boolean {
    return this.getEdgeWeight(from, to) !== undefined;
  }

  /**
   * @inheritdoc
   */
  public addVertex(vertex: T): void {
    Validator.notNull(vertex, 'vertex');
    if (this.contains(vertex)) {
      throw new ArgumentError(`Vertex ${vertex} already exists in the graph`);
    }

    const index = this._size;
    this.vertexIndex.set(vertex, index);
    this.indexVertex.set(index, vertex);
    this.adjacencyMatrix.set(vertex, new Map());
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

    const index = this.vertexIndex.get(vertex)!;

    // Remove all edges involving this vertex
    for (const otherVertex of this.adjacencyMatrix.keys()) {
      if (otherVertex !== vertex) {
        const otherNeighbors = this.adjacencyMatrix.get(otherVertex)!;
        if (otherNeighbors.has(vertex)) {
          otherNeighbors.delete(vertex);
          this.edgeCount--;
        }
      }
    }

    // For undirected graphs, also remove reverse edges
    if (!this.directed) {
      const neighbors = this.adjacencyMatrix.get(vertex)!;
      for (const neighbor of neighbors.keys()) {
        this.adjacencyMatrix.get(neighbor)!.delete(vertex);
      }
    }

    this.adjacencyMatrix.delete(vertex);
    this.vertexIndex.delete(vertex);
    this.indexVertex.delete(index);
    this._size--;

    // Rebuild indices after removal
    this.rebuildIndices();
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

    this.adjacencyMatrix.get(from)!.set(to, weight);
    this.edgeCount++;

    // For undirected graphs, add reverse edge
    if (!this.directed) {
      this.adjacencyMatrix.get(to)!.set(from, weight);
      this.edgeCount++;
    }
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

    this.adjacencyMatrix.get(from)!.delete(to);
    this.edgeCount--;

    // For undirected graphs, remove reverse edge
    if (!this.directed) {
      this.adjacencyMatrix.get(to)!.delete(from);
      this.edgeCount--;
    }
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
    this.adjacencyMatrix.clear();
    this.vertexIndex.clear();
    this.indexVertex.clear();
    this.edgeCount = 0;
    this._size = 0;
  }

  /**
   * Rebuilds vertex indices after vertex removal
   * @private
   */
  private rebuildIndices(): void {
    this.vertexIndex.clear();
    this.indexVertex.clear();

    let index = 0;
    for (const vertex of this.adjacencyMatrix.keys()) {
      this.vertexIndex.set(vertex, index);
      this.indexVertex.set(index, vertex);
      index++;
    }
  }
}

/**
 * Iterator implementation for adjacency matrix graph
 */
class AdjacencyMatrixIterator<T> implements IIterator<T> {
  private vertexIterator: Iterator<T>;
  private currentVertex: T | undefined;

  constructor(vertices: IterableIterator<T>) {
    this.vertexIterator = vertices;
  }

  public hasNext(): boolean {
    const next = this.vertexIterator.next();
    if (!next.done) {
      // Reset iterator to previous position
      return true;
    }
    return false;
  }

  public next(): T {
    const result = this.vertexIterator.next();
    if (result.done) {
      throw new Error('No more elements in iteration');
    }
    this.currentVertex = result.value;
    return result.value;
  }

  public current(): T {
    if (this.currentVertex === undefined) {
      throw new Error('No current element');
    }
    return this.currentVertex;
  }
}
