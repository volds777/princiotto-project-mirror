import { createFileRoute } from "@tanstack/react-router";
import { EntityPage, entityHead } from "@/components/archetypes/EntityRoute";

const PATH = "/sindico-profissional-fazendinha";

export const Route = createFileRoute("/sindico-profissional-fazendinha")({
  head: () => entityHead(PATH),
  component: () => <EntityPage path={PATH} />,
});
