import { createFileRoute } from "@tanstack/react-router";
import { EntityPage, entityHead } from "@/components/archetypes/EntityRoute";

const PATH = "/sindico-para-condominio-comercial";

export const Route = createFileRoute("/sindico-para-condominio-comercial")({
  head: () => entityHead(PATH),
  component: () => <EntityPage path={PATH} />,
});
