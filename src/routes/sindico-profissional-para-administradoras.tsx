import { createFileRoute } from "@tanstack/react-router";
import { EntityPage, entityHead } from "@/components/archetypes/EntityRoute";

const PATH = "/sindico-profissional-para-administradoras";

export const Route = createFileRoute("/sindico-profissional-para-administradoras")({
  head: () => entityHead(PATH),
  component: () => <EntityPage path={PATH} />,
});
