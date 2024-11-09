import React, { useEffect, useState } from "react";
import Qonquere from "../assets/qonquere.webp";
import Userimage from "../assets/userImage.webp";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../Redux/Auth/authSlice";
import { useNavigate } from "react-router-dom";
import { useGetUserAccountQuery } from "../Redux/querySlice";
import { addMoney } from "../Redux/Auth/paymentSlice";
import Loader from "../Component/Loader";
import axios from "axios";
const Account = () => {
  const { data, isLoading } = useGetUserAccountQuery();

  localStorage.setItem("isAdmin", data?.isAdmin);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogout = () => {
    dispatch(logout());
    localStorage.clear();
    sessionStorage.clear();
    navigate("/login");
  };

  return (
    <div>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="max-w-xl px-3 mx-auto">
          <h3 className="p-4 text-md font-medium text-slate-600">My Profile</h3>
          <div className="w-full h-auto relative flex items-center py-2 gap-4 px-4">
            <div className="w-20 h-20 relative flex items-center justify-cente overflow-hidden">
              <div className="r">
                <img
                  src={Userimage}
                  alt=""
                  className="w-[80%]  z-0 ml-2 drop-shadow-lg"
                />
              </div>
            </div>
            <div>
              <h2 className="text-xl font-semibold leading-3">{data?.name}</h2>
              <span className="text-sm">{data?.email}</span> <br />
              <button className="text-[12px]  px-1 text-center bg-slate-200 text-black rounded-md">
                Edit Profile
              </button>
              {data?.isAdmin ? (
                <button
                  onClick={() => navigate("/admin-account")}
                  className="text-[12px] mx-2  px-1 text-center bg-green-200 font-semibold text-black rounded-md"
                >
                  Admin
                </button>
              ) : null}
            </div>
          </div>

          <div className="my-4">
            <div className="w-full flex justify-center gap-4">
              <div className="w-1/2 h-auto p-2 rounded-md shadow-md bg-indigo-600 text-white">
                <h2 className="text-sm font-medium">Total Balance</h2>
                <h3 className="font-semibold text-xl">₹ {data?.wallet}</h3>
              </div>
              <div className="w-1/2 h-auto p-2 rounded-md shadow-md bg-red-700 text-white">
                <h2 className="text-sm font-medium">Match Played</h2>
                <h3 className="font-semibold text-xl">
                  {data?.tournaments?.length}
                </h3>
              </div>
            </div>
            <div className="w-full flex my-2 justify-center gap-4">
              <button
                onClick={() => navigate("/add-money")}
                className="w-1/2 h-auto p-3 rounded-md shadow-md bg-orange-600 text-white"
              >
                <h2 className="text-md font-medium">Add Money</h2>
              </button>
              <button
                onClick={() => navigate("/withdraw")}
                className="w-1/2 h-auto p-3 rounded-md shadow-md bg-green-600 text-white"
              >
                <h2 className="text-md font-medium">Withdraw</h2>
              </button>
            </div>
            <div className="w-full flex my-2 justify-center gap-4">
              <button
                onClick={() => navigate("/transactions/withdraw")}
                className="w-1/2 h-auto p-3 rounded-md shadow-md bg-black text-white"
              >
                <h2 className="text-md font-medium">Withdraw History</h2>
              </button>
              <button
                onClick={() => navigate("/transactions/deposites")}
                className="w-1/2 h-auto p-3 rounded-md shadow-md bg-purple-600 text-white"
              >
                <h2 className="text-md font-medium">Deposit History</h2>
              </button>
            </div>
          </div>

          <div>
            <button
              onClick={handleLogout}
              className="py-2 mt-4 w-full text-center border border-red-600 text-red-600 rounded-sm"
            >
              Log Out
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Account;
