import { createFileRoute } from "@tanstack/react-router";
import { EntityPage, entityHead } from "@/components/archetypes/EntityRoute";

const PATH = "/prestacao-de-contas-condominial";

export const Route = createFileRoute("/prestacao-de-contas-condominial")({
  head: () => entityHead(PATH),
  component: () => <EntityPage path={PATH} />,
});
