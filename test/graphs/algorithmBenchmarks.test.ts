import { describe, it, expect, beforeEach } from 'vitest';
import { BreadthFirstSearch } from '../../src/graphs/algorithms/traversal/BreadthFirstSearch';
import { DepthFirstSearch } from '../../src/graphs/algorithms/traversal/DepthFirstSearch';
import { DijkstraAlgorithm } from '../../src/graphs/algorithms/shortest-path/DijkstraAlgorithm';
import { AStarAlgorithm } from '../../src/graphs/algorithms/shortest-path/AStarAlgorithm';
import { KruskalAlgorithm } from '../../src/graphs/algorithms/spanning-tree/KruskalAlgorithm';
import { PrimAlgorithm } from '../../src/graphs/algorithms/spanning-tree/PrimAlgorithm';
import { TopologicalSort } from '../../src/graphs/algorithms/graph/TopologicalSort';
import { CycleDetection } from '../../src/graphs/algorithms/graph/CycleDetection';
import { AdjacencyListGraph } from '../../src/graphs/structures/AdjacencyListGraph';
import { AdjacencyMatrixGraph } from '../../src/graphs/structures/AdjacencyMatrixGraph';

/**
 * Algorithm-specific performance benchmarks with defined targets
 */
describe('Algorithm Performance Benchmarks', () => {
  describe('Traversal Algorithms', () => {
    const PERFORMANCE_TARGETS = {
      smallGraph: 10,    // ms
      mediumGraph: 50,   // ms
      largeGraph: 200    // ms
    };

    describe('BFS Performance', () => {
      let bfs: BreadthFirstSearch<number>;

      beforeEach(() => {
        bfs = new BreadthFirstSearch<number>();
      });

      it('should meet performance targets for small graphs', () => {
        const graph = new AdjacencyListGraph<number>();
        for (let i = 0; i < 50; i++) {
          graph.addVertex(i);
        }
        // Create a connected graph
        for (let i = 0; i < 49; i++) {
          graph.addEdge(i, i + 1);
        }

        const startTime = performance.now();
        const result = bfs.traverse(graph, 0);
        const endTime = performance.now();

        expect(endTime - startTime).toBeLessThan(PERFORMANCE_TARGETS.smallGraph);
        expect(result.visited.length).toBe(50);
      });

      it('should meet performance targets for medium graphs', () => {
        const graph = new AdjacencyListGraph<number>();
        for (let i = 0; i < 200; i++) {
          graph.addVertex(i);
        }
        // Create a sparse connected graph
        for (let i = 0; i < 199; i++) {
          graph.addEdge(i, i + 1);
          if (i % 5 === 0 && i + 5 < 200) {
            graph.addEdge(i, i + 5);
          }
        }

        const startTime = performance.now();
        const result = bfs.traverse(graph, 0);
        const endTime = performance.now();

        expect(endTime - startTime).toBeLessThan(PERFORMANCE_TARGETS.mediumGraph);
        expect(result.visited.length).toBe(200);
      });

      it('should handle large graphs within time limits', () => {
        const graph = new AdjacencyListGraph<number>();
        for (let i = 0; i < 1000; i++) {
          graph.addVertex(i);
        }
        // Create a tree structure
        for (let i = 0; i < 999; i++) {
          graph.addEdge(i, i + 1);
        }

        const startTime = performance.now();
        const result = bfs.traverse(graph, 0);
        const endTime = performance.now();

        expect(endTime - startTime).toBeLessThan(PERFORMANCE_TARGETS.largeGraph);
        expect(result.visited.length).toBe(1000);
      });
    });

    describe('DFS Performance', () => {
      let dfs: DepthFirstSearch<number>;

      beforeEach(() => {
        dfs = new DepthFirstSearch<number>();
      });

      it('should meet performance targets for different graph sizes', () => {
        const sizes = [50, 200, 500];

        sizes.forEach(size => {
          const graph = new AdjacencyListGraph<number>();
          for (let i = 0; i < size; i++) {
            graph.addVertex(i);
          }
          // Create a linear graph
          for (let i = 0; i < size - 1; i++) {
            graph.addEdge(i, i + 1);
          }

          const startTime = performance.now();
          const result = dfs.traverse(graph, 0);
          const endTime = performance.now();

          const target = size <= 50 ? PERFORMANCE_TARGETS.smallGraph :
                        size <= 200 ? PERFORMANCE_TARGETS.mediumGraph :
                        PERFORMANCE_TARGETS.largeGraph;

          expect(endTime - startTime).toBeLessThan(target);
          expect(result.visited.length).toBe(size);
        });
      });
    });
  });

  describe('Shortest Path Algorithms', () => {
    const SHORTEST_PATH_TARGETS = {
      smallWeighted: 20,   // ms
      mediumWeighted: 100, // ms
      largeWeighted: 500   // ms
    };

    describe('Dijkstra Performance', () => {
      let dijkstra: DijkstraAlgorithm<number, number>;

      beforeEach(() => {
        dijkstra = new DijkstraAlgorithm<number, number>();
      });

      it('should meet performance targets for weighted graphs', () => {
        // Create a weighted graph
        const graph = new AdjacencyListGraph<number, number>(false, true);
        const size = 50;

        for (let i = 0; i < size; i++) {
          graph.addVertex(i);
        }

        // Add weighted edges
        for (let i = 0; i < size; i++) {
          for (let j = i + 1; j < Math.min(i + 4, size); j++) {
            graph.addEdge(i, j, Math.floor(Math.random() * 10) + 1);
          }
        }

        const startTime = performance.now();
        const result = dijkstra.findShortestPath(graph, 0, size - 1);
        const endTime = performance.now();

        expect(endTime - startTime).toBeLessThan(SHORTEST_PATH_TARGETS.smallWeighted);
        // Result may or may not be found depending on connectivity
      });

      it('should handle larger weighted graphs', () => {
        const graph = new AdjacencyListGraph<number, number>(false, true);
        const size = 100;

        for (let i = 0; i < size; i++) {
          graph.addVertex(i);
        }

        // Create a more connected graph
        for (let i = 0; i < size; i++) {
          for (let j = i + 1; j < Math.min(i + 3, size); j++) {
            graph.addEdge(i, j, Math.floor(Math.random() * 20) + 1);
          }
        }

        const startTime = performance.now();
        const result = dijkstra.findShortestPath(graph, 0, size - 1);
        const endTime = performance.now();

        expect(endTime - startTime).toBeLessThan(SHORTEST_PATH_TARGETS.mediumWeighted);
      });
    });

    describe('A* Performance', () => {
      const manhattanHeuristic = (from: number, to: number) => Math.abs(to - from);

      it('should perform well with admissible heuristic', () => {
        const aStar = new AStarAlgorithm<number, number>(manhattanHeuristic);
        const graph = new AdjacencyListGraph<number, number>(false, true);
        const size = 50;

        for (let i = 0; i < size; i++) {
          graph.addVertex(i);
        }

        // Add edges with weights close to heuristic values
        for (let i = 0; i < size; i++) {
          for (let j = i + 1; j < Math.min(i + 3, size); j++) {
            graph.addEdge(i, j, Math.abs(j - i) + Math.floor(Math.random() * 2));
          }
        }

        const startTime = performance.now();
        const result = aStar.findShortestPath(graph, 0, size - 1);
        const endTime = performance.now();

        expect(endTime - startTime).toBeLessThan(SHORTEST_PATH_TARGETS.smallWeighted);
      });
    });
  });

  describe('Spanning Tree Algorithms', () => {
    const SPANNING_TREE_TARGETS = {
      smallMST: 30,   // ms
      mediumMST: 150, // ms
    };

    describe('Kruskal Performance', () => {
      let kruskal: KruskalAlgorithm<number, number>;

      beforeEach(() => {
        kruskal = new KruskalAlgorithm<number, number>();
      });

      it('should meet performance targets for MST computation', () => {
        const graph = new AdjacencyListGraph<number, number>(false, true);
        const size = 30;

        for (let i = 0; i < size; i++) {
          graph.addVertex(i);
        }

        // Add weighted edges to create a connected graph
        for (let i = 0; i < size; i++) {
          for (let j = i + 1; j < Math.min(i + 4, size); j++) {
            graph.addEdge(i, j, Math.floor(Math.random() * 10) + 1);
          }
        }

        const startTime = performance.now();
        const result = kruskal.execute(graph);
        const endTime = performance.now();

        expect(endTime - startTime).toBeLessThan(SPANNING_TREE_TARGETS.smallMST);
        if (result.found) {
          expect(result.edges.length).toBe(size - 1);
        }
      });
    });

    describe('Prim Performance', () => {
      let prim: PrimAlgorithm<number, number>;

      beforeEach(() => {
        prim = new PrimAlgorithm<number, number>();
      });

      it('should meet performance targets for MST computation', () => {
        const graph = new AdjacencyListGraph<number, number>(false, true);
        const size = 30;

        for (let i = 0; i < size; i++) {
          graph.addVertex(i);
        }

        // Add weighted edges
        for (let i = 0; i < size; i++) {
          for (let j = i + 1; j < Math.min(i + 4, size); j++) {
            graph.addEdge(i, j, Math.floor(Math.random() * 10) + 1);
          }
        }

        const startTime = performance.now();
        const result = prim.execute(graph);
        const endTime = performance.now();

        expect(endTime - startTime).toBeLessThan(SPANNING_TREE_TARGETS.smallMST);
        if (result.found) {
          expect(result.edges.length).toBe(size - 1);
        }
      });
    });
  });

  describe('Graph Analysis Algorithms', () => {
    const ANALYSIS_TARGETS = {
      smallAnalysis: 20,   // ms
      mediumAnalysis: 100, // ms
    };

    describe('Topological Sort Performance', () => {
      let topologicalSort: TopologicalSort<number>;

      beforeEach(() => {
        topologicalSort = new TopologicalSort<number>();
      });

      it('should perform topological sort efficiently', () => {
        const graph = new AdjacencyListGraph<number>(true); // Directed
        const size = 50;

        for (let i = 0; i < size; i++) {
          graph.addVertex(i);
        }

        // Create a DAG
        for (let i = 0; i < size - 1; i++) {
          graph.addEdge(i, i + 1);
        }

        const startTime = performance.now();
        const result = topologicalSort.execute(graph);
        const endTime = performance.now();

        expect(endTime - startTime).toBeLessThan(ANALYSIS_TARGETS.smallAnalysis);
        expect(result.isDAG).toBe(true);
        expect(result.order.length).toBe(size);
      });
    });

    describe('Cycle Detection Performance', () => {
      let cycleDetection: CycleDetection<number>;

      beforeEach(() => {
        cycleDetection = new CycleDetection<number>();
      });

      it('should detect cycles efficiently', () => {
        const graph = new AdjacencyListGraph<number>(true);
        const size = 50;

        for (let i = 0; i < size; i++) {
          graph.addVertex(i);
        }

        // Create a DAG (no cycles)
        for (let i = 0; i < size - 1; i++) {
          graph.addEdge(i, i + 1);
        }

        const startTime = performance.now();
        const result = cycleDetection.execute(graph);
        const endTime = performance.now();

        expect(endTime - startTime).toBeLessThan(ANALYSIS_TARGETS.smallAnalysis);
        expect(result.hasCycle).toBe(false);
      });

      it('should handle cyclic graphs', () => {
        const graph = new AdjacencyListGraph<number>(true);
        const size = 30;

        for (let i = 0; i < size; i++) {
          graph.addVertex(i);
        }

        // Create a cycle
        for (let i = 0; i < size - 1; i++) {
          graph.addEdge(i, i + 1);
        }
        graph.addEdge(size - 1, 0); // Close the cycle

        const startTime = performance.now();
        const result = cycleDetection.execute(graph);
        const endTime = performance.now();

        expect(endTime - startTime).toBeLessThan(ANALYSIS_TARGETS.smallAnalysis);
        expect(result.hasCycle).toBe(true);
      });
    });
  });

  describe('Algorithm Comparison Benchmarks', () => {
    it('should compare BFS vs DFS performance', () => {
      const graph = new AdjacencyListGraph<number>();
      const size = 100;

      for (let i = 0; i < size; i++) {
        graph.addVertex(i);
      }

      // Create a complex graph
      for (let i = 0; i < size; i++) {
        for (let j = i + 1; j < Math.min(i + 5, size); j++) {
          graph.addEdge(i, j);
        }
      }

      const bfs = new BreadthFirstSearch<number>();
      const dfs = new DepthFirstSearch<number>();

      const bfsStart = performance.now();
      bfs.traverse(graph, 0);
      const bfsTime = performance.now() - bfsStart;

      const dfsStart = performance.now();
      dfs.traverse(graph, 0);
      const dfsTime = performance.now() - dfsStart;

      // Both should complete in reasonable time
      expect(bfsTime).toBeLessThan(100);
      expect(dfsTime).toBeLessThan(100);

      // Times should be comparable (within 20x of each other)
      const ratio = Math.max(bfsTime, dfsTime) / Math.min(bfsTime, dfsTime);
      expect(ratio).toBeLessThan(20);
    });

    it('should compare Kruskal vs Prim for MST', () => {
      const graph = new AdjacencyListGraph<number, number>(false, true);
      const size = 25;

      for (let i = 0; i < size; i++) {
        graph.addVertex(i);
      }

      // Add weighted edges
      for (let i = 0; i < size; i++) {
        for (let j = i + 1; j < Math.min(i + 4, size); j++) {
          graph.addEdge(i, j, Math.floor(Math.random() * 10) + 1);
        }
      }

      const kruskal = new KruskalAlgorithm<number, number>();
      const prim = new PrimAlgorithm<number, number>();

      const kruskalStart = performance.now();
      const kruskalResult = kruskal.execute(graph);
      const kruskalTime = performance.now() - kruskalStart;

      const primStart = performance.now();
      const primResult = prim.execute(graph);
      const primTime = performance.now() - primStart;

      expect(kruskalTime).toBeLessThan(100);
      expect(primTime).toBeLessThan(100);

      // Both should find MSTs with same number of edges if connected
      if (kruskalResult.found && primResult.found) {
        expect(kruskalResult.edges.length).toBe(primResult.edges.length);
      }
    });
  });

  describe('Memory and Scalability', () => {
    it('should handle increasing problem sizes gracefully', () => {
      const sizes = [20, 40, 60];
      const bfsTimes: number[] = [];

      sizes.forEach(size => {
        const graph = new AdjacencyListGraph<number>();
        for (let i = 0; i < size; i++) {
          graph.addVertex(i);
        }

        // Create a complete graph (dense)
        for (let i = 0; i < size; i++) {
          for (let j = i + 1; j < size; j++) {
            graph.addEdge(i, j);
          }
        }

        const bfs = new BreadthFirstSearch<number>();
        const startTime = performance.now();
        bfs.traverse(graph, 0);
        const time = performance.now() - startTime;

        bfsTimes.push(time);
      });

      // Performance should degrade gracefully (not exponentially)
      // Allow up to quadratic growth for dense graphs
      for (let i = 1; i < bfsTimes.length; i++) {
        const ratio = bfsTimes[i] / bfsTimes[i - 1];
        const sizeRatio = sizes[i] / sizes[i - 1];
        expect(ratio).toBeLessThan(sizeRatio * sizeRatio * 2); // Allow 2x quadratic growth
      }
    });
  });
});
