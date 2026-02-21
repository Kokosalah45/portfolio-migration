/// <reference types="vitest" />

import { svelte } from "@sveltejs/vite-plugin-svelte";
import { defineConfig } from "vitest/config";

export default defineConfig(({ mode }) => ({
	plugins: [svelte()],
	resolve: {
		conditions: mode === "test" ? ["browser"] : [],
	},
	test: {
		globals: true,
		environment: "jsdom",
		setupFiles: ["./src/setup-tests.ts"],
	},
}));
