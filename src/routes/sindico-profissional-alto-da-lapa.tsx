import { createFileRoute } from "@tanstack/react-router";
import { EntityPage, entityHead } from "@/components/archetypes/EntityRoute";

const PATH = "/sindico-profissional-alto-da-lapa";

export const Route = createFileRoute("/sindico-profissional-alto-da-lapa")({
  head: () => entityHead(PATH),
  component: () => <EntityPage path={PATH} />,
});
