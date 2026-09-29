import { createFileRoute } from "@tanstack/react-router";
import { LocalPageTemplate } from "@/components/site/LocalPageTemplate";
import { barueri } from "@/data/localPages";
import { seoHead } from "@/lib/seo";

export const Route = createFileRoute("/sindico-profissional-barueri")({
  head: () =>
    seoHead({
      title: barueri.metaTitle,
      description: barueri.metaDescription,
      path: "/sindico-profissional-barueri",
    }),
  component: () => <LocalPageTemplate data={barueri} />,
});
