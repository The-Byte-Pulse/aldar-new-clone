import React from 'react';
import { useNavigate } from "react-router-dom";
import Profileheader from '../components/profileandsettings/Profileheader';
import Profiletabs from '../components/profileandsettings/Profiletabs';
import ProfileForm from '../components/profileandsettings/ProfileForm';
import { PencilIcon } from '@heroicons/react/16/solid';
import DashboardContent from '../components/dashboard/DashboardContent';

const ProfilePage = () => {
  const navigate = useNavigate();

  return (
    <DashboardContent>
  
        <div className="flex flex-col max-w-6xl mx-auto px-2 sm:px-6 lg:px-8">
          <h1 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-1">
            Profile & Settings
          </h1>
          <h2 className="text-sm sm:text-base text-gray-600 mb-6">
            Manage your account settings and preferences
          </h2>
        </div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 mb-10">
          
          <Profileheader
            action={
              <button
                onClick={() => navigate("/dashboard/setting")}
                className="flex items-center gap-2 px-3 py-2 sm:px-3 sm:py-3 text-xs sm:text-sm font-medium rounded-xl border border-blue-700 text-blue-700 hover:bg-blue-100 transition duration-200 whitespace-nowrap"
              >
                <PencilIcon className="w-4 h-4 sm:w-5 sm:h-5" />
                EDIT PROFILE
              </button>
            }
          />

          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-4 sm:p-6">
            <Profiletabs />
            <div className="border-t border-gray-200 my-3"></div>

            <ProfileForm />
          </div>
        </div>
    </DashboardContent>
  );
};

export default ProfilePage;
