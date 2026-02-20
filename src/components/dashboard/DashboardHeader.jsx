import { useState, useRef, useEffect } from "react";
import { FiSearch, FiBell, FiSettings, FiLogOut, FiUser } from "react-icons/fi";
import { Link } from "react-router-dom";
import ThemeSwitcher from "../theme/ThemeSwticher";

export default function Header({ user, toggleSidebar }) {
  const [openAvatar, setOpenAvatar] = useState(false);
  const [openNotif, setOpenNotif] = useState(false);

  const avatarRef = useRef(null);
  const notifRef = useRef(null);

  const firstLetter = user?.name?.charAt(0).toUpperCase() || "?";

  const notifications = [
    "You have a new message",
    "New friend request",
    "New Student added",
  ];

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (avatarRef.current && !avatarRef.current.contains(event.target)) {
        setOpenAvatar(false);
      }
      if (notifRef.current && !notifRef.current.contains(event.target)) {
        setOpenNotif(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () =>
      document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="flex items-center justify-between px-6 py-4 border-b bg-(--bg-primary)">
      {/* LEFT SECTION */}
      <div className="flex items-center gap-4">
        {/* Mobile Sidebar Toggle */}
        <button
          className="md:hidden p-2 rounded-lg bg-(--primary) text-white"
          onClick={toggleSidebar}
        >
          ☰
        </button>

        <div>
          <h1 className="text-xl font-semibold text-(--text-primary)">
            Welcome back, {user?.name || "User"}
          </h1>
          <p className="text-sm text-(--text-secondary)">
            {user?.company || "ACME Corp"} • {user?.role || "Admin"}
          </p>
        </div>
      </div>

      {/* RIGHT SECTION */}
      <div className="flex items-center gap-4">
        {/* SEARCH */}
        <div className="relative hidden md:block">
          <input
            type="text"
            placeholder="Search..."
            className="pl-10 pr-4 py-2 rounded-lg border border-(--border) bg-(--bg-surface) text-(--text-primary) text-sm focus:outline-none focus:ring-2 focus:ring-(--primary)"
          />
          <FiSearch className="absolute left-3 top-3 text-(--text-secondary)" />
        </div>

        {/* NOTIFICATIONS */}
        <div className="relative" ref={notifRef}>
          <button
            onClick={() => setOpenNotif((prev) => !prev)}
            className="relative p-2 rounded-lg hover:bg-(--bg-surface) transition-colors"
          >
            <FiBell className="text-(--text-primary)" />
            {notifications.length > 0 && (
              <span className="absolute -top-1 -right-1 inline-flex items-center justify-center px-1.5 py-0.5 text-xs font-bold text-white bg-red-500 rounded-full">
                {notifications.length}
              </span>
            )}
          </button>

          {openNotif && (
            <div className="absolute right-0 mt-2 w-64 bg-(--bg-surface) border border-(--border) rounded-xl shadow-lg p-3 z-50 max-h-64 overflow-y-auto">
              <h2 className="font-semibold mb-2 text-(--text-primary)">
                Notifications
              </h2>
              {notifications.map((n, idx) => (
                <div
                  key={idx}
                  className="text-sm py-2 px-3 rounded-lg hover:bg-(--bg-primary) cursor-pointer text-(--text-primary) transition-colors"
                >
                  {n}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* SETTINGS LINK */}
        <Link
          to="/dashboard/setting"
          className="p-2 rounded-lg hover:bg-(--bg-surface) transition-colors"
        >
          <FiSettings className="text-(--text-primary)" />
        </Link>

        {/* AVATAR DROPDOWN */}
        <div className="relative" ref={avatarRef}>
          <button
            onClick={() => setOpenAvatar((prev) => !prev)}
            className="w-10 h-10 rounded-full bg-(--primary) text-white flex items-center justify-center font-bold"
          >
            {firstLetter}
          </button>

          {openAvatar && (
            <div className="absolute right-0 mt-3 w-56 bg-(--bg-surface) border border-(--border) rounded-xl shadow-lg p-3 z-50">
              <div className="mb-3">
                <p className="font-semibold text-(--text-primary)">
                  {user?.name}
                </p>
                <p className="text-sm text-(--text-secondary)">
                  {user?.email}
                </p>
              </div>

              <hr className="border-(--border) mb-2" />

              <Link
                to="/dashboard/profile"
                className="flex items-center gap-2 w-full px-3 py-2 rounded-lg hover:bg-(--bg-primary)"
              >
                <FiUser /> My Profile
              </Link>

              <Link
                to="/dashboard/setting"
                className="flex items-center gap-2 w-full px-3 py-2 rounded-lg hover:bg-(--bg-primary)"
              >
                <FiSettings /> Settings
              </Link>

              {/* Theme Switcher */}
              <ThemeSwitcher />

              <button className="flex items-center gap-2 w-full px-3 py-2 rounded-lg text-red-500 hover:bg-red-100 dark:hover:bg-red-900">
                <FiLogOut /> Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
