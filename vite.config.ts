import { defineConfig } from 'vite';
import { angular } from '@nitedani/vite-plugin-angular/plugin';

import path from 'path';

export default defineConfig({
  plugins: [angular()],
  root: path.resolve(__dirname, '.'),
  resolve: {
    alias: {
      '~bootstrap': path.resolve(__dirname, 'node_modules/bootstrap'),
    }
  },
  server: {
    port: 5000,
    hot: true
  }

});
