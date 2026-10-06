import { createFileRoute } from "@tanstack/react-router";
import { EntityPage, entityHead } from "@/components/archetypes/EntityRoute";

const PATH = "/sindico-profissional-jardim-europa";

export const Route = createFileRoute("/sindico-profissional-jardim-europa")({
  head: () => entityHead(PATH),
  component: () => <EntityPage path={PATH} />,
});
