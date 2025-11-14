import { lazy, Suspense } from 'react';
import { createBrowserRouter, Navigate } from 'react-router-dom';

import App from '@/App';
import AppSkeleton from '@/components/sections/skeleton/AppSkeleton';

const Search = lazy(() => import('@/pages/search'));
const Like = lazy(() => import('@/pages/like'));

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Navigate to="/search" replace /> },
      {
        path: '/search',
        element: (
          <Suspense fallback={<AppSkeleton />}>
            <Search />
          </Suspense>
        ),
      },
      {
        path: '/like',
        element: (
          <Suspense fallback={<AppSkeleton />}>
            <Like />
          </Suspense>
        ),
      },
    ],
  },
]);

export default router;
