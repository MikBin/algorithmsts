/**
 * Algorithms Usage Examples
 *
 * This file demonstrates how to use the various algorithms
 * provided by the Algorithmsts library, including sorting,
 * searching, string processing, and graph algorithms.
 */

import {
  // Sorting algorithms
  CountingSort,
  RadixSortNumbers,
  RadixSortStrings,

  // Searching algorithms
  BinarySearch,
  BinaryClosestSearch,

  // String algorithms
  JaroDistance,
  JaroWinklerDistance,
  LevenshteinDistance,
  NgramSimilarity,
  SplitByUpperCase,

  // Range query algorithms
  SparseTable,

  // Graph algorithms
  BreadthFirstSearch,
  DepthFirstSearch,
  DijkstraAlgorithm,
  AStarAlgorithm,
  KruskalAlgorithm,
  PrimAlgorithm,
  TopologicalSort,
  CycleDetection,
} from "@mikbin80/algorithmsts/algorithms";

/**
 * Example 1: Sorting Algorithms
 */
function sortingExample() {
  console.log("=== Sorting Algorithms Example ===");

  const data = [64, 34, 25, 12, 22, 11, 90, 5];

  // Counting Sort
  const countingSort = new CountingSort();
  const countingResult = countingSort.execute({ array: [...data] });
  console.log("Counting sort result:", countingResult.sortedArray);

  // Radix Sort for numbers
  const radixSortNumbers = new RadixSortNumbers();
  const radixNumbersResult = radixSortNumbers.execute({ array: [...data] });
  console.log("Radix sort (numbers) result:", radixNumbersResult.sortedArray);

  // Radix Sort for strings
  const strings = ["apple", "Banana", "cherry", "Date", "elderberry"];
  const radixSortStrings = new RadixSortStrings();
  const radixStringsResult = radixSortStrings.execute({ array: [...strings] });
  console.log("Radix sort (strings) result:", radixStringsResult.sortedArray);
}

/**
 * Example 2: Searching Algorithms
 */
function searchingExample() {
  console.log("\n=== Searching Algorithms Example ===");

  const sortedArray = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];

  // Binary Search
  const binarySearch = new BinarySearch();
  const searchResult = binarySearch.execute({
    array: sortedArray,
    target: 11,
  });
  console.log(
    "Binary search for 11:",
    searchResult.found ? `Found at index ${searchResult.index}` : "Not found",
  );

  // Binary Closest Search
  const closestSearch = new BinaryClosestSearch();
  const closestResult = closestSearch.execute({
    array: sortedArray,
    target: 12,
  });
  console.log("Closest to 12:", `Value ${closestResult.value} at index ${closestResult.index}`);
}

/**
 * Example 3: String Similarity Algorithms
 */
function stringSimilarityExample() {
  console.log("\n=== String Similarity Algorithms Example ===");

  const str1 = "kitten";
  const str2 = "kittens";

  // Jaro Distance
  const jaro = new JaroDistance();
  const jaroResult = jaro.execute({ str1, str2 });
  console.log(`Jaro distance between "${str1}" and "${str2}":`, jaroResult.distance);

  // Jaro-Winkler Distance
  const jaroWinkler = new JaroWinklerDistance();
  const jaroWinklerResult = jaroWinkler.execute({ str1, str2 });
  console.log(`Jaro-Winkler distance between "${str1}" and "${str2}":`, jaroWinklerResult.distance);

  // Levenshtein Distance
  const levenshtein = new LevenshteinDistance();
  const levenshteinResult = levenshtein.execute({ str1, str2 });
  console.log(`Levenshtein distance between "${str1}" and "${str2}":`, levenshteinResult.distance);

  // N-gram Similarity
  const ngram = new NgramSimilarity();
  const ngramResult = ngram.execute({ str1, str2, n: 2 });
  console.log(`2-gram similarity between "${str1}" and "${str2}":`, ngramResult.similarity);

  // Split by Upper Case
  const camelCaseString = "camelCaseStringExample";
  const splitUpper = new SplitByUpperCase();
  const splitResult = splitUpper.execute({ input: camelCaseString });
  console.log(`Split "${camelCaseString}" by upper case:`, splitResult.parts);
}

