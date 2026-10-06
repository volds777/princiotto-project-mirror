import { createFileRoute } from "@tanstack/react-router";
import { EntityPage, entityHead } from "@/components/archetypes/EntityRoute";

const PATH = "/sindico-profissional-granja-viana";

export const Route = createFileRoute("/sindico-profissional-granja-viana")({
  head: () => entityHead(PATH),
  component: () => <EntityPage path={PATH} />,
});
