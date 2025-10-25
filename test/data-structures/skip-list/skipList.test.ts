import { SkipList } from '../../../src/data-structures/skip-list';
import { SkipListIterator } from '../../../src/data-structures/skip-list/iterator';
import { describe, it, expect } from 'vitest';
import { ICollection } from '../../../src/core/interfaces/ICollection';
import { IDataStructure } from '../../../src/core/interfaces/IDataStructure';
import { IIterator } from '../../../src/core/interfaces/IIterator';

describe('SkipList', () => {
  it('should insert and find values', () => {
    const skipList = new SkipList<number>(10, -Infinity);
    skipList.add(1);
    skipList.add(2);
    skipList.add(3);
    expect(skipList.contains(1)).toBe(true);
    expect(skipList.contains(2)).toBe(true);
    expect(skipList.contains(3)).toBe(true);
    expect(skipList.contains(4)).toBe(false);
  });

  it('should return the correct size', () => {
    const skipList = new SkipList<number>(10, -Infinity);
    skipList.add(1);
    skipList.add(2);
    skipList.add(2);
    skipList.add(3);
    expect(skipList.size).toBe(3);
  });

  it('should remove values', () => {
    const skipList = new SkipList<number>(10, -Infinity);
    skipList.add(1);
    skipList.add(2);
    skipList.add(3);
    skipList.remove(2);
    expect(skipList.contains(2)).toBe(false);
    expect(skipList.size).toBe(2);
  });

  it('should handle multiple insertions of the same value', () => {
    const skipList = new SkipList<number>(10, -Infinity);
    skipList.add(1);
    skipList.add(1);
    skipList.add(1);
    expect(skipList.contains(1)).toBe(true);
    expect(skipList.size).toBe(1);
  });

  it('should convert to an array', () => {
    const skipList = new SkipList<number>(10, -Infinity);
    skipList.add(3);
    skipList.add(1);
    skipList.add(2);
    expect(skipList.toArray()).toEqual([1, 2, 3]);
  });

  it('should handle an empty list', () => {
    const skipList = new SkipList<number>(10, -Infinity);
    expect(skipList.contains(1)).toBe(false);
    expect(skipList.toArray()).toEqual([]);
    expect(skipList.size).toBe(0);
  });

  it('should handle removing from an empty list', () => {
    const skipList = new SkipList<number>(10, -Infinity);
    skipList.remove(1);
    expect(skipList.size).toBe(0);
  });

  it('should handle removing a non-existent value', () => {
    const skipList = new SkipList<number>(10, -Infinity);
    skipList.add(1);
    skipList.add(3);
    skipList.remove(2);
    expect(skipList.size).toBe(2);
  });

  it('should work with a custom comparison function', () => {
    const skipList = new SkipList<{ key: number }>(10, { key: -Infinity }, (a, b) => {
      if (a.key > b.key) return 1;
      if (a.key < b.key) return -1;
      return 0;
    });

    const obj1 = { key: 1 };
    const obj2 = { key: 2 };
    const obj3 = { key: 3 };

    skipList.add(obj1);
    skipList.add(obj2);
    skipList.add(obj3);

    expect(skipList.contains(obj2)).toBe(true);
    expect(skipList.toArray()).toEqual([obj1, obj2, obj3]);
  });

  describe('iterator functionality', () => {
    it('should implement IIterator interface correctly', () => {
      const skipList = new SkipList<number>(10, -Infinity);
      skipList.add(1);
      skipList.add(2);
      skipList.add(3);
      const iterator = skipList.iterator();

      expect(iterator.hasNext()).toBe(true);
      expect(iterator.next()).toBe(1);
      expect(iterator.hasNext()).toBe(true);
      expect(iterator.next()).toBe(2);
      expect(iterator.hasNext()).toBe(true);
      expect(iterator.next()).toBe(3);
      expect(iterator.hasNext()).toBe(false);
    });

    it('should throw error when next() called on empty iterator', () => {
      const skipList = new SkipList<number>(10, -Infinity);
      const iterator = skipList.iterator();

      expect(iterator.hasNext()).toBe(false);
      expect(() => iterator.next()).toThrow('No more elements in the iteration');
    });
  });

  describe('interface compliance', () => {
    it('should implement ICollection interface', () => {
      const skipList = new SkipList<number>(10, -Infinity);
      const collection: ICollection<number> = skipList;

      expect(collection.isEmpty()).toBe(true);
      expect(collection.size).toBe(0);

      skipList.add(1);
      expect(collection.isEmpty()).toBe(false);
      expect(collection.size).toBe(1);

      collection.clear();
      expect(collection.isEmpty()).toBe(true);
    });

    it('should implement IDataStructure interface', () => {
      const skipList = new SkipList<number>(10, -Infinity);
      const dataStructure: IDataStructure<number> = skipList;

      skipList.add(1);
      skipList.add(2);

      expect(dataStructure.contains(1)).toBe(true);
      expect(dataStructure.contains(3)).toBe(false);
      expect(dataStructure.toArray()).toEqual([1, 2]);

      const iterator = dataStructure.iterator();
      expect(iterator.hasNext()).toBe(true);
      expect(iterator.next()).toBe(1);
    });
  });
});
