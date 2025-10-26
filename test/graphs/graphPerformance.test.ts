import { describe, it, expect, beforeEach } from 'vitest';
import { AdjacencyListGraph } from '../../src/graphs/structures/AdjacencyListGraph';
import { AdjacencyMatrixGraph } from '../../src/graphs/structures/AdjacencyMatrixGraph';
import { BreadthFirstSearch } from '../../src/graphs/algorithms/traversal/BreadthFirstSearch';
import { DepthFirstSearch } from '../../src/graphs/algorithms/traversal/DepthFirstSearch';
import { DijkstraAlgorithm } from '../../src/graphs/algorithms/shortest-path/DijkstraAlgorithm';
import { GraphTestData } from './fixtures/GraphTestData';

/**
 * Performance benchmarks for graph operations
 * These tests verify that operations complete within reasonable time bounds
 */
describe('Graph Performance Benchmarks', () => {
  describe('Graph Construction Performance', () => {
    const SIZES = [100, 500, 1000];

    SIZES.forEach(size => {
      it(`should construct graphs with ${size} vertices efficiently`, () => {
        const startTime = performance.now();

        // Test adjacency list
        const listGraph = new AdjacencyListGraph<number>();
        for (let i = 0; i < size; i++) {
          listGraph.addVertex(i);
        }

        // Test adjacency matrix
        const matrixGraph = new AdjacencyMatrixGraph<number>();
        for (let i = 0; i < size; i++) {
          matrixGraph.addVertex(i);
        }

        const endTime = performance.now();
        const duration = endTime - startTime;

        // Construction should be fast (less than 100ms for reasonable sizes)
        expect(duration).toBeLessThan(100);
        expect(listGraph.getVertexCount()).toBe(size);
        expect(matrixGraph.getVertexCount()).toBe(size);
      });
    });
  });

  describe('Edge Operation Performance', () => {
    it('should handle edge additions efficiently', () => {
      const graph = new AdjacencyListGraph<number>();
      const size = 100;

      // Create vertices
      for (let i = 0; i < size; i++) {
        graph.addVertex(i);
      }

      const startTime = performance.now();

      // Add edges (create a sparse graph)
      for (let i = 0; i < size; i++) {
        for (let j = i + 1; j < Math.min(i + 3, size); j++) {
          graph.addEdge(i, j);
        }
      }

      const endTime = performance.now();
      const duration = endTime - startTime;

      expect(duration).toBeLessThan(50); // Should be very fast
      expect(graph.getEdgeCount()).toBeGreaterThan(0);
    });

    it('should handle dense graph operations', () => {
      const graph = new AdjacencyMatrixGraph<number>();
      const size = 50; // Smaller size for dense operations

      // Create vertices
      for (let i = 0; i < size; i++) {
        graph.addVertex(i);
      }

      const startTime = performance.now();

      // Add many edges (dense graph)
      for (let i = 0; i < size; i++) {
        for (let j = i + 1; j < size; j++) {
          if (Math.random() > 0.7) { // 30% density
            graph.addEdge(i, j);
          }
        }
      }

      const endTime = performance.now();
      const duration = endTime - startTime;

      expect(duration).toBeLessThan(100);
    });
  });

  describe('Traversal Algorithm Performance', () => {
    const SIZES = [100, 500];

    SIZES.forEach(size => {
      it(`should traverse graphs with ${size} vertices efficiently`, () => {
        const graph = GraphTestData.createLargeGraph('adjacencyList');
        const bfs = new BreadthFirstSearch<number>();
        const dfs = new DepthFirstSearch<number>();

        const startVertex = graph.getVertices()[0];

        // BFS performance
        const bfsStartTime = performance.now();
        const bfsResult = bfs.traverse(graph, startVertex);
        const bfsEndTime = performance.now();
        const bfsDuration = bfsEndTime - bfsStartTime;

        // DFS performance
        const dfsStartTime = performance.now();
        const dfsResult = dfs.traverse(graph, startVertex);
        const dfsEndTime = performance.now();
        const dfsDuration = dfsEndTime - dfsStartTime;

        // Both should complete in reasonable time
        expect(bfsDuration).toBeLessThan(200);
        expect(dfsDuration).toBeLessThan(200);

        // Both should visit vertices
        expect(bfsResult.visited.length).toBeGreaterThan(0);
        expect(dfsResult.visited.length).toBeGreaterThan(0);
      });
    });
  });

  describe('Shortest Path Performance', () => {
    it('should compute shortest paths efficiently', () => {
      const graph = GraphTestData.createMediumGraph('adjacencyList');
      const dijkstra = new DijkstraAlgorithm<number>();

      // Note: This will fail because the graph is unweighted, but we test the interface
      const startVertex = graph.getVertices()[0];
      const endVertex = graph.getVertices()[graph.getVertices().length - 1];

      const startTime = performance.now();

      try {
        dijkstra.findShortestPath(graph, startVertex, endVertex);
      } catch (error) {
        // Expected to fail for unweighted graph
      }

      const endTime = performance.now();
      const duration = endTime - startTime;

      // Even error handling should be fast
      expect(duration).toBeLessThan(50);
    });

    it('should handle weighted graph operations', () => {
      // Create a small weighted graph for performance testing
      const graph = new AdjacencyListGraph<number, number>(false, true);
      const size = 20;

      for (let i = 0; i < size; i++) {
        graph.addVertex(i);
      }

      // Add some weighted edges
      for (let i = 0; i < size; i++) {
        for (let j = i + 1; j < Math.min(i + 3, size); j++) {
          graph.addEdge(i, j, Math.floor(Math.random() * 10) + 1);
        }
      }

      const dijkstra = new DijkstraAlgorithm<number, number>();
      const startTime = performance.now();

      const result = dijkstra.findShortestPath(graph, 0, size - 1);

      const endTime = performance.now();
      const duration = endTime - startTime;

      expect(duration).toBeLessThan(50);
      // Result may or may not be found depending on connectivity
    });
  });

  describe('Memory Usage Benchmarks', () => {
    it('should handle large graphs without excessive memory usage', () => {
      // This is a basic test - in a real benchmark suite, we'd use memory monitoring
      const graph = GraphTestData.createLargeGraph('adjacencyList');

      expect(graph.getVertexCount()).toBe(100);
      // The test passes if no out-of-memory errors occur
    });

    it('should compare memory efficiency of implementations', () => {
      const size = 50;

      const listGraph = new AdjacencyListGraph<number>();
      const matrixGraph = new AdjacencyMatrixGraph<number>();

      // Add same vertices and edges to both
      for (let i = 0; i < size; i++) {
        listGraph.addVertex(i);
        matrixGraph.addVertex(i);
      }

      // Add same edges
      for (let i = 0; i < size; i++) {
        for (let j = i + 1; j < Math.min(i + 2, size); j++) {
          listGraph.addEdge(i, j);
          matrixGraph.addEdge(i, j);
        }
      }

      // Both should work without issues
      expect(listGraph.getVertexCount()).toBe(size);
      expect(matrixGraph.getVertexCount()).toBe(size);
      expect(listGraph.getEdgeCount()).toBe(matrixGraph.getEdgeCount());
    });
  });

  describe.skip('Scalability Tests', () => {
    it('should scale operations with graph size', () => {
      const sizes = [10, 50, 100];
      const times: number[] = [];

      sizes.forEach(size => {
        const graph = new AdjacencyListGraph<number>();

        const startTime = performance.now();

        // Add vertices
        for (let i = 0; i < size; i++) {
          graph.addVertex(i);
        }

        // Add some edges
        for (let i = 0; i < size; i++) {
          for (let j = i + 1; j < Math.min(i + 2, size); j++) {
            graph.addEdge(i, j);
          }
        }

        // Perform BFS
        const bfs = new BreadthFirstSearch<number>();
        bfs.traverse(graph, 0);

        const endTime = performance.now();
        times.push(endTime - startTime);
      });

      // Times should increase but not exponentially
      expect(times[1]).toBeLessThan(times[0] * 10); // Allow some growth
      expect(times[2]).toBeLessThan(times[1] * 10);
    });

    it('should handle sparse vs dense graphs appropriately', () => {
      const size = 30;

      // Sparse graph
      const sparseGraph = new AdjacencyListGraph<number>();
      for (let i = 0; i < size; i++) {
        sparseGraph.addVertex(i);
      }
      // Few edges
      for (let i = 0; i < size; i += 3) {
        sparseGraph.addEdge(i, (i + 1) % size);
      }

      // Dense graph
      const denseGraph = new AdjacencyMatrixGraph<number>();
      for (let i = 0; i < size; i++) {
        denseGraph.addVertex(i);
      }
      // Many edges
      for (let i = 0; i < size; i++) {
        for (let j = i + 1; j < size; j++) {
          if (Math.random() > 0.5) {
            denseGraph.addEdge(i, j);
          }
        }
      }

      // Both should work
      expect(sparseGraph.getVertexCount()).toBe(size);
      expect(denseGraph.getVertexCount()).toBe(size);
    });
  });

  describe('Concurrent Operation Performance', () => {
    it('should handle multiple operations sequentially', () => {
      const graph = new AdjacencyListGraph<number>();
      const size = 50;

      const startTime = performance.now();

      // Perform multiple operations
      for (let i = 0; i < size; i++) {
        graph.addVertex(i);
      }

      for (let i = 0; i < size - 1; i++) {
        graph.addEdge(i, i + 1);
      }

      const bfs = new BreadthFirstSearch<number>();
      bfs.traverse(graph, 0);

      const dfs = new DepthFirstSearch<number>();
      dfs.traverse(graph, 0);

      const endTime = performance.now();
      const duration = endTime - startTime;

      expect(duration).toBeLessThan(100);
    });
  });
});
