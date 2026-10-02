import { createFileRoute } from "@tanstack/react-router";
import Contato from "@/pages/Contato";
import { routeHead } from "@/lib/seo";

export const Route = createFileRoute("/contato")({
  head: () => routeHead("/contato"),
  component: Contato,
});
