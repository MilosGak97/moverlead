import {createBrowserRouter} from "react-router-dom";
import Filtering from "./app/Filtering.tsx";
import Billing from "./app/Billing.tsx";
import Subscription from "./app/Subscription.tsx";
import Listings from "./app/Listings.tsx";
import Web from "./Web.tsx";
import Settings from "./app/Settings.tsx";
import ErrorPage from "./app/ErrorPage.tsx";
import App from "./App.tsx";
import Dashboard from "./app/Dashboard.tsx";
import Login from "./web/Login.tsx";
import Register from "./web/Register.tsx";
import VerifyEmail from "./app/VerifyEmail.tsx";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Web />,
        errorElement: <ErrorPage />,
        children: [
        ]
    },
    {path: "/login", element: < Login /> },
    {path: "/register", element: <Register />},
    {
        element: <App />,
        children:[
            {path: '/dashboard', element: <Dashboard /> },
            {path: '/filtering', element: <Filtering /> },
            {path: '/listings', element: <Listings /> },
            {path: '/billing', element: <Billing /> },
            {path: '/subscription', element: <Subscription /> },
            {path: '/settings', element: <Settings /> },
            {path: '/verify-email', element: <VerifyEmail /> },
        ]
    }
])

export default router;