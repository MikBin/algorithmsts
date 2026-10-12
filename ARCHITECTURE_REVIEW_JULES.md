# Comprehensive Architecture Review: `@mikbin80/algorithmsts`

**Merged review** — combines the original architecture review with a full architectural and code audit (verified 2026-10-12 against the working tree: `tsc --noEmit` clean, `npm test` green with 1259 passed / 3 skipped, `npm run lint` failing with 92 errors, `dist/` inspected directly).

> **Legend:** 🔴 Critical · 🟠 High · 🟡 Medium · 🟢 Low · ✅ Resolved since the original review

---

## 1. Module Organization
**Status:** Good structure, but the public surface is partly broken

- **Entry Points:** Modern `package.json` conditional exports expose discrete modules: `./core`, `./data-structures`, `./algorithms`, `./graphs`, `./performance`, `./types`, `./interfaces`, `./vector-similarity`.
- **Directory Organization:** `src/` mirrors the module exports (`src/core`, `src/algorithms`, …) — clean separation of concerns.
- **Legacy Support:** `src/interfaces.ts` + `src/compatibility` keep backward compatibility; `src/migration-guide.md` documents the migration.

### New findings

| Sev | Finding |
|-----|---------|
| 🟠 | **`./vector-similarity` export is broken in the published package.** `package.json:47-51` maps it to `dist/vector-similarity/index.js` / `index.cjs`, but `rollup.config.ts:186-200` emits only `vector-similarity.umd.js` (verified on disk). `import '@mikbin80/algorithmsts/vector-similarity'` fails at runtime. |
| 🟠 | **All `types` conditions point at declarations that are never produced.** Exports reference `dist/types/<module>/index.d.ts`, but `tsconfig.json:18-19` (`outDir: "./dist"`, `rootDir: "."`) puts declarations under `dist/src/**`. On disk `dist/types/` contains only the compiled JS of `src/types/index.ts` — not a declaration tree. |
| 🟡 | Root `main`/`module`/`types` point at the *algorithms* module and there is no `"."` export; consumers doing `require('@mikbin80/algorithmsts')` silently get only algorithms. |
| 🟡 | **Two incompatible types named `IGraph`** are exported from different entry points: a legacy 4-line `IGraph<T>` via `./interfaces` (`src/graphs/IGraph.ts`) and the rich `IGraph<T, W>` via `./graphs`. Unqualified imports resolve to whichever entry was imported — a compatibility trap. |
| 🟡 | `./interfaces` (deprecated) uses `export * from './core'`, so the "interfaces" module actually re-exports the entire core **runtime** (`BaseCollection`, `Validator`, patterns, errors) — the name promises types but ships code. With the package at 0.1.0, the whole legacy layer is a candidate for removal before 1.0. |
| 🟢 | `src/utils/` is internal-only (no entry point) — defensible, but undocumented. |

## 2. Code Quality
**Status:** Strong in the flagship modules; uneven in the long tail

- **TypeScript:** Strict mode, ES2020 target, heavy generics. `tsc --noEmit` passes cleanly (verified).
- **Validation:** Centralized `Validator` + typed errors (`ArgumentError`, `DataStructureError`) is the right pattern — but it is honored by only one of three regimes (see §4).
- **Consistency:** `AGENTS.md` enforces purity/immutability; adoption is inconsistent (see §2a).

### New findings

| Sev | Finding |
|-----|---------|
| 🟡 | `src/core/patterns/Strategy.ts:86,127` — `BubbleSortStrategy`/`QuickSortStrategy` compare unconstrained `T` with relational operators. This compiles under TS 5.7 (verified), but it is not type-safe: any `T` without a meaningful `valueOf` ordering sorts incorrectly at runtime. Constrain to `T extends number \| string` or take a comparator. |
| 🟡 | Public mutable fields break invariants: `BinarySearchTree.root/size/compare` (`binarySearchTree.ts:12-15`), `AVLTree` (`avlTree.ts:5-7`) — any caller can corrupt the tree. RedBlackTree keeps `compare` private (the better pattern, unshared). |
| 🟡 | Default comparator `(a, b) => a - b` in BST/AVL returns `NaN` for strings; inserts past the root then silently take the "duplicate" branch and are **dropped** (`binarySearchTree.ts:22`). RedBlackTree's `<`/`>` default is correct — standardize on it. |
| 🟡 | `src/core/patterns/TemplateMethod.ts:67-84` — `AlgorithmTemplate` plumbs intermediates as `any`, erasing the generic safety the base class promises. `AbstractFactory.ts:45-87` exports public factory methods that unconditionally throw "Concrete data structure implementation needed" — placeholder code on the public surface. |
| 🟡 | `AlgorithmTemplate`'s `SearchAlgorithm` returns the match index in the **sorted copy**, not the input array (`TemplateMethod.ts:128-150`) — silently wrong for unsorted inputs. |
| 🟢 | Gratuitous `as any` casts in `hashSet.ts:5`, `stack.ts:22`, `queue.ts:22`, `deque.ts:19`, `arrayList.ts:19`. |

