import { createFileRoute } from "@tanstack/react-router";
import GestaoCondominial from "@/pages/GestaoCondominial";
import { routeHead } from "@/lib/seo";

export const Route = createFileRoute("/gestao-condominial")({
  head: () => routeHead("/gestao-condominial"),
  component: GestaoCondominial,
});
