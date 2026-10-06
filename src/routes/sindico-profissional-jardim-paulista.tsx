import { createFileRoute } from "@tanstack/react-router";
import { EntityPage, entityHead } from "@/components/archetypes/EntityRoute";

const PATH = "/sindico-profissional-jardim-paulista";

export const Route = createFileRoute("/sindico-profissional-jardim-paulista")({
  head: () => entityHead(PATH),
  component: () => <EntityPage path={PATH} />,
});
