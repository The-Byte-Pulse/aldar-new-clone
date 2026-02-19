const CompanyInformation = () => {
  return (
    <section className="py-6 font-open-sans">
      <div className="py-4">
        <h2 className="font-poppins md:text-2xl font-semibold text-xl">
          Company Information{" "}
        </h2>
        <p className="text-gray-500 font-open-sans md:text-[16px] mb-6 text-sm">
          Enter your company details and business Information
        </p>
      </div>
      <form action="" className="">
        <label htmlFor="" className="font-poppins">
          Company Legal Name <span className="text-red-600">*</span>
          <input
            type="text"
            placeholder="ABC Corporation List "
            className="w-full text-sm border px-2 py-3 outline-0 focus:ring-1 focus:ring-accent border-gray-500 rounded-lg mt-2 mb-4 font-open-sans"
          />
        </label>
        <label htmlFor="" className="font-poppins">
          Entity Type <span className="text-red-600">*</span>
          <select
            name=""
            id=""
            className="w-full border px-2 py-3 rounded-lg text-sm border-gray-500 mt-2 mb-4 font-medium font-open-sans outline-0 focus:ring-1 focus:ring-accent"
          >
            <option value="">Select Entity Type</option>
            <option value="">Private Limited </option>
            <option value="">Public Limited </option>
            <option value="">LLC</option>
            <option value="">Sole Proprietorship</option>
            <option value="">PartnerShip</option>
          </select>
        </label>
        <div className="md:flex block gap-4">
          <label htmlFor="" className="md:w-1/2 w-full block font-poppins">
            Country <span className="text-red-600">*</span>
            <select
              name=""
              id=""
              className="w-full mb-4 mt-2 px-2 py-3 border rounded-lg  border-gray-500 font-medium font-open-sans text-sm outline-0 focus:ring-1 focus:ring-accent"
            >
              <option value="">Select Country</option>
              <option value="">Pakistan</option>
              <option value="">UAE</option>
              <option value=""> UK</option>
              <option value="">USA</option>
            </select>
          </label>
          <label htmlFor="" className="md:w-1/2 w-full font-poppins">
            City <span className="text-red-600">*</span>
            <input
              type="text"
              placeholder="Karachi"
              className="w-full text-sm  mb-4 mt-2 px-2 py-3 border border-gray-500 rounded-lg font-medium font-open-sans outline-0 focus:ring-1 focus:ring-accent"
            />
          </label>
        </div>
        <div className="md:flex block gap-4">
          <label htmlFor="" className="md:w-1/2 w-full block font-poppins">
            Postal Code <span className="text-red-600">*</span>
            <input
              type="text"
              id=""
              className="w-full border border-gray-500 outline-0 focus:ring-1 focus:ring-accent rounded-lg px-2 py-3 mb-3 mt-2 text-sm"
              placeholder="75500"
            />
          </label>
          <label htmlFor="" className="w-1/2 font-poppins">
            Business Type <span className="text-red-600">*</span>
            <select
              type="text"
              placeholder="Karachi"
              className="w-full border border-gray-500 rounded-lg px-2 text-sm font-medium  py-3 mb-4 mt-2 font-open-sans outline-0 focus:ring-1 focus:ring-accent"
            >
              <option className=" ">Select Business Type</option>

              <option value="">Consulting</option>
              <option value="">Manufacturing</option>
              <option value="">Services</option>
              <option value="">Trading</option>
            </select>
          </label>
        </div>
        <div className="md:flex gap-4 block">
          <label htmlFor="" className="md:w-1/2 w-full block font-poppins">
            Business Nature <span className="text-red-600">*</span>
            <select className="w-full border border-gray-500 rounded-lg px-2 py-3 mb-4 mt-2 font-open-sans text-sm font-medium outline-0 focus:ring-1 focus:ring-accent">
              <option>Select Business Type</option>

              <option value="">Business Consulting </option>
              <option value="">Financial Advisory</option>
              <option value="">Food Processing</option>
              <option value="">General Trading</option>
              <option value="">IT Services</option>

              <option value="">Import and Export</option>
              <option value="">Light Manufacturing</option>
              <option value="">Logistics Service</option>
            </select>
          </label>
          <label htmlFor="" className="md:w-1/2 w-full font-poppins">
            Legal Form <span className="text-red-600">*</span>
            <select
              type="text"
              placeholder="Karachi"
              className="w-full border border-gray-500 rounded-lg px-2 py-3 mb-4 mt-2 font-open-sans text-sm font-medium outline-0 focus:ring-1 focus:ring-accent"
            >
              <option>Select Legal Form</option>

              <option value="">Legal Form</option>
            </select>
          </label>
        </div>
        <div className="md:flex gap-4 block">
          <label htmlFor="" className="md:w-1/2 w-full block font-poppins">
            Capital volume <span className="text-red-600">*</span>
            <select className="w-full border border-gray-500 outline-0 focus:ring-1 focus:ring-accent rounded-lg px-2 py-3 mb-4 mt-2 font-open-sans text-sm font-medium">
              <option>Select Capital Volume</option>

              <option value="">50000-100000</option>
            </select>
          </label>
          <label htmlFor="" className="w-1/2 font-poppins">
            CR Registration Date <span className="text-red-600">*</span>
            <input
              type="date"
              placeholder="Karachi"
              className="w-full border border-gray-500 outline-0 focus:ring-1 focus:ring-accent rounded-lg px-2 py-3 mb-4 mt-2 font-open-sans text-sm font-medium"
            />
          </label>
        </div>
        <label htmlFor="" className="font-poppins">
          Company Account Information <span className="text-red-600">*</span>
          <textarea
            name=""
            id=""
            className="w-full border border-gray-500 outline-0 focus:ring-1 focus:ring-accent rounded-lg px-2 py-3 mb-4 mt-2 font-open-sans text-sm "
            rows={4}
            placeholder="Enter company account information"
          ></textarea>
        </label>
        <label htmlFor="" className="font-poppins">
          Address <span className="text-red-600">*</span>
          <textarea
            name=""
            id=""
            className="w-full border border-gray-500 outline-0 rounded-lg px-2 py-3 mb-4 mt-2 font-open-sans text-sm focus:ring-1 focus:ring-accent"
            rows={4}
            placeholder="Street address, Building number"
          ></textarea>
        </label>
        <label htmlFor="" className="font-poppins">
          Business Activity <span className="text-red-600">*</span>
          <textarea
            name=""
            id=""
            className="w-full border border-gray-500 rounded-lg outline-0 px-2 py-3 mb-4 mt-2 font-open-sans text-sm focus:ring-1 focus:ring-accent"
            rows={4}
            placeholder="Describe your primary business activities"
          ></textarea>
        </label>
      </form>
    </section>
  );
};
export default CompanyInformation;
