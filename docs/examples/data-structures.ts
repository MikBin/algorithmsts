/**
 * Data Structures Usage Examples
 *
 * This file demonstrates how to use the various data structures
 * provided by the Algorithmsts library, including linked lists,
 * trees, graphs, and other advanced data structures.
 */

import {
  // Linked List
  LinkedList,

  // Skip List
  SkipList,

  // Segment Tree
  SegmentTree,

  // Trie
  Trie,

  // Suffix Tree
  SuffixTree,

  // Graph structures
  AdjacencyListGraph,
  AdjacencyMatrixGraph,

  // Graph algorithms
  BreadthFirstSearch,
  DepthFirstSearch,
  DijkstraAlgorithm,
  AStarAlgorithm,
  KruskalAlgorithm,
  PrimAlgorithm,
  TopologicalSort,
  CycleDetection,
} from "@mikbin80/algorithmsts";

/**
 * Example 1: Using Linked List
 */
function linkedListExample() {
  console.log("=== Linked List Example ===");

  const list = new LinkedList<number>();

  // Add elements
  list.add(1);
  list.add(2);
  list.add(3);
  console.log("List after adding 1, 2, 3:", list.toArray());

  // Insert at specific position
  list.insert(1, 10);
  console.log("List after inserting 10 at index 1:", list.toArray());

  // Remove elements
  list.remove(2);
  console.log("List after removing element 2:", list.toArray());

  // Check containment
  console.log("Contains 10:", list.contains(10));
  console.log("Contains 5:", list.contains(5));

  // Get element at index
  console.log("Element at index 0:", list.get(0));
  console.log("Element at index 2:", list.get(2));

  // Size and emptiness
  console.log("Size:", list.size());
  console.log("Is empty:", list.isEmpty());
}

/**
 * Example 2: Using Skip List
 */
function skipListExample() {
  console.log("\n=== Skip List Example ===");

  const skipList = new SkipList<number, string>(10, -Infinity);

  // Insert key-value pairs
  skipList.insert(1, "one");
  skipList.insert(3, "three");
  skipList.insert(5, "five");
  skipList.insert(2, "two");
  skipList.insert(4, "four");

  console.log("SkipList contents:");
  skipList.forEach((node) => {
    console.log(`  ${node.key}: ${node.value}`);
  });

  // Search for values
  console.log("Value for key 3:", skipList.find(3)?.value);
  console.log("Value for key 6:", skipList.find(6)?.value);

  // Remove elements
  skipList.remove(3);
  console.log("After removing key 3, find(3):", skipList.find(3)?.value);

  console.log("Size:", skipList.size());
}

/**
 * Example 3: Using Segment Tree for Range Queries
 */
function segmentTreeExample() {
  console.log("\n=== Segment Tree Example ===");

  const data = [1, 3, 5, 7, 9, 11];
  const segmentTree = new SegmentTree(data, (a, b) => a + b, 0); // Sum segment tree

  console.log("Original data:", data);

  // Range sum queries
  console.log("Sum of range [0, 2]:", segmentTree.query(0, 2)); // 1+3+5 = 9
  console.log("Sum of range [1, 4]:", segmentTree.query(1, 4)); // 3+5+7+9 = 24
  console.log("Sum of range [2, 5]:", segmentTree.query(2, 5)); // 5+7+9+11 = 32

  // Update element
  segmentTree.update(2, 10); // Change index 2 from 5 to 10
  console.log("After updating index 2 to 10:");
  console.log("Sum of range [0, 2]:", segmentTree.query(0, 2)); // 1+3+10 = 14
  console.log("Sum of range [1, 4]:", segmentTree.query(1, 4)); // 3+10+7+9 = 29
}

/**
 * Example 4: Using Trie for String Operations
 */
function trieExample() {
  console.log("\n=== Trie Example ===");

  const trie = new Trie<string>();

  // Insert words with associated values
  trie.insert("hello", "greeting");
  trie.insert("help", "assistance");
  trie.insert("hero", "protagonist");
  trie.insert("hex", "color");

  // Search for exact matches
  console.log('Search "hello":', trie.search("hello"));
  console.log('Search "help":', trie.search("help"));
  console.log('Search "world":', trie.search("world"));

  // Check prefixes
  console.log('Starts with "he":', trie.startsWith("he"));
  console.log('Starts with "hi":', trie.startsWith("hi"));

  // Get all words with prefix
  console.log('Words with prefix "he":', trie.getWordsWithPrefix("he"));

  // Delete words
  trie.delete("help");
  console.log('After deleting "help", search "help":', trie.search("help"));
  console.log('Words with prefix "he":', trie.getWordsWithPrefix("he"));
}

