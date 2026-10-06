import { createFileRoute } from "@tanstack/react-router";
import { EntityPage, entityHead } from "@/components/archetypes/EntityRoute";

const PATH = "/sindico-profissional-tambore";

export const Route = createFileRoute("/sindico-profissional-tambore")({
  head: () => entityHead(PATH),
  component: () => <EntityPage path={PATH} />,
});
