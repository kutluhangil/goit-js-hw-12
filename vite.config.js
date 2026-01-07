import { defineConfig } from 'vite';

export default defineConfig({
    define: {
        global: 'window', // Fix for packages relying on 'global'
    },
    build: {
        sourcemap: true,
        outDir: 'dist',
    },
    base: '/goit-js-hw-11/',
});
