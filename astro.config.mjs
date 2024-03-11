import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
// https://celsofranciscano.github.io/tailwindcssui/
export default defineConfig({
	site: 'https://celsofranciscano.github.io/tailwindcssui/',
	integrations: [mdx(), sitemap()],
});
