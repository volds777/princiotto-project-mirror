import { createFileRoute } from "@tanstack/react-router";
import { EntityPage, entityHead } from "@/components/archetypes/EntityRoute";

const PATH = "/sindico-profissional-vila-olimpia";

export const Route = createFileRoute("/sindico-profissional-vila-olimpia")({
  head: () => entityHead(PATH),
  component: () => <EntityPage path={PATH} />,
});
