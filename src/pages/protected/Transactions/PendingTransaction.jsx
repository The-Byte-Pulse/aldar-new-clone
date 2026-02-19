import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import DashboardCard from "../../../components/app/DashboardCard";
import { Clock, User, DollarSign, CheckCircle, Filter } from "lucide-react";

// Dummy Transactions Data
const initialTransactions = [
  { id: 1, reference: "TRX-001", beneficiary: "Ali Khan", account: "123456789", amount: 500, purpose: "Education", paymentMethod: "Bank Transfer", type: "Local", status: "Pending", bank: "QNB" },
  { id: 2, reference: "TRX-002", beneficiary: "Sara Ahmed", account: "987654321", amount: 1500, purpose: "Business", paymentMethod: "Wallet", type: "International", status: "Approved", bank: "Doha Bank" },
  { id: 3, reference: "TRX-003", beneficiary: "John Doe", account: "112233445", amount: 750, purpose: "Medical", paymentMethod: "Card", type: "Local", status: "Pending", bank: "QNB" },
  { id: 4, reference: "TRX-004", beneficiary: "Maryam Ali", account: "998877665", amount: 2000, purpose: "Family Support", paymentMethod: "Bank Transfer", type: "International", status: "Pending", bank: "Doha Bank" },
  { id: 5, reference: "TRX-005", beneficiary: "Ahmed Raza", account: "556677889", amount: 1200, purpose: "Education", paymentMethod: "Card", type: "Local", status: "Rejected", bank: "QNB" },
];

