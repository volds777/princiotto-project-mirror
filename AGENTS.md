<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Estrutura do site

- Existing routes in `src/routes/*` are thin wrappers that use `routeHead()` and render original pages from `src/pages/*`; each data-driven entity also gets a thin route file using `EntityPage`/`entityHead`, with `/$slug` kept only as fallback. Why: every page needs its own server-rendered title and must appear in the route list.
- Header, Footer, WhatsApp e animações GSAP ficam em `src/components/site/Layout.tsx`, montado no `__root`. Motivo: layout único para todas as páginas.
- Keep metadata, breadcrumbs, related links and the static page list in `src/content/routes.ts`, and fill entities in `src/content/collections.ts`. Why: one registry keeps discovery and page details consistent.
- Prerender registered indexable pages and generate the sitemap through TanStack Start in `vite.config.ts`; host the `dist/client` output for static delivery. Why: each public URL needs its own HTML while preserving the editable app preview.
