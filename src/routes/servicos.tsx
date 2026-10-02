import { createFileRoute } from "@tanstack/react-router";
import Servicos from "@/pages/Servicos";
import { routeHead } from "@/lib/seo";

export const Route = createFileRoute("/servicos")({
  head: () => routeHead("/servicos"),
  component: Servicos,
});
