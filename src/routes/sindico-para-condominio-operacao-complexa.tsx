import { createFileRoute } from "@tanstack/react-router";
import { EntityPage, entityHead } from "@/components/archetypes/EntityRoute";

const PATH = "/sindico-para-condominio-operacao-complexa";

export const Route = createFileRoute("/sindico-para-condominio-operacao-complexa")({
  head: () => entityHead(PATH),
  component: () => <EntityPage path={PATH} />,
});
