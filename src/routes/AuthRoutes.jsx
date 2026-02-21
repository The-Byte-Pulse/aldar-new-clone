import AuthLayout from "../layout/AuthLayout";
import LogIn from "../Pages/authentication/LogIn";

import Otp from "../pages/authentication/Otp";
import LoginLeft from "../components/partials/login/LoginLeft";
import OtpLeft from "../components/partials/otp/OtpLeft";
import { OtpProvider } from "../context/OtpContext";
import RegistrationLayout from "../layout/RegistrationLayout";
import RegistrationInstruction from "../pages/RegistrationInstruction";
import RegisterLayout from "../layout/RegisterLayout";
import CreateAccount from "../pages/registration/CreateAccount";

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