## 2a. Purity (project mandate: pure functions)
**Status:** Enforced in algorithms module, violated in infrastructure and several structures

| Sev | Finding |
|-----|---------|
| 🟠 | **Input mutation:** `KDRangeTree.build()` sorts the caller's array in place (`kdRangeTree.ts:22`) — `new KDRangeTree(userPoints)` reorders user data. Sibling `rangeTree2D.ts:23` correctly copies first. |
| 🟡 | **Argument consumption:** `FibonacciHeap.merge`/`BinomialHeap.merge` empty the argument heap (`fibonacciHeap.ts:9`, `binomialHeap.ts:39`); `BinaryHeap.merge` does not. Pick one convention. |
| 🟡 | **Non-injectable randomness:** `SkipList`, `CuckooFilter`, `VacuumFilter`, `IntervalSkipList` call `Math.random()` directly; `Treap` shows the correct injectable-rng pattern (`treap.ts:30`). `AlgorithmTestUtils` also ships un-injected `Math.random()` and a `console.warn` side effect in published API. |
| 🟡 | **Wall-clock I/O in library code:** every exported `execute()` in `src/algorithms` wraps work in `PerformanceMonitor.measureExecutionTime` (`performance.now()`) and may `console.warn` on slow runs — 14 exported methods with nondeterministic, un-injectable I/O (violates the mandate). `PerformanceMonitor` itself calls `performance.now()` with no clock injection (`performance-monitor.ts:13-15`). |
| 🟡 | Hidden mutation on query paths: `lazyMaxAndSumSegmentTree.query()` applies pending lazy updates (`:109-110`); `SplayTree.contains()` splays (documented splay semantics, but invalidates iterators and is undocumented as mutation). |
| 🟢 | `HashMap.entries()` returns internal tuple references; mutating an entry corrupts the map (`hashMap.ts:40`). |

## 3. Data Structures
**Status:** Outstanding breadth; a long tail of serious, untested bugs

The breadth is exceptional — 74 structures including segment/Fenwick/van Emde Boas trees, AVL/Red-Black/B/B+/B*/2-3 families, heaps (8 kinds), probabilistic filters, spatial trees, tries, suffix structures. **However, correctness quality is bimodal:** the flagship modules are excellent while a compressed "long tail" ships real bugs, and ~33 of 74 structures have **zero tests** (the exact modules where the bugs live).

### 🔴 Critical correctness bugs (verified)

| # | Location | Bug |
|---|----------|-----|
| C1 | `binomial-heap/binomialHeap.ts:34` | **Merge corrupts the heap.** With `a && b` and no carry, case 2 evaluates to `meld(a, a)` — the tree is melded with itself and the incoming tree `b` is dropped while `_size` still counts it. `add(1); add(2)` alone corrupts the heap; the subsequent `poll()` then walks a self-referencing sibling chain forever. (Traced and confirmed.) |
| C2 | `aho-corasick/ahoCorasick.ts:43` | **Infinite loop / process hang.** `while (node && !node.children.has(ch)) node = node.fail ?? this.root;` — at the root, `fail` is `null`, so the loop reassigns `node` to `this.root` forever. Any input character that does not start a pattern hangs the caller. The guard must be `node !== this.root`. (Traced and confirmed.) |
| C3 | `hash-set/hashSet.ts:10` | `clear()` rebuilds the backing `HashMap` **without the custom `hasher`/`equals`** — after `clear()`, all lookups use the default hash and every element becomes unfindable. |
| C4 | `r-star-tree/rStarTree.ts:112,141` | Forced-reinsert inserts orphaned internal entries as **rect-only** (`child` dropped) — entire subtrees silently become unreachable (data loss). Additionally `_remove` reinserts while iterating the list being mutated, and reinsertion can split the node under iteration. |
| C5 | `range-tree/rangeTree2D.ts:27-35` | `query()` collects at **every** node on the descent instead of only the O(log n) canonical nodes; since each ancestor's `byY` holds all descendant points, every result is returned once per overlapping ancestor — guaranteed duplicates. |
| C6 | `suffix-tree/suffixTree.ts:62-68,440-446` | After `clear()`, `UkkonenAlgorithm` keeps building into the **old root** it captured at construction while `findSubstring` searches the new one — the structure is permanently broken after one `clear()`. |
| C7 | `trie/trie.ts:196-204,174-177,98-112` | Three bugs: `remove()` of a non-terminal prefix "succeeds" and corrupts `_size`; `get()` ignores `terminal` so removed keys still return values (contradicting `hasKey`); `add('')` recurses forever (stack overflow). |

