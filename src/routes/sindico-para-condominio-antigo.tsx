import { createFileRoute } from "@tanstack/react-router";
import { EntityPage, entityHead } from "@/components/archetypes/EntityRoute";

const PATH = "/sindico-para-condominio-antigo";

export const Route = createFileRoute("/sindico-para-condominio-antigo")({
  head: () => entityHead(PATH),
  component: () => <EntityPage path={PATH} />,
});
