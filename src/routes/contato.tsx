import { createFileRoute } from "@tanstack/react-router";
import Contato from "@/pages/Contato";
import { seoHead } from "@/lib/seo";

export const Route = createFileRoute("/contato")({
  head: () =>
    seoHead({
      title: "Contato — Solicitar Proposta de Sindicatura",
      description:
        "Entre em contato com Ricardo Princiotto pelo WhatsApp ou formulário. Resposta rápida e proposta personalizada para o seu condomínio.",
      path: "/contato",
    }),
  component: Contato,
});
