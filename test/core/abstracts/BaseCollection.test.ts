import { describe, it, expect } from 'vitest';
import { BaseCollection } from '../../../src/core/abstracts/BaseCollection';

class DummyCollection<T> extends BaseCollection<T> {
  private items: T[] = [];

  public add(item: T) {
    this.items.push(item);
    this._size++;
  }

  public clear(): void {
    this.items = [];
    this._size = 0;
  }
}

describe('BaseCollection', () => {
  it('should be empty on initialization', () => {
    const col = new DummyCollection<number>();
    expect(col.size).toBe(0);
    expect(col.isEmpty()).toBe(true);
  });

  it('should track size and emptiness correctly', () => {
    const col = new DummyCollection<number>();
    col.add(1);
    expect(col.size).toBe(1);
    expect(col.isEmpty()).toBe(false);
    col.add(2);
    expect(col.size).toBe(2);
  });

  it('should handle clearing', () => {
    const col = new DummyCollection<number>();
    col.add(1);
    col.clear();
    expect(col.size).toBe(0);
    expect(col.isEmpty()).toBe(true);
  });
});
