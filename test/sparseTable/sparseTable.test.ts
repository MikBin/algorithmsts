import { beforeEach, describe, expect, it } from "vitest";
import { SparseTable } from "../../src/SparseTable";

describe.only("SparseTable", () => {
  describe.only("Sum queries", () => {
    const sumOp = (a: number | null, b: number | null) => (a || 0) + (b || 0);
    const arr = [1, 3, 4, 8, 6, 1, 4, 2];
    let sparseTable: SparseTable<number> = new SparseTable(arr, sumOp);

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
    const maxOp = (a: number | null, b: number | null) => Math.max(a || 0, b || 0);
    const arr = [1, 3, 4, 8, 6, 1, 4, 2];
    let sparseTable: SparseTable<number>;

    beforeEach(() => {
      sparseTable = new SparseTable(arr, maxOp);
    });

    it("should correctly answer range max queries", () => {
      expect(sparseTable.queryOF(0, 7)).toBe(8); // Max of entire array
      expect(sparseTable.queryOF(2, 5)).toBe(8); // Max of [4, 8, 6, 1]
      expect(sparseTable.queryOF(1, 3)).toBe(8); // Max of [3, 4, 8]
      expect(sparseTable.queryOF(5, 7)).toBe(4); // Max of [1, 4, 2]
    });

    it("should handle single element queries", () => {
      expect(sparseTable.queryOF(0, 0)).toBe(1);
      expect(sparseTable.queryOF(7, 7)).toBe(2);
    });
  });

  describe("Edge cases", () => {
    const minOp = (a: number | null, b: number | null) => Math.min(a || 0, b || 0);
    it("should handle an empty array", () => {
      const sparseTable = new SparseTable<number>([], minOp);
      expect(sparseTable.size).toBe(0);
    });

    it("should handle an array with one element", () => {
      const sparseTable = new SparseTable([5], minOp);
      expect(sparseTable.size).toBe(1);
      expect(sparseTable.queryOF(0, 0)).toBe(5);
    });
  });
});
