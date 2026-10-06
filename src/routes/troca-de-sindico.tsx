import { createFileRoute } from "@tanstack/react-router";
import { EntityPage, entityHead } from "@/components/archetypes/EntityRoute";

const PATH = "/troca-de-sindico";

export const Route = createFileRoute("/troca-de-sindico")({
  head: () => entityHead(PATH),
  component: () => <EntityPage path={PATH} />,
});
