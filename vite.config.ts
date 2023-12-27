import { resolve } from 'path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

export default defineConfig({
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'), // 设置 `@` 指向 `src` 目录
    },
  },
  // vite默认会打包出umd和esmodule两种导出方式的文件，以下配置会打包出两份结果：
  // gr-lib.umd.js umd导出方式，兼容amd commenjs
  // gr-lib.mjs esmodule导出方式
  build: {
    lib: {
      entry: resolve(__dirname, './src/main.ts'),
      name: 'word-man',
      fileName: 'word-man',
      formats: ['es'],
    },
    rollupOptions: {
      external: ['vue'],
    },
    minify: 'esbuild',
  },
  plugins: [dts({ tsconfigPath: './tsconfig.json' })],
});
