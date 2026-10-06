import { createFileRoute } from "@tanstack/react-router";
import { EntityPage, entityHead } from "@/components/archetypes/EntityRoute";

const PATH = "/gestao-de-inadimplencia-condominial";

export const Route = createFileRoute("/gestao-de-inadimplencia-condominial")({
  head: () => entityHead(PATH),
  component: () => <EntityPage path={PATH} />,
});
