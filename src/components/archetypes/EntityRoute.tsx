import { absoluteUrl, getRoute } from "@/content/routes";
import { getEntity } from "@/content/collections";
import { routeHead } from "@/lib/seo";
import { archetypeComponents } from "@/components/archetypes";
import type { Entity } from "@/content/types";

const provider = { "@type": "Person", name: "Ricardo Princiotto", jobTitle: "Síndico Profissional" };

/** Service + visible-FAQ structured data for a data-driven page (no fake addresses). */
export const entityJsonLd = (e: Entity, path: string) => {
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

const entityOf = (path: string) => {
  const r = getRoute(path);
  const e = r?.entity ? getEntity(r.entity.collection, r.entity.id) : undefined;
  return { r, e };
};

/** head() for a registry entity page. */
export const entityHead = (path: string) => {
  const { e } = entityOf(path);
  return routeHead(path, e ? entityJsonLd(e, path) : []);
};

/** Renders a registry entity page with its archetype. */
export function EntityPage({ path }: { path: string }) {
  const { r, e } = entityOf(path);
  if (!r?.entity || !e) return null;
  const Component = archetypeComponents[r.entity.collection];
  return <Component entity={e} route={r} />;
}
