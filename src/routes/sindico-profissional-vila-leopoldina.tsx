import { createFileRoute } from "@tanstack/react-router";
import { EntityPage, entityHead } from "@/components/archetypes/EntityRoute";

const PATH = "/sindico-profissional-vila-leopoldina";

export const Route = createFileRoute("/sindico-profissional-vila-leopoldina")({
  head: () => entityHead(PATH),
  component: () => <EntityPage path={PATH} />,
});
