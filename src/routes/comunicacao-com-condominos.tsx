import { createFileRoute } from "@tanstack/react-router";
import { EntityPage, entityHead } from "@/components/archetypes/EntityRoute";

const PATH = "/comunicacao-com-condominos";

export const Route = createFileRoute("/comunicacao-com-condominos")({
  head: () => entityHead(PATH),
  component: () => <EntityPage path={PATH} />,
});
