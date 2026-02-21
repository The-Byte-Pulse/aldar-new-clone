import { useState } from "react";
import {
  Building2,
  Plus,
  ArrowUpRight,
  ArrowDownLeft,
  Repeat,
  Eye,
  EyeOff,
  Download,
  Settings,
  TrendingUp,
  DollarSign,
} from "lucide-react";

export default function BankAccounts() {
  const [showBalance, setShowBalance] = useState({});

  const accounts = [
    {
      id: 1,
      name: "Primary Business Account",
      bank: "Emirates NBD",
      accountNumber: "AE07 0331 2345 6789 0123 456",
      currency: "AED",
      balance: "847,250.00",
      iban: "AE07033123456789012345",
      type: "Current Account",
      status: "Active",
      color: "from-blue-500 to-indigo-600",
    },
    {
      id: 2,
      name: "USD Operating Account",
      bank: "ADCB",
      accountNumber: "AE97 0301 2345 6789 0123 456",
      currency: "USD",
      balance: "245,680.00",
      iban: "AE97030123456789012345",
      type: "Current Account",
      status: "Active",
      color: "from-green-500 to-emerald-600",
    },
    {
      id: 3,
      name: "Euro Settlement Account",
      bank: "Mashreq Bank",
      accountNumber: "AE44 0330 1234 5678 9012 345",
      currency: "EUR",
      balance: "98,450.00",
      iban: "AE44033012345678901234",
      type: "Current Account",
      status: "Active",
      color: "from-purple-500 to-violet-600",
    },
    {
      id: 4,
      name: "Savings Account",
      bank: "First Abu Dhabi Bank",
      accountNumber: "AE33 0350 1234 5678 9012 345",
      currency: "AED",
      balance: "1,250,000.00",
      iban: "AE33035012345678901234",
      type: "Savings Account",
      status: "Active",
      color: "from-amber-500 to-orange-600",
    },
  ];

  const recentTransactions = [
    {
      id: 1,
      type: "credit",
      description: "Wire Transfer from ABC Corp",
      account: "AED Primary",
      amount: "+125,000.00",
      currency: "AED",
      date: "2024-01-25",
      status: "Completed",
    },
    {
      id: 2,
      type: "debit",
      description: "Salary Payment Batch",
      account: "AED Primary",
      amount: "-45,000.00",
      currency: "AED",
      date: "2024-01-24",
      status: "Completed",
    },
    {
      id: 3,
      type: "credit",
      description: "International Transfer - USD",
      account: "USD Operating",
      amount: "+32,500.00",
      currency: "USD",
      date: "2024-01-23",
      status: "Completed",
    },
    {
      id: 4,
      type: "debit",
      description: "Vendor Payment",
      account: "EUR Settlement",
      amount: "-8,750.00",
      currency: "EUR",
      date: "2024-01-22",
      status: "Processing",
    },
  ];

  const toggleBalance = (id) => {
    setShowBalance((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const totalBalance = accounts.reduce((sum, acc) => {
    if (acc.currency === "AED") return sum + parseFloat(acc.balance.replace(/,/g, ""));
    return sum;
  }, 0);

  return (
    <div className="min-h-screen bg-(--bg-primary) p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900">
            <Building2 className="text-blue-600" size={24} />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-(--text-primary)">
              Bank Accounts
            </h1>
            <p className="text-sm text-(--text-secondary)">
              Manage your business bank accounts
            </p>
          </div>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-(--primary) text-white font-medium hover:opacity-90 transition">
          <Plus size={18} />
          Add Account
        </button>
      </div>

      {/* Summary Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <div className="card">
          <p className="text-sm text-(--text-secondary) mb-1">
            Total Balance (AED)
          </p>
          <h3 className="text-2xl font-bold text-(--text-primary)">
            {totalBalance.toLocaleString()}
          </h3>
        </div>
        <div className="card">
          <p className="text-sm text-(--text-secondary) mb-1">
            Active Accounts
          </p>
          <h3 className="text-2xl font-bold text-(--text-primary)">
            {accounts.length}
          </h3>
        </div>
        <div className="card">
          <p className="text-sm text-(--text-secondary) mb-1">
            Currencies
          </p>
          <h3 className="text-2xl font-bold text-(--text-primary)">3</h3>
        </div>
        <div className="card">
          <p className="text-sm text-(--text-secondary) mb-1">
            This Month
          </p>
          <div className="flex items-center gap-2">
            <h3 className="text-2xl font-bold text-(--text-primary)">
              +12.5%
            </h3>
            <TrendingUp className="text-green-600" size={20} />
          </div>
        </div>
      </div>

      {/* Bank Account Cards */}
      <div className="mb-6">
        <h3 className="text-lg font-bold text-(--text-primary) mb-4">
          Your Accounts
        </h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {accounts.map((account) => (
            <div
              key={account.id}
              className="relative rounded-2xl p-6 text-white overflow-hidden cursor-pointer hover:scale-[1.02] transition-all duration-300"
            >
              {/* Gradient background */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${account.color}`}
              ></div>

              {/* Content */}
              <div className="relative z-10">
                {/* Header */}
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <p className="text-sm opacity-90 mb-1">{account.bank}</p>
                    <h4 className="text-lg font-bold">{account.name}</h4>
                  </div>
                  <button className="p-2 rounded-lg hover:bg-white/20 transition">
                    <Settings size={18} />
                  </button>
                </div>

                {/* Account Number */}
                <div className="mb-4">
                  <p className="text-xs opacity-70 mb-1">Account Number</p>
                  <p className="text-sm font-mono tracking-wide">
                    {account.accountNumber}
                  </p>
                </div>

                {/* Balance */}
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <p className="text-xs opacity-70 mb-1">Available Balance</p>
                    <button
                      onClick={() => toggleBalance(account.id)}
                      className="flex items-center gap-2 text-2xl font-bold"
                    >
                      {showBalance[account.id]
                        ? `${account.currency} ${account.balance}`
                        : "••••••••"}
                      {showBalance[account.id] ? (
                        <EyeOff size={18} />
                      ) : (
                        <Eye size={18} />
                      )}
                    </button>
                  </div>
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between text-sm">
                  <div>
                    <p className="opacity-70 text-xs mb-1">Type</p>
                    <p className="font-medium">{account.type}</p>
                  </div>
                  <div className="text-right">
                    <p className="opacity-70 text-xs mb-1">Status</p>
                    <span className="px-2 py-1 rounded-full bg-green-500/30 text-xs font-medium">
                      {account.status}
                    </span>
                  </div>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -right-12 -bottom-12 w-40 h-40 bg-white/10 rounded-full"></div>
              <div className="absolute -right-6 -bottom-6 w-24 h-24 bg-white/10 rounded-full"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <button className="card flex items-center gap-4 hover:border-(--primary) hover:shadow-lg transition group">
          <div className="p-3 rounded-lg bg-blue-100 dark:bg-blue-900 group-hover:scale-110 transition">
            <ArrowUpRight className="text-blue-600" size={24} />
          </div>
          <div className="text-left">
            <h4 className="font-semibold text-(--text-primary)">
              Transfer Funds
            </h4>
            <p className="text-sm text-(--text-secondary)">
              Move money between accounts
            </p>
          </div>
        </button>

        <button className="card flex items-center gap-4 hover:border-(--primary) hover:shadow-lg transition group">
          <div className="p-3 rounded-lg bg-green-100 dark:bg-green-900 group-hover:scale-110 transition">
            <ArrowDownLeft className="text-green-600" size={24} />
          </div>
          <div className="text-left">
            <h4 className="font-semibold text-(--text-primary)">
              Receive Payment
            </h4>
            <p className="text-sm text-(--text-secondary)">
              Get account details
            </p>
          </div>
        </button>

        <button className="card flex items-center gap-4 hover:border-(--primary) hover:shadow-lg transition group">
          <div className="p-3 rounded-lg bg-purple-100 dark:bg-purple-900 group-hover:scale-110 transition">
            <Download className="text-purple-600" size={24} />
          </div>
          <div className="text-left">
            <h4 className="font-semibold text-(--text-primary)">
              Download Statement
            </h4>
            <p className="text-sm text-(--text-secondary)">
              Export account statement
            </p>
          </div>
        </button>
      </div>

      {/* Recent Transactions */}
      <div className="card">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-bold text-(--text-primary)">
            Recent Transactions
          </h3>
          <button className="text-sm font-medium text-(--primary) hover:underline">
            View All
          </button>
        </div>

        <div className="space-y-3">
          {recentTransactions.map((txn) => (
            <div
              key={txn.id}
              className="flex items-center gap-4 p-4 rounded-xl bg-(--bg-primary) border border-(--border) hover:border-(--primary) transition"
            >
              {/* Icon */}
              <div
                className={`p-3 rounded-lg ${
                  txn.type === "credit"
                    ? "bg-green-100 dark:bg-green-900"
                    : "bg-red-100 dark:bg-red-900"
                }`}
              >
                {txn.type === "credit" ? (
                  <ArrowDownLeft className="text-green-600" size={20} />
                ) : (
                  <ArrowUpRight className="text-red-600" size={20} />
                )}
              </div>

              {/* Details */}
              <div className="flex-1">
                <h4 className="font-semibold text-(--text-primary) mb-1">
                  {txn.description}
                </h4>
                <div className="flex items-center gap-2 text-sm text-(--text-secondary)">
                  <span>{txn.account}</span>
                  <span>•</span>
                  <span>{txn.date}</span>
                  <span>•</span>
                  <span
                    className={`px-2 py-0.5 rounded-full text-xs ${
                      txn.status === "Completed"
                        ? "bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300"
                        : "bg-yellow-100 dark:bg-yellow-900 text-yellow-700 dark:text-yellow-300"
                    }`}
                  >
                    {txn.status}
                  </span>
                </div>
              </div>

              {/* Amount */}
              <div className="text-right">
                <p
                  className={`text-lg font-bold ${
                    txn.type === "credit"
                      ? "text-green-600"
                      : "text-red-600"
                  }`}
                >
                  {txn.amount}
                </p>
                <p className="text-sm text-(--text-secondary)">
                  {txn.currency}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}