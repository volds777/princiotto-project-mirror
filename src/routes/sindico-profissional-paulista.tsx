import { createFileRoute } from "@tanstack/react-router";
import { EntityPage, entityHead } from "@/components/archetypes/EntityRoute";

const PATH = "/sindico-profissional-paulista";

export const Route = createFileRoute("/sindico-profissional-paulista")({
  head: () => entityHead(PATH),
  component: () => <EntityPage path={PATH} />,
});
