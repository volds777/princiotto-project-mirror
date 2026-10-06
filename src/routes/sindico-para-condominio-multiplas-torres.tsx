import { createFileRoute } from "@tanstack/react-router";
import { EntityPage, entityHead } from "@/components/archetypes/EntityRoute";

const PATH = "/sindico-para-condominio-multiplas-torres";

export const Route = createFileRoute("/sindico-para-condominio-multiplas-torres")({
  head: () => entityHead(PATH),
  component: () => <EntityPage path={PATH} />,
});
