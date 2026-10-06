import { createFileRoute } from "@tanstack/react-router";
import { EntityPage, entityHead } from "@/components/archetypes/EntityRoute";

const PATH = "/sindico-profissional-aldeia-da-serra";

export const Route = createFileRoute("/sindico-profissional-aldeia-da-serra")({
  head: () => entityHead(PATH),
  component: () => <EntityPage path={PATH} />,
});
