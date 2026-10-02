import { createFileRoute } from "@tanstack/react-router";
import Cases from "@/pages/Cases";
import { routeHead } from "@/lib/seo";

export const Route = createFileRoute("/cases")({
  head: () => routeHead("/cases"),
  component: Cases,
});
