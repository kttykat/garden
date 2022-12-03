import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
	integrations: [mdx(), tailwind()],
	server: {
		port: 7233,
	},
	markdown: {
		shikiConfig: {
			theme: "one-dark-pro",
		},
	},
});
