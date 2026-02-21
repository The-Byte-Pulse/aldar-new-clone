import React, { useState } from "react";
import { AlertTriangle, CreditCard } from "lucide-react";

const CardPayment = () => {
  const [amount, setAmount] = useState("");

  const quickAmounts = [1000, 5000, 10000, 25000];

  return (
    <div className="space-y-8">

      {/* Alert */}
      <div className="flex items-start gap-3 bg-amber-100 border border-amber-400 text-amber-800 p-4 rounded-xl">
        <AlertTriangle size={20} className="shrink-0 mt-0.5" />
        <p className="text-sm leading-relaxed">
          Card payments incur a 2.5% processing fee. Funds are available instantly upon successful payment.
        </p>
      </div>

      {/* Center Card */}
      <div className="flex justify-center px-2 sm:px-0">
        <div className="bg-gray-50 rounded-2xl p-5 sm:p-8 w-full max-w-md shadow-sm space-y-6">

          {/* Amount Field */}
          <div>
            <label className="block text-sm text-gray-600 mb-2">
              Amount to Add
            </label>

            <div className="flex items-center border rounded-xl px-4 py-3 bg-white focus-within:ring-2 focus-within:ring-blue-500 transition">
              <span className="text-gray-500 mr-2">QAR</span>
              <input
                type="number"
                placeholder="0.00"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="w-full outline-none text-base sm:text-lg font-medium"
              />
            </div>
          </div>

          {/* Quick Amount Buttons */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {quickAmounts.map((value) => (
              <button
                key={value}
                onClick={() => setAmount(value)}
                className="border rounded-xl py-2 text-sm hover:bg-gray-100 active:scale-95 transition"
              >
                {value.toLocaleString()}
              </button>
            ))}
          </div>

        </div>
      </div>

      {/* Proceed Button */}
      <div className="flex flex-col items-center space-y-3 px-2 sm:px-0">

        <button
          disabled={!amount || Number(amount) <= 0}
          className="flex items-center justify-center gap-3 
                     bg-blue-800 hover:bg-blue-900 
                     disabled:bg-blue-300 disabled:cursor-not-allowed
                     text-white px-6 sm:px-8 py-3 sm:py-4 
                     rounded-xl w-full max-w-md 
                     text-base sm:text-lg font-medium shadow transition"
        >
          <CreditCard size={20} />
          Proceed to Payment
        </button>

        <p className="text-xs text-gray-500 text-center">
          Secured by 256-bit SSL encryption • PCI DSS Compliant
        </p>

      </div>

    </div>
  );
};

export default CardPayment;
