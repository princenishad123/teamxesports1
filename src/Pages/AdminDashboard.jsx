import React from "react";
import Sidebar from "../Component/Sidebar";
import { Outlet } from "react-router-dom";

const AdminDashboard = () => {
  return (
    <div>
      <div className="w-full h-auto flex justify-center">
        <div className="w-72 sticky left-0 top-0 h-[83vh]">
          <Sidebar />
        </div>

        <div className="w-full h-auto">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
