import { createFileRoute } from "@tanstack/react-router";
import Cases from "@/pages/Cases";
import { seoHead } from "@/lib/seo";

export const Route = createFileRoute("/cases")({
  head: () =>
    seoHead({
      title: "Cases e Resultados em Gestão Condominial",
      description:
        "Storytelling de cases reais de recuperação financeira, organização operacional e valorização patrimonial conduzidos por Ricardo Princiotto.",
      path: "/cases",
    }),
  component: Cases,
});
