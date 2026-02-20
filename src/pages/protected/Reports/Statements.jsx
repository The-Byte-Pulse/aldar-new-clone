import { useState } from "react";
import {
  Download,
  FileText,
  Calendar,
  Building2,
  Eye,
  Filter,
  Search,
} from "lucide-react";

export default function Statements() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedYear, setSelectedYear] = useState("2024");
  const [selectedAccount, setSelectedAccount] = useState("all");

  const accounts = [
    { id: "all", name: "All Accounts" },
    { id: "acc1", name: "USD Account - ****1234" },
    { id: "acc2", name: "EUR Account - ****5678" },
    { id: "acc3", name: "AED Account - ****9012" },
  ];

  const statements = [
    {
      id: 1,
      month: "January 2024",
      account: "USD Account - ****1234",
      transactions: 24,
      balance: "$125,450",
      status: "Available",
      date: "2024-02-01",
    },
    {
      id: 2,
      month: "December 2023",
      account: "USD Account - ****1234",
      transactions: 18,
      balance: "$98,230",
      status: "Available",
      date: "2024-01-01",
    },
    {
      id: 3,
      month: "November 2023",
      account: "EUR Account - ****5678",
      transactions: 32,
      balance: "€45,670",
      status: "Available",
      date: "2023-12-01",
    },
    {
      id: 4,
      month: "October 2023",
      account: "AED Account - ****9012",
      transactions: 15,
      balance: "AED 87,340",
      status: "Available",
      date: "2023-11-01",
    },
    {
      id: 5,
      month: "September 2023",
      account: "USD Account - ****1234",
      transactions: 21,
      balance: "$112,890",
      status: "Available",
      date: "2023-10-01",
    },
  ];

  return (
    <div className="min-h-screen bg-(--bg-primary) p-6">
      {/* Header */}
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-2">
          <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900">
            <FileText className="text-blue-600" size={24} />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-(--text-primary)">
              Account Statements
            </h1>
            <p className="text-sm text-(--text-secondary)">
              View and download monthly account statements
            </p>
          </div>
        </div>
      </div>

      {/* Filters Section */}
      <div className="card mb-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Search */}
          <div className="relative">
            <Search
              className="absolute left-3 top-1/2 -translate-y-1/2 text-(--text-secondary)"
              size={18}
            />
            <input
              type="text"
              placeholder="Search statements..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="input-primary w-full pl-10"
            />
          </div>

          {/* Account Filter */}
          <div className="relative">
            <Building2
              className="absolute left-3 top-1/2 -translate-y-1/2 text-(--text-secondary)"
              size={18}
            />
            <select
              value={selectedAccount}
              onChange={(e) => setSelectedAccount(e.target.value)}
              className="input-primary w-full pl-10 appearance-none"
            >
              {accounts.map((acc) => (
                <option key={acc.id} value={acc.id}>
                  {acc.name}
                </option>
              ))}
            </select>
          </div>

          {/* Year Filter */}
          <div className="relative">
            <Calendar
              className="absolute left-3 top-1/2 -translate-y-1/2 text-(--text-secondary)"
              size={18}
            />
            <select
              value={selectedYear}
              onChange={(e) => setSelectedYear(e.target.value)}
              className="input-primary w-full pl-10 appearance-none"
            >
              <option value="2024">2024</option>
              <option value="2023">2023</option>
              <option value="2022">2022</option>
              <option value="2021">2021</option>
            </select>
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
        <div className="card">
          <p className="text-sm text-(--text-secondary) mb-1">
            Total Statements
          </p>
          <h3 className="text-2xl font-bold text-(--text-primary)">48</h3>
        </div>
        <div className="card">
          <p className="text-sm text-(--text-secondary) mb-1">This Year</p>
          <h3 className="text-2xl font-bold text-(--text-primary)">12</h3>
        </div>
        <div className="card">
          <p className="text-sm text-(--text-secondary) mb-1">
            Available to Download
          </p>
          <h3 className="text-2xl font-bold text-(--text-primary)">48</h3>
        </div>
      </div>

      {/* Statements List */}
      <div className="card">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-bold text-(--text-primary)">
            Available Statements
          </h3>
          <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-(--primary) text-white font-medium hover:opacity-90 transition text-sm">
            <Download size={16} />
            Download All
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-(--bg-primary) border-b border-(--border)">
              <tr>
                <th className="px-4 py-3 text-left text-sm font-semibold text-(--text-secondary)">
                  Period
                </th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-(--text-secondary)">
                  Account
                </th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-(--text-secondary)">
                  Transactions
                </th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-(--text-secondary)">
                  Closing Balance
                </th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-(--text-secondary)">
                  Status
                </th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-(--text-secondary)">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {statements.map((stmt) => (
                <tr
                  key={stmt.id}
                  className="border-b border-(--border) hover:bg-(--bg-primary) transition"
                >
                  <td className="px-4 py-4">
                    <div className="flex items-center gap-2">
                      <Calendar className="text-(--text-secondary)" size={16} />
                      <span className="text-sm font-medium text-(--text-primary)">
                        {stmt.month}
                      </span>
                    </div>
                  </td>
                  <td className="px-4 py-4 text-sm text-(--text-primary)">
                    {stmt.account}
                  </td>
                  <td className="px-4 py-4 text-sm text-(--text-primary)">
                    {stmt.transactions}
                  </td>
                  <td className="px-4 py-4 text-sm font-semibold text-(--text-primary)">
                    {stmt.balance}
                  </td>
                  <td className="px-4 py-4">
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300">
                      {stmt.status}
                    </span>
                  </td>
                  <td className="px-4 py-4">
                    <div className="flex items-center gap-2">
                      <button className="p-2 rounded-lg hover:bg-(--bg-primary) text-(--text-secondary) hover:text-(--primary) transition">
                        <Eye size={18} />
                      </button>
                      <button className="p-2 rounded-lg hover:bg-(--bg-primary) text-(--text-secondary) hover:text-(--primary) transition">
                        <Download size={18} />
                      </button>
                    </div>
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
