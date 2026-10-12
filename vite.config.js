import { resolve } from 'path';

export default {
  root: 'visualization',
  build: {
    outDir: '../dist/visualization',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'visualization/index.html'),
        'vector-similarity': resolve(__dirname, 'visualization/vector-similarity/index.html'),
        'graph-viz': resolve(__dirname, 'visualization/algorithms/graphs/index.html')
      }
    }
  },
  preview: {
    port: 8080,
    strictPort: true
  },
  resolve: {
    alias: {
      vue: 'vue/dist/vue.esm-bundler.js'
    }
  }
}
