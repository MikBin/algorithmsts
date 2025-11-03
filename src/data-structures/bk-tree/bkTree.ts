export class BKTree<T> {
  private root: Node<T> | null = null;
  constructor(private distance: (a: T, b: T) => number) {}
  add(value: T): void { if (!this.root) { this.root = new Node(value); return; } this._add(this.root, value); }
  private _add(n: Node<T>, v: T): void { const d = this.distance(v, n.value); const child = n.children.get(d); if (child) this._add(child, v); else n.children.set(d, new Node(v)); }
  query(value: T, radius: number): { value: T; distance: number }[] { const res: { value: T; distance: number }[] = []; this._query(this.root, value, radius, res); return res; }
  private _query(n: Node<T> | null, v: T, r: number, out: { value: T; distance: number }[]) { if (!n) return; const d = this.distance(v, n.value); if (d <= r) out.push({ value: n.value, distance: d }); for (let dist = d - r; dist <= d + r; dist++) { const c = n.children.get(dist); if (c) this._query(c, v, r, out); } }

  toJson(): string {
    return JSON.stringify(this.root, (key, value) => {
      if (value instanceof Map) {
        return {
          dataType: 'Map',
          value: Array.from(value.entries()),
        };
      }
      return value;
    });
  }
}
class Node<T> { children = new Map<number, Node<T>>(); constructor(public value: T) {} }
