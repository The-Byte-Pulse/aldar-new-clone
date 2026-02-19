import { Icon } from "@iconify/react";


const CreateAccount = () => {
  
  return (
    <section className="py-6">
   
      <div className="  font-open-sans py-4">
        <h2 className="font-poppins font-semibold md:text-2xl text-xl ">
          Account Creation
        </h2>
        <p className="text-gray-500 font-open-sans md:text-[16px] text-sm mb-6">
          Create your account with email verification
        </p>
        <form action="" className="my-4">
          <div className="lg:flex block gap-4 ">
            <div className=" lg:w-[50%] w-full mt-2 mb-2">
              <label htmlFor="email" className="font-poppins">
                Email Address <span className="text-red-600">*</span>
                <input
                  type="email"
                  id="email"
                  required
                  placeholder="corporate@company.com"
                  className="border border-gray-500 px-2 py-3  focus:ring-2 focus:ring-accent  outline-0 rounded-lg w-full text-sm"
                />
              </label>
              <div className="mt-1">
                <button className="bg-accent cursor-pointer w-full text-white rounded-lg px-2 py-3 my-2">
                  Send OTP
                </button>
              </div>
            </div>
            <div className="lg:w-[50%] w-full mt-2 mb-2">
              <label htmlFor="verification-code" className="font-poppins">
                Verification Code <span className="text-red-600">*</span>
                <input
                id="verification-code"
                  type="text"
                  required
                  placeholder="Enter 6-digit OTP"
                  className="w-full border border-gray-500 px-2 py-3 text-sm rounded-lg focus:ring-2 focus:ring-accent outline-0"
                />
              </label>
              <div className="my-1">
                <button className="bg-accent w-full cursor-pointer text-white rounded-lg px-2 py-3 my-2">
                  Verify OTP
                </button>
              </div>
            </div>
          </div>
          <div className=" lg:flex block gap-4 my-2">
            <div className="lg:w-[50%] w-full mt-2 mb-2">
              <label htmlFor="" className="font-poppins">
                Password<span className="text-red-600">*</span>
                <div className="relative">
                  <input
                    type="Password"
                    required
                    placeholder="Create a Strong Password"
                    className="w-full border border-gray-500 text-sm px-2 py-3 focus:ring-2 focus:ring-accent outline-0 rounded-lg relative"
                  />

                  <Icon
                    icon="solar:eye-outline"
                    width="14"
                    height="14"
                    className="absolute top-4 right-4 text-gray-500" 
                  />
                </div>
              </label>
            </div>
            <div className="lg:w-[50%] w-full mt-2 mb-2">
              <label htmlFor="" className="font-poppins">
                
                Confirm Password<span className="text-red-600">*</span>
               <div className="relative">
                 <input
                  type="Password"
                  required
                  placeholder="Confirm Your Password"
                  className="w-full border text-sm border-gray-500 px-2 py-3 focus:ring-2 focus:ring-accent outline-0 rounded-lg "
                />
                  <Icon
                    icon="solar:eye-outline"
                    width="14"
                    height="14"
                    className="absolute top-4 right-4  text-gray-500" 
                  />
                </div>
              </label>
            </div>

          </div>
        </form>
        
      </div>
    </section>
  );
};
export default CreateAccount;
