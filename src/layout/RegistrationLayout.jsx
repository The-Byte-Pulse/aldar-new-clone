import { Outlet } from "react-router-dom";
import "../auth.css";

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