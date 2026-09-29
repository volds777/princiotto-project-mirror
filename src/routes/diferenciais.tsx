import { createFileRoute } from "@tanstack/react-router";
import Diferenciais from "@/pages/Diferenciais";
import { seoHead } from "@/lib/seo";

export const Route = createFileRoute("/diferenciais")({
  head: () =>
    seoHead({
      title: "Diferenciais de Ricardo Princiotto",
      description:
        "Conheça os diferenciais que tornam a sindicatura profissional de Ricardo Princiotto referência: experiência, certificação, presença real, transparência e cobertura formal.",
      path: "/diferenciais",
    }),
  component: Diferenciais,
});
