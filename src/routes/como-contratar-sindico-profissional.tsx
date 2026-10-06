import { createFileRoute } from "@tanstack/react-router";
import { EntityPage, entityHead } from "@/components/archetypes/EntityRoute";

const PATH = "/como-contratar-sindico-profissional";

export const Route = createFileRoute("/como-contratar-sindico-profissional")({
  head: () => entityHead(PATH),
  component: () => <EntityPage path={PATH} />,
});
