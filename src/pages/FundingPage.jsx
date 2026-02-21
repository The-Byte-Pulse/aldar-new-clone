import React, { useState } from 'react'
import FundingHeader from '../components/FundingPage/FundingHeader'
import BankTransfer from '../components/FundingPage/BankTransfer';
import CardPayment from '../components/FundingPage/CardPayment';
import ChequeDeposite from '../components/FundingPage/ChequeDeposite';
import FundingTabs from '../components/FundingPage/FundingTabs';
import { ArrowUpDown } from "lucide-react";

const FundingPage = () => {
    const[Activetab ,SetActiveTab] =useState(0)
  return (
    <div className="p-8 bg-gray-100 min-h-screen">
           <FundingHeader/>
           <div className="bg-white rounded-2xl shadow-sm border-slate-200 p-4 mb-10">
            <FundingTabs Activetab={Activetab} SetActiveTab={SetActiveTab}/>
            <div className="border-t border-slate-200 my-3"></div>
            {Activetab === 0 && <BankTransfer/>}
            {Activetab === 1 && <ChequeDeposite/>}
            {Activetab === 2 && <CardPayment/>}
            </div> 
           <div className="mt-10">

      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-3">Recent Funding History</h2>
        <p className="text-gray-500 text-sm">
          View your recent funding history
        </p>
      </div>
      <div className="bg-white rounded-2xl shadow overflow-hidden">

        <table className="w-full text-sm">
          <thead className="bg-gray-50 border-slate-200">
            <tr className="text-left text-gray-600">

              <th className="px-6 py-4 font-medium">
                <div className="flex items-center gap-2">
                  FUNDING ID
                  <ArrowUpDown size={14} />
                </div>
              </th>

              <th className="px-6 py-4 font-medium">
                <div className="flex items-center gap-2">
                  AMOUNT
                  <ArrowUpDown size={14} />
                </div>
              </th>

              <th className="px-6 py-4 font-medium">
                <div className="flex items-center gap-2">
                  METHOD
                  <ArrowUpDown size={14} />
                </div>
              </th>

              <th className="px-6 py-4 font-medium">
                <div className="flex items-center gap-2">
                  STATUS
                  <ArrowUpDown size={14} />
                </div>
              </th>

              <th className="px-6 py-4 font-medium">
                <div className="flex items-center gap-2">
                  CREATED
                  <ArrowUpDown size={14} />
                </div>
              </th>

            </tr>
          </thead>
          <tbody>

            <tr className="border-slate-200 hover:bg-gray-50 transition">
              <td className="px-6 py-4 font-medium">
                0da3f...6411
              </td>

              <td className="px-6 py-4">
                QAR 1,200.00
              </td>

              <td className="px-6 py-4">
                Bank
              </td>

              <td className="px-6 py-4">
                <span className="bg-green-100 text-green-700 text-xs px-3 py-1 rounded-full">
                  Funds Cleared Available
                </span>
              </td>

              <td className="px-6 py-4">
                18/02/2026
              </td>
            </tr>

          </tbody>
        </table>

      </div>

    </div>


    </div>
  );
}


export default FundingPage
