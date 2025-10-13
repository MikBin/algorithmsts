import SkipList from '../../src/skipList/skipList';
import { describe, it, expect } from 'vitest';

describe('SkipList', () => {
  it('should insert and find values', () => {
    const skipList = new SkipList<number>(10, -Infinity);
    skipList.insert(1);
    skipList.insert(2);
    skipList.insert(3);
    expect(skipList.find(1)?.value).toBe(1);
    expect(skipList.find(2)?.value).toBe(2);
    expect(skipList.find(3)?.value).toBe(3);
    expect(skipList.find(4)).toBe(null);
  });

  it('should return the correct size', () => {
    const skipList = new SkipList<number>(10, -Infinity);
    skipList.insert(1);
    skipList.insert(2);
    skipList.insert(2);
    skipList.insert(3);
    expect(skipList.size).toBe(3);
  });

  it('should remove values', () => {
    const skipList = new SkipList<number>(10, -Infinity);
    skipList.insert(1);
    skipList.insert(2);
    skipList.insert(3);
    skipList.remove(2);
    expect(skipList.find(2)).toBe(null);
    expect(skipList.size).toBe(2);
  });

  it('should handle multiple insertions of the same value', () => {
    const skipList = new SkipList<number>(10, -Infinity);
    skipList.insert(1);
    skipList.insert(1);
    skipList.insert(1);
    const node = skipList.find(1);
    expect(node?.value).toBe(1);
    expect(node?.count).toBe(3);
    expect(skipList.size).toBe(1);
  });

  it('should convert to an array', () => {
    const skipList = new SkipList<number>(10, -Infinity);
    skipList.insert(3);
    skipList.insert(1);
    skipList.insert(2);
    expect(skipList.toArray()).toEqual([1, 2, 3]);
  });

  it('should handle an empty list', () => {
    const skipList = new SkipList<number>(10, -Infinity);
    expect(skipList.find(1)).toBe(null);
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
    skipList.insert(1);
    skipList.insert(3);
    skipList.remove(2);
    expect(skipList.size).toBe(2);
  });

  it('should work with a custom comparison function', () => {
    const compare = (a: { key: number }, b: { key: number }) => a.key - b.key;
    const skipList = new SkipList<{ key: number }>(10, { key: -Infinity }, (a, b) => {
      if (a.key > b.key) return 1;
      if (a.key < b.key) return -1;
      return 0;
    });

    const obj1 = { key: 1 };
    const obj2 = { key: 2 };
    const obj3 = { key: 3 };

    skipList.insert(obj1);
    skipList.insert(obj2);
    skipList.insert(obj3);

    expect(skipList.find(obj2)?.value).toBe(obj2);
    expect(skipList.toArray()).toEqual([obj1, obj2, obj3]);
  });
});