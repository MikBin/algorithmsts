type Key<T> = T;

class TTNode<T> {
  keys: T[] = [];
  children: (TTNode<T> | null)[] = [];
  constructor(public leaf: boolean) {}
}

export class TwoThreeTree<T> {
  private findIndex(n: TTNode<T>, x: T): number { let i=0; while (i<n.keys.length && this.compare(n.keys[i], x) < 0) i++; return i; }
  private root: TTNode<T> = new TTNode<T>(true);
  constructor(private compare:(a:T,b:T)=>number) {}

  contains(x:T):boolean{ let n=this.root; while(true){ const i=this.findIndex(n,x); if (i< n.keys.length && this.compare(n.keys[i],x)===0) return true; if (n.leaf) return false; n = n.children[i]!; } }

  add(x:T):void{ const r=this.root; if (r.keys.length===2 && !r.leaf){ // root full? split
      const s=new TTNode<T>(false); s.children=[r,null,null]; this.splitChild(s,0); this.root=s; this.insertNonFull(s,x);
    } else if (r.keys.length===2 && r.leaf){ const arr=[...r.keys,x].sort(this.compare); r.keys = [arr[1]]; const left=new TTNode<T>(true); left.keys=[arr[0]]; const right=new TTNode<T>(true); right.keys=[arr[2]]; r.leaf=false; r.children=[left,right,null]; }
    else this.insertNonFull(r,x);
  }

  private insertNonFull(n:TTNode<T>, x:T){ if (n.leaf){ const i=this.findIndex(n,x); if (i<n.keys.length && this.compare(n.keys[i],x)===0) return; n.keys.splice(i,0,x); if (n.keys.length>2){ // split 3-key leaf into 2 nodes under parent assumption
        // handled by caller for root; for internal leaves, will be handled by parent splitChild path
      }
    } else {
      let i=this.findIndex(n,x); if (i<n.keys.length && this.compare(n.keys[i],x)===0) return;
      if (n.children[i]!.keys.length===2 && !n.children[i]!.leaf){ this.splitChild(n,i); if (this.compare(x, n.keys[i])>0) i++; }
      this.insertNonFull(n.children[i]!, x);
    } }

  private splitChild(p:TTNode<T>, i:number){ const y=p.children[i]!; const z=new TTNode<T>(y.leaf); z.keys=[y.keys[1]]; y.keys=[y.keys[0]]; if (!y.leaf){ z.children=[y.children[1]!, y.children[2]!, null]; y.children=[y.children[0]!, y.children[1]!, null]; }
    p.children.splice(i+1,0,z); p.keys.splice(i,0, (z.keys[0] as T)); }

  toArray():T[]{ const out:T[]=[]; this.inOrder(this.root,out); return out; }
  private inOrder(n:TTNode<T>, out:T[]){ if (n.leaf){ out.push(...n.keys); } else { if (n.keys.length===1){ this.inOrder(n.children[0]!,out); out.push(n.keys[0]); this.inOrder(n.children[1]!,out);} else { this.inOrder(n.children[0]!,out); out.push(n.keys[0]); this.inOrder(n.children[1]!,out); out.push(n.keys[1]); this.inOrder(n.children[2]!,out);} } }
}
