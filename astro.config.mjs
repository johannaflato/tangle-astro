// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import mdx from '@astrojs/mdx';
import tailwindcss from '@tailwindcss/vite';

// Import MDX plugins
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
      shikiConfig: { 
        theme: 'github-dark',
        wrap: true
      },
      recmaPlugins,
      rehypePlugins,
      remarkPlugins,
      gfm: true
    }),
    react()
  ]
});