import { createBrowserRouter } from 'react-router-dom';
import Filtering from '../pages/filtering/Filtering.tsx';
import { Subscriptions } from '../pages/protected/subscriptions/Subscriptions.tsx';
import { Order } from '../pages/order/Order.tsx';
import { Listings } from '../pages/protected/listing/Listings.tsx';
import Web from '../routing/Web.tsx';
import { Settings } from '../pages/settings/Settings.tsx';
import ErrorPage from '../components/ErrorPage.tsx';
import { Dashboard } from '../pages/dashboard/Dashboard.tsx';
import Login from '../routing/web/Login.tsx';
import Register from '../routing/web/Register.tsx';
import VerifyEmail from '../pages/verify-email/VerifyEmail.tsx';
import { PublicRoute } from '../pages/public/components/public-route/PublicRoute.tsx';
import { ProtectedLayout } from '../layouts/protected/ProtectedLayout.tsx';
import { ProtectedRoute } from '../pages/protected/components/protected-route/ProtectedRoute.tsx';
import { routes } from './routes.ts';
import { SuccessfullSubscription } from '../pages/successfull-subscription/SuccessfullSubscription.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Web />,
    errorElement: <ErrorPage />,
    children: [],
  },
  {
    path: routes.auth.root,
    element: <PublicRoute />,
    children: [
      { index: true, element: <Login /> },
      { path: routes.auth.login, element: <Login /> },
      { path: routes.auth.register, element: <Register /> },
    ],
  },
  {
    path: '/portal',
    element: (
      <ProtectedRoute>
        <ProtectedLayout />
      </ProtectedRoute>
    ),
    children: [
      { index: true, element: <Dashboard /> },
      { path: 'dashboard', element: <Dashboard /> },
      { path: 'filtering', element: <Filtering /> },
      { path: 'listings', element: <Listings /> },
      { path: 'subscriptions', element: <Subscriptions /> },
      { path: 'order', element: <Order /> },
      { path: 'settings', element: <Settings /> },
      { path: 'verify-email', element: <VerifyEmail /> },
      {
        path: 'successfull-subscription',
        element: <SuccessfullSubscription />,
      },
    ],
  },
]);

export default router;
