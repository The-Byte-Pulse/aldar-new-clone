import { BellAlertIcon } from '@heroicons/react/16/solid'
import { BellIcon, EnvelopeIcon, GlobeAltIcon, LockClosedIcon, PhoneArrowDownLeftIcon } from '@heroicons/react/24/outline'
import { useState } from 'react'

const Notifications = () => {
  const [enabled, setEnabled] = useState(true)

  return (
    <div>
      <h3 className="text-lg font-bold text-slate-900 mb-4 px-4">
        Notification Channels
      </h3>

      <div className='rounded-2xl shadow-lg bg-white p-4 flex items-center justify-between'>

        <div className='flex items-start gap-3'>
          <div className="bg-blue-100 p-2 rounded-lg">
            <EnvelopeIcon className="w-6 h-6 text-blue-900" />
          </div>
          <div className='flex flex-col'>
            <h2 className='text-lg font-sm'>Email Notifications</h2>
            <p className='text-md text-slate-500'>
              Receive notifications via email
            </p>
          </div>
        </div>
        <button
          onClick={() => setEnabled(!enabled)}
          className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-300 ${
            enabled ? 'bg-blue-900' : 'bg-slate-300'
          }`}
        >
          <span
            className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-300 ${
              enabled ? 'translate-x-6' : 'translate-x-1'
            }`}
          />
        </button>

      </div>
      <div className='rounded-2xl shadow-lg bg-white p-4 flex items-center justify-between mt-4'>

        <div className='flex items-start gap-3'>
          <div className="bg-blue-100 p-2 rounded-lg">
            <PhoneArrowDownLeftIcon className="w-6 h-6 text-green-700" />
          </div>
          <div className='flex flex-col'>
            <h2 className='text-lg font-sm'>SMS Notifications</h2>
            <p className='text-md text-slate-500'>
              Receive notifications via SMS
            </p>
          </div>
        </div>
        <button
          onClick={() => setEnabled(!enabled)}
          className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-300 ${
            enabled ? 'bg-blue-900' : 'bg-slate-300'
          }`}
        >
          <span
            className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-300 ${
              enabled ? 'translate-x-6' : 'translate-x-1'
            }`}
          />
        </button>

      </div>
      <div className="border-t border-slate-200 my-3 mt-5"></div>
       <h3 className="text-lg font-bold text-slate-900 mb-4 px-4">
        Alert Types
      </h3>

      <div className='rounded-2xl shadow-lg bg-white p-4 flex items-center justify-between'>

        <div className='flex items-start gap-3'>
          <div className="bg-blue-100 p-2 rounded-lg">
            <BellIcon className="w-6 h-6 text-blue-900" />
          </div>
          <div className='flex flex-col'>
            <h2 className='text-lg font-sm'>Transaction Alerts</h2>
            <p className='text-md text-slate-500'>
              Get notified for all transactions
            </p>
          </div>
        </div>
        <button
          onClick={() => setEnabled(!enabled)}
          className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-300 ${
            enabled ? 'bg-blue-900' : 'bg-slate-300'
          }`}
        >
          <span
            className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-300 ${
              enabled ? 'translate-x-6' : 'translate-x-1'
            }`}
          />
        </button>
      </div>
      <div className='rounded-2xl shadow-lg bg-white p-4 flex items-center justify-between mt-4'>

        <div className='flex items-start gap-3'>
          <div className="bg-blue-100 p-2 rounded-lg">
            <LockClosedIcon className="w-6 h-6 text-green-700" />
          </div>
          <div className='flex flex-col'>
            <h2 className='text-lg font-sm'>Login Alerts</h2>
            <p className='text-md text-slate-500'>
              Get notified for new login attempts
            </p>
          </div>
        </div>
        <button
          onClick={() => setEnabled(!enabled)}
          className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-300 ${
            enabled ? 'bg-blue-900' : 'bg-slate-300'
          }`}
        >
          <span
            className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-300 ${
              enabled ? 'translate-x-6' : 'translate-x-1'
            }`}
          />
        </button>
      </div>
      <div className='rounded-2xl shadow-lg bg-white p-4 flex items-center justify-between mt-4'>

        <div className='flex items-start gap-3'>
          <div className="bg-blue-100 p-2 rounded-lg">
            <GlobeAltIcon className="w-6 h-6 text-green-700" />
          </div>
          <div className='flex flex-col'>
            <h2 className='text-lg font-sm'>Marketing & Updates</h2>
            <p className='text-md text-slate-500'>
              News, product updates, and promotions
            </p>
          </div>
        </div>
        <button
          onClick={() => setEnabled(!enabled)}
          className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-300 ${
            enabled ? 'bg-blue-900' : 'bg-slate-300'
          }`}
        >
          <span
            className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-300 ${
              enabled ? 'translate-x-6' : 'translate-x-1'
            }`}
          />
        </button>
      </div>
    </div>
  )
}

export default Notifications
