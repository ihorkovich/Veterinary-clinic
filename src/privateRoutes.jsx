import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

export const APrivateRoutes = () => {
  const role = useSelector((state) => state.user.role);
  return role === "admin" ? <Outlet /> : <Navigate to="/" />;
};

export const DPrivateRoutes = () => {
  const role = useSelector((state) => state.user.role);
  return role === "doctor" ? <Outlet /> : <Navigate to="/" />;
};
