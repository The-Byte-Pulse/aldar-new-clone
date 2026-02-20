import { Icon } from "@iconify/react";
import Card from "../components/partials/card";
import { NavLink } from "react-router-dom";

const RegistrationInstruction = () => {
  return (
    <>
      <div
        className="text-center font-poppins lg:w-[40%] md:w-[55%] sm:w-[60%] w-full mx-auto
        "
      >
        <h2 className="md:text-2xl text-lg  mb-2">
          Al Dar <span className="text-accent"> Exchange </span>
        </h2>
        <h3 className="text-accent font-bold md:text-3xl text-[20px] mb-2">
          Corporate Registration
        </h3>
        <p className="text-accent font-light mb-2 text-sm">
          Register your company to get started with our enterprise-grade digital
          onboarding platform.
        </p>
      </div>
      <div className=" grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2  gap-4 mt-6">
        <Card
          title="Registration Process Overview"
          step1="Step 1 : Account Creation"
          des1="Create your account with email, password, and mobile number. OTP verification will be sent to your mobile."
          id1="1"
          step2=" Step 2 :  Company Information"
          des2="Enter company legal name, entity type, license number, country, address, and business activity."
          id2="2"
          step3=" Step 3: Authorized Person Details "
          des3="Provide signatory details including QID/Passport, designation, and contact details."
          id3="3"
          step4="Step 4: User Role Setup "
          des4="Create users, assign Inputter / Approver roles with maker-checker enforcement."
          id4="4"
        />
        <Card
          title="Required Documents"
          doc1="Trade License"
          doc2="Company Incorporation Documents"
          doc3="Authorized Signatory ID (QID / Passport)"
          doc4="Address Proof"
          doc5="Bank Documents"
          doc6="Business Activity Certificate"
        />
        <Card
          title="What You'll Get"
          caption1="Secure Platform"
          caption2="Dual Control"
          caption3="Compliance Ready"
          caption4="User Management"
          caption5="Transaction Management"
          caption6="Reports & Analytics"
          subCaption1="End-to-end encryption & secure storage"
          subCaption2="Maker-checker approval workflow"
          subCaption3="Automated KYC & AML screening"
          subCaption4="Role-based access control"
          subCaption5="Full transaction lifecycle"
          subCaption6="Monitoring & insights"
        />
       
      </div>
       <div className="flex  justify-center  my-4">
           <NavLink to="/register/create-account" className="font-poppins bg-accent flex items-center gap-2 justify-center text-text_primary px-4 py-3 rounded-lg cursor-pointer">Start Registration <span><Icon icon="iconamoon:arrow-right-1" width="24" height="24" /></span></NavLink>
          
           
        </div>
       <h5 className="text-center font-poppins text-sm">
            Already have an account? <NavLink className="text-accent " to="/login"> Sign in here </NavLink>
        </h5>
    </>
  );
};
export default RegistrationInstruction;
