import { defineConfig } from "@lovable.dev/vite-tanstack-config";
import netlify from "@netlify/vite-plugin-tanstack-start";

export default defineConfig({
  tanstackStart: {
    server: { entry: "server" },
  },

  // Deployment (Netlify Functions) is handled by @netlify/vite-plugin-tanstack-start.
  // Nitro is a separate deploy-target bundler (defaults to a Cloudflare Workers build)
  // that isn't needed here and conflicts with the Netlify build path.
  nitro: false,

  vite: {
    plugins: [netlify()],
  },
});