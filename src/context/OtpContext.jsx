import { createContext, useContext, useState } from "react";

const OtpContext = createContext(null);

export const OtpProvider = ({ children }) => {
  const [otpType, setOtpType] = useState("email"); // "email" | "phone"

  return (
    <OtpContext.Provider value={{ otpType, setOtpType }}>
      {children}
    </OtpContext.Provider>
  );
};

export const useOtp = () => {
  const ctx = useContext(OtpContext);
  if (!ctx) throw new Error("useOtp must be used inside OtpProvider");
  return ctx;
};
