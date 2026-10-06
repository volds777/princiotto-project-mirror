import { createFileRoute } from "@tanstack/react-router";
import { EntityPage, entityHead } from "@/components/archetypes/EntityRoute";

const PATH = "/mediacao-de-conflitos-condominiais";

export const Route = createFileRoute("/mediacao-de-conflitos-condominiais")({
  head: () => entityHead(PATH),
  component: () => <EntityPage path={PATH} />,
});
