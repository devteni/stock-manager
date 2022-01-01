import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';

const routes = [
  {
    path: '/',
    exact: true,
    element: <Home />,
  },
  {
    path: '/login',
    exact: true,
    element: <Login />,
  },
  {
    path: '/signup',
    exact: true,
    element: <Signup />,
  },
];

export default routes;
