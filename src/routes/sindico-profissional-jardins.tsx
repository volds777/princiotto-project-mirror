import { createFileRoute } from "@tanstack/react-router";
import { EntityPage, entityHead } from "@/components/archetypes/EntityRoute";

const PATH = "/sindico-profissional-jardins";

export const Route = createFileRoute("/sindico-profissional-jardins")({
  head: () => entityHead(PATH),
  component: () => <EntityPage path={PATH} />,
});
