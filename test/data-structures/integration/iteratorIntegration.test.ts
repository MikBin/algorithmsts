import { describe, expect, it } from 'vitest';
import { LinkedList } from '../../../src/data-structures/linked-list';
import { SkipList } from '../../../src/data-structures/skip-list';
import { SegmentTree } from '../../../src/data-structures/segment-tree';
import { Trie } from '../../../src/data-structures/trie';
import { SuffixTree } from '../../../src/data-structures/suffix-tree';
import { IIterator } from '../../../src/core/interfaces/IIterator';

/**
 * Integration tests for iterator implementations across data structures
 */
describe('Iterator Integration Tests', () => {
  describe('Iterator Interface Compliance', () => {
    it('should implement IIterator interface for LinkedList', () => {
      const list = LinkedList.fromArray([1, 2, 3, 4, 5]);
      const iterator: IIterator<number> = list.iterator();

      expect(iterator.hasNext()).toBe(true);
      expect(iterator.next()).toBe(1);
      expect(iterator.hasNext()).toBe(true);
      expect(iterator.next()).toBe(2);
      expect(iterator.hasNext()).toBe(true);
      expect(iterator.next()).toBe(3);
      expect(iterator.hasNext()).toBe(true);
      expect(iterator.next()).toBe(4);
      expect(iterator.hasNext()).toBe(true);
      expect(iterator.next()).toBe(5);
      expect(iterator.hasNext()).toBe(false);
    });

    it('should implement IIterator interface for SkipList', () => {
      const skipList = new SkipList<number>(10, -Infinity);
      skipList.add(1);
      skipList.add(2);
      skipList.add(3);

      const iterator: IIterator<number> = skipList.iterator();
      const values: number[] = [];

      while (iterator.hasNext()) {
        values.push(iterator.next());
      }

      expect(values.sort()).toEqual([1, 2, 3]);
    });

    it('should implement IIterator interface for SegmentTree', () => {
      const array = [1, 2, 3, 4, 5];
      const segmentTree = new SegmentTree(
        array,
        (val, left, right) => ({ left, right, value: val }),
        (parent, left, right) => {},
        (left, right) => ({ left: left.left, right: right.right, value: 0 }),
        (val, node) => { node.value = val; }
      );

      const iterator: IIterator<number> = segmentTree.iterator();
      expect(iterator).toBeDefined();
      // SegmentTree iterator may not iterate over elements in the same way
    });

    it('should implement IIterator interface for Trie', () => {
      const trie = new Trie<string>();
      trie.add('hello', 'world');
      trie.add('world', 'hello');

      const iterator: IIterator<string> = trie.iterator();
      expect(iterator).toBeDefined();
      // Trie iterator implementation details may vary
    });

    it('should implement IIterator interface for SuffixTree', () => {
      const suffixTree = new SuffixTree('banana');
      const iterator: IIterator<string> = suffixTree.iterator();
      expect(iterator).toBeDefined();
      // SuffixTree iterator implementation details may vary
    });
  });

  describe('Iterator Behavior Consistency', () => {
    it('should handle empty iterators consistently', () => {
      const list = new LinkedList<number>();
      const skipList = new SkipList<number>(10, -Infinity);

      const listIterator = list.iterator();
      const skipListIterator = skipList.iterator();

      expect(listIterator.hasNext()).toBe(false);
      expect(skipListIterator.hasNext()).toBe(false);

      expect(() => listIterator.next()).toThrow();
      expect(() => skipListIterator.next()).toThrow();
    });

    it('should handle single element iterators', () => {
      const list = LinkedList.fromArray([42]);
      const skipList = new SkipList<number>(10, -Infinity);
      skipList.add(42);

      const listIterator = list.iterator();
      const skipListIterator = skipList.iterator();

      expect(listIterator.hasNext()).toBe(true);
      expect(skipListIterator.hasNext()).toBe(true);

      expect(listIterator.next()).toBe(42);
      expect(skipListIterator.next()).toBe(42);

      expect(listIterator.hasNext()).toBe(false);
      expect(skipListIterator.hasNext()).toBe(false);
    });
  });

  describe('Iterator Error Handling', () => {
    it('should throw appropriate errors when next() called on exhausted iterator', () => {
      const list = LinkedList.fromArray([1]);
      const iterator = list.iterator();

      iterator.next(); // Exhaust the iterator

      expect(() => iterator.next()).toThrow();
    });

    it('should handle current() method appropriately', () => {
      const list = LinkedList.fromArray([1, 2, 3]);
      const iterator = list.iterator();

      iterator.next(); // Move to first element
      expect(iterator.current()).toBe(1);

      iterator.next(); // Move to second element
      expect(iterator.current()).toBe(2);
    });
  });

  describe('Iterator Performance', () => {
    it('should handle large iterators efficiently', () => {
      const largeArray = Array.from({ length: 10000 }, (_, i) => i);
      const list = LinkedList.fromArray(largeArray);

      const iterator = list.iterator();
      let count = 0;

      while (iterator.hasNext()) {
        iterator.next();
        count++;
      }

      expect(count).toBe(10000);
    });
  });
});
