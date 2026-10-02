import type { RouteEntry } from "./types";
import { osasco, barueri, alphaville, santanaParnaiba, saoPaulo } from "../data/localPages";

/** Canonical origin (non-www + https, as used by the current site). */
export const SITE_ORIGIN = "https://ricardoprinciotto.com.br";

const home = { name: "Início", path: "/" };
const regioes = { name: "Regiões", path: "/regioes" };

const regional = (d: typeof osasco): RouteEntry => ({
  path: `/${d.slug}`,
  archetype: "regional",
  hasRouteFile: true,
  title: d.metaTitle,
  description: d.metaDescription,
  breadcrumbs: [home, regioes, { name: d.city, path: `/${d.slug}` }],
  changefreq: "monthly",
  priority: 0.8,
});

/**
 * Central route registry — single source of truth for SEO head, canonical,
 * breadcrumbs, internal links, sitemap.xml, JSON-LD, prerender list and related pages.
 */
export const routes: RouteEntry[] = [
  {
    path: "/",
    archetype: "home",
    hasRouteFile: true,
    title: "Síndico Profissional em Osasco, Barueri, Alphaville e SP",
    description:
      "Ricardo Princiotto — síndico profissional com 20+ anos de experiência, certificado Síndico 5 Estrelas. Gestão estratégica, transparente e presente para condomínios.",
    changefreq: "weekly",
    priority: 1,
  },
  {
    path: "/sobre",
    archetype: "institutional",
    hasRouteFile: true,
    schemaType: "AboutPage",
    title: "Sobre Ricardo Princiotto — Síndico Profissional",
    description:
      "Trajetória, formação e método de Ricardo Princiotto, síndico profissional com mais de 20 anos de experiência em gestão condominial.",
    breadcrumbs: [home, { name: "Sobre", path: "/sobre" }],
  },
  {
    path: "/servicos",
    archetype: "institutional",
    hasRouteFile: true,
    schemaType: "CollectionPage",
    title: "Serviços de Sindicatura Profissional",
    description:
      "Gestão financeira, manutenção preventiva, segurança, governança e prestação de contas: o escopo completo da sindicatura profissional de Ricardo Princiotto.",
    breadcrumbs: [home, { name: "Serviços", path: "/servicos" }],
  },
  {
    path: "/diferenciais",
    archetype: "institutional",
    hasRouteFile: true,
    title: "Diferenciais de Ricardo Princiotto",
    description:
      "Conheça os diferenciais que tornam a sindicatura profissional de Ricardo Princiotto referência: experiência, certificação, presença real, transparência e cobertura formal.",
    breadcrumbs: [home, { name: "Diferenciais", path: "/diferenciais" }],
  },
  {
    path: "/cases",
    archetype: "institutional",
    hasRouteFile: true,
    title: "Cases e Resultados em Gestão Condominial",
    description:
      "Storytelling de cases reais de recuperação financeira, organização operacional e valorização patrimonial conduzidos por Ricardo Princiotto.",
    breadcrumbs: [home, { name: "Cases", path: "/cases" }],
  },
  {
    path: "/regioes",
    archetype: "institutional",
    hasRouteFile: true,
    schemaType: "CollectionPage",
    title: "Regiões Atendidas — Osasco, Barueri, Alphaville e SP",
    description:
      "Atuação como síndico profissional em Osasco, Barueri, Alphaville, Santana de Parnaíba e São Paulo, com presença real nos condomínios.",
    breadcrumbs: [home, regioes],
  },
  {
    path: "/contato",
    archetype: "institutional",
    hasRouteFile: true,
    schemaType: "ContactPage",
    title: "Contato — Solicitar Proposta de Sindicatura",
    description:
      "Entre em contato com Ricardo Princiotto pelo WhatsApp ou formulário. Resposta rápida e proposta personalizada para o seu condomínio.",
    breadcrumbs: [home, { name: "Contato", path: "/contato" }],
  },
  regional(osasco),
  regional(barueri),
  regional(alphaville),
  regional(santanaParnaiba),
  regional(saoPaulo),
  // Future data-driven pages go here, e.g.:
  // { path: "/compliance-condominial", archetype: "service", hasRouteFile: false,
  //   entity: { collection: "service", id: "compliance-condominial" }, ... },
];

export const getRoute = (path: string) => routes.find((r) => r.path === path);
export const isIndexable = (r: RouteEntry) => r.indexable !== false;
export const indexableRoutes = () => routes.filter(isIndexable);
export const dynamicRoutes = () => routes.filter((r) => !r.hasRouteFile);
export const relatedRoutes = (path: string) =>
  (getRoute(path)?.related ?? []).map(getRoute).filter((r): r is RouteEntry => !!r);
export const absoluteUrl = (path: string) => `${SITE_ORIGIN}${path === "/" ? "/" : path}`;

export const buildSitemapXml = () => {
  const urls = indexableRoutes()
    .map(
      (r) =>
        `  <url>\n    <loc>${absoluteUrl(r.path)}</loc>\n` +
        (r.lastmod ? `    <lastmod>${r.lastmod}</lastmod>\n` : "") +
        `    <changefreq>${r.changefreq ?? "monthly"}</changefreq>\n` +
        `    <priority>${(r.priority ?? 0.7).toFixed(1)}</priority>\n  </url>`,
    )
    .join("\n");
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
};
