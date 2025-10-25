import { IGraph } from '../../../src/graphs/interfaces/IGraph';

/**
 * Utility functions for graph testing
 */
export class GraphTestUtils {
  /**
   * Checks if two graphs are isomorphic (same structure)
   */
  static areIsomorphic<T>(graph1: IGraph<T>, graph2: IGraph<T>): boolean {
    const vertices1 = graph1.getVertices();
    const vertices2 = graph2.getVertices();

    if (vertices1.length !== vertices2.length) {
      return false;
    }

    // For now, just check vertex count and edge count
    // A full isomorphism check would be more complex
    const edges1 = this.countEdges(graph1);
    const edges2 = this.countEdges(graph2);

    return edges1 === edges2;
  }

  /**
   * Counts the total number of edges in a graph
   */
  static countEdges<T>(graph: IGraph<T>): number {
    let count = 0;
    for (const vertex of graph.getVertices()) {
      count += graph.getNeighbors(vertex).length;
    }
    // For undirected graphs, divide by 2 since edges are counted twice
    return graph.isDirected() ? count : count / 2;
  }

  /**
   * Checks if a graph contains a cycle
   */
  static hasCycle<T>(graph: IGraph<T>): boolean {
    const visited = new Set<T>();
    const recStack = new Set<T>();

    const dfs = (vertex: T): boolean => {
      visited.add(vertex);
      recStack.add(vertex);

      for (const neighbor of graph.getNeighbors(vertex)) {
        if (!visited.has(neighbor)) {
          if (dfs(neighbor)) {
            return true;
          }
        } else if (recStack.has(neighbor)) {
          return true;
        }
      }

      recStack.delete(vertex);
      return false;
    };

    for (const vertex of graph.getVertices()) {
      if (!visited.has(vertex)) {
        if (dfs(vertex)) {
          return true;
        }
      }
    }

    return false;
  }

  /**
   * Gets the degree of a vertex
   */
  static getDegree<T>(graph: IGraph<T>, vertex: T): number {
    return graph.getNeighbors(vertex).length;
  }

  /**
   * Checks if a graph is connected
   */
  static isConnected<T>(graph: IGraph<T>): boolean {
    if (graph.getVertices().length === 0) {
      return true;
    }

    const visited = new Set<T>();
    const startVertex = graph.getVertices()[0];

    this.dfsVisit(graph, startVertex, visited);

    return visited.size === graph.getVertices().length;
  }

  /**
   * Performs DFS traversal and marks visited vertices
   */
  private static dfsVisit<T>(graph: IGraph<T>, vertex: T, visited: Set<T>): void {
    visited.add(vertex);

    for (const neighbor of graph.getNeighbors(vertex)) {
      if (!visited.has(neighbor)) {
        this.dfsVisit(graph, neighbor, visited);
      }
    }
  }

  /**
   * Gets all connected components of a graph
   */
  static getConnectedComponents<T>(graph: IGraph<T>): T[][] {
    const visited = new Set<T>();
    const components: T[][] = [];

    for (const vertex of graph.getVertices()) {
      if (!visited.has(vertex)) {
        const component: T[] = [];
        this.dfsVisitWithCollection(graph, vertex, visited, component);
        components.push(component);
      }
    }

    return components;
  }

  /**
   * Performs DFS and collects visited vertices
   */
  private static dfsVisitWithCollection<T>(graph: IGraph<T>, vertex: T, visited: Set<T>, component: T[]): void {
    visited.add(vertex);
    component.push(vertex);

    for (const neighbor of graph.getNeighbors(vertex)) {
      if (!visited.has(neighbor)) {
        this.dfsVisitWithCollection(graph, neighbor, visited, component);
      }
    }
  }

  /**
   * Validates that a graph is a valid DAG (no cycles)
   */
  static isDAG<T>(graph: IGraph<T>): boolean {
    return !this.hasCycle(graph);
  }

  /**
   * Gets topological order of a DAG
   */
  static getTopologicalOrder<T>(graph: IGraph<T>): T[] | null {
    if (!this.isDAG(graph)) {
      return null;
    }

    const visited = new Set<T>();
    const order: T[] = [];

    const visit = (vertex: T): void => {
      visited.add(vertex);

      for (const neighbor of graph.getNeighbors(vertex)) {
        if (!visited.has(neighbor)) {
          visit(neighbor);
        }
      }

      order.unshift(vertex);
    };

    for (const vertex of graph.getVertices()) {
      if (!visited.has(vertex)) {
        visit(vertex);
      }
    }

    return order;
  }

  /**
   * Creates a deep copy of a graph
   */
  static cloneGraph<T>(graph: IGraph<T>): IGraph<T> {
    // This is a simplified clone - in practice, you'd need to instantiate the correct type
    const cloned = graph.constructor() as IGraph<T>;

    for (const vertex of graph.getVertices()) {
      cloned.addVertex(vertex);
    }

    for (const vertex of graph.getVertices()) {
      for (const neighbor of graph.getNeighbors(vertex)) {
        // Note: This doesn't handle weights properly
        cloned.addEdge(vertex, neighbor);
      }
    }

    return cloned;
  }

  /**
   * Generates random graph data for testing
   */
  static generateRandomGraphData(vertexCount: number, edgeProbability: number = 0.1): { vertices: number[], edges: [number, number][] } {
    const vertices = Array.from({ length: vertexCount }, (_, i) => i);
    const edges: [number, number][] = [];

    for (let i = 0; i < vertexCount; i++) {
      for (let j = i + 1; j < vertexCount; j++) {
        if (Math.random() < edgeProbability) {
          edges.push([i, j]);
        }
      }
    }

    return { vertices, edges };
  }
}
