import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";

// Menu label ko route path se map karo
const labelToPath = {
  Dashboard: "/dashboard",
  Transactions: "/dashboard/transactions",
  Beneficiaries: "/dashboard/beneficiaries",
  "Bank Accounts": "/dashboard/bank-accounts",
  "Card Payments": "/dashboard/card-payments",
  Documents: "/dashboard/documents",
  "WPS / Salary": "/dashboard/wps-salary",
  Reports: "/dashboard/reports",
  Support: "/dashboard/support",
  "User Management": "/dashboard/user-management",
  Notifications: "/dashboard/notifications",
  "My Profile": "/dashboard/profile",
  Settings: "/dashboard/setting",
};

const subMenuToPath = {
  "All Transactions": "/dashboard/transactions",
  "Create Transaction": "/dashboard/transactions/create",
  "Pending Approvals": "/dashboard/transactions/pending",
  "WPS Overview": "/dashboard/wps-salary",
  "Upload Salary File": "/dashboard/wps-salary/upload",
  "Batch History": "/dashboard/wps-salary/history",
  "All Reports": "/dashboard/reports",
  Statements: "/dashboard/reports/statements",
  "Free Reports": "/dashboard/reports/free",
  "E-Receipts": "/dashboard/reports/e-receipts",
};

export default function SidebarMenuItem({ icon, label, collapsed, subMenu }) {
  const location = useLocation();
  const navigate = useNavigate();

  const itemPath = labelToPath[label];

  // Active check: current URL matches item path
  const isActive =
    label === "Dashboard"
      ? location.pathname === "/dashboard"
      : location.pathname.startsWith(itemPath || "__none__");

  const [open, setOpen] = useState(isActive && subMenu?.length > 0);

  const handleClick = () => {
    if (subMenu?.length > 0) {
      setOpen(!open);
    } else if (itemPath) {
      navigate(itemPath);
    }
  };

  return (
    <div>
      <button
        onClick={handleClick}
        className={`flex items-center justify-between w-full px-3 py-2 rounded-lg transition ${
          isActive
            ? "bg-(--primary) text-white"
            : "hover:bg-(--bg-primary) text-(--text-primary)"
        }`}
      >
        <div className="flex items-center gap-3">
          {icon}
          {!collapsed && <span>{label}</span>}
        </div>

        {/* Arrow only if submenu exists */}
        {!collapsed && subMenu?.length > 0 && (
          <ChevronDown
            size={16}
            className={`transition-transform ${open ? "rotate-180" : ""}`}
          />
        )}
      </button>

      {/* Submenu */}
      {!collapsed && open && subMenu?.length > 0 && (
        <div className="ml-8 mt-1 flex flex-col space-y-1">
          {subMenu.map((item, index) => {
            const subPath = subMenuToPath[item];
            const isSubActive = subPath && location.pathname === subPath;

            return (
              <button
                key={index}
                onClick={() => subPath && navigate(subPath)}
                className={`flex w-full px-3 py-2 text-sm rounded-lg transition ${
                  isSubActive
                    ? "bg-(--primary) text-white font-medium"
                    : "hover:bg-(--bg-primary) text-(--text-primary)"
                }`}
              >
                {item}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
