import { defineConfig } from "rollup";
import typescript from "@rollup/plugin-typescript";
import terser from "@rollup/plugin-terser";
import { nodeResolve } from "@rollup/plugin-node-resolve";

console.log("🌶 rollup current mode: ", process.env.BUILD);

const InjectPlugin =
  process.env.BUILD === "production"
    ? [
        terser({
          compress: {
            drop_console: true,
            drop_debugger: true,
          },
        }),
        nodeResolve({
          extensions: [".js", ".jsx", ".ts", ".tsx"],
          mainFields: ["browser", "module", "main"],
        }),
        typescript({
          sourceMap: true,
          inlineSources: true,
          compilerOptions: {
            declaration: false,
            emitDeclarationOnly: false,
          },
        }),
      ]
    : [
        nodeResolve({
          extensions: [".js", ".jsx", ".ts", ".tsx"],
          mainFields: ["browser", "module", "main"],
        }),
        typescript({
          sourceMap: true,
          inlineSources: true,
          compilerOptions: {
            declaration: false,
            emitDeclarationOnly: false,
          },
        }),
      ];

export default defineConfig([
  // Main library bundle
  {
    input: "src/algorithmsts.ts",
    plugins: [...InjectPlugin],
    external: ["node:url", "node:path"],
    output: [
      // commonjs
      {
        file: "dist/algorithmsts.cjs.js",
        format: "cjs",
        sourcemap: true,
        exports: "named",
      },
      // es module
      {
        file: "dist/algorithmsts.esm.js",
        format: "esm",
        sourcemap: true,
        inlineDynamicImports: true,
        exports: "named",
      },
      // umd for browser compatibility
      {
        file: "dist/algorithmsts.umd.js",
        format: "umd",
        name: "algorithmsts",
        sourcemap: true,
        exports: "named",
      },
    ],
  },
  // Core module
  {
    input: "src/core/index.ts",
    plugins: [...InjectPlugin],
    external: ["node:url", "node:path"],
    output: [
      {
        file: "dist/core/index.js",
        format: "esm",
        sourcemap: true,
        exports: "named",
      },
      {
        file: "dist/core/index.cjs",
        format: "commonjs",
        sourcemap: true,
        exports: "named",
      },
    ],
  },
  // Data structures module
  {
    input: "src/data-structures/index.ts",
    plugins: [...InjectPlugin],
    external: ["node:url", "node:path"],
    output: [
      {
        file: "dist/data-structures/index.js",
        format: "esm",
        sourcemap: true,
        exports: "named",
      },
      {
        file: "dist/data-structures/index.cjs",
        format: "commonjs",
        sourcemap: true,
        exports: "named",
      },
    ],
  },
  // Algorithms module
  {
    input: "src/algorithms/index.ts",
    plugins: [...InjectPlugin],
    external: ["node:url", "node:path"],
    output: [
      {
        file: "dist/algorithms/index.js",
        format: "esm",
        sourcemap: true,
        exports: "named",
      },
      {
        file: "dist/algorithms/index.cjs",
        format: "commonjs",
        sourcemap: true,
        exports: "named",
      },
    ],
  },
  // Graphs module
  {
    input: "src/graphs/index.ts",
    plugins: [...InjectPlugin],
    external: ["node:url", "node:path"],
    output: [
      {
        file: "dist/graphs/index.js",
        format: "esm",
        sourcemap: true,
        exports: "named",
      },
      {
        file: "dist/graphs/index.cjs",
        format: "commonjs",
        sourcemap: true,
        exports: "named",
      },
    ],
  },
  // Performance module
  {
    input: "src/performance/index.ts",
    plugins: [...InjectPlugin],
    external: ["node:url", "node:path"],
    output: [
      {
        file: "dist/performance/index.js",
        format: "esm",
        sourcemap: true,
        exports: "named",
      },
      {
        file: "dist/performance/index.cjs",
        format: "commonjs",
        sourcemap: true,
        exports: "named",
      },
    ],
  },
  // Types module
  {
    input: "src/types/index.ts",
    plugins: [...InjectPlugin],
    external: ["node:url", "node:path"],
    output: [
      {
        file: "dist/types/index.js",
        format: "esm",
        sourcemap: true,
        exports: "named",
      },
      {
        file: "dist/types/index.cjs",
        format: "commonjs",
        sourcemap: true,
        exports: "named",
      },
    ],
  },
  // Compatibility module
  {
    input: "src/compatibility/index.ts",
    plugins: [...InjectPlugin],
    external: ["node:url", "node:path"],
    output: [
      {
        file: "dist/compatibility/index.js",
        format: "esm",
        sourcemap: true,
        exports: "named",
      },
      {
        file: "dist/compatibility/index.cjs",
        format: "commonjs",
        sourcemap: true,
        exports: "named",
      },
    ],
  },
  // Interfaces module
  {
    input: "src/interfaces.ts",
    plugins: [...InjectPlugin],
    external: ["node:url", "node:path"],
    output: [
      {
        file: "dist/interfaces.js",
        format: "esm",
        sourcemap: true,
        exports: "named",
      },
      {
        file: "dist/interfaces.cjs",
        format: "commonjs",
        sourcemap: true,
        exports: "named",
      },
    ],
  },
  // Vector Similarity module (Standalone UMD for visualization)
  {
    input: "src/vector-similarity/index.ts",
    plugins: [...InjectPlugin],
    external: ["node:url", "node:path"],
    output: [
      {
        file: "dist/vector-similarity/vector-similarity.umd.js",
        format: "umd",
        name: "VectorSimilarity",
        sourcemap: true,
        exports: "named",
      },
    ],
  },
]);
