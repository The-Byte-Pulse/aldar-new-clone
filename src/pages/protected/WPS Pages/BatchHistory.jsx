import { useState } from "react";
import {
  FileText,
  Download,
  Eye,
  Calendar,
  Filter,
  Search,
  CheckCircle,
  Clock,
  XCircle,
  AlertTriangle,
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from "lucide-react";

export default function BatchHistory() {
  const [filters, setFilters] = useState({
    fromDate: "",
    toDate: "",
    status: "",
    search: "",
  });

  const batches = [
    {
      id: "WPS-2024-02-001",
      month: "February 2024",
      uploadDate: "2024-02-01 10:30 AM",
      processDate: "2024-02-01 11:45 AM",
      employees: 45,
      amount: "AED 225,000.00",
      status: "Processed",
      statusColor:
        "bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300",
      icon: CheckCircle,
    },
    {
      id: "WPS-2024-01-001",
      month: "January 2024",
      uploadDate: "2024-01-01 09:15 AM",
      processDate: "2024-01-01 10:20 AM",
      employees: 45,
      amount: "AED 225,000.00",
      status: "Processed",
      statusColor:
        "bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300",
      icon: CheckCircle,
    },
    {
      id: "WPS-2023-12-001",
      month: "December 2023",
      uploadDate: "2023-12-01 08:45 AM",
      processDate: "2023-12-01 09:50 AM",
      employees: 43,
      amount: "AED 215,000.00",
      status: "Processed",
      statusColor:
        "bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300",
      icon: CheckCircle,
    },
    {
      id: "WPS-2023-11-001",
      month: "November 2023",
      uploadDate: "2023-11-01 11:00 AM",
      processDate: "2023-11-01 12:15 PM",
      employees: 43,
      amount: "AED 215,000.00",
      status: "Processed",
      statusColor:
        "bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300",
      icon: CheckCircle,
    },
    {
      id: "WPS-2023-10-001",
      month: "October 2023",
      uploadDate: "2023-10-01 10:00 AM",
      processDate: "2023-10-01 11:30 AM",
      employees: 42,
      amount: "AED 210,000.00",
      status: "Processed",
      statusColor:
        "bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300",
      icon: CheckCircle,
    },
  ];

  const stats = {
    total: 36,
    processed: 35,
    pending: 1,
    failed: 0,
  };

  return (
    <div className="min-h-screen w-full max-w-full overflow-x-hidden bg-(--bg-primary) p-4 sm:p-6 box-border">
      {/* Header */}
      <div className="mb-6 sm:mb-8 min-w-0">
        <span className="inline-block px-2.5 py-1 rounded-md bg-indigo-100 dark:bg-indigo-900/40 text-indigo-700 dark:text-indigo-300 text-xs font-semibold uppercase tracking-wide mb-3">
          WPS
        </span>
        <h1 className="text-xl sm:text-2xl font-bold text-(--text-primary) mb-1">
          Batch History
        </h1>
        <p className="text-xs sm:text-sm text-(--text-secondary) max-w-xl">
          View all processed WPS salary batches
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-2  lg:grid-cols-4 gap-2 sm:gap-4 mb-6 sm:mb-8 min-w-0">
        <div className="rounded-xl sm:rounded-2xl border border-(--border) bg-(--bg-surface) p-3 sm:p-5 shadow-sm min-w-0 overflow-hidden">
          <p className="text-xs text-(--text-secondary) mb-1 sm:mb-2 truncate">
            Total Batches
          </p>
          <h3 className="text-xl sm:text-3xl font-bold text-(--text-primary) tracking-tight">
            {stats.total}
          </h3>
          <div className="mt-1 sm:mt-2 w-6 sm:w-8 h-1 rounded-full bg-blue-500" />
        </div>
        <div className="rounded-xl sm:rounded-2xl border border-(--border) bg-(--bg-surface) p-3 sm:p-5 shadow-sm min-w-0 overflow-hidden">
          <p className="text-xs text-(--text-secondary) mb-1 sm:mb-2 truncate">
            Processed
          </p>
          <h3 className="text-xl sm:text-3xl font-bold text-emerald-600 dark:text-emerald-400 tracking-tight">
            {stats.processed}
          </h3>
          <div className="mt-1 sm:mt-2 w-6 sm:w-8 h-1 rounded-full bg-emerald-500" />
        </div>
        <div className="rounded-xl sm:rounded-2xl border border-(--border) bg-(--bg-surface) p-3 sm:p-5 shadow-sm min-w-0 overflow-hidden">
          <p className="text-xs text-(--text-secondary) mb-1 sm:mb-2 truncate">
            Pending
          </p>
          <h3 className="text-xl sm:text-3xl font-bold text-amber-600 dark:text-amber-400 tracking-tight">
            {stats.pending}
          </h3>
          <div className="mt-1 sm:mt-2 w-6 sm:w-8 h-1 rounded-full bg-amber-500" />
        </div>
        <div className="rounded-xl sm:rounded-2xl border border-(--border) bg-(--bg-surface) p-3 sm:p-5 shadow-sm min-w-0 overflow-hidden">
          <p className="text-xs text-(--text-secondary) mb-1 sm:mb-2 truncate">
            Failed
          </p>
          <h3 className="text-xl sm:text-3xl font-bold text-red-600 dark:text-red-400 tracking-tight">
            {stats.failed}
          </h3>
          <div className="mt-1 sm:mt-2 w-6 sm:w-8 h-1 rounded-full bg-red-500" />
        </div>
      </div>

      {/* Filters */}
      <div className="rounded-2xl border border-(--border) bg-(--bg-surface) p-4 sm:p-5 mb-6 sm:mb-8 shadow-sm min-w-0 overflow-hidden">
        <div className="flex items-center gap-2 mb-4 pb-3 border-b border-(--border) min-w-0">
          <Filter className="w-5 h-5 text-indigo-600 dark:text-indigo-400 shrink-0" />
          <h3 className="text-base sm:text-lg font-bold text-(--text-primary) truncate min-w-0">
            Filters
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 min-w-0">
          <div className="min-w-0 w-full">
            <label className="block text-sm font-medium text-(--text-secondary) mb-2">
              From Date
            </label>
            <div className="relative min-w-0 w-full">
              <input
                type="text"
                placeholder="Select date"
                value={filters.fromDate}
                onChange={(e) =>
                  setFilters({ ...filters, fromDate: e.target.value })
                }
                className="input-primary w-full min-w-0 pr-12 rounded-xl text-sm"
              />
              <Calendar
                className="absolute right-3 top-1/2 -translate-y-1/2 text-(--text-secondary) pointer-events-none"
                size={18}
              />
            </div>
          </div>
          <div className="min-w-0 w-full">
            <label className="block text-sm font-medium text-(--text-secondary) mb-2">
              To Date
            </label>
            <div className="relative min-w-0 w-full">
              <input
                type="text"
                placeholder="Select date"
                value={filters.toDate}
                onChange={(e) =>
                  setFilters({ ...filters, toDate: e.target.value })
                }
                className="input-primary w-full min-w-0 pr-12 rounded-xl text-sm"
              />
              <Calendar
                className="absolute right-3 top-1/2 -translate-y-1/2 text-(--text-secondary) pointer-events-none"
                size={18}
              />
            </div>
          </div>
          <div className="min-w-0 w-full sm:col-span-2 xl:col-span-1">
            <label className="block text-sm font-medium text-(--text-secondary) mb-2">
              Status
            </label>
            <select
              value={filters.status}
              onChange={(e) =>
                setFilters({ ...filters, status: e.target.value })
              }
              className="input-primary w-full min-w-0 rounded-xl text-sm"
            >
              <option value="">All Status</option>
              <option value="processed">Processed</option>
              <option value="pending">Pending</option>
              <option value="failed">Failed</option>
            </select>
          </div>
          <div className="min-w-0 w-full sm:col-span-2 xl:col-span-1">
            <label className="block text-sm font-medium text-(--text-secondary) mb-2">
              Search
            </label>
            <div className="relative min-w-0 w-full">
              <input
                type="text"
                placeholder="Batch ID, Month..."
                value={filters.search}
                onChange={(e) =>
                  setFilters({ ...filters, search: e.target.value })
                }
                className="w-full min-w-0 pl-10 pr-4 py-2 rounded-lg border border-(--border) bg-(--bg-surface) text-(--text-primary) text-sm focus:outline-none focus:ring-2 focus:ring-(--primary)"
              />
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-(--text-secondary) pointer-events-none" />
            </div>
          </div>
        </div>
      </div>

      {/* Batches Table / Cards */}
      <div className="rounded-2xl border border-(--border) bg-(--bg-surface) p-4 sm:p-5 shadow-sm min-w-0 overflow-hidden">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-5 pb-3 border-b border-(--border) min-w-0">
          <h3 className="text-base sm:text-lg font-bold text-(--text-primary) truncate min-w-0">
            All Batches
          </h3>
          <button className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border border-(--border) hover:bg-indigo-500/10 hover:border-indigo-300 dark:hover:border-indigo-700 text-(--text-primary) font-medium transition text-sm w-full sm:w-auto shrink-0">
            <Download size={16} className="shrink-0" />
            Export All
          </button>
        </div>

        {/* Mobile & Tablet: cards (no horizontal scroll) */}
        <div className="block lg:hidden space-y-3 min-w-0">
          {batches.map((batch, idx) => (
            <div
              key={idx}
              className="p-4 rounded-xl border border-(--border) bg-(--bg-primary) hover:border-indigo-200 dark:hover:border-indigo-800 transition-colors space-y-3 min-w-0 overflow-hidden"
            >
              <div className="flex justify-between items-start gap-2 min-w-0">
                <span className="text-xs text-(--text-secondary) shrink-0">
                  Batch ID
                </span>
                <span className="text-sm font-medium text-(--primary) text-right break-all min-w-0">
                  {batch.id}
                </span>
              </div>
              <div className="flex justify-between items-center gap-2 min-w-0">
                <span className="text-xs text-(--text-secondary) shrink-0">
                  Month
                </span>
                <span className="text-sm font-semibold text-(--text-primary) truncate min-w-0">
                  {batch.month}
                </span>
              </div>
              <div className="flex justify-between items-center gap-2 text-xs sm:text-sm min-w-0">
                <span className="text-(--text-secondary) shrink-0">Upload</span>
                <span className="text-(--text-primary) truncate min-w-0">
                  {batch.uploadDate}
                </span>
              </div>
              <div className="flex justify-between items-center gap-2 min-w-0">
                <span className="text-xs text-(--text-secondary) shrink-0">
                  Employees
                </span>
                <span className="text-sm text-(--text-primary)">
                  {batch.employees}
                </span>
              </div>
              <div className="flex justify-between items-center gap-2 min-w-0">
                <span className="text-xs text-(--text-secondary) shrink-0">
                  Amount
                </span>
                <span className="text-sm font-semibold text-(--text-primary) truncate min-w-0">
                  {batch.amount}
                </span>
              </div>
              <div className="flex justify-between items-center gap-2 pt-3 border-t border-(--border)">
                <span
                  className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium ${batch.statusColor}`}
                >
                  <batch.icon size={12} />
                  {batch.status}
                </span>
                <div className="flex items-center gap-1">
                  <button
                    className="p-2.5 min-h-11 min-w-11 rounded-xl hover:bg-indigo-500/10 text-(--text-secondary) hover:text-(--primary) transition touch-manipulation flex items-center justify-center"
                    aria-label="View"
                  >
                    <Eye size={16} />
                  </button>
                  <button
                    className="p-2.5 min-h-11 min-w-11 rounded-xl hover:bg-indigo-500/10 text-(--text-secondary) hover:text-(--primary) transition touch-manipulation flex items-center justify-center"
                    aria-label="Download"
                  >
                    <Download size={16} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop only: table (lg and up to avoid horizontal scroll on tablet) */}
        <div className="hidden lg:block overflow-x-auto rounded-xl border border-(--border) max-w-full w-full">
          <table className="w-full min-w-160">
            <thead className="bg-(--bg-primary) border-b border-(--border)">
              <tr>
                <th className="px-3 sm:px-4 py-2 sm:py-3 text-left text-xs font-semibold text-(--text-secondary) uppercase">
                  Batch ID
                </th>
                <th className="px-3 sm:px-4 py-2 sm:py-3 text-left text-xs font-semibold text-(--text-secondary) uppercase">
                  Month
                </th>
                <th className="px-3 sm:px-4 py-2 sm:py-3 text-left text-xs font-semibold text-(--text-secondary) uppercase">
                  Upload Date
                </th>
                <th className="px-3 sm:px-4 py-2 sm:py-3 text-left text-xs font-semibold text-(--text-secondary) uppercase">
                  Process Date
                </th>
                <th className="px-3 sm:px-4 py-2 sm:py-3 text-right text-xs font-semibold text-(--text-secondary) uppercase">
                  Employees
                </th>
                <th className="px-3 sm:px-4 py-2 sm:py-3 text-right text-xs font-semibold text-(--text-secondary) uppercase">
                  Amount
                </th>
                <th className="px-3 sm:px-4 py-2 sm:py-3 text-left text-xs font-semibold text-(--text-secondary) uppercase">
                  Status
                </th>
                <th className="px-3 sm:px-4 py-2 sm:py-3 text-center text-xs font-semibold text-(--text-secondary) uppercase">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {batches.map((batch, idx) => (
                <tr
                  key={idx}
                  className="border-b border-(--border) hover:bg-(--bg-primary) transition"
                >
                  <td className="px-3 sm:px-4 py-3 sm:py-4">
                    <span className="text-sm font-medium text-(--primary)">
                      {batch.id}
                    </span>
                  </td>
                  <td className="px-3 sm:px-4 py-3 sm:py-4 text-sm font-semibold text-(--text-primary)">
                    {batch.month}
                  </td>
                  <td className="px-3 sm:px-4 py-3 sm:py-4 text-sm text-(--text-primary)">
                    {batch.uploadDate}
                  </td>
                  <td className="px-3 sm:px-4 py-3 sm:py-4 text-sm text-(--text-primary)">
                    {batch.processDate}
                  </td>
                  <td className="px-3 sm:px-4 py-3 sm:py-4 text-sm text-right text-(--text-primary)">
                    {batch.employees}
                  </td>
                  <td className="px-3 sm:px-4 py-3 sm:py-4 text-sm text-right font-semibold text-(--text-primary)">
                    {batch.amount}
                  </td>
                  <td className="px-3 sm:px-4 py-3 sm:py-4">
                    <span
                      className={`inline-flex items-center gap-1 px-2 sm:px-3 py-1 rounded-full text-xs font-medium w-fit ${batch.statusColor}`}
                    >
                      <batch.icon size={12} />
                      {batch.status}
                    </span>
                  </td>
                  <td className="px-3 sm:px-4 py-3 sm:py-4">
                    <div className="flex items-center justify-center gap-1 sm:gap-2">
                      <button
                        className="p-2 rounded-xl hover:bg-indigo-500/10 text-(--text-secondary) hover:text-(--primary) transition"
                        aria-label="View"
                      >
                        <Eye size={16} />
                      </button>
                      <button
                        className="p-2 rounded-xl hover:bg-indigo-500/10 text-(--text-secondary) hover:text-(--primary) transition"
                        aria-label="Download"
                      >
                        <Download size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination - responsive */}
        <div className="flex flex-col gap-3 mt-4 sm:mt-5 pt-4 sm:pt-5 border-t border-(--border) min-w-0 w-full max-w-full">
          <p className="text-xs sm:text-sm text-(--text-secondary) text-center sm:text-left w-full sm:w-auto order-2 sm:order-1">
            Showing 1 to 5 of 36 results
          </p>
          <div className="flex items-center justify-center sm:justify-end gap-0.5 sm:gap-2 order-1 sm:order-2 w-full max-w-full overflow-x-auto overflow-y-hidden py-1 scrollbar-none">
            <button
              className="shrink-0 p-1 sm:p-2 rounded-md sm:rounded-lg border border-(--border) hover:bg-indigo-500/10 hover:border-indigo-300 dark:hover:border-indigo-700 text-(--text-secondary) transition w-8 h-8 sm:w-11 sm:h-11 touch-manipulation flex items-center justify-center"
              aria-label="First page"
            >
              <ChevronsLeft className="w-3.5 h-3.5 sm:w-4 sm:h-4" size={16} />
            </button>
            <button
              className="shrink-0 p-1 sm:p-2 rounded-md sm:rounded-lg border border-(--border) hover:bg-indigo-500/10 hover:border-indigo-300 dark:hover:border-indigo-700 text-(--text-secondary) transition w-8 h-8 sm:w-11 sm:h-11 touch-manipulation flex items-center justify-center"
              aria-label="Previous"
            >
              <ChevronLeft className="w-3.5 h-3.5 sm:w-4 sm:h-4" size={16} />
            </button>
            <span className="shrink-0 px-1.5 sm:px-3 py-1 sm:py-1.5 text-xs font-medium text-(--text-primary) whitespace-nowrap">
              <span className="sm:hidden">1/8</span>
              <span className="hidden sm:inline">Page 1 of 8</span>
            </span>
            <button
              className="shrink-0 p-1 sm:p-2 rounded-md sm:rounded-lg border border-(--border) hover:bg-indigo-500/10 hover:border-indigo-300 dark:hover:border-indigo-700 text-(--text-secondary) transition w-8 h-8 sm:w-11 sm:h-11 touch-manipulation flex items-center justify-center"
              aria-label="Next"
            >
              <ChevronRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" size={16} />
            </button>
            <button
              className="shrink-0 p-1 sm:p-2 rounded-md sm:rounded-lg border border-(--border) hover:bg-indigo-500/10 hover:border-indigo-300 dark:hover:border-indigo-700 text-(--text-secondary) transition w-8 h-8 sm:w-11 sm:h-11 touch-manipulation flex items-center justify-center"
              aria-label="Last page"
            >
              <ChevronsRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
