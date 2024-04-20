import React from "react";
import { Navigate } from "react-router-dom";
import Preloader from "../Preloader/Preloader";

function ProtectedRoute({ element: Component, ...props }) {
  return props.isLoading ? (
    <Preloader />
  ) : props.isLoggedIn ? (
    <Component {...props} />
  ) : (
    <Navigate to="/" />
  );
}

export default ProtectedRoute;
