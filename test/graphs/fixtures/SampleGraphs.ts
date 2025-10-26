import { AdjacencyListGraph } from '../../../src/graphs/structures/AdjacencyListGraph';
import { AdjacencyMatrixGraph } from '../../../src/graphs/structures/AdjacencyMatrixGraph';
import { IGraph } from '../../../src/graphs/interfaces/IGraph';

/**
 * Predefined graphs for consistent testing
 */
export class SampleGraphs {
  /**
   * Simple directed graph: A -> B -> C
   */
  static get simpleDirectedGraph(): IGraph<string> {
    const graph = new AdjacencyListGraph<string>(true); // directed
    graph.addVertex('A');
    graph.addVertex('B');
    graph.addVertex('C');
    graph.addEdge('A', 'B');
    graph.addEdge('B', 'C');
    return graph;
  }

  /**
   * Simple undirected graph: A -- B -- C
   */
  static get simpleUndirectedGraph(): IGraph<string> {
    const graph = new AdjacencyListGraph<string>(false, true); // undirected, weighted
    graph.addVertex('A');
    graph.addVertex('B');
    graph.addVertex('C');
    graph.addEdge('A', 'B', 1);
    graph.addEdge('B', 'C', 2);
    return graph;
  }

  /**
   * Unweighted simple undirected graph: A -- B -- C
   */
  static get unweightedSimpleUndirectedGraph(): IGraph<string> {
    const graph = new AdjacencyListGraph<string>(false, false); // undirected, unweighted
    graph.addVertex('A');
    graph.addVertex('B');
    graph.addVertex('C');
    graph.addEdge('A', 'B');
    graph.addEdge('B', 'C');
    return graph;
  }

  /**
   * Graph with a cycle: A -> B -> C -> A
   */
  static get cyclicGraph(): IGraph<string> {
    const graph = new AdjacencyListGraph<string>(true); // directed
    graph.addVertex('A');
    graph.addVertex('B');
    graph.addVertex('C');
    graph.addEdge('A', 'B');
    graph.addEdge('B', 'C');
    graph.addEdge('C', 'A');
    return graph;
  }

  /**
   * DAG (Directed Acyclic Graph): A -> B, A -> C, B -> D, C -> D
   */
  static get dagGraph(): IGraph<string> {
    const graph = new AdjacencyListGraph<string>(true); // directed
    graph.addVertex('A');
    graph.addVertex('B');
    graph.addVertex('C');
    graph.addVertex('D');
    graph.addEdge('A', 'B');
    graph.addEdge('A', 'C');
    graph.addEdge('B', 'D');
    graph.addEdge('C', 'D');
    return graph;
  }

  /**
   * Weighted graph for shortest path testing
   */
  static get weightedGraph(): IGraph<string> {
    const graph = new AdjacencyListGraph<string>(false, true); // undirected, weighted
    graph.addVertex('A');
    graph.addVertex('B');
    graph.addVertex('C');
    graph.addVertex('D');
    graph.addEdge('A', 'B', 4);
    graph.addEdge('A', 'C', 2);
    graph.addEdge('B', 'C', 5);
    graph.addEdge('B', 'D', 10);
    graph.addEdge('C', 'D', 3);
    return graph;
  }

  /**
   * Disconnected graph with two components
   */
  static get disconnectedGraph(): IGraph<string> {
    const graph = new AdjacencyListGraph<string>(false, true); // undirected, weighted
    graph.addVertex('A');
    graph.addVertex('B');
    graph.addVertex('C');
    graph.addVertex('D');
    graph.addEdge('A', 'B', 1);
    graph.addEdge('C', 'D', 1);
    return graph;
  }

  /**
   * Empty graph
   */
  static get emptyGraph(): IGraph<string> {
    return new AdjacencyListGraph<string>(true); // directed
  }

  /**
   * Single vertex graph
   */
  static get singleVertexGraph(): IGraph<string> {
    const graph = new AdjacencyListGraph<string>(true, true); // directed, weighted
    graph.addVertex('A');
    return graph;
  }

  /**
   * Complete graph K4 (undirected - should have cycles)
   */
  static get completeGraphK4(): IGraph<string> {
    const graph = new AdjacencyListGraph<string>(false, true); // undirected, weighted
    graph.addVertex('A');
    graph.addVertex('B');
    graph.addVertex('C');
    graph.addVertex('D');
    // Add all possible edges for complete graph K4 with weights
    graph.addEdge('A', 'B', 1);
    graph.addEdge('A', 'C', 2);
    graph.addEdge('A', 'D', 3);
    graph.addEdge('B', 'C', 4);
    graph.addEdge('B', 'D', 5);
    graph.addEdge('C', 'D', 6);
    return graph;
  }

  /**
   * Tree structure
   */
  static get treeGraph(): IGraph<string> {
    const graph = new AdjacencyListGraph<string>(true, true); // directed, weighted
    graph.addVertex('A');
    graph.addVertex('B');
    graph.addVertex('C');
    graph.addVertex('D');
    graph.addVertex('E');
    graph.addEdge('A', 'B', 1);
    graph.addEdge('A', 'C', 2);
    graph.addEdge('B', 'D', 3);
    graph.addEdge('B', 'E', 4);
    return graph;
  }

  /**
   * Same graphs but using adjacency matrix implementation
   */
  static get simpleDirectedGraphMatrix(): IGraph<string> {
    const graph = new AdjacencyMatrixGraph<string>(true); // directed
    graph.addVertex('A');
    graph.addVertex('B');
    graph.addVertex('C');
    graph.addEdge('A', 'B');
    graph.addEdge('B', 'C');
    return graph;
  }

  static get weightedGraphMatrix(): IGraph<string> {
    const graph = new AdjacencyMatrixGraph<string>(false, true); // undirected, weighted
    graph.addVertex('A');
    graph.addVertex('B');
    graph.addVertex('C');
    graph.addVertex('D');
    graph.addEdge('A', 'B', 4);
    graph.addEdge('A', 'C', 2);
    graph.addEdge('B', 'C', 5);
    graph.addEdge('B', 'D', 10);
    graph.addEdge('C', 'D', 3);
    return graph;
  }
}
