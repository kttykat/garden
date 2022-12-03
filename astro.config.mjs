import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
	build: {
		format: "file",
	},
	server: {
		port: 7233,
	},
	markdown: {
		shikiConfig: {
			theme: "one-dark-pro",
		},
	},
	integrations: [mdx(), tailwind()],
});
