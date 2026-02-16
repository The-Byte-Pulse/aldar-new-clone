import AuthLayout from "../layouts/AuthLayout";
import LogIn from "../Pages/authentication/LogIn";

import Otp from "../pages/authentication/Otp";
import LoginLeft from "../components/partials/login/LoginLeft";
import OtpLeft from "../components/partials/otp/OtpLeft";
import { OtpProvider } from "../context/OtpContext";

const AuthRoutes = [
  {
    element: (
      <AuthLayout leftContent={<LoginLeft/>}/>
    ),
    children: [
      {
        index: true,
        element: <LogIn />,
      },
      {
        path: "/login",
        element: <LogIn />,
      },
    ],
  },
  {
    path: "otp",
    element: (
      <OtpProvider>
        <AuthLayout leftContent={<OtpLeft />} />
      </OtpProvider>
    ),
    children: [
      {
        index: true,
        element: <Otp />,
      },
    ],
  },
];

export default AuthRoutes;
