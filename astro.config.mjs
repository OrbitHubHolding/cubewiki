import { defineConfig } from "astro/config";
import decapCmsOauth from "astro-decap-cms-oauth";

// https://astro.build/config
export default defineConfig({
  output: "server",
  integrations: [decapCmsOauth()]
});