export class WeakHeap<T> {
  private heap: T[] = [];
  constructor(private compare: (a: T, b: T) => number) {}
  get size(): number { return this.heap.length; }
  isEmpty(): boolean { return this.heap.length === 0; }
  peek(): T | null { return this.isEmpty() ? null : this.heap[0]; }
  add(x: T): void { this.heap.push(x); this.bubbleUp(this.heap.length - 1); }
  poll(): T | null { if (this.isEmpty()) return null; const root = this.heap[0]; const last = this.heap.pop()!; if (!this.isEmpty()) { this.heap[0] = last; this.bubbleDown(0); } return root; }
  clear(): void { this.heap = []; }
  private swap(i:number,j:number){ [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]]; }
  private parent(i:number){ return Math.floor((i-1)/2); }
  private bubbleUp(i:number){ while(i>0){ const p=this.parent(i); if (this.compare(this.heap[i], this.heap[p])<0){ this.swap(i,p); i=p; } else break; } }
  private bubbleDown(i:number){ while(true){ const l=2*i+1,r=2*i+2; let s=i; if (l<this.heap.length && this.compare(this.heap[l], this.heap[s])<0) s=l; if (r<this.heap.length && this.compare(this.heap[r], this.heap[s])<0) s=r; if (s!==i){ this.swap(i,s); i=s; } else break; } }
}
