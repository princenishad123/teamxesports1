import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import { useSelector, useDispatch } from "react-redux";
import { login } from "../Redux/Auth/authSlice";
import ButtonSpinner from "../Component/ButtonSpinner";
import { LuEye } from "react-icons/lu";
import { LuEyeOff } from "react-icons/lu";

const Login = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();
  const handleForm = (e) => {
    e.preventDefault();
    setIsLoading(true);

    const formData = new FormData(e.target);
    const user = Object.fromEntries(formData.entries());

    axios
      .post("/user/login", { ...user })
      .then((res) => {
        setIsLoading(false);

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
            <p className=" my-3 text-sm">
              <NavLink
                to={"/forget-password"}
                className="text-indigo-500 underline"
              >
                Forget Password ?
              </NavLink>
            </p>

            {/* Sign Up Button */}
            <button className="w-full bg-red-700 text-white p-3 rounded-lg font-semibold hover:bg-red-600">
              {isLoading ? <ButtonSpinner /> : "Login"}
            </button>
          </form>

          {/* Social Media Sign Up */}

          {/* Already have an account */}
          <p className="text-center mt-4 text-sm">
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
