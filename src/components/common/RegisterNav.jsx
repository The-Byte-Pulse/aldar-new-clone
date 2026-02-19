import { Icon } from "@iconify/react";

const RegisterNav = () =>{
    return(

        <>
        <div className="bg-white flex items-center shadow shadow-gray-200  justify-between py-4 sm:px-10 px-4 font-poppins ">
           <h2 className="text-2xl">Al Dar <span className="text-accent">Exchange</span></h2>
           <a href="" className="flex gap-2 items-center text-accent border-2 text-sm border-accent p-2 rounded-lg transition duration-300 ease-in hover:bg-accent hover:text-white"> <span><Icon icon="ic:twotone-arrow-back" width="24" height="24" /></span> Back To Home</a>
        </div>
        </>
    )
}
export default RegisterNav;