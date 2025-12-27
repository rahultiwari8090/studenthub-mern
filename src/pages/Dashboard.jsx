import Students from "./Students";
import { useAuth } from "../context/AuthContext";

const Dashboard = () => {
  const { user, logout } = useAuth();

  return (
    <div className="dashboard">
      {/* Header */}
      <div className="dashboard-header">
        <h2>Dashboard</h2>
        <button className="logout-btn" onClick={logout}>
          Logout
        </button>
      </div>

      {/* Welcome text */}
      <p style={{ marginBottom: 20 }}>
        Welcome, <b>{user?.name}</b> ({user?.role})
      </p>

      {/* Students CRUD */}
      <Students />
    </div>
  );
};

export default Dashboard;
