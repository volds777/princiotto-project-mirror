import { createFileRoute } from "@tanstack/react-router";
import { EntityPage, entityHead } from "@/components/archetypes/EntityRoute";

const PATH = "/sindico-profissional-centro-de-barueri";

export const Route = createFileRoute("/sindico-profissional-centro-de-barueri")({
  head: () => entityHead(PATH),
  component: () => <EntityPage path={PATH} />,
});
