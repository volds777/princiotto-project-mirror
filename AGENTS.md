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

- Rotas em `src/routes/*` são wrappers finos: definem `head()` via `seoHead()` (`src/lib/seo.ts`) e renderizam o componente de página em `src/pages/*`. Motivo: o site foi migrado de um projeto React Router, mantendo as páginas originais intactas.
- Header, Footer, WhatsApp e animações GSAP ficam em `src/components/site/Layout.tsx`, montado no `__root`. Motivo: layout único para todas as páginas.
