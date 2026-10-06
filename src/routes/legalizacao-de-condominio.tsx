import { createFileRoute } from "@tanstack/react-router";
import { EntityPage, entityHead } from "@/components/archetypes/EntityRoute";

const PATH = "/legalizacao-de-condominio";

export const Route = createFileRoute("/legalizacao-de-condominio")({
  head: () => entityHead(PATH),
  component: () => <EntityPage path={PATH} />,
});
