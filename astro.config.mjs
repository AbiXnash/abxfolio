// @ts-check
import { defineConfig } from 'astro/config';

import altanoprettierResponse from '@altano/astro-prettier-response';

// https://astro.build/config
export default defineConfig({
  integrations: [altanoprettierResponse()]
});