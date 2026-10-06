import { createFileRoute } from "@tanstack/react-router";
import { EntityPage, entityHead } from "@/components/archetypes/EntityRoute";

const PATH = "/modernizacao-de-condominio";

export const Route = createFileRoute("/modernizacao-de-condominio")({
  head: () => entityHead(PATH),
  component: () => <EntityPage path={PATH} />,
});
