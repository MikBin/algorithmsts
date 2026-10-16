import { describe, it, expect } from 'vitest';
import { BinomialHeap } from '../../../src/data-structures/binomial-heap/binomialHeap';

describe('BinomialHeap', () => {
  it('should correctly add and poll items without hanging', () => {
    const heap = new BinomialHeap<number>((a, b) => a - b);
    heap.add(1);
    heap.add(2);
    expect(heap.size).toBe(2);
    expect(heap.poll()).toBe(1);
    expect(heap.poll()).toBe(2);
    expect(heap.poll()).toBe(null);
  });

  it('should merge two heaps correctly and preserve all elements', () => {
    const heap1 = new BinomialHeap<number>((a, b) => a - b);
    heap1.add(5);
    heap1.add(1);
    heap1.add(3);

    const heap2 = new BinomialHeap<number>((a, b) => a - b);
    heap2.add(4);
    heap2.add(2);
    heap2.add(6);

    heap1.merge(heap2);

    expect(heap1.size).toBe(6);
    expect(heap2.size).toBe(0);

    expect(heap1.poll()).toBe(1);
    expect(heap1.poll()).toBe(2);
    expect(heap1.poll()).toBe(3);
    expect(heap1.poll()).toBe(4);
    expect(heap1.poll()).toBe(5);
    expect(heap1.poll()).toBe(6);
  });

  it('property test: heap contents match sorted array across randomized merge sequences', () => {
    const numHeaps = 5;
    const elementsPerHeap = 20;
    const heaps: BinomialHeap<number>[] = [];
    const allElements: number[] = [];

    for (let i = 0; i < numHeaps; i++) {
      const heap = new BinomialHeap<number>((a, b) => a - b);
      for (let j = 0; j < elementsPerHeap; j++) {
        const val = Math.floor(Math.random() * 1000);
        heap.add(val);
        allElements.push(val);
      }
      heaps.push(heap);
    }

    let mergedHeap = heaps[0];
    for (let i = 1; i < numHeaps; i++) {
      mergedHeap.merge(heaps[i]);
    }

    allElements.sort((a, b) => a - b);

    expect(mergedHeap.size).toBe(allElements.length);

    for (const expectedVal of allElements) {
      expect(mergedHeap.poll()).toBe(expectedVal);
    }
    expect(mergedHeap.poll()).toBe(null);
  });
});
