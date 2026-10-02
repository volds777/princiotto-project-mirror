import { createFileRoute } from "@tanstack/react-router";
import { LocalPageTemplate } from "@/components/site/LocalPageTemplate";
import { saoPaulo } from "@/data/localPages";
import { routeHead } from "@/lib/seo";

export const Route = createFileRoute("/sindico-profissional-sao-paulo")({
  head: () => routeHead("/sindico-profissional-sao-paulo"),
  component: () => <LocalPageTemplate data={saoPaulo} />,
});
