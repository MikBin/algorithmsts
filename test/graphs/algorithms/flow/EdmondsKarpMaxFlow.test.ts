import { describe, it, expect } from 'vitest';
import { EdmondsKarpMaxFlow } from '../../../../src/graphs/algorithms/flow/EdmondsKarpMaxFlow';
import { ArgumentError } from '../../../../src/core/validation/ArgumentError';
import { AdjacencyListGraph } from '../../../../src/graphs/structures/AdjacencyListGraph';
import { AdjacencyMatrixGraph } from '../../../../src/graphs/structures/AdjacencyMatrixGraph';

describe('EdmondsKarpMaxFlow', () => {
  const algorithm = new EdmondsKarpMaxFlow<string>();

  it('should throw ArgumentError for undirected or unweighted graphs', () => {
    const unweighted = new AdjacencyListGraph<string>(true, false);
    unweighted.addVertex('A');
    unweighted.addVertex('B');
    unweighted.addEdge('A', 'B');

    const undirected = new AdjacencyListGraph<string>(false, true);
    undirected.addVertex('A');
    undirected.addVertex('B');
    undirected.addEdge('A', 'B', 1);

    expect(() => algorithm.execute(unweighted, 'A', 'B')).toThrow(ArgumentError);
    expect(() => algorithm.execute(undirected, 'A', 'B')).toThrow(ArgumentError);
  });

  describe('AdjacencyMatrixGraph', () => {
    it('should compute max flow correctly for a matrix graph', () => {
      const graph = new AdjacencyMatrixGraph<string>(true, true);
      ['S', 'A', 'B', 'T'].forEach(v => graph.addVertex(v));
      graph.addEdge('S', 'A', 10);
      graph.addEdge('S', 'B', 5);
      graph.addEdge('A', 'B', 15);
      graph.addEdge('A', 'T', 10);
      graph.addEdge('B', 'T', 10);

      const result = algorithm.execute(graph, 'S', 'T');
      expect(result.maxFlow).toBe(15);
      expect(result.flow.get('S')?.get('A')).toBe(10);
    });
  });
});

  it('should throw ArgumentError if source or sink not provided', () => {
    const graph = new AdjacencyListGraph<string>(true, true);
    expect(() => algorithm.execute(graph, undefined as unknown as string, undefined as unknown as string)).toThrow(ArgumentError);
  });

  it('should throw ArgumentError if source or sink not in graph', () => {
    const graph = new AdjacencyListGraph<string>(true, true);
    graph.addVertex('A');
    expect(() => algorithm.execute(graph, 'A', 'B')).toThrow(ArgumentError);
  });

  it('should compute max flow correctly for a simple directed weighted graph', () => {
    const graph = new AdjacencyListGraph<string>(true, true);
    ['S', 'A', 'B', 'T'].forEach(v => graph.addVertex(v));
    // Flow network setup
    // S -> A (10), S -> B (5)
    // A -> B (15), A -> T (10)
    // B -> T (10)
    graph.addEdge('S', 'A', 10);
    graph.addEdge('S', 'B', 5);
    graph.addEdge('A', 'B', 15);
    graph.addEdge('A', 'T', 10);
    graph.addEdge('B', 'T', 10);

    const result = algorithm.execute(graph, 'S', 'T');

    // Max flow should be 15
    // S->A(10)->T(10)
    // S->B(5)->T(5)
    expect(result.maxFlow).toBe(15);
    expect(result.flow.get('S')?.get('A')).toBe(10);
    expect(result.flow.get('S')?.get('B')).toBe(5);
  });

  it('should return 0 max flow if there is no path', () => {
    const graph = new AdjacencyListGraph<string>(true, true);
    ['S', 'A', 'T'].forEach(v => graph.addVertex(v));
    graph.addEdge('S', 'A', 10);
    // No edge to T

    const result = algorithm.execute(graph, 'S', 'T');
    expect(result.maxFlow).toBe(0);
  });

  it('should handle cycle capacities correctly', () => {
    const graph = new AdjacencyListGraph<string>(true, true);
    ['S', 'A', 'B', 'T'].forEach(v => graph.addVertex(v));
    graph.addEdge('S', 'A', 10);
    graph.addEdge('A', 'B', 10);
    graph.addEdge('B', 'A', 10); // Cycle
    graph.addEdge('B', 'T', 10);

    const result = algorithm.execute(graph, 'S', 'T');
    expect(result.maxFlow).toBe(10);
  });
});
