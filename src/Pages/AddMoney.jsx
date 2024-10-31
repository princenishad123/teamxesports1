import React, { useState } from "react";
import { addMoney } from "../Redux/Auth/paymentSlice";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";

const AddMoney = () => {
  const [balance, setBalance] = useState(0);

  const dispatch = useDispatch();

  const handleMoneyAdd = (e) => {
    e.preventDefault();

    if (balance < 5) return toast.error("Minimum add balance ₹ 5");

    dispatch(addMoney(balance));
  };
  return (
    <div className="max w-xl mx-auto">
      <form onSubmit={handleMoneyAdd}>
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
      </form>
    </div>
  );
};

export default AddMoney;
