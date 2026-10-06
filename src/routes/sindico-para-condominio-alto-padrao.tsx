import { createFileRoute } from "@tanstack/react-router";
import { EntityPage, entityHead } from "@/components/archetypes/EntityRoute";

const PATH = "/sindico-para-condominio-alto-padrao";

export const Route = createFileRoute("/sindico-para-condominio-alto-padrao")({
  head: () => entityHead(PATH),
  component: () => <EntityPage path={PATH} />,
});
