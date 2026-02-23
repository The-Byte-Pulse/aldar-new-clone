import { Building2 } from "lucide-react";
import { Outlet } from "react-router-dom";
import "../auth.css";
const AuthLayout = ({ leftContent }) => {
  return (
    <>
      <div className="bg-background p-4 min-h-screen">
        <div className="lg:hidden flex items-center justify-center py-4">
          <div className="bg-accent flex items-center justify-center text-text_primary w-10 h-10 rounded-xl">
            <Building2 />
          </div>
          <div className="ps-4 leading-tight">
            <h2 className="text-xl font-bold text-accent font-poppins">
              Al Dar Exchange
            </h2>
            <p className=" font-open-sans text-gray-600">corporate portal</p>
          </div>
        </div>
        <div
          className=" bg-primary lg:w-[90%] w-full min-h-full mx-auto rounded-xl block lg:flex  
       md:w-[80%] md:p-4 p-0"
        >
          <div className="relative z-10 bg-[url('/images/auth.webp')] bg-cover bg-center w-[50%] min-h-full rounded-xl  border-accent lg:flex items-center hidden ">
            <div className="absolute inset-0 bg-[#132579a8] h-full rounded-xl"></div>
            {leftContent}
          </div>
          <div className="lg:w-[45%] w-full  mx-auto">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};
export default AuthLayout;
