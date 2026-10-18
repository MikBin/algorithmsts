import { describe, it, expect } from 'vitest';
import { FibonacciHeap } from '../../../src/data-structures/fibonacci-heap';

describe('FibonacciHeap', () => {
  it('adds and polls correctly', () => {
    const heap = new FibonacciHeap<number>((a, b) => a - b);
    heap.add(10);
    heap.add(5);
    heap.add(20);
    expect(heap.poll()).toBe(5);
    expect(heap.poll()).toBe(10);
    expect(heap.poll()).toBe(20);
    expect(heap.poll()).toBeNull();
  });

  it('supports clear, merge, isEmpty, size', () => {
    const h1 = new FibonacciHeap<number>((a, b) => a - b);
    const h2 = new FibonacciHeap<number>((a, b) => a - b);
    expect(h1.isEmpty()).toBe(true);
    expect(h1.size).toBe(0);

    h1.add(10);
    h1.add(20);
    expect(h1.isEmpty()).toBe(false);
    expect(h1.size).toBe(2);

    h2.add(5);
    h2.add(15);
    h1.merge(h2);
    expect(h1.size).toBe(4);
    expect(h2.size).toBe(0);
    expect(h2.isEmpty()).toBe(true);

    expect(h1.poll()).toBe(5);
    expect(h1.poll()).toBe(10);
    expect(h1.poll()).toBe(15);
    expect(h1.poll()).toBe(20);

    h1.add(100);
    h1.clear();
    expect(h1.size).toBe(0);
    expect(h1.isEmpty()).toBe(true);
    expect(h1.peek()).toBeNull();
  });

  it('supports decreaseKey and cascading cuts', () => {
    const heap = new FibonacciHeap<number>((a, b) => a - b);
    heap.add(10);
    heap.add(20);
    const n3 = heap.add(30);
    const n4 = heap.add(40);
    const n5 = heap.add(50);

    // consolidate
    heap.poll(); // removes 10, structure formed

    // we don't know exact structure but can decreaseKey
    heap.decreaseKey(n5, 1);
    expect(heap.peek()).toBe(1);

    heap.decreaseKey(n4, 2);
    expect(heap.poll()).toBe(1); // 50 -> 1
    expect(heap.poll()).toBe(2); // 40 -> 2

    // test throw
    expect(() => heap.decreaseKey(n3, 100)).toThrow();
  });

  it('poll correctly merges children without root ring corruption (TASK-38)', () => {
    // Repro 1: insert 1..9, poll 4 times should not lose elements
    const heap = new FibonacciHeap<number>((a, b) => a - b);
    for (let i = 1; i <= 9; i++) heap.add(i);
    expect(heap.poll()).toBe(1);
    expect(heap.poll()).toBe(2);
    expect(heap.poll()).toBe(3);
    expect(heap.poll()).toBe(4);
    expect(heap.size).toBe(5);

    const remaining = [];
    while (!heap.isEmpty()) remaining.push(heap.poll());
    expect(remaining).toEqual([5, 6, 7, 8, 9]);

    // Repro 2: 20 shuffled uniques drain 20/20
    const heap2 = new FibonacciHeap<number>((a, b) => a - b);
    const shuffled = [15, 3, 7, 2, 19, 1, 10, 8, 14, 20, 6, 4, 18, 11, 9, 12, 16, 5, 13, 17];
    for (const val of shuffled) heap2.add(val);

    const drained = [];
    while (!heap2.isEmpty()) drained.push(heap2.poll());

    expect(drained.length).toBe(20);
    expect(drained).toEqual(Array.from({ length: 20 }, (_, i) => i + 1));
  });

  it('poll correctly clears parent pointers for promoted children preventing decreaseKey corruption', () => {
    const heap = new FibonacciHeap<number>((a, b) => a - b);
    const nodes = [];
    for (let i = 1; i <= 9; i++) {
      nodes.push(heap.add(i));
    }
    expect(heap.poll()).toBe(1);
    expect(heap.poll()).toBe(2);

    // decrease key of node with value 3 to 0
    heap.decreaseKey(nodes[2], 0);

    const drained = [];
    while (!heap.isEmpty()) {
      drained.push(heap.poll());
    }

    expect(drained).toEqual([0, 4, 5, 6, 7, 8, 9]);
    expect(heap.size).toBe(0);
  });
});
