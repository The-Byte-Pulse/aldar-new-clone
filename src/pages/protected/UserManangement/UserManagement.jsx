import { useState } from "react";
import {
  Users,
  Plus,
  Search,
  Calendar,
  Copy,
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from "lucide-react";

export default function UserManagement() {
  const [filters, setFilters] = useState({
    keyword: "",
    email: "",
    userName: "",
    status: "",
    accountStatus: "",
    roleId: "",
    roleName: "",
    sortBy: "",
    sortOrder: "descending",
    createdFrom: "",
    createdTo: "",
    lastLoginFrom: "",
    lastLoginTo: "",
  });

  const users = [
    {
      userId: "52f0c...e2a4",
      firstName: "Barry",
      lastName: "Banks",
      email: "tide@mailinator.com",
      role: "Inputter",
      status: "Approved",
      lastLogin: "19/02/2024",
    },
    {
      userId: "69b99...ba11",
      firstName: "Venus",
      lastName: "Hickman",
      email: "maburuhoha@mailinator.com",
      role: "Approver",
      status: "Approved",
      lastLogin: "19/02/2024",
    },
    {
      userId: "9203b...27a2",
      firstName: "Jimenez Hayden",
      lastName: "Associates",
      email: "alisameer52718@gmail.com",
      role: "Admin",
      status: "Approved",
      lastLogin: "19/02/2024",
    },
  ];

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <div className="min-h-screen bg-(--bg-primary) p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-(--text-primary) mb-1">
            User Management
          </h1>
          <p className="text-sm text-(--text-secondary)">
            Manage team members and their access levels
          </p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-(--primary) text-white font-medium hover:opacity-90 transition">
          <Plus size={18} />
          Add User
        </button>
      </div>

      {/* Role Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
        <div className="card">
          <p className="text-sm text-(--text-secondary) mb-1">Inputter</p>
          <h3 className="text-3xl font-bold text-(--text-primary)">1</h3>
        </div>
        <div className="card">
          <p className="text-sm text-(--text-secondary) mb-1">Approver</p>
          <h3 className="text-3xl font-bold text-(--text-primary)">1</h3>
        </div>
      </div>

      {/* Info Banner */}
      <div className="mb-6 p-4 rounded-xl bg-blue-50 dark:bg-blue-950 border border-blue-200 dark:border-blue-800 flex items-start gap-3">
        <div className="p-1.5 rounded-full bg-blue-100 dark:bg-blue-900 flex-shrink-0">
          <svg
            className="w-4 h-4 text-blue-600"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <div>
          <h3 className="font-semibold text-blue-800 dark:text-blue-200 mb-1">
            Maker-Checker Workflow:
          </h3>
          <p className="text-sm text-blue-700 dark:text-blue-300">
            Makers can create transactions but cannot approve them. Checkers
            can approve or reject transactions created by Makers.
          </p>
        </div>
      </div>

      {/* Filters */}
      <div className="card mb-6">
        <h3 className="text-lg font-bold text-(--text-primary) mb-4">
          Filters
        </h3>

        {/* Row 1 */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
          <div>
            <label className="block text-sm font-medium text-(--text-secondary) mb-2">
              Keyword
            </label>
            <input
              type="text"
              placeholder="Search..."
              value={filters.keyword}
              onChange={(e) =>
                setFilters({ ...filters, keyword: e.target.value })
              }
              className="input-primary w-full"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-(--text-secondary) mb-2">
              Email
            </label>
            <input
              type="text"
              placeholder="Email"
              value={filters.email}
              onChange={(e) => setFilters({ ...filters, email: e.target.value })}
              className="input-primary w-full"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-(--text-secondary) mb-2">
              User Name
            </label>
            <input
              type="text"
              placeholder="User name"
              value={filters.userName}
              onChange={(e) =>
                setFilters({ ...filters, userName: e.target.value })
              }
              className="input-primary w-full"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-(--text-secondary) mb-2">
              Status
            </label>
            <input
              type="text"
              placeholder="Status"
              value={filters.status}
              onChange={(e) =>
                setFilters({ ...filters, status: e.target.value })
              }
              className="input-primary w-full"
            />
          </div>
        </div>

        {/* Row 2 */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
          <div>
            <label className="block text-sm font-medium text-(--text-secondary) mb-2">
              Account Status
            </label>
            <input
              type="text"
              placeholder="Account status"
              value={filters.accountStatus}
              onChange={(e) =>
                setFilters({ ...filters, accountStatus: e.target.value })
              }
              className="input-primary w-full"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-(--text-secondary) mb-2">
              Role ID
            </label>
            <input
              type="text"
              placeholder="Role ID"
              value={filters.roleId}
              onChange={(e) =>
                setFilters({ ...filters, roleId: e.target.value })
              }
              className="input-primary w-full"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-(--text-secondary) mb-2">
              Role Name
            </label>
            <input
              type="text"
              placeholder="Role name"
              value={filters.roleName}
              onChange={(e) =>
                setFilters({ ...filters, roleName: e.target.value })
              }
              className="input-primary w-full"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-(--text-secondary) mb-2">
              Sort By
            </label>
            <input
              type="text"
              placeholder="e.g. createdOn, userName"
              value={filters.sortBy}
              onChange={(e) =>
                setFilters({ ...filters, sortBy: e.target.value })
              }
              className="input-primary w-full"
            />
          </div>
        </div>

        {/* Row 3 */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          <div>
            <label className="block text-sm font-medium text-(--text-secondary) mb-2">
              Sort Order
            </label>
            <select
              value={filters.sortOrder}
              onChange={(e) =>
                setFilters({ ...filters, sortOrder: e.target.value })
              }
              className="input-primary w-full"
            >
              <option value="descending">Descending</option>
              <option value="ascending">Ascending</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-(--text-secondary) mb-2">
              Created From
            </label>
            <div className="relative">
              <input
                type="text"
                placeholder="Select date"
                value={filters.createdFrom}
                onChange={(e) =>
                  setFilters({ ...filters, createdFrom: e.target.value })
                }
                className="input-primary w-full pr-10"
              />
              <Calendar
                className="absolute right-3 top-1/2 -translate-y-1/2 text-(--text-secondary)"
                size={18}
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-(--text-secondary) mb-2">
              Created To
            </label>
            <div className="relative">
              <input
                type="text"
                placeholder="Select date"
                value={filters.createdTo}
                onChange={(e) =>
                  setFilters({ ...filters, createdTo: e.target.value })
                }
                className="input-primary w-full pr-10"
              />
              <Calendar
                className="absolute right-3 top-1/2 -translate-y-1/2 text-(--text-secondary)"
                size={18}
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-(--text-secondary) mb-2">
              Last Login From
            </label>
            <div className="relative">
              <input
                type="text"
                placeholder="Select date"
                value={filters.lastLoginFrom}
                onChange={(e) =>
                  setFilters({ ...filters, lastLoginFrom: e.target.value })
                }
                className="input-primary w-full pr-10"
              />
              <Calendar
                className="absolute right-3 top-1/2 -translate-y-1/2 text-(--text-secondary)"
                size={18}
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-(--text-secondary) mb-2">
              Last Login To
            </label>
            <div className="relative">
              <input
                type="text"
                placeholder="Select date"
                value={filters.lastLoginTo}
                onChange={(e) =>
                  setFilters({ ...filters, lastLoginTo: e.target.value })
                }
                className="input-primary w-full pr-10"
              />
              <Calendar
                className="absolute right-3 top-1/2 -translate-y-1/2 text-(--text-secondary)"
                size={18}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Users Table */}
      <div className="card">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-(--bg-primary) border-b-2 border-(--border)">
              <tr>
                <th className="px-4 py-3 text-left text-xs font-semibold text-(--text-secondary) uppercase">
                  User ID ⇅
                </th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-(--text-secondary) uppercase">
                  First Name ⇅
                </th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-(--text-secondary) uppercase">
                  Last Name ⇅
                </th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-(--text-secondary) uppercase">
                  Email ⇅
                </th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-(--text-secondary) uppercase">
                  Role ⇅
                </th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-(--text-secondary) uppercase">
                  Status ⇅
                </th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-(--text-secondary) uppercase">
                  Last Login ⇅
                </th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, idx) => (
                <tr
                  key={idx}
                  className="border-b border-(--border) hover:bg-(--bg-primary) transition"
                >
                  <td className="px-4 py-4">
                    <button
                      onClick={() => copyToClipboard(user.userId)}
                      className="flex items-center gap-2 text-sm text-(--text-primary) hover:text-(--primary) transition"
                    >
                      {user.userId}
                      <Copy size={14} />
                    </button>
                  </td>
                  <td className="px-4 py-4 text-sm text-(--text-primary)">
                    {user.firstName}
                  </td>
                  <td className="px-4 py-4 text-sm text-(--text-primary)">
                    {user.lastName}
                  </td>
                  <td className="px-4 py-4 text-sm text-(--text-primary)">
                    {user.email}
                  </td>
                  <td className="px-4 py-4 text-sm text-(--text-primary)">
                    {user.role}
                  </td>
                  <td className="px-4 py-4 text-sm text-(--text-primary)">
                    {user.status}
                  </td>
                  <td className="px-4 py-4 text-sm text-(--text-primary)">
                    {user.lastLogin}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-between mt-4 pt-4 border-t border-(--border)">
          <p className="text-sm text-(--text-secondary)">
            Showing 1 to 3 of 3 results
          </p>
          <div className="flex items-center gap-2">
            <button className="p-2 rounded-lg border border-(--border) hover:bg-(--bg-primary) text-(--text-secondary) transition">
              <ChevronsLeft size={16} />
            </button>
            <button className="p-2 rounded-lg border border-(--border) hover:bg-(--bg-primary) text-(--text-secondary) transition">
              <ChevronLeft size={16} />
            </button>
            <span className="px-4 py-2 text-sm text-(--text-primary)">
              Page 1 of 1
            </span>
            <button className="p-2 rounded-lg border border-(--border) hover:bg-(--bg-primary) text-(--text-secondary) transition">
              <ChevronRight size={16} />
            </button>
            <button className="p-2 rounded-lg border border-(--border) hover:bg-(--bg-primary) text-(--text-secondary) transition">
              <ChevronsRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}