import { describe, it, expect } from 'vitest';
import { FibonacciHeap } from '../../../src/data-structures/fibonacci-heap/fibonacciHeap';

describe('FibonacciHeap', () => {
    it('should initialize empty', () => {
        const heap = new FibonacciHeap<number>((a, b) => a - b);
        expect(heap.isEmpty()).toBe(true);
        expect(heap.size).toBe(0);
        expect(heap.peek()).toBeNull();
    });

    it('should insert values', () => {
        const heap = new FibonacciHeap<number>((a, b) => a - b);
        heap.add(10);
        expect(heap.isEmpty()).toBe(false);
        expect(heap.size).toBe(1);
        expect(heap.peek()).toBe(10);

        heap.add(5);
        expect(heap.size).toBe(2);
        expect(heap.peek()).toBe(5);

        heap.add(15);
        expect(heap.size).toBe(3);
        expect(heap.peek()).toBe(5);
    });

    it('should extract min', () => {
        const heap = new FibonacciHeap<number>((a, b) => a - b);
        heap.add(10);
        heap.add(5);
        heap.add(15);

        expect(heap.poll()).toBe(5);
        expect(heap.size).toBe(2);
        expect(heap.peek()).toBe(10);

        expect(heap.poll()).toBe(10);
        expect(heap.size).toBe(1);
        expect(heap.peek()).toBe(15);

        expect(heap.poll()).toBe(15);
        expect(heap.size).toBe(0);
        expect(heap.poll()).toBeNull();
    });

    it('should clear', () => {
        const heap = new FibonacciHeap<number>((a, b) => a - b);
        heap.add(10);
        heap.add(5);
        heap.clear();
        expect(heap.isEmpty()).toBe(true);
        expect(heap.size).toBe(0);
        expect(heap.peek()).toBeNull();
    });

    it('should merge two heaps', () => {
        const heap1 = new FibonacciHeap<number>((a, b) => a - b);
        heap1.add(10);
        heap1.add(20);

        const heap2 = new FibonacciHeap<number>((a, b) => a - b);
        heap2.add(5);
        heap2.add(15);

        heap1.merge(heap2);

        expect(heap1.size).toBe(4);
        expect(heap1.peek()).toBe(5);

        // heap2 should be empty
        expect(heap2.isEmpty()).toBe(true);
        expect(heap2.size).toBe(0);

        // Verify poll order from merged heap
        expect(heap1.poll()).toBe(5);
        expect(heap1.poll()).toBe(10);
        expect(heap1.poll()).toBe(15);
        expect(heap1.poll()).toBe(20);
    });
});
