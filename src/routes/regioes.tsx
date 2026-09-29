import { createFileRoute } from "@tanstack/react-router";
import Regioes from "@/pages/Regioes";
import { seoHead } from "@/lib/seo";

export const Route = createFileRoute("/regioes")({
  head: () =>
    seoHead({
      title: "Regiões Atendidas — Osasco, Barueri, Alphaville e SP",
      description:
        "Atuação como síndico profissional em Osasco, Barueri, Alphaville, Santana de Parnaíba e São Paulo, com presença real nos condomínios.",
      path: "/regioes",
    }),
  component: Regioes,
});
