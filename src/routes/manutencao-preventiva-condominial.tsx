import { createFileRoute } from "@tanstack/react-router";
import { EntityPage, entityHead } from "@/components/archetypes/EntityRoute";

const PATH = "/manutencao-preventiva-condominial";

export const Route = createFileRoute("/manutencao-preventiva-condominial")({
  head: () => entityHead(PATH),
  component: () => <EntityPage path={PATH} />,
});
