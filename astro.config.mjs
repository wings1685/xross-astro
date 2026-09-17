// @ts-check
import { defineConfig } from 'astro/config';

import svelte from '@astrojs/svelte';
import solidJs from '@astrojs/solid-js';
import vue from '@astrojs/vue';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
	integrations: [
		svelte(),
		solidJs({
			include: ['**/Solid/**/*'],
		}),
		vue(),
		react({
			include: ['**/React/**/*'],
		}),
	],
});