/**
 * Example 4: Range Query Algorithms
 */
function rangeQueryExample() {
  console.log("\n=== Range Query Algorithms Example ===");

  const data = [1, 3, 5, 7, 9, 11, 13, 15];

  // Sparse Table for range minimum queries
  const sparseTable = new SparseTable({
    array: data,
    operation: Math.min,
    identity: Infinity,
  });

  console.log("Original array:", data);

  // Range minimum queries
  console.log("Min in range [0, 3]:", sparseTable.query(0, 3)); // min(1,3,5,7) = 1
  console.log("Min in range [2, 5]:", sparseTable.query(2, 5)); // min(5,7,9,11) = 5
  console.log("Min in range [4, 7]:", sparseTable.query(4, 7)); // min(9,11,13,15) = 9

  // Sparse Table for range sum queries
  const sumSparseTable = new SparseTable({
    array: data,
    operation: (a, b) => a + b,
    identity: 0,
  });

  console.log("Sum in range [0, 3]:", sumSparseTable.query(0, 3)); // 1+3+5+7 = 16
  console.log("Sum in range [2, 5]:", sumSparseTable.query(2, 5)); // 5+7+9+11 = 32
}

/**
 * Example 5: Graph Traversal Algorithms
 */
function graphTraversalExample() {
  console.log("\n=== Graph Traversal Algorithms Example ===");

  // Create a simple graph structure (adjacency list representation)
  const graph = {
    A: ["B", "C"],
    B: ["A", "D", "E"],
    C: ["A", "F"],
    D: ["B"],
    E: ["B", "F"],
    F: ["C", "E"],
  };

  // Breadth-First Search
  const bfs = new BreadthFirstSearch();
  const bfsResult = bfs.execute({
    graph: graph,
    startVertex: "A",
  });
  console.log("BFS traversal from A:", bfsResult.visited);

  // Depth-First Search
  const dfs = new DepthFirstSearch();
  const dfsResult = dfs.execute({
    graph: graph,
    startVertex: "A",
  });
  console.log("DFS traversal from A:", dfsResult.visited);
}

/**
 * Example 6: Shortest Path Algorithms
 */
function shortestPathExample() {
  console.log("\n=== Shortest Path Algorithms Example ===");

  // Create a weighted graph
  const graph = {
    A: { B: 4, C: 2 },
    B: { A: 4, C: 5, D: 10 },
    C: { A: 2, B: 5, D: 3, E: 8 },
    D: { B: 10, C: 3, E: 4 },
    E: { C: 8, D: 4 },
  };

  // Dijkstra's algorithm
  const dijkstra = new DijkstraAlgorithm();
  const dijkstraResult = dijkstra.execute({
    graph: graph,
    startVertex: "A",
  });
  console.log("Dijkstra distances from A:", dijkstraResult.distances);
  console.log("Dijkstra path to E:", dijkstraResult.path);

  // A* algorithm
  const aStar = new AStarAlgorithm();
  const aStarResult = aStar.execute({
    graph: graph,
    startVertex: "A",
    goalVertex: "E",
    heuristic: (vertex: string) => {
      // Simple heuristic: assume D and E are closer to goal
      const heuristics: Record<string, number> = { A: 10, B: 8, C: 6, D: 3, E: 0 };
      return heuristics[vertex] || 0;
    },
  });
  console.log("A* path from A to E:", aStarResult.path);
  console.log("A* total cost:", aStarResult.cost);
}

/**
 * Example 7: Minimum Spanning Tree Algorithms
 */
