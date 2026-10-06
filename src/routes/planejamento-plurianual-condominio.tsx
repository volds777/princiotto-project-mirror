import { createFileRoute } from "@tanstack/react-router";
import { EntityPage, entityHead } from "@/components/archetypes/EntityRoute";

const PATH = "/planejamento-plurianual-condominio";

export const Route = createFileRoute("/planejamento-plurianual-condominio")({
  head: () => entityHead(PATH),
  component: () => <EntityPage path={PATH} />,
});
