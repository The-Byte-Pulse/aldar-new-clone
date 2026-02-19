import React from "react";
import { Wallet, Plus, CreditCard } from "lucide-react";

const FundingHeader = () => {
  return (
    <div className="space-y-8">

      {/* Top Header */}
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">

        <div>
          <h1 className="text-xl sm:text-2xl font-semibold">
            Fund Account
          </h1>
          <p className="text-gray-500 text-sm sm:text-base">
            Add funds to your wallet for transactions
          </p>
        </div>

        <button className="w-full sm:w-auto border border-blue-600 text-blue-600 px-5 py-2 rounded-xl hover:bg-blue-50 transition">
          Funding History
        </button>

      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

        {/* Available Balance */}
        <div className="bg-gradient-to-r from-blue-900 to-blue-800 text-white p-5 sm:p-6 rounded-2xl shadow-xl">
          <div className="flex justify-between items-center mb-4">
            <span className="text-xs sm:text-sm">
              Available Balance
            </span>
            <Wallet size={24} />
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold">
            QAR 0.00
          </h2>

          <p className="mt-3 text-xs sm:text-sm text-blue-200">
            Pending Funds:{" "}
            <span className="font-medium">QAR 0.00</span>
          </p>
        </div>

        {/* This Month */}
        <div className="bg-white p-5 sm:p-6 rounded-2xl shadow">
          <div className="flex justify-between items-center mb-4">
            <span className="text-xs sm:text-sm text-gray-600">
              This Month
            </span>
            <Plus className="text-green-500" size={22} />
          </div>

          <h2 className="text-xl sm:text-2xl font-bold">
            QAR 0.00
          </h2>

          <p className="text-green-500 text-xs sm:text-sm mt-2">
            +0.0% vs last month
          </p>
        </div>

        {/* Transactions Today */}
        <div className="bg-white p-5 sm:p-6 rounded-2xl shadow">
          <div className="flex justify-between items-center mb-4">
            <span className="text-xs sm:text-sm text-gray-600">
              Funding Transactions Today
            </span>
            <CreditCard size={22} />
          </div>

          <h2 className="text-xl sm:text-2xl font-bold">
            5
          </h2>

          <p className="text-gray-500 text-xs sm:text-sm mt-2">
            Total: QAR 3,600.00
          </p>
        </div>

      </div>

    </div>
  );
};

export default FundingHeader;
