import { describe, it, expect } from "vitest";
import { InOrderIterator, IBinaryTreeNode } from "../../../src/core/iterators/InOrderIterator";

describe("InOrderIterator", () => {
  it("should traverse in order", () => {
    const root: IBinaryTreeNode<number> = {
      key: 2,
      left: { key: 1, left: null, right: null },
      right: { key: 3, left: null, right: null },
    };

    const iter = new InOrderIterator(root);
    const result: number[] = [];
    while (iter.hasNext()) {
      result.push(iter.next());
    }
    expect(result).toEqual([1, 2, 3]);
  });

  it("should throw when empty and next is called", () => {
    const iter = new InOrderIterator(null);
    expect(iter.hasNext()).toBe(false);
    expect(() => iter.next()).toThrow("No more elements");
    expect(() => iter.current()).toThrow("No current element");
  });

  it("should support current", () => {
    const root: IBinaryTreeNode<number> = { key: 1, left: null, right: null };
    const iter = new InOrderIterator(root);
    expect(() => iter.current()).toThrow("No current element");
    iter.hasNext();
    iter.next();
    expect(iter.current()).toBe(1);
  });
});
