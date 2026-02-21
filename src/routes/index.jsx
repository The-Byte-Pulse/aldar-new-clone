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
import BankAccounts from "../pages/protected/BankAccounts";
import Beneficiaries from "../pages/protected/Beneficiaries";
import CardPayments from "../pages/protected/CardPayments";
import Fundinghistory from '../pages/Fundinghistroy'
import FundingPage from '../pages/FundingPage'
import Refund from '../pages/Refund'

const router = createBrowserRouter([
  ...AuthRoutes,
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
      { path: "bank-accounts", element: <BankAccounts /> },
      { path: "beneficiaries", element: <Beneficiaries /> },
      { path: "card-payments", element: <CardPayments /> },
      { path: "fundinghistory", element: <Fundinghistory /> },
      { path: "funding", element: <FundingPage /> },
      { path: "refund", element: <Refund /> },

      // WPS routes
      { path: "wps", element: <WPSOverview/> },
      { path: "wps/upload-salary-file", element: <UploadSalaryFile/> },
      { path: "wps/batch-history", element: <BatchHistory/> },

      // Transaction route
     {
  path: "transactions",
  children: [
    { path: "create", element: <CreateTransaction /> },
    {index:true, element: <AllTransactions/>},
    {path: "pending", element: <PendingTransactions/>}
  ],
     },
  {
  path: "reports",
  children:[
    {path: "e-receipts", element: <EReceipts/>},
    {index: true, element: <Reports/>},
    {path: "Statements", element: <Statements/>},
    {path: "free" , element: <FeeReports/>}
  ]
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