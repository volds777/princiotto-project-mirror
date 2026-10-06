import { createFileRoute } from "@tanstack/react-router";
import { EntityPage, entityHead } from "@/components/archetypes/EntityRoute";

const PATH = "/sindico-profissional-vila-madalena";

export const Route = createFileRoute("/sindico-profissional-vila-madalena")({
  head: () => entityHead(PATH),
  component: () => <EntityPage path={PATH} />,
});
