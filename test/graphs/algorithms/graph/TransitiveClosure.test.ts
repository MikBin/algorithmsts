/* eslint-disable @typescript-eslint/no-unused-vars */
import { describe, it, expect } from "vitest";
import { TransitiveClosure } from "../../../../src/graphs/algorithms/graph/TransitiveClosure";
import { SampleGraphs } from "../../fixtures/SampleGraphs";
import { AdjacencyListGraph } from "../../../../src/graphs/structures/AdjacencyListGraph";

describe("TransitiveClosure", () => {
  const algorithm = new TransitiveClosure<string>();

  describe("Directed Graphs", () => {
    it("should compute transitive closure for a simple directed graph (A->B->C)", () => {
      const graph = SampleGraphs.simpleDirectedGraph;
      const result = algorithm.execute(graph);

      // A can reach A, B, C
      expect(result.isReachable("A", "A")).toBe(true);
      expect(result.isReachable("A", "B")).toBe(true);
      expect(result.isReachable("A", "C")).toBe(true);

      // B can reach B, C
      expect(result.isReachable("B", "A")).toBe(false);
      expect(result.isReachable("B", "B")).toBe(true);
      expect(result.isReachable("B", "C")).toBe(true);

      // C can reach C
      expect(result.isReachable("C", "A")).toBe(false);
      expect(result.isReachable("C", "B")).toBe(false);
      expect(result.isReachable("C", "C")).toBe(true);
    });

    it("should compute transitive closure for a cyclic graph (A->B->C->A)", () => {
      const graph = SampleGraphs.cyclicGraph;
      const result = algorithm.execute(graph);

      // Everything can reach everything
      ["A", "B", "C"].forEach((u) => {
        ["A", "B", "C"].forEach((v) => {
          expect(result.isReachable(u, v)).toBe(true);
        });
      });
    });

    it("should return false for nodes not in graph", () => {
      const graph = SampleGraphs.simpleDirectedGraph;
      const result = algorithm.execute(graph);
      expect(result.isReachable("A", "Z")).toBe(false);
      expect(result.isReachable("Z", "A")).toBe(false);
    });

    it("should handle empty graph", () => {
      const graph = SampleGraphs.emptyGraph;
      const result = algorithm.execute(graph);
      expect(result.reachable.size).toBe(0);
      expect(result.isReachable("A", "A")).toBe(false);
    });
  });

  describe("Undirected Graphs", () => {
    it("should compute reachability for undirected disconnected graph", () => {
      const graph = SampleGraphs.disconnectedGraph; // A-B, C-D
      const result = algorithm.execute(graph);

      // A and B can reach each other
      expect(result.isReachable("A", "B")).toBe(true);
      expect(result.isReachable("B", "A")).toBe(true);
      expect(result.isReachable("A", "A")).toBe(true);

      // C and D can reach each other
      expect(result.isReachable("C", "D")).toBe(true);
      expect(result.isReachable("D", "C")).toBe(true);

      // A cannot reach C or D
      expect(result.isReachable("A", "C")).toBe(false);
      expect(result.isReachable("A", "D")).toBe(false);
    });
  });

  describe("AdjacencyMatrixGraph", () => {
    it("should compute correctly for matrix graphs", () => {
      const graph = SampleGraphs.simpleDirectedGraphMatrix;
      const result = algorithm.execute(graph);
      expect(result.isReachable("A", "C")).toBe(true);
      expect(result.isReachable("B", "A")).toBe(false);
    });
  });
});
