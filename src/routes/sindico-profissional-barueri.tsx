import { createFileRoute } from "@tanstack/react-router";
import { LocalPageTemplate } from "@/components/site/LocalPageTemplate";
import { barueri } from "@/data/localPages";
import { routeHead } from "@/lib/seo";

export const Route = createFileRoute("/sindico-profissional-barueri")({
  head: () => routeHead("/sindico-profissional-barueri"),
  component: () => <LocalPageTemplate data={barueri} />,
});
