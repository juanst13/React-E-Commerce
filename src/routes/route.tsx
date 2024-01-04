import { createBrowserRouter } from 'react-router-dom';
import { Home } from '../modules/home/Home';
import { Login } from '../modules/login/Login';
import { Register } from '../modules/register/Register';
import { NotFound } from '../modules/notFound/NotFound';
import { HomeInformation } from '../modules/helpDesk/information/HomeInformation';
import { HelpPayments } from '../modules/helpDesk/information/HelpPayments';
import { HelpShipments } from '../modules/helpDesk/information/HelpShipments';
import { Product } from '../modules/product/Product';
import { Header } from '../shared/components/Header';
import { Footer } from '../shared/components/Footer';
import { RegisterForm } from '../modules/register/RegisterForm/RegisterForm';
import { Settings } from '../modules/settings/Settings';

export const Layout = ({ children }: any) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

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
    element: (
      <Layout>
        <NotFound />
      </Layout>
    ),
  },
  {
    path: '/help',
    element: (
      <Layout>
        <HomeInformation />
      </Layout>
    ),
  },
  {
    path: '/how-pay-online',
    element: (
      <Layout>
        <HelpPayments />
      </Layout>
    ),
  },
  {
    path: '/help-shipments',
    element: (
      <Layout>
        <HelpShipments />
      </Layout>
    ),
  },
  {
    path: '/product',
    element: <Product />,
  },
  {
    path: '/registerForm',
    element: <RegisterForm />,
  },
  {
    path: '/settings',
    element: <Settings />,
  },
]);
