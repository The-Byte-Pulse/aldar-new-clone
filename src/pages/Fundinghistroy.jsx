import React from "react";
import { ArrowLeft, Calendar, ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from "lucide-react";
import { Link } from "react-router-dom";

const Fundinghistroy = () => {
  return (
    <div className="p-4 sm:p-6 lg:p-8 space-y-6 bg-gray-50 min-h-screen">
      <Link to="/funding" className="flex items-center gap-2 text-blue-800 border border-blue-700 px-4 py-2 rounded-xl hover:bg-blue-50 transition w-fit">
        <ArrowLeft size={16} />
        Back to Funding
      </Link>
      <div>
        <h1 className="text-xl sm:text-2xl font-semibold">
          Funding History
        </h1>
        <p className="text-gray-500 text-sm sm:text-base mt-1">
          View all your wallet top-ups, bank transfers, cheque deposits, and card funding activity.
        </p>
      </div>
      <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-4 sm:p-6">
        <h2 className="font-medium mb-4">Filters</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div>
            <label className="text-sm text-gray-600">From Date</label>
            <div className="flex items-center border border-slate-200 rounded-xl px-3 py-2 mt-1">
              <input
                type="date"
                className="w-full outline-none text-sm"
              />
            </div>
          </div>
          <div>
            <label className="text-sm text-gray-600">To Date</label>
            <div className="flex items-center border border-slate-200 rounded-xl px-3 py-2 mt-1">
              <input
                type="date"
                className="w-full outline-none text-sm"
              />
            </div>
          </div>
          <div>
            <label className="text-sm text-gray-600">Status</label>
            <select className="w-full border border-slate-200 rounded-xl px-3 py-2 mt-1 text-sm">
              <option>All Statuses</option>
              <option>processing</option>
              <option>rejected</option>
              <option>Clarification Required</option>
            </select>
          </div>
          <div>
            <label className="text-sm text-gray-600">Funding Type</label>
            <select className="w-full border border-slate-200 rounded-xl px-3 py-2 mt-1 text-sm">
              <option>All Types</option>
              <option>Bank Transfer</option>
              <option>Cheque deposite</option>
              <option>Card payment</option>
            </select>
          </div>

        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
        <div className="hidden md:block overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-gray-50 text-gray-600">
              <tr>
                <th className="text-left px-6 py-4">Funding ID</th>
                <th className="text-left px-6 py-4">Amount</th>
                <th className="text-left px-6 py-4">Method</th>
                <th className="text-left px-6 py-4">Status</th>
                <th className="text-left px-6 py-4">Created</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td className="px-6 py-4">4ad8c...e821</td>
                <td className="px-6 py-4 font-medium">QAR 12,566.00</td>
                <td className="px-6 py-4">Cheque</td>
                <td className="px-6 py-4">
                  <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-xs">
                    Cheque Submitted Pending Clearing
                  </span>
                </td>
                <td className="px-6 py-4">20/02/2026</td>
              </tr>

              <tr>
                <td className="px-6 py-4">50ebd...bb3e</td>
                <td className="px-6 py-4 font-medium">QAR 2,134.00</td>
                <td className="px-6 py-4">Bank</td>
                <td className="px-6 py-4">
                  <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-xs">
                    Proof Submitted Awaiting Verification
                  </span>
                </td>
                <td className="px-6 py-4">20/02/2026</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="md:hidden">
          {[1, 2].map((item, index) => (
            <div key={index} className="p-4 space-y-2">
              <p className="text-sm font-medium">4ad8c...e821</p>
              <p className="text-sm">QAR 12,566.00</p>
              <p className="text-sm text-gray-500">Cheque</p>
              <span className="inline-block bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-xs">
                Pending
              </span>
              <p className="text-xs text-gray-400">20/02/2026</p>
            </div>
          ))}
        </div>
        <div className="flex flex-col sm:flex-row justify-between items-center px-6 py-4 border border-slate-200 gap-4 text-sm text-gray-600">
          <p>Showing 1 to 2 of 2 results</p>

          <div className="flex items-center gap-2">
            <button className="p-2 border rounded-lg hover:bg-gray-50">
              <ChevronsLeft size={16} />
            </button>
            <button className="p-2 border rounded-lg hover:bg-gray-50">
              <ChevronLeft size={16} />
            </button>

            <span className="px-3">Page 1 of 1</span>

            <button className="p-2 border rounded-lg hover:bg-gray-50">
              <ChevronRight size={16} />
            </button>
            <button className="p-2 border rounded-lg hover:bg-gray-50">
              <ChevronsRight size={16} />
            </button>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Fundinghistroy
