import { Icon } from "@iconify/react";


const AccountCreationSteps = ({currStep}) => {
  const steps = [
    {
      icon: <Icon icon="akar-icons:person" width="24" height="24" />,
      title: "Account Creation",
    },
    {
      icon: <Icon icon="mingcute:phone-line" width="24" height="24" />,
      title: "Phone Verification",
    },
    {
      icon: <Icon icon="mingcute:building-1-line" width="24" height="24" />,
      title: "Company Information",
    },
    {
      icon: <Icon icon="bitcoin-icons:verify-outline" width="24" height="24" />,
      title: "Authorized Person",
    },
    {
      icon: <Icon icon="material-symbols:upload" width="24" height="24" />,
      title: "Document Upload",
    },
    {
      icon: <Icon icon="nimbus:user-group" width="24" height="24" />,
      title: "User Role Setup",
    },
  ];
  

  return (
    <>
      <div className="w-full font-poppins py-6">
        <div className="flex items-center justify-between px-4 gap-4 py-4 overflow-x-auto md:overflow-visible">
          {steps.map((step, index) => {
            const isCompleted = currStep >= index + 1;
            return (
              <>
                <div
                  className="flex flex-col items-center justify-center shrink-0 md:shrink min-w-22.5 md:min-w-0"
                  key={index}
                >
                  <div className="flex justify-center items-center text-gray-500">
                    <span className={`rounded-full md:h-12 md:w-12 h-10 w-10 flex items-center justify-center ${isCompleted ? "bg-accent text-white " : "border-2 border-gray-500 bg-none"}`}>
                      {step.icon}
                    </span>
                  </div>
                  <p className={`text-center mt-2 text-xs md:text-sm  px-1 ${isCompleted? "text-accent" : "text-gray-500"}`}>
                    {step.title}
                  </p>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};
export default AccountCreationSteps;
