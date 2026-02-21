import { useEffect } from "react";

export default function FundingModal({ isOpen, onClose }) {
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50">
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        onClick={onClose}
      ></div>
      <div className="relative flex min-h-full items-end sm:items-center justify-center p-4">
        <div className="
          relative z-10 w-full max-w-lg bg-white rounded-t-2xl sm:rounded-2xl shadow-xl p-5 sm:p-6 max-h-[90vh] overflow-y-auto animate-fadeIn">
          <div className="flex justify-between items-start mb-4">
            <h2 className="text-lg sm:text-xl font-semibold">
              Create Funding Request
            </h2>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 text-xl"
            >
              ✕
            </button>
          </div>

          <p className="text-sm text-gray-500 mb-5">
            Submit your bank transfer details so our team can reconcile
            and credit your wallet.
          </p>
          <div className="space-y-4">
            <div>
              <label className="text-sm font-medium text-gray-700">
                Amount (QAR)
              </label>
              <input
                type="number"
                placeholder="Enter amount"
                className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700">
                Transfer Date
              </label>
              <input
                type="date"
                className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700">
                Bank Reference / Transaction ID
              </label>
              <input
                type="text"
                placeholder="e.g. RAK-TRF-2024-001"
                className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <p className="text-xs text-gray-400 mt-1">
                Use the exact reference shown on your bank transfer to avoid delays.
              </p>
            </div>

            {/* Upload */}
            <div>
              <label className="text-sm font-medium text-gray-700">
                Upload Proof of Payment
              </label>
              <input
                type="file"
                className="mt-1 block w-full text-sm text-gray-600"
              />
            </div>
          </div>
          <div className="flex flex-col-reverse sm:flex-row sm:justify-end gap-3 mt-6">
            <button
              onClick={onClose}
              className="w-full sm:w-auto px-4 py-2.5 rounded-lg border border-blue-600 text-blue-600 hover:bg-blue-50"
            >
              Cancel
            </button>
            <button className="w-full sm:w-auto px-4 py-2.5 rounded-lg bg-blue-700 text-white hover:bg-blue-800">
              Submit Request
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}