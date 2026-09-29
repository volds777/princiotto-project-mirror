import { createFileRoute } from "@tanstack/react-router";
import { LocalPageTemplate } from "@/components/site/LocalPageTemplate";
import { saoPaulo } from "@/data/localPages";
import { seoHead } from "@/lib/seo";

export const Route = createFileRoute("/sindico-profissional-sao-paulo")({
  head: () =>
    seoHead({
      title: saoPaulo.metaTitle,
      description: saoPaulo.metaDescription,
      path: "/sindico-profissional-sao-paulo",
    }),
  component: () => <LocalPageTemplate data={saoPaulo} />,
});
