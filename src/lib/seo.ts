import { SITE } from "@/lib/site";

interface SeoHeadInput {
  title: string;
  description: string;
  path?: string;
}

/** Builds the head() meta/links for a page, mirroring the original site's SEO tags. */
export const seoHead = ({ title, description, path = "/" }: SeoHeadInput) => {
  const url = `${SITE.baseUrl}${path}`;
  const fullTitle = title.includes(SITE.name) ? title : `${title} | ${SITE.name}`;
  return {
    meta: [
      { title: fullTitle },
      { name: "description", content: description },
      { name: "author", content: SITE.name },
      { property: "og:title", content: fullTitle },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: url },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: fullTitle },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: url }],
  };
};
