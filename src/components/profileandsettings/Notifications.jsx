
import { BellIcon, EnvelopeIcon, GlobeAltIcon, LockClosedIcon, PhoneArrowDownLeftIcon } from '@heroicons/react/24/outline'
import { useState } from 'react'

const Notifications = () => {
  const cards = [
    {
      icon: <EnvelopeIcon className="w-6 h-6 text-blue-900" />,
      iconBg: "bg-blue-100",
      title: "Email Notifications",
      description: "Receive notifications via email",
    },
    {
      icon: <PhoneArrowDownLeftIcon className="w-6 h-6 text-green-700" />,
      iconBg: "bg-blue-100",
      title: "SMS Notifications",
      description: "Receive notifications via SMS",
    },
    {
      icon: <BellIcon className="w-6 h-6 text-blue-900" />,
      iconBg: "bg-blue-100",
      title: "Transaction Alerts",
      description: "Get notified for all transactions",
    },
    {
      icon: <LockClosedIcon className="w-6 h-6 text-green-700" />,
      iconBg: "bg-blue-100",
      title: "Login Alerts",
      description: "Get notified for new login attempts",
    },
    {
      icon: <GlobeAltIcon className="w-6 h-6 text-green-700" />,
      iconBg: "bg-blue-100",
      title: "Marketing & Updates",
      description: "News, product updates, and promotions",
    },
  ]


  const [enabledStates, setEnabledStates] = useState(
    Array(cards.length).fill(true)
  )

  const toggle = (index) => {
    const newStates = [...enabledStates]
    newStates[index] = !newStates[index]
    setEnabledStates(newStates)
  }

  return (
    <div className="space-y-5 p-4">
      <h3 className="text-lg font-bold text-slate-900 px-4">Notification Channels</h3>

      {cards.map((card, index) => (
        <div
          key={index}
          className="rounded-2xl shadow-lg bg-white p-4 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 md:gap-0"
        >
          <div className="flex items-start md:items-center gap-3 w-full md:w-auto">
            <div className={`${card.iconBg} p-2 rounded-lg shrink-0`}>
              {card.icon}
            </div>
            <div className="flex flex-col flex-1">
              <h2 className="text-lg font-sm">{card.title}</h2>
              <p className="text-md text-slate-500">{card.description}</p>
            </div>
          </div>
          <button
            onClick={() => toggle(index)}
            className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-300 mt-2 md:mt-0 ${
              enabledStates[index] ? 'bg-blue-900' : 'bg-slate-300'
            }`}
          >
            <span
              className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-300 ${
                enabledStates[index] ? 'translate-x-6' : 'translate-x-1'
              }`}
            />
          </button>
        </div>
      ))}
    </div>
  )
}

export default Notifications
