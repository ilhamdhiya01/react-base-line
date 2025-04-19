import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/post/$id')({
  component: RouteComponent,
  loader: async ({ params }) => ({
    id: params.id,
  }),
});

function RouteComponent() {
  const { id } = Route.useLoaderData();
  return <div>Hello &quot;/post/{id}&quot;!</div>;
}
