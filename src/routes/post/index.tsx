import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/post/')({
  component: PostComponent,
});

function PostComponent() {
  return <div>Hello Post</div>;
}
