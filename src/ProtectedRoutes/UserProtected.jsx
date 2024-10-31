import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
const UserProtected = ({ Component }) => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const naviagte = useNavigate();

  useEffect(() => {
    if (!isLoggedIn) {
      return naviagte("/start");
    }
  }, []);

  return <Component />;
};

export default UserProtected;
