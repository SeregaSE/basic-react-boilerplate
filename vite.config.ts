import { fileURLToPath, URL } from 'node:url';
import react from '@vitejs/plugin-react';
import browserslist from 'browserslist';
import { browserslistToTargets } from 'lightningcss';
import { defineConfig } from 'vitest/config';

// Derive Lightning CSS targets from .browserslistrc so autoprefixing and
// modern-CSS downleveling honor the same browser matrix as before.
const targets = browserslistToTargets(browserslist());

export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            '@components': fileURLToPath(
                new URL('./src/components', import.meta.url)
            ),
        },
    },
    css: {
        transformer: 'lightningcss',
        lightningcss: { targets },
    },
    build: {
        cssMinify: 'lightningcss',
    },
    test: {
        environment: 'jsdom',
        globals: true,
        setupFiles: './src/setupTests.ts',
    },
});