function mstExample() {
  console.log("\n=== Minimum Spanning Tree Algorithms Example ===");

  // Create an undirected weighted graph
  const graph = {
    A: { B: 2, C: 3 },
    B: { A: 2, C: 4, D: 5 },
    C: { A: 3, B: 4, D: 6, E: 7 },
    D: { B: 5, C: 6, E: 8 },
    E: { C: 7, D: 8 },
  };

  // Kruskal's algorithm
  const kruskal = new KruskalAlgorithm();
  const kruskalResult = kruskal.execute({ graph });
  console.log("Kruskal MST edges:", kruskalResult.edges);
  console.log("Kruskal MST total weight:", kruskalResult.totalWeight);

  // Prim's algorithm
  const prim = new PrimAlgorithm();
  const primResult = prim.execute({
    graph: graph,
    startVertex: "A",
  });
  console.log("Prim MST edges:", primResult.edges);
  console.log("Prim MST total weight:", primResult.totalWeight);
}

/**
 * Example 8: Graph Analysis Algorithms
 */
function graphAnalysisExample() {
  console.log("\n=== Graph Analysis Algorithms Example ===");

  // Directed Acyclic Graph (DAG) for topological sort
  const dag = {
    A: ["B", "C"],
    B: ["D"],
    C: ["D"],
    D: ["E"],
    E: [],
  };

  // Topological sort
  const topoSort = new TopologicalSort();
  const topoResult = topoSort.execute({ graph: dag });
  console.log("Topological sort:", topoResult.order);

  // Graph with cycles for cycle detection
  const cyclicGraph = {
    A: ["B"],
    B: ["C"],
    C: ["A"], // Creates a cycle
  };

  // Cycle detection
  const cycleDetector = new CycleDetection();
  const cycleResult = cycleDetector.execute({ graph: cyclicGraph });
  console.log("Graph has cycle:", cycleResult.hasCycle);
  if (cycleResult.cycle) {
    console.log("Cycle detected:", cycleResult.cycle);
  }
}

/**
 * Example 9: Algorithm Performance Comparison
 */
function performanceComparisonExample() {
  console.log("\n=== Algorithm Performance Comparison Example ===");

  const largeArray = Array.from({ length: 10000 }, () => Math.floor(Math.random() * 1000));

  console.log("Comparing sorting algorithms on array of size:", largeArray.length);

  // Measure Counting Sort performance
  const countingSort = new CountingSort();
  const countingStart = performance.now();
  countingSort.execute({ array: [...largeArray] });
  const countingTime = performance.now() - countingStart;
  console.log(`Counting sort time: ${countingTime.toFixed(2)}ms`);

  // Measure Radix Sort performance
  const radixSort = new RadixSortNumbers();
  const radixStart = performance.now();
  radixSort.execute({ array: [...largeArray] });
  const radixTime = performance.now() - radixStart;
  console.log(`Radix sort time: ${radixTime.toFixed(2)}ms`);

  // Compare string similarity algorithms
  const str1 = "The quick brown fox jumps over the lazy dog";
  const str2 = "The quick brown fox jumps over the lazy dogs";

  const algorithms = [
    { name: "Jaro", instance: new JaroDistance() },
    { name: "Jaro-Winkler", instance: new JaroWinklerDistance() },
    { name: "Levenshtein", instance: new LevenshteinDistance() },
  ];

  console.log(
    `\nComparing string similarity on strings of length ${str1.length} and ${str2.length}:`,
  );

  algorithms.forEach(({ name, instance }) => {
    const start = performance.now();
    const result = instance.execute({ str1, str2 });
    const time = performance.now() - start;
    console.log(`${name}: ${time.toFixed(3)}ms, result: ${result.distance || result.similarity}`);
  });
}

/**
 * Main demonstration function
 */
export function demonstrateAlgorithms() {
  console.log("=== Algorithms Usage Examples ===\n");

  sortingExample();
  searchingExample();
  stringSimilarityExample();
  rangeQueryExample();
  graphTraversalExample();
  shortestPathExample();
  mstExample();
  graphAnalysisExample();
  performanceComparisonExample();
}

// Run the demonstration if this file is executed directly
if (require.main === module) {
  demonstrateAlgorithms();
}
