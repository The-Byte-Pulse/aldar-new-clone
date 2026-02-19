const AuthorizedPerson = () => {
  return (
    <>
      <section className="py-6 ">
        <div className="  font-open-sans py-4">
          <h2 className="font-poppins font-semibold md:text-2xl text-xl ">
            Authorized person Details
          </h2>
          <p className="text-gray-500 font-open-sans md:text-[16px] mb-6 text-sm">
            Provide details of the authorized signatory
          </p>
          <form action="" className="my-4">
            <label htmlFor="name" className="font-poppins">
              Full Name <span className="text-red-600">*</span>
              <input
                type="text"
                id="name"
                required
                placeholder="John Doe"
                className="border border-gray-500 px-2 py-3 mb-4 mt-2 text-sm rounded-lg w-full focus:ring-1 focus:ring-accent outline-0"
              />
            </label>

            <div className="md:flex gap-4 block ">
              <label
                htmlFor="document-type"
                className="md:w-1/2 w-full font-poppins"
              >
                Documentation Type <span className="text-red-600">*</span>
                <select
                  className="w-full border border-gray-500 px-2 py-3 text-sm mb-4 mt-2 rounded-lg focus:ring-1 outline-0 focus:ring-accent"
                  id="document-type"
                >
                  <option value=""> Select an option</option>
                  <option value="">QID</option>
                  <option value="">Passport</option>
                </select>
              </label>
              <label
                htmlFor="nationality"
                className="font-poppins md:w-1/2 w-full "
              >
                Nationality <span className="text-red-600">*</span>
                <input
                  type="text"
                  placeholder="4210-1234567-1"
                  className="w-full border outline-0 border-gray-500 px-2 py-3 text-sm mb-4 mt-2 rounded-lg focus:ring-1 focus:ring-accent"
                  id="nationality"
                />
              </label>
            </div>
            <div className="md:flex gap-4 block">
              <label htmlFor="email" className="md:w-1/2 w-full font-poppins">
                {" "}
                Email Address <span className="text-red-600">*</span>
                <input
                  type="email"
                  placeholder="authorize@company.com"
                  className="w-full border border-gray-500 px-2 py-3 text-sm mb-4 mt-2 rounded-lg outline-0 focus:ring-1 focus:ring-accent"
                  id="email"
                />
              </label>
              <label htmlFor="phone-number" className="md:w-1/2 w-full font-poppins">
                {" "}
                Phone Number <span className="text-red-600">*</span>
                <input
                  type="text"
                  placeholder="+92 300 1234567"
                  className="w-full border outline-0 border-gray-500 px-2 py-3 text-sm mb-4 mt-2 rounded-lg focus:ring-1 focus:ring-accent"
                  id="phone-number"
                />
              </label>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};
export default AuthorizedPerson;
