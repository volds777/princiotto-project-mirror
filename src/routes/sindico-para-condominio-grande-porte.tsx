import { createFileRoute } from "@tanstack/react-router";
import { EntityPage, entityHead } from "@/components/archetypes/EntityRoute";

const PATH = "/sindico-para-condominio-grande-porte";

export const Route = createFileRoute("/sindico-para-condominio-grande-porte")({
  head: () => entityHead(PATH),
  component: () => <EntityPage path={PATH} />,
});
