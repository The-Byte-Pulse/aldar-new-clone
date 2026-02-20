import React, { useState } from "react";
import { Copy, Plus, AlertTriangle, Info } from "lucide-react";
import FundingModal from "./FundingModal";

const BankTransfer = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="space-y-6">
      <div className="flex items-start gap-3 bg-blue-50 border border-blue-300 text-blue-700 p-4 rounded-xl">
        <Info size={20} className="shrink-0 mt-0.5" />
        <p className="text-sm leading-relaxed">
          Transfer funds from your bank account using the details below.
          Funds typically reflect within 1-2 business days.
        </p>
      </div>
      <div className="bg-gray-50 rounded-2xl p-4 sm:p-6 shadow-sm">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-6">
          <h2 className="text-lg font-semibold">
            AI Dar Exchange Bank Details
          </h2>

          <button 
           onClick={() => setOpen(true)}
           className="flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium text-sm">
            <Plus size={16} />
            Create Funding Request
          </button>
          <FundingModal isOpen={open} onClose={()=> setOpen(false)}/>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

          <DetailBox label="Bank Name" value="Emirates NBD" />

          <DetailBox
            label="Account Name"
            value="AI Dar Exchange LLC - Client Trust"
          />

          <DetailBox
            label="Account Number"
            value="1017894562001"
          />

          <DetailBox
            label="IBAN"
            value="AE070331017894562001"
          />

          <DetailBox
            label="SWIFT Code"
            value="EABORAE1XXX"
          />
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
            <div className="min-w-0">
              <p className="text-xs text-gray-500">Reference</p>
              <p className="font-medium text-amber-800 break-words">
                ACME-CORP-001
              </p>
            </div>
            <Copy
              size={16}
              className="cursor-pointer text-gray-500 hover:text-blue-500 shrink-0"
            />
          </div>

        </div>
      </div>
      <div className="flex items-start gap-3 bg-amber-100 border border-amber-400 text-amber-800 p-4 sm:p-5 rounded-xl">
        <AlertTriangle size={20} className="shrink-0 mt-0.5" />
        <div>
          <p className="font-semibold">Important</p>
          <p className="text-sm mt-1 leading-relaxed">
            Always include your reference code in the transfer description.
            This ensures funds are credited to your account promptly.
          </p>
        </div>
      </div>

    </div>
  );
};

function DetailBox({ label, value }) {
  return (
    <div className="bg-white rounded-xl p-4 shadow-sm border border-slate-200
                    flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">

      <div className="min-w-0">
        <p className="text-xs text-gray-500">{label}</p>
        <p className="text-sm font-medium break-words">
          {value}
        </p>
      </div>

      <Copy
        size={16}
        className="cursor-pointer text-gray-500 hover:text-blue-500 shrink-0"
      />
    </div>
  );
}

export default BankTransfer;
