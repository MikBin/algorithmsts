import { describe, it, expect } from 'vitest';
import { BinaryHeap } from '../../../src/data-structures/binary-heap';
import { Comparator } from '../../../src/data-structures/binary-heap/interfaces';

describe('BinaryHeap', () => {
  const maxComparator: Comparator<number> = (a, b) => a - b;
  const minComparator: Comparator<number> = (a, b) => b - a;

  describe('Max-Heap', () => {
    it('should create an empty heap', () => {
      const heap = new BinaryHeap<number>([], maxComparator);
      expect(heap.isEmpty()).toBe(true);
      expect(heap.size).toBe(0);
      expect(heap.peek()).toBeNull();
    });

    it('should create a heap from an array', () => {
      const heap = new BinaryHeap([3, 1, 4, 1, 5, 9, 2, 6], maxComparator);
      expect(heap.peek()).toBe(9);
      expect(heap.size).toBe(8);
    });

    it('should add items to the heap', () => {
      const heap = new BinaryHeap<number>([], maxComparator);
      heap.add(5);
      expect(heap.peek()).toBe(5);
      heap.add(10);
      expect(heap.peek()).toBe(10);
      heap.add(2);
      expect(heap.peek()).toBe(10);
    });

    it('should poll items from the heap in descending order', () => {
      const heap = new BinaryHeap([3, 1, 4, 1, 5, 9, 2, 6], maxComparator);
      const sorted: number[] = [];
      while (!heap.isEmpty()) {
        sorted.push(heap.poll()!);
      }
      expect(sorted).toEqual([9, 6, 5, 4, 3, 2, 1, 1]);
    });
  });

  describe('Min-Heap', () => {
    it('should create an empty heap', () => {
      const heap = new BinaryHeap<number>([], minComparator);
      expect(heap.isEmpty()).toBe(true);
      expect(heap.size).toBe(0);
      expect(heap.peek()).toBeNull();
    });

    it('should create a heap from an array', () => {
      const heap = new BinaryHeap([3, 1, 4, 1, 5, 9, 2, 6], minComparator);
      expect(heap.peek()).toBe(1);
      expect(heap.size).toBe(8);
    });

    it('should add items to the heap', () => {
      const heap = new BinaryHeap<number>([], minComparator);
      heap.add(5);
      expect(heap.peek()).toBe(5);
      heap.add(10);
      expect(heap.peek()).toBe(5);
      heap.add(2);
      expect(heap.peek()).toBe(2);
    });

    it('should poll items from the heap in ascending order', () => {
      const heap = new BinaryHeap([3, 1, 4, 1, 5, 9, 2, 6], minComparator);
      const sorted: number[] = [];
      while (!heap.isEmpty()) {
        sorted.push(heap.poll()!);
      }
      expect(sorted).toEqual([1, 1, 2, 3, 4, 5, 6, 9]);
    });
  });

  describe('Utility Methods', () => {
    it('should clear the heap', () => {
      const heap = new BinaryHeap([1, 2, 3], maxComparator);
      heap.clear();
      expect(heap.isEmpty()).toBe(true);
      expect(heap.size).toBe(0);
    });

    it('should clone the heap', () => {
      const heap = new BinaryHeap([1, 2, 3], maxComparator);
      const clone = heap.clone();
      expect(clone.size).toBe(3);
      expect(clone.poll()).toBe(3);
      expect(heap.size).toBe(3);
    });

    it('should merge two heaps', () => {
      const heap1 = new BinaryHeap([1, 5], maxComparator);
      const heap2 = new BinaryHeap([2, 6], maxComparator);
      const merged = heap1.merge(heap2);
      expect(merged.size).toBe(4);
      expect(merged.poll()).toBe(6);
      expect(merged.poll()).toBe(5);
      expect(merged.poll()).toBe(2);
      expect(merged.poll()).toBe(1);
    });

    it('should replace the root element', () => {
      const heap = new BinaryHeap([1, 5, 3], maxComparator);
      const replaced = heap.replace(10);
      expect(replaced).toBe(5);
      expect(heap.peek()).toBe(10);
      expect(heap.size).toBe(3);
    });

    it('should handle replacing on an empty heap', () => {
      const heap = new BinaryHeap<number>([], maxComparator);
      const replaced = heap.replace(10);
      expect(replaced).toBeNull();
      expect(heap.peek()).toBe(10);
      expect(heap.size).toBe(1);
    });
  });

  describe('Iterator', () => {
    it('should iterate over the heap', () => {
      const heap = new BinaryHeap([5, 3, 8, 1, 4], maxComparator);
      const values = [...heap];
      expect(values).toEqual([8, 4, 5, 1, 3]);
    });
  });
});
