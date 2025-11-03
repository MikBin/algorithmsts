export class DAryHeap<T> {
  private heap: T[] = [];
  constructor(private compare: (a: T, b: T) => number, private d: number = 4) { if (d<2) throw new Error('d must be >=2'); }
  get size(): number { return this.heap.length; }
  isEmpty(): boolean { return this.heap.length===0; }
  peek(): T | null { return this.isEmpty()?null:this.heap[0]; }
  private parent(i: number): number { return Math.floor((i-1)/this.d); }
  private child(i: number, k: number): number { return i*this.d + k + 1; }
  private swap(i:number,j:number){[this.heap[i],this.heap[j]]=[this.heap[j],this.heap[i]]}
  add(x: T): void { this.heap.push(x); this.bubbleUp(this.heap.length-1); }
  private bubbleUp(i:number){ while(i>0){ const p=this.parent(i); if (this.compare(this.heap[i], this.heap[p])>0){ this.swap(i,p); i=p; } else break; } }
  poll(): T | null { if (this.isEmpty()) return null; const root=this.heap[0]; const last=this.heap.pop()!; if (!this.isEmpty()){ this.heap[0]=last; this.bubbleDown(0);} return root; }
  private bubbleDown(i:number){ while(true){ let best=i; for(let k=0;k<this.d;k++){ const c=this.child(i,k); if (c<this.heap.length && this.compare(this.heap[c], this.heap[best])>0) best=c; } if (best!==i){ this.swap(i,best); i=best; } else break; } }
  clear(): void { this.heap=[]; }

  toJson(): string {
    return JSON.stringify(this.heap);
  }
}
