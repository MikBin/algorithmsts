import { describe, expect, it } from 'vitest';
import { LinkedListAdapter } from '../../src/compatibility/adapters/LinkedListAdapter';
import { SkipListAdapter } from '../../src/compatibility/adapters/SkipListAdapter';
import { SegmentTreeAdapter } from '../../src/compatibility/adapters/SegmentTreeAdapter';
import { TrieAdapter } from '../../src/compatibility/adapters/TrieAdapter';
import { SuffixTreeAdapter } from '../../src/compatibility/adapters/SuffixTreeAdapter';

/**
 * Tests for backward compatibility adapters
 */
describe('Compatibility Adapters', () => {
  describe('LinkedListAdapter', () => {
    it('should provide legacy LinkedList API', () => {
      const adapter = new LinkedListAdapter<number>();

      expect(adapter.isEmpty()).toBe(true);
      expect(adapter.size()).toBe(0);

      adapter.add(1);
      adapter.add(2);
      adapter.add(3);

      expect(adapter.isEmpty()).toBe(false);
      expect(adapter.size()).toBe(3);
      expect(adapter.first()).toBe(1);
      expect(adapter.last()).toBe(3);
      expect(adapter.toArray()).toEqual([1, 2, 3]);
    });

    it('should support legacy methods', () => {
      const adapter = new LinkedListAdapter<number>();
      adapter.add(1);
      adapter.add(2);

      expect(adapter.pop()).toBe(2);
      expect(adapter.shift()).toBe(1);
      expect(adapter.isEmpty()).toBe(true);
    });

    it('should support insertAt and removeAt', () => {
      const adapter = new LinkedListAdapter<number>();
      adapter.add(1);
      adapter.add(3);

      expect(adapter.insertAt(1, 2)).toBe(true);
      expect(adapter.toArray()).toEqual([1, 2, 3]);

      expect(adapter.removeAt(1)).toBe(2);
      expect(adapter.toArray()).toEqual([1, 3]);
    });
  });

  describe('SkipListAdapter', () => {
    it('should provide legacy SkipList API', () => {
      const adapter = new SkipListAdapter<number>(10, -Infinity);

      expect(adapter.size()).toBe(0);

      adapter.insert(1);
      adapter.insert(2);
      adapter.insert(3);

      expect(adapter.size()).toBe(3);
      expect(adapter.find(1)?.value).toBe(1);
      expect(adapter.find(2)?.value).toBe(2);
      expect(adapter.find(4)).toBe(null);
    });

    it('should support legacy remove operations', () => {
      const adapter = new SkipListAdapter<number>(10, -Infinity);
      adapter.insert(1);
      adapter.insert(2);
      adapter.insert(3);

      adapter.remove(2);
      expect(adapter.find(2)).toBe(null);
      expect(adapter.size()).toBe(2);
    });

    it('should handle multiple insertions of same value', () => {
      const adapter = new SkipListAdapter<number>(10, -Infinity);
      adapter.insert(1);
      adapter.insert(1);
      adapter.insert(1);

      const node = adapter.find(1);
      expect(node?.value).toBe(1);
      expect(node?.count).toBe(3);
      expect(adapter.size()).toBe(1);
    });
  });

  describe('SegmentTreeAdapter', () => {
    it('should provide legacy SegmentTree API', () => {
      // Define a custom node interface for sum queries
      interface SumNode {
        left: number;
        right: number;
        sum: number;
      }

      // Create a simple segment tree for sum queries
      const sourceArray = [1, 2, 3, 4, 5];
      const segmentNodeFactory = (value: number, left: number, right: number): SumNode => ({
        left,
        right,
        sum: value
      });
      const segmentNodeMerger = (parent: SumNode, left: SumNode, right: SumNode): void => {
        parent.sum = left.sum + right.sum;
      };
      const segmentNodeQuery = (a: SumNode, b: SumNode): SumNode => {
        if (a.left === -1 && a.right === -1) return b;
        if (b.left === -1 && b.right === -1) return a;
        return { sum: a.sum + b.sum, left: a.left, right: b.right };
      };
      const segmentLeafUpdater = (value: number, leaf: SumNode): void => {
        leaf.sum = value;
      };

      const adapter = new SegmentTreeAdapter(
        sourceArray,
        segmentNodeFactory,
        segmentNodeMerger,
        segmentNodeQuery,
        segmentLeafUpdater
      );

      // Test basic functionality - adapter should delegate to new implementation
      expect(adapter).toBeDefined();

      // Test query method
      const result = adapter.query(0, 4);
      expect((result as SumNode).sum).toBe(15); // 1+2+3+4+5

      // Test update method
      adapter.updateLeaf(10, 2); // Update index 2 from 3 to 10
      const updatedResult = adapter.query(0, 4);
      expect((updatedResult as SumNode).sum).toBe(22); // 1+2+10+4+5
    });
  });

  describe('TrieAdapter', () => {
    it('should provide legacy Trie API', () => {
      const adapter = new TrieAdapter();

      adapter.add('hello', 'world');
      adapter.add('world', 'hello');

      expect(adapter.contains('hello')).toBe(true);
      expect(adapter.contains('world')).toBe(true);
      expect(adapter.contains('notfound')).toBe(false);
    });

    it('should support legacy operations', () => {
      const adapter = new TrieAdapter();

      adapter.add('test', 'value');
      expect(adapter.find('test')).toBe('value');

      adapter.remove('test');
      expect(adapter.contains('test')).toBe(false);
    });
  });

  describe('SuffixTreeAdapter', () => {
    it('should provide legacy SuffixTree API', () => {
      const adapter = new SuffixTreeAdapter('banana');

      expect(adapter.findSubstring('ana')).toBe(1);
      expect(adapter.findSubstring('notfound')).toBe(-1);
    });

    it('should support legacy operations', () => {
      const adapter = new SuffixTreeAdapter('mississippi');

      const [, , count] = adapter.findAllSubstring('is');
      expect(count).toBe(2);

      const longest = adapter.findLongestRepeatedSubstrings(1);
      expect(longest[0]).toBe('issi');
    });
  });

  describe('Adapter Interface Compliance', () => {
    it('should all adapters implement expected interfaces', () => {
      const linkedListAdapter = new LinkedListAdapter<number>();
      const skipListAdapter = new SkipListAdapter<number>(10, -Infinity);
      const trieAdapter = new TrieAdapter();
      const suffixTreeAdapter = new SuffixTreeAdapter('test');

      // Test that adapters provide expected methods
      expect(typeof linkedListAdapter.add).toBe('function');
      expect(typeof linkedListAdapter.size).toBe('function');

      expect(typeof skipListAdapter.insert).toBe('function');
      expect(typeof skipListAdapter.find).toBe('function');

      expect(typeof trieAdapter.add).toBe('function');
      expect(typeof trieAdapter.contains).toBe('function');

      expect(typeof suffixTreeAdapter.findSubstring).toBe('function');
    });
  });

  describe('Adapter Error Handling', () => {
    it('should handle edge cases gracefully', () => {
      const linkedListAdapter = new LinkedListAdapter<number>();
      const skipListAdapter = new SkipListAdapter<number>(10, -Infinity);

      // Empty operations
      expect(linkedListAdapter.pop()).toBe(null);
      expect(linkedListAdapter.shift()).toBe(null);

      expect(skipListAdapter.find(1)).toBe(null);
      skipListAdapter.remove(1); // Should not throw
    });
  });
});
