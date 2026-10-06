import { createFileRoute } from "@tanstack/react-router";
import { EntityPage, entityHead } from "@/components/archetypes/EntityRoute";

const PATH = "/sindico-profissional-pinheiros";

export const Route = createFileRoute("/sindico-profissional-pinheiros")({
  head: () => entityHead(PATH),
  component: () => <EntityPage path={PATH} />,
});
