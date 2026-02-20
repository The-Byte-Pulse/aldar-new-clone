import { useState, useRef, useEffect } from "react";
import {
  LayoutDashboard,
  ArrowLeftRight,
  FileText,
  CreditCard,
  Users,
  Bell,
} from "lucide-react";
import { FiSettings, FiLogOut, FiUser } from "react-icons/fi";
import SidebarMenuItem from "./SiderbarMenuItem";
import { Link } from "react-router-dom";

// Map labels to icons
const iconMap = {
  Dashboard: <LayoutDashboard size={20} />,
  Transactions: <ArrowLeftRight size={20} />,
  Beneficiaries: <Users size={20} />,
  "Bank Accounts": <CreditCard size={20} />,
  "Card Payments": <CreditCard size={20} />,
  Documents: <FileText size={20} />,
  "WPS / Salary": <Users size={20} />,
  Reports: <FileText size={20} />,
  Support: <Users size={20} />,
  "User Management": <Users size={20} />,
  Notifications: <Bell size={20} />,
  Settings: <FiSettings size={20} />,
  "My Profile": <FiUser size={20} />,
  Logout: <FiLogOut size={20} />,
};

export default function Sidebar({ isOpen, setIsOpen, isCollapsed, user }) {
  const [notifOpen, setNotifOpen] = useState(false);
  const notifRef = useRef();
  const sidebarRef = useRef();

  const notifications = [
    "You have a new message",
    "New friend request",
    "New Student added",
  ];

  // Close notifications dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (notifRef.current && !notifRef.current.contains(e.target)) {
        setNotifOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () =>
      document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close sidebar on outside click
  useEffect(() => {
    const handleClickOutsideSidebar = (e) => {
      if (isOpen && sidebarRef.current && !sidebarRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutsideSidebar);
    return () =>
      document.removeEventListener("mousedown", handleClickOutsideSidebar);
  }, [isOpen, setIsOpen]);

  const menuItems = [
    { label: "Dashboard" },
    {
      label: "Transactions",
      subMenu: ["All Transactions", "Create Transaction", "Pending Approvals"],
    },
    { label: "Beneficiaries" },
    { label: "Bank Accounts" },
    { label: "Card Payments" },
    { label: "Documents" },
    { label: "Notifications" },
    {
      label: "WPS / Salary",
      subMenu: ["WPS Overview", "Upload Salary File", "Batch History"],
    },
    {
      label: "Reports",
      subMenu: ["All Reports", "Statements", "Free Reports", "E-Receipts"],
    },
    { label: "Support" },
    { label: "User Management" },
  ];

  return (
    <>
      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 z-30 md:hidden"
          style={{ backgroundColor: "rgba(0,0,0,0.4)" }}
          onClick={() => setIsOpen(false)}
        />
      )}

      <aside
        ref={sidebarRef}
        style={{
          backgroundColor: "var(--bg-surface)",
          color: "var(--text-primary)",
          borderRight: "1px solid var(--border)",
        }}
        className={`fixed md:static z-40 top-0 left-0 h-screen transition-all duration-300 flex flex-col
        ${isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}
        ${isCollapsed ? "md:w-20" : "md:w-72"} w-72`}
      >
        {/* BRAND */}
        <div
          className="p-4 border-b"
          style={{ borderColor: "var(--border)" }}
        >
          {!isCollapsed && (
            <>
              <h1 className="text-lg font-semibold">Al Dar</h1>
              <p style={{ color: "var(--text-secondary)" }} className="text-xs">
                Exchange Portal
              </p>
            </>
          )}
        </div>

        {/* USER */}
        <div
          className="px-4 py-3 border-b flex items-center gap-3"
          style={{ borderColor: "var(--border)" }}
        >
          <div
            className="w-10 h-10 rounded-full flex items-center justify-center font-bold"
            style={{ backgroundColor: "var(--primary)", color: "#fff" }}
          >
            {user?.name?.charAt(0) || "U"}
          </div>
          {!isCollapsed && (
            <div className="flex flex-col text-sm">
              <span className="font-semibold">{user?.name || "AC"}</span>
              <span style={{ color: "var(--text-secondary)" }}>
                {user?.company || "ACME Corporation"}
              </span>
              <span
                className="text-xs"
                style={{ color: "var(--text-secondary)" }}
              >
                {user?.role || "Corporate Admin"}
              </span>
            </div>
          )}
        </div>

        {/* MENU */}
        <nav
          className="scrollbar-custom h-full overflow-y-auto p-4"
          style={{
            backgroundColor: "var(--bg-surface)",
          }}
        >
          {menuItems.map((item, idx) => (
            <SidebarMenuItem
              key={idx}
              icon={iconMap[item.label] || <Users size={20} />}
              label={item.label}
              collapsed={isCollapsed}
              subMenu={item.subMenu}
            />
          ))}
        </nav>

        {/* ACCOUNT SECTION */}
        <div
          className="border-t p-3 space-y-2"
          style={{ borderColor: "var(--border)" }}
        >
          <p
            className="text-xs uppercase px-2"
            style={{ color: "var(--text-secondary)" }}
          >
            Account
          </p>

          <Link
            to="/dashboard/profile"
            className="w-full flex items-center gap-3 px-3 py-2 rounded-lg transition duration-200"
            style={{ backgroundColor: "var(--bg-primary)" }}
          >
            {iconMap["My Profile"]}
            {!isCollapsed && "My Profile"}
          </Link>

          <Link
            to="/dashboard/setting"
            className="w-full flex items-center gap-3 px-3 py-2 rounded-lg transition duration-200"
            style={{ backgroundColor: "var(--bg-primary)" }}
          >
            {iconMap["Settings"]}
            {!isCollapsed && <span>Settings</span>}
          </Link>

          <button
            className="w-full flex items-center gap-3 px-3 py-2 rounded-lg transition duration-200 text-red-500"
            style={{ backgroundColor: "var(--bg-primary)" }}
          >
            {iconMap["Logout"]}
            {!isCollapsed && <span>Logout</span>}
          </button>
        </div>
      </aside>
    </>
  );
}