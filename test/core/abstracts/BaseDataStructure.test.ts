import { describe, it, expect } from 'vitest';
import { BaseDataStructure } from '../../../src/core/abstracts/BaseDataStructure';
import { IIterator } from '../../../src/core/interfaces/IIterator';

class DummyIterator<T> implements IIterator<T> {
  private index = 0;
  constructor(private items: T[]) {}
  hasNext(): boolean {
    return this.index < this.items.length;
  }
  next(): T {
    return this.items[this.index++];
  }
  reset(): void {
    this.index = 0;
  }
}

class DummyDataStructure<T> extends BaseDataStructure<T> {
  private items: T[] = [];

  public add(item: T) {
    this.items.push(item);
    this._size++;
  }

  public clear(): void {
    this.items = [];
    this._size = 0;
  }

  public iterator(): IIterator<T> {
    return new DummyIterator(this.items);
  }

  public contains(element: T): boolean {
    return this.items.includes(element);
  }

  public toArray(): T[] {
    return [...this.items];
  }
}

describe('BaseDataStructure', () => {
  it('should implement all methods required by interface', () => {
    const ds = new DummyDataStructure<number>();
    ds.add(1);
    ds.add(2);

    expect(ds.contains(1)).toBe(true);
    expect(ds.contains(3)).toBe(false);

    expect(ds.toArray()).toEqual([1, 2]);

    const it = ds.iterator();
    expect(it.hasNext()).toBe(true);
    expect(it.next()).toBe(1);
    expect(it.next()).toBe(2);
    expect(it.hasNext()).toBe(false);

    expect(ds.size).toBe(2);
    expect(ds.isEmpty()).toBe(false);
    ds.clear();
    expect(ds.isEmpty()).toBe(true);
  });
});
