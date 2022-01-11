import { lazy } from 'react';
import AuthGuard from './components/AuthGuard';

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
  {
    path: '/dashboard',
    exact: true,
    guard: AuthGuard,
    element: lazy(() => import('./pages/Dashboard')),
  },
];

export default routes;
