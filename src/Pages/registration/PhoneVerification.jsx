import { Icon } from "@iconify/react";

const PhoneVerification = () =>{
    return(
        <>
         <section className="py-6 ">
           
              <div className="  font-open-sans py-4">
                <h2 className="font-poppins font-semibold md:text-2xl text-xl ">
                  Phone Verification
                </h2>
                <p className="text-gray-500 font-open-sans md:text-[16px] mb-6 text-sm">
                  Secure your account with mobile number verification
                </p>
                <form action="" className="my-4">
                  <div className="lg:flex block gap-4 my-2">
                    <div className=" lg:w-[50%] w-full">
                      <label htmlFor="number" className="font-poppins">
                        Mobile Number <span className="text-red-600">*</span>
                        <input
                          type="text"
                          id="number"
                          required
                          placeholder="+92 300 1234567"
                          className="border border-gray-500 px-2 py-3 outline-0 focus:ring-2 focus:ring-accent text-sm rounded-lg w-full"
                        />
                      </label>
                      <div className="my-2">
                        <button className="bg-accent cursor-pointer w-full text-white rounded-lg px-2 py-3 my-2">
                          Send OTP
                        </button>
                      </div>
                    </div>
                    <div className="lg:w-[50%] w-full">
                      <label htmlFor="verification-code" className="font-poppins">
                        Verification Code <span className="text-red-600">*</span>
                        <input
                        id="verification-code"
                          type="text"
                          required
                          placeholder="Enter 6-digit OTP"
                          className="w-full border border-gray-500 outline-0 focus:ring-2 focus:ring-accent  px-2 py-3 text-sm  rounded-lg"
                        />
                      </label>
                      <div className="my-2">
                        <button className="bg-accent w-full cursor-pointer text-white rounded-lg px-2 py-3 my-2">
                          Verify OTP
                        </button>
                      </div>
                    </div>
                  </div>
                 
                </form>
                
              </div>
            </section>
        </>
    )
}
export default PhoneVerification;