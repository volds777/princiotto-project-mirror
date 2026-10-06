import { createFileRoute } from "@tanstack/react-router";
import { EntityPage, entityHead } from "@/components/archetypes/EntityRoute";

const PATH = "/gestao-de-contratos-do-condominio";

export const Route = createFileRoute("/gestao-de-contratos-do-condominio")({
  head: () => entityHead(PATH),
  component: () => <EntityPage path={PATH} />,
});
