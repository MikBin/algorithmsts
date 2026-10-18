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
});
