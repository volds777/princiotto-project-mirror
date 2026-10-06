import { createFileRoute } from "@tanstack/react-router";
import { EntityPage, entityHead } from "@/components/archetypes/EntityRoute";

const PATH = "/sindico-profissional-ou-sindico-morador";

export const Route = createFileRoute("/sindico-profissional-ou-sindico-morador")({
  head: () => entityHead(PATH),
  component: () => <EntityPage path={PATH} />,
});
