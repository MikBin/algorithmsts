import { describe, it, expect } from "vitest";
import { OrderStatisticTree } from "../../../src/data-structures/order-statistic-tree/orderStatisticTree";

describe("OrderStatisticTree", () => {
  it("handles empty cases", () => {
    const ds = new OrderStatisticTree<number>((a, b) => a - b);
    expect(ds.select(0)).toBeNull();
    expect(ds.rank(5)).toBe(0);
  });
  it("handles single elements", () => {
    const ds = new OrderStatisticTree<number>((a, b) => a - b);
    ds.add(5);
    expect(ds.select(0)).toBe(5);
    expect(ds.rank(5)).toBe(0);
  });
  it("handles duplicates and multiple items", () => {
    const ds = new OrderStatisticTree<number>((a, b) => a - b);
    ds.add(10);
    ds.add(5);
    ds.add(15);

    expect(ds.select(1)).toBe(10);
    expect(ds.rank(15)).toBe(2);
  });
});

  it('toArray returns in order', () => {
    const ds = new OrderStatisticTree<number>((a, b) => a - b);
    ds.add(10);
    ds.add(5);
    ds.add(15);
    ds.add(1);
    expect(ds.toArray()).toEqual([1, 5, 10, 15]);
  });

  it('rebuilds a balanced tree', () => {
    const ds = new OrderStatisticTree<number>((a, b) => a - b);
    ds.add(1);
    ds.add(2);
    ds.add(3);
    ds.add(4);
    ds.add(5);
    ds.rebuild();
    expect(ds.toArray()).toEqual([1, 2, 3, 4, 5]);
    expect(ds.select(2)).toBe(3);
  });