### 🟠 High

| # | Location | Bug |
|---|----------|-----|
| H1 | aa-tree / wavl-tree | `add()` increments `_size` unconditionally while `_insert` ignores duplicates (`aaTree.ts:50-53`, `wavlTree.ts:27`) — `size` and `toArray().length` diverge on duplicate adds. |
| H2 | Heap family | **Comparator polarity inverted across heaps:** with the same `(a,b)=>a-b`, `BinaryHeap`, `DAryHeap`, `LeftistHeap` are max-heaps while `WeakHeap`, `SkewHeap`, `PairingHeap`, `FibonacciHeap`, `BinomialHeap` are min-heaps. `poll()` returns the largest in one and the smallest in another. |
| H3 | ~30 modules | **No test files exist at all** for: aa-tree, treap, splay-tree, binomial-heap, pairing-heap, leftist-heap, d-ary-heap, min-max-heap, priority-queue, hash-map, hash-set, deque, stack, queue, dynamic-array, circular-buffer, bitset, disjoint-set, lru-cache, lfu-cache, monotonic-stack/queue, bk-tree, vp-tree, patricia-trie, suffix-array, suffix-automaton, aho-corasick, order-statistic-tree, hyperloglog, count-min-sketch, sparse-set. Violates the AGENTS.md full-coverage mandate; explains why C1–C7 shipped. |
| H4 | `IDataStructure` adoption | Only ~10 of 74 structures implement `IDataStructure`/`ICollection`; the advertised contract (`size`, `isEmpty`, `clear`, `iterator`, `contains`) holds for a minority of the library. |

### 🟡 Medium (selected)

- **Duplicate policy is undocumented and structure-specific:** rejected (BST/AVL/Splay/Scapegoat/2-3/AA/WAVL), silently stored (RedBlack/Treap/BTree/OST), counted as multiset (SkipList — whose `remove` then deletes the whole node ignoring `count`).
- **Return conventions are a three-way mix:** `null` (Stack.pop, BinaryHeap.peek), `undefined` (HashMap.get, BPlusTree.get), `-1` (SuffixArray.search), sentinel nodes (BTree.search returns a node while its own `findMin` returns a value).
- `size()` as a method in some structures vs `get size()` in others; `LFUCache`/`OrderStatisticTree` expose no size at all.
- `two-three-tree.ts:22-27` — non-root 3-key leaves are never split (empty split branch); the invariant is violated and the class is not actually a 2-3 tree.
- `order-statistic-tree.ts:26` — `toArray()` returns root → right → left order (not sorted); no balancing, so `select`/`rank` are O(n) worst case with no documented caveat.
- `suffix-array.ts:43-45` — binary search uses `localeCompare` while construction sorts by `charCodeAt`; collation disagrees with code-unit order for non-ASCII input.
- `hashMap.ts:35` / `patriciaTrie.ts:44` — `has()` is `get() !== undefined`, so a stored `undefined` value makes `has` return false.
- Quadtree/Octree/BallTree have no max-depth or distinct-point guards — >capacity identical points recurse until width underflow; BallTree recurses infinitely on >8 identical points.
- **Naming/claim mismatches:** `weak-heap` is a plain binary heap; `cover-tree` brute-forces a parallel array (tree never queried); `wavl-tree` is ordinary AVL; `b-star-tree` leaves nodes 1/3 full (B\* promises ≥2/3); `vacuum-filter` is a verbatim cuckoo filter (its own docblock concedes it).
- `rope.ts` is not a rope: `_charAt` ignores weights (O(n) per access), `insert` rebuilds from a flattened string — the exact costs ropes exist to avoid.
- `van-emde-boas.ts` implements only insert/member — no delete/successor/predecessor; out-of-range inserts crash.

### ✅ Done well
- `FenwickTree`, `SuffixAutomaton`, `HyperLogLog`, `BinaryFuseFilter`, `RibbonFilter`, `UnionFind` are textbook-correct and clean.
- Copy-on-return discipline is widely respected (`toArray()` copies, heap constructors copy input arrays, `BitSet` ops return new instances).
- Composition reuse (`PriorityQueue`→`BinaryHeap`, `Deque`→`CircularBuffer`, `HashSet`→`HashMap`, `BloomFilter`→`BitSet`) is the right instinct.

## 4. Algorithms
**Status:** Very good breadth; several high-severity bugs and systematic complexity overclaims

