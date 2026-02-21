import { ComputerDesktopIcon, GlobeAltIcon, KeyIcon, ShieldExclamationIcon } from "@heroicons/react/16/solid"

const Security = () => {
  return (
    <div className="space-y-8">  {/* 👈 This adds vertical spacing */}

      <div>
        <h3 className="text-lg font-bold text-slate-900 mb-4 px-4">
          Password
        </h3>

        <div className='rounded-2xl shadow-lg bg-slate-100 p-4 flex items-center justify-between'>
          <div className='flex flex-col gap-1'>
            <h2 className='text-lg font-sm'>Change Password</h2>
            <p className='text-sm text-slate-500'>
              Last changed 30 days ago
            </p>
          </div>

          <button className='flex items-center gap-1 text-blue-900 hover:bg-blue-100 font-semibold border rounded-xl transition-all px-3 py-2 duration-200'>
            <KeyIcon className='w-4 h-4'/>
            Change Password
          </button>
        </div>
      </div>


    <div>
  <h3 className="text-lg font-bold text-slate-900 mb-4 px-4">
    Two-Factor Authentication
  </h3>

  <div className='bg-slate-100 rounded-2xl shadow-sm border border-green-500 p-4 flex items-center justify-between'>
    <div className='flex items-start gap-3'>
      <div className="p-2 rounded-lg bg-green-100">
        <ShieldExclamationIcon className="w-6 h-6 text-green-500" />
      </div>
      <div className='flex flex-col gap-1'>
        <h2 className='text-lg font-sm'>Enable 2FA</h2>
        <p className="text-sm text-slate-500">
          Using SMS verification
        </p>
      </div>
      </div>
     <button className='flex items-center gap-1 text-blue-900 hover:bg-blue-100 font-semibold border rounded-xl transition-all px-3 py-2 duration-200'>
      Manage
      </button>
     </div>
     </div>

      <div>
        <h3 className="text-lg font-bold text-slate-900 mb-4 px-4">
          Login Sessions
        </h3>

       <div className='bg-slate-200 border border-slate-300 rounded-2xl shadow-sm p-4 mb-3 flex items-center justify-between'>
    
       <div className='flex items-start gap-3'>
      
        <div className="bg-white p-2 rounded-lg border-slate-600">
        <GlobeAltIcon className="w-6 h-6 text-slate-600" />
        </div>

        <div className='flex flex-col gap-1'>
        <h2 className='text-lg font-sm'>Windows PC - Chrome</h2>
        <p className="text-sm text-slate-500">Dubai, UAE</p>
        </div>
        </div>
       <div className="text-right">
        <p className="text-sm text-slate-600">Current Session</p>
        <span className="text-xs font-medium px-2 py-1 rounded-full bg-green-100 text-green-700">
        Active
        </span>
       </div>
       </div>

       <div className='bg-white rounded-2xl shadow-sm p-4 mb-3 flex items-center justify-between'>
    
       <div className='flex items-start gap-3'>
      
        <div className="bg-white p-2 rounded-lg border-slate-600">
        <GlobeAltIcon className="w-6 h-6 text-slate-600" />
        </div>

        <div className='flex flex-col gap-1'>
        <h2 className='text-lg font-sm'>iPhone 14 Pro - Safari</h2>
        <p className="text-sm text-slate-500">Dubai, UAE</p>
        </div>
        </div>
       <div className="text-right">
        <p className="text-sm text-slate-600">2 hours ago</p>
        <span className="text-xs font-medium px-2 py-1 rounded-full text-red-500">
         Revoke
        </span>
       </div>
       </div>

       <div className='bg-white rounded-2xl shadow-sm p-4 mb-3 flex items-center justify-between'>
    
       <div className='flex items-start gap-3'>
      
        <div className="bg-white p-2 rounded-lg border-slate-600">
        <GlobeAltIcon className="w-6 h-6 text-slate-600" />
        </div>

        <div className='flex flex-col gap-1'>
        <h2 className='text-lg font-sm'>MacBook Pro - Chrome</h2>
        <p className="text-sm text-slate-500">Abu Dhabi, UAE</p>
        </div>
        </div>
       <div className="text-right">
        <p className="text-sm text-slate-600">Yesterday</p>
        <span className="text-xs font-medium px-2 py-1 rounded-full text-red-500">
         Revoke
        </span>
       </div>
       </div>
       </div>
       <button className='flex items-center gap-1 text-blue-900 hover:bg-blue-100 font-semibold border rounded-xl transition-all px-3 py-3 duration-200'>
        Sign out all other Sessions
      </button>
    </div>
  )
}

export default Security
