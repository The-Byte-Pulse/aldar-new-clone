import { Lock } from "lucide-react";
import { NavLink } from "react-router-dom";
import "../../../auth.css";
const LoginForm = () => {
 
  return (
    <>
        
      <div className="xl:px-8 xl:py-10 md:px-6 md:py-8 px-4 py-4 w-full">
          <h2 className="lg:text-3xl text-2xl font-semibold text-text_primary capitalize my-1 font-poppins lg:text-left text-center">
            welcome back
          </h2>
          <h3 className=" text-text_secondary md:text-md text-sm font-open-sans lg:text-left text-center">
            Sign in to access your corporate account
          </h3>
          <form className="mt-6 text-sm text-text_primary font-open-sans">
            <div className="my-4">
              <label htmlFor="email" className="">
                Email <span className="text-red-700">*</span>
                <input
                  type="email"
                  placeholder="Enter Your Email" required
                  className="w-full outline-0 p-4 rounded-lg bg-secondary text-gray-100  mt-1"
                />
              </label>
            </div>
            <div className="my-4">
              <label htmlFor="email">
                Password <span className="text-red-700">*</span>
                <input
                  type="password"
                  placeholder="Enter Your Password" required
                  className="w-full outline-0  p-4 rounded-lg  mt-1 bg-secondary text-gray-100"
                />
              </label>
            </div>
       
              <div className="flex items-center justify-between">
                <div className="my-4 flex items-center text-sm cursor-pointer ">
                  <span className="block h-4 w-4 rounded border-2 mr-2 text-text_primary"></span>
                  Remember me
                </div>
                <h6 className="text-text_secondary hover:underline cursor-pointer transition duration-300">Forgot password?</h6>
              </div>
         
            <button className="bg-accent text-white w-full p-2 rounded md:text-lg text-sm cursor-pointer capitalize hover:text-accent hover:bg-text_primary transition duration-500 ease-in border-2 border-accent font-poppins ">
              sign In
            </button>
            <div className="border-b border-border_color my-8"></div>
            <div className="text-center">
                <h2>
                    Don't have an account? 
                    <NavLink className="ps-1 text-accent font-medium cursor-pointer hover:underline transition duration-300" to="/registration">Register your company</NavLink>
                </h2>
                
            </div>
          </form>
            <div className="flex justify-center items-center my-4 text-text_secondary" >
             <span><Lock size={10} /></span>
            <h6 className="ps-1 text-[12px]">
                Secured with 256-bit SSL encryption
            </h6>
        </div>
    </div>
      
       
    
    </>
  );
};
export default LoginForm;
