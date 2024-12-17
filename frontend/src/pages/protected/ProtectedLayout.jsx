import React from "react";
import { Outlet } from "react-router-dom";

const ProtectedLayout = () => {
  return <Outlet />;
};

export default ProtectedLayout;
