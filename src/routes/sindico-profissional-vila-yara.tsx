import { createFileRoute } from "@tanstack/react-router";
import { EntityPage, entityHead } from "@/components/archetypes/EntityRoute";

const PATH = "/sindico-profissional-vila-yara";

export const Route = createFileRoute("/sindico-profissional-vila-yara")({
  head: () => entityHead(PATH),
  component: () => <EntityPage path={PATH} />,
});
