import React from 'react'

const SettingTabs = ({ Activetab, SetActiveTab }) => {
  const tabs = ["Security", "Notifications", "Preferences"]

  return (
    <div className="overflow-x-auto px-2 py-2">
      <div className="flex gap-2 min-w-max">
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => SetActiveTab(index)}
            className={`px-4 py-2 text-sm font-medium rounded-full transition-all duration-200 whitespace-nowrap
              ${Activetab === index 
                ? 'bg-blue-100 text-blue-900' 
                : 'text-slate-500 hover:bg-slate-100'
              }`}
          >
            {tab}
          </button>
        ))}
      </div>
    </div>
  )
}

export default SettingTabs
