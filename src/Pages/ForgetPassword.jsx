import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import { useSelector, useDispatch } from "react-redux";
import { login } from "../Redux/Auth/authSlice";
import ButtonSpinner from "../Component/ButtonSpinner";
import { LuEye } from "react-icons/lu";
import { LuEyeOff } from "react-icons/lu";

const ForgetPassword = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const dispatch = useDispatch();
  const [message, setMessage] = useState({
    message: "",
    status: false,
  });
  const handleForm = () => {
    setIsLoading(true);

    axios
      .post("/user/send-otp", {
        email,
      })
      .then((res) => {
        setIsLoading(false);
        console.log(res);
        setMessage({
          message: res.data.message,
          status: res.data.status,
        });
        toast.success(res.data.message);
        if (res.data.token) {
          localStorage.setItem("token", JSON.stringify(res.data.token));
          localStorage.setItem("id", JSON.stringify(res.data.userId));
          dispatch(login());
          navigate("/");
        }

        // localStorage.setItem()
      })
      .catch((err) => {
        setIsLoading(false);
        console.log(err);
      });
  };

  const verifyOtp = () => {
    setIsLoading(true);

    axios
      .patch("/user/verify", {
        email,
        password,
        otp,
      })
      .then((res) => {
        setIsLoading(false);
        toast.success(res.data.message);
        navigate("/login");
      })
      .catch((err) => {
        setIsLoading(false);
        toast.error("Invalid OTP");
      });
  };
  return (
    <div className="max-w-xl h-screen relative bgwhite flex mx-auto justify-center items-center">
      <div className="h-full rounded-lg p-8 w-full max-w-md">
        <button
          onClick={() => navigate("/login")}
          className="text-gray-500 font-semibold text-sm mb-5"
        >
          &lt; Back
        </button>
        <h1 className="text-2xl font-semibold mb-6 text-red-700 ">
          Forget Password
        </h1>

        {/* Full Name Input */}

        <p className="text-center font-medium my-3 text-gray-500">
          {message?.message}
        </p>

        {/* Email Input */}

        <input
          type="email"
          name="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          placeholder="Enter Registered Email"
          className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
        />

        {/* Password Input */}
        <div className="border mb-4 border-gray-300 rounded-lg overflow-hidden flex justify-between items-center">
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            placeholder="Enter New Password"
            className="w-full p-3  focus:outline-none"
          />
          <span
            className=" w-8 h-8 mr-2 grid place-content-center text-gray-500 text-xl"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <LuEye /> : <LuEyeOff />}
          </span>
        </div>

        {message?.status ? (
          <input
            type="text"
            name="otp"
            onChange={(e) => setOtp(e.target.value)}
            value={otp}
            placeholder="Enter OTP"
            className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
          />
        ) : null}

        {/* Sign Up Button */}

        {message?.status ? null : (
          <button
            onClick={handleForm}
            className="w-full bg-red-700 text-white p-3 rounded-lg font-semibold hover:bg-red-600"
          >
            {isLoading ? <ButtonSpinner /> : "Reset Password"}
          </button>
        )}

        {message?.status ? (
          <button
            onClick={verifyOtp}
            className="w-full bg-red-700 text-white p-3 rounded-lg font-semibold hover:bg-red-600"
          >
            {isLoading ? <ButtonSpinner /> : "Verify OTP"}
          </button>
        ) : null}
      </div>
    </div>
  );
};

export default ForgetPassword;
