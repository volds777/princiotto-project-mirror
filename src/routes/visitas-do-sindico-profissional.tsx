import { createFileRoute } from "@tanstack/react-router";
import { EntityPage, entityHead } from "@/components/archetypes/EntityRoute";

const PATH = "/visitas-do-sindico-profissional";

export const Route = createFileRoute("/visitas-do-sindico-profissional")({
  head: () => entityHead(PATH),
  component: () => <EntityPage path={PATH} />,
});
