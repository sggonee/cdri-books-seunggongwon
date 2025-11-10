import { createBrowserRouter, Navigate } from 'react-router-dom';

import App from '@/App';
import Like from '@/pages/like';
import Search from '@/pages/search';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Navigate to="/search" replace /> },
      { path: '/search', element: <Search /> },
      { path: '/like', element: <Like /> },
    ],
  },
]);

export default router;
