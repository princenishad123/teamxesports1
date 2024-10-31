import React, { useState } from "react";
import { useGetWithdrawalsQuery } from "../../Redux/querySlice";
import { BsThreeDotsVertical } from "react-icons/bs";
import axios from "axios";
import toast from "react-hot-toast";
const Withdrawals = () => {
  const { data } = useGetWithdrawalsQuery();
  const [showCount, setShowCount] = useState(null);
  const statusClasses = {
    Pending: "bg-yellow-200 text-yellow-600",
    Active: "bg-green-200 text-green-600",
    Inactive: "bg-red-200 text-red-600",
    "On Sale": "bg-blue-200 text-blue-600",
    Bouncing: "bg-purple-200 text-purple-600",
  };

  const showStatus = (index) => {
    setShowCount(index);

    if (showCount) {
      setShowCount(null);
    }
  };

  const updateStatus = (status, id) => {
    axios
      .patch(`/user/update-withdraw/${id}`, {
        status: status,
      })
      .then((res) => {
        setShowCount(null);
        toast.success("Status Update");
      })

      .catch((err) => console.log(err));
  };
  return (
    <div>
      <div>
        <div className=" bg-gray-100 min-h-screen">
          <div className="bg-white shadow rounded-lg p-4">
            <div className="flex justify-between items-center mb-4">
              <div>
                <h2 className="text-xl font-semibold">Withdrawals</h2>
              </div>

              <form>
                <input
                  type="text"
                  name="bgmiId"
                  placeholder="Enter BGMI Player Id"
                  className="w-44 py-1 px-2 mb-4 mx-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Enter email"
                  className="w-44 py-1 px-2 mx-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600"
                />
                <button className="px-4 py-2 bg-indigo-700 shadow-lg shadow-indigo-100 text-white rounded-md">
                  Search user
                </button>
              </form>
            </div>
            <table className="min-w-full bg-white">
              <thead>
                <tr>
                  <th className="px-4 py-2 border-b text-start">Name</th>
                  <th className="px-4 py-2 border-b text-start">User Id</th>
                  <th className="px-4 py-2 border-b text-start">Email</th>
                  <th className="px-4 py-2 border-b text-start">UPI</th>
                  <th className="px-4 py-2 border-b text-start">Amount</th>
                  <th className="px-4 py-2 border-b text-start">Status</th>
                  <th className="px-4 py-2 border-b text-start">Action</th>
                </tr>
              </thead>
              <tbody>
                {data?.data?.map((product, index) => (
                  <tr key={index} className="hover:bg-gray-100">
                    <td className="px-4 py-3 border-b">{product.name}</td>
                    <td className="px-4 py-3 border-b">{product._id}</td>
                    <td className="px-4 py-3 border-b">{product.email}</td>
                    <td className="px-4 py-3 border-b">{product.upi}</td>
                    <td className="px-4 py-3 border-b">{product.amount}</td>
                    <td
                      className={`px-4 py-3 border-b font-medium ${
                        product?.status == "Processing"
                          ? " text-orange-600"
                          : product?.status == "Rejected"
                          ? " text-red-600"
                          : " text-green-700"
                      }`}
                    >
                      {product?.status}
                    </td>
                    <td className="px-4 py-3 border-b relative">
                      <div
                        className={`w-44 ${
                          showCount == index + 1 ? "" : "hidden"
                        } h-auto shadow-xl border bg-white absolute left-[-165px] top-3 p-2`}
                      >
                        <ul>
                          <li>
                            <button
                              onClick={() =>
                                updateStatus("Processing", product._id)
                              }
                              className="text-md font-semibold py-1 w-full text-start rounded-md hover:bg-orange-50 text-orange-500"
                            >
                              Procesing
                            </button>
                          </li>
                          <li>
                            <button
                              onClick={() =>
                                updateStatus("Rejected", product._id)
                              }
                              className="text-md font-semibold py-1 w-full text-start rounded-md hover:bg-red-50 text-red-600"
                            >
                              Rejected
                            </button>
                          </li>
                          <li>
                            <button
                              onClick={() =>
                                updateStatus("Confirmed", product._id)
                              }
                              className="text-md font-semibold py-1 w-full text-start rounded-md hover:bg-green-50 text-green-600"
                            >
                              Confirmed
                            </button>
                          </li>
                        </ul>
                      </div>
                      <button
                        onClick={() => showStatus(index + 1)}
                        className="w-8 grid place-content-center rounded-md bg-green-100 h-8  "
                      >
                        <BsThreeDotsVertical />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Withdrawals;
