import React from "react";
import { Navigate, Outlet } from "react-router-dom";

function ProtectedRoutes({ auth, redirectpath = "/login", children }) {
  if (!auth) {
    return <Navigate to={redirectpath} replace />;
  }
  return children ? children : <Outlet />;
}

export default ProtectedRoutes;
