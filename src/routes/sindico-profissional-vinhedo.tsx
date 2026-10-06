import { createFileRoute } from "@tanstack/react-router";
import { EntityPage, entityHead } from "@/components/archetypes/EntityRoute";

const PATH = "/sindico-profissional-vinhedo";

export const Route = createFileRoute("/sindico-profissional-vinhedo")({
  head: () => entityHead(PATH),
  component: () => <EntityPage path={PATH} />,
});
