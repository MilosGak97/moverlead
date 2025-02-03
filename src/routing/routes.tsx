import { createBrowserRouter } from 'react-router-dom';
import Filtering from './app/Filtering.tsx';
import Billing from './app/Billing.tsx';
import Subscription from './app/Subscription.tsx';
import Listings from './app/Listings.tsx';
import Web from './Web.tsx';
import Settings from './app/Settings.tsx';
import ErrorPage from './app/ErrorPage.tsx';
import Dashboard from './app/Dashboard.tsx';
import Login from './web/Login.tsx';
import Register from './web/Register.tsx';
import VerifyEmail from './app/VerifyEmail.tsx';
import { PublicRoute } from '../pages/public/components/public-route/PublicRoute.tsx';
import { ProtectedLayout } from '../layouts/protected/ProtectedLayout.tsx';
import { ProtectedRoute } from '../pages/protected/components/protected-route/ProtectedRoute.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Web />,
    errorElement: <ErrorPage />,
    children: [],
  },
  {
    path: '/auth',
    element: <PublicRoute />,
    children: [
      { index: true, element: <Login /> },
      { path: '/auth/login', element: <Login /> },
      { path: '/auth/register', element: <Register /> },
    ],
  },
  {
    path: '/dashboard',
    element: (
      <ProtectedRoute>
        <ProtectedLayout />
      </ProtectedRoute>
    ),
    children: [
      { index: true, element: <Dashboard /> },
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
