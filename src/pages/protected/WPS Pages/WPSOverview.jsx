import { useState } from "react";
import {
  Users,
  DollarSign,
  FileText,
  CheckCircle,
  Clock,
  AlertTriangle,
  TrendingUp,
  Download,
  Calendar,
} from "lucide-react";

export default function WPSOverview() {
  const recentBatches = [
    {
      id: "WPS-2024-02-001",
      month: "February 2024",
      employees: 45,
      amount: "AED 225,000",
      status: "Processed",
      statusColor:
        "bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300",
      date: "2024-02-01",
    },
    {
      id: "WPS-2024-01-001",
      month: "January 2024",
      employees: 45,
      amount: "AED 225,000",
      status: "Processed",
      statusColor:
        "bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300",
      date: "2024-01-01",
    },
    {
      id: "WPS-2023-12-001",
      month: "December 2023",
      employees: 43,
      amount: "AED 215,000",
      status: "Processed",
      statusColor:
        "bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300",
      date: "2023-12-01",
    },
  ];

  const departmentBreakdown = [
    { department: "Engineering", employees: 18, amount: "AED 108,000" },
    { department: "Sales & Marketing", employees: 12, amount: "AED 54,000" },
    { department: "Operations", employees: 8, amount: "AED 36,000" },
    { department: "Finance", employees: 5, amount: "AED 22,500" },
    { department: "HR & Admin", employees: 2, amount: "AED 4,500" },
  ];

  return (
    <div className="min-h-screen bg-(--bg-primary) p-4 sm:p-6">
      {/* Header */}
      <div className="mb-6 sm:mb-8">
        <span className="inline-block px-2.5 py-1 rounded-md bg-indigo-100 dark:bg-indigo-900/40 text-indigo-700 dark:text-indigo-300 text-xs font-semibold uppercase tracking-wide mb-3">
          WPS
        </span>
        <h1 className="text-xl sm:text-2xl font-bold text-(--text-primary) mb-1">
          WPS Overview
        </h1>
        <p className="text-xs sm:text-sm text-(--text-secondary) max-w-xl">
          Wage Protection System salary management dashboard
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4  gap-3 lg:gap-4 mb-6 sm:mb-8">
        <div className="rounded-2xl border border-(--border) bg-(--bg-surface) p-4 sm:p-5 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between mb-3">
            <div className="p-2.5 rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400 shrink-0">
              <Users className="w-5 h-5" size={20} />
            </div>
            <span className="text-xs font-medium text-(--text-secondary)">Total Employees</span>
          </div>
          <p className="text-2xl sm:text-3xl font-bold text-(--text-primary) tracking-tight">45</p>
        </div>

        <div className="rounded-2xl border border-(--border) bg-(--bg-surface) p-4 sm:p-5 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between mb-3">
            <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 shrink-0">
              <DollarSign className="w-5 h-5" size={20} />
            </div>
            <span className="text-xs font-medium text-(--text-secondary)">Monthly Payroll</span>
          </div>
          <p className="text-2xl sm:text-3xl font-bold text-(--text-primary) break-all tracking-tight">AED 225,000</p>
        </div>

        <div className="rounded-2xl border border-(--border) bg-(--bg-surface) p-4 sm:p-5 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between mb-3">
            <div className="p-2.5 rounded-xl bg-violet-500/10 text-violet-600 dark:text-violet-400 shrink-0">
              <FileText className="w-5 h-5" size={20} />
            </div>
            <span className="text-xs font-medium text-(--text-secondary)">Processed Batches</span>
          </div>
          <p className="text-2xl sm:text-3xl font-bold text-(--text-primary) tracking-tight">36</p>
        </div>

        <div className="rounded-2xl border border-(--border) bg-(--bg-surface) p-4 sm:p-5 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between mb-3">
            <div className="p-2.5 rounded-xl bg-amber-500/10 text-amber-600 dark:text-amber-400 shrink-0">
              <TrendingUp className="w-5 h-5" size={20} />
            </div>
            <span className="text-xs font-medium text-(--text-secondary)">Success Rate</span>
          </div>
          <p className="text-2xl sm:text-3xl font-bold text-(--text-primary) tracking-tight">99.8%</p>
        </div>
      </div>

      {/* Info Banner */}
      <div className="mb-6 sm:mb-8 p-4 sm:p-5 rounded-2xl bg-linear-to-r from-indigo-50 to-blue-50 dark:from-indigo-950/30 dark:to-blue-950/30 border border-indigo-200/60 dark:border-indigo-800/50 flex flex-col sm:flex-row items-start gap-4">
        <div className="p-2.5 rounded-xl bg-indigo-500/15 text-indigo-600 dark:text-indigo-400 shrink-0">
          <Calendar className="w-5 h-5" size={20} />
        </div>
        <div className="min-w-0 flex-1">
          <h3 className="font-semibold text-sm sm:text-base text-indigo-900 dark:text-indigo-100 mb-1">
            Next Salary Processing
          </h3>
          <p className="text-xs sm:text-sm text-indigo-700 dark:text-indigo-300/90">
            March 2024 salary batch is due on <strong>March 1, 2024</strong>.
            Upload your salary file before the deadline to ensure timely processing.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-4 mb-6 sm:mb-8">
        {/* Recent Batches */}
        <div className="lg:col-span-2 rounded-2xl border border-(--border) bg-(--bg-surface) p-4 sm:p-5 shadow-sm">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-5 pb-3 border-b border-(--border)">
            <h3 className="text-base sm:text-lg font-bold text-(--text-primary)">
              Recent Salary Batches
            </h3>
            <button className="text-sm font-semibold text-(--primary) hover:text-indigo-600 dark:hover:text-indigo-400 transition w-fit">
              View All →
            </button>
          </div>

          <div className="space-y-3">
            {recentBatches.map((batch) => (
              <div
                key={batch.id}
                className="group p-4 rounded-xl border border-(--border) bg-(--bg-primary) hover:border-indigo-300 dark:hover:border-indigo-700 hover:shadow-sm transition-all"
              >
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-2">
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <h4 className="font-semibold text-sm sm:text-base text-(--text-primary)">
                        {batch.month}
                      </h4>
                      <span className={`px-2.5 py-0.5 rounded-full text-xs font-medium shrink-0 ${batch.statusColor}`}>
                        {batch.status}
                      </span>
                    </div>
                    <p className="text-xs text-(--text-secondary) truncate font-mono">
                      {batch.id}
                    </p>
                  </div>
                  <button className="p-2 rounded-lg hover:bg-indigo-500/10 text-(--text-secondary) hover:text-(--primary) transition w-fit shrink-0">
                    <Download size={18} />
                  </button>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 text-xs sm:text-sm pt-2 border-t border-(--border)/80">
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
                    <span className="text-(--text-secondary)"><strong className="text-(--text-primary)">{batch.employees}</strong> employees</span>
                    <span className="text-(--text-secondary)">Total <strong className="text-(--text-primary)">{batch.amount}</strong></span>
                  </div>
                  <span className="text-(--text-secondary)">{batch.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Department Breakdown */}
        <div className="rounded-2xl border border-(--border) bg-(--bg-surface) p-4 sm:p-5 shadow-sm">
          <h3 className="text-base sm:text-lg font-bold text-(--text-primary) mb-4 pb-3 border-b border-(--border)">
            Department Breakdown
          </h3>
          <div className="space-y-2">
            {departmentBreakdown.map((dept, idx) => (
              <div
                key={idx}
                className="flex items-center justify-between gap-2 p-3 rounded-xl bg-(--bg-primary) border border-(--border) hover:border-indigo-200 dark:hover:border-indigo-800 transition-colors"
              >
                <div className="min-w-0">
                  <h4 className="font-semibold text-(--text-primary) text-xs sm:text-sm truncate">
                    {dept.department}
                  </h4>
                  <p className="text-xs font-semibold text-(--primary) mt-0.5">{dept.amount}</p>
                </div>
                <span className="text-xs font-medium text-(--text-secondary) shrink-0 bg-(--bg-surface) px-2 py-1 rounded-lg">
                  {dept.employees} emp
                </span>
              </div>
            ))}
          </div>
          <div className="mt-4 pt-4 border-t-2 border-(--border) flex items-center justify-between gap-2">
            <span className="font-semibold text-(--text-primary) text-sm sm:text-base">Total</span>
            <span className="font-bold text-(--primary) text-base sm:text-lg truncate">AED 225,000</span>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 xl:grid-cols-3 md:grid-cols-2 gap-4">
        <button className="rounded-2xl border border-(--border) bg-(--bg-surface) p-4 sm:p-5 flex items-center gap-4 hover:border-indigo-400 dark:hover:border-indigo-600 hover:shadow-md hover:-translate-y-0.5 transition-all group text-left min-w-0">
          <div className="p-3 rounded-xl bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 group-hover:scale-105 transition shrink-0">
            <FileText className="w-6 h-6" size={24} />
          </div>
          <div className="min-w-0">
            <h4 className="font-semibold text-(--text-primary) text-sm sm:text-base">Upload Salary File</h4>
            <p className="text-xs sm:text-sm text-(--text-secondary) mt-0.5">Process new salary batch</p>
          </div>
        </button>

        <button className="rounded-2xl border border-(--border) bg-(--bg-surface) p-4 sm:p-5 flex items-center gap-4 hover:border-emerald-400 dark:hover:border-emerald-600 hover:shadow-md hover:-translate-y-0.5 transition-all group text-left min-w-0">
          <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 group-hover:scale-105 transition shrink-0">
            <Clock className="w-6 h-6" size={24} />
          </div>
          <div className="min-w-0">
            <h4 className="font-semibold text-(--text-primary) text-sm sm:text-base">View Batch History</h4>
            <p className="text-xs sm:text-sm text-(--text-secondary) mt-0.5">All processed batches</p>
          </div>
        </button>

        <button className="rounded-2xl border border-(--border) bg-(--bg-surface) p-4 sm:p-5 flex items-center gap-4 hover:border-violet-400 dark:hover:border-violet-600 hover:shadow-md hover:-translate-y-0.5 transition-all group text-left min-w-0 sm:col-span-2 md:col-span-1">
          <div className="p-3 rounded-xl bg-violet-500/10 text-violet-600 dark:text-violet-400 group-hover:scale-105 transition shrink-0">
            <Download className="w-6 h-6" size={24} />
          </div>
          <div className="min-w-0">
            <h4 className="font-semibold text-(--text-primary) text-sm sm:text-base">Download Template</h4>
            <p className="text-xs sm:text-sm text-(--text-secondary) mt-0.5">Excel salary template</p>
          </div>
        </button>
      </div>
    </div>
  );
}
