import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import { useSelector, useDispatch } from "react-redux";
import { login } from "../Redux/Auth/authSlice";

const Login = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const handleForm = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const user = Object.fromEntries(formData.entries());

    axios
      .post("/user/login", { ...user })
      .then((res) => {
        toast.success(res.data.message);
        if (res.data.token) {
          localStorage.setItem("token", JSON.stringify(res.data.token));
          dispatch(login());
          navigate("/");
        }

        // localStorage.setItem()
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <div className="max-w-xl h-screen relative bgwhite flex mx-auto justify-center items-center">
        <div className="h-full rounded-lg p-8 w-full max-w-md">
          <button
            onClick={() => navigate("/start")}
            className="text-gray-500 font-semibold text-sm mb-5"
          >
            &lt; Back
          </button>
          <h1 className="text-2xl font-semibold mb-6 text-red-700 ">Login</h1>

          {/* Full Name Input */}

          {/* Email Input */}
          <form onSubmit={handleForm}>
            <input
              type="email"
              name="email"
              placeholder="Enter Email"
              className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
            />

            {/* Password Input */}
            <input
              type="password"
              name="password"
              placeholder="Enter Password"
              className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
            />

            {/* Checkbox */}
            <div className="flex items-center mb-4">
              <label htmlFor="agree" className="text-sm">
                Forget Password ?{" "}
                <a href="#" className="text-indigo-500 underline">
                  Reset Now
                </a>
              </label>
            </div>

            {/* Sign Up Button */}
            <button className="w-full bg-red-700 text-white p-3 rounded-lg font-semibold hover:bg-red-600">
              Login
            </button>
          </form>

          {/* Social Media Sign Up */}
          <div className="flex justify-between items-center my-6">
            <div className="border-t w-1/4"></div>
            <p className="text-gray-500 text-sm">Login with</p>
            <div className="border-t w-1/4"></div>
          </div>

          <div className="flex justify-around mb-4">
            {/* Social Media Icons (replace with actual SVGs or icons) */}
            <button className="w-10 h-10 bg-blue-500 rounded-full flex justify-center items-center text-white font-semibold">
              F
            </button>
            <button className="w-10 h-10 bg-blue-400 rounded-full flex justify-center items-center text-white font-semibold">
              T
            </button>
            <button className="w-10 h-10 bg-red-500 rounded-full flex justify-center items-center text-white font-semibold">
              G
            </button>
            <button className="w-10 h-10 bg-black rounded-full flex justify-center items-center text-white font-semibold">
              A
            </button>
          </div>

          {/* Already have an account */}
          <p className="text-center text-sm">
            I have Not a account{" "}
            <NavLink to={"/sign-up"} className="text-indigo-500 underline">
              Sign up
            </NavLink>
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;
