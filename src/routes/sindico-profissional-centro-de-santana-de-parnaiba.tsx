import { createFileRoute } from "@tanstack/react-router";
import { EntityPage, entityHead } from "@/components/archetypes/EntityRoute";

const PATH = "/sindico-profissional-centro-de-santana-de-parnaiba";

export const Route = createFileRoute("/sindico-profissional-centro-de-santana-de-parnaiba")({
  head: () => entityHead(PATH),
  component: () => <EntityPage path={PATH} />,
});