Coverage now includes sorting (counting, radix ×2), searching, string matching (KMP, Rabin–Karp), string similarity (n-gram, Dice, trigram, Jaro, Jaro–Winkler, Levenshtein), traversal (3 BFS/DFS variants), shortest paths (Dijkstra, A\*, Bellman–Ford, Floyd–Warshall, DAG-SP), MST (Kruskal, Prim, Borůvka), topo sort, cycle detection, SCC (Tarjan, Kosaraju), bridges/articulation points, biconnected components, Eulerian path/circuit, coloring, transitive closure, **max flow (Edmonds–Karp)** and **bipartite matching (Hopcroft–Karp)** — so the original review's "Network Flow missing" note is now partially resolved. Still missing: comparison sorts (merge/quick/heap/insertion), classic DP (LCS, knapsack, LIS), greedy beyond MST, computational geometry, number theory.

### 🔴/🟠 High-severity correctness bugs

| # | Location | Bug |
|---|----------|-----|
| A1 | `strings/similarities.ts:489-496` | **Levenshtein early-return is inverted:** main path returns *similarity* (`1 - d/max`), but early returns give `1` when exactly one string is empty — `execute({str1:"",str2:"abc"})` reports a perfect match where similarity is 0. |
| A2 | `graphs/.../BellmanFordAlgorithm.ts:37-55` | **Broken for undirected graphs.** It relaxes `getEdges()`, which for undirected graphs returns each edge once (deduplicated); reverse relaxations never happen, so `D→A` on the standard undirected fixture returns `found:false, distance:Infinity`. Never checks `isDirected()`. Negative-cycle detection also misses negative undirected edges. |
| A3 | `graphs/.../EulerianPathCircuit.ts:29-136` | **No connectivity check.** Two disjoint triangles pass the parity check; the walk covers one component and the algorithm reports a full `circuit`. Silently wrong for disconnected graphs in both variants. |
| A4 | `range-queries/sparse-table/sparseTable.ts:109-111` | **`query()` probes the operation with fake data** (`this.operation(5 as T, 0 as T)`) to choose the O(1) vs O(log n) path. For non-number `T` the probe yields `NaN` and routes to the idempotent path, which **double-counts** for sum-like operations. Type-unsafe and semantically wrong. Also `initializeTable` never resets `this.table`, so re-execution accumulates stale rows; empty input crashes. |
| A5 | `searching/binary-search/binarySearch.ts:174-184` | `BinaryClosestSearch` uses `Math.abs(compareFn(...))` as a distance, but the documented comparator contract requires only sign — with a `-1/0/1` comparator every "distance" is 1 and results are arbitrary. |
| A6 | `strings/similarities.ts:300` | Jaro `maxDist` goes negative for single-character strings (`floor(max(1,1)/2)-1 = -1`), making the match window empty — `JaroDistance("a","a")` returns 0. Jaro–Winkler inherits it. |
| A7 | `sorting/radixSort.ts:186-187` | `RadixSortStrings` throws `TypeError` on any code unit > 255 (é, 日) — 257 buckets, no validation; ASCII limit is only a comment. Related: `countingSort` throws `RangeError` or silently mis-sorts fractional inputs; `digitCount`/`getNthDigit` (`src/utils/number.ts`) have an undefined domain and no validation. |

### 🟡 Complexity claims vs. reality (systematic)

Several JSDoc claims describe the heap-based textbook algorithm while the code re-sorts or scans:

- `PrimAlgorithm` claims O((V+E) log V) "with binary heap" but re-sorts the queue every iteration → ~O(E² log E) (`PrimAlgorithm.ts:13,71`). Same pattern in `DijkstraAlgorithm.ts:12,66`.
- `EdmondsKarpMaxFlow` claims O(V·E²) but BFS scans all vertices per node → ~O(V³E) (`:12,77`).
- `HopcroftKarp` claims O(E√V) but uses `Array.includes` per neighbor → O(E·V) per phase (`:23,52,67`).
- `TopologicalSort` claims O(V+E) but `order.unshift()` per vertex → O(V²) (`:32,90`).
- `BreadthFirstSearch`/`DepthFirstSearch` (graphs module) materialize full paths per vertex → Θ(V²) space on path graphs.
- `QuickSortStrategy` (core) uses last-element pivot — O(n²) on sorted input — while claiming O(n log n) unconditionally.

### 🟡 API consistency

