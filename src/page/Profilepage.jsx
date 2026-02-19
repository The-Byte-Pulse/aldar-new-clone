import React, { useState } from 'react'
import Profileheader from '../components/profile-and-setting/Profileheader'
import Profiletabs from '../components/profile-and-setting/Profiletabs'
import ProfileForm from '../components/profile-and-setting/ProfileForm'
import { PencilIcon } from '@heroicons/react/16/solid'

const Profilepage = () => {
  return (
      <div className="bg-[#F7F9FC] min-h-screen">
        <div className="flex flex-col max-w-5xl mx-auto pt-10">
        <h1 className='text-3xl font-semibold text-slate-800 mb-3'>
          Profile & Settings
        </h1>
        <h1 className='text-md text-slate-700 mb-6'>
          Manage your account settings and preferences
        </h1>

        </div>
      <div className="max-w-5xl mx-auto space-y-6 mb-10">
       <Profileheader
          action={
            <button
              onClick={() => navigate("/setting")}
              className="px-3 py-3 flex items-center rounded-xl border border-blue-900 text-blue-900 text-sm font-medium hover:bg-blue-100 transition-all duration-200"
            >
              <PencilIcon className="w-5 h-5" />
              EDIT PROFILE
            </button>
          }
        />
   <div className="bg-white rounded-2xl shadow-sm border-slate-200 p-4">
    <Profiletabs/>
   <div className="border-t border-slate-200 my-3"></div>
    <ProfileForm/>
     
   </div>
   </div>
</div>
  )
}

export default Profilepage
