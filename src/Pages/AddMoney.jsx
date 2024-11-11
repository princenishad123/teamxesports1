import React, { useState } from "react";
import { addMoney } from "../Redux/Auth/paymentSlice";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import { NavLink } from "react-router-dom";

const AddMoney = () => {
  const [balance, setBalance] = useState(0);

  const dispatch = useDispatch();

  const handleMoneyAdd = (e) => {
    e.preventDefault();

    if (balance < 5) return toast.error("Minimum add balance ₹ 5");

    dispatch(addMoney(balance));
  };
  return (
    <div className="max w-xl mx-auto flex justify-center flex-col">
      {/* <form onSubmit={handleMoneyAdd}>
        <input
          type="number"
          name="money"
          onChange={(e) => setBalance(e.target.value)}
          placeholder="₹ Enter amount"
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
        />
        <p className="text-red-600 font-medium mb-4">Minimum add ₹ 5</p>

        <button className="w-full bg-indigo-700 text-white p-3 rounded-lg font-semibold hover:bg-indigo-500">
          Add money
        </button>
      </form> */}

      <h2 className="text-center text-xl font-medium ">How to add Money 👇</h2>

      <p className="text-center font-medium my-2 text-xl mt-8">
        Payment करते समय जिस Email से login किये थे | <br /> वही email डालकर
        payment करे | <br /> या रेजिस्ट्रेड मोबाइल नंबर डाले 
      </p>

      <NavLink
        to={"https://rzp.io/rzp/team04"}
        className="max-w-lg mt-10 px-12 mx-auto bg-red-700 text-white p-3 rounded-lg font-semibold hover:bg-red-600"
      >
        <button>Add Balance</button>
      </NavLink>
    </div>
  );
};

export default AddMoney;
