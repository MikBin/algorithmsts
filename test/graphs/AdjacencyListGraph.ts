
import { IGraph } from '../../src/interfaces';

export class AdjacencyListGraph<T> implements IGraph<T> {
  private adjacencyList: Map<T, T[]> = new Map();

  addNode(node: T): void {
    this.adjacencyList.set(node, []);
  }

  addEdge(node1: T, node2: T): void {
    this.adjacencyList.get(node1)?.push(node2);
    this.adjacencyList.get(node2)?.push(node1);
  }

  getNeighbors(node: T): T[] {
    return this.adjacencyList.get(node) || [];
  }
}
