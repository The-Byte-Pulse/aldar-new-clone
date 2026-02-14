import { BuildingOffice2Icon, BuildingOfficeIcon, CameraIcon, PencilIcon, ShieldCheckIcon } from '@heroicons/react/16/solid'
import React from 'react'

const Profileheader = ({action}) => {
  return (
    <div className='bg-white rounded-2xl shadow-sm border border-slate-200 p-6 flex items-center justify-between'>
      
      <div className='flex items-center gap-5'>
        <div className="relative w-30 h-30">
        <div className='w-30 h-30 rounded-full bg-blue-900 flex items-center justify-center text-white text-3xl font-bold'>
          JD
        </div>
         <div className="absolute bottom-0 right-0 bg-slate-200 rounded-full p-1 flex items-center justify-center">
         <CameraIcon className="h-5 w-5 text-slate-500" />
        </div>
        </div>
        <div className="flex flex-col">
          <div className="flex items-center gap-3">
            <h2 className="text-2xl font-bold text-slate-800">
              John Doe
            </h2>

            <span className="text-xs font-medium px-2 py-1 rounded-full bg-green-100 text-green-700">
              Active
            </span>
          </div>
          <p className='text-md text-slate-700 mt-1'>
            john.doe@acmecorp.com
          </p>

          <div className="flex items-center gap-1 mt-2">
              <BuildingOffice2Icon className="w-4 h-4 text-slate-400" />
              <span className='text-sm text-slate-500 mt-1'>ACME Corporation</span>
              <ShieldCheckIcon className="w-4 h-4 text-slate-400" />
              <span className='text-sm text-slate-500 mt-1'>Admin</span>
            </div>
             
          </div>
         </div>
          {action && (
        <div>
          {action}
        </div>
      )}
    </div>
  )
}

export default Profileheader