- **Three error-handling regimes:** graph structures use `Validator`+`ArgumentError` (good); graph algorithms throw ad-hoc `Error`; `src/algorithms` mostly doesn't validate at all (nulls silently become empty results; invalid input crashes with raw TypeError).
- **Two live, incompatible BFS/DFS pairs:** `algorithms/graphs/traversal/*` (object input, `traversalOrder`) vs `graphs/algorithms/traversal/*` (positional, `{visited, paths}` + dual-shape `execute`). Both are public. Plus a dead third function-style pair (`src/graphs/bfs.ts`, `dfs.ts`) exported by nothing — delete.
- Dijkstra/A\*/Bellman–Ford/Floyd–Warshall throw on unweighted graphs, but `DAGShortestPathAlgorithm.ts:45` silently defaults missing weights to 1. Empty-graph MST: Prim returns `found:true`, Kruskal/Borůvka `found:false`.
- Comparator convention `(valueSearched, valueToCompareTo)` is inverse of the ecosystem standard and documented only in the deprecated `src/interfaces.ts:39-40`.
- `CycleDetection.ts:98` double-`unshift`s the cycle start — directed cycles are reported malformed (`[A, A, B]`).
- DFS/Tarjan/Kosaraju/topo use unbounded recursion — stack overflow around 10⁴–10⁵ vertices.

### ✅ Done well
- Kruskal, Tarjan, Kosaraju, Floyd–Warshall (incl. negative self-loops), bridges/articulation points, KMP, and Rabin–Karp are textbook-correct.
- Step-generator variants for visualization are a distinctive, well-executed feature.
- No exported algorithm mutates user input; sorts copy.

## 5. Testing Strategy
**Status:** Green but hollow — coverage gate hides a ~45-module hole

- **Verified current state:** `npm test` (unit) is green — 103 files, 1259 passed, 3 skipped. The range-check failures noted in the original review **are fixed** (implementation returns 0 for zero vectors; `dotProduct` test expectations were corrected; see §5a).
- **Organization:** `test/` mirrors `src/`; shared fixtures; `test/vector-similarity/` is exemplary (per-function files, internal-helper tests, edge cases, docs cross-checks).
- **Quality:** No mock theater (`vi.mock` absent); 100+ real `toThrow` assertions with specific types; error-path testing is strong where tests exist.

### 🟠 Gaps

| # | Finding |
|---|---------|
| T1 | **~33 data-structure modules, 9-11 graph algorithm classes (Tarjan, Kosaraju, Bridges, Biconnected, Eulerian, Coloring, TransitiveClosure, EdmondsKarp, HopcroftKarp, Borůvka, DAG-SP), and all of `src/core` (patterns, abstracts, base utils) have zero test references.** Directly violates the AGENTS.md mandate and contradicts the original review's "95%+ coverage" claim. |
| T2 | **The coverage gate is scoped to `src/vector-similarity/**` only** (`vitest.config.ts:11-17`, 100% thresholds there). The untested 60% never enters coverage accounting — CI stays green. (Comment at L7 claiming v8 "is not installed" is stale too.) |
| T3 | **Skipped suites hide broken verification:** the doc-examples suite has two `describe.skip` blocks, one of which contains an actual `ReferenceError` (`documentationExamples.test.ts:34` declares `comparisonFn` but uses `compareFn`) — the skip hides a bug, not doc drift. Cross-module validation/error tests are also skipped (`fullLibrary.test.ts:127,161`). |
| T4 | Many data-structure suites run a single monolithic `test()` per file — thin granularity makes regressions hard to localize. |
| T5 | Flaky-by-design timing assertions (`expect(executionTime).toBeLessThan(1000)`) on shared CI runners. |

