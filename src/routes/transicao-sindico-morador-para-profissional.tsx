import { createFileRoute } from "@tanstack/react-router";
import { EntityPage, entityHead } from "@/components/archetypes/EntityRoute";

const PATH = "/transicao-sindico-morador-para-profissional";

export const Route = createFileRoute("/transicao-sindico-morador-para-profissional")({
  head: () => entityHead(PATH),
  component: () => <EntityPage path={PATH} />,
});
