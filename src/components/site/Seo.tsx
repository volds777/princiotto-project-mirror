import { SITE } from "@/lib/site";

interface SeoProps {
  title: string;
  description: string;
  path?: string;
  jsonLd?: Record<string, unknown> | Record<string, unknown>[];
}

/**
 * Title/description/canonical/og tags are declared per route via the
 * TanStack Router `head()` option (see src/lib/seo.ts).
 * This component only emits structured data (JSON-LD) for the page.
 */
export const Seo = ({ jsonLd }: SeoProps) => {
  if (!jsonLd) return null;
  const blocks = Array.isArray(jsonLd) ? jsonLd : [jsonLd];
  return (
    <>
      {blocks.map((block, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(block) }}
        />
      ))}
    </>
  );
};

export const seoUrl = (path = "/") => `${SITE.baseUrl}${path}`;
