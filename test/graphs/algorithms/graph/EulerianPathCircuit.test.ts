import { describe, it, expect, beforeEach } from 'vitest';
import { EulerianPathCircuit } from '../../../../src/graphs/algorithms/graph/EulerianPathCircuit';
import { AdjacencyListGraph } from '../../../../src/graphs/structures/AdjacencyListGraph';

describe('EulerianPathCircuit', () => {
  let eulerian: EulerianPathCircuit<string>;

  beforeEach(() => {
    eulerian = new EulerianPathCircuit<string>();
  });

  describe('Connectivity checks', () => {
    it('should return none for two disjoint undirected triangles', () => {
      const graph = new AdjacencyListGraph<string>(false);
      ['A', 'B', 'C', 'X', 'Y', 'Z'].forEach(v => graph.addVertex(v));

      // Triangle 1
      graph.addEdge('A', 'B');
      graph.addEdge('B', 'C');
      graph.addEdge('C', 'A');

      // Triangle 2
      graph.addEdge('X', 'Y');
      graph.addEdge('Y', 'Z');
      graph.addEdge('Z', 'X');

      const result = eulerian.execute(graph);
      expect(result.type).toBe('none');
    });

    it('should return none for two disjoint directed cycles', () => {
      const graph = new AdjacencyListGraph<string>(true);
      ['A', 'B', 'C', 'X', 'Y', 'Z'].forEach(v => graph.addVertex(v));

      // Cycle 1
      graph.addEdge('A', 'B');
      graph.addEdge('B', 'C');
      graph.addEdge('C', 'A');

      // Cycle 2
      graph.addEdge('X', 'Y');
      graph.addEdge('Y', 'Z');
      graph.addEdge('Z', 'X');

      const result = eulerian.execute(graph);
      expect(result.type).toBe('none');
    });

    it('should ignore isolated vertices (vertices with 0 degree) and return circuit', () => {
      const graph = new AdjacencyListGraph<string>(false);
      ['A', 'B', 'C', 'Iso1', 'Iso2'].forEach(v => graph.addVertex(v));

      // Triangle 1
      graph.addEdge('A', 'B');
      graph.addEdge('B', 'C');
      graph.addEdge('C', 'A');

      const result = eulerian.execute(graph);
      expect(result.type).toBe('circuit');
    });
  });
});