### 5a. Status of the original review's known issues
- ✅ **`range-check.test.ts` failures — resolved.** Zero-vector cosine returns a documented `0` (`classic.ts:38-40`), `dotProduct` tests assert the correct ±14 values, and negative-input NaN in entropy/fidelity was fixed via absolute-value normalization (`Analysis of Null Similarity Scores.md` documents the root cause).
- 🟡 **Residual:** the signed-range branch silently tolerates NaN (`range-check.test.ts:90-93` — `if (Number.isFinite(value))`), so a NaN regression in cosine/pearson would now pass this file. Make the finite check unconditional.
- ✅ **`d3`/`vue` — moved to `devDependencies`** (original recommendation #1 addressed).

## 6. Build & Distribution
**Status:** Well-configured on paper; unvalidated in practice — packaging is broken

- Rollup produces ESM + CJS per module; `vector-similarity` gets a standalone UMD build; pure-type `src/types` legitimately emits empty JS chunks (verified — it is 100% `export type`; consumers of `@…/types` get `{}` at runtime, which is expected but should be documented). The original "empty chunks" warning is explained, not a bug.

### 🟠 Findings

| # | Finding |
|---|---------|
| B1 | **`./vector-similarity` exports point at files Rollup never emits** (see §1) — the UMD build exists for the visualization app, but `visualization/vector-similarity/main.js:5` imports the **TS source directly**, so nothing consumes the UMD bundle either. Emit `index.js`/`index.cjs` (or point exports at the UMD and add `types`). |
| B2 | **Declaration outputs land in `dist/src/**`, not `dist/types/**`** (`tsconfig.json:18-19`) — every `types` condition in the exports map is broken (see §1). Nothing catches this because CI never builds. |
| B3 | **CI never runs `npm run build`** — the entire published artifact is unvalidated (`.github/workflows/ci.yml:19-20` runs only install + `test:prod`). |
| B4 | `dist/` on disk mixes at least three generations of stale layouts (`algorithmsts.umd.js`, flat per-structure dirs, a `src/` declaration dump) with current output; `rollup-plugin-delete` is a devDep but unused — add a clean step. |
| B5 | `build:docs` is broken as wired: `node tools/build-and-docs.ts` — plain Node cannot execute TS (no loader on engines ≥16). `tools/gh-pages-publish.ts` requires absent `shelljs` and force-pushes to `gh-pages` while `docs/` is gitignored, so generated docs can never be published from this tree as configured. `typedoc.json` omits `vector-similarity` and `interfaces` entry points and pins `gitRevision: "main"` while CI triggers only on `master`. |
| B6 | `package.json`: empty `description` and `keywords`; duplicate coverage providers (`@vitest/coverage-istanbul` + `-v8`); triple release tooling (`semantic-release`, `release-it`, commitizen) with only `release-it` wired. |

## 7. Documentation
**Status:** Good docs culture; the README teaches an API that does not exist

- JSDoc discipline is strong where present (complexity tags, input/output interfaces, preconditions) — and that documentation is what made this audit feasible.
- `AGENTS.md` remains an excellent onboarding contract; `README.md` is comprehensive.

### 🟠/🟡 Findings

| Sev | Finding |
|-----|---------|
| 🟠 | **README documents non-existent APIs:** `BinarySearch.search(...)`, `BinarySearch.closestSearch(...)`, `CountingSort.sort(...)`, `RadixSortNumbers.sort(...)`, `NgramSimilarity.calculate(...)`, `new AlgorithmSelector()` — all real implementations are instance-based `.execute({...})` (no static `search|sort|calculate` exists anywhere in `src/algorithms`). Every algorithm section of the README is stale, and the suite meant to catch this is skipped (§5/T3). |
| 🟡 | **JSDoc coverage is inverted vs. need:** ~45 of 74 data-structure modules (all the heaps, queues, sets, spatial trees, filters, string structures) have **zero JSDoc** — no complexity tags at all, violating AGENTS.md for roughly 3 of every 4 structures. BST/AVL/RBT have good prose but no complexity annotations. `LinkedList`, `BTree`, `SkipList`, `Trie`, `SegmentTree` demonstrate the target standard and should be the template. |
| 🟡 | `src/examples/` contains exactly one file — not a usage example but segment-tree node factories. No runnable examples for the other ~80 structures or the algorithms module. |
| 🟢 | Dead doc artifacts: dangling JSDoc block (`linkedList.ts:289-294`), BTree `getHeight` doc/behavior mismatch, stale commented namespace snippet (`segmentTree.test.ts:1395-1397`). |

## 8. Performance Infrastructure
**Status:** Concept present; measurement and selection logic need rework

- `BenchmarkRunner`, `PerformanceMonitor`, `ComplexityAnalyzer`, and a dynamic `AlgorithmSelector` exist; performance-regression tests exist (currently skipped).

### 🟡/🟢 Findings

- `PerformanceMonitor` has no injectable clock (`performance.now()` direct) — purity violation and testability problem (tests monkey-patch the static).
- `BenchmarkRunner.compareAlgorithms` measures each algorithm **once**, algorithm 1 always first (warm-up/order bias), single-block timing decided by GC hiccups, arbitrary absolute 0.1 ms tie threshold. `benchmarkAlgorithm` runs one sample and treats it as the execution time.
- `ComplexityAnalyzer` maps complexity *strings* to hard-coded ms targets — machine- and input-size-dependent by construction; `includes('O(log n)')` matching is brittle.
- `AlgorithmSelector` picks by display-name substrings (`getName().includes('CountingSort')`); `preferredComplexity`/`maxExecutionTime` criteria are never read; empty-array input crashes; the comment says "prefer O(n log n)" while the code prefers linear sorts.
- Both graph MST/shortest-path families claim heap-based complexities but re-sort arrays (§4) — the library ships 8 heaps and a priority queue that its own algorithms don't use.

## 9. Dependencies & Tooling
**Status:** Mostly healthy; hygiene and CI need attention

- ✅ `d3`/`vue` are now `devDependencies` (used solely by the embedded `visualization/` app — correctly excluded from the npm tarball via `"files": ["dist"]`).
- ✅ Vector-similarity module has a real 100% coverage gate enforced in CI.
- 🟠 **`.gitignore` contains committed merge-conflict markers** (`<<<<<<< HEAD` / `=======` / `>>>>>>> origin/master`, lines 14-18) — the file is corrupt; resolve and commit one side.
- 🟠 **CI** (`.github/workflows/ci.yml`) runs only `npm install` + `test:prod`: no lint (which currently fails with **92 errors**), no build, no e2e, no lockfile (`package-lock.json` is gitignored → non-reproducible installs; use `npm ci` + commit the lockfile). Actions pinned to v3.
- 🟠 **Husky/commit enforcement is inert:** `.husky/` contains only the generated runtime dir — no `pre-commit`/`commit-msg` hooks, **no commitlint config anywhere**, no lint-staged config — despite `AGENTS.md` claiming commitlint + Husky + commitizen enforcement.
- 🟡 **ESLint:** flat `eslint.config.cjs` is live but omits `plugin:@typescript-eslint/recommended` (no `no-explicit-any`, no unsafe rules — notable given `any_usage_report.md` catalogs 296 `any` usages); legacy `.eslintrc.json` extends the recommended set but is dead config under ESLint 9; `lint` covers only `src/`; `ecmaVersion: 6` is anachronistic vs target ES2020.
- 🟡 **E2E is architecturally split and fragile:** `pretest:e2e` builds a production bundle that only the vitest e2e file consumes (served via `python3 -m http.server` — absent on Windows; fixed 2 s sleep instead of readiness), while Playwright boots a **dev server** on port 8080 with no `--strictPort`/`url`/`baseURL` (port contention → silent drift or timeout), and pages load chart.js from a CDN (offline → 30 s selector timeouts). Missing browsers are swallowed into `ctx.skip()` — green runs with zero e2e verification.
- 🟡 **Root litter:** `test_dummy.js`, `replace_remaining.cjs`, `replace_remaining2.cjs`, `radix.patch` (unapplied 444-line diff), `benchmark_results.json` (output of an unrelated Fastify benchmark), `TODO_NEXT.md` (agent session notes), `Analysis of Null Similarity Scores.md`, `any_usage_report.md`, empty `scripts/`. Move to `docs/`/delete.
- 🟢 `visualization/` is a separate static app embedded in the repo (12+ d3/Vue pages). It's cleanly excluded from the package, but it drives root-level deps, part of e2e, and one Rollup target — consider extracting it to its own package/repo.

## 10. Duplication & Consolidation

| Sev | Finding |
|-----|---------|
| 🟠 | `VacuumFilter` is ~95% identical to `CuckooFilter` (same fingerprinting/buckets/kick loop; only hash seeds differ) — parameterize seeds and delete one. |
| 🟡 | Five copy-pasted `ArrayIterator<T>` classes (stack/queue/deque/arrayList/circularBuffer); six near-identical stack-based in-order iterators (splay/treap/aa/wavl/scapegoat/interval-tree); three identical traversal triplets (BST/AVL/RBT). Move to `src/core`. |
| 🟡 | FNV-1a `defaultHash` + `JSON.stringify` serializer re-declared in **eight** places (bloom, countMin, HLL, cuckoo, vacuum, ribbon, binaryFuse, hashMap); the probabilistic module's own `probabilistic-interfaces.ts` is bypassed by its own implementations. |
| 🟡 | `Rect`/MBR/intersection/split geometry duplicated wholesale between `rTree.ts` and `rStarTree.ts`. |
| 🟡 | Union-Find re-implemented inline four times in Kruskal (×2 with generator), Borůvka — while `UnionFind` exists in `src/data-structures/disjoint-set`. |
| 🟢 | `FenwickTree.findKth` and `findPrefixSum` are literally identical functions. |

---

## 11. Verification Snapshot (this audit)

| Check | Result |
|-------|--------|
| `npx tsc --noEmit` | ✅ Pass (0 errors) |
| `npm test` (unit) | ✅ 103 files, 1259 passed, 3 skipped |
| `npm run lint` | ❌ 92 errors (unused vars, `no-undef` on `performance`, etc.) |
| `npm run build` (CI) | ❌ Never executed in CI; exports map vs. output verified broken on disk |
| Coverage gate | ⚠️ Enforced only for `src/vector-similarity/**` |

## 12. Recommendations (Prioritized)

### P0 — Broken for consumers / correctness (fix first)
1. **Fix the packaging bug:** emit `dist/vector-similarity/index.js` + `.cjs` (or re-point exports), and fix the declarations path (`rootDir`/`declarationDir`) so `dist/types/**` exists. Add a packaging smoke test (`node -e "require('#pkg/vector-similarity')"` per export) to CI. — *Impact: High | Effort: Low-Medium*
2. **Fix the critical data-structure bugs C1–C7** (BinomialHeap merge, AhoCorasick hang, HashSet.clear hasher loss, RStarTree reinsert data loss, RangeTree2D duplicate results, SuffixTree.clear desync, Trie remove/get/empty-key) and the algorithm bugs A1–A7 (Levenshtein inversion, Bellman–Ford undirected, Eulerian connectivity, SparseTable probe, BinaryClosestSearch distance, Jaro single-char, radix/counting input validation). Each is small and contained. — *Impact: High | Effort: Medium*
3. **Fix `.gitignore` merge markers; run `npm run lint` in CI and get to green** (currently 92 errors). — *Impact: High | Effort: Low*

### P1 — Make the safety net real
4. **Extend the coverage gate from `vector-similarity` to the whole `src/`** with a realistic initial threshold, then backfill tests for the ~33 untested data structures and ~11 untested graph algorithms (starting with every module that has a known bug). — *Impact: High | Effort: High*
5. **CI: add build + `npm ci` + committed lockfile + packaging smoke test; add husky `pre-commit` (lint-staged) and `commit-msg` (commitlint) hooks with an actual commitlint config** so the claimed enforcement exists. — *Impact: Medium | Effort: Medium*
6. **Repair the doc pipeline:** rewrite README algorithm examples to the real `.execute()` API, un-skip and fix `documentationExamples.test.ts` (including the `compareFn` ReferenceError), and fix `build:docs`/typedoc entry points. — *Impact: Medium | Effort: Medium*

### P2 — Contract and consistency work
7. **Unify library-wide contracts:** one comparator polarity across all heaps (min by default, document it), one duplicate policy per family, one not-found convention, `get size()` everywhere, shared default comparator that works for strings. — *Impact: Medium | Effort: Medium*
8. **Adopt `Validator`+typed errors in `src/algorithms` and graph algorithms**; remove `console.warn`/timing side effects from `execute()` (inject a logger/clock) to satisfy the purity mandate. — *Impact: Medium | Effort: Medium*
9. **Align complexity claims with implementations:** either use the library's own heaps in Prim/Dijkstra/A\*/Edmonds–Karp or correct the JSDoc; fix `unshift`-based topo order and `includes`-scans in Hopcroft–Karp. — *Impact: Medium | Effort: Medium*

### P3 — Hygiene and depth
10. **Consolidate duplication:** delete `VacuumFilter` (parameterize CuckooFilter), delete dead `src/graphs/{bfs,dfs,IGraph}.ts`, extract shared iterators/hashers/geometry/Union-Find into `core`. — *Impact: Medium | Effort: Medium*
11. **Backfill JSDoc complexity** on the ~45 undocumented modules, trees and heaps first; promote `LinkedList`/`Trie`-style docs as the template. — *Impact: Medium | Effort: High*
12. **Decide the legacy layer's fate before 1.0:** remove or stub the dual `IGraph`, the `./interfaces` runtime re-export, `AbstractFactory` throwing placeholders, and the `Any`-typed template plumbing. — *Impact: Medium | Effort: Low*
13. **Fix the e2e pipeline:** one server strategy (`vite preview` of the built bundle), `--strictPort` + `webServer.url` readiness + `baseURL`, replace `python3` with a Node static server, vendor chart.js locally, fail loudly when browsers are missing. — *Impact: Medium | Effort: Medium*
14. **Clean root litter** (`test_dummy.js`, `replace_remaining*.cjs`, `radix.patch`, unrelated `benchmark_results.json`, session notes) and add a Rollup clean step; extract `visualization/` to its own workspace package. — *Impact: Low | Effort: Low*
15. **Fill algorithm gaps** to complete the "comprehensive" positioning: comparison sorts (merge/quick/heap/insertion), classic DP (LCS, knapsack, LIS), string indexing algorithms (Z, Boyer–Moore), iterative DFS variants for deep graphs. — *Impact: Low | Effort: High*

---

## Appendix: What Changed Since the Original Review

| Original finding | Status |
|------------------|--------|
| `d3`/`vue` in `dependencies` | ✅ Moved to `devDependencies` |
| `range-check.test.ts` similarity failures | ✅ Fixed (implementation clamps/zero-vector convention documented; tests corrected) |
| Playwright E2E timeouts | ⚠️ Still present; root causes now precisely identified (§9) |
| Rollup empty-chunk warnings for `types` | ✅ Explained — pure-type module, expected behavior |
| Missing Network Flow algorithms | ✅ Partially addressed (Edmonds–Karp, Hopcroft–Karp exist — both with correctness/complexity issues, §4) |
| Missing DP algorithms | ❌ Still missing |
| "95%+ test coverage" claim | ❌ Contradicted — gate covers only `vector-similarity`; ~45 modules untested |
