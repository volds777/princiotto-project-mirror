import { createFileRoute } from "@tanstack/react-router";
import { EntityPage, entityHead } from "@/components/archetypes/EntityRoute";

const PATH = "/sindico-para-condominio-horizontal";

export const Route = createFileRoute("/sindico-para-condominio-horizontal")({
  head: () => entityHead(PATH),
  component: () => <EntityPage path={PATH} />,
});
