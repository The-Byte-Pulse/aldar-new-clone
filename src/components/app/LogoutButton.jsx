import { FiLogOut } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
const LogoutButton = ({ isCollapsed }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    sessionStorage.clear();
    navigate("/login");
  };

  return (
    <button
      onClick={handleLogout}
      className="w-full flex items-center gap-3 px-3 py-2 rounded-lg transition duration-200  cursor-pointer text-red-700"
      style={{ backgroundColor: "var(--bg-primary)" }}
    >
      <FiLogOut /> 
      {!isCollapsed && <span>Logout</span>}
    </button>
  );
};

export default LogoutButton;