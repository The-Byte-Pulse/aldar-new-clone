import AuthLayout from "../layouts/AuthLayout";
import LogIn from "../Pages/authentication/LogIn";

import Otp from "../pages/authentication/Otp";
import LoginLeft from "../components/partials/login/LoginLeft";
import OtpLeft from "../components/partials/otp/OtpLeft";
import { OtpProvider } from "../context/OtpContext";
import RegistrationLayout from "../layouts/RegistrationLayout";
import RegistrationInstruction from "../Pages/RegistrationInstruction";
import RegisterLayout from "../layouts/RegisterLayout";
import CreateAccount from "../Pages/authentication/CreateAccount";

const AuthRoutes = [
  {
    path : "/",
    element: (
      <AuthLayout leftContent={<LoginLeft/>}/>
    ),
    children: [
      {
        index: true,
        element: <LogIn />,
      },
      {
        path: "login",
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
  {
    path : "registration",
    element : <RegistrationLayout/>,
    children:[
      {
      index : true,
      element : <RegistrationInstruction/>,
      }


    ]
  },
  {
    path : "register",
    element : <RegisterLayout/>,
    children :[
      {
        path : "create-account",
        element: <CreateAccount/>
      }
    ]
  }
];

export default AuthRoutes;
