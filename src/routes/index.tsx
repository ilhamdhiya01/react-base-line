import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";

import ROUTES from "../constants/routes";
import AuthLayout from "../layouts/Auth";
import MainLayout from "../layouts/Main";

import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";

const HomePage = lazy(() => import("../pages/Home"));
const LoginPage = lazy(() => import("../pages/Login"));
const ProfilePage = lazy(() => import("../pages/Profile"));
const SettingsPage = lazy(() => import("../pages/Settings"));
const SignupPage = lazy(() => import("../pages/Signup"));

const router = createBrowserRouter([
  {
    path: "",
    element: (
      <PrivateRoute>
        <MainLayout />
      </PrivateRoute>
    ),
    children: [
      {
        path: ROUTES.HOME,
        element: <HomePage />,
      },
      {
        path: ROUTES.PROFILE,
        element: <ProfilePage />,
      },
      {
        path: ROUTES.SETTINGS,
        element: <SettingsPage />,
      },
    ],
  },
  {
    path: "",
    element: (
      <PublicRoute>
        <AuthLayout />
      </PublicRoute>
    ),
    children: [
      {
        path: ROUTES.LOGIN,
        element: <LoginPage />,
      },
      {
        path: ROUTES.SIGNUP,
        element: <SignupPage />,
      },
    ],
  },
]);

export default router;
