const fs = require('fs');
let code = fs.readFileSync('src/data-structures/van-emde-boas/vanEmdeBoas.ts', 'utf8');

code = code.replace(
  `  insert(x: Key): void {
    if (this.min === null) {`,
  `  insert(x: Key): void {
    if (x < 0 || x >= this.u) throw new Error('Out of bounds');
    if (this.min === null) {`
);

const newMethods = `
  /**
   * Returns the successor of a given key.
   *
   * @param x The key to find the successor for.
   * @returns The successor key, or \`null\` if none exists.
   * @complexity Time: O(log log U) | Space: O(log log U)
   */
  successor(x: Key): Key | null {
    if (this.u === 2) {
      if (x === 0 && this.max === 1) return 1;
      return null;
    }
    if (this.min !== null && x < this.min) return this.min;
    const maxLow = this.cluster[high(x, this.u)]?.getMax();
    if (maxLow !== null && maxLow !== undefined && low(x, this.u) < maxLow) {
      const offset = this.cluster[high(x, this.u)]?.successor(low(x, this.u));
      return offset !== null && offset !== undefined ? _index(high(x, this.u), offset, this.u) : null;
    } else {
      const succCluster = this.summary?.successor(high(x, this.u));
      if (succCluster === null || succCluster === undefined) return null;
      const offset = this.cluster[succCluster]?.getMin();
      return offset !== null && offset !== undefined ? _index(succCluster, offset, this.u) : null;
    }
  }

  /**
   * Returns the predecessor of a given key.
   *
   * @param x The key to find the predecessor for.
   * @returns The predecessor key, or \`null\` if none exists.
   * @complexity Time: O(log log U) | Space: O(log log U)
   */
  predecessor(x: Key): Key | null {
    if (this.u === 2) {
      if (x === 1 && this.min === 0) return 0;
      return null;
    }
    if (this.max !== null && x > this.max) return this.max;
    const minLow = this.cluster[high(x, this.u)]?.getMin();
    if (minLow !== null && minLow !== undefined && low(x, this.u) > minLow) {
      const offset = this.cluster[high(x, this.u)]?.predecessor(low(x, this.u));
      return offset !== null && offset !== undefined ? _index(high(x, this.u), offset, this.u) : null;
    } else {
      const predCluster = this.summary?.predecessor(high(x, this.u));
      if (predCluster === null || predCluster === undefined) {
        if (this.min !== null && x > this.min) return this.min;
        return null;
      }
      const offset = this.cluster[predCluster]?.getMax();
      return offset !== null && offset !== undefined ? _index(predCluster, offset, this.u) : null;
    }
  }

  /**
   * Deletes a key from the tree.
   *
   * @param x The key to delete.
   * @complexity Time: O(log log U) | Space: O(log log U)
   */
  delete(x: Key): void {
    if (this.min === this.max) {
      if (this.min === x) this.min = this.max = null;
      return;
    }
    if (this.u === 2) {
      if (x === 0) this.min = 1;
      else this.min = 0;
      this.max = this.min;
      return;
    }
    if (x === this.min) {
      const firstCluster = this.summary?.getMin();
      if (firstCluster === null || firstCluster === undefined) {
        // Was only element
        this.min = this.max = null;
        return;
      }
      const minLow = this.cluster[firstCluster]?.getMin();
      if (minLow !== null && minLow !== undefined) {
        x = _index(firstCluster, minLow, this.u);
        this.min = x;
      }
    }
    const h = high(x, this.u);
    const l = low(x, this.u);
    this.cluster[h]?.delete(l);
    if (this.cluster[h]?.getMin() === null) {
      this.summary?.delete(h);
      if (x === this.max) {
        const summaryMax = this.summary?.getMax();
        if (summaryMax === null || summaryMax === undefined) {
          this.max = this.min;
        } else {
          const maxLow = this.cluster[summaryMax]?.getMax();
          if (maxLow !== null && maxLow !== undefined) {
            this.max = _index(summaryMax, maxLow, this.u);
          }
        }
      }
    } else if (x === this.max) {
      const maxLow = this.cluster[h]?.getMax();
      if (maxLow !== null && maxLow !== undefined) {
        this.max = _index(h, maxLow, this.u);
      }
    }
  }
`;

code = code.replace(/}$/, newMethods + '\n}');

fs.writeFileSync('src/data-structures/van-emde-boas/vanEmdeBoas.ts', code);
