import React, { useState } from 'react'
import SettingTabs from '../components/SettingTabs'
import Security from '../components/Security'
import Notifications from '../components/Notifications'
import Prefrences from '../components/Prefrences'
import Profileheader from '../components/Profileheader'


const SettingPage = () => {
    const[Activetab ,SetActiveTab] =useState(0)
  return (
    <div className='bg-[#F7F9FC] min-h-screen'>
        <div className="flex flex-col max-w-5xl mx-auto pt-10">
        <h1 className='text-3xl font-semibold text-slate-800 mb-3'>
          Settings
        </h1>
        </div>
        <div className="max-w-5xl mx-auto space-y-6">
          <Profileheader/>
        <div className="bg-white rounded-2xl shadow-sm border-slate-200 p-4 mb-10">
            <SettingTabs Activetab={Activetab} SetActiveTab={SetActiveTab}/>
            <div className="border-t border-slate-200 my-3"></div>
            {Activetab === 0 && <Security/>}
            {Activetab === 1 && <Notifications/>}
            {Activetab === 2 && <Prefrences/>}
        </div>
    </div>
    </div>
  )
}

export default SettingPage
