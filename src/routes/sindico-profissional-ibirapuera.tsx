import { createFileRoute } from "@tanstack/react-router";
import { EntityPage, entityHead } from "@/components/archetypes/EntityRoute";

const PATH = "/sindico-profissional-ibirapuera";

export const Route = createFileRoute("/sindico-profissional-ibirapuera")({
  head: () => entityHead(PATH),
  component: () => <EntityPage path={PATH} />,
});
