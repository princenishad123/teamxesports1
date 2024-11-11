import React from "react";

const TransactionHistory = ({ status, date, orderId, userId, amount }) => {
  return (
    <div className="w-full bg-white my-3 h-auto border p-2 rounded-xl">
      <h3 className={`text-md font-medium capitalize px-2 text-green-600`}>
        {status}
      </h3>
      <hr />
      <ul className="px-2">
        <li className="w-full text-sm py-1 border-b font-medium text-gray-500 flex justify-between items-center">
          <span>Amount</span>
          <span>₹ {amount}</span>
        </li>
        <li className="w-full text-sm py-1 border-b font-medium text-gray-500 flex justify-between items-center">
          <span>Transaction Id</span>
          <span>{userId}</span>
        </li>

        <li className="w-full  border-b py-1 text-sm font-medium text-gray-500 flex justify-between items-center">
          <span>Order Id</span>
          <span>{orderId}</span>
        </li>
        <li className="w-full  border-b py-1 text-sm font-medium text-gray-500 flex justify-between items-center">
          <span>Date</span>
          <span>{date}</span>
        </li>
      </ul>
    </div>
  );
};

export default TransactionHistory;
