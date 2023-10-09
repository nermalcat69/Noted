import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import vue from "@astrojs/vue";
import robots from "astro-robots";

// https://astro.build/config
export default defineConfig({
  site: "https://example.com",
  integrations: [
  // Enable Preact to support Preact JSX components.
  vue(), tailwind(), robots()]
});