import { defineConfig } from "astro/config";
import decapCmsOauth from "astro-decap-cms-oauth";
import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  output: "hybrid",
  integrations: [decapCmsOauth({oauthDisabled: true})],
  adapter: cloudflare()
});