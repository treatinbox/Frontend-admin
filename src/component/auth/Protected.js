import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { isAutheticated } from "./authHelper";

const PrivateRoute = () => {
  const { token } = isAutheticated();
  return token ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateRoute;
