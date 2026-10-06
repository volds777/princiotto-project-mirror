import { createFileRoute } from "@tanstack/react-router";
import { EntityPage, entityHead } from "@/components/archetypes/EntityRoute";

const PATH = "/sindico-para-condominio-residencial";

export const Route = createFileRoute("/sindico-para-condominio-residencial")({
  head: () => entityHead(PATH),
  component: () => <EntityPage path={PATH} />,
});
