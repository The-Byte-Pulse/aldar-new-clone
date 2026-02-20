import { useState, useMemo } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import DashboardCard from "../../../components/app/DashboardCard";
import { Clock, User, DollarSign, CheckCircle, Filter } from "lucide-react";

/* -------------------- Dummy Data -------------------- */
const initialTransactions = [
  {
    id: 1,
    reference: "TRX-001",
    beneficiary: "Ali Khan",
    account: "123456789",
    amount: 500,
    purpose: "Education",
    paymentMethod: "Bank Transfer",
    type: "Local",
    status: "Pending",
    bank: "QNB",
  },
  {
    id: 2,
    reference: "TRX-002",
    beneficiary: "Sara Ahmed",
    account: "987654321",
    amount: 1500,
    purpose: "Business",
    paymentMethod: "Wallet",
    type: "International",
    status: "Approved",
    bank: "Doha Bank",
  },
  {
    id: 3,
    reference: "TRX-003",
    beneficiary: "John Doe",
    account: "112233445",
    amount: 750,
    purpose: "Medical",
    paymentMethod: "Card",
    type: "Local",
    status: "Pending",
    bank: "QNB",
  },
];

/* -------------------- Component -------------------- */
export default function TransactionsModule() {
  const [transactions, setTransactions] = useState(initialTransactions);
  const [filters, setFilters] = useState({
    reference: "",
    bank: "",
    amount: "",
    purpose: "",
    status: "",
  });
  const [showFilterModal, setShowFilterModal] = useState(false);

  /* -------------------- Status Change -------------------- */
  const handleStatusChange = (id, newStatus) => {
    setTransactions((prev) =>
      prev.map((t) =>
        t.id === id ? { ...t, status: newStatus } : t
      )
    );
    toast.success(`Transaction ${id} marked as ${newStatus}`);
  };

  /* -------------------- Filter Logic -------------------- */
  const handleFilterChange = (e) =>
    setFilters({ ...filters, [e.target.name]: e.target.value });

  const filteredTransactions = useMemo(() => {
    return transactions.filter((t) => {
      return (
        (!filters.reference ||
          t.reference
            .toLowerCase()
            .includes(filters.reference.toLowerCase())) &&
        (!filters.bank ||
          t.bank.toLowerCase().includes(filters.bank.toLowerCase())) &&
        (!filters.amount || t.amount === Number(filters.amount)) &&
        (!filters.purpose ||
          t.purpose
            .toLowerCase()
            .includes(filters.purpose.toLowerCase())) &&
        (!filters.status || t.status === filters.status)
      );
    });
  }, [transactions, filters]);

  /* -------------------- Dashboard Cards -------------------- */
  const pendingCount = transactions.filter(
    (t) => t.status === "Pending"
  ).length;

  const approvedCount = transactions.filter(
    (t) => t.status === "Approved"
  ).length;

  const totalAmount = transactions.reduce(
    (acc, t) => acc + t.amount,
    0
  );

  const activeBeneficiaries = new Set(
    transactions.map((t) => t.beneficiary)
  ).size;

  const cards = [
    {
      title: "Pending Transactions",
      amount: pendingCount,
      icon: Clock,
      iconBg: "rgba(251, 191, 36, 0.2)",
      iconColor: "#FBBF24",
    },
    {
      title: "Approved Transactions",
      amount: approvedCount,
      icon: CheckCircle,
      iconBg: "rgba(34, 197, 94, 0.2)",
      iconColor: "#22C55E",
    },
    {
      title: "Total Amount",
      amount: `QAR ${totalAmount}`,
      icon: DollarSign,
      iconBg: "rgba(79, 70, 229, 0.2)",
      iconColor: "#4F46E5",
    },
    {
      title: "Active Beneficiaries",
      amount: activeBeneficiaries,
      icon: User,
      iconBg: "rgba(99, 102, 241, 0.2)",
      iconColor: "#6366F1",
    },
  ];

  /* -------------------- Status Styling -------------------- */
  const statusStyle = (status) => {
    switch (status) {
      case "Approved":
        return "bg-green-100 text-green-700";
      case "Pending":
        return "bg-yellow-100 text-yellow-700";
      case "Rejected":
        return "bg-red-100 text-red-700";
      default:
        return "";
    }
  };

  return (
    <div className="container-custom py-6">
      <ToastContainer position="top-right" autoClose={3000} theme="colored" />

      {/* -------------------- Top Section -------------------- */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 flex-1">
          {cards.map((card, idx) => (
            <DashboardCard key={idx} {...card} layout="top" />
          ))}
        </div>

        <button
          className="btn-primary flex items-center gap-2"
          onClick={() => setShowFilterModal(true)}
        >
          <Filter className="w-4 h-4" />
          Filter
        </button>
      </div>

      {/* -------------------- Filter Modal -------------------- */}
      {showFilterModal && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg w-full max-w-md relative shadow-lg">
            <h2 className="text-lg font-semibold mb-4">
              Filter Transactions
            </h2>

            <button
              className="absolute top-3 right-3"
              onClick={() => setShowFilterModal(false)}
            >
              ✖
            </button>

           <div className="space-y-3">
  <input
    type="text"
    placeholder="Reference"
    name="reference"
    value={filters.reference}
    onChange={handleFilterChange}
    className="w-full bg-(--bg-surface) text-(--text-primary) border border-(--border) rounded-md px-3 py-2 placeholder:text-(--text-secondary) focus:outline-none focus:ring-2 focus:ring-(--primary)"
  />

  <input
    type="text"
    placeholder="Bank"
    name="bank"
    value={filters.bank}
    onChange={handleFilterChange}
    className="w-full bg-(--bg-surface) text-(--text-primary) border border-(--border) rounded-md px-3 py-2 placeholder:text-(--text-secondary) focus:outline-none focus:ring-2 focus:ring-(--primary)"
  />

  <input
    type="number"
    placeholder="Amount"
    name="amount"
    value={filters.amount}
    onChange={handleFilterChange}
    className="w-full bg-(--bg-surface) text-(--text-primary) border border-(--border) rounded-md px-3 py-2 placeholder:text-(--text-secondary) focus:outline-none focus:ring-2 focus:ring-(--primary)"
  />

  <input
    type="text"
    placeholder="Purpose"
    name="purpose"
    value={filters.purpose}
    onChange={handleFilterChange}
    className="w-full bg-(--bg-surface) text-(--text-primary) border border-(--border) rounded-md px-3 py-2 placeholder:text-(--text-secondary) focus:outline-none focus:ring-2 focus:ring-(--primary)"
  />

  <select
    name="status"
    value={filters.status}
    onChange={handleFilterChange}
    className="w-full bg-(--bg-surface) text-(--text-primary) border border-(--border) rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-(--primary)"
  >
    <option value="">All Status</option>
    <option value="Pending">Pending</option>
    <option value="Approved">Approved</option>
    <option value="Rejected">Rejected</option>
  </select>
</div>

            <div className="flex justify-end gap-3 mt-4">
              <button
                className="btn-accent"
                onClick={() => setShowFilterModal(false)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* -------------------- Transactions Table -------------------- */}
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
              <tr key={t.id} className="hover:bg-(--bg-primary) cursor-pointer">
                <td className="px-4 py-2 border-b border-(--border)">{i + 1}</td>
                <td className="px-4 py-2 border-b border-(--border)">{t.reference}</td>
                <td className="px-4 py-2border-b border-(--border)">{t.beneficiary}</td>
                <td className="px-4 py-2 border-b border-(--border)">{t.bank}</td>
                <td className="px-4 py-2 border-b border-(--border)">QAR {t.amount}</td>
                <td className="px-4 py-2 border-b border-(--border)">{t.purpose}</td>
                <td className="px-4 py-2 border-b border-(--border)">
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-medium ${statusStyle(
                      t.status
                    )}`}
                  >
                    {t.status}
                  </span>
                </td>
                <td className="px-4 py-2 border-b border-(--border) space-x-2">
  {t.status === "Pending" ? (
    <>
      <button
        onClick={() => handleStatusChange(t.id, "Approved")}
        className="bg-green-500 text-white px-2 py-1 rounded text-xs"
      >
        Approve
      </button>

      <button
        onClick={() => handleStatusChange(t.id, "Rejected")}
        className="bg-red-500 text-white px-2 py-1 rounded text-xs"
      >
        Reject
      </button>
    </>
  ) : (
    <span
      className={`text-xs font-semibold ${
        t.status === "Approved"
          ? "text-green-600"
          : "text-red-600"
      }`}
    >
      {t.status}
    </span>
  )}
</td>
              </tr>
            ))}

            {filteredTransactions.length === 0 && (
              <tr>
                <td
                  colSpan="8"
                  className="text-center py-6 text-gray-500"
                >
                  No Transactions Found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}