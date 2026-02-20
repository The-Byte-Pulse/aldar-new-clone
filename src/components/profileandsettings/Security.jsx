import { GlobeAltIcon, KeyIcon, ShieldExclamationIcon } from "@heroicons/react/16/solid"

const Security = () => {
  return (
    <div className="space-y-8 p-4 md:p-6">
      {/* Password Section */}
      <div>
        <h3 className="text-lg font-bold text-slate-900 mb-4 px-2 md:px-4">
          Password
        </h3>

        <div className="rounded-2xl shadow-lg bg-slate-100 p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-0">
          <div className="flex flex-col gap-1">
            <h2 className="text-lg font-sm">Change Password</h2>
            <p className="text-sm text-slate-500">Last changed 30 days ago</p>
          </div>

          <button className="flex items-center gap-1 text-blue-900 hover:bg-blue-100 font-semibold border rounded-xl transition-all px-3 py-2 duration-200 mt-2 sm:mt-0">
            <KeyIcon className="w-4 h-4" />
            Change Password
          </button>
        </div>
      </div>

      {/* Two-Factor Authentication */}
      <div>
        <h3 className="text-lg font-bold text-slate-900 mb-4 px-2 md:px-4">
          Two-Factor Authentication
        </h3>

        <div className="bg-slate-100 rounded-2xl shadow-sm border border-green-500 p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-0">
          <div className="flex items-start gap-3">
            <div className="p-2 rounded-lg bg-green-100 flex-shrink-0">
              <ShieldExclamationIcon className="w-6 h-6 text-green-500" />
            </div>
            <div className="flex flex-col gap-1">
              <h2 className="text-lg font-sm">Enable 2FA</h2>
              <p className="text-sm text-slate-500">Using SMS verification</p>
            </div>
          </div>

          <button className="flex items-center gap-1 text-blue-900 hover:bg-blue-100 font-semibold border rounded-xl transition-all px-3 py-2 duration-200 mt-2 sm:mt-0">
            Manage
          </button>
        </div>
      </div>

      {/* Login Sessions */}
      <div>
        <h3 className="text-lg font-bold text-slate-900 mb-4 px-2 md:px-4">Login Sessions</h3>

        {/* Each Session Card */}
        {[
          { device: "Windows PC - Chrome", location: "Dubai, UAE", time: "Current Session", status: "Active", active: true },
          { device: "iPhone 14 Pro - Safari", location: "Dubai, UAE", time: "2 hours ago", status: "Revoke", active: false },
          { device: "MacBook Pro - Chrome", location: "Abu Dhabi, UAE", time: "Yesterday", status: "Revoke", active: false },
        ].map((session, idx) => (
          <div
            key={idx}
            className="bg-white sm:bg-white/100 rounded-2xl shadow-sm border border-slate-300 p-4 mb-3 flex flex-col sm:flex-row sm:items-center justify-between gap-4 sm:gap-0"
          >
            <div className="flex items-start gap-3">
              <div className="bg-white p-2 rounded-lg border border-slate-600 flex-shrink-0">
                <GlobeAltIcon className="w-6 h-6 text-slate-600" />
              </div>
              <div className="flex flex-col gap-1">
                <h2 className="text-lg font-sm">{session.device}</h2>
                <p className="text-sm text-slate-500">{session.location}</p>
              </div>
            </div>
            <div className="flex flex-col items-start sm:items-end text-right gap-1 mt-2 sm:mt-0">
              <p className="text-sm text-slate-600">{session.time}</p>
              <span
                className={`text-xs font-medium px-2 py-1 rounded-full ${
                  session.active ? "bg-green-100 text-green-700" : "text-red-500"
                }`}
              >
                {session.status}
              </span>
            </div>
          </div>
        ))}

        <button className="flex items-center justify-center gap-1 text-blue-900 hover:bg-blue-100 font-semibold border rounded-xl transition-all px-3 py-3 duration-200 w-full sm:w-auto mt-2">
          Sign out all other Sessions
        </button>
      </div>
    </div>
  )
}

export default Security
