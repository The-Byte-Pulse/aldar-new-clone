const UserForm = ({user}) =>{
    return (
        < section className=" bg-background mt-6 mb-4 rounded-lg px-6 py-8"> 
           <h4 className="font-bold mb-4 font-poppins">{user}</h4>
          <form action="">
            <label htmlFor="" className="font-poppins">
                FullName <span className="text-red-600">*</span>
                <input type="text" placeholder="User Name" className="w-full mt-2 mb-4 border border-gray-500 focus:ring-2 focus:ring-accent outline-0 px-2 py-3 rounded-lg text-sm" />
            </label>
              <label htmlFor="" className="font-poppins">
                Email <span className="text-red-600">*</span>
                <input type="text" placeholder="user@company.com" className="w-full  mt-2 mb-4 border border-gray-500 focus:ring-2 focus:ring-accent outline-0 px-2 py-3 rounded-lg text-sm" />
            </label>

              <label htmlFor="" className="font-poppins">
                Role <span className="text-red-600">*</span>
               <select name="" id="" className=" mt-2 mb-4 border border-gray-500 focus:ring-2 focus:ring-accent outline-0 px-2 py-3 rounded-lg w-full font-medium text-sm" >
                <option value="">Inputter (Can enter data, cannot aaprove)</option>
               </select>
            </label>
          </form>
          <p className="text-gray-500">
            Inputter can enter company data , upload documents, and initiates transactions but cannot approve
          </p>
        </section>
    )
}
export default UserForm;