import { BuildingOffice2Icon, CameraIcon, ShieldCheckIcon } from '@heroicons/react/16/solid'
import React from 'react'

const Profileheader = ({ action }) => {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 md:gap-0">
    
      <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-5 w-full md:w-auto">

        <div className="relative w-24 h-24 md:w-30 md:h-30 flex-shrink-0">
          <div className="w-24 h-24 md:w-30 md:h-30 rounded-full bg-blue-900 flex items-center justify-center text-white text-3xl font-bold">
            JD
          </div>
          <div className="absolute bottom-0 right-0 bg-slate-200 rounded-full p-1 flex items-center justify-center">
            <CameraIcon className="h-5 w-5 text-slate-500" />
          </div>
        </div>
        <div className="flex flex-col">
          <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-3">
            <h2 className="text-2xl font-bold text-slate-800">John Doe</h2>
            <span className="text-xs font-medium px-2 py-1 rounded-full bg-green-100 text-green-700">
              Active
            </span>
          </div>
          <p className="text-sm text-slate-700 mt-1">john.doe@acmecorp.com</p>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-1 mt-2 text-sm text-slate-500">
            <div className="flex items-center gap-1">
              <BuildingOffice2Icon className="w-4 h-4 text-slate-400" />
              ACME Corporation
            </div>
            <div className="flex items-center gap-1">
              <ShieldCheckIcon className="w-4 h-4 text-slate-400" />
              Admin
            </div>
          </div>
        </div>
      </div>
      {action && (
        <div className="w-full md:w-auto flex justify-start md:justify-end">
          {action}
        </div>
      )}
    </div>
  )
}

export default Profileheader
