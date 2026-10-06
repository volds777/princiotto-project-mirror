import { createFileRoute } from "@tanstack/react-router";
import { EntityPage, entityHead } from "@/components/archetypes/EntityRoute";

const PATH = "/orientacao-para-sindico-morador";

export const Route = createFileRoute("/orientacao-para-sindico-morador")({
  head: () => entityHead(PATH),
  component: () => <EntityPage path={PATH} />,
});
