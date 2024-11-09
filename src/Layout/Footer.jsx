import React from "react";
import { FiHome } from "react-icons/fi";
import { SiContentful } from "react-icons/si";
import { GiFrogPrince } from "react-icons/gi";
import { GrAnnounce } from "react-icons/gr";
import { MdOutlineReport } from "react-icons/md";
import { LuUserCircle } from "react-icons/lu";
import { NavLink, useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  return (
    <div className={`w-full h-14 sticky bottom-0 z-40  bg-slate-50 `}>
      <div className="w-full h-full py-3 flex justify-evenly items-center">
        <NavLink
          to={"/"}
          className={({ isActive }) =>
            isActive ? "text-red-600 border-t-2 border-red-600 " : ""
          }
        >
          <button className="w-12 h-14 text-xl flex flex-col justify-center items-center ">
            <FiHome className="text-md" />
            <span className={"text-[13px]"}>Home</span>
          </button>
        </NavLink>

        <NavLink
          to={"/my-contest"}
          className={({ isActive }) =>
            isActive ? "text-red-600 border-t-2 border-red-600 " : ""
          }
        >
          <button className="w-auto h-14 text-xl flex flex-col justify-center items-center ">
            <SiContentful className="text-md" />
            <span className="text-[13px]">My Contest</span>
          </button>
        </NavLink>

        <NavLink
          to={"/winners"}
          className={({ isActive }) =>
            isActive ? "text-red-600 border-t-2 border-red-600 " : ""
          }
        >
          <button className="w-12 h-14 text-xl flex flex-col justify-center items-center ">
            <GiFrogPrince className="text-md" />
            <span className="text-[13px]">Winners</span>
          </button>
        </NavLink>

        <NavLink
          to={"/account"}
          className={({ isActive }) =>
            isActive ? "text-red-600 border-t-2 border-red-600 " : ""
          }
        >
          <button className="w-12 h-14 text-xl flex flex-col justify-center items-center ">
            <LuUserCircle className="text-md" />
            <span className="text-[13px]">Profile</span>
          </button>
        </NavLink>
      </div>
    </div>
  );
};

export default Footer;
