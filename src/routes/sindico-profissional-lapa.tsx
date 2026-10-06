import { createFileRoute } from "@tanstack/react-router";
import { EntityPage, entityHead } from "@/components/archetypes/EntityRoute";

const PATH = "/sindico-profissional-lapa";

export const Route = createFileRoute("/sindico-profissional-lapa")({
  head: () => entityHead(PATH),
  component: () => <EntityPage path={PATH} />,
});
