import { createFileRoute } from "@tanstack/react-router";
import { LocalPageTemplate } from "@/components/site/LocalPageTemplate";
import { santanaParnaiba } from "@/data/localPages";
import { seoHead } from "@/lib/seo";

export const Route = createFileRoute("/sindico-profissional-santana-de-parnaiba")({
  head: () =>
    seoHead({
      title: santanaParnaiba.metaTitle,
      description: santanaParnaiba.metaDescription,
      path: "/sindico-profissional-santana-de-parnaiba",
    }),
  component: () => <LocalPageTemplate data={santanaParnaiba} />,
});
