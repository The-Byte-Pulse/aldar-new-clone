import { FolderArrowDownIcon } from '@heroicons/react/16/solid'
import React from 'react'

const Prefrences = () => {
  return (
    <div className="p-4 md:p-6">
      <h3 className="text-lg font-bold text-slate-900 mb-6 px-2 md:px-0">
        Display Settings
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-slate-600 mb-2">
            Language
          </label>
          <select
            defaultValue="English"
            className="w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-2.5 text-md 
                       focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 
                       transition-all duration-200"
          >
            <option value="English">English</option>
            <option value="Arabic">Arabic</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-600 mb-2">
            Timezone
          </label>
          <select
            defaultValue="Gulf Standard Time (GMT)"
            className="w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-2.5 text-md
                       focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 
                       transition-all duration-200"
          >
            <option value="Gulf Standard Time (GMT)">Gulf Standard Time (GMT)</option>
            <option value="UTC">UTC</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-600 mb-2">
            Date Format
          </label>
          <select
            defaultValue="DD/MM/YYYY"
            className="w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-2.5 text-md 
                       focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 
                       transition-all duration-200"
          >
            <option value="DD/MM/YYYY">DD/MM/YYYY</option>
            <option value="MM/DD/YYYY">MM/DD/YYYY</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-600 mb-2">
            Default Currency
          </label>
          <select
            defaultValue="AED - UAE Dirham"
            className="w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-2.5 text-md 
                       focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 
                       transition-all duration-200"
          >
            <option value="AED - UAE Dirham">AED - UAE Dirham</option>
            <option value="USD - US Dollar">USD - US Dollar</option>
          </select>
        </div>
      </div>
      <div className="border-t border-slate-200 my-3 mt-5"></div>

      <div className="flex flex-col sm:flex-row justify-end gap-3 px-2 md:px-0">
        <button className="flex items-center justify-center gap-3 text-white bg-blue-900 hover:bg-blue-800 font-semibold border rounded-xl transition-all px-4 py-3 duration-200 w-full sm:w-auto">
          <FolderArrowDownIcon className="w-6 h-6 text-white" />
          Save Preferences
        </button>
      </div>
    </div>
  )
}

export default Prefrences
