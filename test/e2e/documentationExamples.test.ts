import { describe, expect, it } from 'vitest';
import {
  BinarySearch,
  CountingSort,
  RadixSortNumbers,
  NgramSimilarity,
  JaroDistance,
  LevenshteinDistance,
  SparseTable
} from '../../src/algorithms';
import {
  LinkedList,
  SkipList,
  SegmentTree,
  Trie,
  SuffixTree
} from '../../src/data-structures';
import {
  AdjacencyListGraph,
  BreadthFirstSearch,
  DepthFirstSearch
} from '../../src/graphs';

/**
 * Documentation Examples End-to-End Tests
 *
 * Tests that verify all documentation examples work correctly
 * and produce the expected results as shown in README.md.
 */
describe('Documentation Examples E2E Tests', () => {
describe.skip('Binary Search Examples', () => {
    it('should work with the binary search example from README', () => {
      const sortedArray = [2, 5, 8, 12, 16, 23, 38, 56, 72, 91];
      const comparisonFn = (a: number, b: number) => a - b;

      const binarySearch = new BinarySearch<number>();
      const index = binarySearch.execute({
        array: sortedArray,
        value: 23,
        compareFn
      });

      expect(index.result).toBe(5);
    });

    it('should work with the binary closest search example', () => {
      const sortedArray = [2, 5, 8, 12, 16, 23, 38, 56, 72, 91];
      const comparisonFn = (a: number, b: number) => a - b;

      const binarySearch = new BinarySearch<number>();
      const closestIndex = binarySearch.execute({
        array: sortedArray,
        value: 25,
        compareFn
      });

      expect(closestIndex.result).toBe(5); // 23 is closer to 25 than 16
    });
  });

  describe('Segment Tree Examples', () => {
    it('should work with the range sum queries example', () => {
      const sourceArray = [1, 3, 5, 7, 9, 11];

      // Define a custom node type for sum queries
      interface SumNode {
        left: number;
        right: number;
        sum: number;
      }

      // Factory to create a new node
      const nodeFactory = (val: number, left: number, right: number): SumNode => ({
        sum: val,
        left,
        right
      });

      // Merger to combine two nodes
      const nodeMerger = (parentNode: SumNode, leftChild: SumNode, rightChild: SumNode) => {
        parentNode.sum = (leftChild ? leftChild.sum : 0) + (rightChild ? rightChild.sum : 0);
      };

      // Query merger to combine query results
      const queryMerger = (nodeA: SumNode, nodeB: SumNode): SumNode => {
        if (nodeA.left === -1) return nodeB;
        if (nodeB.left === -1) return nodeA;
        return {
          sum: nodeA.sum + nodeB.sum,
          left: Math.min(nodeA.left, nodeB.left),
          right: Math.max(nodeA.right, nodeB.right)
        };
      };

      // Leaf updater to change a value
      const leafUpdater = (newVal: number, leafNode: SumNode) => {
        leafNode.sum = newVal;
      };

      const segTree = new SegmentTree<number, SumNode>(
        sourceArray,
        nodeFactory,
        nodeMerger,
        queryMerger,
        leafUpdater
      );

      // Query the sum of a range
      const sum = segTree.query(1, 4);
      expect(sum.sum).toBe(24); // 3 + 5 + 7 + 9

      // Update a value
      segTree.updateLeaf(10, 2); // Changes the value at index 2 from 5 to 10

      const newSum = segTree.query(1, 4);
      expect(newSum.sum).toBe(29); // 3 + 10 + 7 + 9
    });
  });

  describe('Skip List Examples', () => {
    it('should work with the skip list example from README', () => {
      const skipList = new SkipList(10, null);

      skipList.insert(15);
      skipList.insert(5);
      skipList.insert(25);
      skipList.insert(10);

      expect(skipList.find(10)).not.toBeNull();

      skipList.remove(15);

      const array = skipList.toArray();
      expect(array).toEqual([5, 10, 25]);
    });
  });

  describe('Trie Examples', () => {
    it('should work with the trie example from README', () => {
      const trie = new Trie<number>();

      trie.add("apple", 1);
      trie.add("apply", 2);
      trie.add("apricot", 3);
      trie.add("banana", 4);

      expect(trie.get("apple")).toBe(1);
      expect(trie.contains("app")).toBe(true); // as a prefix
      expect(trie.contains("apple")).toBe(true); // full word
    });
  });

  describe('Suffix Tree Examples', () => {
    it('should work with the suffix tree example from README', () => {
      const suffixTree = new SuffixTree("banana");

      expect(suffixTree.findSubstring("ana")).toBe(1);
      expect(suffixTree.findSubstring("bana")).toBe(0);

      const [index, node, count] = suffixTree.findAllSubstring("an");
      expect(index).toBe(1);
      expect(count).toBe(2);

      const repeatedSubstrings = suffixTree.findLongestRepeatedSubstrings(2);
      expect(repeatedSubstrings).toContain('ana');
      expect(repeatedSubstrings).toContain('na');
    });
  });

describe.skip('String Similarity Examples', () => {
    it('should work with the string similarity examples from README', () => {
      const str1 = "night";
      const str2 = "nacht";

      const ngramSimilarity = new NgramSimilarity();
      const jaroDistance = new JaroDistance();
      const levenshteinDistance = new LevenshteinDistance();

      const ngramResult = ngramSimilarity.execute({ str1, str2 });
      const jaroResult = jaroDistance.execute({ str1, str2 });
      const levenshteinResult = levenshteinDistance.execute({ str1, str2 });

      // All should return similarity/distance measures
      expect(typeof ngramResult.result).toBe('number');
      expect(typeof jaroResult.result).toBe('number');
      expect(typeof levenshteinResult.result).toBe('number');

      // N-gram should show high similarity
      expect(ngramResult.result).toBeGreaterThan(0.5);

      // Jaro should also show reasonable similarity
      expect(jaroResult.result).toBeGreaterThan(0.7);

      // Levenshtein should be a small number (edit distance)
      expect(levenshteinResult.result).toBeLessThan(5);
    });
  });

  describe('Graph Algorithm Examples', () => {
    it('should work with BFS traversal', () => {
      // Create a simple graph for testing
      const graph = new AdjacencyListGraph<number>();
      graph.addVertex(1);
      graph.addVertex(2);
      graph.addVertex(3);
      graph.addEdge(1, 2);
      graph.addEdge(2, 3);

      const bfs = new BreadthFirstSearch<number>();
      const result = bfs.execute({
        graph,
        startNode: 1
      });

      expect(result.result).toContain(1);
      expect(result.result).toContain(2);
      expect(result.result).toContain(3);
    });

    it('should work with DFS traversal', () => {
      // Create a simple graph for testing
      const graph = new AdjacencyListGraph<number>();
      graph.addVertex(1);
      graph.addVertex(2);
      graph.addVertex(3);
      graph.addEdge(1, 2);
      graph.addEdge(2, 3);

      const dfs = new DepthFirstSearch<number>();
      const result = dfs.execute({
        graph,
        startNode: 1
      });

      expect(result.result).toContain(1);
      expect(result.result).toContain(2);
      expect(result.result).toContain(3);
    });
  });

  describe('Sorting Algorithm Examples', () => {
    it('should work with counting sort', () => {
      const countingSort = new CountingSort();
      const testArray = [4, 2, 2, 8, 3, 3, 1];

      const result = countingSort.execute({ array: testArray });
      expect(result.result).toEqual([1, 2, 2, 3, 3, 4, 8]);
    });

    it('should work with radix sort', () => {
      const radixSort = new RadixSortNumbers();
      const testArray = [170, 45, 75, 90, 802, 24, 2, 66];

      const result = radixSort.execute({ array: testArray });
      expect(result.result).toEqual([2, 24, 45, 66, 75, 90, 170, 802]);
    });
  });

  describe('Range Query Examples', () => {
    it('should work with sparse table for range queries', () => {
      const values = [1, 3, 2, 7, 9, 11];
      const sparseTable = new SparseTable(values, Math.min);

      // Query minimum in range [1, 4] (values 3, 2, 7, 9)
      const minInRange = sparseTable.query(1, 4);
      expect(minInRange).toBe(2);
    });
  });

  describe('Data Structure Examples', () => {
    it('should work with linked list operations', () => {
      const list = new LinkedList<number>();

      list.add(1);
      list.add(2);
      list.add(3);

      expect(list.size).toBe(3);
      expect(list.toArray()).toEqual([1, 2, 3]);
    });

    it('should work with skip list operations', () => {
      const skipList = new SkipList(4, null);

      skipList.insert(10);
      skipList.insert(20);
      skipList.insert(5);

      expect(skipList.find(10)).not.toBeNull();
      expect(skipList.find(15)).toBeNull();

      const array = skipList.toArray();
      expect(array).toEqual([5, 10, 20]);
    });
  });

  describe('Integration Examples', () => {
    it.skip('should demonstrate algorithm and data structure integration', () => {
      // Create data using a data structure
      const list = new LinkedList<number>();
      [64, 34, 25, 12, 22, 11, 90].forEach(num => list.add(num));

      // Convert to array and sort
      const arrayData = list.toArray();
      const countingSort = new CountingSort();
      const sortedData = countingSort.execute({ array: arrayData });

      // Search in sorted data
      const binarySearch = new BinarySearch<number>();
      const searchResult = binarySearch.execute({
        array: sortedData.result,
        value: 25,
        compareFn: (a, b) => a - b
      });

      expect(searchResult.result).toBe(2); // 25 is at index 2 in sorted array
    });

    it('should demonstrate string processing workflow', () => {
      // Create a trie with words
      const trie = new Trie<number>();
      const words = ['algorithm', 'typescript', 'library', 'testing'];
      words.forEach((word, index) => trie.add(word, index));

      // Find similar words
      const target = 'algorithm';
      const ngramSimilarity = new NgramSimilarity();

      let bestMatch = '';
      let bestScore = 0;

      for (const word of words) {
        if (word !== target) {
          const similarity = ngramSimilarity.execute({
            str1: target,
            str2: word
          });

          if (similarity.result > bestScore) {
            bestScore = similarity.result;
            bestMatch = word;
          }
        }
      }

      expect(bestMatch).toBeDefined();
      expect(bestScore).toBeGreaterThan(0);
    });
  });
});
