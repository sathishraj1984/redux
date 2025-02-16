import React from 'react';
import { Route, Navigate, useLocation } from 'react-router-dom';
import { useAuth } from './Authentication';

// Create a Protected Route that checks if the user is authenticated
const PrivateRoute = ({ element }) => {
  const { isAuthenticated, userType, userDetailsFunc, userLogoutFunc } =  useAuth; // Check if the user is authenticated
  //const isAuthenticated = Boolean(localStorage.getItem('token'));  // Check if the user has a token (authentication check)
  const location = useLocation();  // Get the current location (so we can redirect after login)

  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} />;
  }

  return element;
};

export default PrivateRoute;
