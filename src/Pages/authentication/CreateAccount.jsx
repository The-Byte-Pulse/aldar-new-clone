import { Icon } from "@iconify/react";
import AccountCreationSteps from "../../components/common/AccountCreationSteps";

const CreateAccount = () => {
  return (
    <section className="py-6">
      <AccountCreationSteps />
      <div className="bg-white rounded-lg px-6  font-open-sans md:py-8 py-6">
        <h2 className="font-poppins font-semibold text-2xl ">
          Account Creation
        </h2>
        <p className="text-gray-500 font-open-sans">
          Create your account with email verification
        </p>
        <form action="" className="my-4">
          <div className="lg:flex block gap-4 my-2">
            <div className=" lg:w-[50%] w-full">
              <label htmlFor="email" className="font-poppins">
                Email Address <span className="text-red-600">*</span>
                <input
                  type="email"
                  id="email"
                  required
                  placeholder="corporate@company.com"
                  className="border border-gray-500 px-2 py-3 rounded-lg w-full"
                />
              </label>
              <div className="my-2">
                <button className="bg-accent w-full text-white rounded-lg px-2 py-3 my-2">
                  Send OTP
                </button>
              </div>
            </div>
            <div className="lg:w-[50%] w-full">
              <label htmlFor="" className="font-poppins">
                Verification Code <span className="text-red-600">*</span>
                <input
                  type="email"
                  required
                  placeholder="Enter 6-digit OTP"
                  className="w-full border border-gray-500 px-2 py-3 rounded-lg"
                />
              </label>
              <div className="my-2">
                <button className="bg-accent w-full text-white rounded-lg px-2 py-3 my-2">
                  Verify OTP
                </button>
              </div>
            </div>
          </div>
          <div className=" lg:flex block gap-4 my-2">
            <div className="lg:w-[50%] w-full my-3">
              <label htmlFor="" className="font-poppins">
                Password<span className="text-red-600">*</span>
                <div className="relative">
                  <input
                    type="Password"
                    required
                    placeholder="Create a Strong Password"
                    className="w-full border border-gray-500 text-sm px-2 py-3 rounded-lg relative"
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
            <div className="lg:w-[50%] w-full my-4">
              <label htmlFor="" className="font-poppins">
                
                Confirm Password<span className="text-red-600">*</span>
               <div className="relative">
                 <input
                  type="Password"
                  required
                  placeholder="Confirm Your Password"
                  className="w-full border text-sm border-gray-500 px-2 py-3 rounded-lg "
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
        <div className="flex justify-between">
            <button className="bg-accent text-white px-4 py-2 rounded-lg flex gap-2 items-center">
                <span><Icon icon="ion:arrow-back" width="14" height="14" /></span>Previous</button>
            <button className="bg-accent text-white px-4 py-2 rounded-lg flex gap-2 items-center ">
              Next   <span><Icon icon="majesticons:arrow-right" width="14" height="14" /></span></button>
        </div>
      </div>
    </section>
  );
};
export default CreateAccount;
