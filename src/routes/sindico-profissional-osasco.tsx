import { createFileRoute } from "@tanstack/react-router";
import { LocalPageTemplate } from "@/components/site/LocalPageTemplate";
import { osasco } from "@/data/localPages";
import { seoHead } from "@/lib/seo";

export const Route = createFileRoute("/sindico-profissional-osasco")({
  head: () =>
    seoHead({
      title: osasco.metaTitle,
      description: osasco.metaDescription,
      path: "/sindico-profissional-osasco",
    }),
  component: () => <LocalPageTemplate data={osasco} />,
});
