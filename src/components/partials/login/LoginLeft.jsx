// LoginLeft.jsx
import { Building2, Lock, Shield } from "lucide-react";
import styles from "../../../auth.module.css";
const LoginLeft = () => {
  return (
    <>
      <div className="relative z-20 xl:p-10 p-8 font-open-sans hidden lg:block">
        <div className="flex items-center gap-4">
          <div className="bg-highlight flex items-center justify-center text-text_primary w-14 h-14 rounded-xl">
            <Building2 />
          </div>
          <div>
            <h2 className="text-3xl font-bold font-poppins text-text_secondar">
              Al Dar Exchange
            </h2>
            <p className="text-xl font-semibold text-text_secondary ">
              Corporate Portal
            </p>
          </div>
        </div>

        <h4 className="mt-6 xl:text-5xl lg:text-4xl font-semibold font-poppins text-white">
          Enterprise-Grade
          <span className="text-highlight inline-block">
            Financial Solutions
          </span>
        </h4>
        <p className="mt-6 text-white xl:w-[70%] lg:w-[80%] w-full">
          Secure, compliant, and efficient money transfer services for your
          business operations.
        </p>
        <div>
          <div className="flex gap-4 my-6">
            <div className="w-12 h-12  bg-accent text-text_primary rounded-xl flex items-center justify-center ">
              <Shield />
            </div>
            <div>
              <h5 className="text-text_primary">Financial Solutions</h5>
              <p className="text-text_secondary text-[12px]">
                256-bit encryption & multi-factor authentication
              </p>
            </div>
          </div>
          <div className="flex gap-4 my-6">
            <div className="w-12 h-12  bg-accent text-text_primary rounded-xl flex items-center justify-center ">
              <Lock />
            </div>
            <div>
              <h5 className="text-text_primary">Regulatory Compliance</h5>
              <p className="text-text_secondary text-[12px]">
                Licensed by UAE Central Bank
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default LoginLeft;
