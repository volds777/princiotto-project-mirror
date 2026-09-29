import { createFileRoute } from "@tanstack/react-router";
import { LocalPageTemplate } from "@/components/site/LocalPageTemplate";
import { alphaville } from "@/data/localPages";
import { seoHead } from "@/lib/seo";

export const Route = createFileRoute("/sindico-profissional-alphaville")({
  head: () =>
    seoHead({
      title: alphaville.metaTitle,
      description: alphaville.metaDescription,
      path: "/sindico-profissional-alphaville",
    }),
  component: () => <LocalPageTemplate data={alphaville} />,
});
