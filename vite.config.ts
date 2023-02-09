/// <reference types="vitest" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import { resolve } from 'path';

export default defineConfig({
	plugins: [react()],
	base: '/hot-soup/',
	resolve: {
		alias: { '@': resolve(__dirname, 'src') }
	},
	test: {
		globals: true,
		environment: 'jsdom',
		coverage: {
			// or 'istanbul'
			provider: 'c8',
			reporter: ['text', 'lcov']
		}
	}
});
