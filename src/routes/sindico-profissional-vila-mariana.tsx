import { createFileRoute } from "@tanstack/react-router";
import { EntityPage, entityHead } from "@/components/archetypes/EntityRoute";

const PATH = "/sindico-profissional-vila-mariana";

export const Route = createFileRoute("/sindico-profissional-vila-mariana")({
  head: () => entityHead(PATH),
  component: () => <EntityPage path={PATH} />,
});
