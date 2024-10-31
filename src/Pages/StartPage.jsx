import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { login } from "../Redux/Auth/authSlice";
import Background from "../assets/background.webp";
import { RiSecurePaymentLine } from "react-icons/ri";
import { RiRefund2Line } from "react-icons/ri";
import { SiRazorpay } from "react-icons/si";
import { useNavigate } from "react-router-dom";

const StartPage = () => {
  const dispatch = useDispatch();
  const isUser = useSelector((state) => state.auth.isLoggedIn);

  const navigate = useNavigate();
  return (
    <div className="max-w-xl h-screen mx-auto flex flex-col justify-center bg-red-950 ">
      <div>
        <h1 className="text-center font-semibold text-4xl my-2 text-white">
          TeamXe-Sports
        </h1>
      </div>
      <div className="w-3/4 h-[50vh] mx-auto">
        <img src={Background} alt="" className="w-full" />
      </div>

      <button
        onClick={() => navigate("/login")}
        className="text-md py-3 w-[90%] mx-auto my-2 bottom-4 font-semibold rounded-md bg-white text-black"
      >
        Login
      </button>
      <button
        onClick={() => navigate("/sign-up")}
        className="text-md py-3 w-[90%] mx-auto my-4 bottom-4 font-semibold rounded-md bg-white text-black"
      >
        Sign up
      </button>

      <div>
        <ul className="w-full flex justify-center gap-4 text-gray-300">
          <li className=" text-center flex items-center max-sm:text-[11px]">
            <RiSecurePaymentLine size={20} />
            Secure Payment
          </li>
          <li className=" text-center flex items-center max-sm:text-[11px]">
            <RiRefund2Line size={20} />
            Full Refund
          </li>
          <li className=" text-center flex items-center max-sm:text-[11px]">
            <SiRazorpay size={20} />
            Powered By Razorpay
          </li>
        </ul>
      </div>
    </div>
  );
};

export default StartPage;
