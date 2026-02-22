import { readFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import mdx from "@astrojs/mdx";
import svelte from "@astrojs/svelte";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";

import expressiveCode from "astro-expressive-code";

import vercel from "@astrojs/vercel";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const pgsqlGrammar = readFileSync(
    path.join(__dirname, "./syntaxes/pgsql.tmLanguage.json"),
    "utf8",
);
const pgsqlGrammarJson = JSON.parse(pgsqlGrammar);
// https://astro.build/config
export default defineConfig({
  output: "server",

  i18n: {
      defaultLocale: "en",
      locales: ["en", "es", "pt-br"],
      routing: {
          prefixDefaultLocale: false,
      },
	},

  vite: {
      plugins: [tailwindcss()],
	},

  integrations: [
      svelte(),
      expressiveCode({
          shiki: {
              langs: [
                  {
                      ...pgsqlGrammarJson,
                      aliases: ["pgsql", "postgresql", "postgreSQL"],
                  },
              ],
          },
      }),
      mdx(),
	],

  adapter: vercel(),
});