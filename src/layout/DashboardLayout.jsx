import { useState } from "react";
import Sidebar from "../components/dashboard/DashboardSidebar";
import Header from "../components/dashboard/DashboardHeader";
import DashboardContent from "../components/dashboard/DashboardContent";
import { Outlet } from "react-router-dom";

const user = {
  name: "John",
  email: "john@example.com",
  company: "ACME Corporation",
  role: "Corporate Admin",
};

export default function DashboardLayout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  const toggleCollapse = () => setIsCollapsed(!isCollapsed);

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <Sidebar
        isOpen={isSidebarOpen}
        setIsOpen={setIsSidebarOpen}
        isCollapsed={isCollapsed}
        user={user}
      />

      {/* Main content */}
      <div className="flex-1 flex flex-col">
        <Header
          user={user}
          toggleSidebar={toggleSidebar}
          toggleCollapse={toggleCollapse}
        />

        <main className="flex-1 min-w-0 p-6 (--bg-primary) overflow-x-hidden overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
}