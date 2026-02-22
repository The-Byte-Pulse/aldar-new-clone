import { useNavigate } from "react-router-dom";

export default function LogoutButton({ isCollapsed, icon }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear(); 
    navigate("/login");  
  };

  return (
    <button
      onClick={handleLogout}
      className="w-full flex items-center gap-3 px-3 py-2 rounded-lg transition duration-200 text-red-500"
      style={{ backgroundColor: "var(--bg-primary)" }}
    >
      {icon}
      {!isCollapsed && <span>Logout</span>}
    </button>
  );
}