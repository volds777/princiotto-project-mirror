import { createFileRoute } from "@tanstack/react-router";
import { EntityPage, entityHead } from "@/components/archetypes/EntityRoute";

const PATH = "/falta-de-transparencia-no-condominio";

export const Route = createFileRoute("/falta-de-transparencia-no-condominio")({
  head: () => entityHead(PATH),
  component: () => <EntityPage path={PATH} />,
});
