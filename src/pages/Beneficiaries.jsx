import { useState } from "react";
import {
  Users,
  Plus,
  Calendar,
  Copy,
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from "lucide-react";

export default function Beneficiaries() {
  const [filters, setFilters] = useState({
    createdFrom: "",
    createdTo: "",
    bankName: "",
    accountNumber: "",
    iban: "",
    keyword: "",
    status: "",
  });

  const beneficiaries = [
    {
      accountId: "b68b4...62b0",
      beneficiaryName: "Huzaifa",
      beneficiaryType: "individual",
      country: "Pakistan",
      bankName: "Meezan",
      currency: "QAR",
      accountNumber: "1234568798797",
    },
  ];

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <div className="min-h-screen bg-(--bg-primary) p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-(--text-primary) mb-1">
            Beneficiaries
          </h1>
          <p className="text-sm text-(--text-secondary)">
            View all your beneficiaries
          </p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-(--primary) text-white font-medium hover:opacity-90 transition">
          <Plus size={18} />
          Add
        </button>
      </div>

      {/* Filters */}
      <div className="card mb-6">
        <h3 className="text-lg font-bold text-(--text-primary) mb-4">
          Filters
        </h3>

        {/* Row 1 */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
          <div>
            <label className="block text-sm font-medium text-(--text-secondary) mb-2">
              Created From
            </label>
            <div className="relative">
              <input
                type="text"
                placeholder="Select date"
                value={filters.createdFrom}
                onChange={(e) =>
                  setFilters({ ...filters, createdFrom: e.target.value })
                }
                className="input-primary w-full pr-10"
              />
              <Calendar
                className="absolute right-3 top-1/2 -translate-y-1/2 text-(--text-secondary)"
                size={18}
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-(--text-secondary) mb-2">
              Created To
            </label>
            <div className="relative">
              <input
                type="text"
                placeholder="Select date"
                value={filters.createdTo}
                onChange={(e) =>
                  setFilters({ ...filters, createdTo: e.target.value })
                }
                className="input-primary w-full pr-10"
              />
              <Calendar
                className="absolute right-3 top-1/2 -translate-y-1/2 text-(--text-secondary)"
                size={18}
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-(--text-secondary) mb-2">
              Bank Name
            </label>
            <input
              type="text"
              placeholder="Bank name"
              value={filters.bankName}
              onChange={(e) =>
                setFilters({ ...filters, bankName: e.target.value })
              }
              className="input-primary w-full"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-(--text-secondary) mb-2">
              Account Number
            </label>
            <input
              type="text"
              placeholder="Account number"
              value={filters.accountNumber}
              onChange={(e) =>
                setFilters({ ...filters, accountNumber: e.target.value })
              }
              className="input-primary w-full"
            />
          </div>
        </div>

        {/* Row 2 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium text-(--text-secondary) mb-2">
              IBAN
            </label>
            <input
              type="text"
              placeholder="IBAN"
              value={filters.iban}
              onChange={(e) => setFilters({ ...filters, iban: e.target.value })}
              className="input-primary w-full"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-(--text-secondary) mb-2">
              Keyword
            </label>
            <input
              type="text"
              placeholder="Keyword"
              value={filters.keyword}
              onChange={(e) =>
                setFilters({ ...filters, keyword: e.target.value })
              }
              className="input-primary w-full"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-(--text-secondary) mb-2">
              Status
            </label>
            <select
              value={filters.status}
              onChange={(e) =>
                setFilters({ ...filters, status: e.target.value })
              }
              className="input-primary w-full"
            >
              <option value="">Select an option</option>
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
              <option value="pending">Pending</option>
            </select>
          </div>
        </div>
      </div>

      {/* Beneficiaries Table */}
      <div className="card">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-(--bg-primary) border-b-2 border-(--border)">
              <tr>
                <th className="px-4 py-3 text-left text-xs font-semibold text-(--text-secondary) uppercase">
                  Account ID ⇅
                </th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-(--text-secondary) uppercase">
                  Beneficiary Name ⇅
                </th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-(--text-secondary) uppercase">
                  Beneficiary Type ⇅
                </th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-(--text-secondary) uppercase">
                  Country ⇅
                </th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-(--text-secondary) uppercase">
                  Bank Name ⇅
                </th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-(--text-secondary) uppercase">
                  Currency ⇅
                </th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-(--text-secondary) uppercase">
                  Account Number ⇅
                </th>
              </tr>
            </thead>
            <tbody>
              {beneficiaries.map((beneficiary, idx) => (
                <tr
                  key={idx}
                  className="border-b border-(--border) hover:bg-(--bg-primary) transition"
                >
                  <td className="px-4 py-4">
                    <button
                      onClick={() => copyToClipboard(beneficiary.accountId)}
                      className="flex items-center gap-2 text-sm text-(--text-primary) hover:text-(--primary) transition"
                    >
                      {beneficiary.accountId}
                      <Copy size={14} />
                    </button>
                  </td>
                  <td className="px-4 py-4 text-sm text-(--text-primary)">
                    {beneficiary.beneficiaryName}
                  </td>
                  <td className="px-4 py-4 text-sm text-(--text-primary)">
                    {beneficiary.beneficiaryType}
                  </td>
                  <td className="px-4 py-4 text-sm text-(--text-primary)">
                    {beneficiary.country}
                  </td>
                  <td className="px-4 py-4 text-sm text-(--text-primary)">
                    {beneficiary.bankName}
                  </td>
                  <td className="px-4 py-4 text-sm text-(--text-primary)">
                    {beneficiary.currency}
                  </td>
                  <td className="px-4 py-4 text-sm text-(--text-primary)">
                    {beneficiary.accountNumber}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-between mt-4 pt-4 border-t border-(--border)">
          <p className="text-sm text-(--text-secondary)">
            Showing 1 to 1 of 1 results
          </p>
          <div className="flex items-center gap-2">
            <button className="p-2 rounded-lg border border-(--border) hover:bg-(--bg-primary) text-(--text-secondary) transition">
              <ChevronsLeft size={16} />
            </button>
            <button className="p-2 rounded-lg border border-(--border) hover:bg-(--bg-primary) text-(--text-secondary) transition">
              <ChevronLeft size={16} />
            </button>
            <span className="px-4 py-2 text-sm text-(--text-primary)">
              Page 1 of 1
            </span>
            <button className="p-2 rounded-lg border border-(--border) hover:bg-(--bg-primary) text-(--text-secondary) transition">
              <ChevronRight size={16} />
            </button>
            <button className="p-2 rounded-lg border border-(--border) hover:bg-(--bg-primary) text-(--text-secondary) transition">
              <ChevronsRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
