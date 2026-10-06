import { createFileRoute } from "@tanstack/react-router";
import { EntityPage, entityHead } from "@/components/archetypes/EntityRoute";

const PATH = "/sindico-profissional-parque-sao-domingos";

export const Route = createFileRoute("/sindico-profissional-parque-sao-domingos")({
  head: () => entityHead(PATH),
  component: () => <EntityPage path={PATH} />,
});
