import { createFileRoute } from "@tanstack/react-router";
import { EntityPage, entityHead } from "@/components/archetypes/EntityRoute";

const PATH = "/compliance-condominial";

export const Route = createFileRoute("/compliance-condominial")({
  head: () => entityHead(PATH),
  component: () => <EntityPage path={PATH} />,
});
