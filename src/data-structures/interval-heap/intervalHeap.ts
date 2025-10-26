export class IntervalHeap<T> {
  private a: (T | undefined)[] = [];
  constructor(private compare: (a: T, b: T) => number) {}
  get size(): number { return this.a.length; }
  isEmpty(): boolean { return this.a.length===0; }
  peekMin(): T | null { return this.isEmpty()?null:this.a[0]!; }
  peekMax(): T | null { if (this.isEmpty()) return null; if (this.a.length===1) return this.a[0]!; return this.a[1]!; }

  add(x: T): void {
    if (this.a.length%2===0) { // start new interval
      this.a.push(x);
      this.bubbleUpMin(this.a.length-1);
    } else {
      const last = this.a.length-1;
      if (this.compare(x, this.a[last] as T) < 0) { // x becomes min
        const temp = this.a[last]; this.a[last] = x; this.a.push(temp!);
        this.bubbleUpMin(last);
        this.bubbleUpMax(this.a.length-1);
      } else {
        this.a.push(x);
        this.bubbleUpMax(this.a.length-1);
      }
    }
  }

  pollMin(): T | null { if (this.isEmpty()) return null; const min = this.a[0]!; const last = this.a.pop()!; if (this.a.length===0) return min; if (this.a.length%2===1){ // last is max-only; move its pair's min into 0
      this.a[0] = this.a.pop()!; this.a.push(last); this.trickleDownMin(0);
    } else { this.a[0] = last; this.trickleDownMin(0); }
    return min; }

  pollMax(): T | null { if (this.isEmpty()) return null; if (this.a.length===1){ return this.a.pop()!; } const max = this.a[1]!; const last = this.a.pop()!; if (this.a.length===1) return max; if (this.a.length%2===0){ this.a[1] = this.a.pop()!; this.a.push(last); this.trickleDownMax(1); } else { this.a[1] = last; this.trickleDownMax(1); } return max; }

  private parent(i:number): number { return ((i>>1)-1)&~1; }
  private children(i:number): [number, number] { const l = ((i+2)<<1)-2; return [l, l+2]; }
  private swap(i:number,j:number){ const t=this.a[i]; this.a[i]=this.a[j]; this.a[j]=t; }
  private ensureOrder(i:number){ if ((i|1)<this.a.length && this.compare(this.a[i] as T, this.a[i|1] as T) > 0) this.swap(i, i|1); }

  private bubbleUpMin(i:number){ this.ensureOrder(i); while(i>0){ const p=this.parent(i); if (this.compare(this.a[i] as T, this.a[p] as T) < 0){ this.swap(i,p); i=p; this.ensureOrder(i); } else break; } }
  private bubbleUpMax(i:number){ this.ensureOrder(i^1); while(i>1){ const p=(this.parent(i)|1); if (this.compare(this.a[i] as T, this.a[p] as T) > 0){ this.swap(i,p); i=p; this.ensureOrder(i^1); } else break; } }

  private trickleDownMin(i:number){ while(true){ const [l,r]=this.children(i); let m=i; for (const c of [l,l+1,r,r+1]) if (c<this.a.length && (c%2===0) && this.compare(this.a[c] as T, this.a[m] as T) < 0) m=c; if (m===i) break; this.swap(i,m); this.ensureOrder(m); i=m; } }
  private trickleDownMax(i:number){ while(true){ const [l,r]=this.children(i&~1); let m=i; for (const c of [l,l+1,r,r+1]) if (c<this.a.length && (c%2===1) && this.compare(this.a[c] as T, this.a[m] as T) > 0) m=c; if (m===i) break; this.swap(i,m); this.ensureOrder(m^1); i=m; } }
}
