import { createFileRoute } from "@tanstack/react-router";
import { EntityPage, entityHead } from "@/components/archetypes/EntityRoute";

const PATH = "/sindico-profissional-bela-vista-osasco";

export const Route = createFileRoute("/sindico-profissional-bela-vista-osasco")({
  head: () => entityHead(PATH),
  component: () => <EntityPage path={PATH} />,
});
