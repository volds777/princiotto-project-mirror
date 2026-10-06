import { createFileRoute } from "@tanstack/react-router";
import { EntityPage, entityHead } from "@/components/archetypes/EntityRoute";

const PATH = "/sindico-profissional-presidente-altino";

export const Route = createFileRoute("/sindico-profissional-presidente-altino")({
  head: () => entityHead(PATH),
  component: () => <EntityPage path={PATH} />,
});
