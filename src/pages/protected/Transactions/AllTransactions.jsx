import { useState } from "react";
import { DollarSign, Clock, User, CheckCircle } from "lucide-react";
import DashboardCard from "../../../components/app/DashboardCard";
import transactionsData from "../../../data/transactions";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export default function AllTransactions() {
 
  // Top card stats
  const pendingCount = transactionsData.filter(t => t.status === "Pending").length;
  const totalTransactions = transactionsData.length;
  const totalAmount = transactionsData.reduce((acc, t) => acc + t.amount, 0);
  const activeBeneficiaries = new Set(transactionsData.map(t => t.beneficiary)).size;

  const cards = [
    {
      title: "Pending Transactions",
      amount: pendingCount,
      icon: Clock,
      iconBg: "rgba(251, 191, 36, 0.2)",
      iconColor: "#FBBF24",
    },
    {
      title: "Total Transactions",
      amount: totalTransactions,
      icon: CheckCircle,
      iconBg: "rgba(34, 197, 94, 0.2)",
      iconColor: "#22C55E",
    },
    {
      title: "Total Amount",
      amount: `QAR ${totalAmount}`,
      icon: DollarSign,
      iconBg: "rgba(79, 70, 229, 0.2)",
      iconColor: "var(--primary)",
    },
    {
      title: "Active Beneficiaries",
      amount: activeBeneficiaries,
      icon: User,
      iconBg: "rgba(99, 102, 241, 0.2)",
      iconColor: "#6366F1",
    },
  ];

  return (
    <div className="container-custom py-6">
      <ToastContainer position="top-right" autoClose={3000} theme="colored" />

      {/* Top 4 Dashboard Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {cards.map((card, idx) => (
          <DashboardCard key={idx} {...card} layout="top" />
        ))}
      </div>

      {/* Transactions Table */}
      <div className="card overflow-x-auto">
        <table className="min-w-full border border-(--border)">
          <thead className="bg-(--bg-surface)">
            <tr>
              <th className="px-4 py-2 border-b border-(--border)">#</th>
              <th className="px-4 py-2 border-b border-(--border)">Beneficiary</th>
              <th className="px-4 py-2 border-b border-(--border)">Account</th>
              <th className="px-4 py-2 border-b border-(--border)">Amount</th>
              <th className="px-4 py-2 border-b border-(--border)">Purpose</th>
              <th className="px-4 py-2 border-b border-(--border)">Payment</th>
              <th className="px-4 py-2 border-b border-(--border)">Type</th>
              <th className="px-4 py-2 border-b border-(--border)">Status</th>
            </tr>
          </thead>
          <tbody>
            {transactionsData.map((t, i) => (
              <tr key={t.id} className="hover:bg-(--bg-primary) cursor-pointer">
                <td className="px-4 py-2 border-b border-(--border)">{i + 1}</td>
                <td className="px-4 py-2 border-b border-(--border)">{t.beneficiary}</td>
                <td className="px-4 py-2 border-b border-(--border)">{t.account}</td>
                <td className="px-4 py-2 border-b border-(--border)">{t.amount}</td>
                <td className="px-4 py-2 border-b border-(--border)">{t.purpose}</td>
                <td className="px-4 py-2 border-b border-(--border)">{t.paymentMethod}</td>
                <td className="px-4 py-2 border-b border-(--border)">{t.type}</td>
                <td className="px-4 py-2 border-b border-(--border)">
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-medium ${
                      t.status === "Active"
                        ? "bg-green-100 text-green-700"
                        : t.status === "Pending"
                        ? "bg-yellow-100 text-yellow-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {t.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
