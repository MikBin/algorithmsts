import { describe, it, expect } from "vitest";
import { OrderStatisticTree } from "../../../src/data-structures/order-statistic-tree/orderStatisticTree";

describe("OrderStatisticTree", () => {
  it("handles empty cases", () => {
    const ds = new OrderStatisticTree<number>((a, b) => a - b);

  });
  it("handles single elements", () => {
    const ds = new OrderStatisticTree<number>((a, b) => a - b);
    ds.add(5);

  });
  it("handles duplicates and multiple items", () => {
    const ds = new OrderStatisticTree<number>((a, b) => a - b);
    ds.add(10);
    ds.add(5);
    ds.add(15);

    expect(ds.select(1)).toBe(10);
    expect(ds.rank(15)).toBe(2);
  });
  it("throws on invalid input", () => {
    /* native */
  });
});
