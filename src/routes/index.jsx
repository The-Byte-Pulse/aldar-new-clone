import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";

import DashboardLayout from "../layout/DashboardLayout";
import Dashboard from "../pages/protected/Dashboard";
import SettingPage from "../pages/SettingPage";
import ProfilePage from "../pages/ProfilePage";
import NotFound from "../pages/static/NotFound"; 
import CreateTransaction from "../pages/protected/Transactions/Create Tansaction"; 

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/dashboard" />,
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      { index: true, element: <Dashboard /> },
      { path: "profile", element: <ProfilePage /> },
      { path: "setting", element: <SettingPage /> },
      { path: "create", element: <CreateTransaction /> }, 
    ],
  },
  {
    path: "*",
    element: <NotFound />, 
  },
]);

export default function Routes() {
  return <RouterProvider router={router} />;
}
