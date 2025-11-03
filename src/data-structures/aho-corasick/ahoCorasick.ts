type ACNode = {
  children: Map<string, ACNode>;
  fail: ACNode | null;
  output: number[]; // indices of patterns
};

function createNode(): ACNode { return { children: new Map(), fail: null, output: [] }; }

export class AhoCorasick {
  private root: ACNode = createNode();
  private patterns: string[] = [];

  add(pattern: string): void {
    let node = this.root;
    for (const ch of pattern) {
      if (!node.children.has(ch)) node.children.set(ch, createNode());
      node = node.children.get(ch)!;
    }
    node.output.push(this.patterns.length);
    this.patterns.push(pattern);
  }

  build(): void {
    const queue: ACNode[] = [];
    for (const [,child] of this.root.children) { child.fail = this.root; queue.push(child); }
    while (queue.length) {
      const cur = queue.shift()!;
      for (const [ch, nxt] of cur.children) {
        let f = cur.fail;
        while (f && !f.children.has(ch)) f = f.fail;
        nxt.fail = f ? f.children.get(ch)! : this.root;
        nxt.output.push(...(nxt.fail?.output ?? []));
        queue.push(nxt);
      }
    }
  }

  search(text: string): Array<{ index: number; pattern: string; position: number }> {
    const res: Array<{ index: number; pattern: string; position: number }> = [];
    let node: ACNode = this.root;
    for (let i=0;i<text.length;i++) {
      const ch = text[i];
      while (node && !node.children.has(ch)) node = node.fail ?? this.root;
      node = node.children.get(ch) ?? this.root;
      for (const idx of node.output) {
        const pat = this.patterns[idx];
        res.push({ index: idx, pattern: pat, position: i - pat.length + 1 });
      }
    }
    return res;
  }

  clear(): void { this.root = createNode(); this.patterns = []; }

  toJson(): string {
    const replacer = (key: any, value: any) => {
      if (key === 'fail') {
        return undefined;
      }
      if (value instanceof Map) {
        return {
          dataType: 'Map',
          value: Array.from(value.entries()),
        };
      }
      return value;
    };
    return JSON.stringify(this.root, replacer);
  }
}
