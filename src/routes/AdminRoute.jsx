import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import useUser from "../hooks/useUser";

const AdminRoute = ({ children }) => {
  const [users, refetch, isLoading] = useUser();
  const { user } = useAuth();
  if (isLoading) {
    return (
      <div className="flex items-center justify-center space-x-2 h-screen">
        <div className="w-4 h-4 rounded-full animate-pulse dark:bg-violet-600"></div>
        <div className="w-4 h-4 rounded-full animate-pulse dark:bg-violet-600"></div>
        <div className="w-4 h-4 rounded-full animate-pulse dark:bg-violet-600"></div>
      </div>
    );
  }
  // console.log(users?.role);
  if (
    (user && users?.role == "admin") ||
    (user && users?.role == "volunteer")
  ) {
    return children;
  }

  return <Navigate to="/login"></Navigate>;
};

export default AdminRoute;
