import { createFileRoute } from "@tanstack/react-router";
import { EntityPage, entityHead } from "@/components/archetypes/EntityRoute";

const PATH = "/o-que-faz-um-sindico-profissional";

export const Route = createFileRoute("/o-que-faz-um-sindico-profissional")({
  head: () => entityHead(PATH),
  component: () => <EntityPage path={PATH} />,
});
