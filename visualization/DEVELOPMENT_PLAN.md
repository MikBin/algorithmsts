# Visualization Development Plan

This document outlines the plan for expanding the algorithm visualization suite. The goal is to provide interactive demonstrations for the extensive library of data structures and algorithms implemented in `src`.

## Priority 1: Core Data Structures (Trees & Heaps)

Visualizing these structures provides immediate educational value and helps debug complex structural invariants.

*   **Heaps / Priority Queues**
    *   Target: `src/data-structures/binary-heap`, `src/data-structures/fibonacci-heap`
    *   Features: Insert, Extract-Min/Max, Decrease-Key animation.
*   **Self-Balancing Trees**
    *   Target: `src/data-structures/avl-tree`, `src/data-structures/red-black-tree`
    *   Features: Rotations (Left/Right) during insertion and deletion.
*   **B-Trees Family**
    *   Target: `src/data-structures/b-tree`, `src/data-structures/b-plus-tree`
    *   Features: Node splitting and merging animations.

## Priority 2: Sorting Algorithms

Sorting is a classic visualization category.

*   **Comparison Sorts**
    *   Target: `src/sorting` (QuickSort, MergeSort, HeapSort)
    *   Features: Bar chart animation, color-coding comparisons vs swaps.
*   **Non-Comparison Sorts**
    *   Target: `src/sorting` (RadixSort, CountingSort)
    *   Features: Bucket visualization.

## Priority 3: Graph Algorithms

*   **Pathfinding**
    *   Target: `src/graphs/algorithms/shortest-path` (Dijkstra, A*, Bellman-Ford)
    *   Features: Grid or Network graph, visiting node animation, path relaxation.
*   **Traversals**
    *   Target: `src/graphs/algorithms/traversal` (BFS, DFS)
    *   Features: Queue/Stack state visualization.
*   **Minimum Spanning Trees**
    *   Target: `src/graphs/algorithms/spanning-tree` (Prim, Kruskal)

## Priority 4: Spatial Data Structures

*   **Space Partitioning**
    *   Target: `src/data-structures/quadtree`, `src/data-structures/kd-tree`, `src/data-structures/r-tree`
    *   Features: 2D plane subdivision, point insertion, range query visualization.

## Priority 5: String Algorithms

*   **Pattern Matching**
    *   Target: `src/algorithms/strings` (KMP, Rabin-Karp)
    *   Features: Sliding window, prefix table visualization.
*   **Tries & Suffix Structures**
    *   Target: `src/trie`, `src/suffixTree`, `src/data-structures/aho-corasick`
    *   Features: Tree construction, string traversal.

## Priority 6: Advanced / Probabilistic

*   **Filters & Sketches**
    *   Target: `src/data-structures/bloom-filter`, `src/data-structures/hyperloglog`
    *   Features: Hash function mapping, bit array state.

## Implementation Strategy

1.  **Shared Components**: Develop a reusable `visualization/assets/common.js` (or similar) for:
    *   Canvas/SVG rendering (D3.js or native Canvas API).
    *   Animation loop and step control (Play/Pause, Speed).
    *   Data input controls.
2.  **Standardized UI**: Use the layout established in `visualization/index.html` as a template.
3.  **Build Integration**: Ensure new visualizations can import TypeScript source files (via build step or Vite) to run the actual algorithms, guaranteeing the visualization matches the implementation.
