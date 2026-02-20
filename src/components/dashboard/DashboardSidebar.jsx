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
  "Dashboard": <LayoutDashboard size={20} />,
  "Transactions": <ArrowLeftRight size={20} />,
  "Beneficiaries": <Users size={20} />,
  "Bank Accounts": <CreditCard size={20} />,
  "Card Payments": <CreditCard size={20} />,
  "Documents": <FileText size={20} />,
  "WPS / Salary": <Users size={20} />,
  "Reports": <FileText size={20} />,
  "Support": <Users size={20} />,
  "User Management": <Users size={20} />,
  "Notifications": <Bell size={20} />,
  "Settings": <FiSettings size={20} />,
  "My Profile": <FiUser size={20} />,
  "Logout": <FiLogOut size={20} />,
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
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close sidebar on outside click
  useEffect(() => {
    const handleClickOutsideSidebar = (e) => {
      if (
        isOpen &&
        sidebarRef.current &&
        !sidebarRef.current.contains(e.target)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutsideSidebar);
    return () => document.removeEventListener("mousedown", handleClickOutsideSidebar);
  }, [isOpen, setIsOpen]);

  const menuItems = [
    { label: "Dashboard" },
    { label: "Transactions", subMenu: ["All Transactions", "Create Transaction", "Pending Approvals"] },
    { label: "Beneficiaries" },
    { label: "Bank Accounts" },
    { label: "Card Payments" },
    { label: "Documents" },
     { label: "Notifications" },
    { label: "WPS / Salary", subMenu: ["WPS Overview", "Upload Salary File", "Batch History"] },
    { label: "Reports", subMenu: ["All Reports", "Statements", "Free Reports", "E-Receipts"] },
    { label: "Support" },
    { label: "User Management" },
  ];

  return (
    <>
      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-30 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      <aside
        ref={sidebarRef}
        className={`
          fixed md:static z-40 top-0 left-0 h-screen
          bg-(--bg-surface)
          text-(--text-primary)
          border-r border-(--border)
          transition-all duration-300 flex flex-col
          ${isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}
          ${isCollapsed ? "md:w-20" : "md:w-72"} w-72
        `}
      >
        {/* BRAND */}
        <div className="p-4 border-b border-(--border)">
          {!isCollapsed && (
            <>
              <h1 className="text-lg font-semibold">Al Dar</h1>
              <p className="text-xs text-(--text-secondary)">Exchange Portal</p>
            </>
          )}
        </div>

        {/* USER */}
        <div className="px-4 py-3 border-b border-(--border) flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-(--primary) text-white flex items-center justify-center font-bold">
            {user?.name?.charAt(0) || "U"}
          </div>
          {!isCollapsed && (
            <div className="flex flex-col text-sm">
              <span className="font-semibold">{user?.name || "AC"}</span>
              <span className="text-(--text-secondary)">{user?.company || "ACME Corporation"}</span>
              <span className="text-xs text-(--text-secondary)">{user?.role || "Corporate Admin"}</span>
            </div>
          )}
        </div>

        {/* MENU */}
        <nav className="flex-1 px-2 py-4 space-y-2 overflow-y-auto scrollbar-none">
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
        <div className="border-t border-(--border) p-3 space-y-2">
          <p className="text-xs uppercase text-(--text-secondary) px-2">Account</p>

          {/* <div className="relative" ref={notifRef}>
            <button
              onClick={() => setNotifOpen(!notifOpen)}
              className="relative w-full flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-(--bg-primary) transition"
            >
              {iconMap["Notifications"]}
              {!isCollapsed && <span>Notifications</span>}
              {notifications.length > 0 && (
                <span className="absolute right-3 top-2 text-xs bg-red-500 text-white px-1.5 rounded-full">
                  {notifications.length}
                </span>
              )}
            </button>

            {notifOpen && !isCollapsed && (
              <div className="absolute bottom-full mb-2 left-0 w-64 bg-(--bg-surface) border border-(--border) rounded-lg shadow-lg p-3 z-50 max-h-64 overflow-y-auto">
                {notifications.map((n, i) => (
                  <div
                    key={i}
                    className="py-2 px-3 rounded-lg hover:bg-(--bg-primary) text-sm cursor-pointer"
                  >
                    {n}
                  </div>
                ))}
              </div>
            )}
          </div> */}
            <Link
            to="/dashboard/profile"
            className="w-full flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-(--bg-primary) transition"
              >
               {iconMap["My Profile"]}
            {!isCollapsed && "My Profile"}
          </Link>
          <Link
  to="/dashboard/setting"
  className="w-full flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-(--bg-primary) transition duration-200"
>
  {iconMap["Settings"]}
  {!isCollapsed && <span>Settings</span>}
</Link>
          <button
  // onClick={handleLogout}
  className="w-full flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-red-100 dark:hover:bg-red-900 text-red-500 transition duration-200"
>
  {iconMap["Logout"]}
  {!isCollapsed && <span>Logout</span>}
</button>

        </div>
      </aside>
    </>
  );
}
