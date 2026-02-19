import React from "react";
import {
  Info,
  Plus,
  CheckCircle,
  Copy,
  Building2,
  Clock,
} from "lucide-react";

const ChequeDeposite = () => {
  return (
    <div className="space-y-8">

      {/* Info Alert */}
      <div className="flex items-start gap-3 bg-blue-50 border border-blue-300 text-blue-700 p-4 rounded-xl">
        <Info size={20} className="shrink-0 mt-0.5" />
        <p className="text-sm leading-relaxed">
          Deposit cheques at any Al Dar Exchange branch. Processing time is 2-3
          business days.
        </p>
      </div>

      {/* Top Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

        {/* Cheque Requirements */}
        <div className="bg-gray-50 rounded-2xl p-5 sm:p-6 shadow-sm">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 mb-5">
            <h2 className="font-semibold text-base sm:text-lg">
              Cheque Requirements
            </h2>

            <button className="flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium text-sm">
              <Plus size={16} />
              Create Cheque Funding Request
            </button>
          </div>

          <ul className="space-y-4 text-sm text-gray-700">
            <RequirementItem text='Cheque must be in favor of "Al Dar Exchange LLC"' />
            <RequirementItem text="Write your reference code on the back" />
            <RequirementItem text="Ensure cheque is not post-dated" />
            <RequirementItem text="Maximum amount: QAR 500,000 per cheque" />
          </ul>
        </div>

        {/* Reference Code */}
        <div className="bg-amber-50 border border-amber-300 rounded-2xl p-5 sm:p-6 flex flex-col justify-center">
          <h3 className="text-gray-600 text-sm mb-3">
            Your Reference Code
          </h3>

          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <span className="text-lg sm:text-xl font-bold text-blue-900 tracking-wide break-all">
              ACME-CORP-001
            </span>

            <Copy
              className="text-gray-500 cursor-pointer hover:text-gray-700 self-start sm:self-auto"
              size={18}
            />
          </div>
        </div>
      </div>

      {/* Branch Locations */}
      <div className="bg-white rounded-2xl shadow overflow-hidden">
        <div className="px-5 sm:px-6 py-4 border-b">
          <h2 className="font-semibold text-base sm:text-lg">
            Branch Locations
          </h2>
        </div>

        <div className="px-5 sm:px-6 py-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 hover:bg-gray-50 transition">

          {/* Left Side */}
          <div className="flex items-start gap-4">
            <div className="bg-blue-100 p-3 rounded-xl shrink-0">
              <Building2 className="text-blue-700" size={20} />
            </div>

            <div>
              <p className="font-medium">Dubai Main Branch</p>
              <p className="text-sm text-gray-500 leading-relaxed">
                Al Maktoum Road, Deira, Dubai
              </p>
            </div>
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-2 text-gray-500 text-sm">
            <Clock size={16} />
            <span>9:00 AM - 6:00 PM</span>
          </div>

        </div>
      </div>

    </div>
  );
};

/* Requirement Item Component */
function RequirementItem({ text }) {
  return (
    <li className="flex items-start gap-3">
      <CheckCircle size={18} className="text-green-500 mt-0.5 shrink-0" />
      <span className="leading-relaxed">{text}</span>
    </li>
  );
}

export default ChequeDeposite;
