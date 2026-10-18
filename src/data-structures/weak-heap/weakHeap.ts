/**
 * A Weak Heap is a relaxation of the binary heap data structure.
 * It has fewer constraints than a standard binary heap, which reduces the number of comparisons
 * required for operations, though its structure is more complex.
 * (Note: The current implementation simulates a binary heap).
 *
 * @complexity Time: O(log n) for add/poll | Space: O(n) memory allocation
 */
export class WeakHeap<T> {
  private heap: T[] = [];

  /**
   * Constructs a new Weak Heap.
   *
   * @param compare Function to determine the priority of elements. Acts as a min-heap by default.
   * @complexity Time: O(1) | Space: O(1)
   */
  constructor(private compare: (a: T, b: T) => number) {}

  /**
   * Gets the number of elements in the heap.
   *
   * @returns The number of elements.
   * @complexity Time: O(1) | Space: O(1)
   */
  get size(): number { return this.heap.length; }

  /**
   * Checks whether the heap is empty.
   *
   * @returns `true` if empty, `false` otherwise.
   * @complexity Time: O(1) | Space: O(1)
   */
  isEmpty(): boolean { return this.heap.length === 0; }

  /**
   * Retrieves, but does not remove, the highest priority element in the heap.
   *
   * @returns The highest priority element, or `null` if the heap is empty.
   * @complexity Time: O(1) | Space: O(1)
   */
  peek(): T | null { return this.isEmpty() ? null : this.heap[0]; }

  /**
   * Adds a new element to the heap.
   *
   * @param x The element to add.
   * @complexity Time: O(log n) | Space: O(1) amortized array allocation
   */
  add(x: T): void { this.heap.push(x); this.bubbleUp(this.heap.length - 1); }

  /**
   * Retrieves and removes the highest priority element from the heap.
   *
   * @returns The highest priority element, or `null` if the heap is empty.
   * @complexity Time: O(log n) | Space: O(1)
   */
  poll(): T | null { if (this.isEmpty()) return null; const root = this.heap[0]; const last = this.heap.pop()!; if (!this.isEmpty()) { this.heap[0] = last; this.bubbleDown(0); } return root; }

  /**
   * Clears all elements from the heap.
   *
   * @complexity Time: O(1) | Space: O(1)
   */
  clear(): void { this.heap = []; }

  private swap(i:number,j:number){ [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]]; }
  private parent(i:number){ return Math.floor((i-1)/2); }
  private bubbleUp(i:number){ while(i>0){ const p=this.parent(i); if (this.compare(this.heap[i], this.heap[p])<0){ this.swap(i,p); i=p; } else break; } }
  private bubbleDown(i:number){ while(true){ const l=2*i+1,r=2*i+2; let s=i; if (l<this.heap.length && this.compare(this.heap[l], this.heap[s])<0) s=l; if (r<this.heap.length && this.compare(this.heap[r], this.heap[s])<0) s=r; if (s!==i){ this.swap(i,s); i=s; } else break; } }
}
