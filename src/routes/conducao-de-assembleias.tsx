import { createFileRoute } from "@tanstack/react-router";
import { EntityPage, entityHead } from "@/components/archetypes/EntityRoute";

const PATH = "/conducao-de-assembleias";

export const Route = createFileRoute("/conducao-de-assembleias")({
  head: () => entityHead(PATH),
  component: () => <EntityPage path={PATH} />,
});
