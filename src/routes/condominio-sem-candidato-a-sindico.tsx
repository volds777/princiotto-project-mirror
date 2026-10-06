import { createFileRoute } from "@tanstack/react-router";
import { EntityPage, entityHead } from "@/components/archetypes/EntityRoute";

const PATH = "/condominio-sem-candidato-a-sindico";

export const Route = createFileRoute("/condominio-sem-candidato-a-sindico")({
  head: () => entityHead(PATH),
  component: () => <EntityPage path={PATH} />,
});
