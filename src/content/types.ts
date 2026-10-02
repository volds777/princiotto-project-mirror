/**
 * Content model for data-driven entry pages.
 * IMPORTANT: files under src/content must stay pure data (no React, no "@/"
 * aliases, no asset imports) — vite.config.ts imports the route registry at build time.
 */

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface Section {
  title: string;
  paragraphs?: string[];
  bullets?: string[];
}

interface BaseEntity {
  id: string;
  /** Short display name, used in breadcrumbs and internal links. */
  name: string;
  hero: { eyebrow: string; title: string; lede?: string };
  sections: Section[];
  faqIds?: string[];
  proofIds?: string[];
  caseIds?: string[];
  cta?: { title?: string; description?: string; waMessage?: string };
}

export interface Service extends BaseEntity { kind: "service" }
export interface Problem extends BaseEntity { kind: "problem"; symptoms?: string[] }
export interface Audience extends BaseEntity { kind: "audience" }
export interface CondoType extends BaseEntity { kind: "condoType" }
export interface Location extends BaseEntity { kind: "location"; city: string; state: string }
export interface Decision extends BaseEntity { kind: "decision" }

export type Entity = Service | Problem | Audience | CondoType | Location | Decision;

export interface Proof {
  id: string;
  label: string;
  value?: string;
  description?: string;
}

export interface CaseStudy {
  id: string;
  title: string;
  summary: string;
  result?: string;
}

export type Archetype =
  | "home"
  | "institutional"
  | "regional" // legacy regional pages (LocalPageTemplate)
  | "service"
  | "problem"
  | "audience"
  | "condoType"
  | "location"
  | "decision";

export interface Breadcrumb {
  name: string;
  path: string;
}

export interface RouteEntry {
  /** Public URL, no trailing slash ("/" for home). Never change for existing routes. */
  path: string;
  archetype: Archetype;
  title: string;
  description: string;
  /** false → noindex, excluded from sitemap and prerender. Default true. */
  indexable?: boolean;
  /** true when the route has its own file in src/routes; false → served by the dynamic $slug route. */
  hasRouteFile: boolean;
  /** Entity backing a dynamic page (collection + id). */
  entity?: { collection: Exclude<Archetype, "home" | "institutional" | "regional">; id: string };
  breadcrumbs?: Breadcrumb[];
  related?: string[];
  ogImage?: string;
  changefreq?: "weekly" | "monthly" | "yearly";
  priority?: number;
  /** schema.org @type for the page's WebPage node. */
  schemaType?: "WebPage" | "AboutPage" | "ContactPage" | "CollectionPage" | "FAQPage";
  lastmod?: string;
}
