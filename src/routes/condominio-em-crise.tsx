import { createFileRoute } from "@tanstack/react-router";
import { EntityPage, entityHead } from "@/components/archetypes/EntityRoute";

const PATH = "/condominio-em-crise";

export const Route = createFileRoute("/condominio-em-crise")({
  head: () => entityHead(PATH),
  component: () => <EntityPage path={PATH} />,
});
