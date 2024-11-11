import axios from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";
import ButtonSpinner from "../Component/ButtonSpinner";
const Withdraw = () => {
  const [amount, setAmount] = useState("");
  const [upi, setUpi] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleWithdraw = (e) => {
    e.preventDefault();

    if (amount === "" || upi === "") {
      return toast.error("all field Required !");
    }

    if (amount < 50) {
      return toast.error("Minimun 50 Rs withdrawals");
    }

    setIsLoading(true);

    axios
      .post("/user/withdraw", {
        amount,
        upi,
      })
      .then((res) => {
        toast.success(res.data.message);
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);
      });
  };
  return (
    <div className="w-full p-4">
      <div>
        <h2 className="my-4 text-xl font-medium">Withdraw your money 😊</h2>

        <form onSubmit={handleWithdraw}>
          <input
            type="number"
            name="amount"
            onChange={(e) => setAmount(e.target.value)}
            value={amount}
            placeholder="Enter Amount"
            className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
          />
          <input
            type="text"
            name="upi"
            onChange={(e) => setUpi(e.target.value)}
            value={upi}
            placeholder="Enter Your UPI"
            className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
          />
          <button className="w-full bg-indigo-700 text-white p-3 rounded-lg font-semibold hover:bg-indigo-600">
            {isLoading ? <ButtonSpinner /> : " Withdraw"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Withdraw;
