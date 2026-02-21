import { useState } from "react";
import {
  CreditCard,
  Plus,
  MoreVertical,
  ArrowUpRight,
  CheckCircle,
  Clock,
  XCircle,
  Eye,
  EyeOff,
  Trash2,
  Edit,
  Download,
} from "lucide-react";

export default function CardPayments() {
  const [selectedCard, setSelectedCard] = useState(null);
  const [showCardNumber, setShowCardNumber] = useState({});

  const cards = [
    {
      id: 1,
      name: "Corporate Card",
      type: "Visa",
      lastFour: "4532",
      expiry: "12/25",
      balance: "$45,230",
      status: "Active",
      color: "from-blue-500 to-purple-600",
      limit: "$50,000",
    },
    {
      id: 2,
      name: "Business Gold",
      type: "Mastercard",
      lastFour: "8765",
      expiry: "08/26",
      balance: "$28,450",
      status: "Active",
      color: "from-amber-500 to-orange-600",
      limit: "$30,000",
    },
    {
      id: 3,
      name: "Travel Card",
      type: "Visa",
      lastFour: "2341",
      expiry: "03/24",
      balance: "$0",
      status: "Inactive",
      color: "from-gray-500 to-gray-700",
      limit: "$10,000",
    },
  ];

  const recentTransactions = [
    {
      id: 1,
      merchant: "Amazon Web Services",
      amount: "$1,250.00",
      date: "2024-01-25",
      time: "14:32",
      status: "Completed",
      card: "****4532",
      category: "Cloud Services",
    },
    {
      id: 2,
      merchant: "Microsoft Azure",
      amount: "$890.00",
      date: "2024-01-24",
      time: "10:15",
      status: "Completed",
      card: "****4532",
      category: "Software",
    },
    {
      id: 3,
      merchant: "Office Supplies Inc",
      amount: "$345.50",
      date: "2024-01-23",
      time: "16:20",
      status: "Pending",
      card: "****8765",
      category: "Office",
    },
    {
      id: 4,
      merchant: "Hotel Booking",
      amount: "$567.00",
      date: "2024-01-22",
      time: "09:45",
      status: "Completed",
      card: "****8765",
      category: "Travel",
    },
    {
      id: 5,
      merchant: "Restaurant Purchase",
      amount: "$125.00",
      date: "2024-01-21",
      time: "13:30",
      status: "Failed",
      card: "****4532",
      category: "Dining",
    },
  ];

  const toggleCardNumber = (cardId) => {
    setShowCardNumber((prev) => ({ ...prev, [cardId]: !prev[cardId] }));
  };

  const getStatusColor = (status) => {
    if (status === "Completed")
      return "bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300";
    if (status === "Pending")
      return "bg-yellow-100 dark:bg-yellow-900 text-yellow-700 dark:text-yellow-300";
    if (status === "Failed")
      return "bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-300";
    return "bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300";
  };

  const getStatusIcon = (status) => {
    if (status === "Completed") return <CheckCircle size={14} />;
    if (status === "Pending") return <Clock size={14} />;
    if (status === "Failed") return <XCircle size={14} />;
    return null;
  };

  return (
    <div className="min-h-screen bg-(--bg-primary) p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <div className="p-2 rounded-lg bg-indigo-100 dark:bg-indigo-900">
            <CreditCard className="text-indigo-600" size={24} />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-(--text-primary)">
              Card Payments
            </h1>
            <p className="text-sm text-(--text-secondary)">
              Manage cards and view transactions
            </p>
          </div>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-(--primary) text-white font-medium hover:opacity-90 transition">
          <Plus size={18} />
          Add New Card
        </button>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <div className="card">
          <p className="text-sm text-(--text-secondary) mb-1">Total Balance</p>
          <h3 className="text-2xl font-bold text-(--text-primary)">$73,680</h3>
        </div>
        <div className="card">
          <p className="text-sm text-(--text-secondary) mb-1">Active Cards</p>
          <h3 className="text-2xl font-bold text-(--text-primary)">2</h3>
        </div>
        <div className="card">
          <p className="text-sm text-(--text-secondary) mb-1">This Month</p>
          <h3 className="text-2xl font-bold text-(--text-primary)">$12,450</h3>
        </div>
        <div className="card">
          <p className="text-sm text-(--text-secondary) mb-1">
            Total Transactions
          </p>
          <h3 className="text-2xl font-bold text-(--text-primary)">156</h3>
        </div>
      </div>

      {/* Cards Display */}
      <div className="mb-6">
        <h3 className="text-lg font-bold text-(--text-primary) mb-4">
          Your Cards
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {cards.map((card) => (
            <div
              key={card.id}
              className={`relative rounded-2xl p-6 text-white overflow-hidden cursor-pointer transform hover:scale-105 transition-all duration-300 ${
                card.status === "Inactive" ? "opacity-60" : ""
              }`}
              style={{
                background: `linear-gradient(135deg, var(--tw-gradient-stops))`,
              }}
              onClick={() => setSelectedCard(card.id)}
            >
              {/* Card gradient background */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${card.color}`}
              ></div>

              {/* Card content */}
              <div className="relative z-10">
                {/* Card header */}
                <div className="flex items-center justify-between mb-8">
                  <div className="text-sm font-medium opacity-90">
                    {card.name}
                  </div>
                  <button className="p-1 rounded-lg hover:bg-white/20 transition">
                    <MoreVertical size={18} />
                  </button>
                </div>

                {/* Card number */}
                <div className="mb-6">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleCardNumber(card.id);
                    }}
                    className="flex items-center gap-2 text-lg font-mono tracking-wider"
                  >
                    {showCardNumber[card.id]
                      ? `4532 8765 1234 ${card.lastFour}`
                      : `•••• •••• •••• ${card.lastFour}`}
                    {showCardNumber[card.id] ? (
                      <EyeOff size={16} />
                    ) : (
                      <Eye size={16} />
                    )}
                  </button>
                </div>

                {/* Card footer */}
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs opacity-70 mb-1">Valid Thru</p>
                    <p className="text-sm font-semibold">{card.expiry}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs opacity-70 mb-1">Balance</p>
                    <p className="text-sm font-semibold">{card.balance}</p>
                  </div>
                  <div className="text-2xl font-bold">{card.type}</div>
                </div>

                {/* Status badge */}
                <div className="absolute top-4 right-4">
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-medium ${
                      card.status === "Active"
                        ? "bg-green-500/30 text-white"
                        : "bg-gray-500/30 text-white"
                    }`}
                  >
                    {card.status}
                  </span>
                </div>
              </div>

              {/* Card chip decoration */}
              <div className="absolute top-20 left-6 w-12 h-10 bg-yellow-400/30 rounded-lg"></div>
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
              Make Payment
            </h4>
            <p className="text-sm text-(--text-secondary)">
              Process a new card payment
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
              Get card statement PDF
            </p>
          </div>
        </button>

        <button className="card flex items-center gap-4 hover:border-(--primary) hover:shadow-lg transition group">
          <div className="p-3 rounded-lg bg-orange-100 dark:bg-orange-900 group-hover:scale-110 transition">
            <Edit className="text-orange-600" size={24} />
          </div>
          <div className="text-left">
            <h4 className="font-semibold text-(--text-primary)">
              Manage Limits
            </h4>
            <p className="text-sm text-(--text-secondary)">
              Update spending limits
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

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-(--bg-primary) border-b border-(--border)">
              <tr>
                <th className="px-4 py-3 text-left text-sm font-semibold text-(--text-secondary)">
                  Date & Time
                </th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-(--text-secondary)">
                  Merchant
                </th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-(--text-secondary)">
                  Card
                </th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-(--text-secondary)">
                  Category
                </th>
                <th className="px-4 py-3 text-right text-sm font-semibold text-(--text-secondary)">
                  Amount
                </th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-(--text-secondary)">
                  Status
                </th>
              </tr>
            </thead>
            <tbody>
              {recentTransactions.map((txn) => (
                <tr
                  key={txn.id}
                  className="border-b border-(--border) hover:bg-(--bg-primary) transition"
                >
                  <td className="px-4 py-4">
                    <div className="text-sm">
                      <p className="font-medium text-(--text-primary)">
                        {txn.date}
                      </p>
                      <p className="text-xs text-(--text-secondary)">
                        {txn.time}
                      </p>
                    </div>
                  </td>
                  <td className="px-4 py-4 text-sm font-medium text-(--text-primary)">
                    {txn.merchant}
                  </td>
                  <td className="px-4 py-4 text-sm font-mono text-(--text-secondary)">
                    {txn.card}
                  </td>
                  <td className="px-4 py-4">
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300">
                      {txn.category}
                    </span>
                  </td>
                  <td className="px-4 py-4 text-right text-sm font-semibold text-(--text-primary)">
                    {txn.amount}
                  </td>
                  <td className="px-4 py-4">
                    <span
                      className={`flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium w-fit ${getStatusColor(
                        txn.status,
                      )}`}
                    >
                      {getStatusIcon(txn.status)}
                      {txn.status}
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
