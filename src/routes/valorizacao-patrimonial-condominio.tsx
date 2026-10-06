import { createFileRoute } from "@tanstack/react-router";
import { EntityPage, entityHead } from "@/components/archetypes/EntityRoute";

const PATH = "/valorizacao-patrimonial-condominio";

export const Route = createFileRoute("/valorizacao-patrimonial-condominio")({
  head: () => entityHead(PATH),
  component: () => <EntityPage path={PATH} />,
});