/**
 * Example 5: Using Suffix Tree for String Analysis
 */
function suffixTreeExample() {
  console.log("\n=== Suffix Tree Example ===");

  const text = "banana";
  const suffixTree = new SuffixTree();

  // Build suffix tree
  suffixTree.build(text);
  console.log("Built suffix tree for text:", text);

  // Search for substrings
  console.log('Contains "ana":', suffixTree.contains("ana"));
  console.log('Contains "ban":', suffixTree.contains("ban"));
  console.log('Contains "xyz":', suffixTree.contains("xyz"));

  // Find all occurrences
  console.log('Occurrences of "ana":', suffixTree.findOccurrences("ana"));
  console.log('Occurrences of "a":', suffixTree.findOccurrences("a"));

  // Get longest repeated substring
  console.log("Longest repeated substring:", suffixTree.getLongestRepeatedSubstring());
}

/**
 * Example 6: Using Graph Structures
 */
function graphExample() {
  console.log("\n=== Graph Example ===");

  // Create a directed graph
  const graph = new AdjacencyListGraph<string>(true, true); // directed, weighted

  // Add vertices
  graph.addVertex("A");
  graph.addVertex("B");
  graph.addVertex("C");
  graph.addVertex("D");

  // Add edges with weights
  graph.addEdge("A", "B", 4);
  graph.addEdge("A", "C", 2);
  graph.addEdge("B", "C", 5);
  graph.addEdge("B", "D", 10);
  graph.addEdge("C", "D", 3);

  console.log("Graph vertices:", graph.getVertices());
  console.log("Graph edges count:", graph.getEdgeCount());

  // Get neighbors
  console.log("Neighbors of A:", graph.getNeighbors("A"));
  console.log("Neighbors of B:", graph.getNeighbors("B"));

  // Check edges
  console.log("Has edge A->B:", graph.hasEdge("A", "B"));
  console.log("Has edge B->A:", graph.hasEdge("B", "A")); // Should be false for directed graph

  // Get edge weight
  console.log("Weight of A->B:", graph.getEdgeWeight("A", "B"));
  console.log("Weight of B->C:", graph.getEdgeWeight("B", "C"));
}

/**
 * Example 7: Graph Traversal Algorithms
 */
function graphTraversalExample() {
  console.log("\n=== Graph Traversal Example ===");

  const graph = new AdjacencyListGraph<string>(false, false); // undirected, unweighted

  // Create a simple graph
  graph.addVertex("A");
  graph.addVertex("B");
  graph.addVertex("C");
  graph.addVertex("D");
  graph.addVertex("E");

  graph.addEdge("A", "B");
  graph.addEdge("A", "C");
  graph.addEdge("B", "D");
  graph.addEdge("C", "D");
  graph.addEdge("C", "E");
  graph.addEdge("D", "E");

  // Breadth-First Search
  const bfs = new BreadthFirstSearch();
  const bfsResult = bfs.execute({ graph, startVertex: "A" });
  console.log("BFS traversal from A:", bfsResult.visited);

  // Depth-First Search
  const dfs = new DepthFirstSearch();
  const dfsResult = dfs.execute({ graph, startVertex: "A" });
  console.log("DFS traversal from A:", dfsResult.visited);
}

/**
 * Example 8: Shortest Path Algorithms
 */
