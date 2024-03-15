import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

import svelte from "@astrojs/svelte";

// https://astro.build/config
export default defineConfig({
  i18n: {
    defaultLocale: "en",
    locales: ["en", "es", "pt-br"],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  integrations: [tailwind(), svelte()],
});
