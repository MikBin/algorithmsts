import { beforeEach, describe, expect, it } from "vitest";
import { SparseTable } from "../../../../src/algorithms/range-queries/sparse-table";
import { ArgumentError } from "../../../../src/core/validation/ArgumentError";

describe("SparseTable", () => {
  describe("Sum queries", () => {
    const sumOp = (a: number, b: number) => a + b;
    const arr = [1, 3, 4, 8, 6, 1, 4, 2];
    let sparseTable: SparseTable<number>;

    beforeEach(() => {
      sparseTable = new SparseTable();
      sparseTable.execute({ array: arr, operation: sumOp });
    });

    it("should correctly answer sum queries", () => {
      expect(sparseTable.query(0, 7)).toBe(29); // Sum of entire array
      expect(sparseTable.query(2, 5)).toBe(19); // Sum of [4, 8, 6, 1]
      expect(sparseTable.query(1, 3)).toBe(15); // Sum of [3, 4, 8]
    });

    it("should handle single element queries", () => {
      expect(sparseTable.query(0, 0)).toBe(1);
      expect(sparseTable.query(7, 7)).toBe(2);
    });
  });

  describe("Range Max queries", () => {
    const arr = [1, 3, 4, 8, 6, 1, 4, 2];
    let sparseTable: SparseTable<number>;

    beforeEach(() => {
      sparseTable = new SparseTable();
      sparseTable.execute({ array: arr, operation: Math.max, idempotent: true });
    });

    it("should correctly answer range max queries", () => {
      expect(sparseTable.query(0, 7)).toBe(8); // Max of entire array
      expect(sparseTable.query(2, 5)).toBe(8); // Max of [4, 8, 6, 1]
      expect(sparseTable.query(1, 3)).toBe(8); // Max of [3, 4, 8]
      expect(sparseTable.query(5, 7)).toBe(4); // Max of [1, 4, 2]
    });

    it("should handle single element queries", () => {
      expect(sparseTable.query(0, 0)).toBe(1);
      expect(sparseTable.query(7, 7)).toBe(2);
    });
  });

  describe("Edge cases", () => {
    it("should throw ArgumentError for empty array", () => {
      const sparseTable = new SparseTable<number>();
      expect(() => sparseTable.execute({ array: [], operation: Math.min })).toThrow(ArgumentError);
    });

    it("should handle an array with one element", () => {
      const sparseTable = new SparseTable<number>();
      sparseTable.execute({ array: [5], operation: (a: number, b: number) => Math.min(a, b) });
      expect(sparseTable.size).toBe(1);
      expect(sparseTable.query(0, 0)).toBe(5);
    });
  });

  describe("String accumulation", () => {
    it("should correctly handle non-idempotent operations like string concatenation", () => {
      const sparseTable = new SparseTable<string>();
      sparseTable.execute({ array: ["a", "b", "c", "d"], operation: (a, b) => a + b });
      expect(sparseTable.query(0, 2)).toBe("abc");
      expect(sparseTable.query(1, 3)).toBe("bcd");
      expect(sparseTable.query(0, 3)).toBe("abcd");
    });
  });

  describe("Re-execution", () => {
    it("should not accumulate stale rows on re-execution", () => {
      const sparseTable = new SparseTable<number>();
      sparseTable.execute({ array: [1, 2, 3], operation: Math.min });
      const size1 = (sparseTable as unknown as { table: unknown[] }).table.length;
      sparseTable.execute({ array: [1, 2, 3], operation: Math.min });
      expect((sparseTable as unknown as { table: unknown[] }).table.length).toBe(size1);
    });
  });
});