function shortestPathExample() {
  console.log("\n=== Shortest Path Example ===");

  const graph = new AdjacencyListGraph<string>(true, true); // directed, weighted

  // Create a weighted graph
  graph.addVertex("A");
  graph.addVertex("B");
  graph.addVertex("C");
  graph.addVertex("D");
  graph.addVertex("E");

  graph.addEdge("A", "B", 4);
  graph.addEdge("A", "C", 2);
  graph.addEdge("B", "C", 5);
  graph.addEdge("B", "D", 10);
  graph.addEdge("C", "D", 3);
  graph.addEdge("C", "E", 8);
  graph.addEdge("D", "E", 4);

  // Dijkstra's algorithm
  const dijkstra = new DijkstraAlgorithm();
  const dijkstraResult = dijkstra.execute({ graph, startVertex: "A" });
  console.log("Dijkstra distances from A:", dijkstraResult.distances);
  console.log("Dijkstra paths from A:", dijkstraResult.paths);

  // A* algorithm (using heuristic that underestimates distance)
  const aStar = new AStarAlgorithm();
  const aStarResult = aStar.execute({
    graph,
    startVertex: "A",
    goalVertex: "E",
    heuristic: (vertex) => {
      // Simple heuristic: assume D and E are closer to goal
      const heuristics: Record<string, number> = { A: 10, B: 8, C: 6, D: 3, E: 0 };
      return heuristics[vertex] || 0;
    },
  });
  console.log("A* path from A to E:", aStarResult.path);
  console.log("A* path cost:", aStarResult.cost);
}

/**
 * Example 9: Minimum Spanning Tree Algorithms
 */
function mstExample() {
  console.log("\n=== Minimum Spanning Tree Example ===");

  const graph = new AdjacencyListGraph<string>(false, true); // undirected, weighted

  // Create a weighted undirected graph
  graph.addVertex("A");
  graph.addVertex("B");
  graph.addVertex("C");
  graph.addVertex("D");
  graph.addVertex("E");

  graph.addEdge("A", "B", 2);
  graph.addEdge("A", "C", 3);
  graph.addEdge("B", "C", 4);
  graph.addEdge("B", "D", 5);
  graph.addEdge("C", "D", 6);
  graph.addEdge("C", "E", 7);
  graph.addEdge("D", "E", 8);

  // Kruskal's algorithm
  const kruskal = new KruskalAlgorithm();
  const kruskalResult = kruskal.execute({ graph });
  console.log("Kruskal MST edges:", kruskalResult.edges);
  console.log("Kruskal MST total weight:", kruskalResult.totalWeight);

  // Prim's algorithm
  const prim = new PrimAlgorithm();
  const primResult = prim.execute({ graph, startVertex: "A" });
  console.log("Prim MST edges:", primResult.edges);
  console.log("Prim MST total weight:", primResult.totalWeight);
}

/**
 * Example 10: Graph Analysis Algorithms
 */
function graphAnalysisExample() {
  console.log("\n=== Graph Analysis Example ===");

  // Create a directed graph for topological sort
  const dag = new AdjacencyListGraph<string>(true, false); // directed, unweighted

  dag.addVertex("A");
  dag.addVertex("B");
  dag.addVertex("C");
  dag.addVertex("D");
  dag.addVertex("E");

  dag.addEdge("A", "B");
  dag.addEdge("A", "C");
  dag.addEdge("B", "D");
  dag.addEdge("C", "D");
  dag.addEdge("D", "E");

  // Topological sort
  const topoSort = new TopologicalSort();
  const topoResult = topoSort.execute({ graph: dag });
  console.log("Topological sort:", topoResult.order);

  // Create a graph with cycles for cycle detection
  const cyclicGraph = new AdjacencyListGraph<string>(true, false);

  cyclicGraph.addVertex("A");
  cyclicGraph.addVertex("B");
  cyclicGraph.addVertex("C");

  cyclicGraph.addEdge("A", "B");
  cyclicGraph.addEdge("B", "C");
  cyclicGraph.addEdge("C", "A"); // Creates a cycle

  // Cycle detection
  const cycleDetector = new CycleDetection();
  const cycleResult = cycleDetector.execute({ graph: cyclicGraph });
  console.log("Graph has cycle:", cycleResult.hasCycle);
  console.log("Cycle vertices:", cycleResult.cycle);
}

/**
 * Main demonstration function
 */
export function demonstrateDataStructures() {
  console.log("=== Data Structures Usage Examples ===\n");

  linkedListExample();
  skipListExample();
  segmentTreeExample();
  trieExample();
  suffixTreeExample();
  graphExample();
  graphTraversalExample();
  shortestPathExample();
  mstExample();
  graphAnalysisExample();
}

// Run the demonstration if this file is executed directly
if (require.main === module) {
  demonstrateDataStructures();
}
