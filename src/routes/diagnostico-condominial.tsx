import { createFileRoute } from "@tanstack/react-router";
import { EntityPage, entityHead } from "@/components/archetypes/EntityRoute";

const PATH = "/diagnostico-condominial";

export const Route = createFileRoute("/diagnostico-condominial")({
  head: () => entityHead(PATH),
  component: () => <EntityPage path={PATH} />,
});
