import AccountCreationSteps from "../components/common/AccountCreationSteps";
import RegisterNav from "../components/common/RegisterNav";
import { useState } from "react";
import CreateAccount from "../Pages/registration/CreateAccount";
import { Icon } from "@iconify/react";
import PhoneVerification from "../Pages/registration/PhoneVerification";
import CompanyInformation from "../Pages/registration/CompanyInformation";
import AuthorizedPerson from "../Pages/registration/AuthorizedPerson";
import UploadDocuments from "../Pages/registration/UploadDocuments";
import UserRole from "../Pages/registration/UserRole";

const RegisterLayout = () => {
  const [currStep, setCurrStep] = useState(1);
  return (
    <>
      <div className="bg-background h-full ">
        <RegisterNav />

        <div className="lg:w-[70%] w-[90%] mx-auto py-6 ">
          <AccountCreationSteps currStep={currStep} />
          <div className="bg-white rounded-lg px-6 pb-4">
            {currStep === 1 && <CreateAccount />}
            {currStep === 2 && <PhoneVerification />}
            {currStep === 3 && <CompanyInformation/>}
            {currStep === 4 && <AuthorizedPerson/>}
            {currStep === 5 && <UploadDocuments/>}
            {currStep === 6 && <UserRole/>}

            <div className="flex justify-between py-2 ">
              <button className={`bg-accent text-white px-4 py-2 rounded-lg flex gap-2 items-center ${currStep === 1 ? "cursor-no-drop" : "cursor-pointer"} `}  onClick={() => {
                  setCurrStep(currStep - 1);
                 
                }}  disabled={currStep === 1}>
                <span>
                  <Icon icon="ion:arrow-back" width="14" height="14" />
                </span>
                Previous
              </button>
              {
                currStep === 6 ?  <button type="submit"
                onClick={() => {
                  alert("form Submit");
                }}
                className="bg-accent text-white px-4 py-2 rounded-lg flex gap-2 items-center cursor-pointer "
              >
                Submit{" "}
                <span>
                  <Icon icon="majesticons:arrow-right" width="14" height="14" />
                </span>
              </button> :   <button
                onClick={() => {
                  setCurrStep(currStep + 1);
                }}
                className="bg-accent text-white px-4 py-2 rounded-lg flex gap-2 items-center cursor-pointer "
              >
                Next{" "}
                <span>
                  <Icon icon="majesticons:arrow-right" width="14" height="14" />
                </span>
              </button>
              }
             
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default RegisterLayout;
