import { HashMap, Hasher, Equality } from '../hash-map';

export class HashSet<T> {
  private map: HashMap<T, true>;
  constructor(hasher?: Hasher<T>, equals?: Equality<T>) { this.map = new HashMap<T, true>(hasher as any, equals as any); }
  get size(): number { return this.map.size; }
  add(v: T): void { this.map.set(v, true); }
  has(v: T): boolean { return this.map.has(v); }
  delete(v: T): boolean { return this.map.delete(v); }
  clear(): void { this.map = new HashMap<T, true>(); }
  values(): T[] { return this.map.keys(); }
  toArray(): T[] { return this.values(); }

  toJson(): string {
    return this.map.toJson();
  }
}
