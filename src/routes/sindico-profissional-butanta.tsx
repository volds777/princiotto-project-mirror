import { createFileRoute } from "@tanstack/react-router";
import { EntityPage, entityHead } from "@/components/archetypes/EntityRoute";

const PATH = "/sindico-profissional-butanta";

export const Route = createFileRoute("/sindico-profissional-butanta")({
  head: () => entityHead(PATH),
  component: () => <EntityPage path={PATH} />,
});
