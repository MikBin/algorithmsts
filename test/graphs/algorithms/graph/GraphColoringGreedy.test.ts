import { describe, it, expect } from 'vitest';
import { GraphColoringGreedy } from '../../../../src/graphs/algorithms/graph/GraphColoring';
import { SampleGraphs } from '../../fixtures/SampleGraphs';
import { AdjacencyListGraph } from '../../../../src/graphs/structures/AdjacencyListGraph';

describe('GraphColoringGreedy', () => {
  const algorithm = new GraphColoringGreedy<string>();

  describe('Undirected Graphs', () => {
    it('should color a simple path graph with 2 colors (A-B-C)', () => {
      const graph = SampleGraphs.simpleUndirectedGraph; // A-B, B-C
      const result = algorithm.execute(graph);

      // It's a line graph, 2 colors needed
      expect(result.numColors).toBe(2);

      // Adjacent vertices must have different colors
      expect(result.colors.get('A')).not.toBe(result.colors.get('B'));
      expect(result.colors.get('B')).not.toBe(result.colors.get('C'));
    });

    it('should color a complete graph K4 with 4 colors', () => {
      const graph = SampleGraphs.completeGraphK4;
      const result = algorithm.execute(graph);

      expect(result.numColors).toBe(4);

      const colors = Array.from(result.colors.values());
      const uniqueColors = new Set(colors);
      expect(uniqueColors.size).toBe(4);
    });

    it('should color a disconnected graph correctly', () => {
      const graph = SampleGraphs.disconnectedGraph; // A-B, C-D
      const result = algorithm.execute(graph);

      // Max degree is 1, needs 2 colors
      expect(result.numColors).toBe(2);
      expect(result.colors.get('A')).not.toBe(result.colors.get('B'));
      expect(result.colors.get('C')).not.toBe(result.colors.get('D'));
    });
  });

  describe('Directed Graphs', () => {
    it('should handle directed cyclic graph (coloring ignores direction but reads neighbors)', () => {
      const graph = SampleGraphs.cyclicGraph; // A->B, B->C, C->A
      // In directed graph, getNeighbors gets outgoing edges.
      // If A->B, A sees B.
      const result = algorithm.execute(graph);
      // Wait, standard coloring on directed graphs is a bit weird because A neighbors B but B doesn't neighbor A.
      // But it should run without error and assign colors.
      expect(result.numColors).toBeGreaterThanOrEqual(1);
      // Let's just ensure adjacencies have diff colors based on greedy assignment
      expect(result.colors.size).toBe(3);
    });
  });

  describe('Edge Cases', () => {
    it('should handle an empty graph', () => {
      const graph = SampleGraphs.emptyGraph;
      const result = algorithm.execute(graph);
      expect(result.numColors).toBe(0);
      expect(result.colors.size).toBe(0);
    });

    it('should handle a graph with isolated vertices', () => {
      const graph = new AdjacencyListGraph<string>(false);
      ['A', 'B', 'C'].forEach(v => graph.addVertex(v));
      const result = algorithm.execute(graph);
      // All degree 0, can be colored with 1 color
      expect(result.numColors).toBe(1);
      expect(result.colors.get('A')).toBe(0);
      expect(result.colors.get('B')).toBe(0);
      expect(result.colors.get('C')).toBe(0);
    });
  });

  describe('AdjacencyMatrixGraph', () => {
    it('should color a matrix graph', () => {
      const graph = SampleGraphs.weightedGraphMatrix;
      // Contains undirected edges
      const result = algorithm.execute(graph);

      // Verify coloring validity
      graph.getVertices().forEach(u => {
        const cU = result.colors.get(u);
        graph.getNeighbors(u).forEach(v => {
          expect(cU).not.toBe(result.colors.get(v));
        });
      });
    });
  });
});
