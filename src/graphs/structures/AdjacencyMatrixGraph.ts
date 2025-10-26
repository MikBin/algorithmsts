import { BaseDataStructure } from '../../core/abstracts/BaseDataStructure';
import { IIterator } from '../../core/interfaces/IIterator';
import { Validator } from '../../core/validation/Validator';
import { ArgumentError } from '../../core/validation/ArgumentError';
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
    Validator.notNull(element, 'element');
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
        // For unweighted graphs, check if the edge exists (key is present)
        // For weighted graphs, check if the weight is not undefined
        if (this.weighted ? weight !== undefined : neighbors.has(to)) {
          if (this.weighted) {
            // Type assertion to ensure weight is not undefined for weighted graphs
            edges.push([from, to, weight!]);
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
        // For unweighted graphs, check if the edge exists (key is present)
        // For weighted graphs, check if the weight is not undefined
        if (this.weighted ? weight !== undefined : vertexNeighbors.has(neighbor)) {
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
    // For unweighted graphs, check if the edge exists in the adjacency matrix
    // regardless of the weight value (which might be undefined)
    if (!this.contains(from) || !this.contains(to)) {
      return false;
    }

    const fromNeighbors = this.adjacencyMatrix.get(from);
    if (!fromNeighbors) {
      return false;
    }

    // For unweighted graphs, the edge exists if the key is present
    // For weighted graphs, the edge exists if the weight is not undefined
    if (this.weighted) {
      return fromNeighbors.get(to) !== undefined;
    } else {
      return fromNeighbors.has(to);
    }
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
          // For undirected graphs, we've already counted this edge once
          // For directed graphs, this is a separate edge
          if (this.directed) {
            this.edgeCount--;
          }
        }
      }
    }

    // For undirected graphs, also remove reverse edges
    if (!this.directed) {
      const neighbors = this.adjacencyMatrix.get(vertex)!;
      for (const neighbor of neighbors.keys()) {
        this.adjacencyMatrix.get(neighbor)!.delete(vertex);
      }
      // Count edges being removed from this vertex
      this.edgeCount -= neighbors.size;
    } else {
      // For directed graphs, count edges from this vertex
      const neighbors = this.adjacencyMatrix.get(vertex)!;
      this.edgeCount -= neighbors.size;
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

    // For unweighted graphs, use a default value to indicate edge existence
    const edgeValue = this.weighted ? weight : (undefined as W);
    this.adjacencyMatrix.get(from)!.set(to, edgeValue);

    // For undirected graphs, add reverse edge but don't double count
    if (!this.directed) {
      this.adjacencyMatrix.get(to)!.set(from, edgeValue);
    }

    // Only count edge once for undirected graphs
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

    this.adjacencyMatrix.get(from)!.delete(to);

    // For undirected graphs, remove reverse edge
    if (!this.directed) {
      this.adjacencyMatrix.get(to)!.delete(from);
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
  private vertices: T[];
  private currentIndex: number = 0;
  private currentVertex: T | undefined;

  constructor(vertices: IterableIterator<T>) {
    this.vertices = Array.from(vertices);
  }

  public hasNext(): boolean {
    return this.currentIndex < this.vertices.length;
  }

  public next(): T {
    if (!this.hasNext()) {
      throw new Error('No more elements in iteration');
    }
    this.currentVertex = this.vertices[this.currentIndex];
    this.currentIndex++;
    return this.currentVertex;
  }

  public current(): T {
    if (this.currentVertex === undefined) {
      throw new Error('No current element');
    }
    return this.currentVertex;
  }
}
