import { BaseDataStructure } from '../../core/abstracts/BaseDataStructure';
import { IIterator } from '../../core/interfaces/IIterator';

class Node<T> { constructor(public key:T, public left:Node<T>|null=null, public right:Node<T>|null=null, public height=1){} }

class InOrderIterator<T> implements IIterator<T> {
  private stack: Array<{ node: Node<T> | null; visited: boolean }> = [];
  private cur: T | null = null;
  constructor(root: Node<T> | null) { this.stack.push({ node: root, visited: false }); }
  private step(): boolean { while (this.stack.length) { const { node, visited } = this.stack.pop()!; if (!node) continue; if (visited) { this.cur = node.key; return true; } this.stack.push({ node: node.right, visited: false }); this.stack.push({ node, visited: true }); this.stack.push({ node: node.left, visited: false }); } return false; }
  hasNext(): boolean { if (this.cur!==null) return true; return this.step(); }
  next(): T { if (!this.hasNext()) throw new Error('No more elements'); const v=this.cur as T; this.cur=null; return v; }
  current(): T { if (this.cur===null) throw new Error('No current element'); return this.cur as T; }
}

export class WAVLTree<T> extends BaseDataStructure<T> {
  private root: Node<T>|null = null;
  constructor(private compare:(a:T,b:T)=>number){ super(); }

  private h(n:Node<T>|null){ return n?n.height:0; }
  private upd(n:Node<T>){ n.height = 1 + Math.max(this.h(n.left), this.h(n.right)); }
  private rotR(y:Node<T>):Node<T>{ const x=y.left!; y.left=x.right; x.right=y; this.upd(y); this.upd(x); return x; }
  private rotL(x:Node<T>):Node<T>{ const y=x.right!; x.right=y.left; y.left=x; this.upd(x); this.upd(y); return y; }

  private balance(n:Node<T>):Node<T>{ this.upd(n); const bf=this.h(n.left)-this.h(n.right); if (bf>1){ if (this.h(n.left!.left) < this.h(n.left!.right)) n.left=this.rotL(n.left!); return this.rotR(n); } if (bf<-1){ if (this.h(n.right!.right) < this.h(n.right!.left)) n.right=this.rotR(n.right!); return this.rotL(n); } return n; }

  add(x:T):void{ this.root = this._insert(this.root,x); this._size++; }
  private _insert(n:Node<T>|null,x:T):Node<T>{ if(!n) return new Node(x); const c=this.compare(x,n.key); if (c<0) n.left=this._insert(n.left,x); else if (c>0) n.right=this._insert(n.right,x); else return n; return this.balance(n); }

  contains(x:T):boolean{ let n=this.root; while(n){ const c=this.compare(x,n.key); if(c===0) return true; n=c<0?n.left:n.right; } return false; }

  remove(x:T):boolean{ const [nr,rem]=this._remove(this.root,x); this.root=nr; if(rem) this._size--; return rem; }
  private _remove(n:Node<T>|null,x:T):[Node<T>|null,boolean]{ if(!n) return [null,false]; const c=this.compare(x,n.key); if(c<0){ const [l,r]=this._remove(n.left,x); n.left=l; return [this.balance(n),r]; } if(c>0){ const [rnode,r]=this._remove(n.right,x); n.right=rnode; return [this.balance(n),r]; } // delete
    if(!n.left) return [n.right,true]; if(!n.right) return [n.left,true]; let s=n.right; while(s!.left) s=s!.left; n.key=s!.key; const [nr,_]=this._remove(n.right, s!.key); n.right=nr; return [this.balance(n),true]; }

  clear():void{ this.root=null; this._size=0; }
  iterator():IIterator<T>{ return new InOrderIterator(this.root); }
  toArray():T[]{ const out:T[]=[]; const it=this.iterator(); while(it.hasNext()) out.push(it.next()); return out; }
}
