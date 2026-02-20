import { useState } from "react";
import {
  Download,
  FileText,
  Search,
  Filter,
  Eye,
  Mail,
  Printer,
  CheckCircle,
  Clock,
} from "lucide-react";

export default function EReceipts() {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [selectedReceipts, setSelectedReceipts] = useState([]);

  const receipts = [
    {
      id: "RCP-001234",
      date: "2024-01-25",
      description: "International Transfer to John Smith",
      amount: "$5,000.00",
      status: "Completed",
      type: "Transfer",
      reference: "TXN-789456123",
    },
    {
      id: "RCP-001233",
      date: "2024-01-24",
      description: "Currency Exchange USD to EUR",
      amount: "$2,350.00",
      status: "Completed",
      type: "Exchange",
      reference: "TXN-789456122",
    },
    {
      id: "RCP-001232",
      date: "2024-01-23",
      description: "Payment to ABC Corporation",
      amount: "$12,500.00",
      status: "Completed",
      type: "Payment",
      reference: "TXN-789456121",
    },
    {
      id: "RCP-001231",
      date: "2024-01-22",
      description: "Salary Payment - Employee Batch",
      amount: "$45,000.00",
      status: "Processing",
      type: "Salary",
      reference: "TXN-789456120",
    },
    {
      id: "RCP-001230",
      date: "2024-01-21",
      description: "International Transfer to Jane Doe",
      amount: "$3,200.00",
      status: "Completed",
      type: "Transfer",
      reference: "TXN-789456119",
    },
    {
      id: "RCP-001229",
      date: "2024-01-20",
      description: "Vendor Payment - XYZ Services",
      amount: "$8,750.00",
      status: "Completed",
      type: "Payment",
      reference: "TXN-789456118",
    },
  ];

  const toggleSelectReceipt = (id) => {
    if (selectedReceipts.includes(id)) {
      setSelectedReceipts(selectedReceipts.filter((r) => r !== id));
    } else {
      setSelectedReceipts([...selectedReceipts, id]);
    }
  };

  const toggleSelectAll = () => {
    if (selectedReceipts.length === receipts.length) {
      setSelectedReceipts([]);
    } else {
      setSelectedReceipts(receipts.map((r) => r.id));
    }
  };

  const getStatusColor = (status) => {
    if (status === "Completed")
      return "bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300";
    if (status === "Processing")
      return "bg-yellow-100 dark:bg-yellow-900 text-yellow-700 dark:text-yellow-300";
    return "bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300";
  };

  const getTypeColor = (type) => {
    const colors = {
      Transfer: "bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300",
      Exchange:
        "bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300",
      Payment:
        "bg-orange-100 dark:bg-orange-900 text-orange-700 dark:text-orange-300",
      Salary: "bg-teal-100 dark:bg-teal-900 text-teal-700 dark:text-teal-300",
    };
    return colors[type] || "bg-gray-100 text-gray-700";
  };

  return (
    <div className="min-h-screen bg-(--bg-primary) p-6">
      {/* Header */}
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-2">
          <div className="p-2 rounded-lg bg-purple-100 dark:bg-purple-900">
            <FileText className="text-purple-600" size={24} />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-(--text-primary)">
              E-Receipts
            </h1>
            <p className="text-sm text-(--text-secondary)">
              Manage and download digital transaction receipts
            </p>
          </div>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 mb-6">
        <div className="card">
          <p className="text-sm text-(--text-secondary) mb-1">Total Receipts</p>
          <h3 className="text-2xl font-bold text-(--text-primary)">248</h3>
        </div>
        <div className="card">
          <p className="text-sm text-(--text-secondary) mb-1">This Month</p>
          <h3 className="text-2xl font-bold text-(--text-primary)">32</h3>
        </div>
        <div className="card">
          <p className="text-sm text-(--text-secondary) mb-1">Downloaded</p>
          <h3 className="text-2xl font-bold text-(--text-primary)">186</h3>
        </div>
        <div className="card">
          <p className="text-sm text-(--text-secondary) mb-1">Processing</p>
          <h3 className="text-2xl font-bold text-(--text-primary)">4</h3>
        </div>
      </div>

      {/* Filters & Search */}
      <div className="card mb-6">
        <div className="flex flex-col md:flex-row gap-4">
          {/* Search */}
          <div className="relative flex-1">
            <Search
              className="absolute left-3 top-1/2 -translate-y-1/2 text-(--text-secondary)"
              size={18}
            />
            <input
              type="text"
              placeholder="Search by receipt ID, description, or reference..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="input-primary w-full pl-10"
            />
          </div>

          {/* Status Filter */}
          <div className="flex gap-2">
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="input-primary appearance-none px-4"
            >
              <option value="all">All Status</option>
              <option value="completed">Completed</option>
              <option value="processing">Processing</option>
            </select>
            <button className="px-4 py-2 rounded-lg border border-(--border) bg-(--bg-surface) hover:bg-(--bg-primary) text-(--text-primary) font-medium transition">
              <Filter size={18} />
            </button>
          </div>
        </div>
      </div>

      {/* Bulk Actions */}
      {selectedReceipts.length > 0 && (
        <div className="card mb-6 bg-blue-50 dark:bg-blue-950 border-blue-200 dark:border-blue-800">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <CheckCircle className="text-blue-600" size={20} />
              <span className="font-medium text-blue-800 dark:text-blue-200">
                {selectedReceipts.length} receipt(s) selected
              </span>
            </div>
            <div className="flex gap-2">
              <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition text-sm">
                <Download size={16} />
                Download Selected
              </button>
              <button className="flex items-center gap-2 px-4 py-2 rounded-lg border border-blue-600 text-blue-600 font-medium hover:bg-blue-50 dark:hover:bg-blue-900 transition text-sm">
                <Mail size={16} />
                Email Selected
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Receipts Table */}
      <div className="card">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-bold text-(--text-primary)">
            All Receipts
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
                <th className="px-4 py-3 text-left">
                  <input
                    type="checkbox"
                    checked={selectedReceipts.length === receipts.length}
                    onChange={toggleSelectAll}
                    className="rounded"
                  />
                </th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-(--text-secondary)">
                  Receipt ID
                </th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-(--text-secondary)">
                  Date
                </th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-(--text-secondary)">
                  Description
                </th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-(--text-secondary)">
                  Type
                </th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-(--text-secondary)">
                  Amount
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
              {receipts.map((receipt) => (
                <tr
                  key={receipt.id}
                  className="border-b border-(--border) hover:bg-(--bg-primary) transition"
                >
                  <td className="px-4 py-4">
                    <input
                      type="checkbox"
                      checked={selectedReceipts.includes(receipt.id)}
                      onChange={() => toggleSelectReceipt(receipt.id)}
                      className="rounded"
                    />
                  </td>
                  <td className="px-4 py-4">
                    <span className="text-sm font-medium text-(--primary)">
                      {receipt.id}
                    </span>
                  </td>
                  <td className="px-4 py-4 text-sm text-(--text-primary)">
                    {receipt.date}
                  </td>
                  <td className="px-4 py-4">
                    <div>
                      <p className="text-sm font-medium text-(--text-primary)">
                        {receipt.description}
                      </p>
                      <p className="text-xs text-(--text-secondary)">
                        Ref: {receipt.reference}
                      </p>
                    </div>
                  </td>
                  <td className="px-4 py-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${getTypeColor(
                        receipt.type,
                      )}`}
                    >
                      {receipt.type}
                    </span>
                  </td>
                  <td className="px-4 py-4 text-sm font-semibold text-(--text-primary)">
                    {receipt.amount}
                  </td>
                  <td className="px-4 py-4">
                    <span
                      className={`flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium w-fit ${getStatusColor(
                        receipt.status,
                      )}`}
                    >
                      {receipt.status === "Completed" ? (
                        <CheckCircle size={12} />
                      ) : (
                        <Clock size={12} />
                      )}
                      {receipt.status}
                    </span>
                  </td>
                  <td className="px-4 py-4">
                    <div className="flex items-center gap-1">
                      <button className="p-2 rounded-lg hover:bg-(--bg-primary) text-(--text-secondary) hover:text-(--primary) transition">
                        <Eye size={16} />
                      </button>
                      <button className="p-2 rounded-lg hover:bg-(--bg-primary) text-(--text-secondary) hover:text-(--primary) transition">
                        <Download size={16} />
                      </button>
                      <button className="p-2 rounded-lg hover:bg-(--bg-primary) text-(--text-secondary) hover:text-(--primary) transition">
                        <Printer size={16} />
                      </button>
                      <button className="p-2 rounded-lg hover:bg-(--bg-primary) text-(--text-secondary) hover:text-(--primary) transition">
                        <Mail size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-between mt-4 pt-4 border-t border-(--border)">
          <p className="text-sm text-(--text-secondary)">
            Showing 1-6 of 248 receipts
          </p>
          <div className="flex gap-2">
            <button className="px-3 py-1 rounded-lg border border-(--border) text-(--text-primary) hover:bg-(--bg-primary) transition text-sm">
              Previous
            </button>
            <button className="px-3 py-1 rounded-lg bg-(--primary) text-white text-sm">
              1
            </button>
            <button className="px-3 py-1 rounded-lg border border-(--border) text-(--text-primary) hover:bg-(--bg-primary) transition text-sm">
              2
            </button>
            <button className="px-3 py-1 rounded-lg border border-(--border) text-(--text-primary) hover:bg-(--bg-primary) transition text-sm">
              3
            </button>
            <button className="px-3 py-1 rounded-lg border border-(--border) text-(--text-primary) hover:bg-(--bg-primary) transition text-sm">
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
