import { createFileRoute } from "@tanstack/react-router";
import Regioes from "@/pages/Regioes";
import { routeHead } from "@/lib/seo";

export const Route = createFileRoute("/regioes")({
  head: () => routeHead("/regioes"),
  component: Regioes,
});
