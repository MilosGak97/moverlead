import { createBrowserRouter, Navigate, Outlet } from 'react-router-dom';
import { Filtering } from '../pages/filtering/Filtering.tsx';
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
import { ForgotPassword } from '../routing/web/forgot-password/ForgotPassword.tsx';
import { SetPassword } from '../pages/verify/set-password/SetPassword.tsx';
import { SlimLayout } from '../routing/web/components/SlimLayout.tsx';

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
      { path: routes.auth.forgotPassword, element: <ForgotPassword /> },
    ],
  },
  {
    path: routes.verify.root,
    element: (
      <SlimLayout>
        <Outlet />
      </SlimLayout>
    ),
    children: [
      { index: true, element: <Navigate to={routes.verify.setPassword} /> },
      {
        path: 'set-password',
        element: <SetPassword />,
      },
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
