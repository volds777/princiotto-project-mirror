import { createFileRoute } from "@tanstack/react-router";
import { EntityPage, entityHead } from "@/components/archetypes/EntityRoute";

const PATH = "/sindico-para-condominio-misto";

export const Route = createFileRoute("/sindico-para-condominio-misto")({
  head: () => entityHead(PATH),
  component: () => <EntityPage path={PATH} />,
});
