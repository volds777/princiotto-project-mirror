import { createFileRoute } from "@tanstack/react-router";
import { EntityPage, entityHead } from "@/components/archetypes/EntityRoute";

const PATH = "/gestao-de-prestadores-e-equipes";

export const Route = createFileRoute("/gestao-de-prestadores-e-equipes")({
  head: () => entityHead(PATH),
  component: () => <EntityPage path={PATH} />,
});
