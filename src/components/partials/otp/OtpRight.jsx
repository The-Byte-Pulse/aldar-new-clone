import { Mail, MoveLeft, RefreshCcw, Smartphone } from "lucide-react";
import { NavLink } from "react-router-dom";
import { useOtp } from "../../../context/OtpContext";

const OtpRight = () => {
  const { otpType, setOtpType } = useOtp();
  const isEmail = otpType === "email";

  return (
    <>
      <div className=" py-4 md:px-8 sm:px-6 px-2 font-open-sans">
        <NavLink
          to="/login"
          className="flex gap-2 text-text_secondary items-center hover:text-accent transition duration-500 text-sm px-2"
        >
          {" "}
          <span>
            <MoveLeft />
          </span>{" "}
          Back login
        </NavLink>
        <div className="flex flex-col items-center justify-center my-2 font-open-sans">
          <div className="bg-white shadow-md shadow-accent h-16 w-16 rounded-full flex items-center justify-center  text-accent">
            {isEmail ? <Mail /> : <Smartphone />}
          </div>
          <div className="my-4 text-center">
            <h4 className="font-semibold md:text-2xl text-md text-text_primary font-poppins">
              Enter Verification Code
            </h4>
            <p className="text-text_secondary md:text-lg text-sm">We sent a 6-digit code to</p>
            <h6 className="text-text_secondary md:text-lg text-sm">
              {isEmail ? "j***@acmecorp.com" : "+92 *** *** 1234"}
            </h6>
          </div>
          <div className="bg-text_primary my-4  sm:w-[80%] w-[90%] flex py-2 px-2 md:gap-6 gap-2 rounded-lg">
            <button
              onClick={() => setOtpType("email")}
              className={`flex gap-2 px-4 w-[50%] rounded-lg text-sm cursor-pointer  items-center py-2 transition-colors ${isEmail ? "bg-accent text-text_primary" : " text-accent"}`}
            >
              <Mail className="" />
              Email
            </button>
            <button
              onClick={() => setOtpType("phone")}
              className={`flex gap-2 px-4 w-[50%] text-sm  cursor-pointer items-center rounded-lg py-2 transition duration-300 text-accent ${!isEmail ? "bg-accent text-text_primary" : "text-accent "}`}
            >
              <Smartphone />
              Phone
            </button>
          </div>
          <div className="my-4 w-full text-center">
            <input
              type="text"
              className="bg-text_secondary px-2 md:w-12 w-10 h-14 mr-1 outline-0 rounded-lg "
              inputMode="numeric"
              aria-label="Digital 1"
              maxLength="1"
            />
            <input
              type="text"
              className="bg-text_secondary px-2 md:w-12 w-10 h-14 rounded-lg mr-1 outline-0 "
            />
            <input
              type="text"
              className="bg-text_secondary px-2 md:w-12  w-10 h-14 mr-1 outline-0 rounded-lg"
            />
            <input
              type="text"
              className="bg-text_secondary px-2 md:w-12 w-10 h-14 rounded-lg mr-1 outline-0 "
            />
            <input
              type="text"
              className="bg-text_secondary px-2 md:w-12  w-10 h-14 mr-1 outline-0 rounded-lg"
            />
            <input
              type="text"
              className="bg-text_secondary px-2 md:w-12 w-10 h-14 rounded-lg mr-1 outline-0 "
            />
          </div>
          <button className="my-4 bg-accent sm:w-[80%] w-[90%] text-text_secondary py-2 rounded-lg md:text-lg transition duration-500 ease-in text-sm cursor-pointer  hover:text-accent hover:bg-text_primary border-2 border-accent font-poppins">
            Verify & Continue
          </button>
          <a
            href=""
            className="text-text_secondary text-sm flex gap-1 items-center hover:underline"
          >
            <RefreshCcw size={16} /> Resend verification code
          </a>
        </div>
        <div className="sm:w-[80%] w-[90%]  mx-auto text-[10px]  text-text_secondary bg-secondary px-4 py-2 rounded-lg font-open-sans">
          <p className="md:w-[65%] sm:w-[50%] w-[64%]  mx-auto text-center">
            The verification code expires in 10 minutes. If you didn't receive
            it, check your spam folder.
          </p>
        </div>
      </div>
    </>
  );
};
export default OtpRight;
