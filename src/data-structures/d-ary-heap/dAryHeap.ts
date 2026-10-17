/**
 * @title D-Ary Heap
 * @notice A generalization of the binary heap where each node has d children instead of 2.
 * @dev Often provides better performance than binary heaps for dense graphs (e.g. in Dijkstra's algorithm) when d is tuned appropriately. By default, it follows min-heap behavior when using `(a, b) => a - b`.
 * @template T The type of elements stored in the heap.
 */
export class DAryHeap<T> {
  private heap: T[] = [];

  /**
   * @notice Constructs a new D-Ary Heap.
   * @param compare The comparison function used to order elements.
   * @param d The number of children each node can have. Must be >= 2.
   * @complexity Time: O(1) | Space: O(1)
   */
  constructor(private compare: (a: T, b: T) => number, private d: number = 4) { if (d<2) throw new Error('d must be >=2'); }

  /**
   * @notice Gets the number of elements in the heap.
   * @returns The number of elements.
   * @complexity Time: O(1) | Space: O(1)
   */
  get size(): number { return this.heap.length; }

  /**
   * @notice Checks if the heap is empty.
   * @returns `true` if the heap contains no elements, `false` otherwise.
   * @complexity Time: O(1) | Space: O(1)
   */
  isEmpty(): boolean { return this.heap.length===0; }

  /**
   * @notice Returns the root element of the heap without removing it.
   * @returns The extreme element, or `null` if the heap is empty.
   * @complexity Time: O(1) | Space: O(1)
   */
  peek(): T | null { return this.isEmpty()?null:this.heap[0]; }
  private parent(i: number): number { return Math.floor((i-1)/this.d); }
  private child(i: number, k: number): number { return i*this.d + k + 1; }
  private swap(i:number,j:number){[this.heap[i],this.heap[j]]=[this.heap[j],this.heap[i]]}
  /**
   * @notice Adds a new element to the heap.
   * @param x The element to add.
   * @complexity Time: O(log_d n) | Space: O(1)
   */
  add(x: T): void { this.heap.push(x); this.bubbleUp(this.heap.length-1); }
  private bubbleUp(i:number){ while(i>0){ const p=this.parent(i); if (this.compare(this.heap[i], this.heap[p])<0){ this.swap(i,p); i=p; } else break; } }

  /**
   * @notice Removes and returns the root element from the heap.
   * @returns The extreme element, or `null` if the heap is empty.
   * @complexity Time: O(d * log_d n) | Space: O(1)
   */
  poll(): T | null { if (this.isEmpty()) return null; const root=this.heap[0]; const last=this.heap.pop()!; if (!this.isEmpty()){ this.heap[0]=last; this.bubbleDown(0);} return root; }
  private bubbleDown(i:number){ while(true){ let best=i; for(let k=0;k<this.d;k++){ const c=this.child(i,k); if (c<this.heap.length && this.compare(this.heap[c], this.heap[best])<0) best=c; } if (best!==i){ this.swap(i,best); i=best; } else break; } }

  /**
   * @notice Removes all elements from the heap.
   * @complexity Time: O(1) | Space: O(1)
   */
  clear(): void { this.heap=[]; }

  /**
   * @notice Serializes the heap into a JSON string.
   * @returns A string representing the internal array.
   * @complexity Time: O(n) | Space: O(n)
   */
  toJson(): string {
    return JSON.stringify(this.heap);
  }
}
