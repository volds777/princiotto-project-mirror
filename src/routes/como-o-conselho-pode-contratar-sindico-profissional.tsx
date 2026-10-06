import { createFileRoute } from "@tanstack/react-router";
import { EntityPage, entityHead } from "@/components/archetypes/EntityRoute";

const PATH = "/como-o-conselho-pode-contratar-sindico-profissional";

export const Route = createFileRoute("/como-o-conselho-pode-contratar-sindico-profissional")({
  head: () => entityHead(PATH),
  component: () => <EntityPage path={PATH} />,
});
