import { createBrowserRouter, Navigate, Outlet } from 'react-router-dom';
import { Filtering } from '../pages/filtering/Filtering.tsx';
import { Subscriptions } from '../pages/protected/subscriptions/Subscriptions.tsx';
import { Order } from '../pages/order/Order.tsx';
import { Listings } from '../pages/protected/listing/Listings.tsx';
import Web from '../pages/web/Web.tsx';
import { Settings } from '../pages/settings/Settings.tsx';
import ErrorPage from '../components/ErrorPage.tsx';
import { Dashboard } from '../pages/dashboard/Dashboard.tsx';
import Login from '../pages/login/Login.tsx';
import Register from '../pages/register/Register.tsx';
import VerifyEmail from '../pages/verify-email/VerifyEmail.tsx';
import { PublicRoute } from '../pages/public/components/public-route/PublicRoute.tsx';
import { ProtectedLayout } from '../layouts/protected/ProtectedLayout.tsx';
import { ProtectedRoute } from '../pages/protected/components/protected-route/ProtectedRoute.tsx';
import { routes } from './routes.ts';
import { SuccessfullSubscription } from '../pages/successfull-subscription/SuccessfullSubscription.tsx';
import { ForgotPassword } from '../pages/forgot-password/ForgotPassword.tsx';
import { SetPassword } from '../pages/set-password/SetPassword.tsx';
import { SlimLayout } from '../pages/web/components/SlimLayout.tsx';
import { PostcardDesigns } from '../pages/protected/postcard-designs/PostcardDesigns.tsx';
import { Blogs } from '../pages/blogs/Blogs.tsx';
import { ContactUs } from '../pages/contact-us/ContactUs.tsx';
import { PublicLayout } from '../layouts/public/PublicLayout.tsx';

const router = createBrowserRouter([
  {
    path: routes.web.root,
    element: <PublicLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Web /> },
      { path: routes.web.blogs, element: <Blogs /> },
      { path: routes.web.contactUs, element: <ContactUs /> },
    ],
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
      {
        path: 'verify-email',
        element: <VerifyEmail />,
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
      {
        path: 'postcard-designs',
        element: <PostcardDesigns />,
      },
    ],
  },
]);

export default router;
