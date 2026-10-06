import { createFileRoute } from "@tanstack/react-router";
import { EntityPage, entityHead } from "@/components/archetypes/EntityRoute";

const PATH = "/sindico-profissional-vila-clementino";

export const Route = createFileRoute("/sindico-profissional-vila-clementino")({
  head: () => entityHead(PATH),
  component: () => <EntityPage path={PATH} />,
});
