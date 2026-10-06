import { createFileRoute, notFound } from "@tanstack/react-router";
import { absoluteUrl, getRoute } from "@/content/routes";
import { getEntity } from "@/content/collections";
import { routeHead } from "@/lib/seo";
import { archetypeComponents } from "@/components/archetypes";
import type { Entity } from "@/content/types";

const provider = { "@type": "Person", name: "Ricardo Princiotto", jobTitle: "Síndico Profissional" };

/** Service + visible-FAQ structured data for a data-driven page (no fake addresses). */
const entityJsonLd = (e: Entity, path: string) => {
  const blocks: Record<string, unknown>[] = [];
  if (e.kind !== "decision") {
    blocks.push({
      "@context": "https://schema.org",
      "@type": "Service",
      name: e.name,
      serviceType: "Sindicatura profissional de condomínios",
      provider,
      url: absoluteUrl(path),
      ...(e.kind === "location" ? { areaServed: { "@type": "Place", name: e.areaServed } } : {}),
    });
  }
  if (e.faqs?.length) {
    blocks.push({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: e.faqs.map((f) => ({ "@type": "Question", name: f.question, acceptedAnswer: { "@type": "Answer", text: f.answer } })),
    });
  }
  return blocks;
};

/**
 * Serves every registry entry with hasRouteFile: false. Existing pages keep
 * their own route files (static routes always win over this dynamic one).
 */
export const Route = createFileRoute("/$slug")({
  loader: ({ params }) => {
    const route = getRoute(`/${params.slug}`);
    if (!route || route.hasRouteFile || !route.entity) throw notFound();
    if (!getEntity(route.entity.collection, route.entity.id)) throw notFound();
    return { path: route.path };
  },
  head: ({ loaderData }) => {
    if (!loaderData) return { meta: [{ title: "Página não encontrada" }, { name: "robots", content: "noindex" }] };
    const r = getRoute(loaderData.path);
    const e = r?.entity ? getEntity(r.entity.collection, r.entity.id) : undefined;
    return routeHead(loaderData.path, e ? entityJsonLd(e, loaderData.path) : []);
  },
  component: DynamicPage,
});

function DynamicPage() {
  const { path } = Route.useLoaderData();
  const route = getRoute(path);
  if (!route?.entity) return null;
  const entity = getEntity(route.entity.collection, route.entity.id);
  if (!entity) return null;
  const Component = archetypeComponents[route.entity.collection];
  return <Component entity={entity} route={route} />;
}
