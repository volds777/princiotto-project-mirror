import { createFileRoute } from "@tanstack/react-router";
import { LocalPageTemplate } from "@/components/site/LocalPageTemplate";
import { osasco } from "@/data/localPages";
import { routeHead } from "@/lib/seo";

export const Route = createFileRoute("/sindico-profissional-osasco")({
  head: () => routeHead("/sindico-profissional-osasco"),
  component: () => <LocalPageTemplate data={osasco} />,
});
