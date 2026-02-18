import { Outlet } from "react-router-dom";
import RegisterNav from "../components/common/RegisterNav";

const RegisterLayout = () => {
  return (
    <>
      <div className="bg-background h-full ">
        <RegisterNav />
        <div className="lg:w-[70%] w-[90%] mx-auto py-3">
            <Outlet />
        </div>
     
      </div>
    </>
  );
};
export default RegisterLayout;
