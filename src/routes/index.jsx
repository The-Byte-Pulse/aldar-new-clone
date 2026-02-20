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
import CreateTransaction from "../pages/protected/Transactions/CreateTransaction";
import AllTransactions from "../pages/protected/Transactions/AllTransactions";
import PendingTransactions from "../pages/protected/Transactions/PendingTransaction";
import EReceipts from "../pages/protected/Reports/E-receipts";
import Statements from "../pages/protected/Reports/Statements";
import Reports from "../pages/protected/Reports/Reports";
import FeeReports from "../pages/protected/Reports/FeeReports";
import Support from "../pages/protected/Support/Support";
import Documents from "../pages/protected/Documents/Documents";
import Notifications from "../pages/protected/Notifications/Notifications"; 

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
      { path: "support", element: <Support /> },
      { path: "documents", element: <Documents /> },
      { path: "notifications", element: <Notifications /> },

      // Transaction routes
      {
        path: "transactions",
        children: [
          { index: true, element: <AllTransactions /> },
          { path: "create", element: <CreateTransaction /> },
          { path: "pending", element: <PendingTransactions /> },
        ],
      },

      // Reports routes
      {
        path: "reports",
        children: [
          { index: true, element: <Reports /> },
          { path: "e-receipts", element: <EReceipts /> },
          { path: "statements", element: <Statements /> },
          { path: "fee", element: <FeeReports /> },
        ],
      },
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