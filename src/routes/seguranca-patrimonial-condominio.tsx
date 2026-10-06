import { createFileRoute } from "@tanstack/react-router";
import { EntityPage, entityHead } from "@/components/archetypes/EntityRoute";

const PATH = "/seguranca-patrimonial-condominio";

export const Route = createFileRoute("/seguranca-patrimonial-condominio")({
  head: () => entityHead(PATH),
  component: () => <EntityPage path={PATH} />,
});
