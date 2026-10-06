import { createFileRoute } from "@tanstack/react-router";
import { EntityPage, entityHead } from "@/components/archetypes/EntityRoute";

const PATH = "/sindico-profissional-vila-sao-francisco";

export const Route = createFileRoute("/sindico-profissional-vila-sao-francisco")({
  head: () => entityHead(PATH),
  component: () => <EntityPage path={PATH} />,
});
