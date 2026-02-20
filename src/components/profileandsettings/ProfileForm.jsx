export default function PersonalInfoForm() {
  return (
    <div className="p-4 md:p-6">
      <h3 className="text-base font-bold text-slate-900 mb-6 px-2 md:px-0">
        Personal Information
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

        <div>
          <label className="block text-sm font-medium text-slate-600 mb-2">
            First Name
          </label>
          <input
            type="text"
            defaultValue="John"
            className="w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-2.5 text-sm 
                       focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 
                       transition-all duration-200"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-600 mb-2">
            Last Name
          </label>
          <input
            type="text"
            defaultValue="Doe"
            className="w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-2.5 text-sm 
                       focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 
                       transition-all duration-200"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-medium text-slate-600 mb-2">
            Email
          </label>
          <input
            type="email"
            defaultValue="john.doe@acmecorp.com"
            className="w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-2.5 text-sm 
                       focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 
                       transition-all duration-200"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-600 mb-2">
            Phone Number
          </label>
          <input
            type="text"
            defaultValue="+971 50 123 4567"
            className="w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-2.5 text-sm 
                       focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 
                       transition-all duration-200"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-600 mb-2">
            Designation
          </label>
          <input
            type="text"
            defaultValue="Finance Manager"
            className="w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-2.5 text-sm 
                       focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 
                       transition-all duration-200"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-600 mb-2">
            Department
          </label>
          <input
            type="text"
            defaultValue="Finance"
            className="w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-2.5 text-sm 
                       focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 
                       transition-all duration-200"
          />
        </div>
      </div>
    </div>
  )
}
