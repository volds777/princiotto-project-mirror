import { createFileRoute } from "@tanstack/react-router";
import { LocalPageTemplate } from "@/components/site/LocalPageTemplate";
import { alphaville } from "@/data/localPages";
import { routeHead } from "@/lib/seo";

export const Route = createFileRoute("/sindico-profissional-alphaville")({
  head: () => routeHead("/sindico-profissional-alphaville"),
  component: () => <LocalPageTemplate data={alphaville} />,
});
