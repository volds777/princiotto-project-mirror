import { createFileRoute } from "@tanstack/react-router";
import { EntityPage, entityHead } from "@/components/archetypes/EntityRoute";

const PATH = "/sindico-profissional-centro-de-osasco";

export const Route = createFileRoute("/sindico-profissional-centro-de-osasco")({
  head: () => entityHead(PATH),
  component: () => <EntityPage path={PATH} />,
});
