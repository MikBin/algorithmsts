import { describe, it, expect } from 'vitest';
import { BinomialHeap } from '../../../src/data-structures/binomial-heap/binomialHeap';

describe('BinomialHeap Extra', () => {
  it('handles empty cases', () => {
    const heap = new BinomialHeap<number>((a, b) => a - b);
    expect(heap.size).toBe(0);
    expect(heap.poll()).toBeNull();
  });

  it('handles single elements', () => {
    const heap = new BinomialHeap<number>((a, b) => a - b);
    heap.add(42);
    expect(heap.size).toBe(1);
    expect(heap.poll()).toBe(42);
  });

  it('handles duplicates', () => {
    const heap = new BinomialHeap<number>((a, b) => a - b);
    heap.add(10);
    heap.add(10);
    expect(heap.size).toBe(2);
    expect(heap.poll()).toBe(10);
    expect(heap.poll()).toBe(10);
  });
});
