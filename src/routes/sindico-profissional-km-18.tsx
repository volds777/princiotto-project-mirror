import { createFileRoute } from "@tanstack/react-router";
import { EntityPage, entityHead } from "@/components/archetypes/EntityRoute";

const PATH = "/sindico-profissional-km-18";

export const Route = createFileRoute("/sindico-profissional-km-18")({
  head: () => entityHead(PATH),
  component: () => <EntityPage path={PATH} />,
});
