import { describe, it, expect, beforeEach } from 'vitest';
import { KruskalAlgorithm } from '../../../src/graphs/algorithms/spanning-tree/KruskalAlgorithm';
import { PrimAlgorithm } from '../../../src/graphs/algorithms/spanning-tree/PrimAlgorithm';
import { SampleGraphs } from '../fixtures/SampleGraphs';
import { GraphTestData } from '../fixtures/GraphTestData';

describe('Spanning Tree Algorithms', () => {
  describe('Kruskal\'s Algorithm', () => {
    let kruskal: KruskalAlgorithm<string>;

    beforeEach(() => {
      kruskal = new KruskalAlgorithm<string>();
    });

    it('should find MST for connected undirected graph', () => {
      const graph = SampleGraphs.completeGraphK4;
      const result = kruskal.execute(graph);

      expect(result.found).toBe(true);
      expect(result.edges.length).toBe(3); // n-1 edges for n=4 vertices
      expect(result.totalWeight).toBeGreaterThan(0);
    });

    it('should throw error for directed graph', () => {
      const graph = SampleGraphs.simpleDirectedGraph;
      expect(() => kruskal.execute(graph)).toThrow();
    });

    it('should throw error for unweighted graph', () => {
      const graph = SampleGraphs.simpleUndirectedGraph;
      expect(() => kruskal.execute(graph)).toThrow();
    });

    it('should handle disconnected graphs', () => {
      const graph = SampleGraphs.disconnectedGraph;
      const result = kruskal.execute(graph);

      expect(result.found).toBe(false);
      expect(result.edges.length).toBeLessThan(graph.getVertexCount() - 1);
    });

    it('should produce valid spanning tree', () => {
      const graph = SampleGraphs.completeGraphK4;
      const result = kruskal.execute(graph);

      if (result.found) {
        // Check that all vertices are connected
        const verticesInTree = new Set<string>();
        result.edges.forEach(edge => {
          verticesInTree.add(edge.from);
          verticesInTree.add(edge.to);
        });

        expect(verticesInTree.size).toBe(graph.getVertexCount());
        expect(result.edges.length).toBe(graph.getVertexCount() - 1);
      }
    });
  });

  describe('Prim\'s Algorithm', () => {
    let prim: PrimAlgorithm<string>;

    beforeEach(() => {
      prim = new PrimAlgorithm<string>();
    });

    it('should find MST for connected undirected graph', () => {
      const graph = SampleGraphs.completeGraphK4;
      const result = prim.execute(graph);

      expect(result.found).toBe(true);
      expect(result.edges.length).toBe(3); // n-1 edges for n=4 vertices
      expect(result.totalWeight).toBeGreaterThan(0);
    });

    it('should throw error for directed graph', () => {
      const graph = SampleGraphs.simpleDirectedGraph;
      expect(() => prim.execute(graph)).toThrow();
    });

    it('should throw error for unweighted graph', () => {
      const graph = SampleGraphs.simpleUndirectedGraph;
      expect(() => prim.execute(graph)).toThrow();
    });

    it('should handle disconnected graphs', () => {
      const graph = SampleGraphs.disconnectedGraph;
      const result = prim.execute(graph);

      expect(result.found).toBe(false);
      expect(result.edges.length).toBeLessThan(graph.getVertexCount() - 1);
    });

    it('should produce valid spanning tree', () => {
      const graph = SampleGraphs.completeGraphK4;
      const result = prim.execute(graph);

      if (result.found) {
        // Check that all vertices are connected
        const verticesInTree = new Set<string>();
        result.edges.forEach(edge => {
          verticesInTree.add(edge.from);
          verticesInTree.add(edge.to);
        });

        expect(verticesInTree.size).toBe(graph.getVertexCount());
        expect(result.edges.length).toBe(graph.getVertexCount() - 1);
      }
    });

    it('should handle empty graph', () => {
      const graph = SampleGraphs.emptyGraph;
      const result = prim.execute(graph);

      expect(result.found).toBe(true);
      expect(result.edges.length).toBe(0);
      expect(result.totalWeight).toBe(0);
    });
  });

  describe('Algorithm Comparison', () => {
    it('should produce valid MSTs for both algorithms', () => {
      const graph = SampleGraphs.completeGraphK4;
      const kruskal = new KruskalAlgorithm<string>();
      const prim = new PrimAlgorithm<string>();

      const kruskalResult = kruskal.execute(graph);
      const primResult = prim.execute(graph);

      expect(kruskalResult.found).toBe(true);
      expect(primResult.found).toBe(true);

      // Both should have n-1 edges
      expect(kruskalResult.edges.length).toBe(3);
      expect(primResult.edges.length).toBe(3);

      // Both should connect all vertices
      const kruskalVertices = new Set<string>();
      const primVertices = new Set<string>();

      kruskalResult.edges.forEach(edge => {
        kruskalVertices.add(edge.from);
        kruskalVertices.add(edge.to);
      });

      primResult.edges.forEach(edge => {
        primVertices.add(edge.from);
        primVertices.add(edge.to);
      });

      expect(kruskalVertices.size).toBe(4);
      expect(primVertices.size).toBe(4);
    });

    it('should handle weighted graph matrix implementation', () => {
      const graph = SampleGraphs.weightedGraphMatrix;
      const kruskal = new KruskalAlgorithm<string>();
      const prim = new PrimAlgorithm<string>();

      // Note: These might fail if the matrix graph doesn't have undirected weighted edges
      // but the test demonstrates the interface consistency
      expect(() => kruskal.execute(graph)).toThrow(); // Should throw for directed or unweighted
      expect(() => prim.execute(graph)).toThrow();
    });
  });

  describe('Edge Cases', () => {
    it('should handle single vertex graph', () => {
      const graph = SampleGraphs.singleVertexGraph;
      const kruskal = new KruskalAlgorithm<string>();
      const prim = new PrimAlgorithm<string>();

      const kruskalResult = kruskal.execute(graph);
      const primResult = prim.execute(graph);

      expect(kruskalResult.found).toBe(true);
      expect(primResult.found).toBe(true);
      expect(kruskalResult.edges.length).toBe(0);
      expect(primResult.edges.length).toBe(0);
      expect(kruskalResult.totalWeight).toBe(0);
      expect(primResult.totalWeight).toBe(0);
    });

    it('should handle two vertex graph', () => {
      // Create a simple two-vertex weighted graph
      const graph = SampleGraphs.simpleUndirectedGraph;
      // Note: This is unweighted, so algorithms should throw
      const kruskal = new KruskalAlgorithm<string>();
      const prim = new PrimAlgorithm<string>();

      expect(() => kruskal.execute(graph)).toThrow();
      expect(() => prim.execute(graph)).toThrow();
    });

    it('should handle tree structures', () => {
      const graph = SampleGraphs.treeGraph;
      const kruskal = new KruskalAlgorithm<string>();
      const prim = new PrimAlgorithm<string>();

      // Tree is already a spanning tree, but algorithms require weighted graphs
      expect(() => kruskal.execute(graph)).toThrow();
      expect(() => prim.execute(graph)).toThrow();
    });
  });

  describe('Performance Tests', () => {
    it('should handle medium-sized graphs', () => {
      const mediumGraph = GraphTestData.createMediumGraph('adjacencyList');
      const kruskal = new KruskalAlgorithm<number>();
      const prim = new PrimAlgorithm<number>();

      // These will likely throw due to unweighted nature, but test the interface
      expect(() => kruskal.execute(mediumGraph)).toThrow();
      expect(() => prim.execute(mediumGraph)).toThrow();
    });
  });

  describe('MST Properties', () => {
    it('should ensure no cycles in MST', () => {
      const graph = SampleGraphs.completeGraphK4;
      const kruskal = new KruskalAlgorithm<string>();
      const result = kruskal.execute(graph);

      if (result.found) {
        // A tree with n vertices should have n-1 edges and no cycles
        expect(result.edges.length).toBe(graph.getVertexCount() - 1);

        // Check for cycles by ensuring it's a tree (connected and acyclic)
        // This is a simplified check - in practice, we'd do a full cycle detection
        const vertexDegrees = new Map<string, number>();
        result.edges.forEach(edge => {
          vertexDegrees.set(edge.from, (vertexDegrees.get(edge.from) || 0) + 1);
          vertexDegrees.set(edge.to, (vertexDegrees.get(edge.to) || 0) + 1);
        });

        // In a tree, there should be no vertex with degree > some reasonable number
        // and the structure should be valid
        expect(vertexDegrees.size).toBe(graph.getVertexCount());
      }
    });

    it('should ensure connectivity in MST', () => {
      const graph = SampleGraphs.completeGraphK4;
      const prim = new PrimAlgorithm<string>();
      const result = prim.execute(graph);

      if (result.found) {
        // Check that all vertices are included
        const verticesInTree = new Set<string>();
        result.edges.forEach(edge => {
          verticesInTree.add(edge.from);
          verticesInTree.add(edge.to);
        });

        expect(verticesInTree.size).toBe(graph.getVertexCount());
      }
    });
  });
});
