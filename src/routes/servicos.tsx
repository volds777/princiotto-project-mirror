import { createFileRoute } from "@tanstack/react-router";
import Servicos from "@/pages/Servicos";
import { seoHead } from "@/lib/seo";

export const Route = createFileRoute("/servicos")({
  head: () =>
    seoHead({
      title: "Serviços de Sindicatura Profissional",
      description:
        "Gestão financeira, manutenção preventiva, segurança, governança e prestação de contas: o escopo completo da sindicatura profissional de Ricardo Princiotto.",
      path: "/servicos",
    }),
  component: Servicos,
});
