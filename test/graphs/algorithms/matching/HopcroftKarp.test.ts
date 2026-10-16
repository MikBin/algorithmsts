import { describe, it, expect } from 'vitest';
import { HopcroftKarp } from '../../../../src/graphs/algorithms/matching/HopcroftKarp';
import { AdjacencyListGraph } from '../../../../src/graphs/structures/AdjacencyListGraph';
import { AdjacencyMatrixGraph } from '../../../../src/graphs/structures/AdjacencyMatrixGraph';
import { ArgumentError } from '../../../../src/core/validation/ArgumentError';

describe('HopcroftKarp', () => {
  const algorithm = new HopcroftKarp<string>();

  it('should throw ArgumentError if partitions are not provided', () => {
    const graph = new AdjacencyListGraph<string>(false);
    expect(() => algorithm.execute(graph, undefined as unknown as string[], undefined as unknown as string[])).toThrow(ArgumentError);
    expect(() => algorithm.execute(graph, [], undefined as unknown as string[])).toThrow(ArgumentError);
  });

  describe('AdjacencyMatrixGraph', () => {
    it('should find maximum matching in a bipartite matrix graph', () => {
      const graph = new AdjacencyMatrixGraph<string>(false);
      ['u1', 'u2', 'v1'].forEach(v => graph.addVertex(v));
      graph.addEdge('u1', 'v1');
      graph.addEdge('u2', 'v1');

      const left = ['u1', 'u2'];
      const right = ['v1'];

      const result = algorithm.execute(graph, left, right);
      expect(result.size).toBe(1);
    });
  });
});

  it('should find maximum matching in a bipartite graph', () => {
    const graph = new AdjacencyListGraph<string>(false);
    // U = {u1, u2, u3}, V = {v1, v2, v3}
    ['u1', 'u2', 'u3', 'v1', 'v2', 'v3'].forEach(v => graph.addVertex(v));
    graph.addEdge('u1', 'v1');
    graph.addEdge('u1', 'v2');
    graph.addEdge('u2', 'v1');
    graph.addEdge('u3', 'v2');
    graph.addEdge('u3', 'v3');

    const left = ['u1', 'u2', 'u3'];
    const right = ['v1', 'v2', 'v3'];

    const result = algorithm.execute(graph, left, right);
    expect(result.size).toBe(3);

    // Check matching valid
    expect(result.matching.size).toBe(3);
    expect(result.matching.get('u1')).toBe('v2'); // Valid according to algorithm order or just any maximum matching
    // As multiple matching exist, let's verify all matched edges exist in the graph
    for (const [u, v] of result.matching) {
      expect(graph.getNeighbors(u)).toContain(v);
      expect(left).toContain(u);
      expect(right).toContain(v);
    }
  });

  it('should handle graphs with no possible matches', () => {
    const graph = new AdjacencyListGraph<string>(false);
    ['u1', 'u2', 'v1', 'v2'].forEach(v => graph.addVertex(v));
    const left = ['u1', 'u2'];
    const right = ['v1', 'v2'];

    const result = algorithm.execute(graph, left, right);
    expect(result.size).toBe(0);
    expect(result.matching.size).toBe(0);
  });

  it('should handle incomplete matching', () => {
    const graph = new AdjacencyListGraph<string>(false);
    ['u1', 'u2', 'v1', 'v2'].forEach(v => graph.addVertex(v));
    graph.addEdge('u1', 'v1');
    graph.addEdge('u2', 'v1');

    const left = ['u1', 'u2'];
    const right = ['v1', 'v2'];

    const result = algorithm.execute(graph, left, right);
    expect(result.size).toBe(1);
    expect(result.matching.size).toBe(1);
    const uMatches = Array.from(result.matching.keys());
    expect(['u1', 'u2']).toContain(uMatches[0]);
    expect(result.matching.get(uMatches[0])).toBe('v1');
  });

  it('should handle empty graph', () => {
    const graph = new AdjacencyListGraph<string>(false);
    const result = algorithm.execute(graph, [], []);
    expect(result.size).toBe(0);
    expect(result.matching.size).toBe(0);
  });
});
