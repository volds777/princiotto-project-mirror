import { SITE } from "@/lib/site";
import { absoluteUrl, getRoute, isIndexable } from "@/content/routes";
import type { RouteEntry } from "@/content/types";

interface SeoHeadInput {
  title: string;
  description: string;
  path?: string;
  robots?: string;
  ogImage?: string;
  jsonLd?: Record<string, unknown>[];
}

const fullTitleOf = (title: string) => (title.includes(SITE.name) ? title : `${title} | ${SITE.name}`);

/** Low-level builder: title, description, canonical, robots, Open Graph, Twitter Card, JSON-LD. */
export const seoHead = ({ title, description, path = "/", robots = "index, follow", ogImage, jsonLd = [] }: SeoHeadInput) => {
  const url = absoluteUrl(path);
  const fullTitle = fullTitleOf(title);
  const meta: Record<string, string>[] = [
    { title: fullTitle },
    { name: "description", content: description },
    { name: "robots", content: robots },
    { name: "author", content: SITE.name },
    { property: "og:title", content: fullTitle },
    { property: "og:description", content: description },
    { property: "og:type", content: "website" },
    { property: "og:url", content: url },
    { property: "og:locale", content: "pt_BR" },
    { property: "og:site_name", content: SITE.name },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: fullTitle },
    { name: "twitter:description", content: description },
  ];
  if (ogImage) {
    meta.push({ property: "og:image", content: ogImage }, { name: "twitter:image", content: ogImage });
  }
  return {
    meta,
    links: [{ rel: "canonical", href: url }],
    scripts: jsonLd.map((block) => ({ type: "application/ld+json", children: JSON.stringify(block) })),
  };
};

export const breadcrumbJsonLd = (r: RouteEntry) =>
  r.breadcrumbs && r.breadcrumbs.length > 1
    ? {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: r.breadcrumbs.map((b, i) => ({
          "@type": "ListItem",
          position: i + 1,
          name: b.name,
          item: absoluteUrl(b.path),
        })),
      }
    : null;

/** head() for any registered route — reads everything from the central registry. */
export const routeHead = (path: string, extraJsonLd: Record<string, unknown>[] = []) => {
  const r = getRoute(path);
  if (!r) return { meta: [{ title: SITE.name }, { name: "robots", content: "noindex" }] };
  const blocks: Record<string, unknown>[] = [];
  if (r.archetype !== "home") {
    blocks.push({
      "@context": "https://schema.org",
      "@type": r.schemaType ?? "WebPage",
      name: fullTitleOf(r.title),
      description: r.description,
      url: absoluteUrl(r.path),
      inLanguage: "pt-BR",
    });
  }
  const bc = breadcrumbJsonLd(r);
  if (bc) blocks.push(bc);
  return seoHead({
    title: r.title,
    description: r.description,
    path: r.path,
    robots: isIndexable(r) ? "index, follow" : "noindex, follow",
    ...(r.ogImage ? { ogImage: r.ogImage } : {}),
    jsonLd: [...blocks, ...extraJsonLd],
  });
};
