import React, { useState } from 'react';
import SettingTabs from '../components/profileandsettings/SettingTabs';
import Security from '../components/profileandsettings/Security';
import Notifications from '../components/profileandsettings/Notifications';
import Prefrences from '../components/profileandsettings/Prefrences';
import Profileheader from '../components/profileandsettings/Profileheader';
import DashboardContent from '../components/dashboard/DashboardContent';

const SettingPage = () => {
  const [Activetab, SetActiveTab] = useState(0);

  return (
    <DashboardContent>
      <div className="flex flex-col max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 space-y-6">
        <div className="flex flex-col gap-1">
          <h1 className="text-2xl sm:text-3xl font-semibold text-gray-900">
            Settings
          </h1>
          <p className="text-sm sm:text-base text-gray-600">
            Manage your account security, notifications, and preferences
          </p>
        </div>

        <div className="w-full">
          <Profileheader />
        </div>
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-4 sm:p-6 space-y-4 w-full overflow-hidden">
          <div className="overflow-x-auto">
            <div className="min-w-max">
              <SettingTabs Activetab={Activetab} SetActiveTab={SetActiveTab} />
            </div>
          </div>
          <div className="border-t border-gray-200 my-3"></div>
          <div className="space-y-6 w-full">
            {Activetab === 0 && <Security />}
            {Activetab === 1 && <Notifications />}
            {Activetab === 2 && <Prefrences />}
          </div>
        </div>
      </div>
    </DashboardContent>
  );
};

export default SettingPage;
