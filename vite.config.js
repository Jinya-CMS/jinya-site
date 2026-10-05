import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import svg from '@poppanator/sveltekit-svg';
import adapter from 'svelte-adapter-bun';

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
