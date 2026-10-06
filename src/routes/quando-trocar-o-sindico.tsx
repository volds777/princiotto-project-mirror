import { createFileRoute } from "@tanstack/react-router";
import { EntityPage, entityHead } from "@/components/archetypes/EntityRoute";

const PATH = "/quando-trocar-o-sindico";

export const Route = createFileRoute("/quando-trocar-o-sindico")({
  head: () => entityHead(PATH),
  component: () => <EntityPage path={PATH} />,
});
