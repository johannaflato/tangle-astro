// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';
import mdx from '@astrojs/mdx';
import { recmaPlugins } from './src/integrations/mdx/recma.mjs';
import { rehypePlugins } from './src/integrations/mdx/rehype.mjs';
import { remarkPlugins } from './src/integrations/mdx/remark.mjs';

export default defineConfig({
  site: 'https://johannaflato.github.io',
  vite: {
    plugins: [tailwindcss()]
  },
  integrations: [
    mdx({
      syntaxHighlight: 'shiki',
      shikiConfig: { theme: 'css-variables' },
      remarkPlugins: remarkPlugins,
      rehypePlugins: rehypePlugins,
      recmaPlugins: recmaPlugins
    }),
    react()
  ]
});