import { createBrowserRouter } from 'react-router-dom';
import { Home } from '../modules/home/Home';
import { Login } from '../modules/login/Login';
import { Register } from '../modules/register/Register';
import { NotFound } from '../modules/notFound/NotFound';
import { HomeInformation } from '../modules/helpDesk/information/HomeInformation';
import { HelpPayments } from '../modules/helpDesk/information/HelpPayments';
import { HelpShipments } from '../modules/helpDesk/information/HelpShipments';

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
  {
    path: '/help',
    element: <HomeInformation />,
  },
  {
    path: '/how-pay-online',
    element: <HelpPayments />,
  },
  {
    path: '/help-shipments',
    element: <HelpShipments />,
  },
]);
