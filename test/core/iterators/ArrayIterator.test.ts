import { describe, it, expect } from "vitest";
import { ArrayIterator } from "../../../src/core/iterators/ArrayIterator";

describe("ArrayIterator", () => {
  it("should iterate over an array", () => {
    const data = [1, 2, 3];
    const iter = new ArrayIterator(data);
    expect(iter.hasNext()).toBe(true);
    expect(iter.next()).toBe(1);
    expect(iter.current()).toBe(1);

    expect(iter.hasNext()).toBe(true);
    expect(iter.next()).toBe(2);
    expect(iter.current()).toBe(2);

    expect(iter.hasNext()).toBe(true);
    expect(iter.next()).toBe(3);
    expect(iter.current()).toBe(3);

    expect(iter.hasNext()).toBe(false);
    expect(() => iter.next()).toThrow("No more elements");
  });

  it("should throw when calling current before next", () => {
    const data = [1];
    const iter = new ArrayIterator(data);
    expect(() => iter.current()).toThrow("No current element");
  });

  it("should handle empty arrays", () => {
    const iter = new ArrayIterator([]);
    expect(iter.hasNext()).toBe(false);
    expect(() => iter.next()).toThrow("No more elements");
    expect(() => iter.current()).toThrow("No current element");
  });
});
