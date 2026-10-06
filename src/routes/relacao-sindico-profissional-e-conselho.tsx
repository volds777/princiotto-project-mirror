import { createFileRoute } from "@tanstack/react-router";
import { EntityPage, entityHead } from "@/components/archetypes/EntityRoute";

const PATH = "/relacao-sindico-profissional-e-conselho";

export const Route = createFileRoute("/relacao-sindico-profissional-e-conselho")({
  head: () => entityHead(PATH),
  component: () => <EntityPage path={PATH} />,
});
