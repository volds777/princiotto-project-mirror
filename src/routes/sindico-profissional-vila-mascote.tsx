import { createFileRoute } from "@tanstack/react-router";
import { EntityPage, entityHead } from "@/components/archetypes/EntityRoute";

const PATH = "/sindico-profissional-vila-mascote";

export const Route = createFileRoute("/sindico-profissional-vila-mascote")({
  head: () => entityHead(PATH),
  component: () => <EntityPage path={PATH} />,
});
