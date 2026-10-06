import { createFileRoute } from "@tanstack/react-router";
import { EntityPage, entityHead } from "@/components/archetypes/EntityRoute";

const PATH = "/sindico-profissional-carapicuiba";

export const Route = createFileRoute("/sindico-profissional-carapicuiba")({
  head: () => entityHead(PATH),
  component: () => <EntityPage path={PATH} />,
});
