// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
	site: 'https://johannaflato.github.io',
	// base: 'tangle-astro',
	vite: {
		plugins: [tailwindcss()]
	}
});
