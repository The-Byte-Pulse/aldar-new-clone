import { Icon } from "@iconify/react";
import UserForm from "../../components/partials/UserForm";

const UserRole = () => {
  return (
    <section className="py-6">
      <div className="py-4">
        <h2 className="font-poppins md:text-2xl font-semibold text-xl">
          User Role Setup
        </h2>
        <p className="text-accent font-open-sans md:text-[16px] mb-6 text-sm">
          Create additional Users and assign roles. Remember : Inputer Approver
          (maker-checker enforced)
        </p>
      </div>
      <div className="bg-red-100 border border-red-200 px-2 py-4 rounded-lg">
        <div className="flex gap-2">
          <Icon
            icon="tdesign:error-triangle-filled"
            width="24"
            height="24"
            className="text-yellow-500"
          />
          <h4 className="font-poppins font-medium  text-orange-800" >Important Requirements: </h4>
        </div>
        <ul className="my-3 list-disc ps-6 md:text-[16px] text-sm">
          <li className="font-open-sans text-orange-800">
            <span className="font-medium font-poppins">
              Minimum 2 users required :
            </span>{" "}
            you must add at least one <b> Inputter</b> and one <b>Approver</b> .
          </li>
           <li className="font-open-sans text-orange-800">
            <span className="font-medium font-poppins">
              Inputter :
            </span>{" "}
            Can enter data, upload documents, and initiate transactions but cancot approve.
          </li>
           <li className="font-open-sans text-orange-800">
            <span className="font-medium font-poppins">
              Approver :
            </span>{" "}
            Can approve transactions but cannot create them.
          </li>
           <li className="font-open-sans text-orange-800">
            <span className="font-medium font-poppins">
              Maker-Checker Rule :
            </span>{" "}
            The same person cannot be both inputter and Approver for the same transaction.
          </li>
        </ul>
       
      </div>
   
         <UserForm user={"User 1"}/> 
         <UserForm user={"User 2"}/>

     
    </section>
  );
};
export default UserRole;
