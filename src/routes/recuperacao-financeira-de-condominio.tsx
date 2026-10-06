import { createFileRoute } from "@tanstack/react-router";
import { EntityPage, entityHead } from "@/components/archetypes/EntityRoute";

const PATH = "/recuperacao-financeira-de-condominio";

export const Route = createFileRoute("/recuperacao-financeira-de-condominio")({
  head: () => entityHead(PATH),
  component: () => <EntityPage path={PATH} />,
});
