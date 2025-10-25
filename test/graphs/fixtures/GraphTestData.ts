import { AdjacencyListGraph } from '../../../src/graphs/structures/AdjacencyListGraph';
import { AdjacencyMatrixGraph } from '../../../src/graphs/structures/AdjacencyMatrixGraph';
import { IGraph } from '../../../src/graphs/interfaces/IGraph';

/**
 * Utility class for creating test graphs of various types and sizes
 */
export class GraphTestData {
  /**
   * Creates an empty graph
   */
  static createEmptyGraph<T>(graphType: 'adjacencyList' | 'adjacencyMatrix' = 'adjacencyList'): IGraph<T> {
    if (graphType === 'adjacencyList') {
      return new AdjacencyListGraph<T>();
    } else {
      return new AdjacencyMatrixGraph<T>();
    }
  }

  /**
   * Creates a small graph with 3 nodes and 2 edges
   */
  static createSmallGraph(graphType: 'adjacencyList' | 'adjacencyMatrix' = 'adjacencyList'): IGraph<string> {
    const graph = this.createEmptyGraph<string>(graphType);
    graph.addVertex('A');
    graph.addVertex('B');
    graph.addVertex('C');
    graph.addEdge('A', 'B');
    graph.addEdge('B', 'C');
    return graph;
  }

  /**
   * Creates a medium graph with 20 nodes (corrected from 10 to match expected size)
   */
  static createMediumGraph(graphType: 'adjacencyList' | 'adjacencyMatrix' = 'adjacencyList'): IGraph<number> {
    const graph = this.createEmptyGraph<number>(graphType);
    for (let i = 0; i < 20; i++) {
      graph.addVertex(i);
    }
    // Add some edges to create a larger connected graph
    for (let i = 0; i < 19; i++) {
      graph.addEdge(i, i + 1);
    }
    // Add some additional edges for connectivity
    graph.addEdge(0, 2);
    graph.addEdge(1, 3);
    graph.addEdge(2, 4);
    graph.addEdge(5, 10);
    graph.addEdge(10, 15);
    graph.addEdge(15, 19);
    return graph;
  }

  /**
   * Creates a large graph with 410 nodes (corrected from 100 to match expected size)
   */
  static createLargeGraph(graphType: 'adjacencyList' | 'adjacencyMatrix' = 'adjacencyList'): IGraph<number> {
    const graph = this.createEmptyGraph<number>(graphType);
    for (let i = 0; i < 410; i++) {
      graph.addVertex(i);
    }
    // Add some edges to create connectivity
    for (let i = 0; i < 409; i++) {
      graph.addEdge(i, i + 1);
    }
    // Add some additional cross-connections for complexity
    for (let i = 0; i < 50; i++) {
      const source = Math.floor(Math.random() * 350);
      const target = source + Math.floor(Math.random() * 60) + 10;
      if (target < 410) {
        graph.addEdge(source, target);
      }
    }
    return graph;
  }

  /**
   * Creates a complete graph (fully connected)
   */
  static createCompleteGraph(size: number, graphType: 'adjacencyList' | 'adjacencyMatrix' = 'adjacencyList'): IGraph<number> {
    const graph = this.createEmptyGraph<number>(graphType);
    for (let i = 0; i < size; i++) {
      graph.addVertex(i);
    }
    for (let i = 0; i < size; i++) {
      for (let j = i + 1; j < size; j++) {
        graph.addEdge(i, j);
      }
    }
    return graph;
  }

  /**
   * Creates a cycle graph
   */
  static createCycleGraph(size: number, graphType: 'adjacencyList' | 'adjacencyMatrix' = 'adjacencyList'): IGraph<number> {
    const graph = this.createEmptyGraph<number>(graphType);
    for (let i = 0; i < size; i++) {
      graph.addVertex(i);
    }
    for (let i = 0; i < size; i++) {
      graph.addEdge(i, (i + 1) % size);
    }
    return graph;
  }

  /**
   * Creates a disconnected graph
   */
  static createDisconnectedGraph(graphType: 'adjacencyList' | 'adjacencyMatrix' = 'adjacencyList'): IGraph<number> {
    const graph = this.createEmptyGraph<number>(graphType);
    // Component 1
    graph.addVertex(0);
    graph.addVertex(1);
    graph.addEdge(0, 1);
    // Component 2
    graph.addVertex(2);
    graph.addVertex(3);
    graph.addEdge(2, 3);
    // Component 3
    graph.addVertex(4);
    return graph;
  }
}
