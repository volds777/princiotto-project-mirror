import { createFileRoute } from "@tanstack/react-router";
import { EntityPage, entityHead } from "@/components/archetypes/EntityRoute";

const PATH = "/sindico-profissional-pompeia";

export const Route = createFileRoute("/sindico-profissional-pompeia")({
  head: () => entityHead(PATH),
  component: () => <EntityPage path={PATH} />,
});
