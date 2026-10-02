import { createFileRoute } from "@tanstack/react-router";
import { LocalPageTemplate } from "@/components/site/LocalPageTemplate";
import { santanaParnaiba } from "@/data/localPages";
import { routeHead } from "@/lib/seo";

export const Route = createFileRoute("/sindico-profissional-santana-de-parnaiba")({
  head: () => routeHead("/sindico-profissional-santana-de-parnaiba"),
  component: () => <LocalPageTemplate data={santanaParnaiba} />,
});
