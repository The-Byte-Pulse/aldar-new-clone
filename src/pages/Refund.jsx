import { useState } from "react";
import {
  RefreshCw,
  Plus,
  Search,
  Calendar,
  Filter,
  Download,
  Eye,
  CheckCircle,
  Clock,
  XCircle,
  AlertTriangle,
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from "lucide-react";

export default function Refunds() {
  const [filters, setFilters] = useState({
    fromDate: "",
    toDate: "",
    status: "",
    search: "",
  });

  const refunds = [
    {
      id: "REF-2024-001",
      transactionId: "TXN-789456123",
      date: "2024-02-20",
      amount: "AED 5,000.00",
      reason: "Duplicate Payment",
      status: "Approved",
      statusColor:
        "bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300",
      icon: CheckCircle,
      requestDate: "2024-02-15",
      processDate: "2024-02-18",
    },
    {
      id: "REF-2024-002",
      transactionId: "TXN-789456124",
      date: "2024-02-18",
      amount: "AED 2,500.00",
      reason: "Incorrect Amount Transferred",
      status: "Processing",
      statusColor:
        "bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300",
      icon: Clock,
      requestDate: "2024-02-16",
      processDate: "-",
    },
    {
      id: "REF-2024-003",
      transactionId: "TXN-789456125",
      date: "2024-02-15",
      amount: "AED 1,200.00",
      reason: "Wrong Beneficiary",
      status: "Pending Review",
      statusColor:
        "bg-yellow-100 dark:bg-yellow-900 text-yellow-700 dark:text-yellow-300",
      icon: Clock,
      requestDate: "2024-02-14",
      processDate: "-",
    },
    {
      id: "REF-2024-004",
      transactionId: "TXN-789456126",
      date: "2024-02-10",
      amount: "AED 3,800.00",
      reason: "Service Not Received",
      status: "Rejected",
      statusColor: "bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-300",
      icon: XCircle,
      requestDate: "2024-02-08",
      processDate: "2024-02-12",
    },
    {
      id: "REF-2024-005",
      transactionId: "TXN-789456127",
      date: "2024-02-05",
      amount: "AED 7,500.00",
      reason: "Cancelled Order",
      status: "Approved",
      statusColor:
        "bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300",
      icon: CheckCircle,
      requestDate: "2024-02-03",
      processDate: "2024-02-06",
    },
  ];

  const stats = {
    total: 24,
    approved: 18,
    pending: 4,
    rejected: 2,
    totalAmount: "AED 145,000",
  };

  return (
    <div className="min-h-screen bg-(--bg-primary) p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <div className="p-2 rounded-lg bg-orange-100 dark:bg-orange-900">
            <RefreshCw className="text-orange-600" size={24} />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-(--text-primary)">
              Refunds
            </h1>
            <p className="text-sm text-(--text-secondary)">
              Manage refund requests and track status
            </p>
          </div>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-(--primary) text-white font-medium hover:opacity-90 transition">
          <Plus size={18} />
          Request Refund
        </button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-6">
        <div className="card bg-blue-200 rounded-lg text-center p-2">
          <p className="text-sm text-(--text-secondary) mb-1">Total Requests</p>
          <h3 className="text-2xl font-bold text-(--text-primary)">
            {stats.total}
          </h3>
        </div>
        <div className="card bg-green-200 rounded-lg text-center p-2">
          <p className="text-sm text-(--text-secondary) mb-1">Approved</p>
          <h3 className="text-2xl font-bold text-green-600">
            {stats.approved}
          </h3>
        </div>
        <div className="card bg-yellow-200 rounded-lg text-center p-2">
          <p className="text-sm text-(--text-secondary) mb-1">Pending</p>
          <h3 className="text-2xl font-bold text-yellow-600">
            {stats.pending}
          </h3>
        </div>
        <div className="card bg-red-200 rounded-lg text-center p-2">
          <p className="text-sm text-(--text-secondary) mb-1">Rejected</p>
          <h3 className="text-2xl font-bold text-red-600">{stats.rejected}</h3>
        </div>
        <div className="card bg-slate-200 rounded-lg text-center p-2">
          <p className="text-sm text-(--text-secondary) mb-1">Total Amount</p>
          <h3 className="text-xl font-bold text-(--text-primary)">
            {stats.totalAmount}
          </h3>
        </div>
      </div>

      {/* Info Banner */}
      <div className="mb-6 p-4 rounded-xl bg-blue-50 dark:bg-blue-950 border border-blue-200 dark:border-blue-800 flex items-start gap-3">
        <div className="p-1.5 rounded-full bg-blue-100 dark:bg-blue-900 flex-shrink-0">
          <svg
            className="w-4 h-4 text-blue-600"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <div>
          <h3 className="font-semibold text-blue-800 dark:text-blue-200 mb-1">
            Refund Processing Time
          </h3>
          <p className="text-sm text-blue-700 dark:text-blue-300">
            Refund requests are typically processed within 3-5 business days.
            You will be notified once your refund is approved and processed.
          </p>
        </div>
      </div>

      {/* Filters */}
      <div className="card mb-6">
        <h3 className="text-lg font-bold text-(--text-primary) mb-4">
          Filters
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div>
            <label className="block text-sm font-medium text-(--text-secondary) mb-2">
              From Date
            </label>
            <div className="relative">
              <input
                type="text"
                placeholder="Select date"
                value={filters.fromDate}
                onChange={(e) =>
                  setFilters({ ...filters, fromDate: e.target.value })
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
              To Date
            </label>
            <div className="relative">
              <input
                type="text"
                placeholder="Select date"
                value={filters.toDate}
                onChange={(e) =>
                  setFilters({ ...filters, toDate: e.target.value })
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
              Status
            </label>
            <select
              value={filters.status}
              onChange={(e) =>
                setFilters({ ...filters, status: e.target.value })
              }
              className="input-primary w-full"
            >
              <option value="">All Status</option>
              <option value="approved">Approved</option>
              <option value="processing">Processing</option>
              <option value="pending">Pending Review</option>
              <option value="rejected">Rejected</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-(--text-secondary) mb-2">
              Search
            </label>
            <div className="relative">
              <Search
                className="absolute left-3 top-1/2 -translate-y-1/2 text-(--text-secondary)"
                size={18}
              />
              <input
                type="text"
                placeholder="Refund ID, Transaction..."
                value={filters.search}
                onChange={(e) =>
                  setFilters({ ...filters, search: e.target.value })
                }
                className="input-primary w-full pl-10"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Refunds Table */}
      <div className="card">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-bold text-(--text-primary)">
            Refund Requests
          </h3>
          <button className="flex items-center gap-2 px-4 py-2 rounded-lg border border-(--border) hover:bg-(--bg-primary) text-(--text-primary) font-medium transition text-sm">
            <Download size={16} />
            Export
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-(--bg-primary) border-b-2 border-(--border)">
              <tr>
                <th className="px-4 py-3 text-left text-xs font-semibold text-(--text-secondary) uppercase">
                  Refund ID
                </th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-(--text-secondary) uppercase">
                  Transaction ID
                </th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-(--text-secondary) uppercase">
                  Request Date
                </th>
                <th className="px-4 py-3 text-right text-xs font-semibold text-(--text-secondary) uppercase">
                  Amount
                </th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-(--text-secondary) uppercase">
                  Reason
                </th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-(--text-secondary) uppercase">
                  Status
                </th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-(--text-secondary) uppercase">
                  Process Date
                </th>
                <th className="px-4 py-3 text-center text-xs font-semibold text-(--text-secondary) uppercase">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {refunds.map((refund, idx) => (
                <tr
                  key={idx}
                  className="border-b border-(--border) hover:bg-(--bg-primary) transition"
                >
                  <td className="px-4 py-4">
                    <span className="text-sm font-medium text-(--primary)">
                      {refund.id}
                    </span>
                  </td>
                  <td className="px-4 py-4 text-sm text-(--text-primary)">
                    {refund.transactionId}
                  </td>
                  <td className="px-4 py-4 text-sm text-(--text-primary)">
                    {refund.requestDate}
                  </td>
                  <td className="px-4 py-4 text-sm text-right font-semibold text-(--text-primary)">
                    {refund.amount}
                  </td>
                  <td className="px-4 py-4 text-sm text-(--text-primary)">
                    {refund.reason}
                  </td>
                  <td className="px-4 py-4">
                    <span
                      className={`flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium w-fit ${refund.statusColor}`}
                    >
                      <refund.icon size={12} />
                      {refund.status}
                    </span>
                  </td>
                  <td className="px-4 py-4 text-sm text-(--text-primary)">
                    {refund.processDate}
                  </td>
                  <td className="px-4 py-4">
                    <div className="flex items-center justify-center gap-2">
                      <button className="p-2 rounded-lg hover:bg-(--bg-surface) text-(--text-secondary) hover:text-(--primary) transition">
                        <Eye size={16} />
                      </button>
                      <button className="p-2 rounded-lg hover:bg-(--bg-surface) text-(--text-secondary) hover:text-(--primary) transition">
                        <Download size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-between mt-4 pt-4 border-t border-(--border)">
          <p className="text-sm text-(--text-secondary)">
            Showing 1 to 5 of {stats.total} results
          </p>
          <div className="flex items-center gap-2">
            <button className="p-2 rounded-lg border border-(--border) hover:bg-(--bg-primary) text-(--text-secondary) transition">
              <ChevronsLeft size={16} />
            </button>
            <button className="p-2 rounded-lg border border-(--border) hover:bg-(--bg-primary) text-(--text-secondary) transition">
              <ChevronLeft size={16} />
            </button>
            <span className="px-4 py-2 text-sm text-(--text-primary)">
              Page 1 of 5
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
