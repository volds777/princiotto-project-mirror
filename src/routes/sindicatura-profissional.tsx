import { createFileRoute } from "@tanstack/react-router";
import { EntityPage, entityHead } from "@/components/archetypes/EntityRoute";

const PATH = "/sindicatura-profissional";

export const Route = createFileRoute("/sindicatura-profissional")({
  head: () => entityHead(PATH),
  component: () => <EntityPage path={PATH} />,
});
