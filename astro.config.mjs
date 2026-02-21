import svelte from "@astrojs/svelte";
import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { readFileSync } from 'node:fs'


import mdx from "@astrojs/mdx";

import expressiveCode from "astro-expressive-code";

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const pgsqlGrammar = readFileSync(
  path.join(__dirname, './syntaxes/pgsql.tmLanguage.json'),
  'utf8'
)
const pgsqlGrammarJson = JSON.parse(pgsqlGrammar)
console.log({pgsqlGrammar});
// https://astro.build/config
export default defineConfig({
    i18n: {
        defaultLocale: "en",
        locales: ["en", "es", "pt-br"],
        routing: {
            prefixDefaultLocale: false,
        },
    },
    integrations: [tailwind(), svelte(),expressiveCode({
        shiki:{
            langs: [
                {
                    ...pgsqlGrammarJson,
                    aliases: ['pgsql', 'postgresql', 'postgreSQL']
                }
            ]
        }
    }), mdx()],
});