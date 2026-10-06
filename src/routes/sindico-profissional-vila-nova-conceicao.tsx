import { createFileRoute } from "@tanstack/react-router";
import { EntityPage, entityHead } from "@/components/archetypes/EntityRoute";

const PATH = "/sindico-profissional-vila-nova-conceicao";

export const Route = createFileRoute("/sindico-profissional-vila-nova-conceicao")({
  head: () => entityHead(PATH),
  component: () => <EntityPage path={PATH} />,
});
