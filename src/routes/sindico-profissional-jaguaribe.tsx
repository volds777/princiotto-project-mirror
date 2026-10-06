import { createFileRoute } from "@tanstack/react-router";
import { EntityPage, entityHead } from "@/components/archetypes/EntityRoute";

const PATH = "/sindico-profissional-jaguaribe";

export const Route = createFileRoute("/sindico-profissional-jaguaribe")({
  head: () => entityHead(PATH),
  component: () => <EntityPage path={PATH} />,
});
