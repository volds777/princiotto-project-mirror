import { createFileRoute } from "@tanstack/react-router";
import { EntityPage, entityHead } from "@/components/archetypes/EntityRoute";

const PATH = "/como-escolher-sindico-profissional";

export const Route = createFileRoute("/como-escolher-sindico-profissional")({
  head: () => entityHead(PATH),
  component: () => <EntityPage path={PATH} />,
});
