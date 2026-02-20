import { useState } from "react";
import {
  FileText,
  Upload,
  Search,
  Eye,
  Download,
  AlertTriangle,
  Info,
} from "lucide-react";

export default function Documents() {
  const [activeTab, setActiveTab] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  const documents = [
    {
      id: 1,
      name: "Trade License",
      category: "Company",
      uploaded: "2024-01-15",
      expires: "2025-01-15",
      status: "Approved",
      statusColor:
        "bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300",
    },
    {
      id: 2,
      name: "Memorandum of Association",
      category: "Company",
      uploaded: "2024-01-15",
      expires: null,
      status: "Approved",
      statusColor:
        "bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300",
    },
    {
      id: 3,
      name: "Emirates ID - John Doe",
      category: "Authorized Signatory",
      uploaded: "2024-02-03",
      expires: "2026-05-20",
      status: "Pending Review",
      statusColor:
        "bg-yellow-100 dark:bg-yellow-900 text-yellow-700 dark:text-yellow-300",
    },
    {
      id: 4,
      name: "VAT Certificate",
      category: "Company",
      uploaded: "2024-02-01",
      expires: null,
      status: "Rejected",
      statusColor: "bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-300",
      error: "Document is not legible. Please upload a clearer copy.",
    },
    {
      id: 5,
      name: "Bank Reference Letter",
      category: "Financial",
      uploaded: null,
      expires: null,
      status: "Upload Required",
      statusColor:
        "bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300",
    },
    {
      id: 6,
      name: "Passport Copy - John Doe",
      category: "Authorized Signatory",
      uploaded: "2024-01-15",
      expires: "2024-03-01",
      status: "Expiring Soon",
      statusColor:
        "bg-orange-100 dark:bg-orange-900 text-orange-700 dark:text-orange-300",
    },
  ];

  const stats = {
    total: 8,
    approved: 4,
    pending: 1,
    actionRequired: 2,
  };

  const tabs = [
    { id: "all", label: "All Documents", count: 8 },
    { id: "required", label: "Required", count: 2 },
    { id: "uploaded", label: "Uploaded", count: null },
    { id: "expiring", label: "Expiring Soon", count: null },
  ];

  return (
    <div className="min-h-screen bg-(--bg-primary) p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-(--text-primary) mb-1">
            Documents
          </h1>
          <p className="text-sm text-(--text-secondary)">
            Manage your company and compliance documents
          </p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-(--primary) text-white font-medium hover:opacity-90 transition">
          <Upload size={18} />
          Upload Document
        </button>
      </div>

      {/* Alert Banners */}
      <div className="space-y-3 mb-6">
        {/* Action Required */}
        <div className="p-4 rounded-xl bg-yellow-50 dark:bg-yellow-950 border border-yellow-200 dark:border-yellow-800 flex items-center gap-3">
          <AlertTriangle className="text-yellow-600 shrink-0" size={20} />
          <div>
            <h3 className="font-semibold text-yellow-800 dark:text-yellow-200">
              Action Required
            </h3>
            <p className="text-sm text-yellow-700 dark:text-yellow-300">
              You have 2 document(s) that require attention.
            </p>
          </div>
        </div>

        {/* Expiring Documents */}
        <div className="p-4 rounded-xl bg-blue-50 dark:bg-blue-950 border border-blue-200 dark:border-blue-800 flex items-center gap-3">
          <Info className="text-blue-600 shrink-0" size={20} />
          <div>
            <h3 className="font-semibold text-blue-800 dark:text-blue-200">
              Expiring Documents
            </h3>
            <p className="text-sm text-blue-700 dark:text-blue-300">
              1 document(s) will expire within the next 30 days.
            </p>
          </div>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <div className="card border-l-4 border-l-blue-500">
          <p className="text-sm text-(--text-secondary) mb-1">
            Total Documents
          </p>
          <h3 className="text-3xl font-bold text-(--text-primary)">
            {stats.total}
          </h3>
        </div>
        <div className="card border-l-4 border-l-green-500">
          <p className="text-sm text-(--text-secondary) mb-1">Approved</p>
          <h3 className="text-3xl font-bold text-green-600">
            {stats.approved}
          </h3>
        </div>
        <div className="card border-l-4 border-l-yellow-500">
          <p className="text-sm text-(--text-secondary) mb-1">Pending Review</p>
          <h3 className="text-3xl font-bold text-yellow-600">
            {stats.pending}
          </h3>
        </div>
        <div className="card border-l-4 border-l-red-500">
          <p className="text-sm text-(--text-secondary) mb-1">
            Action Required
          </p>
          <h3 className="text-3xl font-bold text-red-600">
            {stats.actionRequired}
          </h3>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-2 mb-6 border-b border-(--border)">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-4 py-3 font-medium text-sm transition relative ${
              activeTab === tab.id
                ? "text-(--primary) border-b-2 border-(--primary)"
                : "text-(--text-secondary) hover:text-(--text-primary)"
            }`}
          >
            {tab.label}
            {tab.count !== null && (
              <span
                className={`ml-2 px-2 py-0.5 rounded-full text-xs ${
                  activeTab === tab.id
                    ? "bg-(--primary) text-white"
                    : "bg-(--bg-primary) text-(--text-secondary)"
                }`}
              >
                {tab.count}
              </span>
            )}
          </button>
        ))}
      </div>

      {/* Search */}
      <div className="mb-6">
        <div className="relative max-w-md">
          <Search
            className="absolute left-3 top-1/2 -translate-y-1/2 text-(--text-secondary)"
            size={18}
          />
          <input
            type="text"
            placeholder="Search documents..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="input-primary w-full pl-10"
          />
        </div>
      </div>

      {/* Documents List */}
      <div className="space-y-3">
        {documents.map((doc) => (
          <div
            key={doc.id}
            className="card hover:shadow-md transition flex items-center gap-4"
          >
            {/* Icon */}
            <div className="p-3 rounded-lg bg-blue-100 dark:bg-blue-900 shrink-0">
              <FileText className="text-blue-600" size={24} />
            </div>

            {/* Document Info */}
            <div className="flex-1 min-w-0">
              <div className="flex items-start justify-between gap-2 mb-1">
                <div className="flex-1">
                  <h4 className="font-semibold text-(--text-primary) mb-1">
                    {doc.name}
                  </h4>
                  <p className="text-sm text-(--text-secondary)">
                    {doc.category}
                  </p>
                  {doc.error && (
                    <p className="text-sm text-red-600 dark:text-red-400 mt-1">
                      {doc.error}
                    </p>
                  )}
                </div>

                {/* Status Badge */}
                <span
                  className={`px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap ${doc.statusColor}`}
                >
                  {doc.status}
                </span>
              </div>

              {/* Dates & Actions */}
              <div className="flex items-center justify-between gap-4 flex-wrap">
                <div className="flex items-center gap-4 text-sm text-(--text-secondary)">
                  {doc.uploaded ? (
                    <span>Uploaded: {doc.uploaded}</span>
                  ) : (
                    <span className="text-gray-500">Not uploaded</span>
                  )}
                  {doc.expires && <span>Expires: {doc.expires}</span>}
                </div>

                {/* Action Buttons */}
                <div className="flex items-center gap-2">
                  {doc.uploaded ? (
                    <>
                      <button className="p-2 rounded-lg hover:bg-(--bg-primary) text-(--text-secondary) hover:text-(--primary) transition">
                        <Eye size={18} />
                      </button>
                      <button className="p-2 rounded-lg hover:bg-(--bg-primary) text-(--text-secondary) hover:text-(--primary) transition">
                        <Download size={18} />
                      </button>
                    </>
                  ) : (
                    <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-(--primary) text-white font-medium hover:opacity-90 transition text-sm">
                      <Upload size={16} />
                      Upload
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
