import { createFileRoute } from "@tanstack/react-router";
import { EntityPage, entityHead } from "@/components/archetypes/EntityRoute";

const PATH = "/sindico-profissional-alto-da-boa-vista";

export const Route = createFileRoute("/sindico-profissional-alto-da-boa-vista")({
  head: () => entityHead(PATH),
  component: () => <EntityPage path={PATH} />,
});
