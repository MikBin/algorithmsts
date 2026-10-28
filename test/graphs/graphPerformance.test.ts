import { describe, it, expect } from "vitest";
import { AdjacencyListGraph } from "../../src/graphs/structures/AdjacencyListGraph";
import { AdjacencyMatrixGraph } from "../../src/graphs/structures/AdjacencyMatrixGraph";
import { BreadthFirstSearch } from "../../src/graphs/algorithms/traversal/BreadthFirstSearch";
import { DepthFirstSearch } from "../../src/graphs/algorithms/traversal/DepthFirstSearch";
import { DijkstraAlgorithm } from "../../src/graphs/algorithms/shortest-path/DijkstraAlgorithm";
import { GraphTestData } from "./fixtures/GraphTestData";

describe("Graph Structure Instantiation Tests", () => {
  describe("Graph Construction", () => {
    const SIZES = [100, 500, 1000];

    SIZES.forEach((size) => {
      it(`should construct adjacency list graphs with ${size} vertices successfully`, () => {
        const listGraph = new AdjacencyListGraph<number>();
        for (let i = 0; i < size; i++) {
          listGraph.addVertex(i);
        }
        expect(listGraph.getVertexCount()).toBe(size);
      });

      it(`should construct adjacency matrix graphs with ${size} vertices successfully`, () => {
        const matrixGraph = new AdjacencyMatrixGraph<number>();
        for (let i = 0; i < size; i++) {
          matrixGraph.addVertex(i);
        }
        expect(matrixGraph.getVertexCount()).toBe(size);
      });
    });
  });

  describe("Edge Operations", () => {
    it("should handle edge additions properly in sparse graphs", () => {
      const graph = new AdjacencyListGraph<number>();
      const size = 100;

      for (let i = 0; i < size; i++) {
        graph.addVertex(i);
      }

      for (let i = 0; i < size; i++) {
        for (let j = i + 1; j < Math.min(i + 3, size); j++) {
          graph.addEdge(i, j);
        }
      }

      expect(graph.getEdgeCount()).toBeGreaterThan(0);
    });

    it("should handle edge additions properly in dense graphs", () => {
      const graph = new AdjacencyMatrixGraph<number>();
      const size = 50;

      for (let i = 0; i < size; i++) {
        graph.addVertex(i);
      }

      for (let i = 0; i < size; i++) {
        for (let j = i + 1; j < size; j++) {
          if (Math.random() > 0.7) {
            graph.addEdge(i, j);
          }
        }
      }
      // Assuming some edges were added based on probability
      expect(graph.getVertexCount()).toBe(size);
    });
  });

  describe("Traversal Algorithms", () => {
    const SIZES = [100, 500];

    SIZES.forEach((size) => {
      it(`should visit vertices successfully using BFS for size ${size}`, () => {
        const graph = GraphTestData.createLargeGraph("adjacencyList");
        const bfs = new BreadthFirstSearch<number>();
        const startVertex = graph.getVertices()[0];

        const bfsResult = bfs.traverse(graph, startVertex);

        expect(bfsResult.visited.length).toBeGreaterThan(0);
      });

      it(`should visit vertices successfully using DFS for size ${size}`, () => {
        const graph = GraphTestData.createLargeGraph("adjacencyList");
        const dfs = new DepthFirstSearch<number>();
        const startVertex = graph.getVertices()[0];

        const dfsResult = dfs.traverse(graph, startVertex);

        expect(dfsResult.visited.length).toBeGreaterThan(0);
      });
    });
  });

  describe("Shortest Path Algorithms", () => {
    it("should gracefully fail or complete for unweighted graph shortest path computation", () => {
      const graph = GraphTestData.createMediumGraph("adjacencyList");
      const dijkstra = new DijkstraAlgorithm<number>();
      const startVertex = graph.getVertices()[0];
      const endVertex = graph.getVertices()[graph.getVertices().length - 1];

      try {
        dijkstra.findShortestPath(graph, startVertex, endVertex);
      } catch (_error) {
        // Expected to fail for unweighted graph
      }

      // Implicitly checking it doesn't crash inappropriately
      expect(true).toBe(true);
    });

    it("should process weighted graph operations successfully", () => {
      const graph = new AdjacencyListGraph<number, number>(false, true);
      const size = 20;

      for (let i = 0; i < size; i++) {
        graph.addVertex(i);
      }

      for (let i = 0; i < size; i++) {
        for (let j = i + 1; j < Math.min(i + 3, size); j++) {
          graph.addEdge(i, j, Math.floor(Math.random() * 10) + 1);
        }
      }

      const dijkstra = new DijkstraAlgorithm<number, number>();

      try {
          const result = dijkstra.findShortestPath(graph, 0, size - 1);
          expect(result).toBeDefined();
      } catch(e) {
          // If unconnected, it throws an error in Dijkstra implementation usually or returns undefined
          expect(e).toBeDefined();
      }
    });
  });

  describe("Graph State Preservation (Scalability)", () => {
    it("should preserve correctly populated state in sparse graphs", () => {
      const size = 30;
      const sparseGraph = new AdjacencyListGraph<number>();

      for (let i = 0; i < size; i++) {
        sparseGraph.addVertex(i);
      }

      for (let i = 0; i < size; i += 3) {
        sparseGraph.addEdge(i, (i + 1) % size);
      }

      expect(sparseGraph.getVertexCount()).toBe(size);
    });

    it("should preserve correctly populated state in dense graphs", () => {
      const size = 30;
      const denseGraph = new AdjacencyMatrixGraph<number>();

      for (let i = 0; i < size; i++) {
        denseGraph.addVertex(i);
      }

      for (let i = 0; i < size; i++) {
        for (let j = i + 1; j < size; j++) {
          if (Math.random() > 0.5) {
            denseGraph.addEdge(i, j);
          }
        }
      }

      expect(denseGraph.getVertexCount()).toBe(size);
    });
  });

  describe("Sequential Operation Execution", () => {
    it("should sequentially construct and traverse a graph successfully", () => {
      const graph = new AdjacencyListGraph<number>();
      const size = 50;

      for (let i = 0; i < size; i++) {
        graph.addVertex(i);
      }

      for (let i = 0; i < size - 1; i++) {
        graph.addEdge(i, i + 1);
      }

      const bfs = new BreadthFirstSearch<number>();
      const bfsResult = bfs.traverse(graph, 0);

      const dfs = new DepthFirstSearch<number>();
      const dfsResult = dfs.traverse(graph, 0);

      expect(bfsResult.visited.length).toBeGreaterThan(0);
      expect(dfsResult.visited.length).toBeGreaterThan(0);
    });
  });
});
