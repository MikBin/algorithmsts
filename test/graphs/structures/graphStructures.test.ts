import { describe, it, expect, beforeEach } from 'vitest';
import { AdjacencyListGraph } from '../../../src/graphs/structures/AdjacencyListGraph';
import { AdjacencyMatrixGraph } from '../../../src/graphs/structures/AdjacencyMatrixGraph';
import { IGraph } from '../../../src/graphs/interfaces/IGraph';
import { SampleGraphs } from '../fixtures/SampleGraphs';
import { GraphTestData } from '../fixtures/GraphTestData';
import { GraphTestUtils } from '../fixtures/GraphTestUtils';

describe('Graph Structures Comparison', () => {
  describe('Implementation Consistency', () => {
    const implementations = [
      { name: 'AdjacencyList', factory: () => new AdjacencyListGraph<string>() },
      { name: 'AdjacencyMatrix', factory: () => new AdjacencyMatrixGraph<string>() }
    ];

    implementations.forEach(({ name, factory }) => {
      describe(`${name} Implementation`, () => {
        let graph: IGraph<string>;

        beforeEach(() => {
          graph = factory();
        });

        it('should behave consistently for basic operations', () => {
          // Add vertices
          graph.addVertex('A');
          graph.addVertex('B');
          graph.addVertex('C');

          expect(graph.getVertexCount()).toBe(3);
          expect(graph.contains('A')).toBe(true);
          expect(graph.contains('D')).toBe(false);

          // Add edges
          graph.addEdge('A', 'B');
          graph.addEdge('B', 'C');

          expect(graph.getEdgeCount()).toBe(2);
          expect(graph.hasEdge('A', 'B')).toBe(true);
          expect(graph.hasEdge('A', 'C')).toBe(false);

          // Get neighbors
          expect(graph.getNeighbors('A')).toEqual(['B']);
          expect(graph.getNeighbors('B')).toEqual(['A', 'C']);

          // Remove edge
          graph.removeEdge('A', 'B');
          expect(graph.getEdgeCount()).toBe(1);
          expect(graph.hasEdge('A', 'B')).toBe(false);

          // Remove vertex
          graph.removeVertex('C');
          expect(graph.getVertexCount()).toBe(2);
          expect(graph.contains('C')).toBe(false);
          expect(graph.getEdgeCount()).toBe(0);
        });

        it('should handle directed graphs consistently', () => {
          const directedGraph = name === 'AdjacencyList'
            ? new AdjacencyListGraph<string>(true)
            : new AdjacencyMatrixGraph<string>(true);

          directedGraph.addVertex('A');
          directedGraph.addVertex('B');
          directedGraph.addEdge('A', 'B');

          expect(directedGraph.getNeighbors('A')).toEqual(['B']);
          expect(directedGraph.getNeighbors('B')).toEqual([]);
          expect(directedGraph.isDirected()).toBe(true);
        });

        it('should handle undirected graphs consistently', () => {
          const undirectedGraph = name === 'AdjacencyList'
            ? new AdjacencyListGraph<string>(false)
            : new AdjacencyMatrixGraph<string>(false);

          undirectedGraph.addVertex('A');
          undirectedGraph.addVertex('B');
          undirectedGraph.addEdge('A', 'B');

          expect(undirectedGraph.getNeighbors('A')).toEqual(['B']);
          expect(undirectedGraph.getNeighbors('B')).toEqual(['A']);
          expect(undirectedGraph.isDirected()).toBe(false);
        });

        it('should handle weighted graphs consistently', () => {
          const weightedGraph = name === 'AdjacencyList'
            ? new AdjacencyListGraph<string, number>(false, true)
            : new AdjacencyMatrixGraph<string, number>(false, true);

          weightedGraph.addVertex('A');
          weightedGraph.addVertex('B');
          weightedGraph.addEdge('A', 'B', 5);

          expect(weightedGraph.getEdgeWeight('A', 'B')).toBe(5);
          expect(weightedGraph.isWeighted()).toBe(true);
        });
      });
    });
  });

  describe('Cross-Implementation Compatibility', () => {
    it('should produce equivalent results for sample graphs', () => {
      const listGraph = SampleGraphs.simpleDirectedGraph;
      const matrixGraph = SampleGraphs.simpleDirectedGraphMatrix;

      expect(listGraph.getVertexCount()).toBe(matrixGraph.getVertexCount());
      expect(listGraph.getEdgeCount()).toBe(matrixGraph.getEdgeCount());
      expect(listGraph.isDirected()).toBe(matrixGraph.isDirected());
      expect(listGraph.isWeighted()).toBe(matrixGraph.isWeighted());
    });

    it('should produce equivalent results for weighted graphs', () => {
      const listGraph = SampleGraphs.weightedGraph;
      const matrixGraph = SampleGraphs.weightedGraphMatrix;

      expect(listGraph.getVertexCount()).toBe(matrixGraph.getVertexCount());
      expect(listGraph.getEdgeCount()).toBe(matrixGraph.getEdgeCount());
      expect(listGraph.isWeighted()).toBe(matrixGraph.isWeighted());

      // Check edge weights
      const listEdges = listGraph.getEdges();
      const matrixEdges = matrixGraph.getEdges();

      expect(listEdges.length).toBe(matrixEdges.length);

      for (const [from, to, weight] of listEdges as [string, string, number][]) {
        expect(matrixGraph.getEdgeWeight(from, to)).toBe(weight);
      }
    });
  });

  describe('Performance Characteristics', () => {
    it('should handle small graphs efficiently', () => {
      const smallList = GraphTestData.createSmallGraph('adjacencyList');
      const smallMatrix = GraphTestData.createSmallGraph('adjacencyMatrix');

      expect(smallList.getVertexCount()).toBe(smallMatrix.getVertexCount());
      expect(smallList.getEdgeCount()).toBe(smallMatrix.getEdgeCount());
    });

    it('should handle medium graphs efficiently', () => {
      const mediumList = GraphTestData.createMediumGraph('adjacencyList');
      const mediumMatrix = GraphTestData.createMediumGraph('adjacencyMatrix');

      expect(mediumList.getVertexCount()).toBe(mediumMatrix.getVertexCount());
      expect(mediumList.getEdgeCount()).toBe(mediumMatrix.getEdgeCount());
    });

    it('should handle large graphs', () => {
      const largeList = GraphTestData.createLargeGraph('adjacencyList');
      const largeMatrix = GraphTestData.createLargeGraph('adjacencyMatrix');

      expect(largeList.getVertexCount()).toBe(largeMatrix.getVertexCount());
      expect(largeList.getEdgeCount()).toBe(largeMatrix.getEdgeCount());
    });
  });

  describe('Graph Properties', () => {
    const testGraphs = [
      { name: 'Empty Graph', graph: SampleGraphs.emptyGraph },
      { name: 'Single Vertex', graph: SampleGraphs.singleVertexGraph },
      { name: 'Simple Undirected', graph: SampleGraphs.simpleUndirectedGraph },
      { name: 'Cyclic Graph', graph: SampleGraphs.cyclicGraph },
      { name: 'DAG', graph: SampleGraphs.dagGraph },
      { name: 'Disconnected Graph', graph: SampleGraphs.disconnectedGraph },
      { name: 'Complete Graph K4', graph: SampleGraphs.completeGraphK4 },
      { name: 'Tree Graph', graph: SampleGraphs.treeGraph }
    ];

    testGraphs.forEach(({ name, graph }) => {
      it(`should correctly identify properties for ${name}`, () => {
        const vertexCount = graph.getVertexCount();
        const edgeCount = graph.getEdgeCount();

        // Basic sanity checks
        expect(vertexCount).toBeGreaterThanOrEqual(0);
        expect(edgeCount).toBeGreaterThanOrEqual(0);

        // For undirected graphs, check that edges are bidirectional
        if (!graph.isDirected()) {
          for (const vertex of graph.getVertices()) {
            for (const neighbor of graph.getNeighbors(vertex)) {
              expect(graph.getNeighbors(neighbor)).toContain(vertex);
            }
          }
        }

        // Check that all edges reference existing vertices
        for (const edge of graph.getEdges()) {
          const [from, to] = edge;
          expect(graph.contains(from)).toBe(true);
          expect(graph.contains(to)).toBe(true);
        }
      });
    });
  });

  describe('Utility Functions', () => {
    it('should correctly count edges', () => {
      const graph = SampleGraphs.simpleUndirectedGraph;
      const edgeCount = GraphTestUtils.countEdges(graph);
      expect(edgeCount).toBe(2); // A-B, B-C
    });

    it('should detect cycles correctly', () => {
      expect(GraphTestUtils.hasCycle(SampleGraphs.simpleUndirectedGraph)).toBe(false);
      expect(GraphTestUtils.hasCycle(SampleGraphs.cyclicGraph)).toBe(true);
    });

    it('should check connectivity', () => {
      expect(GraphTestUtils.isConnected(SampleGraphs.simpleUndirectedGraph)).toBe(true);
      expect(GraphTestUtils.isConnected(SampleGraphs.disconnectedGraph)).toBe(false);
    });

    it('should validate DAGs', () => {
      expect(GraphTestUtils.isDAG(SampleGraphs.dagGraph)).toBe(true);
      expect(GraphTestUtils.isDAG(SampleGraphs.cyclicGraph)).toBe(false);
    });

    it('should get topological order for DAGs', () => {
      const order = GraphTestUtils.getTopologicalOrder(SampleGraphs.dagGraph);
      expect(order).not.toBeNull();
      expect(order!.length).toBe(4);

      // Verify topological order: A before B, B before D, C before D
      const aIndex = order!.indexOf('A');
      const bIndex = order!.indexOf('B');
      const cIndex = order!.indexOf('C');
      const dIndex = order!.indexOf('D');

      expect(aIndex).toBeLessThan(bIndex);
      expect(aIndex).toBeLessThan(cIndex);
      expect(bIndex).toBeLessThan(dIndex);
      expect(cIndex).toBeLessThan(dIndex);
    });

    it('should return null for cyclic graphs in topological sort', () => {
      const order = GraphTestUtils.getTopologicalOrder(SampleGraphs.cyclicGraph);
      expect(order).toBeNull();
    });
  });

  describe('Edge Cases and Error Handling', () => {
    it('should handle empty graphs consistently', () => {
      const listGraph = new AdjacencyListGraph<string>();
      const matrixGraph = new AdjacencyMatrixGraph<string>();

      expect(listGraph.getVertexCount()).toBe(matrixGraph.getVertexCount());
      expect(listGraph.getEdgeCount()).toBe(matrixGraph.getEdgeCount());
      expect(listGraph.getVertices()).toEqual(matrixGraph.getVertices());
      expect(listGraph.getEdges()).toEqual(matrixGraph.getEdges());
    });

    it('should handle single vertex graphs', () => {
      const listGraph = new AdjacencyListGraph<string>();
      const matrixGraph = new AdjacencyMatrixGraph<string>();

      listGraph.addVertex('A');
      matrixGraph.addVertex('A');

      expect(listGraph.getVertexCount()).toBe(matrixGraph.getVertexCount());
      expect(listGraph.getNeighbors('A')).toEqual(matrixGraph.getNeighbors('A'));
    });

    it('should handle graphs with self-loops if supported', () => {
      // Note: Current implementation doesn't support self-loops
      const listGraph = new AdjacencyListGraph<string>();
      const matrixGraph = new AdjacencyMatrixGraph<string>();

      listGraph.addVertex('A');
      matrixGraph.addVertex('A');

      // Self-loops are not currently supported, so this should work
      expect(listGraph.getVertexCount()).toBe(matrixGraph.getVertexCount());
    });
  });
});
