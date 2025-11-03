export class MinMaxHeap<T> {
  private a: T[] = [];
  constructor(private compare: (a: T, b: T) => number) {}
  get size(): number { return this.a.length; }
  isEmpty(): boolean { return this.a.length===0; }
  peekMin(): T | null { return this.isEmpty()?null:this.a[0]; }
  peekMax(): T | null { if (this.a.length<=1) return this.a[0] ?? null; if (this.a.length===2) return this.a[1]; return this.compare(this.a[1], this.a[2])>0?this.a[1]:this.a[2]; }
  add(x: T): void { this.a.push(x); this.bubbleUp(this.a.length-1); }
  pollMin(): T | null { return this.removeAt(0); }
  pollMax(): T | null { if (this.a.length<=1) return this.a.pop() ?? null; const idx = (this.a.length===2 || this.compare(this.a[1], this.a[2])>0) ? 1 : 2; return this.removeAt(idx); }
  clear(): void { this.a=[]; }
  private level(i:number):number { return Math.floor(Math.log2(i+1)); }
  private parent(i:number):number { return Math.floor((i-1)/2); }
  private grandparent(i:number):number { return Math.floor((i-3)/4); }
  private children(i:number):number[]{ return [2*i+1,2*i+2]; }
  private isMinLevel(i:number):boolean { return (this.level(i)%2)===0; }
  private swap(i:number,j:number){[this.a[i],this.a[j]]=[this.a[j],this.a[i]]}
  private cmp(a:T,b:T){ return this.compare(a,b); }

  private bubbleUp(i:number){ if (i===0) return; const p=this.parent(i);
    if (this.isMinLevel(i)) {
      if (this.cmp(this.a[i], this.a[p])>0){ this.swap(i,p); this.bubbleUpMax(p); }
      else this.bubbleUpMin(i);
    } else {
      if (this.cmp(this.a[i], this.a[p])<0){ this.swap(i,p); this.bubbleUpMin(p); }
      else this.bubbleUpMax(i);
    }
  }
  private bubbleUpMin(i:number){ while(i>=3){ const gp=this.grandparent(i); if (this.cmp(this.a[i], this.a[gp])<0){ this.swap(i,gp); i=gp; } else break; } }
  private bubbleUpMax(i:number){ while(i>=3){ const gp=this.grandparent(i); if (this.cmp(this.a[i], this.a[gp])>0){ this.swap(i,gp); i=gp; } else break; } }

  private removeAt(i:number): T | null { if (i>=this.a.length) return null; const last=this.a.pop()!; if (i===this.a.length) return last; const ret=this.a[i]; this.a[i]=last; this.trickleDown(i); return ret; }
  private trickleDown(i:number){ if (this.isMinLevel(i)) this.trickleDownMin(i); else this.trickleDownMax(i); }
  private trickleDownMin(i:number){ while(true){ const m = this.minDescendantIndex(i); if (m===-1) break; if (m>=this.a.length) break; if (this.cmp(this.a[m], this.a[i])<0){ this.swap(i,m); if (m>=3){ const p=this.parent(m); if (this.cmp(this.a[m], this.a[p])>0) this.swap(m,p); i=m; } else break; } else break; } }
  private trickleDownMax(i:number){ while(true){ const m = this.maxDescendantIndex(i); if (m===-1) break; if (this.cmp(this.a[m], this.a[i])>0){ this.swap(i,m); if (m>=3){ const p=this.parent(m); if (this.cmp(this.a[m], this.a[p])<0) this.swap(m,p); i=m; } else break; } else break; } }
  private minDescendantIndex(i:number):number{ const cand:number[]=[]; const [c1,c2]=this.children(i); [c1,c2].forEach(c=>{ if (c<this.a.length){ cand.push(c); const [gc1,gc2]=this.children(c); if (gc1<this.a.length) cand.push(gc1); if (gc2<this.a.length) cand.push(gc2); } }); if (cand.length===0) return -1; let idx=cand[0]; for (const c of cand) if (this.cmp(this.a[c], this.a[idx])<0) idx=c; return idx; }
  private maxDescendantIndex(i:number):number{ const cand:number[]=[]; const [c1,c2]=this.children(i); [c1,c2].forEach(c=>{ if (c<this.a.length){ cand.push(c); const [gc1,gc2]=this.children(c); if (gc1<this.a.length) cand.push(gc1); if (gc2<this.a.length) cand.push(gc2); } }); if (cand.length===0) return -1; let idx=cand[0]; for (const c of cand) if (this.cmp(this.a[c], this.a[idx])>0) idx=c; return idx; }

  toJson(): string {
    return JSON.stringify(this.a);
  }
}
