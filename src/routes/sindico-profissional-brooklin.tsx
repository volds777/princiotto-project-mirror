import { createFileRoute } from "@tanstack/react-router";
import { EntityPage, entityHead } from "@/components/archetypes/EntityRoute";

const PATH = "/sindico-profissional-brooklin";

export const Route = createFileRoute("/sindico-profissional-brooklin")({
  head: () => entityHead(PATH),
  component: () => <EntityPage path={PATH} />,
});
