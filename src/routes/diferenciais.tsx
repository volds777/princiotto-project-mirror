import { createFileRoute } from "@tanstack/react-router";
import Diferenciais from "@/pages/Diferenciais";
import { routeHead } from "@/lib/seo";

export const Route = createFileRoute("/diferenciais")({
  head: () => routeHead("/diferenciais"),
  component: Diferenciais,
});
