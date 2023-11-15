import { createBrowserRouter } from 'react-router-dom';
import { Home } from '../modules/home/Home';
import { Login } from '../modules/login/Login';
import { Register } from '../modules/register/Register';
import { NotFound } from '../modules/notFound/NotFound';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/register',
    element: <Register />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
]);