export default function TransactionsModule() {
  const [transactions, setTransactions] = useState(initialTransactions);
  const [filters, setFilters] = useState({ reference: "", bank: "", amount: "", purpose: "", status: "" });
  const [showFilterModal, setShowFilterModal] = useState(false);

  const handleStatusChange = (id, newStatus) => {
    const updated = transactions.map((t) => (t.id === id ? { ...t, status: newStatus } : t));
    setTransactions(updated);
    toast.success(`Transaction ${id} marked as ${newStatus}`);
  };

  const handleFilterChange = (e) => setFilters({ ...filters, [e.target.name]: e.target.value });

  const filteredTransactions = transactions.filter((t) => {
    return (
      (filters.reference === "" || t.reference.includes(filters.reference)) &&
      (filters.bank === "" || t.bank.includes(filters.bank)) &&
      (filters.amount === "" || t.amount === Number(filters.amount)) &&
      (filters.purpose === "" || t.purpose.includes(filters.purpose)) &&
      (filters.status === "" || t.status === filters.status)
    );
  });

  // Top Cards
  const pendingCount = transactions.filter((t) => t.status === "Pending").length;
  const approvedCount = transactions.filter((t) => t.status === "Approved").length;
  const totalAmount = transactions.reduce((acc, t) => acc + t.amount, 0);
  const activeBeneficiaries = new Set(transactions.map((t) => t.beneficiary)).size;

  const cards = [
    { title: "Pending Transactions", amount: pendingCount, icon: Clock, iconBg: "rgba(251, 191, 36, 0.2)", iconColor: "#FBBF24" },
    { title: "Approved Transactions", amount: approvedCount, icon: CheckCircle, iconBg: "rgba(34, 197, 94, 0.2)", iconColor: "#22C55E" },
    { title: "Total Amount", amount: `QAR ${totalAmount}`, icon: DollarSign, iconBg: "rgba(79, 70, 229, 0.2)", iconColor: "var(--primary)" },
    { title: "Active Beneficiaries", amount: activeBeneficiaries, icon: User, iconBg: "rgba(99, 102, 241, 0.2)", iconColor: "#6366F1" },
  ];

  // Status Styles
  const statusStyle = (status) => {
    switch (status) {
      case "Approved": return "bg-green-100 text-green-700";
      case "Pending": return "bg-yellow-100 text-yellow-700";
      case "Rejected": return "bg-red-100 text-red-700";
      default: return "";
    }
  };

  return (
    <div className="container-custom py-6">
      <ToastContainer position="top-right" autoClose={3000} theme="colored" />

      {/* Top Cards + Filter Button */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 flex-1">
          {cards.map((card, idx) => <DashboardCard key={idx} {...card} layout="top" />)}
        </div>

        <button className="btn-primary flex items-center gap-2" onClick={() => setShowFilterModal(true)}>
          <Filter className="w-4 h-4" /> Filter
        </button>
      </div>

      {/* Filter Modal */}
      {showFilterModal && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-(--bg-surface) p-6 rounded-lg w-full max-w-md relative">
            <h2 className="text-lg font-semibold mb-4">Filter Transactions</h2>
            <button className="absolute top-3 right-3 text-text-secondary" onClick={() => setShowFilterModal(false)}>✖</button>
            <div className="space-y-3">
              <input type="text" placeholder="Reference" name="reference" value={filters.reference} onChange={handleFilterChange} className="input-primary w-full" />
              <input type="text" placeholder="Bank" name="bank" value={filters.bank} onChange={handleFilterChange} className="input-primary w-full" />
              <input type="number" placeholder="Amount" name="amount" value={filters.amount} onChange={handleFilterChange} className="input-primary w-full" />
              <input type="text" placeholder="Purpose" name="purpose" value={filters.purpose} onChange={handleFilterChange} className="input-primary w-full" />
              <select name="status" value={filters.status} onChange={handleFilterChange} className="input-primary w-full">
                <option value="">All Status</option>
                <option value="Pending">Pending</option>
                <option value="Approved">Approved</option>
                <option value="Rejected">Rejected</option>
              </select>
            </div>
            <div className="flex justify-end gap-3 mt-4">
              <button className="btn-accent" onClick={() => setShowFilterModal(false)}>Close</button>
              <button className="btn-primary" onClick={() => setShowFilterModal(false)}>Apply</button>
            </div>
          </div>
        </div>
      )}

      {/* Transactions Table */}
      <div className="card overflow-x-auto">
        <table className="min-w-full border border-(--border)">
          <thead className="bg-(--bg-surface)">
            <tr>
              <th className="px-4 py-2 border-b border-(--border)">#</th>
              <th className="px-4 py-2 border-b border-(--border)">Reference</th>
              <th className="px-4 py-2 border-b border-(--border)">Beneficiary</th>
              <th className="px-4 py-2 border-b border-(--border)">Bank</th>
              <th className="px-4 py-2 border-b border-(--border)">Amount</th>
              <th className="px-4 py-2 border-b border-(--border)">Purpose</th>
              <th className="px-4 py-2 border-b border-(--border)">Status</th>
              <th className="px-4 py-2 border-b border-(--border)">Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredTransactions.map((t, i) => (
              <tr key={t.id} className={`hover:shadow-md transition-all ${t.status === "Approved" ? "bg-green-50" : t.status === "Rejected" ? "bg-red-50" : "bg-yellow-50"} cursor-pointer`}>
                <td className="px-4 py-2 border-b border-(--border)">{i + 1}</td>
                <td className="px-4 py-2 border-b border-(--border)">{t.reference}</td>
                <td className="px-4 py-2 border-b border-(--border)">{t.beneficiary}</td>
                <td className="px-4 py-2 border-b border-(--border)">{t.bank}</td>
                <td className="px-4 py-2 border-b border-(--border)">QAR {t.amount}</td>
                <td className="px-4 py-2 border-b border-(--border)">{t.purpose}</td>
                <td className="px-4 py-2 border-b border-(--border)">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${statusStyle(t.status)}`}>
                    {t.status}
                  </span>
                </td>
                <td className="px-4 py-2 border-b border-(--border) flex gap-2">
                  {t.status === "Pending" && (
                    <>
                      <button className="btn-primary" onClick={() => handleStatusChange(t.id, "Approved")}>Approve</button>
                      <button className="btn-red bg-red-700 text-white px-3 py-1 rounded" onClick={() => handleStatusChange(t.id, "Rejected")}>Reject</button>
                    </>
                  )}
                  {t.status !== "Pending" && <span className="text-sm text-text-secondary">{t.status}</span>}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
