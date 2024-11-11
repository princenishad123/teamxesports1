import React from "react";
import { IoNotificationsOutline } from "react-icons/io5";
import { LuWallet } from "react-icons/lu";
import { IoWallet } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa6";
const Navbar = () => {
  return (
    <div className="w-full h-12  sticky top-0 z-40 navbarStyle">
      <div className="h-full w-auto flex items-center justify-end px-4 gap-4">
        {/* <button className="text-2xl p3">
          <LuWallet />
        </button> */}
        <NavLink to={"/account"}>
          <button className="text-2xl p3">
            <IoWallet />
          </button>
        </NavLink>

        <NavLink to={"https://wa.link/nsq79j"}>
          <button className="text-2xl p3">
            <FaWhatsapp />
          </button>
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
