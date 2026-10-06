import { createFileRoute } from "@tanstack/react-router";
import { EntityPage, entityHead } from "@/components/archetypes/EntityRoute";

const PATH = "/sindico-profissional-indaiatuba";

export const Route = createFileRoute("/sindico-profissional-indaiatuba")({
  head: () => entityHead(PATH),
  component: () => <EntityPage path={PATH} />,
});
