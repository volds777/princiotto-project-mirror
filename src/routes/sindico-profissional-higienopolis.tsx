import { createFileRoute } from "@tanstack/react-router";
import { EntityPage, entityHead } from "@/components/archetypes/EntityRoute";

const PATH = "/sindico-profissional-higienopolis";

export const Route = createFileRoute("/sindico-profissional-higienopolis")({
  head: () => entityHead(PATH),
  component: () => <EntityPage path={PATH} />,
});
