import { createFileRoute } from "@tanstack/react-router";
import { EntityPage, entityHead } from "@/components/archetypes/EntityRoute";

const PATH = "/sindico-profissional-alto-de-pinheiros";

export const Route = createFileRoute("/sindico-profissional-alto-de-pinheiros")({
  head: () => entityHead(PATH),
  component: () => <EntityPage path={PATH} />,
});
