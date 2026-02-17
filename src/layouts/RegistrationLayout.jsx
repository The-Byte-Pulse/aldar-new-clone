import { Outlet } from "react-router-dom";

const RegistrationLayout = () =>{
 return(
    <>
    <div className="bg-background h-full p-8">
     <Outlet/>
    </div>
    </>
 )
}
export default RegistrationLayout;