import React from "react";
import "./Layout.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { login } from "../Redux/Auth/authSlice";
import { useSelector } from "react-redux";
import toast, { Toaster } from "react-hot-toast";
const Layout = ({ children }) => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  return (
    <div className="w-full layout h-screen overflow-hidden  mx-auto">
      {isLoggedIn ? <Navbar /> : null}

      <main
        className={`customStyle overflow-y-scroll ${
          isLoggedIn ? "" : "h-screen p-0"
        }`}
      >
        {children}
        <Toaster />
      </main>

      {isLoggedIn ? <Footer /> : null}
    </div>
  );
};

export default Layout;
