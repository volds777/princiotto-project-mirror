import { createFileRoute } from "@tanstack/react-router";
import { EntityPage, entityHead } from "@/components/archetypes/EntityRoute";

const PATH = "/sindico-para-condominio-clube";

export const Route = createFileRoute("/sindico-para-condominio-clube")({
  head: () => entityHead(PATH),
  component: () => <EntityPage path={PATH} />,
});
