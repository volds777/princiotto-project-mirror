import { createFileRoute } from "@tanstack/react-router";
import { EntityPage, entityHead } from "@/components/archetypes/EntityRoute";

const PATH = "/sindico-profissional-barra-funda";

export const Route = createFileRoute("/sindico-profissional-barra-funda")({
  head: () => entityHead(PATH),
  component: () => <EntityPage path={PATH} />,
});
