import React, { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const AdminProtectedToute = ({ Component }) => {
  const navigate = useNavigate();
  const [admin, setAdmin] = useState(
    JSON.parse(localStorage.getItem("isAdmin"))
  );

  if (!admin) {
    location.replace("/");
    toast.error("This didn't work.");
  } else {
    return <Component />;
  }
};

export default AdminProtectedToute;
