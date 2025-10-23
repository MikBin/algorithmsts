import { describe, expect, it } from 'vitest';
import { LinkedList } from '../../../src/data-structures/linked-list';
import { SkipList } from '../../../src/data-structures/skip-list';
import { SegmentTree } from '../../../src/data-structures/segment-tree';
import { Trie } from '../../../src/data-structures/trie';
import { SuffixTree } from '../../../src/data-structures/suffix-tree';

/**
 * Integration tests for data structure interactions
 */
describe('Data Structure Integration Tests', () => {
  describe('Cross-Structure Operations', () => {
    it('should convert LinkedList to array and use in SegmentTree', () => {
      const list = LinkedList.fromArray([1, 2, 3, 4, 5]);
      const array = list.toArray();

      // Create segment tree from linked list data
      const segmentTree = new SegmentTree(
        array,
        (val, left, right) => ({ left, right, value: val, min: val, max: val, sum: val }),
        (parent, left, right) => {
          parent.min = Math.min(left.min, right.min);
          parent.max = Math.max(left.max, right.max);
          parent.sum = left.sum + right.sum;
        },
        (left, right) => ({
          left: left.left,
          right: right.right,
          min: Math.min(left.min, right.min),
          max: Math.max(left.max, right.max),
          sum: left.sum + right.sum
        }),
        (val, node) => {
          node.value = val;
          node.min = val;
          node.max = val;
          node.sum = val;
        }
      );

      expect(segmentTree.size).toBe(5);
      const query = segmentTree.query(0, 4);
      expect(query.sum).toBe(15);
    });

    it('should use SkipList for indexing and Trie for prefix search', () => {
      const skipList = new SkipList<number>(10, -Infinity);
      const trie = new Trie<string>();

      const words = ['apple', 'application', 'apply', 'banana', 'band'];

      // Add to both structures
      words.forEach((word, index) => {
        skipList.add(index);
        trie.add(word, word);
      });

      expect(skipList.size).toBe(5);
      expect(trie.contains('apple')).toBe(true);
    });

    it('should use SuffixTree for substring search across multiple data structures', () => {
      const suffixTree = new SuffixTree('linkedlist');
      suffixTree.addString('skiplist');
      suffixTree.addString('segmenttree');

      expect(suffixTree.findSubstring('list')).not.toBe(-1);
      expect(suffixTree.findSubstring('tree')).not.toBe(-1);
    });
  });

  describe('Iterator Integration', () => {
    it('should iterate over multiple structures consistently', () => {
      const list = LinkedList.fromArray([1, 2, 3]);
      const skipList = new SkipList<number>(10, -Infinity);
      skipList.add(1);
      skipList.add(2);
      skipList.add(3);

      const listIterator = list.iterator();
      const skipListIterator = skipList.iterator();

      const listValues: number[] = [];
      const skipListValues: number[] = [];

      while (listIterator.hasNext()) {
        listValues.push(listIterator.next());
      }

      while (skipListIterator.hasNext()) {
        skipListValues.push(skipListIterator.next());
      }

      expect(listValues.sort()).toEqual(skipListValues.sort());
    });
  });

  describe('Performance Integration', () => {
    it('should handle large datasets across structures', () => {
      const largeArray = Array.from({ length: 1000 }, (_, i) => i);

      const list = LinkedList.fromArray(largeArray);
      const skipList = new SkipList<number>(16, -Infinity);

      largeArray.forEach(val => skipList.add(val));

      expect(list.size).toBe(1000);
      expect(skipList.size).toBe(1000);
    });
  });

  describe('Error Handling Integration', () => {
    it('should handle edge cases consistently across structures', () => {
      const list = new LinkedList<number>();
      const skipList = new SkipList<number>(10, -Infinity);

      expect(list.isEmpty()).toBe(true);
      expect(skipList.size).toBe(0);

      expect(list.contains(1)).toBe(false);
      expect(skipList.contains(1)).toBe(false);
    });
  });
});
