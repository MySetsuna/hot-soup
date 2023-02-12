// / <reference types="vitest" />
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react-swc';
import { resolve } from 'path';
import type { UserConfig as VitestUserConfigInterface } from 'vitest/config';

const vitestConfig: VitestUserConfigInterface = {
	test: {
		globals: true,
		environment: 'jsdom',
		coverage: {
			// or 'istanbul'
			provider: 'c8',
			reporter: ['text', 'lcov']
		}
	}
};
export default defineConfig(({ mode }) => {
	// https://cn.vitejs.dev/config/#using-environment-variables-in-config
	const env = loadEnv(mode, process.cwd(), '');
	return {
		plugins: [react()],
		base: env.BASE_URL,
		resolve: {
			alias: {
				$: resolve(__dirname, 'src')
			}
		},
		test: vitestConfig.test
	};
});
