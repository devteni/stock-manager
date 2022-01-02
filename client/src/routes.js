import { lazy } from 'react';

const routes = [
  {
    path: '/',
    exact: true,
    element: lazy(() => import('./pages/Home')),
  },
  {
    path: '/login',
    exact: true,
    element: lazy(() => import('./pages/Login')),
  },
  {
    path: '/signup',
    exact: true,
    element: lazy(() => import('./pages/Signup')),
  },
];

export default routes;
