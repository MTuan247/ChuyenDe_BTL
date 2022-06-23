import React from "react";
import {
  useLocation,
  Outlet,
  Navigate
} from "react-router-dom";
import { useSelector } from 'react-redux'

export function ProtectedRoute() {

  const user = useSelector((state) => state.userReducer.user);
  
  let location = useLocation();

  if (!user.Roles.includes("Admin")) {
    // Redirect them to the /login page, but save the current location they were
    // trying to go to when they were redirected. This allows us to send them
    // along to that page after they login, which is a nicer user experience
    // than dropping them off on the home page.
    return <Navigate to="/Home" state={{ from: location }} />;
  }

  return <Outlet />;
}