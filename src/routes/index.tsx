import { createFileRoute } from "@tanstack/react-router";
import Index from "@/pages/Index";
import { routeHead } from "@/lib/seo";

export const Route = createFileRoute("/")({
  head: () => routeHead("/"),
  component: Index,
});
