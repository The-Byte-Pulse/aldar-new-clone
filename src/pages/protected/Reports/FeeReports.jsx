import { useState } from "react";
import {
  Download,
  DollarSign,
  TrendingUp,
  TrendingDown,
  PieChart,
  Calendar,
  Filter,
} from "lucide-react";

export default function FeeReports() {
  const [dateFrom, setDateFrom] = useState("");
  const [dateTo, setDateTo] = useState("");
  const [selectedPeriod, setSelectedPeriod] = useState("thisMonth");

  const periods = [
    { id: "thisMonth", label: "This Month" },
    { id: "lastMonth", label: "Last Month" },
    { id: "thisQuarter", label: "This Quarter" },
    { id: "thisYear", label: "This Year" },
  ];

  const feeCategories = [
    {
      category: "Transaction Fees",
      amount: "$1,245",
      transactions: 156,
      avgFee: "$7.98",
      trend: "+12%",
      trendUp: true,
      color: "bg-blue-100 dark:bg-blue-900 text-blue-600",
    },
    {
      category: "International Transfer",
      amount: "$890",
      transactions: 23,
      avgFee: "$38.70",
      trend: "-5%",
      trendUp: false,
      color: "bg-purple-100 dark:bg-purple-900 text-purple-600",
    },
    {
      category: "Currency Exchange",
      amount: "$567",
      transactions: 34,
      avgFee: "$16.68",
      trend: "+8%",
      trendUp: true,
      color: "bg-green-100 dark:bg-green-900 text-green-600",
    },
    {
      category: "Service Charges",
      amount: "$234",
      transactions: 12,
      avgFee: "$19.50",
      trend: "+3%",
      trendUp: true,
      color: "bg-orange-100 dark:bg-orange-900 text-orange-600",
    },
  ];

  const monthlyFees = [
    { month: "Jan", amount: 2340 },
    { month: "Feb", amount: 2890 },
    { month: "Mar", amount: 2567 },
    { month: "Apr", amount: 3120 },
    { month: "May", amount: 2936 },
    { month: "Jun", amount: 2936 },
  ];

  const recentCharges = [
    {
      date: "2024-01-25",
      description: "International Wire Transfer Fee",
      category: "International Transfer",
      amount: "$45.00",
    },
    {
      date: "2024-01-24",
      description: "Currency Conversion - USD to EUR",
      category: "Currency Exchange",
      amount: "$23.50",
    },
    {
      date: "2024-01-23",
      description: "Transaction Processing Fee",
      category: "Transaction Fees",
      amount: "$8.00",
    },
    {
      date: "2024-01-22",
      description: "Monthly Service Charge",
      category: "Service Charges",
      amount: "$19.50",
    },
    {
      date: "2024-01-21",
      description: "Expedited Transfer Fee",
      category: "International Transfer",
      amount: "$65.00",
    },
  ];

  return (
    <div className="min-h-screen bg-(--bg-primary) p-6">
      {/* Header */}
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-2">
          <div className="p-2 rounded-lg bg-green-100 dark:bg-green-900">
            <DollarSign className="text-green-600" size={24} />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-(--text-primary)">
              Fee Reports
            </h1>
            <p className="text-sm text-(--text-secondary)">
              Detailed breakdown of fees and charges
            </p>
          </div>
        </div>
      </div>

      {/* Period Selector */}
      <div className="flex gap-2 mb-6 flex-wrap">
        {periods.map((period) => (
          <button
            key={period.id}
            onClick={() => setSelectedPeriod(period.id)}
            className={`px-4 py-2 rounded-lg font-medium text-sm transition ${
              selectedPeriod === period.id
                ? "bg-(--primary) text-white"
                : "bg-(--bg-surface) border border-(--border) text-(--text-primary) hover:border-(--primary)"
            }`}
          >
            {period.label}
          </button>
        ))}
      </div>

      {/* Custom Date Range */}
      <div className="card mb-6">
        <div className="flex items-center gap-4 flex-wrap">
          <div className="flex items-center gap-2 text-(--text-secondary)">
            <Calendar size={18} />
            <span className="font-medium text-sm">Custom Range:</span>
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
            Apply
          </button>
          <button className="flex items-center gap-2 px-4 py-2 rounded-lg border border-(--border) bg-(--bg-surface) hover:bg-(--bg-primary) text-(--text-primary) font-medium transition">
            <Download size={18} />
            Export
          </button>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <div className="card">
          <p className="text-sm text-(--text-secondary) mb-1">Total Fees</p>
          <h3 className="text-2xl font-bold text-(--text-primary) mb-2">
            $2,936
          </h3>
          <div className="flex items-center gap-1 text-green-600 text-sm">
            <TrendingUp size={16} />
            <span className="font-medium">+12% from last period</span>
          </div>
        </div>
        <div className="card">
          <p className="text-sm text-(--text-secondary) mb-1">
            Total Transactions
          </p>
          <h3 className="text-2xl font-bold text-(--text-primary)">225</h3>
        </div>
        <div className="card">
          <p className="text-sm text-(--text-secondary) mb-1">Average Fee</p>
          <h3 className="text-2xl font-bold text-(--text-primary)">$13.05</h3>
        </div>
        <div className="card">
          <p className="text-sm text-(--text-secondary) mb-1">
            Highest Category
          </p>
          <h3 className="text-lg font-bold text-(--text-primary)">
            Transaction Fees
          </h3>
        </div>
      </div>

      {/* Fee Categories Breakdown */}
      <div className="card mb-6">
        <h3 className="text-lg font-bold text-(--text-primary) mb-4">
          Fee Categories Breakdown
        </h3>
        <div className="space-y-4">
          {feeCategories.map((cat, idx) => (
            <div
              key={idx}
              className="p-4 rounded-xl bg-(--bg-primary) border border-(--border) hover:border-(--primary) transition"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className={`p-2 rounded-lg ${cat.color}`}>
                    <DollarSign size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-(--text-primary)">
                      {cat.category}
                    </h4>
                    <p className="text-sm text-(--text-secondary)">
                      {cat.transactions} transactions
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <h4 className="text-xl font-bold text-(--text-primary)">
                    {cat.amount}
                  </h4>
                  <div
                    className={`flex items-center gap-1 text-sm ${
                      cat.trendUp ? "text-green-600" : "text-red-600"
                    }`}
                  >
                    {cat.trendUp ? (
                      <TrendingUp size={14} />
                    ) : (
                      <TrendingDown size={14} />
                    )}
                    <span className="font-medium">{cat.trend}</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-(--text-secondary)">
                  Average per transaction
                </span>
                <span className="font-semibold text-(--text-primary)">
                  {cat.avgFee}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Monthly Trend Chart */}
      <div className="card mb-6">
        <h3 className="text-lg font-bold text-(--text-primary) mb-4">
          Monthly Fee Trend
        </h3>
        <div className="w-full">
          {/* Line Chart */}
          <div className="relative h-64 px-4">
            {/* Y-axis grid lines */}
            <div className="absolute inset-0 flex flex-col justify-between py-4">
              {[3000, 2500, 2000, 1500, 1000, 500, 0].map((val, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <span className="text-xs text-(--text-secondary) w-12 text-right">
                    ${val}
                  </span>
                  <div className="flex-1 border-t border-(--border) border-dashed"></div>
                </div>
              ))}
            </div>

            {/* Chart points */}
            <svg
              className="absolute inset-0 w-full h-full"
              viewBox="0 0 600 240"
              preserveAspectRatio="none"
            >
              {/* Gradient fill */}
              <defs>
                <linearGradient id="lineGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="rgba(108, 92, 231, 0.3)" />
                  <stop offset="100%" stopColor="rgba(108, 92, 231, 0)" />
                </linearGradient>
              </defs>

              {/* Area */}
              <path
                d="M 60 80 L 160 40 L 260 60 L 360 20 L 460 50 L 560 50 L 560 240 L 60 240 Z"
                fill="url(#lineGradient)"
              />

              {/* Line */}
              <path
                d="M 60 80 L 160 40 L 260 60 L 360 20 L 460 50 L 560 50"
                fill="none"
                stroke="var(--primary)"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />

              {/* Points */}
              {[
                { x: 60, y: 80, label: "$2,340" },
                { x: 160, y: 40, label: "$2,890" },
                { x: 260, y: 60, label: "$2,567" },
                { x: 360, y: 20, label: "$3,120" },
                { x: 460, y: 50, label: "$2,936" },
                { x: 560, y: 50, label: "$2,936" },
              ].map((point, idx) => (
                <g key={idx}>
                  <circle
                    cx={point.x}
                    cy={point.y}
                    r="5"
                    fill="white"
                    stroke="var(--primary)"
                    strokeWidth="2"
                    className="cursor-pointer hover:r-7 transition-all"
                  />
                </g>
              ))}
            </svg>
          </div>

          {/* X-axis labels */}
          <div className="flex justify-between px-4 mt-2">
            {["Jan", "Feb", "Mar", "Apr", "May", "Jun"].map((month, idx) => (
              <span key={idx} className="text-xs font-medium text-(--text-secondary)">
                {month}
              </span>
            ))}
          </div>

          {/* Legend */}
          <div className="flex items-center justify-between mt-4 px-4 pt-4 border-t border-(--border)">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-(--primary)"></div>
              <span className="text-sm text-(--text-secondary)">Monthly Fees</span>
            </div>
            <div className="flex items-center gap-4 text-sm">
              <span className="text-(--text-secondary)">Average: <strong className="text-(--text-primary)">$2,764</strong></span>
              <span className="text-(--text-secondary)">Peak: <strong className="text-(--text-primary)">$3,120</strong></span>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Charges Table */}
      <div className="card">
        <h3 className="text-lg font-bold text-(--text-primary) mb-4">
          Recent Charges
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-(--bg-primary) border-b border-(--border)">
              <tr>
                <th className="px-4 py-3 text-left text-sm font-semibold text-(--text-secondary)">
                  Date
                </th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-(--text-secondary)">
                  Description
                </th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-(--text-secondary)">
                  Category
                </th>
                <th className="px-4 py-3 text-right text-sm font-semibold text-(--text-secondary)">
                  Amount
                </th>
              </tr>
            </thead>
            <tbody>
              {recentCharges.map((charge, idx) => (
                <tr
                  key={idx}
                  className="border-b border-(--border) hover:bg-(--bg-primary) transition"
                >
                  <td className="px-4 py-3 text-sm text-(--text-primary)">
                    {charge.date}
                  </td>
                  <td className="px-4 py-3 text-sm text-(--text-primary)">
                    {charge.description}
                  </td>
                  <td className="px-4 py-3">
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300">
                      {charge.category}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-right text-sm font-semibold text-(--text-primary)">
                    {charge.amount}
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