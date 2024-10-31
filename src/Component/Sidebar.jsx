import React from "react";
import {
  FaRegBell,
  FaRegEnvelope,
  FaRegUser,
  FaRegCalendarAlt,
  FaRegFlag,
  FaRegListAlt,
  FaCog,
} from "react-icons/fa";
import { NavLink, useNavigate } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();
  return (
    <div className="h-full w-72 bg-white shadow-md ">
      {/* Top Section */}
      <div>
        <nav className="">
          <ul>
            <NavLink to={"/admin-account"}>
              <li className="px-6 py-2 cursor-pointer hover:bg-gray-100 flex items-center space-x-4">
                <FaRegListAlt />
                <span>Dashboard</span>
              </li>
            </NavLink>
            <NavLink to={"live-tournaments"}>
              <li className="px-6 py-2 cursor-pointer hover:bg-gray-100 flex items-center space-x-4">
                <FaRegUser />
                <span>Completed Tournaments</span>
              </li>
            </NavLink>

            <NavLink to={"completed-tournament"}>
              <li className="px-6 py-2 cursor-pointer hover:bg-gray-100 flex items-center space-x-4">
                <FaRegFlag />
                <span>Live Tounaments</span>
              </li>
            </NavLink>
            <NavLink to={"all-users"}>
              <li className="px-6 py-2 cursor-pointer hover:bg-gray-100 flex items-center space-x-4">
                <FaRegCalendarAlt />
                <span>Users</span>
              </li>
            </NavLink>
            <NavLink to={"withdrawals"}>
              <li className="px-6 py-2 cursor-pointer hover:bg-gray-100 flex items-center space-x-4">
                <FaRegUser />
                <span>Withdrawals</span>
              </li>
            </NavLink>
          </ul>
        </nav>
      </div>

      {/* Bottom Section */}
      <div className="mb-0">
        <nav className="px-6">
          <ul>
            <li className="flex items-center justify-between py-2">
              <span className="flex items-center space-x-4">
                <FaRegBell />
                <span>Notifications</span>
              </span>
              <span className="bg-green-400 text-white text-xs px-2 py-1 rounded-full">
                24
              </span>
            </li>
            <li className="flex items-center justify-between py-2">
              <span className="flex items-center space-x-4">
                <FaRegEnvelope />
                <span>Chat</span>
              </span>
              <span className="bg-yellow-400 text-white text-xs px-2 py-1 rounded-full">
                8
              </span>
            </li>
            <li className="py-2">
              <span className="flex items-center space-x-4">
                <FaCog />
                <span>Settings</span>
              </span>
            </li>
          </ul>
        </nav>

        {/* Profile */}
        <div className="px-6 mt-4">
          <button
            onClick={() => navigate("create-tournament")}
            className="py-2 px-4 rounded-md bg-indigo-700 shadow-lg shadow-indigo-400 text-white"
          >
            Create Tournaments
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
