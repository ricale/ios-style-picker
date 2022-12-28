import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import dts from 'vite-plugin-dts';

export default defineConfig({
  plugins: [react(), dts()],
  build: {
    sourcemap: true,
    lib: {
      entry: {
        iosStylePicker: path.resolve(__dirname, 'src/index.ts'),
        koFormatter: path.resolve(__dirname, 'src/formatters/ko.ts'),
        enFormatter: path.resolve(__dirname, 'src/formatters/en.ts'),
      },
      name: 'iosStylePicker',
      fileName: (format, entryName) =>
        entryName.match(/Formatter$/)
          ? `formatters/${entryName.replace(/Formatter$/, '')}.${format}.js`
          : `${entryName}.${format}.js`,
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
  },
});
