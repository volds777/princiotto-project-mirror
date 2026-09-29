import { createFileRoute } from "@tanstack/react-router";
import Sobre from "@/pages/Sobre";
import { seoHead } from "@/lib/seo";

export const Route = createFileRoute("/sobre")({
  head: () =>
    seoHead({
      title: "Sobre Ricardo Princiotto — Síndico Profissional",
      description:
        "Trajetória, formação e método de Ricardo Princiotto, síndico profissional com mais de 20 anos de experiência em gestão condominial.",
      path: "/sobre",
    }),
  component: Sobre,
});
