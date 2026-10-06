// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - TanStack devtools (dev-only, first), tanstackStart, viteReact, tailwindcss, tsConfigPaths,
//     nitro (build-only using cloudflare as a default target), VITE_* env injection, @ path alias,
//     React/TanStack dedupe, error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";
import { indexableRoutes, SITE_ORIGIN } from "./src/content/routes";

export default defineConfig({
  vite: { server: { watch: { ignored: ["**/site-pronto/**"] } } },
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
    // Every indexable registry route is prerendered to <path>/index.html at build time.
    pages: indexableRoutes().map((r) => ({
      path: r.path,
      sitemap: {
        ...(r.lastmod ? { lastmod: r.lastmod } : {}),
        ...(r.changefreq ? { changefreq: r.changefreq } : {}),
        ...(r.priority !== undefined ? { priority: r.priority } : {}),
      },
    })),
    prerender: { enabled: true, autoStaticPathsDiscovery: false },
    // SPA shell used as fallback for non-prerendered URLs on static hosting.
    spa: { enabled: true },
    sitemap: { enabled: true, host: SITE_ORIGIN },
  },
});
