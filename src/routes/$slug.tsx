import { createFileRoute, notFound } from "@tanstack/react-router";
import { getRoute } from "@/content/routes";
import { getEntity } from "@/content/collections";
import { routeHead } from "@/lib/seo";
import { archetypeComponents } from "@/components/archetypes";

/**
 * Serves every registry entry with hasRouteFile: false. Existing pages keep
 * their own route files (static routes always win over this dynamic one).
 */
export const Route = createFileRoute("/$slug")({
  loader: ({ params }) => {
    const route = getRoute(`/${params.slug}`);
    if (!route || route.hasRouteFile || !route.entity) throw notFound();
    if (!getEntity(route.entity.collection, route.entity.id)) throw notFound();
    return { path: route.path };
  },
  head: ({ loaderData }) =>
    loaderData
      ? routeHead(loaderData.path)
      : { meta: [{ title: "Página não encontrada" }, { name: "robots", content: "noindex" }] },
  component: DynamicPage,
});

function DynamicPage() {
  const { path } = Route.useLoaderData();
  const route = getRoute(path)!;
  const entity = getEntity(route.entity!.collection, route.entity!.id)!;
  const Component = archetypeComponents[route.entity!.collection];
  return <Component entity={entity} route={route} />;
}
