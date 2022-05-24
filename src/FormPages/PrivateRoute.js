import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useGlobalContext } from "../Auth/ContextProvider";

export default function PrivateRoute() {
  const { auth } = useGlobalContext();

  return auth.status && <Outlet />;
}
