import { createFileRoute } from "@tanstack/react-router";
import { EntityPage, entityHead } from "@/components/archetypes/EntityRoute";

const PATH = "/implantacao-de-condominio";

export const Route = createFileRoute("/implantacao-de-condominio")({
  head: () => entityHead(PATH),
  component: () => <EntityPage path={PATH} />,
});
