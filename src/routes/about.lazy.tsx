import { createLazyFileRoute } from '@tanstack/react-router';

import AboutPage from '../pages/AboutPage';

export const Route = createLazyFileRoute('/about')({
  component: AboutRoute,
});

function AboutRoute() {
  return <AboutPage />;
}
