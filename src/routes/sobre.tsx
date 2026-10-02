import { createFileRoute } from "@tanstack/react-router";
import Sobre from "@/pages/Sobre";
import { routeHead } from "@/lib/seo";

export const Route = createFileRoute("/sobre")({
  head: () => routeHead("/sobre"),
  component: Sobre,
});
