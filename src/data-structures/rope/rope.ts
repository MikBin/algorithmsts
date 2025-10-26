class RopeNode {
  constructor(
    public weight: number,
    public left: RopeNode | null,
    public right: RopeNode | null,
    public str: string | null,
  ) {}
}

export class Rope {
  private root: RopeNode | null = null;

  static fromString(s: string): Rope { const r = new Rope(); r.root = new RopeNode(s.length, null, null, s); return r; }

  length(): number { return this.root ? this.root.weight + (this.root.right ? this.totalLength(this.root.right) : 0) : 0; }
  private totalLength(n: RopeNode | null): number { if (!n) return 0; if (n.str !== null) return n.str.length; return this.totalLength(n.left) + this.totalLength(n.right); }

  concat(other: Rope): Rope { const newRoot = new RopeNode(this.length(), this.root, other.root, null); const r = new Rope(); r.root = newRoot; return r; }

  charAt(i: number): string { if (!this.root) throw new Error('empty'); return this._charAt(this.root, i); }
  private _charAt(n: RopeNode, i: number): string { if (n.str !== null) return n.str[i]; if (i < (n.left ? this.totalLength(n.left) : 0)) return this._charAt(n.left!, i); return this._charAt(n.right!, i - (n.left ? this.totalLength(n.left) : 0)); }

  toString(): string { return this._toString(this.root); }
  private _toString(n: RopeNode | null): string { if (!n) return ''; if (n.str !== null) return n.str; return this._toString(n.left) + this._toString(n.right); }
}
