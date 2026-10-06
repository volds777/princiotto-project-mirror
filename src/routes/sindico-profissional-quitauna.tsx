import { createFileRoute } from "@tanstack/react-router";
import { EntityPage, entityHead } from "@/components/archetypes/EntityRoute";

const PATH = "/sindico-profissional-quitauna";

export const Route = createFileRoute("/sindico-profissional-quitauna")({
  head: () => entityHead(PATH),
  component: () => <EntityPage path={PATH} />,
});
