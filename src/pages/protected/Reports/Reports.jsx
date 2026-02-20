import { useState } from "react";
import {
  Download,
  FileText,
  TrendingUp,
  DollarSign,
  Activity,
  Shield,
  Calendar,
  Filter,
} from "lucide-react";

export default function Reports() {
  const [dateFrom, setDateFrom] = useState("");
  const [dateTo, setDateTo] = useState("");
  const [selectedReport, setSelectedReport] = useState("Transaction History");

  const reportTypes = [
    { id: "transaction", label: "Transaction History", icon: FileText },
    { id: "payment", label: "Payment Summary", icon: DollarSign },
    { id: "compliance", label: "Compliance Status", icon: Shield },
    { id: "user", label: "User Activity", icon: Activity },
  ];

  const stats = [
    {
      label: "Total Amount",
      value: "$340,000",
      icon: DollarSign,
      bgColor: "bg-blue-50 dark:bg-blue-950",
      iconColor: "text-blue-600",
    },
    {
      label: "Total Transactions",
      value: "23",
      icon: TrendingUp,
      bgColor: "bg-green-50 dark:bg-green-950",
      iconColor: "text-green-600",
    },
    {
      label: "Average Amount",
      value: "$14,783",
      icon: Activity,
      bgColor: "bg-purple-50 dark:bg-purple-950",
      iconColor: "text-purple-600",
    },
    {
      label: "Success Rate",
      value: "98.5%",
      icon: Shield,
      bgColor: "bg-orange-50 dark:bg-orange-950",
      iconColor: "text-orange-600",
    },
  ];

  const transactions = [
    { date: "2024-01-01", amount: "$50,000", count: 5, status: "Completed" },
    { date: "2024-01-05", amount: "$75,000", count: 3, status: "Completed" },
    { date: "2024-01-10", amount: "$30,000", count: 4, status: "Completed" },
    { date: "2024-01-15", amount: "$100,000", count: 2, status: "Completed" },
    { date: "2024-01-20", amount: "$25,000", count: 6, status: "Completed" },
    { date: "2024-01-25", amount: "$60,000", count: 3, status: "Completed" },
  ];

  return (
    <div className="min-h-screen bg-(--bg-primary) p-6">
      {/* Header */}
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-2">
          <div className="p-2 rounded-lg bg-orange-100 dark:bg-orange-900">
            <FileText className="text-orange-600" size={24} />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-(--text-primary)">
              Reports & Analytics
            </h1>
            <p className="text-sm text-(--text-secondary)">
              Generate and export comprehensive reports
            </p>
          </div>
        </div>
      </div>

      {/* Export Buttons */}
      <div className="flex gap-3 mb-6 flex-wrap">
        <button className="flex items-center gap-2 px-4 py-2 rounded-lg border border-(--border) bg-(--bg-surface) hover:bg-(--bg-primary) text-(--text-primary) font-medium transition">
          <Download size={18} />
          Export PDF
        </button>
        <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-(--primary) text-white font-medium hover:opacity-90 transition">
          <Download size={18} />
          Export Excel
        </button>
      </div>

      {/* Report Type Selector */}
      <div className="mb-6">
        <h3 className="text-sm font-semibold text-(--text-secondary) mb-3">
          Select Report Type
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {reportTypes.map((type) => (
            <button
              key={type.id}
              onClick={() => setSelectedReport(type.label)}
              className={`flex items-center gap-3 p-4 rounded-xl border transition ${
                selectedReport === type.label
                  ? "bg-(--primary) text-white border-(--primary)"
                  : "bg-(--bg-surface) border-(--border) hover:border-(--primary)"
              }`}
            >
              <type.icon size={20} />
              <span className="font-medium text-sm">{type.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Date Range Filter */}
      <div className="card mb-6">
        <div className="flex items-center gap-4 flex-wrap">
          <div className="flex items-center gap-2 text-(--text-secondary)">
            <Calendar size={18} />
            <span className="font-medium text-sm">Date Range:</span>
          </div>
          <input
            type="text"
            placeholder="mm/dd/yyyy"
            value={dateFrom}
            onChange={(e) => setDateFrom(e.target.value)}
            className="input-primary flex-1 min-w-[140px]"
          />
          <span className="text-(--text-secondary)">to</span>
          <input
            type="text"
            placeholder="mm/dd/yyyy"
            value={dateTo}
            onChange={(e) => setDateTo(e.target.value)}
            className="input-primary flex-1 min-w-[140px]"
          />
          <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-(--primary) text-white font-medium hover:opacity-90 transition">
            <Filter size={18} />
            Apply Filter
          </button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {stats.map((stat, idx) => (
          <div key={idx} className="card flex items-center gap-4">
            <div className={`p-3 rounded-lg ${stat.bgColor}`}>
              <stat.icon className={stat.iconColor} size={24} />
            </div>
            <div>
              <p className="text-sm text-(--text-secondary) mb-1">
                {stat.label}
              </p>
              <h3 className="text-2xl font-bold text-(--text-primary)">
                {stat.value}
              </h3>
            </div>
          </div>
        ))}
      </div>

      {/* Transaction Trend Chart */}
      <div className="card mb-6">
        <h3 className="text-lg font-bold text-(--text-primary) mb-4">
          Transaction Trend
        </h3>
        <div className="w-full">
          {/* Chart */}
          <div className="flex items-end justify-between gap-2 h-64 px-4">
            {[
              { month: "Jan", value: 65 },
              { month: "Feb", value: 82 },
              { month: "Mar", value: 70 },
              { month: "Apr", value: 90 },
              { month: "May", value: 75 },
              { month: "Jun", value: 88 },
            ].map((item, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center flex-1 gap-2"
              >
                {/* Bar */}
                <div className="w-full bg-(--bg-primary) rounded-t-lg overflow-hidden relative group">
                  <div
                    className="w-full bg-gradient-to-t from-[var(--primary)] to-[var(--secondary)] rounded-t-lg transition-all duration-700 ease-out hover:opacity-80 cursor-pointer"
                    style={{
                      height: `${item.value * 2.5}px`,
                      animationDelay: `${idx * 100}ms`,
                    }}
                  >
                    {/* Tooltip on hover */}
                    <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-(--text-primary) text-(--bg-surface) px-3 py-1 rounded-lg text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                      ${item.value}k
                    </div>
                  </div>
                </div>
                {/* Label */}
                <span className="text-xs font-medium text-(--text-secondary)">
                  {item.month}
                </span>
              </div>
            ))}
          </div>

          {/* Y-axis labels */}
          <div className="flex justify-between mt-4 px-4 pt-4 border-t border-(--border)">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-(--primary)"></div>
              <span className="text-sm text-(--text-secondary)">
                Transaction Volume (in thousands)
              </span>
            </div>
            <span className="text-sm font-semibold text-(--text-primary)">
              Peak: $90k in Apr
            </span>
          </div>
        </div>
      </div>

      {/* Transaction Details Table */}
      <div className="card">
        <h3 className="text-lg font-bold text-(--text-primary) mb-4">
          Transaction Details
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-(--bg-primary) border-b border-(--border)">
              <tr>
                <th className="px-4 py-3 text-left text-sm font-semibold text-(--text-secondary)">
                  Date
                </th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-(--text-secondary)">
                  Amount
                </th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-(--text-secondary)">
                  Count
                </th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-(--text-secondary)">
                  Status
                </th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((tx, idx) => (
                <tr
                  key={idx}
                  className="border-b border-(--border) hover:bg-(--bg-primary) transition"
                >
                  <td className="px-4 py-3 text-sm text-(--text-primary)">
                    {tx.date}
                  </td>
                  <td className="px-4 py-3 text-sm font-semibold text-(--text-primary)">
                    {tx.amount}
                  </td>
                  <td className="px-4 py-3 text-sm text-(--text-primary)">
                    {tx.count}
                  </td>
                  <td className="px-4 py-3">
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300">
                      {tx.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
