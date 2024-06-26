import React, { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
const Userdashboard = () => {
const [authenticated, setauthenticated] = useState(null);
  useEffect(() => {
    const loggedInUser = localStorage.getItem("authenticated");
    if (loggedInUser) {
      setauthenticated(loggedInUser);
    }
  }, []);

if (!authenticated) {
  return <Navigate replace to="/login" />;
} else {
  return (
    <div>
      <p>Welcome to your Dashboard</p>
    </div>
  );
}
};
export default Userdashboard;