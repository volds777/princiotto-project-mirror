import { createFileRoute } from "@tanstack/react-router";
import { EntityPage, entityHead } from "@/components/archetypes/EntityRoute";

const PATH = "/sindico-profissional-vila-campesina";

export const Route = createFileRoute("/sindico-profissional-vila-campesina")({
  head: () => entityHead(PATH),
  component: () => <EntityPage path={PATH} />,
});
