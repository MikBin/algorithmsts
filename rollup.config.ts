import { defineConfig } from "rollup";
import typescript from "@rollup/plugin-typescript";
import terser from "@rollup/plugin-terser";
import del from "rollup-plugin-delete";
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
          declaration: true,
        }),
        del({ targets: "dist/*", verbose: true }),
      ]
    : [
        nodeResolve({
          extensions: [".js", ".jsx", ".ts", ".tsx"],
          mainFields: ["browser", "module", "main"],
        }),
        typescript({
          sourceMap: true,
          inlineSources: true,
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
        file: "dist/algorithmsts.min.cjs",
        format: "commonjs",
        sourcemap: true,
      },
      // es module
      {
        file: "dist/algorithmsts.esm.js",
        format: "esm",
        sourcemap: true,
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
      },
      {
        file: "dist/core/index.cjs",
        format: "commonjs",
        sourcemap: true,
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
      },
      {
        file: "dist/data-structures/index.cjs",
        format: "commonjs",
        sourcemap: true,
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
      },
      {
        file: "dist/algorithms/index.cjs",
        format: "commonjs",
        sourcemap: true,
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
      },
      {
        file: "dist/graphs/index.cjs",
        format: "commonjs",
        sourcemap: true,
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
      },
      {
        file: "dist/performance/index.cjs",
        format: "commonjs",
        sourcemap: true,
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
      },
      {
        file: "dist/types/index.cjs",
        format: "commonjs",
        sourcemap: true,
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
      },
      {
        file: "dist/compatibility/index.cjs",
        format: "commonjs",
        sourcemap: true,
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
      },
      {
        file: "dist/interfaces.cjs",
        format: "commonjs",
        sourcemap: true,
      },
    ],
  },
]);
