import { createBrowserRouter } from 'react-router-dom';
import { Filtering } from '../pages/protected/filtering/Filtering.tsx';
import { Subscriptions } from '../pages/protected/subscriptions/Subscriptions.tsx';
import { Order } from '../pages/protected/order/Order.tsx';
import { Listings } from '../pages/protected/listing/Listings.tsx';
import { Home } from '../pages/web/home/Home.tsx';
import { Settings } from '../pages/protected/settings/Settings.tsx';
import ErrorPage from '../components/ErrorPage.tsx';
import { Dashboard } from '../pages/protected/dashboard/Dashboard.tsx';
import Login from '../pages/auth/login/Login.tsx';
import Register from '../pages/auth/register/Register.tsx';
import { VerifyEmail } from '../pages/auth/verify-email/VerifyEmail.tsx';
import { PublicRoute } from '../pages/auth/components/PublicRoute.tsx';
import { ProtectedLayout } from '../layouts/protected/ProtectedLayout.tsx';
import { routes } from './routes.ts';
import { SuccessfullSubscription } from '../pages/protected/successfull-subscription/SuccessfullSubscription.tsx';
import { ForgotPassword } from '../pages/auth/forgot-password/ForgotPassword.tsx';
import { PostcardDesigns } from '../pages/protected/postcard-designs/PostcardDesigns.tsx';
import { Blogs } from '../pages/web/blogs/Blogs.tsx';
import { ContactUs } from '../pages/web/contact-us/ContactUs.tsx';
import { PublicLayout } from '../layouts/public/PublicLayout.tsx';
import { ResetPassword } from '../pages/auth/reset-password/ResetPassword.tsx';
import { VerifyLayout } from '../layouts/verify/VerifyLayout.tsx';
import { SetPassword } from '../pages/verify/set-password/SetPassword.tsx';
import { NotVerifiedEmail } from '../pages/verify/not-verified-email/NotVerifiedEmail.tsx';
import { ProtectedRoute } from '../pages/protected/components/ProtectedRoute.tsx';
import { VerifyRoute } from '../pages/verify/components/VerifyRoute.tsx';

const router = createBrowserRouter([
  {
    path: routes.web.root,
    element: <PublicLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      { path: routes.web.blogs, element: <Blogs /> },
      { path: routes.web.contactUs, element: <ContactUs /> },
    ],
  },
  { path: routes.verifyEmail, element: <VerifyEmail /> },
  { path: routes.resetPassword, element: <ResetPassword /> },
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
      <VerifyRoute>
        <VerifyLayout />
      </VerifyRoute>
    ),
    children: [
      { path: routes.verify.setPassword, element: <SetPassword /> },
      { path: routes.verify.notVerifiedEmail, element: <NotVerifiedEmail /> },
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
