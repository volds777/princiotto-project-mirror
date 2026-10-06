import { createFileRoute } from "@tanstack/react-router";
import { EntityPage, entityHead } from "@/components/archetypes/EntityRoute";

const PATH = "/sindico-profissional-parque-dos-principes";

export const Route = createFileRoute("/sindico-profissional-parque-dos-principes")({
  head: () => entityHead(PATH),
  component: () => <EntityPage path={PATH} />,
});
