import { Building2 } from "lucide-react";
import { useOtp } from "../../../context/OtpContext";

const OtpLeft = () => {
  const { otpType } = useOtp();

  const isEmail = otpType === "email";

  return (
    <>
      <div className="min-h-full relative z-10 xl:p-10 p-8 font-open-sans lg:flex flex-col justify-center hidden">
        <div className="flex items-center gap-4">
          <div className="bg-highlight flex items-center justify-center text-text_primary w-14 h-14 rounded-xl">
            <Building2 />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-text_primary font-poppins">
              Al Dar Exchange
            </h2>
            <p className="text-xl font-semibold text-text_secondary ">
              Corporate Portal
            </p>
          </div>
        </div>
        <h4 className="my-6 xl:text-4xl lg:text-3xl font-semibold w-[60%]  text-text_primary font-poppins">
          Two Factor
          <span className="text-highlight inline-block">Authentication</span>
        </h4>
        <p className="xl:w-[70%] lg:w-[80%] text-text_primary">
          {isEmail
            ? "We've sent a verification code to your registered email. Enter the code to continue."
            : "We've sent a verification code to your registered phone number. Enter the code to continue."}
        </p>
        <div className="bg-white/30 my-6 rounded-lg px-4 py-6 lg:w-[70%] ">
          <h6 className="text-text_primary font-poppins">OTP sent to:</h6>
          <p className="text-text_secondary">
            {isEmail ? "J***@acmecorp.com" : "+92 *** *** 1234"}
          </p>
        </div>
      </div>
    </>
  );
};
export default OtpLeft;
