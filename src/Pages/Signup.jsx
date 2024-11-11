import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";
import ButtonSpinner from "../Component/ButtonSpinner";
import { LuEye } from "react-icons/lu";
import { LuEyeOff } from "react-icons/lu";
const Signup = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleForm = (e) => {
    e.preventDefault();
    setIsLoading(true);
    const formData = new FormData(e.target);
    const user = Object.fromEntries(formData.entries());
    setUserData(user);
    axios
      .post("/user/sign-up", { ...user })
      .then((res) => {
        setIsLoading(false);

        toast.success(res.data.message);
        navigate("/login");
      })
      .catch((err) => {
        setIsLoading(false);

        toast.error(err.response.data.message);
      });
  };

  return (
    <div>
      <div className="max-w-xl h-screen mx-auto relative bgwhite flex justify-center items-center">
        <div className="h-full rounded-lg p-8 w-full max-w-md">
          <button
            onClick={() => navigate("/start")}
            className="text-gray-500 font-semibold text-sm mb-5"
          >
            &lt; Back
          </button>
          <h1 className="text-2xl font-semibold mb-6 text-red-700 ">Sign up</h1>

          {/* Full Name Input */}
          <form onSubmit={handleForm}>
            <input
              type="text"
              name="name"
              placeholder="Enter Full Name"
              className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
            />

            {/* Email Input */}
            <input
              type="email"
              name="email"
              placeholder="Enter Email"
              className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
            />
            <input
              type="text"
              name="phoneNumber"
              placeholder="Enter Phone Number"
              className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
            />

            {/* Password Input */}
            <div className="border mb-4 border-gray-300 rounded-lg overflow-hidden flex justify-between items-center">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Enter Password"
                className="w-full p-3  focus:outline-none"
              />
              <span
                className=" w-8 h-8 mr-2 grid place-content-center text-gray-500 text-xl"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <LuEye /> : <LuEyeOff />}
              </span>
            </div>

            {/* Checkbox */}

            {/* Sign Up Button */}
            <button
              // onClick={() => setShowVerifyPage(true)}
              className="w-full bg-red-700 text-white p-3 rounded-lg font-semibold hover:bg-red-600"
            >
              {isLoading ? <ButtonSpinner /> : "Sign up"}
            </button>
          </form>

          {/* Social Media Sign Up */}

          {/* Already have an account */}
          <p className="text-center mt-4 text-sm">
            Already have an account?{" "}
            <NavLink to={"/login"} className="text-indigo-500 underline">
              Login
            </NavLink>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
