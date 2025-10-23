import { describe, it, expect, beforeEach } from 'vitest';
import { AdjacencyMatrixGraph } from '../../../src/graphs/structures/AdjacencyMatrixGraph';
import { ArgumentError } from '../../../src/core/validation/ArgumentError';
import { SampleGraphs } from '../fixtures/SampleGraphs';
import { GraphTestData } from '../fixtures/GraphTestData';

describe('AdjacencyMatrixGraph', () => {
  let graph: AdjacencyMatrixGraph<string>;

  beforeEach(() => {
    graph = new AdjacencyMatrixGraph<string>();
  });

  describe('Basic Operations', () => {
    it('should create an empty graph', () => {
      expect(graph.getVertexCount()).toBe(0);
      expect(graph.getEdgeCount()).toBe(0);
      expect(graph.getVertices()).toEqual([]);
      expect(graph.getEdges()).toEqual([]);
    });

    it('should add vertices', () => {
      graph.addVertex('A');
      graph.addVertex('B');

      expect(graph.getVertexCount()).toBe(2);
      expect(graph.contains('A')).toBe(true);
      expect(graph.contains('B')).toBe(true);
      expect(graph.getVertices()).toEqual(['A', 'B']);
    });

    it('should throw error when adding duplicate vertex', () => {
      graph.addVertex('A');
      expect(() => graph.addVertex('A')).toThrow(ArgumentError);
    });

    it('should remove vertices', () => {
      graph.addVertex('A');
      graph.addVertex('B');
      graph.addEdge('A', 'B');

      graph.removeVertex('A');

      expect(graph.getVertexCount()).toBe(1);
      expect(graph.contains('A')).toBe(false);
      expect(graph.contains('B')).toBe(true);
      expect(graph.getEdgeCount()).toBe(0);
    });

    it('should throw error when removing non-existent vertex', () => {
      expect(() => graph.removeVertex('A')).toThrow(ArgumentError);
    });
  });

  describe('Edge Operations', () => {
    beforeEach(() => {
      graph.addVertex('A');
      graph.addVertex('B');
      graph.addVertex('C');
    });

    it('should add edges', () => {
      graph.addEdge('A', 'B');
      graph.addEdge('B', 'C');

      expect(graph.getEdgeCount()).toBe(2);
      expect(graph.hasEdge('A', 'B')).toBe(true);
      expect(graph.hasEdge('B', 'C')).toBe(true);
      expect(graph.hasEdge('A', 'C')).toBe(false);
    });

    it('should throw error when adding edge with non-existent vertices', () => {
      expect(() => graph.addEdge('A', 'D')).toThrow(ArgumentError);
    });

    it('should throw error when adding duplicate edge', () => {
      graph.addEdge('A', 'B');
      expect(() => graph.addEdge('A', 'B')).toThrow(ArgumentError);
    });

    it('should remove edges', () => {
      graph.addEdge('A', 'B');
      graph.addEdge('B', 'C');

      graph.removeEdge('A', 'B');

      expect(graph.getEdgeCount()).toBe(1);
      expect(graph.hasEdge('A', 'B')).toBe(false);
      expect(graph.hasEdge('B', 'C')).toBe(true);
    });

    it('should throw error when removing non-existent edge', () => {
      expect(() => graph.removeEdge('A', 'B')).toThrow(ArgumentError);
    });

    it('should get neighbors', () => {
      graph.addEdge('A', 'B');
      graph.addEdge('A', 'C');

      expect(graph.getNeighbors('A')).toEqual(['B', 'C']);
      expect(graph.getNeighbors('B')).toEqual(['A']);
      expect(graph.getNeighbors('C')).toEqual(['A']);
    });
  });

  describe('Directed vs Undirected', () => {
    it('should handle undirected graphs', () => {
      const undirectedGraph = new AdjacencyMatrixGraph<string>(false);
      undirectedGraph.addVertex('A');
      undirectedGraph.addVertex('B');
      undirectedGraph.addEdge('A', 'B');

      expect(undirectedGraph.getNeighbors('A')).toEqual(['B']);
      expect(undirectedGraph.getNeighbors('B')).toEqual(['A']);
      expect(undirectedGraph.getEdgeCount()).toBe(1);
    });

    it('should handle directed graphs', () => {
      const directedGraph = new AdjacencyMatrixGraph<string>(true);
      directedGraph.addVertex('A');
      directedGraph.addVertex('B');
      directedGraph.addEdge('A', 'B');

      expect(directedGraph.getNeighbors('A')).toEqual(['B']);
      expect(directedGraph.getNeighbors('B')).toEqual([]);
      expect(directedGraph.getEdgeCount()).toBe(1);
    });
  });

  describe('Weighted Graphs', () => {
    let weightedGraph: AdjacencyMatrixGraph<string, number>;

    beforeEach(() => {
      weightedGraph = new AdjacencyMatrixGraph<string, number>(false, true);
      weightedGraph.addVertex('A');
      weightedGraph.addVertex('B');
      weightedGraph.addVertex('C');
    });

    it('should add weighted edges', () => {
      weightedGraph.addEdge('A', 'B', 5);
      weightedGraph.addEdge('B', 'C', 10);

      expect(weightedGraph.getEdgeWeight('A', 'B')).toBe(5);
      expect(weightedGraph.getEdgeWeight('B', 'C')).toBe(10);
    });

    it('should throw error when adding weighted edge without weight', () => {
      expect(() => (weightedGraph as any).addEdge('A', 'B')).toThrow(ArgumentError);
    });

    it('should throw error when adding unweighted edge with weight', () => {
      const unweightedGraph = new AdjacencyMatrixGraph<string>(false, false);
      unweightedGraph.addVertex('A');
      unweightedGraph.addVertex('B');
      expect(() => (unweightedGraph as any).addEdge('A', 'B', 5)).toThrow(ArgumentError);
    });
  });

  describe('Iterator', () => {
    it('should iterate over vertices', () => {
      graph.addVertex('A');
      graph.addVertex('B');
      graph.addVertex('C');

      const iterator = graph.iterator();
      const vertices: string[] = [];

      while (iterator.hasNext()) {
        vertices.push(iterator.next());
      }

      expect(vertices.sort()).toEqual(['A', 'B', 'C']);
    });
  });

  describe('Edge Cases', () => {
    it('should handle null vertex', () => {
      expect(() => graph.addVertex(null as any)).toThrow(ArgumentError);
      expect(() => graph.contains(null as any)).toThrow(ArgumentError);
    });

    it('should handle empty string vertex', () => {
      graph.addVertex('');
      expect(graph.contains('')).toBe(true);
    });

    it('should clear graph', () => {
      graph.addVertex('A');
      graph.addVertex('B');
      graph.addEdge('A', 'B');

      graph.clear();

      expect(graph.getVertexCount()).toBe(0);
      expect(graph.getEdgeCount()).toBe(0);
    });
  });

  describe('Integration with Sample Graphs', () => {
    it('should work with simple directed graph', () => {
      const testGraph = SampleGraphs.simpleDirectedGraphMatrix;
      expect(testGraph.getVertexCount()).toBe(3);
      expect(testGraph.getEdgeCount()).toBe(2);
      expect(testGraph.getNeighbors('A')).toEqual(['B']);
      expect(testGraph.getNeighbors('B')).toEqual(['C']);
      expect(testGraph.getNeighbors('C')).toEqual([]);
    });
  });

  describe('Performance Tests', () => {
    it('should handle large graphs efficiently', () => {
      const largeGraph = GraphTestData.createLargeGraph('adjacencyMatrix');
      expect(largeGraph.getVertexCount()).toBe(100);
      expect(largeGraph.getEdgeCount()).toBeGreaterThan(0);
    });
  });

  describe('Index Management', () => {
    it('should maintain correct indices after vertex removal', () => {
      graph.addVertex('A');
      graph.addVertex('B');
      graph.addVertex('C');
      graph.addEdge('A', 'B');
      graph.addEdge('B', 'C');

      // Remove middle vertex
      graph.removeVertex('B');

      expect(graph.getVertexCount()).toBe(2);
      expect(graph.contains('A')).toBe(true);
      expect(graph.contains('C')).toBe(true);
      expect(graph.getEdgeCount()).toBe(0); // Edges should be removed
    });

    it('should handle multiple vertex removals', () => {
      graph.addVertex('A');
      graph.addVertex('B');
      graph.addVertex('C');
      graph.addVertex('D');

      graph.removeVertex('B');
      graph.removeVertex('C');

      expect(graph.getVertexCount()).toBe(2);
      expect(graph.getVertices()).toEqual(['A', 'D']);
    });
  });
});
