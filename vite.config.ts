import { resolve } from 'path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

export default defineConfig({
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'), // 设置 `@` 指向 `src` 目录
    },
  },
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
  },
  plugins: [dts({ tsconfigPath: './tsconfig.json' })],
});
