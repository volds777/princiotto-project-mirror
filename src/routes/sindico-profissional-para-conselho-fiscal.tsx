import { createFileRoute } from "@tanstack/react-router";
import { EntityPage, entityHead } from "@/components/archetypes/EntityRoute";

const PATH = "/sindico-profissional-para-conselho-fiscal";

export const Route = createFileRoute("/sindico-profissional-para-conselho-fiscal")({
  head: () => entityHead(PATH),
  component: () => <EntityPage path={PATH} />,
});
