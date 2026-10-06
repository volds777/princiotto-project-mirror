import { createFileRoute } from "@tanstack/react-router";
import { EntityPage, entityHead } from "@/components/archetypes/EntityRoute";

const PATH = "/gestao-administrativa-de-condominio";

export const Route = createFileRoute("/gestao-administrativa-de-condominio")({
  head: () => entityHead(PATH),
  component: () => <EntityPage path={PATH} />,
});
