import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import useUser from "../hooks/useUser";

const AdminRoute = ({ children }) => {

  const [users] = useUser();
  const { user, loading } = useAuth();
  if (loading) {
    return (
      <div className="flex items-center justify-center space-x-2 h-screen">
        <div className="w-4 h-4 rounded-full animate-pulse dark:bg-violet-600"></div>
        <div className="w-4 h-4 rounded-full animate-pulse dark:bg-violet-600"></div>
        <div className="w-4 h-4 rounded-full animate-pulse dark:bg-violet-600"></div>
      </div>
    );
  }

  if ((user && users?.role == "admin") || users?.role == "volunteer") {
    return children;
  }

  return <Navigate to="/login"></Navigate>;
};

export default AdminRoute;
