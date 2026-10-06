import { createFileRoute } from "@tanstack/react-router";
import { EntityPage, entityHead } from "@/components/archetypes/EntityRoute";

const PATH = "/sindico-profissional-vila-andrade";

export const Route = createFileRoute("/sindico-profissional-vila-andrade")({
  head: () => entityHead(PATH),
  component: () => <EntityPage path={PATH} />,
});
