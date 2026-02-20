import { useState } from "react";
import {
  Bell,
  CheckCircle,
  XCircle,
  Shield,
  CreditCard,
  UserPlus,
  AlertTriangle,
  Clock,
  FileText,
  X,
} from "lucide-react";

export default function Notifications() {
  const [activeTab, setActiveTab] = useState("all");
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      type: "success",
      icon: CheckCircle,
      iconBg: "bg-green-100 dark:bg-green-900",
      iconColor: "text-green-600",
      borderColor: "border-l-green-500",
      title: "Transaction Approved",
      message: "Transaction #TXN-002 has been approved by Jane Smith",
      time: "2 hours ago",
      unread: true,
    },
    {
      id: 2,
      type: "error",
      icon: XCircle,
      iconBg: "bg-red-100 dark:bg-red-900",
      iconColor: "text-red-600",
      borderColor: "border-l-red-500",
      title: "Document Rejected",
      message:
        "Address Proof document has been rejected. Please review feedback and resubmit.",
      time: "1 day ago",
      unread: true,
    },
    {
      id: 3,
      type: "info",
      icon: Shield,
      iconBg: "bg-blue-100 dark:bg-blue-900",
      iconColor: "text-blue-600",
      borderColor: "border-l-blue-500",
      title: "Compliance Review",
      message:
        "Your registration is under compliance review. Onsite visit may be scheduled.",
      time: "2 days ago",
      unread: false,
    },
    {
      id: 4,
      type: "success",
      icon: CreditCard,
      iconBg: "bg-green-100 dark:bg-green-900",
      iconColor: "text-green-600",
      borderColor: "border-l-green-500",
      title: "Payment Received",
      message:
        "Payment of $25,000 has been successfully processed for Transaction #TXN-002",
      time: "3 days ago",
      unread: false,
    },
    {
      id: 5,
      type: "info",
      icon: UserPlus,
      iconBg: "bg-purple-100 dark:bg-purple-900",
      iconColor: "text-purple-600",
      borderColor: "border-l-purple-500",
      title: "New User Added",
      message: 'User "Mike Johnson" has been added to your account as Inputter',
      time: "4 days ago",
      unread: false,
    },
    {
      id: 6,
      type: "info",
      icon: Shield,
      iconBg: "bg-blue-100 dark:bg-blue-900",
      iconColor: "text-blue-600",
      borderColor: "border-l-blue-500",
      title: "System Maintenance",
      message:
        "Scheduled maintenance will occur on January 25, 2024 from 2:00 AM to 4:00 AM",
      time: "5 days ago",
      unread: false,
    },
    {
      id: 7,
      type: "warning",
      icon: Clock,
      iconBg: "bg-yellow-100 dark:bg-yellow-900",
      iconColor: "text-yellow-600",
      borderColor: "border-l-yellow-500",
      title: "Transaction Pending Approval",
      message: "Transaction #TXN-001 is pending your approval",
      time: "6 days ago",
      unread: false,
    },
    {
      id: 8,
      type: "success",
      icon: FileText,
      iconBg: "bg-green-100 dark:bg-green-900",
      iconColor: "text-green-600",
      borderColor: "border-l-green-500",
      title: "Document Approved",
      message: "Trade License document has been approved by Compliance Officer",
      time: "1 week ago",
      unread: false,
    },
  ]);

  const stats = {
    total: 8,
    unread: 3,
    read: 5,
    today: 1,
  };

  const filteredNotifications = notifications.filter((notif) => {
    if (activeTab === "all") return true;
    if (activeTab === "unread") return notif.unread;
    if (activeTab === "read") return !notif.unread;
    return true;
  });

  const markAllAsRead = () => {
    setNotifications(notifications.map((n) => ({ ...n, unread: false })));
  };

  const removeNotification = (id) => {
    setNotifications(notifications.filter((n) => n.id !== id));
  };

  return (
    <div className="min-h-screen bg-(--bg-primary) p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-(--text-primary) mb-1">
            Notifications
          </h1>
          <p className="text-sm text-(--text-secondary)">
            Stay updated with all platform activities
          </p>
        </div>
        <button
          onClick={markAllAsRead}
          className="px-4 py-2 rounded-lg border border-(--border) bg-(--bg-surface) hover:bg-(--bg-primary) text-(--text-primary) font-medium transition text-sm"
        >
          Mark All as Read
        </button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <div className="card flex items-center gap-4">
          <div className="p-3 rounded-lg bg-blue-100 dark:bg-blue-900">
            <Bell className="text-blue-600" size={24} />
          </div>
          <div>
            <p className="text-sm text-(--text-secondary) mb-1">
              Total Notifications
            </p>
            <h3 className="text-2xl font-bold text-(--text-primary)">
              {stats.total}
            </h3>
          </div>
        </div>

        <div className="card flex items-center gap-4">
          <div className="p-3 rounded-lg bg-yellow-100 dark:bg-yellow-900">
            <Clock className="text-yellow-600" size={24} />
          </div>
          <div>
            <p className="text-sm text-(--text-secondary) mb-1">Unread</p>
            <h3 className="text-2xl font-bold text-(--text-primary)">
              {stats.unread}
            </h3>
          </div>
        </div>

        <div className="card flex items-center gap-4">
          <div className="p-3 rounded-lg bg-green-100 dark:bg-green-900">
            <CheckCircle className="text-green-600" size={24} />
          </div>
          <div>
            <p className="text-sm text-(--text-secondary) mb-1">Read</p>
            <h3 className="text-2xl font-bold text-(--text-primary)">
              {stats.read}
            </h3>
          </div>
        </div>

        <div className="card flex items-center gap-4">
          <div className="p-3 rounded-lg bg-purple-100 dark:bg-purple-900">
            <Clock className="text-purple-600" size={24} />
          </div>
          <div>
            <p className="text-sm text-(--text-secondary) mb-1">Today</p>
            <h3 className="text-2xl font-bold text-(--text-primary)">
              {stats.today}
            </h3>
          </div>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex gap-2 mb-6">
        <button
          onClick={() => setActiveTab("all")}
          className={`px-4 py-2 rounded-lg font-medium text-sm transition ${
            activeTab === "all"
              ? "bg-(--primary) text-white"
              : "bg-(--bg-surface) border border-(--border) text-(--text-primary) hover:border-(--primary)"
          }`}
        >
          All
        </button>
        <button
          onClick={() => setActiveTab("unread")}
          className={`px-4 py-2 rounded-lg font-medium text-sm transition ${
            activeTab === "unread"
              ? "bg-(--primary) text-white"
              : "bg-(--bg-surface) border border-(--border) text-(--text-primary) hover:border-(--primary)"
          }`}
        >
          Unread ({stats.unread})
        </button>
        <button
          onClick={() => setActiveTab("read")}
          className={`px-4 py-2 rounded-lg font-medium text-sm transition ${
            activeTab === "read"
              ? "bg-(--primary) text-white"
              : "bg-(--bg-surface) border border-(--border) text-(--text-primary) hover:border-(--primary)"
          }`}
        >
          Read
        </button>
      </div>

      {/* Notifications List */}
      <div className="space-y-3">
        {filteredNotifications.map((notif) => (
          <div
            key={notif.id}
            className={`card border-l-4 ${notif.borderColor} ${
              notif.unread ? "bg-blue-50/50 dark:bg-blue-950/20" : ""
            } hover:shadow-md transition relative group`}
          >
            <div className="flex items-start gap-4">
              {/* Icon */}
              <div className={`p-2.5 rounded-lg ${notif.iconBg} flex-shrink-0`}>
                <notif.icon className={notif.iconColor} size={20} />
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-2 mb-1">
                  <h4 className="font-semibold text-(--text-primary)">
                    {notif.title}
                  </h4>
                  <button
                    onClick={() => removeNotification(notif.id)}
                    className="p-1 rounded-lg hover:bg-(--bg-primary) text-(--text-secondary) hover:text-red-600 transition opacity-0 group-hover:opacity-100"
                  >
                    <X size={16} />
                  </button>
                </div>
                <p className="text-sm text-(--text-secondary) mb-2">
                  {notif.message}
                </p>
                <p className="text-xs text-(--text-secondary)">{notif.time}</p>
              </div>

              {/* Unread indicator */}
              {notif.unread && (
                <div className="w-2 h-2 rounded-full bg-(--primary) flex-shrink-0 mt-2"></div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
