import { createBrowserRouter } from 'react-router-dom';
import Filtering from '../routing/app/Filtering.tsx';
import Billing from '../routing/app/Billing.tsx';
import Subscription from '../routing/app/Subscription.tsx';
import Listings from '../routing/app/Listings.tsx';
import Web from '../routing/Web.tsx';
import Settings from '../routing/app/Settings.tsx';
import ErrorPage from '../routing/app/ErrorPage.tsx';
import Dashboard from '../routing/app/Dashboard.tsx';
import Login from '../routing/web/Login.tsx';
import Register from '../routing/web/Register.tsx';
import VerifyEmail from '../routing/app/VerifyEmail.tsx';
import { PublicRoute } from '../pages/public/components/public-route/PublicRoute.tsx';
import { ProtectedLayout } from '../layouts/protected/ProtectedLayout.tsx';
import { ProtectedRoute } from '../pages/protected/components/protected-route/ProtectedRoute.tsx';
import { routes } from './routes.ts';

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
    path: '/home',
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
      { path: 'billing', element: <Billing /> },
      { path: 'subscription', element: <Subscription /> },
      { path: 'settings', element: <Settings /> },
      { path: 'verify-email', element: <VerifyEmail /> },
    ],
  },
]);

export default router;
