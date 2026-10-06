import { createFileRoute } from "@tanstack/react-router";
import { EntityPage, entityHead } from "@/components/archetypes/EntityRoute";

const PATH = "/contratacao-de-sindico-profissional-em-assembleia";

export const Route = createFileRoute("/contratacao-de-sindico-profissional-em-assembleia")({
  head: () => entityHead(PATH),
  component: () => <EntityPage path={PATH} />,
});
