import React from "react";
import { IoNotificationsOutline } from "react-icons/io5";
import { LuWallet } from "react-icons/lu";

const Navbar = () => {
  return (
    <div className="w-full h-12  sticky top-0 z-40 navbarStyle">
      <div className="h-full w-auto flex items-center justify-end px-4 gap-4">
        {/* <button className="text-2xl p3">
          <LuWallet />
        </button> */}
        <button className="text-2xl p3">
          <IoNotificationsOutline />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
