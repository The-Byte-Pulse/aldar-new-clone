import { useState } from "react";
import {
  Phone,
  Mail,
  MessageCircle,
  Search,
  FileText,
  PlayCircle,
  Code,
  PhoneCall,
  ChevronDown,
  Plus,
  AlertCircle,
} from "lucide-react";

export default function Support() {
  const [searchFAQ, setSearchFAQ] = useState("");
  const [expandedFAQ, setExpandedFAQ] = useState(null);

  const faqs = [
    {
      id: 1,
      question: "How long does an international transfer take?",
      answer:
        "International transfers typically take 1-3 business days depending on the destination country and bank processing times.",
    },
    {
      id: 2,
      question: "What are the transfer limits for corporate accounts?",
      answer:
        "Corporate accounts have a daily limit of $500,000 for international transfers and $1,000,000 for domestic transfers.",
    },
    {
      id: 3,
      question: "How do I add a new beneficiary?",
      answer:
        "Navigate to Beneficiaries page, click 'Add' button, fill in the required details including bank information and submit for approval.",
    },
    {
      id: 4,
      question: "What documents are required for KYC verification?",
      answer:
        "Required documents include Trade License, Memorandum of Association, Emirates ID of authorized signatories, and Bank Reference Letter.",
    },
    {
      id: 5,
      question: "How can I lock an exchange rate?",
      answer:
        "You can lock exchange rates through the Forward Contract feature available in the Transactions section for up to 12 months.",
    },
  ];

  const tickets = [
    {
      id: "TKT-001",
      subject: "Unable to add international beneficiary",
      status: "open",
      statusColor:
        "bg-yellow-100 dark:bg-yellow-900 text-yellow-700 dark:text-yellow-300",
      created: "2024-02-04 09:30 AM",
      lastUpdate: "2024-02-04 11:15 AM",
    },
    {
      id: "TKT-002",
      subject: "Transaction fee query",
      status: "pending",
      statusColor:
        "bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300",
      created: "2024-02-03 02:00 PM",
      lastUpdate: "2024-02-03 04:30 PM",
    },
    {
      id: "TKT-003",
      subject: "Document verification delay",
      status: "resolved",
      statusColor:
        "bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300",
      created: "2024-01-28 10:00 AM",
      lastUpdate: "2024-01-29 03:00 PM",
    },
  ];

  const quickLinks = [
    {
      icon: FileText,
      title: "User Guide",
      description: "Complete portal documentation",
    },
    {
      icon: PlayCircle,
      title: "Video Tutorials",
      description: "Step-by-step guides",
    },
    {
      icon: Code,
      title: "API Documentation",
      description: "For developers",
    },
    {
      icon: PhoneCall,
      title: "Contact Sales",
      description: "Upgrade your plan",
    },
  ];

  return (
    <div className="min-h-screen bg-(--bg-primary) p-6">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-(--text-primary) mb-1">
          Help & Support
        </h1>
        <p className="text-sm text-(--text-secondary)">
          Get help with your account and transactions
        </p>
      </div>

      {/* Under Development Banner */}
      <div className="mb-6 p-4 rounded-xl bg-orange-50 dark:bg-orange-950 border border-orange-200 dark:border-orange-800 flex items-start gap-3">
        <AlertCircle
          className="text-orange-600 flex-shrink-0 mt-0.5"
          size={20}
        />
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-1">
            <h3 className="font-semibold text-orange-800 dark:text-orange-200">
              Under Development
            </h3>
            <span className="px-2 py-0.5 rounded-full bg-orange-200 dark:bg-orange-800 text-orange-800 dark:text-orange-200 text-xs font-medium">
              Beta
            </span>
          </div>
          <p className="text-sm text-orange-700 dark:text-orange-300">
            This Page is still in active development. Some features may be
            incomplete, change unexpectedly, or contain temporary placeholder
            data.
          </p>
        </div>
      </div>

      {/* Contact Options */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        {/* Call Us */}
        <div className="card hover:shadow-lg transition">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-lg bg-blue-100 dark:bg-blue-900 flex-shrink-0">
              <Phone className="text-blue-600" size={24} />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-(--text-primary) mb-1">
                Call Us
              </h3>
              <p className="text-sm text-(--text-secondary) mb-2">
                Available 24/7 for urgent matters
              </p>
              <a
                href="tel:+97142345678"
                className="text-sm font-medium text-(--primary) hover:underline"
              >
                +971 4 234 5678
              </a>
            </div>
          </div>
        </div>

        {/* Email */}
        <div className="card hover:shadow-lg transition">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-lg bg-orange-100 dark:bg-orange-900 flex-shrink-0">
              <Mail className="text-orange-600" size={24} />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-(--text-primary) mb-1">
                Email
              </h3>
              <p className="text-sm text-(--text-secondary) mb-2">
                Response within 4 hours
              </p>
              <a
                href="mailto:support@aldarexchange.ae"
                className="text-sm font-medium text-(--primary) hover:underline break-all"
              >
                support@aldarexchange.ae
              </a>
            </div>
          </div>
        </div>

        {/* Live Chat */}
        <div className="card hover:shadow-lg transition">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-lg bg-green-100 dark:bg-green-900 flex-shrink-0">
              <MessageCircle className="text-green-600" size={24} />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-(--text-primary) mb-1">
                Live Chat
              </h3>
              <p className="text-sm text-(--text-secondary) mb-3">
                Instant support
              </p>
              <button className="px-4 py-1.5 rounded-lg bg-yellow-500 hover:bg-yellow-600 text-white font-medium text-sm transition">
                Start Chat
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        {/* FAQs */}
        <div className="lg:col-span-2">
          <div className="card">
            <div className="flex items-center gap-2 mb-4">
              <AlertCircle className="text-(--primary)" size={20} />
              <h3 className="text-lg font-bold text-(--text-primary)">
                Frequently Asked Questions
              </h3>
            </div>

            {/* Search */}
            <div className="relative mb-4">
              <Search
                className="absolute left-3 top-1/2 -translate-y-1/2 text-(--text-secondary)"
                size={18}
              />
              <input
                type="text"
                placeholder="Search FAQs..."
                value={searchFAQ}
                onChange={(e) => setSearchFAQ(e.target.value)}
                className="input-primary w-full pl-10"
              />
            </div>

            {/* FAQ List */}
            <div className="space-y-2">
              {faqs.map((faq) => (
                <div
                  key={faq.id}
                  className="border border-(--border) rounded-lg overflow-hidden"
                >
                  <button
                    onClick={() =>
                      setExpandedFAQ(expandedFAQ === faq.id ? null : faq.id)
                    }
                    className="w-full flex items-center justify-between p-4 text-left hover:bg-(--bg-primary) transition"
                  >
                    <span className="font-medium text-(--text-primary)">
                      {faq.question}
                    </span>
                    <ChevronDown
                      size={18}
                      className={`text-(--text-secondary) transition-transform ${
                        expandedFAQ === faq.id ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {expandedFAQ === faq.id && (
                    <div className="px-4 pb-4 pt-0 text-sm text-(--text-secondary)">
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div className="card">
          <h3 className="text-lg font-bold text-(--text-primary) mb-4">
            Quick Links
          </h3>
          <div className="space-y-3">
            {quickLinks.map((link, idx) => (
              <button
                key={idx}
                className="w-full flex items-center gap-3 p-3 rounded-lg border border-(--border) hover:border-(--primary) hover:bg-(--bg-primary) transition text-left group"
              >
                <div className="p-2 rounded-lg bg-(--bg-primary) group-hover:bg-(--primary) group-hover:text-white transition">
                  <link.icon size={18} />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-semibold text-(--text-primary) text-sm mb-0.5">
                    {link.title}
                  </h4>
                  <p className="text-xs text-(--text-secondary)">
                    {link.description}
                  </p>
                </div>
                <ChevronDown
                  className="text-(--text-secondary) -rotate-90"
                  size={16}
                />
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Support Tickets */}
      <div className="card mb-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-bold text-(--text-primary)">
            My Support Tickets
          </h3>
          <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-(--primary) text-white font-medium hover:opacity-90 transition text-sm">
            <Plus size={16} />
            New Ticket
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-(--bg-primary) border-b border-(--border)">
              <tr>
                <th className="px-4 py-3 text-left text-xs font-semibold text-(--text-secondary) uppercase">
                  Ticket
                </th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-(--text-secondary) uppercase">
                  Subject
                </th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-(--text-secondary) uppercase">
                  Status
                </th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-(--text-secondary) uppercase">
                  Created
                </th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-(--text-secondary) uppercase">
                  Last Update
                </th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-(--text-secondary) uppercase">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {tickets.map((ticket) => (
                <tr
                  key={ticket.id}
                  className="border-b border-(--border) hover:bg-(--bg-primary) transition"
                >
                  <td className="px-4 py-4">
                    <span className="text-sm font-medium text-(--primary)">
                      {ticket.id}
                    </span>
                  </td>
                  <td className="px-4 py-4 text-sm text-(--text-primary)">
                    {ticket.subject}
                  </td>
                  <td className="px-4 py-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${ticket.statusColor}`}
                    >
                      {ticket.status}
                    </span>
                  </td>
                  <td className="px-4 py-4 text-sm text-(--text-primary)">
                    {ticket.created}
                  </td>
                  <td className="px-4 py-4 text-sm text-(--text-primary)">
                    {ticket.lastUpdate}
                  </td>
                  <td className="px-4 py-4">
                    <button className="px-4 py-1.5 rounded-lg border border-(--primary) text-(--primary) hover:bg-(--primary) hover:text-white font-medium text-sm transition">
                      View
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Relationship Manager */}
      <div className="card">
        <div className="flex items-start gap-4">
          <div className="w-16 h-16 rounded-full bg-(--primary) text-white flex items-center justify-center font-bold text-2xl flex-shrink-0">
            AM
          </div>
          <div className="flex-1">
            <h3 className="text-sm font-medium text-(--text-secondary) mb-1">
              Your Relationship Manager
            </h3>
            <h2 className="text-xl font-bold text-(--text-primary) mb-2">
              Ahmed Mohammed
            </h2>
            <p className="text-sm text-(--text-secondary) mb-4">
              Senior Corporate Relationship Manager • Available Mon-Fri, 9AM-6PM
            </p>
            <div className="flex gap-3 flex-wrap">
              <a
                href="tel:+971501234567"
                className="flex items-center gap-2 px-4 py-2 rounded-lg border border-(--border) hover:border-(--primary) text-(--text-primary) font-medium text-sm transition"
              >
                <Phone size={16} />
                +971 50 123 4567
              </a>
              <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-(--primary) text-white font-medium text-sm hover:opacity-90 transition">
                <Mail size={16} />
                Email
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
