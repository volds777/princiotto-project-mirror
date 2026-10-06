import { createFileRoute } from "@tanstack/react-router";
import { EntityPage, entityHead } from "@/components/archetypes/EntityRoute";

const PATH = "/sindico-profissional-vila-romana";

export const Route = createFileRoute("/sindico-profissional-vila-romana")({
  head: () => entityHead(PATH),
  component: () => <EntityPage path={PATH} />,
});
