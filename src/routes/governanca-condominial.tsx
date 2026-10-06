import { createFileRoute } from "@tanstack/react-router";
import { EntityPage, entityHead } from "@/components/archetypes/EntityRoute";

const PATH = "/governanca-condominial";

export const Route = createFileRoute("/governanca-condominial")({
  head: () => entityHead(PATH),
  component: () => <EntityPage path={PATH} />,
});
