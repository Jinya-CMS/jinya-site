import adapter from '@sveltejs/adapter-bun';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import svg from '@poppanator/sveltekit-svg';

export default defineConfig({
	plugins: [
		sveltekit({
			adapter: adapter({
				// default options are shown
				pages: 'build',
				assets: 'build',
				fallback: null,
				out: 'build'
			})
		}),
		svg(),
		ViteImageOptimizer()
	]
});
